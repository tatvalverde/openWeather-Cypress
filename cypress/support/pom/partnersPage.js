class Partners {
  get header() {
    return cy.get('.col-sm-7').find('h1')
  }
}

module.exports = new Partners()