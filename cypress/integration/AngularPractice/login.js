/// <reference types="Cypress"/>
import login from "../../support/pageObject/login"

beforeEach(function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

describe('TS1: angularpractice Page',function(){

    it('TC1: Verify title of Page', function(){
        cy.title().should('include', 'ProtoCommerce')
    });

    it('TC2: Verify top texts menu ', function(){
        cy.get('nav.navbar-dark').find('a.navbar-brand').should('have.text','ProtoCommerce')
        cy.get(':nth-child(1) > .nav-link').should('have.text','Home')
        cy.get(':nth-child(2) > .nav-link').should('have.text','Shop')  
        });

    it('TC3: Verify image texts ', function(){
        cy.get('h1').should('have.text','Protractor Tutorial')  
        });

    it('TC4: Verify image texts ', function(){
        cy.get(':nth-child(1) > .nav-link').should('have.attr','href',"/angularpractice")
        cy.get(':nth-child(2) > .nav-link').should('have.attr','href',"/angularpractice/shop")
        });

    it('TC5: Verify message keeping all field blank', function(){
        cy.get('input.btn-success').click()
        cy.get('div.alert-success').then(function(successText){
        const sucText= successText.text()
        expect(sucText).to.have.includes('Success! The Form has been submitted successfully.')
        });

    }) 

    })
   
