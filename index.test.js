const request = require('supertest')
const app = require('./index')

describe('GET /', () => {
  test('Répond 200 avec status ok', async () =>{
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe('ok')
    expect(res.body.message).toBeDefined()
  })
})

describe('GET /health', () => {
  test('Répond healthy', async () =>{
    const res = await request(app).get('/health')
    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe('healthy')
  })
})