// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'api-dental/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { bearerToken: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const apiKey =
    req.headers['x-token-api'] instanceof Array ? req.headers['x-token-api'][0] : req.headers['x-token-api'];
  const bearerToken =
    req.headers['x-api-dental-pro-api-key'] instanceof Array ?
      req.headers['x-api-dental-pro-api-key'][0]
    : req.headers['x-api-dental-pro-api-key'];
  return { apiKey, bearerToken };
};
