import {searchProductPage} from "../../pages/searchProductPage"

const searchobj = new searchProductPage()
import {signupPage} from "../../pages/signupPage"
const signupobj = new signupPage()
import Generic_TestData from "../../fixtures/Generic_TestData.json"

describe('Searchproduct_test_Suite', () =>{
//using before hook
// before(() => {
//     cy.login(Generic_TestData.login.username, Generic_TestData.login.password)

// })
it('before hook commands', ()=>{
cy.visit('')
signupobj.clickonSignupLink()
cy.get("[data-qa='login-email']").type(Generic_TestData.username)
cy.get("[placeholder='Password']").type(Generic_TestData.password)
cy.get("[data-qa='login-button']").click()
})
    it('Search_Product_test001', ()=>{
        cy.visit('')
        signupobj.clickonSignupLink()
        cy.get("[data-qa='login-email']").type(Generic_TestData.username)
        cy.get("[placeholder='Password']").type(Generic_TestData.password)
        cy.get("[data-qa='login-button']").click()
        searchobj.clickProducts_Link()
        searchobj.searchProduct(Generic_TestData.productName)
        searchobj.addToCart()
        searchobj.verifySucessMessage().should('contain', Generic_TestData.successMessage)
   
    }
    )

}
)