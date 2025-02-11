import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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
