import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(/the cart icon should contain "(.+)"/, (quantity: number) => {
  cy.get("div span").contains(quantity);
})

When(/the user decreases the quantity of "(.+)"/, (productName: string) => {
  cy.contains(productName).closest("div").find("button").contains("-").click();
})
