class Pricing {
  get header() {
    return cy.get('.col-sm-7')
  }
}

module.exports = new Pricing()