describe('Navigating the e-shop app', () => {
  describe("Navigation Test", () => {
    beforeEach(() => {
        // Visit the base URL of the Vue app
        cy.visit("/");
    });

    it("should have Store and Cart links in the navigation", () => {
        // Check for the existence of navigation links
        cy.get("nav")
            .should("exist")
            .within(() => {
                cy.contains("Store").should("be.visible");
                cy.contains("Cart").should("be.visible");
            });
        cy.get("h1").should("contain.text", "E-SHOP");
    });

    it("should navigate to the Store page and check the content", () => {
        // Click on the 'Store' link and assert the content on the page
        cy.contains("Store").click();
        cy.url().should("include", "/store");
        // not h1, any element, any text, anywhere
        cy.contains("sint elit").should("exist");
    });

    it("should navigate to the Cart page and check the content", () => {
        // Click on the 'Cart' link and assert the content on the page
        cy.contains("Cart").click();
        cy.url().should("include", "/cart");
        cy.contains("sint elit").should("not.exist");
        cy.contains("Your cart is empty").should("exist");
    });
});
})
