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
  request(body: EligibilityRequestParams, options?: RequestOptions): APIPromise<EligibilityRequestResponse> {
    return this._client.post('/Eligibility', { body, ...options });
  }
}

/**
 * Eligibility response wrapped in a WunderGraph data envelope. The actual
 * eligibility data is under data.apidental_post_eligibility.
 */
export interface EligibilityRequestResponse {
  data?: EligibilityRequestResponse.Data;
}

export namespace EligibilityRequestResponse {
  export interface Data {
    /**
     * Eligibility verification results. Contains patient, subscriber, payer, provider,
     * plan, limitations, deductibles, maximums, coinsurance, active_coverage, and
     * not_covered sections. Structure varies by payer.
     */
    apidental_post_eligibility?: Data.ApidentalPostEligibility;
  }

  export namespace Data {
    /**
     * Eligibility verification results. Contains patient, subscriber, payer, provider,
     * plan, limitations, deductibles, maximums, coinsurance, active_coverage, and
     * not_covered sections. Structure varies by payer.
     */
    export interface ApidentalPostEligibility {
      active_coverage?: Array<unknown>;

      coinsurance?: Array<unknown>;

      deductible?: Array<unknown>;

      limitations?: Array<unknown>;

      maximums?: Array<unknown>;

      not_covered?: Array<unknown>;

      patient?: unknown;

      payer?: unknown;

      plan?: unknown;

      provider?: unknown;

      subscriber?: unknown;

      [k: string]: unknown;
    }
  }
}

export interface EligibilityRequestParams {
  payer: EligibilityRequestParams.Payer;

  provider: EligibilityRequestParams.Provider;

  subscriber: EligibilityRequestParams.Subscriber;

  /**
   * API version. Use "v2" for the current version. Version "v1" is deprecated and
   * returns a legacy response format.
   */
  version: 'v1' | 'v2';

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
