import { constants, elements } from "../support"

describe("Perform test cases on the Login Page", () => {
  beforeEach(() => {
    cy.visit(constants.pageUrl.loginPage)
  })
  it("Assert the data such as the logo, buttons, text ", () => {
    cy.get(elements.loginPageData.title)
      .should("be.visible")
      .and("contain", "Swag Labs")
    cy.get(elements.loginPageData.usernameField)
      .should("be.visible")
      .and("have.attr", "placeholder", "Username")
    cy.get(elements.loginPageData.passwordField)
      .should("be.visible")
      .and("have.attr", "placeholder", "Password")
    cy.get(elements.loginPageData.loginButton)
      .should("be.visible")
      .and("have.attr", "value", "Login")
    cy.get(elements.loginPageData.acceptedUsernames)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const usernames = text.split(",")
        usernames.forEach((username) => {
          expect(usernames).to.include(username)
        })
      })
    cy.get(elements.loginPageData.acceptedPasswords)
      .should("be.visible")
      .and("contain.text", "secret_sauce")
  })
  it("Use the standard_user to login, click the login button, validate success through url change ", () => {
    cy.get(elements.loginPageData.usernameField).type("standard_user")
    cy.get(elements.loginPageData.passwordField).type("secret_sauce")
    cy.get(elements.loginPageData.loginButton).click()
    cy.url().should("include", "/inventory")
  })
  it("Use the locked_out_user to login, click the login button, validate the error message ", () => {
    cy.get(elements.loginPageData.usernameField).type("locked_out_user")
    cy.get(elements.loginPageData.passwordField).type("secret_sauce")
    cy.get(elements.loginPageData.loginButton).click()
    cy.get(elements.loginPageData.errorMessage).should(
      "contain.text",
      "Epic sadface: Sorry, this user has been locked out."
    )
  })
  it("Use the problem_user to login, click the login button, validate the problem using the wrong image displayed on the inventory ", () => {
    cy.get(elements.loginPageData.usernameField).type("problem_user")
    cy.get(elements.loginPageData.passwordField).type("secret_sauce")
    cy.get(elements.loginPageData.loginButton).click()
    cy.get(elements.inventoryPageData.inventoryItemImage)
      .should("be.visible")
      .and("have.attr", "src", "/static/media/sl-404.168b1cce.jpg")
      .and("have.attr", "alt", "Sauce Labs Backpack")
  })
  it("Use the performance_glitch_user to login, click the login button, validate the performance problem", () => {
    cy.get(elements.loginPageData.usernameField).type("performance_glitch_user")
    cy.get(elements.loginPageData.passwordField).type("secret_sauce")
    cy.get(elements.loginPageData.loginButton).click()
    cy.get(elements.inventoryPageData.inventoryItemName)
      .should("be.visible")
      .and("contain.text", "Sauce Labs Backpack")
  })
  it("Use the wrong user to login, click the login button, validate the error message", () => {
    cy.get(elements.loginPageData.usernameField).type("trajche_test")
    cy.get(elements.loginPageData.passwordField).type("test_trajche")
    cy.get(elements.loginPageData.loginButton).click()
    cy.get(elements.loginPageData.errorMessage).should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    )
  })
})
