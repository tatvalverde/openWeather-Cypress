const loginPage = require('../../support/pom/loginPage')
const homePage = require('../../support/pom/homePage')
const guidePage = require('../../support/pom/guidePage')
const apiPage = require('../../support/pom/apiPage')
const dashboardPage = require('../../support/pom/dashboardPage')
const marketplacePage = require('../../support/pom/marketplacePage')
const pricingPage = require('../../support/pom/pricingPage')
const mapsPage = require('../../support/pom/mapsPage')
const ourInitiativesPage = require('../../support/pom/ourInitiativesPage')
const partnersPage = require('../../support/pom/partnersPage')
const blogPage = require('../../support/pom/blogPage')
const forBusinessPage = require('../../support/pom/forBusinessPage')
const popUpDifferentWeather = require('../../support/pom/popUpDifferentWeather')

describe('NavBar Labels exist and redirects to right pages', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('logo exists and redirects to home page', () => {
    homePage.logo.should('be.visible')
  })

  it('Search Field and Search button operates as expected', () => {
    homePage.search('London')
    cy.url().should('eq', 'https://openweathermap.org/find?q=London')
  })

  it('Guide button visible and redirects to right link', () => {
    homePage.guideBtn.should('be.visible').should('have.text', 'Guide').click({force: true})
    guidePage.header.should('have.text', 'Weather data in a fast and easy-to-use way')
  })

  it('API button visible and redirects to right link', () => {
    homePage.apiBtn.should('be.visible').should('have.text', 'API').click({force: true})
    apiPage.header.should('have.text', 'Weather API')
  })

  it('Dashboard button visible and redirects to right link', () => {
    homePage.dashboardBtn.should('be.visible').should('have.text', 'Dashboard').click({force: true})
    dashboardPage.header.should('have.text', 'OpenWeather Dashboard')
  })

  it('Marketplace button visible and redirects to right link', () => {
    homePage.marketplaceBtn
      .invoke('removeAttr', 'target')
      .should('be.visible')
      .should('have.text', 'Marketplace')
      .click({force: true})
    marketplacePage.header.should('have.text', 'Custom Weather Products')
  })

  it('Pricing button visible and redirects to right link', () => {
    homePage.pricingBtn.should('be.visible').should('have.text', 'Pricing').click({force: true})
    pricingPage.header.should('contain', 'Pricing')
  })

  it('Maps button visible and redirects to right link', () => {
    homePage.mapsBtn.should('be.visible').should('have.text', 'Maps').click({force: true})
    mapsPage.wrapper.should('be.visible')
  })

  it('Our Initiatives button visible and redirects to right link', () => {
    homePage.ourInitiativesBtn.should('be.visible').should('have.text', 'Our Initiatives').click()
    ourInitiativesPage.header.should('have.text', 'Our initiatives')
  })

  it('Partners button visible and redirects to right link', () => {
    homePage.partnersBtn.should('be.visible').should('have.text', 'Partners').click()
    partnersPage.header.should('have.text', 'Partners and solutions')
  })

  it('Blog button visible and redirects to right link', () => {
    homePage.blogBtn
      .invoke('removeAttr', 'target')
      .should('be.visible')
      .should('have.text', 'Blog')
      .click()
    blogPage.categories.should('be.visible')
  })

  it('For Business visible and redirects to right link', () => {
    homePage.forBusinessBtn
      .invoke('removeAttr', 'target')
      .should('be.visible')
      .should('have.text', 'For Business')
      .click()
    forBusinessPage.header.should('be.visible')
  })

  it('Sign in visible and redirects to right link', () => {
    homePage.signInBtn
      .should('be.visible')
      // .should('contains', 'Sign In')
      .click({force: true})
    loginPage.header.should('have.text', 'Sign In To Your Account')
  })

  it('Support is visible and redirects to right link', () => {
    homePage.supportBtn.should('exist')
    homePage.verifySupportBtn()
  })
})

describe('Header and Search Input', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('header image exists and visible', () => {
    homePage.headerImage.should('be.visible')
  })

  it('h1 text exists and visible', () => {
    homePage.h1Text.should('be.visible').should('have.text', 'OpenWeather')
  })

  it('h2 text exists and visible', () => {
    homePage.h2Text
      .should('be.visible')
      .should('have.text', 'Weather forecasts, nowcasts and history in a fast and elegant way')
  })

  it.only('Search operates as expected', () => {
    homePage.placeholderInSearchField.should('have.attr', 'placeholder', 'Search city')

    const cities = ['Berlin', 'Dubai', 'London', 'Test City']
    // city[2] Math.random
    cities.forEach(city => {
      homePage.searchField.type(city)
      homePage.buttonSearch.click()
      homePage.searchField.clear()
      cy.wait(500)
      if (city === 'Test City') {
        homePage.cityNotFound
          .should('be.visible')
          .should(
            'have.text',
            "Not found. To make search more precise put the city's name, comma, 2-letter country code (ISO3166)."
          )
      } else {
        homePage.searchDropDown.should('be.visible')
      }
    })
  })
})

