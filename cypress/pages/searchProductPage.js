export class searchProductPage {

    weblocatorsobj = {
    
    Products_Link :'.material-icons.card_travel',
    search_input : '#search_product',
    click_search :'#submit_search',
    addtocart : "(//a[contains(text(),'Add to cart')])[1]",
    addtoCartSlider : "(//a[contains(text(),'Add to cart')])[2]",
    successMessages : "//*[contains(text(),'Added')]" //xpath
    
    }
       clickProducts_Link() {

        cy.get(this.weblocatorsobj.Products_Link).click()
        
        }
        searchProduct(productName) {

            cy.get(this.weblocatorsobj.search_input).type(productName)
            cy.get(this.weblocatorsobj.click_search).click()
        }
        addToCart() {
            // cy.xpath(this.weblocatorsobj.addtocart).invoke('show').should('be.visible').trigger('mouseover')
            // cy.wait(3000)
            cy.xpath(this.weblocatorsobj.addtocart).first().click()
           // cy.xpath(this.weblocatorsobj.addtoCartSlider).first().click()
        }

        verifySucessMessage() {
            return cy.xpath(this.weblocatorsobj.successMessages)
        }
    
    }