import { test, expect, request } from '@playwright/test'



test('User sign up Positive', async ({ request }) => {

  const userRegistrationResponse = await request.post('https://try.vikunja.io/api/v1/register', {
    data: {
      "email": "testUser1@gmail.com",
      "language": "en",
      "password": "123456Password",
      "username": "TestUserNew1"
    },
      headers: {
      'Content-Type': 'application/json',
    }
  })


  expect(userRegistrationResponse.status()).toBe(200);
 
 
})

test('User sign up with the same credentials', async ({ request }) => {

  const userRegistrationResponse = await request.post('https://try.vikunja.io/api/v1/register', {
    data: {
      "email": "testUser1@gmail.com",
      "language": "en",
      "password": "123456Password",
      "username": "TestUserNew1"
    },
      headers: {
      'Content-Type': 'application/json',
    }
  })

   expect(userRegistrationResponse.status()).toBe(400);
   
 })


 
test('Login with valid credentials', async ({ request }) => {

  const userLoginResponse = await request.post('https://try.vikunja.io/api/v1/login', {
    data: {
      "long_token": true,
      "password": "123456Password",
      // "totp_passcode": "string",
      "username": "TestUserNew1"
    },
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const userLoginBody = await userLoginResponse.json()
  const accessToken = userLoginBody.token 

   expect(userLoginResponse.status()).toBe(200);
   
 })


