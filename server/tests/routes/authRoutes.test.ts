import { authController } from '../../src/controllers';
import app from '../testServer';

const baseUrl = 'http://localhost:3001';
const port = parseInt(process.env.SERVER_PORT) || 3001;

// Mock the authController methods
jest.mock('../../src/controllers/authController', () => ({
  updateSession: jest.fn(),
  getSession: jest.fn(),
  deleteSession: jest.fn(),
  linkAccount: jest.fn(),
  unlinkAccount: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  register: jest.fn()
}));

beforeAll((done) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    done();
  });
});

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1);
  });
});

describe('User Routes', () => {
  it('should call login', async (done) => {
    const result = await fetch(`${baseUrl}/api/user`, { method: 'GET' });
    const data = await result.json();
    expect(data.status).toBe(200);
    done();
  });
});


// describe('Link Routes', () => {
//   it('should call authController.linkAccount on POST /link', async (done) => {
//     const response = await request(app).post('/api/link');
//     expect(authController.linkAccount).toHaveBeenCalled();
//     expect(response.status).toBe(201);
//     expect(response.body).toEqual({});
//     done();
//   });
// });

// describe('Login Routes', () => {
//   it('should call authController.login on POST /login', async (done) => {
//     const response = await request(app).post('/api/login');
//     expect(authController.login).toHaveBeenCalled();
//     expect(response.status).toBe(201);
//     expect(response.body).toEqual({});
//     done();
//   });

// });
