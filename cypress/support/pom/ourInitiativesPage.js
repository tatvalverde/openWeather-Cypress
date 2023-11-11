class OurInitiatives {
  get header() {
    return cy.get('h1').eq(1)
  }
}

module.exports = new OurInitiatives()