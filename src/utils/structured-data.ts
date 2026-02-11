/**
 * Structured-data helpers — single source of truth for all JSON-LD schemas.
 * Used exclusively by the Head.astro override at SSR / build time.
 */

// ---------------------------------------------------------------------------
// Schema builders
// ---------------------------------------------------------------------------

export function buildWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': ['WebPage', 'TechArticle'],
    headline: title,
    name: title,
    description,
    url,
    mainEntityOfPage: url,
    publisher: {
      '@type': 'Organization',
      name: 'Mezo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://raw.githubusercontent.com/mezo-org/documentation/main/src/assets/Mezo-Mark-Red.svg',
      },
      sameAs: [
        'https://github.com/mezo-org',
        'https://x.com/MezoNetwork',
        'https://discord.mezo.org',
      ],
    },
  };
}

const LABEL_MAP: Record<string, string> = {
  docs: 'Documentation',
  users: 'User Documentation',
  developers: 'Developer Documentation',
  mainnet: 'Mainnet',
  musd: 'MUSD',
  mats: 'mats',
  mezo: 'MEZO',
  'mezo-earn': 'Mezo Earn',
  lock: 'Lock',
  vebtc: 'veBTC',
  vemezo: 'veMEZO',
  pools: 'Pools',
  vote: 'Vote',
  vaults: 'Vaults',
  features: 'Mezo Earn',
  resources: 'Resources',
  'getting-started': 'Getting Started',
  introduction: 'Introduction',
  bridge: 'Bridge',
  architecture: 'Architecture',
  oracles: 'Oracles',
  overview: 'Overview',
  integrations: 'Integrations',
  lolli: 'Lolli',
  'mezo-nodes': 'Mezo Nodes',
  subgraphs: 'Subgraphs',
  chains: 'Chains',
};

