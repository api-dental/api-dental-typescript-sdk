// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Payer extends APIResource {
  /**
   * Retrieve the full list of supported dental insurance payers with their IDs,
   * names, features, and status. No sensitive data is required. Use payer IDs from
   * this list when making Eligibility or ClearCoverage requests.
   */
  list(options?: RequestOptions): APIPromise<PayerListResponse> {
    return this._client.get('/Payer', options);
  }
}

export interface PayerListResponse {
  data?: PayerListResponse.Data;
}

export namespace PayerListResponse {
  export interface Data {
    apidental_payer_list?: Array<Data.ApidentalPayerList>;
  }

  export namespace Data {
    export interface ApidentalPayerList {
      /**
       * Unique payer identifier
       */
      id?: string;

      /**
       * Alternate payer identifiers
       */
      alt_payer_ids?: Array<string>;

      /**
       * Supported features (e.g., eligibility, claims)
       */
      features?: Array<string>;

      /**
       * Payer display name
       */
      name?: string;

      /**
       * Internal payer mapping ID
       */
      onederfulPayerId?: string;

      /**
       * Payer availability status
       */
      status?: 'active' | 'inactive';
    }
  }
}

export declare namespace Payer {
  export { type PayerListResponse as PayerListResponse };
}
