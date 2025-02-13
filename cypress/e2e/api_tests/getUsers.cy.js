describe('APIAutomationTesting_test_Suite', () =>{
    //Test case to validate Get user api for all users
it('GET USER REQUEST',()=>{
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
        }
    })
    .then((response)=>{
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(200)
    })
}
)
//Test case to validate specific user fetch from Get user api
it('GET USER 1',()=>{
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/7697810',
        headers: {
            Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
        }
    })
    .then((response)=>{
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(200)
        expect(response.body.id).to.equal(7697810)
    })
}
)

//Test case to validate Error message for user not found for Get user api
it('GET USER 1',()=>{
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/7697819',
        headers: {
            Authorization: "Bearer 9568de9e0733f5f7262f327c27d0f612b96477bcc7672d1db0f278e0f9b8a3d5"
        },
        failOnStatusCode: false
    })
    .then((response)=>{
        cy.log(JSON.stringify(response))
        expect(response.status).to.equal(404)
        
    })
}
)

}
)
