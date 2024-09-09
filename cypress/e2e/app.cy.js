describe('App', () => {
  it('visits the app', () => {
    cy.visit('/')
    cy.contains('h1', 'User Registry')
  })
})