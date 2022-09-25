/// <reference types="cypress" />

// it('By some data id (Different tag)', () =>{
//   cy.visit('http://www.facebook.com')
//   cy.get('[data-cookiebanner="accept_button"]').click()
//  // cy.get("[data-testid=_42ft _4jy0 _9xo7 _4jy3 _4jy1 selected _51sy]").click
// });

it('Using get and find & eq', () =>{
  cy.visit('https://next.privat24.ua/deposit/open')
  cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using get and find & eq', () =>{
  cy.viewport(1440, 900) // Set viewport to 550px x 750px
  cy.viewport('macbook-15') // Set viewport to 375px x 667px
  cy.visit('https://docs.cypress.io/api/commands/eq')
  cy.get('div').find('nav').find('ul>li').find('a').eq(1)
  cy.get('.scrollactive-nav > :nth-child(1) > .block').click()//fdsfsfsd
});