describe('Buttons for Weather', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('Geo Button after press block', () => {
    homePage.geoBtn.should('be.visible').click()
    homePage.widgetNotification
      .should('be.visible')
      .should('have.text', 'Location unavailable. Displaying default location: London')
    // Make assertion when pointing on button its getting from gray to white
  })

  it('Metric Btn is visible', () => {
    homePage.metricBtn.should('be.visible').should('have.text', 'Metric: °C, m/s')
    homePage.currentTemperatureBlock.should('contain.text', 'C')
    homePage.eightDayForecastDayList.each(eightDayForecastDayList => {
      cy.wrap(eightDayForecastDayList).should('contain.text', 'C')
    })
  })

  it('Imperial Btn is visible and when click on it temperature changes to F', () => {
    homePage.imperialBtn.should('be.visible').should('have.text', 'Imperial: °F, mph').click()
    homePage.currentTemperatureBlock.should('not.contain.text', 'C')
    homePage.currentTemperatureBlock.should('contain.text', 'F')
    homePage.eightDayForecastDayList.each(eightDayForecastDayList => {
      cy.wrap(eightDayForecastDayList).should('contain.text', 'F')
    })
  })
})

describe('pop-up different weather', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
    homePage.differentWeatherBtn.should('be.visible').click()
  })

  it('Different Weather Button', () => {
    popUpDifferentWeather.header.should('be.visible').should('contain.text', 'Different weather')
  })

  it('Icons in Different Weather are visible and text written as expected', () => {
    popUpDifferentWeather.iconsWeather.each(iconsWeather => {
      cy.wrap(iconsWeather).should('be.visible')
      const iconText = iconsWeather.text()
      cy.wrap(iconsWeather).should('have.text', iconText)
    })
  })

  it('Randomly Selects One of iconsWeather Buttons and checks their class is active', () => {
    popUpDifferentWeather.moreOptionsDropDown.click()
    popUpDifferentWeather.iconsWeather
      .its('length')
      .then((n) => Cypress._.random(0, n - 1))
      .then((k) => {
        popUpDifferentWeather.iconsWeather.eq(k).click()
          .should('have.class', 'activeIcon')
      })
  })

  it('Exit button is visible and clickable', () => {
    popUpDifferentWeather.exitButton.should('be.visible').click()
    homePage.guideBtn.should('be.visible')
  })

  it('More Options visible and clickable and after click changes name', () => {
    popUpDifferentWeather.moreOptionsDropDown
      .should('be.visible')
      .should('have.text', ' More options ')
      .click()
    popUpDifferentWeather.moreOptionsDropDown.should('have.text', ' Less options ')
    popUpDifferentWeather.divMoreOptions.should('not.have.attr', 'style', 'display: none;')
  })

  it('Labels under More Options', () => {
    popUpDifferentWeather.moreOptionsDropDown.click()
    popUpDifferentWeather.temperatureLabel
      .should('be.visible')
      .should('contain.text', 'Temperature')
    popUpDifferentWeather.windLabel.should('be.visible').should('have.text', 'Wind')
    popUpDifferentWeather.emailLabel.should('be.visible').should('have.text', 'Email')
    popUpDifferentWeather.dataSourceLabel.should('be.visible').should('have.text', 'Data source')
    popUpDifferentWeather.anyAdditionalInfoLabel
      .scrollIntoView()
      .should('be.visible')
      .should('have.text', 'Any additional information')
    //scrollIntoView Спросить как работает
  })

  it('Radio Button Labels are correct', () => {
    popUpDifferentWeather.moreOptionsDropDown.click()
    popUpDifferentWeather.radioButtonSwitch.each(radioButtonLabels => {
      cy.wrap(radioButtonLabels).should('be.visible')
      const radioButtonText = radioButtonLabels.text()
      cy.wrap(radioButtonLabels).should('have.text', radioButtonText)
    })
  })

  it('Radio Button buttons becoming gray when clicking on them', () => {
    popUpDifferentWeather.moreOptionsDropDown.click()
    popUpDifferentWeather.lightButton.should('have.class', 'active', true)
    popUpDifferentWeather.moderateButton.click()
    popUpDifferentWeather.lightButton.should('not.have.class', 'active', true)
    popUpDifferentWeather.moderateButton.should('have.class', 'active', true)
    popUpDifferentWeather.strongButton.click()
    popUpDifferentWeather.moderateButton.should('not.have.class', 'active', true)
    popUpDifferentWeather.strongButton.should('have.class', 'active', true)
  })
})

describe('Body', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })
  it('All blocks in the body are visible', () => {
    homePage.weatherBlock.should('be.visible')
    homePage.mapBlock.should('be.visible')
    homePage.hourlyForecastBlock.should('be.visible')
    homePage.eightForecastDayBlock.should('be.visible')
  })

  it('8 day forecast operates as expected', () => {
    homePage.eightDayForecastDayList.each(day => {
      cy.wrap(day).click()
      homePage.dayListBlock.should('have.attr','style', "display: none;")
      homePage.iconDownBtn.click()
    })
  })


})




describe('API', () => {
  it('first test', () => {
    cy.request({
      method: 'GET',
      url: 'jkgshdgh',
    }).then( () => {
      expect(response.body).have.property('url')
    })
  })
})


//Data Source dropdown doesnt have selectors ??

// describe('test', () => {
//   beforeEach(() => {
//     cy.visit('/')
//     cy.wait(2000)
//   })
//   it.only('test', () => {
//     cy.get('a[href="/api/one-call-3"]').eq(0).invoke('text').as('scoreA')
//     cy.get('a[href="/api/one-call-3"]').eq(2).invoke('text').then(parseInt).as('scoreB')
//     cy.then(function () {
//       expect(this.scoreA).to.be.equal('One Call API 3.0')
//     })
//   })
// })