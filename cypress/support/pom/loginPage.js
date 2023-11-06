class Login {
  get header() {
    return cy.get('h3')
  }
  get email() {
    return cy.get('.new_user').find('[placeholder="Enter email"]')
  }
  get password() {
    return cy.get('.new_user').find('[placeholder="Password"]')
  }
  get submitBtn() {
    return cy.get('.new_user').find('[type="submit"]')
  }
  get rememberMeCheckBox() {
    return cy.get('[type="checkbox"]')
  }
  get failedAlertHeader() {
    return cy.get('.panel-heading')
  }
  get failedAlertBody() {
    return cy.get('.panel-body')
  }
  get logOutBtn() {
    return cy.get('#user-dropdown-menu').find('.logout')
  }
  get successAlertHeader() {
    return cy.get('.panel-heading')
  }
  get successAlertBody() {
    return cy.get('.panel-body')
  }

  login(username, password) {
    this.email.type(username)
    this.password.type(password)
    this.submitBtn.click()
  }

  emptylogin(username, password) {
    this.email.type(username).clear()
    this.password.type(password).clear()
    this.submitBtn.click()
  }
}

module.exports = new Login()