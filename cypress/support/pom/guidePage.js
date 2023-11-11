class Guide {
  get header() {
    return cy.get('.col-sm-12').first().find('h1')
  }
}

module.exports = new Guide()