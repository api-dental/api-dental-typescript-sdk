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
  request(body: ClearCoverageRequestParams, options?: RequestOptions): APIPromise<ClearCoverageRequestResponse> {
    return this._client.post('/ClearCoverage', { body, ...options });
  }
}

/**
 * ClearCoverage response wrapped in a WunderGraph data envelope. The actual data
 * is under data.clearcoverage_post_enhanced_eligibility.
 */
export interface ClearCoverageRequestResponse {
  data?: ClearCoverageRequestResponse.Data;
}

export namespace ClearCoverageRequestResponse {
  export interface Data {
    /**
     * Enhanced eligibility data with standardized benefit breakdowns. Contains
     * benefits (with network tiers), coverages (13 categories with subcategories),
     * rules (policy flags), limitation, service_history, and fees sections. Response
     * size varies significantly by payer (10KB-550KB).
     */
    clearcoverage_post_enhanced_eligibility?: Data.ClearcoveragePostEnhancedEligibility;
  }

  export namespace Data {
    /**
     * Enhanced eligibility data with standardized benefit breakdowns. Contains
     * benefits (with network tiers), coverages (13 categories with subcategories),
     * rules (policy flags), limitation, service_history, and fees sections. Response
     * size varies significantly by payer (10KB-550KB).
     */
    export interface ClearcoveragePostEnhancedEligibility {
      /**
       * Benefit entries with 0-3 network tiers (IN_NETWORK, OUT_OF_NETWORK, plus
       * PPO/PREMIER for Delta Dental).
       */
      benefits?: Array<unknown>;

      /**
       * 13 fixed coverage categories (diagnostic, preventive, basic_restorative,
       * major_restorative, endodontics, periodontics, oral_surgery, prosthodontics,
       * orthodontics, implants, adjunctive, TMJ, misc), each containing variable
       * subcategories with coinsurance and limitations.
       */
      coverages?: { [key: string]: unknown };

      /**
       * Individual and family deductible amounts by network tier.
       */
      deductible?: unknown;

      /**
       * Annual and lifetime maximum amounts by network tier.
       */
      maximums?: unknown;

      payer?: unknown;

      /**
       * Plan identification and effective dates.
       */
      plan?: unknown;

      provider?: unknown;

      /**
       * Policy-level flags including missing_tooth clause, seat/prep date rules, waiting
       * periods, and COB (coordination of benefits) information.
       */
      rules?: unknown;

      subscriber?: unknown;

    [k: string]: unknown
    }
  }
}

export interface ClearCoverageRequestParams {
  payer: ClearCoverageRequestParams.Payer;

  provider: ClearCoverageRequestParams.Provider;

  subscriber: ClearCoverageRequestParams.Subscriber;

  /**
   * API version. Use "v2" for the current version. Version "v1" is deprecated and
   * returns a legacy response format.
   */
  version: 'v1' | 'v2';

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
    type ClearCoverageRequestParams as ClearCoverageRequestParams
  };
}
