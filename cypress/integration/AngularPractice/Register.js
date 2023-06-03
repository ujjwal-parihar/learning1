/// <reference types="Cypress"/>
import login from "../../support/pageObject/login"

beforeEach(function(){
    cy.visit('https://demo.nopcommerce.com/')
})

describe('TS1: angularpractice Page',function(){

    it('TC1: Verify title of Page', function(){
        cy.title().should('include', 'nopCommerce demo store')
    });

        

    }) 


   
