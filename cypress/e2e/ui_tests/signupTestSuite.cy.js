import {signupPage} from "../../pages/signupPage"

const signupobj = new signupPage()

import signup_TestData from '../../fixtures/signup_TestData.json'



describe('Signup_test_Suite', () =>{

    it('signup_newsignup_test001', ()=>{
        signupobj.openURL()
        signupobj.clickonSignupLink()
        signupobj.enterName(signup_TestData.SignupName)
        signupobj.enterEmailid(signup_TestData.SignupEmailid)
        signupobj.ClickonSignupbtn()
    
    }
    )

}
)