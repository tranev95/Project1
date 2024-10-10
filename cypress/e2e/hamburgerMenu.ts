import { elements, flows } from "../support"

describe("Login to the page using the standard user, open the Hamburger menu and use it's contents", () => {
  before(() => {
    flows.loginStandardUser()
  })
  it("Locate the Hamburger Menu, open it, open the options listed", () => {
    cy.get(elements.inventoryPageData.hamburgerMenuIcon)
      .should("be.visible")
      .and("have.attr", "src")
    cy.get(elements.inventoryPageData.hamburgerMenuButton)
      .should("be.visible")
      .click()
    cy.get(elements.inventoryPageData.hamburgerMenuContainer).should(
      "be.visible"
    )
  })
  it("Click About and assert it", () => {
    cy.get(elements.inventoryPageData.hamburgerMenuContainer).should(
      "be.visible"
    )
    cy.intercept("GET", "https://saucelabs.com/", {
      statusCode: 200,
      body: "Navigation blocked, returning to previous page",
    }).as("aboutPage")
    cy.get(elements.inventoryPageData.hamburgerMenuOption)
      .should("be.visible")
      .and("have.attr", "href", "https://saucelabs.com/")
      .and("contain.text", "About")
      .click()
    cy.go("back")
  })
  it("Re-open the Hamburger Menu and click Logout", () => {
    cy.get(elements.inventoryPageData.hamburgerMenuButton)
      .should("be.visible")
      .click()
    cy.get(elements.inventoryPageData.hamburgerMenuContainer).should(
      "be.visible"
    )
    cy.get(elements.inventoryPageData.hamburgerMenuOption2)
      .should("be.visible")
      .and("contain.text", "Logout")
      .click()
    cy.url().should("include", "https://www.saucedemo.com/")
  })
})
