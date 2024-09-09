import { rest } from 'msw';

export const handlers = [
  rest.post('https://localhost:7069/api/users/register', (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
  rest.get('https://localhost:7069/api/users/latest', (req, res, ctx) => {
    return res(ctx.json([{ username: 'test-user' }]));
  }),
];