describe('Register User', () => {
  it('successfully registers a new user', () => {
    cy.visit('https://localhost:3000')
    cy.get('input[name="username"]').type('test-user')
    cy.get('button[type="submit"]').click()
    cy.contains('p', 'User registered successfully!')
  })

  it('displays error message on failed registration', () => {
    // Mock API error response
    cy.intercept('POST', 'https://localhost:7069/api/users/register', {
      statusCode: 500,
      body: { message: 'Error registering user' },
    })
    cy.visit('https://localhost:3000')
    cy.get('input[name="username"]').type('test-user')
    cy.get('button[type="submit"]').click()
    cy.contains('p', 'Error registering user')
  })
})