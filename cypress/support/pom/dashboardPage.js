class Dashboard {
  get header() {
    return cy.get('.h1-break')
  }
}

module.exports = new Dashboard()