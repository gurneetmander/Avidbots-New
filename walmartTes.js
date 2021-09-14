/// <reference types="cypress"/>



it('google test', function(){
    cy.visit("https://www.walmart.ca/")
    cy.get('.e1xoeh2i1').type("laptops{enter}")
    cy.contains("Gaming laptops").click()
    cy.contains('Price').click()
    cy.get('[data-range="max"] > .css-14avrqk').click().type("2000")
    //cy.get('.e9pqgm92 css-gja9m7 edzik9p0').click()
    cy.get('.css-gja9m7').click()
    cy.wait(1000)
    cy.get('.css-2ze04u').scrollIntoView({ easing: 'linear' })
    cy.get('#product-results').invoke('text').then((totalProducts) =>{
     
      cy.log(totalProducts)
  
      })

      cy.get(':nth-child(1) > .css-1fnwt3w > .css-18ejvus > .css-1baqlt1').click()
      cy.get('.css-vfxkzw').click()
    //cy.get("css-2vqe5n esdkp3p0").get().
   // cy.wait(3000)
    //cy.get('.documentation').scrollTo('bottom', { easing: 'linear' })
    //cy.scrollTo(0, 500,ensureScrollable)
    //cy.get(':nth-child(56) > .css-1fnwt3w > .css-15x41f3 > .css-ybbenb > .css-124rndv > .css-1vsc4ug > .css-2f4vfj > .css-8frhg8 > .css-s3vnpn > .css-2vqe5n')
   // cy.get('.css-14avrqk ee7ofor4').type("2000{enter}")
   // cy.contains('Max').type("2000{enter}")
  // cy.get('.css-14avrqk').eq(2).type("2000{enter}")

  cy.get('.css-vfxkzw').click()
  cy.get('.css-16d3uws > .e8oyuhv19').click()
  cy.get('#firstName').click().type("human")
  cy.get('#lastName').click().type("being")
  cy.get('#email').click().type("abc@gmail.com")
  cy.get('#pickupLocation').click().type("7R5T6U")
  cy.get('.e1xj0gha1').click()
})