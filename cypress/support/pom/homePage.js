class HomePage {
  // homePage = {
  //     differentWeatherPopUp: () => {
  //         HomePage.homePage.btn
  //     }
  // }

  get logo() {
    return cy.get('.logo')
  }

  get searchBtn() {
    return cy
      .get('#first-level-nav')
      .find('[role="search"]')
      .find('[placeholder="Weather in your city"]')
  }
  get guideBtn() {
    return cy.get('#desktop-menu').find('[href="/guide"]')
  }

  get apiBtn() {
    return cy.get('#desktop-menu').find('[href="/api"]')
  }

  get dashboardBtn() {
    return cy.get('#desktop-menu').find('[href="/weather-dashboard"]')
  }

  get marketplaceBtn() {
    return cy.get('#desktop-menu').find('[href="https://home.openweathermap.org/marketplace"]')
  }

  get pricingBtn() {
    return cy.get('#desktop-menu').find('[href="/price"]')
  }

  get mapsBtn() {
    return cy.get('#desktop-menu').find('[href="/weathermap"]')
  }

  get ourInitiativesBtn() {
    return cy.get('#desktop-menu').find('[href="/our-initiatives"]')
  }

  get partnersBtn() {
    return cy.get('#desktop-menu').find('[href="/examples"]')
  }

  get blogBtn() {
    return cy.get('#desktop-menu').find('[href="https://openweather.co.uk/blog/category/weather"]')
  }

  get forBusinessBtn() {
    return cy.get('#desktop-menu').find('[href="https://openweather.co.uk"]')
  }

  get signInBtn() {
    return cy.get('.user-li > a')
    // return cy.get('#desktop-menu').contains('Sign in')
  }

  get supportBtn() {
    return cy.get('#support-dropdown')
  }

  get supportDropDown() {
    return cy.get('#support-dropdown-menu')
  }

  get headerImage() {
    return cy.get('.section.where-to')
  }

  get h1Text() {
    return cy.get('h1').find('.orange-text')
  }

  get h2Text() {
    return cy.get('h2').find('.white-text')
  }

  get searchField() {
    return cy.get('.search-container')
  }

  get buttonSearch() {
    return cy.get('button[data-v-68963a64]')
  }

  get searchDropDown() {
    return cy.get('ul[data-v-68963a64]')
  }

  get cityNotFound() {
    return cy.get('.sub.not-found.notFoundOpen')
  }

  get placeholderInSearchField() {
    return cy.get('.search-container').find('[placeholder="Search city"]')
  }

  get differentWeatherBtn() {
    return cy.get('.controls').contains('Different Weather?')
  }

  get geoBtn() {
    return cy.get('.controls .control-el').eq(0)
  }

  get widgetNotification() {
    return cy.get('.widget-notification')
  }

  get metricBtn() {
    return cy.get('.option').eq(0)
  }

  get imperialBtn() {
    return cy.get('.option').eq(1)
  }

  get currentTemperatureBlock() {
    return cy.get('.heading')
  }

  get eightDayForecastDayList() {
    return cy.get('li[data-v-5ed3171e]')
  }

  get weatherBlock() {
    return cy.get('[class="current-container mobile-padding"]')
  }

  get mapBlock() {
    return cy.get('.map-section')
  }

  get hourlyForecastBlock() {
    return cy.get('.full-container')
  }

  get eightForecastDayBlock() {
    return cy.get('.daily-container.block.mobile-padding')
  }

  get dayListBlock() {
    return cy.get('.day-list')
  }

  get iconDownBtn(){
    return cy.get('.scrolling-container .chevron-container')
  }

  get dr (){

  }

  //This function is to type any input in search field
  search(input) {
    this.searchBtn.type(input).type('{enter}')
  }

  //This function verifies SupportBtn is a dropdown and after click has 'drop-down visible' attribute in CSS
  verifySupportBtn() {
    this.supportBtn.click()
    this.supportDropDown.invoke('attr', 'class').should('contain', 'dropdown-visible')
  }
}

module.exports = new HomePage()