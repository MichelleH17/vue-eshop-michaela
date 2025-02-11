import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given(/the user is on the "(.+)" page/i, (page: string) => {
    cy.visit(page.toLowerCase());
});

When(/the user clicks on the "(.+)" navigation link/, (link: string) => {
  cy.get("header nav").find("a").contains(link).click();
});

Then(/the url should contain "(.+)"/, (url: string) => {
  cy.url().should("include", url);
})

Then(/the user should not see "(.+)" displayed on the page/, (what: string) => {
  cy.contains(what).should("not.exist")
});

Then(/the user should see "(.+)" on the page/, (what: string) => {
  cy.contains(what).should("exist")
});

When(/the user adds "(.+)" to the cart/, (productName: string) => {
  cy.contains(productName).closest("div").find("button").contains("BUY").click();
})

When(/the user increases the quantity of "(.+)"/, (productName: string) => {
  cy.contains(productName).closest("div").find("button").contains("+").click();
})

Then(/the cart should contain the following items/, (dataTable: DataTable) => {
  const dataTableObject = dataTable.hashes();
  dataTableObject.forEach((row, index) => {
    cy.get(".cart-item")
    .eq(index)
    .contains(row.name)
    .closest(".cart-item")
    .contains(row.quantity + "x")
    .closest(".cart-item")
    .contains(row.price + "€");
  })
})
