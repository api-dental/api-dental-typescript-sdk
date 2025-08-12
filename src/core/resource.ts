// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { APIDentalPro } from '../client';

export abstract class APIResource {
  protected _client: APIDentalPro;

  constructor(client: APIDentalPro) {
    this._client = client;
  }
}
