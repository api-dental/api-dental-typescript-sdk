// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { APIDental } from '../client';

export abstract class APIResource {
  protected _client: APIDental;

  constructor(client: APIDental) {
    this._client = client;
  }
}
