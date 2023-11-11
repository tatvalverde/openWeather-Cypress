class PopUpDifferentWeather {
  get popUpFull() {
    return cy.get('pop-up-container')
  }

  get header() {
    return cy.get('.pop-up-header')
  }

  get iconsWeather() {
    return cy.get('li[data-v-3cdad65e]')
  }

  get exitButton() {
    return cy.get('.icon-close')
  }

  get moreOptionsDropDown() {
    return cy.get('.more-options')
  }

  get divMoreOptions() {
    return cy.get('div[data-v-3cdad65e][style]')
  }

  get temperatureLabel() {
    return cy.get('div[data-v-3cdad65e][style]').find('.section-container').eq(0)
  }

  get windLabel() {
    return cy.contains('[data-v-3cdad65e]', 'Wind')
  }

  get emailLabel() {
    return cy.contains('[data-v-3cdad65e]', 'Email')
  }

  get dataSourceLabel() {
    return cy.contains('[data-v-3cdad65e]', 'Data source')
  }

  get anyAdditionalInfoLabel() {
    return cy.contains('[data-v-3cdad65e]', 'Any additional information')
  }

  get radioButtonSwitch() {
    return cy.get('.radio-buttons-switch div')
  }

  get lightButton () {
    return cy.get('.radio-buttons-switch > :nth-child(1)')
  }

  get moderateButton () {
    return cy.get('.radio-buttons-switch > :nth-child(2)')
  }

  get strongButton () {
    return cy.get('.radio-buttons-switch > :nth-child(3)')
  }
}

module.exports = new PopUpDifferentWeather()