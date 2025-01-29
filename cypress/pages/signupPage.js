export class signupPage {

weblocatorsobj = {

SignupLink :"[href='/login']",
NewUserSignUpSection : '.signup-form',
SignupNameField :'input[data-qa=signup-name]',
SignupEmailField : "input[data-qa='signup-email']",
SignupButton : "[data-qa='signup-button']"

}
 openURL() {

        cy.visit(Cypress.env('URL'))
    }

clickonSignupLink(){
    
    cy.get(this.weblocatorsobj.SignupLink).click()
    cy.title().should('eq','Automation Exercise - Signup / Login')
}

enterName(SName){
cy.get(this.weblocatorsobj.SignupNameField).type(SName)
}

enterEmailid(Emailid){
    cy.get(this.weblocatorsobj.SignupEmailField).type(Emailid)
    }
    

ClickonSignupbtn(){
    cy.get(this.weblocatorsobj.SignupButton).click()
}
}