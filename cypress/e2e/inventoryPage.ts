import { constants, elements, flows } from "../support"

describe("Login to the page using the standard user, and assert the elements visible on the inventory page", () => {
  before(() => {
    flows.loginStandardUser()
  })
  it("Locate the Page Logo Title, assert the text", () => {
    cy.get(elements.inventoryPageData.pageLogo)
      .should("be.visible")
      .and("contain.text", "Swag Labs")
  })
  it("Locate the Hamburger Menu, click it, assert the elements, then close it", () => {
    cy.get(elements.inventoryPageData.hamburgerMenuIcon)
      .should("be.visible")
      .and("have.attr", "src")
    cy.get(elements.inventoryPageData.hamburgerMenuButton)
      .should("be.visible")
      .click()
    cy.get(elements.inventoryPageData.hamburgerMenuContainer)
      .should("be.visible")
      .and("contain.text", "All Items")
      .and("contain.text", "About")
      .and("contain.text", "Logout")
      .and("contain.text", "Reset App State")
    cy.get(elements.inventoryPageData.hamburgerMenuXButton)
      .should("be.visible")
      .and("contains.text", "Close Menu")
      .click()
    cy.get(elements.inventoryPageData.hamburgerMenuContainer).should(
      "not.be.visible"
    )
    cy.get(elements.inventoryPageData.pageLogo)
      .should("be.visible")
      .and("contain.text", "Swag Labs")
  })
  it("Locate the Page Title, assert the text", () => {
    cy.get(elements.inventoryPageData.pageTitle)
      .should("be.visible")
      .and("contain.text", "Products")
  })
  it("Locate the filter, cycle through the options, assert the text", () => {
    cy.get(elements.inventoryPageData.filterButton)
      .should("be.visible")
      .and("contain.text", "Name (A to Z)")
      .select(1)
    cy.get(elements.inventoryPageData.filterButton)
      .should("be.visible")
      .and("contain.text", "Name (Z to A)")
      .select(2)
    cy.get(elements.inventoryPageData.filterButton)
      .should("be.visible")
      .and("contain.text", "Price (low to high)")
      .select(3)
    cy.get(elements.inventoryPageData.filterButton)
      .should("be.visible")
      .and("contain.text", "Price (high to low)")
  })
  it("Locate the Page Footer, assert the elements and its text", () => {
    cy.get(elements.inventoryPageData.footer).should("be.visible")
    cy.get(elements.inventoryPageData.footerCopyright)
      .should("be.visible")
      .and(
        "contain.text",
        "© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
      )
    cy.get(elements.inventoryPageData.twitter)
      .should("be.visible")
      .and("have.attr", "href", "https://twitter.com/saucelabs")
      .and("contain.text", "Twitter")
      .click()
    cy.intercept("GET", "https://twitter.com/saucelabs").as("twitterPage")
    cy.get(elements.inventoryPageData.twitter).should(
      "have.attr",
      "href",
      "https://twitter.com/saucelabs"
    )
    cy.get(elements.inventoryPageData.facebook)
      .should("be.visible")
      .and("have.attr", "href", "https://www.facebook.com/saucelabs")
      .and("contain.text", "Facebook")
      .click()
    cy.intercept("GET", "https://www.facebook.com/saucelabs").as("facebookPage")
    cy.get(elements.inventoryPageData.facebook).should(
      "have.attr",
      "href",
      "https://www.facebook.com/saucelabs"
    )
    cy.get(elements.inventoryPageData.linkedIn)
      .should("be.visible")
      .and("have.attr", "href", "https://www.linkedin.com/company/sauce-labs/")
      .and("contain.text", "LinkedIn")
      .click()
    cy.intercept("GET", "https://www.linkedin.com/company/sauce-labs/").as(
      "linkedInPage"
    )
    cy.get(elements.inventoryPageData.linkedIn).should(
      "have.attr",
      "href",
      "https://www.linkedin.com/company/sauce-labs/"
    )
  })
  it("Locate the Cart button, assert the elements, no clicking it this time", () => {
    cy.get(elements.inventoryPageData.cartButton)
      .should("be.visible")
      .and("have.class", "shopping_cart_link")
  })
  it("Locate the Inventory Item, assert the elements, text etc", () => {
    cy.get(elements.inventoryPageData.inventoryItemName)
      .should("be.visible")
      .and("contain.text", "Sauce Labs Backpack")
    cy.get(elements.inventoryPageData.inventoryItemDescription)
      .should("be.visible")
      .and(
        "contain.text",
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
      )
    cy.get(elements.inventoryPageData.addToCartButton)
      .should("be.visible")
      .and("have.attr", "id", "add-to-cart-sauce-labs-backpack")
      .and("contain.text", "Add to cart")
  })
})
