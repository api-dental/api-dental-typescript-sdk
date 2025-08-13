// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ClearCoverage extends APIResource {
  /**
   * Clear Coverage
   */
  request(body: ClearCoverageRequestParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ClearCoverage', { body, ...options });
  }
}

export type ClearCoverageRequestResponse = unknown;

export interface ClearCoverageRequestParams {
  payer: ClearCoverageRequestParams.Payer;

  provider: ClearCoverageRequestParams.Provider;

  subscriber: ClearCoverageRequestParams.Subscriber;

  version: string;

  dependent?: ClearCoverageRequestParams.Dependent;
}

export namespace ClearCoverageRequestParams {
  export interface Payer {
    id: string;
  }

  export interface Provider {
    npi: string;

    tax_id: string;
  }

  export interface Subscriber {
    dob: string;

    first_name: string;

    group_number: string;

    last_name: string;

    member_id: string;
  }

  export interface Dependent {
    dob: string;

    first_name: string;

    group_number: string;

    last_name: string;

    member_id: string;
  }
}

export declare namespace ClearCoverage {
  export {
    type ClearCoverageRequestResponse as ClearCoverageRequestResponse,
    type ClearCoverageRequestParams as ClearCoverageRequestParams,
  };
}
