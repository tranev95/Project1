import { constants, elements, flows } from '../support'

describe('Login to the page using the standard user, and assert the elements visible on the inventory page', () => {
 /* For some reason the page goes blank if we use Before
  before(() => {
    flows.loginStandardUser()
  })
*/it('Login as standard user', () => {
  cy.visit(constants.pageUrl.loginPage)
	cy.get(elements.loginPageData.usernameField).type('standard_user')
    cy.get(elements.loginPageData.passwordField).type('secret_sauce')
    cy.get(elements.loginPageData.loginButton).click()
    cy.url().should('include', '/inventory')
})
  it('Locate the Page Logo Title, assert the text', () => {
    cy.get(elements.inventoryPageData.pageLogo).should('be.visible').and('contain.text', 'Swag Labs')
  })
  it('Locate the Hamburger Menu, click it, assert the elements, then close it', () => {
    cy.get(elements.inventoryPageData.hamburgerMenuIcon).should('be.visible').and('have.attr', 'src')
    cy.get(elements.inventoryPageData.hamburgerMenuButton).should('be.visible').click()
    cy.get(elements.inventoryPageData.hamburgerMenuContainer).should('be.visible').and('contain.text', 'All Items').and('contain.text', 'About').and('contain.text', 'Logout').and('contain.text', 'Reset App State')
    cy.get(elements.inventoryPageData.hamburgerMenuXButton).should('be.visible').and('contains.text', 'Close Menu').click()
    cy.get(elements.inventoryPageData.hamburgerMenuContainer).should('not.be.visible')
    cy.get(elements.inventoryPageData.pageLogo).should('be.visible').and('contain.text', 'Swag Labs')
  })
})