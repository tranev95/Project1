import { elements, flows } from "../support"

describe("Login to the page using the standard user, click on the Cart icon, and assert the elements visible on the cart page", () => {
  before(() => {
    flows.loginStandardUser()
  })
  it("Locate and cllick the Cart button", () => {
    cy.get(elements.inventoryPageData.cartButton)
      .should("be.visible")
      .and("have.class", "shopping_cart_link")
      .click()
  })
  it("Locate the Page Logo Title, assert the text", () => {
    cy.get(elements.inventoryPageData.pageLogo)
      .should("be.visible")
      .and("contain.text", "Swag Labs")
  })
  it("Locate the Page Title, assert the text", () => {
    cy.get(elements.inventoryPageData.pageTitle)
      .should("be.visible")
      .and("contain.text", "Your Cart")
  })
  it("Locate the Quantity and Description labels , assert the text", () => {
    cy.get(elements.cartPageData.quantity)
      .should("be.visible")
      .and("contains.text", "QTY")
    cy.get(elements.cartPageData.description)
      .should("be.visible")
      .and("contains.text", "Description")
  })
  it("Locate the Continue Shopping button, assert the text", () => {
    cy.get(elements.cartPageData.continueShoppingButton)
      .should("be.visible")
      .and("contains.text", "Continue Shopping")
  })
  it("Locate the Checkout button, assert the text", () => {
    cy.get(elements.cartPageData.checkoutButton)
      .should("be.visible")
      .and("contains.text", "Checkout")
  })
})
