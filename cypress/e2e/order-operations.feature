Feature: Order Operations

    Background: The user visits the home page
      Given the user is on the "store" page

    Scenario: Creating an order from the cart
      When the user adds "labore excepteur" to the cart
      And the user adds "sint elit" to the cart

      When the user goes to the "Cart" page
      Then the user clicks on the "Order" button
      Then the user should be on the "/orders" page
      Then the user should see new order with "2" items

      When the user clicks on order with the product "labore excepteur"
      Then the order detail should contain "labore excepteur"
      And the order detail should contain "sint elit"
      
      When the user clicks on the "Cart" navigation link
      Then the user should not see "labore excepteur" displayed on the page
      And the user should not see "sint elit" displayed on the page
      And the user should see "Your cart is empty" on the page  
    