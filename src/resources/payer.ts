// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payer extends APIResource {
  /**
   * This endpoint returns the list of Onederful payers to be saved in your own
   * database. This list is kept up-to-date with any new payers.
   */
  list(options?: RequestOptions): APIPromise<PayerListResponse> {
    return this._client.get('/payer/list', options);
  }
}

export type PayerListResponse = Array<PayerListResponse.PayerListResponseItem>;

export namespace PayerListResponse {
  export interface PayerListResponseItem {
    id: string;

    name: string;

    alt_payer_ids?: Array<string>;

    features?: Array<string>;

    onederfulPayerId?: string;

    status?: string;
  }
}

export declare namespace Payer {
  export { type PayerListResponse as PayerListResponse };
}
