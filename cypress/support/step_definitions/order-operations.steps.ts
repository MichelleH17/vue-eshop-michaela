import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/the user creates an order by clicking on the "(.+)" button/, (buttonText: string) => {
  cy.get("button").contains(buttonText).click();
});

When(/the user goes to the "(.+)" page/, (pageName: string) => {
  cy.get("a").contains(pageName).click();
})

Then(/the user clicks on the order button/, () => {
  cy.get(".order-button").click();
})

Then(/the user should be on the "(.+)" page/, (pageName: string) => {
  cy.url().should("include", pageName);
});

Then(/the user should see new order with "(.+)" items/, (productQuantity: number) => {
  cy.contains(productQuantity);
})

When(/the user clicks on order with the product "(.+)"/, (product: string) => {
  cy.get(".order-item").contains(product).click();
})

Then(/the order detail should contain "(.+)"/, (productName: string) => {
  cy.contains(productName);
})
