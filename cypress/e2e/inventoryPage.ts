import { elements, flows } from '../support'

describe('Login to the page using the standard user, and assert the elements visible on the inventory page', () => {
  before(() => {
    flows.loginStandardUser()
  })
  it('Locate the Hamburger Menu, click it, assert the elements, then close it', () => {
    cy.get(elements.inventoryPageData.hamburgerMenuIcon).should('be.visible').and('have.attr', 'src')
    cy.get(elements.inventoryPageData.hamburgerMenuButton).should('be.visible').click()
    cy.get(elements.inventoryPageData.hamburgerMenuContainer).should('be.visible').and('contain.text', 'All Items').and('contain.text', 'About').and('contain.text', 'Logout').and('contain.text', 'Reset App State')
  })
})