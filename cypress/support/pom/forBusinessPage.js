class Business {
  get header() {
    return cy.get('.mobile-padding').first()
  }
}

module.exports = new Business()