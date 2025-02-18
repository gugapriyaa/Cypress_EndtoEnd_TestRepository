describe('APIAutomationTesting_PUT CAll_Test', () =>{
    //function for random name generation
function generateRandomname(){
const randomnameString = Math.random().toString(36).substring(2,10)
return randomnameString
}
    //function for random email generation
function generateRandomEmail(){
const randomEmailString = Math.random().toString(36).substring(2,10)
const email = randomEmailString+"@test.com"
return email
}
    
    // Testcase to validate only PUT call API
    it('PUT USER REQUEST',()=>{
    let name = generateRandomname()
    
    cy.fixture('payload_put_users').then((payload)=>{
        payload.name = name
        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/7703939',
            headers: {
            Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
            },
            body: payload,
            failOnStatusCode: false
            
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body).has.property("name", name)
            expect(response.body).has.property("email", "gp3@gmail.com")
            })
    })
    })
// Testcase to validate End to End flow - POST, PUT and then GET to check
    it('PUT USER REQUEST',()=>{
        cy.fixture('payload_post_user').then((payload)=>{
        let emailAddress = generateRandomEmail()
        payload.email = emailAddress
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
            Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
            },
            body: payload
        }).then((response)=>{
            let id = response.body.id
            //PUT Call
            cy.fixture('payload_put_users').then((payload)=>{
                cy.request({
                    method: 'PUT',
                    url: 'https://gorest.co.in/public/v2/users/'+id,
                    headers: {
                    Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
                    },
                    body: payload,
                    failOnStatusCode: false
                    
                })
                .then((response)=>{
                    expect(response.status).to.equal(200)                
                })
                
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/'+id,
                    headers: {
                    Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
                    }
                })
                .then((response)=>{
                    expect(response.status).to.be.equal(200)
                    expect(response.body).has.property("name", payload.name)
                })
            })
        })  
            
        })      
    })


})