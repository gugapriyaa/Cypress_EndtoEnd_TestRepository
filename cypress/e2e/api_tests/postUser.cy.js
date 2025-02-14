describe('APIAutomationTesting_Post CAll_Test', () =>{

    //function for random email generation
function generateRandomEmail(){
    const randomEmailString = Math.random().toString(36).substring(2,10)
    const email = randomEmailString+"@test.com"
    return email
}

it('POST USER REQUEST',()=>{
    let emailAddress = generateRandomEmail()
    cy.fixture("api_user.json").then((responseObject)=>{
        responseObject.email = emailAddress
        //data.email=emailAddress
        cy.log("************Email************"+ emailAddress)
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
            Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
            },
            body: responseObject
            })
            .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "GP1")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).not.be.null
            //chaining in Cypress; ie when we are making a POST call, we are verifying the resource was created as part of POST call
            let id = response.body.id
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/'+id,
                headers: {
                Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
                }
            })
            .then((response)=>{
                
                expect(response.status).to.equal(200)
                expect(response.body).has.property("name", "GP1")
                expect(response.body).has.property("gender", "female")
                expect(response.body).has.property("status", "active")
                expect(response.body.id).not.be.null
            })
        })
    })
})
// Testcase to validate existing email id
it('POST USER REQUEST',()=>{
    cy.fixture("api_user.json").then((responseObject)=>{
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/',
        headers: {
        Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
        },
        body: responseObject,
        failOnStatusCode: false
        })
    })
    .then((response)=>{
        expect(response.status).to.equal(422)
    })
})
//Testcase to validate Invalid Email format
it('POST USER REQUEST',()=>{
    cy.fixture("api_user.json").then((responseObject)=>{
        responseObject.email = "invalidemailformat"
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/',
        headers: {
        Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
        },
        body: responseObject,
        failOnStatusCode: false
        })
    })
    .then((response)=>{
        expect(response.status).to.equal(422)
        expect(response.body[0]).has.property("message", "is invalid")
    })
})

})