// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import APIDentalPro from 'api-dental-pro';

const client = new APIDentalPro({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eligibility', () => {
  // Prism tests are disabled
  test.skip('request: only required params', async () => {
    const responsePromise = client.eligibility.request({
      payer: { id: 'id' },
      provider: { npi: 'npi', tax_id: 'tax_id' },
      subscriber: {
        dob: '2019-12-27',
        first_name: 'first_name',
        group_number: 'group_number',
        last_name: 'last_name',
        member_id: 'member_id',
      },
      version: 'version',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('request: required and optional params', async () => {
    const response = await client.eligibility.request({
      payer: { id: 'id' },
      provider: { npi: 'npi', tax_id: 'tax_id' },
      subscriber: {
        dob: '2019-12-27',
        first_name: 'first_name',
        group_number: 'group_number',
        last_name: 'last_name',
        member_id: 'member_id',
      },
      version: 'version',
    });
  });
});
