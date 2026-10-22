import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import config from 'virtual:starlight/user-config';

const localeSegments = Object.keys(config.locales ?? {})
  .filter((locale) => locale !== 'root')
  .map((locale) => (locale.startsWith('docs/') ? locale.slice('docs/'.length) : locale));

const localeSegmentSet = new Set(localeSegments);
const docsLocalePattern = /^\/docs\/([^/]+)\/docs(?:\/|$)/;
const summaryLinkPattern = /^\s*[*+-]\s+\[([^\]]+)\]\(([^)]+)\)/;

type LocaleNavigationLabels = {
  pageLabels: Map<string, string>;
  groupLabels: Map<string, string>;
  topicLabels: Map<string, string>;
};

const localeNavigationCache = new Map<string, LocaleNavigationLabels>();

export function getActiveDocsLocale(pathname: string): string | undefined {
  const localeMatch = pathname.match(docsLocalePattern);
  const locale = localeMatch?.[1];

  return locale && localeSegmentSet.has(locale) ? locale : undefined;
}

export function localizeCurrentDocsPath(pathname: string, locale: string | undefined): string {
  const localizedMatch = pathname.match(/^\/docs\/([^/]+)\/docs(\/.*)?$/);
  if (localizedMatch && localeSegmentSet.has(localizedMatch[1])) {
    const rest = localizedMatch[2] ?? '/';
    return locale ? `/docs/${locale}/docs${rest}` : `/docs${rest}`;
  }

  const rootMatch = pathname.match(/^\/docs(\/.*)?$/);
  if (rootMatch) {
    const rest = rootMatch[1] ?? '/';
    return locale ? `/docs/${locale}/docs${rest}` : `/docs${rest}`;
  }

  return pathname;
}

export function localizeDocsHref(href: string, locale: string | undefined): string {
  if (/^(?:[a-z]+:)?\/\//i.test(href) || href.startsWith('#')) return href;
  return localizeCurrentDocsPath(href, locale);
}

export function normalizeDocsPath(path: string): string {
  let normalized = path.split('#')[0]?.split('?')[0] ?? '';
  normalized = normalized.replace(/^(?:[a-z]+:)?\/\/[^/]+/i, '');

  const localizedDocsMatch = normalized.match(/^\/docs\/([^/]+)\/docs\/?(.*)$/);
  if (localizedDocsMatch && localeSegmentSet.has(localizedDocsMatch[1])) {
    normalized = localizedDocsMatch[2] ?? '';
  } else {
    normalized = normalized.replace(/^\/docs\/?/, '');
  }

  normalized = normalized.replace(/^\/+/, '').replace(/\/+$/, '');
  normalized = normalized.replace(/\.(?:md|mdx)$/i, '');

  if (/^(?:README|index)$/i.test(normalized)) return '';

  normalized = normalized.replace(/\/(?:README|index)$/i, '');
  return normalized.replace(/^\/+/, '').replace(/\/+$/, '');
}

export function getLocaleNavigationLabels(locale: string | undefined): LocaleNavigationLabels {
  if (!locale) return { pageLabels: new Map(), groupLabels: new Map(), topicLabels: new Map() };

  const cached = localeNavigationCache.get(locale);
  if (cached) return cached;

  const pageLabels = new Map<string, string>();
  const groupLabels = new Map<string, string>();
  const topicLabels = new Map<string, string>();
  const summaryPath = resolve(process.cwd(), `src/content/docs/docs/${locale}/docs/_SUMMARY.md`);

  try {
    const summary = readFileSync(summaryPath, 'utf8');

    for (const line of summary.split('\n')) {
      const match = line.match(summaryLinkPattern);
      if (!match) continue;

      const [, rawLabel, rawTarget] = match;
      const key = normalizeDocsPath(rawTarget);
      if (!key) continue;

      const label = rawLabel.trim();
      pageLabels.set(key, label);

      if (/(?:^|\/)README\.(?:md|mdx)$/i.test(rawTarget.trim())) {
        groupLabels.set(key, label);
      }

      if (!key.includes('/') && groupLabels.has(key)) {
        topicLabels.set(key, label);
      }
    }
  } catch {
    // Fall back to default English labels when a locale summary is unavailable.
  }

  const labels = { pageLabels, groupLabels, topicLabels };
  localeNavigationCache.set(locale, labels);
  return labels;
}
