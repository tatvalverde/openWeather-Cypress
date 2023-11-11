class Api {
  get header() {
    return cy.get('h1')
  }
}

module.exports = new Api()