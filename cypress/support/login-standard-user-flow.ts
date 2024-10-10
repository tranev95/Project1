import { elements } from "./elements"
export const loginStandardUser = () => {
  cy.visit("https://www.saucedemo.com/")
  cy.get(elements.loginPageData.usernameField).type("standard_user")
  cy.get(elements.loginPageData.passwordField).type("secret_sauce")
  cy.get(elements.loginPageData.loginButton).click()
  cy.url().should("include", "/inventory")
}
