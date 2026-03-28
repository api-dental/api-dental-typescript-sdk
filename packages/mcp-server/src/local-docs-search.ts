// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'request',
    endpoint: '/Eligibility',
    httpMethod: 'post',
    summary: 'Request Eligibility Verification',
    description:
      'Submit a real-time eligibility and benefits verification request for a dental insurance subscriber. Returns coverage details, deductibles, maximums, and benefit information from the payer.',
    stainlessPath: '(resource) eligibility > (method) request',
    qualified: 'client.eligibility.request',
    params: [
      'payer: { id: string; };',
      'provider: { npi: string; tax_id: string; };',
      'subscriber: { dob: string; first_name: string; group_number: string; last_name: string; member_id: string; };',
      "version: 'v1' | 'v2';",
      'dependent?: { dob?: string; first_name?: string; group_number?: string; last_name?: string; member_id?: string; };',
    ],
    response:
      '{ data?: { apidental_post_eligibility?: { active_coverage?: object[]; coinsurance?: object[]; deductible?: object[]; limitations?: object[]; maximums?: object[]; not_covered?: object[]; patient?: object; payer?: object; plan?: object; provider?: object; subscriber?: object; }; }; }',
    markdown:
      "## request\n\n`client.eligibility.request(payer: { id: string; }, provider: { npi: string; tax_id: string; }, subscriber: { dob: string; first_name: string; group_number: string; last_name: string; member_id: string; }, version: 'v1' | 'v2', dependent?: { dob?: string; first_name?: string; group_number?: string; last_name?: string; member_id?: string; }): { data?: object; }`\n\n**post** `/Eligibility`\n\nSubmit a real-time eligibility and benefits verification request for a dental insurance subscriber. Returns coverage details, deductibles, maximums, and benefit information from the payer.\n\n### Parameters\n\n- `payer: { id: string; }`\n  - `id: string`\n    Payer ID from the Payer List endpoint\n\n- `provider: { npi: string; tax_id: string; }`\n  - `npi: string`\n    Provider's National Provider Identifier (10 digits)\n  - `tax_id: string`\n    Provider's Tax Identification Number (9 digits)\n\n- `subscriber: { dob: string; first_name: string; group_number: string; last_name: string; member_id: string; }`\n  - `dob: string`\n    Date of birth in MM/DD/YYYY format\n  - `first_name: string`\n    Subscriber's first name\n  - `group_number: string`\n    Insurance group number\n  - `last_name: string`\n    Subscriber's last name\n  - `member_id: string`\n    Subscriber's insurance member ID\n\n- `version: 'v1' | 'v2'`\n  API version. Use \"v2\" for the current version. Version \"v1\" is deprecated and returns a legacy response format.\n\n- `dependent?: { dob?: string; first_name?: string; group_number?: string; last_name?: string; member_id?: string; }`\n  Optional dependent information for dependent eligibility checks\n  - `dob?: string`\n    MM/DD/YYYY format\n  - `first_name?: string`\n  - `group_number?: string`\n  - `last_name?: string`\n  - `member_id?: string`\n\n### Returns\n\n- `{ data?: { apidental_post_eligibility?: { active_coverage?: object[]; coinsurance?: object[]; deductible?: object[]; limitations?: object[]; maximums?: object[]; not_covered?: object[]; patient?: object; payer?: object; plan?: object; provider?: object; subscriber?: object; }; }; }`\n  Eligibility response wrapped in a WunderGraph data envelope. The actual eligibility data is under data.apidental_post_eligibility.\n\n  - `data?: { apidental_post_eligibility?: { active_coverage?: object[]; coinsurance?: object[]; deductible?: object[]; limitations?: object[]; maximums?: object[]; not_covered?: object[]; patient?: object; payer?: object; plan?: object; provider?: object; subscriber?: object; }; }`\n\n### Example\n\n```typescript\nimport APIDentalPro from 'api-dental';\n\nconst client = new APIDentalPro();\n\nconst response = await client.eligibility.request({\n  payer: { id: '52133' },\n  provider: { npi: '1447364856', tax_id: '270872579' },\n  subscriber: {\n  dob: '01/15/1990',\n  first_name: 'John',\n  group_number: 'GRP001',\n  last_name: 'Smith',\n  member_id: '123456789',\n},\n  version: 'v2',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'request',
    endpoint: '/ClearCoverage',
    httpMethod: 'post',
    summary: 'Request ClearCoverage Eligibility',
    description:
      'Submit an enhanced eligibility and benefits verification request via Vyne ClearCoverage. Returns enriched, standardized, and normalized data relevant for dental use cases with deep benefit insights across supported payers.',
    stainlessPath: '(resource) clearCoverage > (method) request',
    qualified: 'client.clearCoverage.request',
    params: [
      'payer: { id: string; };',
      'provider: { npi: string; tax_id: string; };',
      'subscriber: { dob: string; first_name: string; group_number: string; last_name: string; member_id: string; };',
      "version: 'v1' | 'v2';",
      'dependent?: { dob?: string; first_name?: string; group_number?: string; last_name?: string; member_id?: string; };',
      'location_id?: string;',
    ],
    response:
      '{ data?: { clearcoverage_post_enhanced_eligibility?: { benefits?: object[]; coverages?: object; deductible?: object; maximums?: object; payer?: object; plan?: object; provider?: object; rules?: object; subscriber?: object; }; }; }',
    markdown:
      "## request\n\n`client.clearCoverage.request(payer: { id: string; }, provider: { npi: string; tax_id: string; }, subscriber: { dob: string; first_name: string; group_number: string; last_name: string; member_id: string; }, version: 'v1' | 'v2', dependent?: { dob?: string; first_name?: string; group_number?: string; last_name?: string; member_id?: string; }, location_id?: string): { data?: object; }`\n\n**post** `/ClearCoverage`\n\nSubmit an enhanced eligibility and benefits verification request via Vyne ClearCoverage. Returns enriched, standardized, and normalized data relevant for dental use cases with deep benefit insights across supported payers.\n\n### Parameters\n\n- `payer: { id: string; }`\n  - `id: string`\n    ClearCoverage payer ID (see supported carriers list)\n\n- `provider: { npi: string; tax_id: string; }`\n  - `npi: string`\n    Provider's National Provider Identifier (10 digits)\n  - `tax_id: string`\n    Provider's Tax Identification Number (9 digits)\n\n- `subscriber: { dob: string; first_name: string; group_number: string; last_name: string; member_id: string; }`\n  - `dob: string`\n    MM/DD/YYYY format\n  - `first_name: string`\n  - `group_number: string`\n  - `last_name: string`\n  - `member_id: string`\n\n- `version: 'v1' | 'v2'`\n  API version. Use \"v2\" for the current version. Version \"v1\" is deprecated and returns a legacy response format.\n\n- `dependent?: { dob?: string; first_name?: string; group_number?: string; last_name?: string; member_id?: string; }`\n  Optional dependent information\n  - `dob?: string`\n  - `first_name?: string`\n  - `group_number?: string`\n  - `last_name?: string`\n  - `member_id?: string`\n\n- `location_id?: string`\n  Optional location identifier\n\n### Returns\n\n- `{ data?: { clearcoverage_post_enhanced_eligibility?: { benefits?: object[]; coverages?: object; deductible?: object; maximums?: object; payer?: object; plan?: object; provider?: object; rules?: object; subscriber?: object; }; }; }`\n  ClearCoverage response wrapped in a WunderGraph data envelope. The actual data is under data.clearcoverage_post_enhanced_eligibility.\n\n  - `data?: { clearcoverage_post_enhanced_eligibility?: { benefits?: object[]; coverages?: object; deductible?: object; maximums?: object; payer?: object; plan?: object; provider?: object; rules?: object; subscriber?: object; }; }`\n\n### Example\n\n```typescript\nimport APIDentalPro from 'api-dental';\n\nconst client = new APIDentalPro();\n\nconst response = await client.clearCoverage.request({\n  payer: { id: '52133' },\n  provider: { npi: '1447364856', tax_id: '270872579' },\n  subscriber: {\n  dob: '01/15/1990',\n  first_name: 'John',\n  group_number: 'GRP001',\n  last_name: 'Smith',\n  member_id: '123456789',\n},\n  version: 'v2',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'list',
    endpoint: '/Payer',
    httpMethod: 'get',
    summary: 'List Payers',
    description:
      'Retrieve the full list of supported dental insurance payers with their IDs, names, features, and status. No sensitive data is required. Use payer IDs from this list when making Eligibility or ClearCoverage requests.',
    stainlessPath: '(resource) payer > (method) list',
    qualified: 'client.payer.list',
    response:
      "{ data?: { apidental_payer_list?: { id?: string; alt_payer_ids?: string[]; features?: string[]; name?: string; onederfulPayerId?: string; status?: 'active' | 'inactive'; }[]; }; }",
    markdown:
      "## list\n\n`client.payer.list(): { data?: object; }`\n\n**get** `/Payer`\n\nRetrieve the full list of supported dental insurance payers with their IDs, names, features, and status. No sensitive data is required. Use payer IDs from this list when making Eligibility or ClearCoverage requests.\n\n### Returns\n\n- `{ data?: { apidental_payer_list?: { id?: string; alt_payer_ids?: string[]; features?: string[]; name?: string; onederfulPayerId?: string; status?: 'active' | 'inactive'; }[]; }; }`\n\n  - `data?: { apidental_payer_list?: { id?: string; alt_payer_ids?: string[]; features?: string[]; name?: string; onederfulPayerId?: string; status?: 'active' | 'inactive'; }[]; }`\n\n### Example\n\n```typescript\nimport APIDentalPro from 'api-dental';\n\nconst client = new APIDentalPro();\n\nconst payers = await client.payer.list();\n\nconsole.log(payers);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