export function buildBreadcrumbSchema(
  pathname: string,
  pageTitle: string,
  origin: string
) {
  const path = pathname.replace(/\/$/, '');
  const parts = path.split('/').filter(Boolean);
  if (!parts.length) return null;

  let acc = '';
  const items = parts.map((seg, idx) => {
    acc += '/' + seg;
    const isLast = idx === parts.length - 1;
    const name =
      isLast && pageTitle
        ? pageTitle
        : LABEL_MAP[seg] ?? seg.replace(/-/g, ' ');
    return {
      '@type': 'ListItem' as const,
      position: idx + 1,
      name,
      item: origin + acc + '/',
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function buildFAQSchema(
  url: string,
  questions: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntityOfPage: url,
    url,
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function buildHowToSchema(
  url: string,
  name: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    mainEntityOfPage: url,
    url,
    step: steps.map((s, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

// ---------------------------------------------------------------------------
// Markdown parsers
// ---------------------------------------------------------------------------

type FAQFormat = 'h2' | 'h4' | 'bold-under-h2' | 'h3-under-h2';

/**
 * Extract Q&A pairs from raw markdown.
 *
 * Supported formats:
 *  - `h2`            : questions are `## Heading`
 *  - `h4`            : questions are `#### Heading`
 *  - `bold-under-h2` : questions are `**Bold?**` under a `## FAQs` heading
 *  - `h3-under-h2`   : questions are `### Heading` under a `## FAQs` heading
 */
export function extractFAQsFromMarkdown(
  body: string,
  format: FAQFormat
): { question: string; answer: string }[] {
  const lines = body.split('\n');

  if (format === 'h2') {
    return extractByHeadingLevel(lines, 2);
  }

  if (format === 'h4') {
    return extractByHeadingLevel(lines, 4);
  }

  if (format === 'h3-under-h2') {
    const faqLines = extractSectionUnderH2FAQ(lines);
    return extractByHeadingLevel(faqLines, 3);
  }

  if (format === 'bold-under-h2') {
    const faqLines = extractSectionUnderH2FAQ(lines);
    return extractBoldQuestions(faqLines);
  }

  return [];
}

/** Get lines between `## FAQs` (or similar) and the next `## ` heading. */
function extractSectionUnderH2FAQ(lines: string[]): string[] {
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+FAQ/i.test(lines[i]!)) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return [];

  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i]!) && !/^###/.test(lines[i]!)) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end);
}

/** Extract Q&A using heading level (##, ###, or ####). */
function extractByHeadingLevel(
  lines: string[],
  level: number
): { question: string; answer: string }[] {
  const prefix = '#'.repeat(level) + ' ';
  const results: { question: string; answer: string }[] = [];
  let currentQuestion = '';
  let answerLines: string[] = [];

  const flush = () => {
    if (currentQuestion) {
      const answer = answerLines
        .join('\n')
        .trim()
        .replace(/\s+/g, ' ');
      if (answer) {
        results.push({ question: currentQuestion, answer });
      }
    }
  };

  for (const rawLine of lines) {
    const line = rawLine;
    if (line.startsWith(prefix)) {
      flush();
      // Strip HTML anchor tags, e.g. `<a href="..." id="..."></a>`
      currentQuestion = line
        .slice(prefix.length)
        .replace(/<a[^>]*>.*?<\/a>/gi, '')
        .trim();
      answerLines = [];
    } else if (currentQuestion) {
      // Stop collecting if we hit a same-or-higher-level heading
      const headingMatch = line.match(/^(#{1,6})\s/);
      if (headingMatch && headingMatch[1]!.length <= level) {
        flush();
        currentQuestion = '';
        answerLines = [];
      } else {
        answerLines.push(line);
      }
    }
  }
  flush();
  return results;
}

/** Extract Q&A where questions are `**Bold text?**` lines. */
function extractBoldQuestions(
  lines: string[]
): { question: string; answer: string }[] {
  const results: { question: string; answer: string }[] = [];
  let currentQuestion = '';
  let answerLines: string[] = [];

  const flush = () => {
    if (currentQuestion) {
      const answer = answerLines
        .join('\n')
        .trim()
        .replace(/\s+/g, ' ');
      if (answer) {
        results.push({ question: currentQuestion, answer });
      }
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    // Match **Some question text?** (entire line is bold)
    const boldMatch = line.match(/^\*\*(.+?)\*\*$/);
    if (boldMatch) {
      flush();
      currentQuestion = boldMatch[1]!.trim();
      answerLines = [];
    } else if (currentQuestion) {
      // Stop if we hit a heading
      if (/^#{1,6}\s/.test(line)) {
        flush();
        currentQuestion = '';
        answerLines = [];
      } else {
        answerLines.push(rawLine);
      }
    }
  }
  flush();
  return results;
}

/**
 * Extract how-to steps from raw markdown/MDX.
 *
 * Looks for ordered list items (1. 2. 3.) inside `<Steps>` blocks,
 * or plain numbered lists under how-to-related headings.
 * Returns step name (first ~100 chars) and full text.
 */
export function extractStepsFromMarkdown(
  body: string
): { name: string; text: string }[] {
  // Strategy 1: Extract from <Steps> blocks
  const stepsBlocks = body.match(/<Steps>([\s\S]*?)<\/Steps>/g);
  if (stepsBlocks && stepsBlocks.length > 0) {
    const allSteps: { name: string; text: string }[] = [];
    for (const block of stepsBlocks) {
      const inner = block.replace(/<\/?Steps>/g, '');
      const steps = parseOrderedList(inner);
      allSteps.push(...steps);
    }
    if (allSteps.length >= 2) return allSteps;
  }

  // Strategy 2: Find ordered lists anywhere in the document
  const steps = parseOrderedList(body);
  if (steps.length >= 2) return steps;

  // Strategy 3: Use h2 headings as steps (for narrative how-to guides)
  const h2Steps = parseH2AsSteps(body);
  if (h2Steps.length >= 2) return h2Steps;

  return [];
}

/** Parse a block of markdown for numbered list items (1. text). */
function parseOrderedList(
  text: string
): { name: string; text: string }[] {
  const lines = text.split('\n');
  const steps: { name: string; text: string }[] = [];
  let currentText = '';

  const flush = () => {
    const trimmed = currentText.trim();
    if (trimmed) {
      // Clean up markdown formatting for the text
      const cleaned = trimmed
        .replace(/!\[[^\]]*\]\([^)]+\)/g, '')       // ![alt](url) → remove images
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')    // [text](url) → text
        .replace(/\*\*([^*]+)\*\*/g, '$1')          // **bold** → bold
        .replace(/`([^`]+)`/g, '$1')                // `code` → code
        .replace(/\s+/g, ' ')
        .trim();
      const name = cleaned.length > 100 ? cleaned.slice(0, 97) + '...' : cleaned;
      steps.push({ name, text: cleaned });
    }
  };

  for (const line of lines) {
    // Match lines starting with a number followed by a period
    const match = line.match(/^\s*\d+\.\s+(.*)/);
    if (match) {
      flush();
      currentText = match[1]!;
    } else if (currentText && line.trim()) {
      // Continuation of current step (indented or non-empty non-list line)
      // Only continue if it's not a new top-level element
      if (/^\s{2,}/.test(line) || (!/^\s*[-*]\s/.test(line) && !/^\s*\d+\.\s/.test(line))) {
        currentText += ' ' + line.trim();
      }
    }
  }
  flush();
  return steps;
}

/**
 * Use h2 headings as step names with their first paragraph as step text.
 * Skips non-procedural headings like "Prerequisites" and "Risks".
 */
function parseH2AsSteps(
  text: string
): { name: string; text: string }[] {
  const skip = /^(prerequisites|risks?|important|notes?|next steps|resources)$/i;
  const lines = text.split('\n');
  const steps: { name: string; text: string }[] = [];
  let currentName = '';
  let contentLines: string[] = [];

  const flush = () => {
    if (currentName && !skip.test(currentName)) {
      const content = contentLines
        .join('\n')
        .trim()
        .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\s+/g, ' ')
        .trim();
      if (content) {
        const stepText = content.length > 300 ? content.slice(0, 297) + '...' : content;
        steps.push({ name: currentName, text: stepText });
      }
    }
  };

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)/);
    if (h2Match && !line.startsWith('###')) {
      flush();
      currentName = h2Match[1]!.trim();
      contentLines = [];
    } else if (currentName) {
      contentLines.push(line);
    }
  }
  flush();
  return steps;
}

// ---------------------------------------------------------------------------
// Page lookup tables
// ---------------------------------------------------------------------------

export const FAQ_PAGES: Record<
  string,
  { format: FAQFormat }
> = {
  'docs/users/resources/faqs': { format: 'h2' },
  'docs/developers/getting-started/faqs': { format: 'h4' },
  'docs/users/integrations/lolli/faqs': { format: 'h2' },
  'docs/users/mezo-earn/lock/vebtc/faqs-and-resources': {
    format: 'bold-under-h2',
  },
  'docs/users/mezo-earn/lock/vemezo/faqs-and-resources': {
    format: 'h3-under-h2',
  },
};

export const HOWTO_PAGES: Record<string, { name: string }> = {
  'docs/users/getting-started/creating-an-account': {
    name: 'How to Create a Mezo Account',
  },
  'docs/users/getting-started/deposit-assets': {
    name: 'How to Deposit Assets to Mezo',
  },
  'docs/users/mezo-earn/lock/vebtc/how-to-lock-btc': {
    name: 'How to Lock BTC on Mezo',
  },
  'docs/users/mezo-earn/lock/vemezo/how-to-lock-mezo': {
    name: 'How to Lock MEZO on Mezo',
  },
  'docs/users/mezo-earn/lock/vebtc/managing-locks-and-collecting-rewards': {
    name: 'How to Manage veBTC Locks and Collect Rewards',
  },
  'docs/users/mezo-earn/pools/using-mezo-pools-guide': {
    name: 'How to Use Mezo Pools',
  },
  'docs/users/mezo-earn/vote/how-to-vote': {
    name: 'How to Vote on Mezo Gauges',
  },
  'docs/developers/features/mezo-earn/deploying-incentives': {
    name: 'How to Deploy Incentives on Mezo Earn',
  },
};
