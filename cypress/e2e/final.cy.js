let email = (Math.random() + 1).toString(36).substring(7) + "@gmail.com";
let password = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
let phone = '5' + Math.floor(Math.random() * 90000000 + 10000000);
let ID = Math.floor(Math.random() * 90000000000 + 10000000000).toString();

describe('User Registration', () => {
    beforeEach(() => {
    
      cy.fixture('userRegistration').as('userData');
    });
    it('should successfully register a new user', function() {
        // Step 1: Open the website
        cy.visit('https://testzootopia.loremipsum.ge/ka') 

     // Step 2: change language into "EN"
     cy.get('.header > .lang > :nth-child(2) > a').click();

     // Step 3: Click on the "log in" button in the top-right corner
     cy.get('.menu-pop > .rprof').click();

     // Step 4: Verify the "Authorization" popup appears
     cy.get('.avtorization > .input-shablon > h2').should('be.visible');

     // Step 5: Click on the "Register" link
     cy.get('.input-shablon > p > a').click();

     // Step 5: Fill out the registration form
     cy.get(':nth-child(1) > .ismile').type('Nini KV')
     cy.get(':nth-child(2) > .imail').type(email)
     cy.get('.ipir').type(ID)
     cy.get(':nth-child(4) > .itel').type(phone)
     cy.get(':nth-child(5) > .ipass').type(password)
     cy.get('.reg-form-left > :nth-child(6) > .ipass').type(password)     
     cy.get("label:nth-child(2) > svg:nth-child(1) > g:nth-child(1) > rect:nth-child(1)").click({force: true})
     cy.get('.regsub').click();
     cy.get('.bg-transparent').click();

  });
});

describe('Add Item to Cart', () => {
    it('Test Case 2: should add an item to the cart and verify the status ', () => {
      cy.visit('https://testzootopia.loremipsum.ge/ka')

      // Step 1: Open the website
      // Step 2: Choose one of the products from main page
      // Step 3: Click the green cart icon in the bottom-right corner of the product photo
      cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click();

      // Step 4: Verify that the cart icon changes to orange and the status changes to "added"
      cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').should('be.visible')
       // Step 5: Verify that the cart icon displays the correct number of items.
       
    });
});

describe('Remove Item from Cart', () => {
    it('Test Case 3: should remove an item from the cart and verify the status ', () => {
      cy.visit('https://testzootopia.loremipsum.ge/ka')

      // Step 1: Open the website
      // Step 2: Click on the cart icon in the bottom-right corner of the main page
      cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click();

      // Step 3: In the cart, click the red trash bin icon on the top-right corner of the item's photo
      cy.get('.clear > a > svg').click();

       // Step 4: Verify that the item is removed from the cart and the cart item shows 0
       cy.get('.empty').should('be.visible');
       cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count').should('be.visible');

    });
});


describe('Delete Item from Cart by Clicking Add to Cart Button Twice', () => {
    it('Test Case 4: should add an item to the cart and then remove it by clicking the button again ', () => {
      cy.visit('https://testzootopia.loremipsum.ge/ka')

       // Step 1: Open the website
       // Step 2: Choose one of the products from main page

      // Step 3: Click the green cart icon in the bottom-right corner of the product photo
      cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click();

      // Step 4: Verify that the cart icon changes to orange and the status changes to "added"
      cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').should('be.visible')

      // Step 5: Click the same button where the item was added to the cart
      cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > .price-cart > .product-cart').click();

      // Step 8: Verify that the item is removed from the cart
      cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count').should('be.visible');

    });
});


describe('Login with Registered Email and Password', () => {
    it('Test Case 5: should successfully log in with a registered email and password ', () => {
      cy.visit('https://testzootopia.loremipsum.ge/ka')

       // Step 1: Open the website

        // Step 2: change language into "EN"
     cy.get('.header > .lang > :nth-child(2) > a').click();

       // Step 3: Click on the "log in" button in the top-right corner of the main page
       cy.get('.menu-pop > .rprof').click();

       // Step 4: Verify the "Authorization" popup appears
     cy.get('.avtorization > .input-shablon > h2').should('be.visible');

     // Step 5: Enter the registered email in the email input
     cy.get(':nth-child(5) > .imail').click();
     cy.get(':nth-child(5) > .imail').type("nini.kv16@gmail.com")

      // Step 6: Enter the password in the password field
      cy.get('.ipass').click();
      cy.get('.ipass').type("Qwerty123");

      // Step 7: Click the authorization button
      cy.get('.avtorization > .input-shablon > .form-button').click();


    });
});

