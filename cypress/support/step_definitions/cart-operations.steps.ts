import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(/the cart should contain "(.+)" item[s]?/, (count: number) => {
  cy.get(".cart-item").should("have.length", count)
});

Then(/the total price should be "(.+)"/, (totalPrice: number) => {
  cy.get(".cart-total").contains(totalPrice);
})

When(/the user removes "(.+)" from the cart/, (productName: string) => {
  cy.get(`li:contains("${productName}")`).find(".remove-button").click();
})

Then(/the product "(.+)" should contain "(.+)"/,(productName: string, buttonText: string) => {
  cy.contains(productName).closest("div").find("button").contains(buttonText);
})

Then(/the product "(.+)" should not contain "(.+)"/,(productName: string, buttonText: string) => {
  cy.contains(productName).closest("div").find("button").contains(buttonText).should("not.exist");
})
