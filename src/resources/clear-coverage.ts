// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ClearCoverage extends APIResource {
  /**
   * Submit an enhanced eligibility and benefits verification request via Vyne
   * ClearCoverage. Returns enriched, standardized, and normalized data relevant for
   * dental use cases with deep benefit insights across supported payers.
   *
   * @example
   * ```ts
   * const response = await client.clearCoverage.request({
   *   payer: { id: '52133' },
   *   provider: { npi: '1447364856', tax_id: '270872579' },
   *   subscriber: {
   *     first_name: 'John',
   *     last_name: 'Smith',
   *     member_id: '123456789',
   *     dob: '01/15/1990',
   *     group_number: 'GRP001',
   *   },
   *   version: 'v2',
   * });
   * ```
   */
  request(body: ClearCoverageRequestParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/ClearCoverage', { body, ...options });
  }
}

/**
 * ClearCoverage response containing enriched eligibility data, detailed coverage
 * breakdowns, and standardized benefit information.
 */
export type ClearCoverageRequestResponse = unknown;

export interface ClearCoverageRequestParams {
  payer: ClearCoverageRequestParams.Payer;

  provider: ClearCoverageRequestParams.Provider;

  subscriber: ClearCoverageRequestParams.Subscriber;

  version: string;

  /**
   * Optional dependent information
   */
  dependent?: ClearCoverageRequestParams.Dependent;

  /**
   * Optional location identifier
   */
  location_id?: string;
}

export namespace ClearCoverageRequestParams {
  export interface Payer {
    /**
     * ClearCoverage payer ID (see supported carriers list)
     */
    id: string;
  }

  export interface Provider {
    /**
     * Provider's National Provider Identifier (10 digits)
     */
    npi: string;

    /**
     * Provider's Tax Identification Number (9 digits)
     */
    tax_id: string;
  }

  export interface Subscriber {
    /**
     * MM/DD/YYYY format
     */
    dob: string;

    first_name: string;

    group_number: string;

    last_name: string;

    member_id: string;
  }

  /**
   * Optional dependent information
   */
  export interface Dependent {
    dob?: string;

    first_name?: string;

    group_number?: string;

    last_name?: string;

    member_id?: string;
  }
}

export declare namespace ClearCoverage {
  export {
    type ClearCoverageRequestResponse as ClearCoverageRequestResponse,
    type ClearCoverageRequestParams as ClearCoverageRequestParams,
  };
}
