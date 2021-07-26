
describe('Summation', () => {
    it('Should Test the Summation of Two Numbers', () => {
        cy.visit('/');
        cy.get('#n1').type(3)
        cy.get('#n2').type(3)
        cy.get('#btn').click()
        cy.get('input[id=answer]')
            .invoke('val')
            .then((txt) =>{
                expect(txt).to.eq('6')
            })
        
    })
})

