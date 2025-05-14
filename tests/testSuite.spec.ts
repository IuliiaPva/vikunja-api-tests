import { test, expect, request } from '@playwright/test'



test('User sign up with valid data', async ({ request }) => {

  const userRegistrationResponse = await request.post('https://try.vikunja.io/api/v1/register', {
    data: {
      "email": "testUser5@gmail.com",
      "language": "en",
      "password": "123456Password",
      "username": "TestUserNew5"
    },
      headers: {
      'Content-Type': 'application/json',
    }
  })

  expect(userRegistrationResponse.status()).toBe(200)
 
})

test('User sign up with the same user name', async ({ request }) => {

  const userRegistrationResponse = await request.post('https://try.vikunja.io/api/v1/register', {
    data: {
      "email": "testUser5@gmail.com",
      "language": "en",
      "password": "123456Password",
      "username": "TestUserNew5"
    },
      headers: {
      'Content-Type': 'application/json',
    }
  })

   expect(userRegistrationResponse.status()).toBe(400)
   
})

test('User sign up with the same email', async ({ request }) => {

  const userRegistrationResponse = await request.post('https://try.vikunja.io/api/v1/register', {
    data: {
      "email": "testUser5@gmail.com",
      "language": "en",
      "password": "123456Password",
      "username": "TestUserNew6"
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
       "username": "TestUserNew5"
    },
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const userLoginBody = await userLoginResponse.json()

  expect(userLoginResponse.status()).toBe(200)
  expect(userLoginBody).toHaveProperty('token')
   
 })


test('Create a new project', async ({ request }) => {

  const userLoginResponse = await request.post('https://try.vikunja.io/api/v1/login', {
    data: {
      "long_token": true,
      "password": "123456Password",
       "username": "TestUserNew5"
    },
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const userLoginBody = await userLoginResponse.json()
  const accessToken = userLoginBody.token 

  expect(userLoginResponse.status()).toBe(200)

  const createNewProjectResponse = await request.put('https://try.vikunja.io/api/v1/projects', {
    data: {
      title: "Playwright Created Project",
      description: "API test project",
      is_favorite: false
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }

   })

  expect(createNewProjectResponse.status()).toBe(201)
    
}) 


