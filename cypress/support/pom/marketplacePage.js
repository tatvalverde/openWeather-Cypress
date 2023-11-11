class Marketplace {
  get header() {
    return cy.get('#custom_weather_products').find('h1')
  }
}

module.exports = new Marketplace()