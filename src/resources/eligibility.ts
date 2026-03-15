// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Eligibility extends APIResource {
  /**
   * Submit a real-time eligibility and benefits verification request for a dental
   * insurance subscriber. Returns coverage details, deductibles, maximums, and
   * benefit information from the payer.
   *
   * @example
   * ```ts
   * const response = await client.eligibility.request({
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
  request(body: EligibilityRequestParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/Eligibility', { body, ...options });
  }
}

/**
 * Eligibility response containing coverage details, benefits, deductibles, and
 * payer information. Response structure varies by payer.
 */
export type EligibilityRequestResponse = unknown;

export interface EligibilityRequestParams {
  payer: EligibilityRequestParams.Payer;

  provider: EligibilityRequestParams.Provider;

  subscriber: EligibilityRequestParams.Subscriber;

  /**
   * API version. Use "v2".
   */
  version: string;

  /**
   * Optional dependent information for dependent eligibility checks
   */
  dependent?: EligibilityRequestParams.Dependent;
}

export namespace EligibilityRequestParams {
  export interface Payer {
    /**
     * Payer ID from the Payer List endpoint
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
     * Date of birth in MM/DD/YYYY format
     */
    dob: string;

    /**
     * Subscriber's first name
     */
    first_name: string;

    /**
     * Insurance group number
     */
    group_number: string;

    /**
     * Subscriber's last name
     */
    last_name: string;

    /**
     * Subscriber's insurance member ID
     */
    member_id: string;
  }

  /**
   * Optional dependent information for dependent eligibility checks
   */
  export interface Dependent {
    /**
     * MM/DD/YYYY format
     */
    dob?: string;

    first_name?: string;

    group_number?: string;

    last_name?: string;

    member_id?: string;
  }
}

export declare namespace Eligibility {
  export {
    type EligibilityRequestResponse as EligibilityRequestResponse,
    type EligibilityRequestParams as EligibilityRequestParams,
  };
}
