import httpMocks from 'node-mocks-http';
import exampleApi from '../pages/api/example';

jest.mock('next');

describe('/api/example', () => {
  it('should return a message', async () => {
    // Create a mock request and response using node-mocks-http
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/example',
    });

    const res = httpMocks.createResponse();

    // Call the exampleApi with the mock request and response
    await exampleApi(req, res);

    // Use node-mocks-http assertions for the response
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ message: 'Hello from the API!' });
  });
});
