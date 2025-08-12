// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import APIDentalPro from 'api-dental-pro';

const client = new APIDentalPro({
  apiKey: 'My API Key',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payer', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.payer.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
