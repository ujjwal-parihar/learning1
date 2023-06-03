/// <reference types="Cypress"/>
import login from "../../support/pageObject/login"

beforeEach(function(){
    cy.visit('https://demo.nopcommerce.com/')
})

describe('TS1: angularpractice Page',function(){

    it('TC1: Verify title of Page', function(){
        cy.title().should('include', 'nopCommerce demo store')
    });

    it('TC2: Verify availability of Register link', function(){
        cy.get('a.ico-register').should("have.attr", "href", "/register?returnUrl=%2F");
        //cy.get('a.ico-register').click()
    }); 
    it('TC3: Verify that on clicking Register link, user redirects to Registration page. Verify the link', function(){
        cy.get('a.ico-register').click();
        cy.url().should('include', '/register?returnUrl=%2F')

    }); 
    it('TC4: Verify the page title', function(){
        cy.get('a.ico-register').click();
        cy.get('div.page-title h1').then(function(txt){
            const txts= txt.text()
            expect(txts).have.eql('Register')
        
        })
        
    }); 
    it('TC5: Verify that Gender: Male and Female are not selected', function(){
        cy.get('a.ico-register').click();
        cy.get('#gender-male').should('not.be.selected')
        cy.get('#gender-female').should('not.be.selected')
    });
    }) 


   
