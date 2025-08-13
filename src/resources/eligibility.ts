// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Eligibility extends APIResource {
  /**
   * Request Eligibility
   */
  request(body: EligibilityRequestParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/Eligibility', { body, ...options });
  }
}

export type EligibilityRequestResponse = unknown;

export interface EligibilityRequestParams {
  payer: EligibilityRequestParams.Payer;

  provider: EligibilityRequestParams.Provider;

  subscriber: EligibilityRequestParams.Subscriber;

  version: string;

  dependent?: EligibilityRequestParams.Dependent;
}

export namespace EligibilityRequestParams {
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

export declare namespace Eligibility {
  export {
    type EligibilityRequestResponse as EligibilityRequestResponse,
    type EligibilityRequestParams as EligibilityRequestParams,
  };
}
