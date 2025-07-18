// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import APIDental from 'api-dental';

const client = new APIDental({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eligibility', () => {
  // skipped: tests are disabled for the time being
  test.skip('check', async () => {
    const responsePromise = client.eligibility.check({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
