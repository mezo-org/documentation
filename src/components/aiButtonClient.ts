export default function initAIButton(container: HTMLElement): void {
  if (!container) return;
  const pageTitle = container.getAttribute('data-page-title') || 'Documentation';

  const toggle = container.querySelector('.llm-actions__toggle') as HTMLButtonElement | null;
  const menu = container.querySelector('#llm-actions-menu') as HTMLDivElement | null;
  const toast = container.querySelector('.llm-actions__toast') as HTMLDivElement | null;

  let closeTimeout: number | undefined;

  function showToast(message: string, type: 'success' | 'error' = 'success') {
    if (!toast) return;
    toast.textContent = message;
    toast.className = `llm-actions__toast llm-actions__toast--${type} llm-actions__toast--visible`;
    if (closeTimeout) window.clearTimeout(closeTimeout);
    closeTimeout = window.setTimeout(() => {
      toast.classList.remove('llm-actions__toast--visible');
    }, 3000);
  }

  function track(method: string) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.plausible) {
        w.plausible('llm_share', { props: { method } });
      } else if (w.gtag) {
        w.gtag('event', 'llm_share', { method, page_location: location.href });
      } else if (w.analytics?.track) {
        w.analytics.track('LLM Share', { method, page: location.href });
      }
    } catch {
      // no-op
    }
  }

  function toggleMenu(open?: boolean) {
    if (!toggle || !menu) return;
    const shouldOpen = typeof open === 'boolean' ? open : menu.getAttribute('aria-hidden') === 'true';
    menu.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  }

  function getContentRoot(): Element | null {
    const candidates = [
      '.sl-markdown-content',
      'main article',
      'article',
      '.content-wrapper',
      'main .content',
      '.doc-content',
    ];
    for (const sel of candidates) {
      const el = document.querySelector(sel);
      if (el) return el;
    }
    return document.body;
  }

  async function getMarkdownFromSelectionOrPage(): Promise<string> {
    const root = getContentRoot();
    const selection = window.getSelection();
    const hasRange = selection && selection.rangeCount > 0 && selection.toString().trim();
    let sourceHtml = '';

    if (hasRange && selection) {
      const range = selection.getRangeAt(0).cloneRange();
      const div = document.createElement('div');
      div.appendChild(range.cloneContents());
      sourceHtml = div.innerHTML;
    } else {
      sourceHtml = (root as HTMLElement)?.innerHTML || document.body.innerHTML;
    }

    const mod = await import('turndown');
    const Turndown = (mod as any).default || mod;
    const td = new Turndown({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
    td.addRule('codeBlocks', {
      filter: ['pre'],
      replacement: function (_content: string, node: Element) {
        const code = node.querySelector('code');
        const className = code?.className || '';
        const match = className.match(/language-(\w+)/);
        const lang = match ? match[1] : '';
        return `\n\`\`\`${lang}\n${node.textContent}\n\`\`\`\n`;
      },
    });
    return td.turndown(sourceHtml);
  }

  async function handleCopy() {
    try {
      const md = await getMarkdownFromSelectionOrPage();
      await navigator.clipboard.writeText(md);
      showToast('Copied to clipboard!', 'success');
      track('copy_page');
      toggleMenu(false);
    } catch {
      showToast('Failed to copy', 'error');
    }
  }

  async function handleViewMd() {
    try {
      const md = await getMarkdownFromSelectionOrPage();
      const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const slug = (pageTitle || 'page').replace(/\s+/g, '-').toLowerCase();
      a.href = url;
      a.download = `${slug}.md`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      showToast(`Downloaded ${slug}.md`, 'success');
      track('view_md');
      toggleMenu(false);
    } catch {
      showToast('Failed to download', 'error');
    }
  }

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  container.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const button = target.closest('.llm-actions__item') as HTMLElement | null;
    if (!button) return;
    if (button.matches('[data-action="copy"]')) {
      e.preventDefault();
      handleCopy();
    } else if (button.matches('[data-action="view-md"]')) {
      e.preventDefault();
      handleViewMd();
    } else if (button.matches('a[data-action]')) {
      const method = button.getAttribute('data-action') || '';
      if (method) track(method);
      toggleMenu(false);
    }
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target as Node)) {
      toggleMenu(false);
    }
  });

  container.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      toggleMenu(false);
      toggle?.focus();
    }
  });
}


