// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'api-dental/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    req.headers['x-token-api'] instanceof Array ? req.headers['x-token-api'][0] : req.headers['x-token-api'];
  return { apiKey };
};
