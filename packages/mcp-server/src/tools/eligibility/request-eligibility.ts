// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'api-dental-pro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import APIDentalPro from 'api-dental-pro';

export const metadata: Metadata = {
  resource: 'eligibility',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/Eligibility',
  operationId: 'checkEligibility',
};

export const tool: Tool = {
  name: 'request_eligibility',
  description: 'Request Eligibility',
  inputSchema: {
    type: 'object',
    properties: {
      payer: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
        },
        required: ['id'],
      },
      provider: {
        type: 'object',
        properties: {
          npi: {
            type: 'string',
          },
          tax_id: {
            type: 'string',
          },
        },
        required: ['npi', 'tax_id'],
      },
      subscriber: {
        type: 'object',
        properties: {
          dob: {
            type: 'string',
            format: 'date',
          },
          first_name: {
            type: 'string',
          },
          group_number: {
            type: 'string',
          },
          last_name: {
            type: 'string',
          },
          member_id: {
            type: 'string',
          },
        },
        required: ['dob', 'first_name', 'group_number', 'last_name', 'member_id'],
      },
      version: {
        type: 'string',
      },
    },
    required: ['payer', 'provider', 'subscriber', 'version'],
  },
  annotations: {},
};

export const handler = async (client: APIDentalPro, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.eligibility.request(body)) as object);
};

export default { metadata, tool, handler };
