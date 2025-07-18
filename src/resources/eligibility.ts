// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Eligibility extends APIResource {
  /**
   * @example
   * ```ts
   * const response = await client.eligibility.check();
   * ```
   */
  check(body: EligibilityCheckParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/eligibility', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export type EligibilityCheckResponse = unknown;

export interface EligibilityCheckParams {
  dependent?: EligibilityCheckParams.Dependent;

  payer?: EligibilityCheckParams.Payer;

  provider?: EligibilityCheckParams.Provider;

  subscriber?: EligibilityCheckParams.Subscriber;

  version?: string;
}

export namespace EligibilityCheckParams {
  export interface Dependent {
    dob?: string;

    first_name?: string;

    group_number?: string;

    last_name?: string;

    member_id?: string;
  }

  export interface Payer {
    id?: string;
  }

  export interface Provider {
    npi?: string;

    tax_id?: string;
  }

  export interface Subscriber {
    dob?: string;

    first_name?: string;

    group_number?: string;

    last_name?: string;

    member_id?: string;
  }
}

export declare namespace Eligibility {
  export {
    type EligibilityCheckResponse as EligibilityCheckResponse,
    type EligibilityCheckParams as EligibilityCheckParams,
  };
}
