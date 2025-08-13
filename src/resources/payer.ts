// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payer extends APIResource {
  /**
   * List Payers
   */
  list(options?: RequestOptions): APIPromise<PayerListResponse> {
    return this._client.get('/Payer', options);
  }
}

export type PayerListResponse = Array<PayerListResponse.PayerListResponseItem>;

export namespace PayerListResponse {
  export interface PayerListResponseItem {
    id?: string;

    alt_payer_ids?: Array<string>;

    features?: Array<string>;

    name?: string;

    onederfulPayerId?: string;

    status?: string;
  }
}

export declare namespace Payer {
  export { type PayerListResponse as PayerListResponse };
}
