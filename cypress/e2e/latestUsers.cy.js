describe('latest Users', () => {
  it('displays a list of latest users', () => {
    cy.visit('https://172.19.0.2:3000')
    cy.get('ul').should('have.length', 1)
    cy.get('li').should('have.length', 10) // Assuming 10 latest users
  })

  it('displays error message on failed API call', () => {
    // Mock API error response
    cy.intercept('GET', 'https://localhost:7069/api/users/latest', {
      statusCode: 500,
      body: { message: 'Error fetching users' },
    })
    cy.visit('https://172.19.0.2:3000')
    cy.contains('p', 'Error fetching users')
  })
})