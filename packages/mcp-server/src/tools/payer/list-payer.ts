// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'api-dental-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'api-dental-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import APIDentalPro from 'api-dental';

export const metadata: Metadata = {
  resource: 'payer',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/Payer',
  operationId: 'listPayers',
};

export const tool: Tool = {
  name: 'list_payer',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Payers\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/payer_list_response',\n  $defs: {\n    payer_list_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          alt_payer_ids: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          features: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          name: {\n            type: 'string'\n          },\n          onederfulPayerId: {\n            type: 'string'\n          },\n          status: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: APIDentalPro, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.payer.list()));
  } catch (error) {
    if (error instanceof APIDentalPro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
