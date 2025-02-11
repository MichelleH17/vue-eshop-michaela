Feature: Navigation
  Navigating different pages of the application

  Background: The user visits the home page
    Given the user is on the "/store" page

  Scenario: THe user navigates to the cart page
    When the user clicks on the "Cart" navigation link
    Then the url should contain "/cart"
    And the user should not see "sint elit" displayed on the page
    And the user should see "Your cart is empty" on the page    