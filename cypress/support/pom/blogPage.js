class BlogPage {
  // get origin () {
  //     return cy.origin('https://openweather.co.uk/blog/category/weather', () => {
  //     })
  // }

  get categories() {
    return cy.get('#blog-categories')
  }

  // origin() {
  //     return cy.origin('https://openweather.co.uk/blog/category/weather', () => {
  //         cy.get('#blog-categories')
  //     })
  // }
}

module.exports = new BlogPage()