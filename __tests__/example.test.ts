// __tests__/example.test.ts
import { NextApiRequest, NextApiResponse } from 'next';
import exampleApi from '../pages/api/example';

jest.mock('next');

describe('/api/example', () => {
  it('should return a message', async () => {
    const req = {} as NextApiRequest;
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await exampleApi(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Hello from the API!' });
  });
});