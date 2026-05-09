it('read files using fixture', function(){
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
    })


    it('read file using readfile()', function(){
        cy.readFile('cypress/fixtures/example.json').then((data) =>{
            cy.log(data.name)
        }
    )
    })


    it('write file using writefile() ',function (){
        cy.writeFile('sample.txt','hello i am jeba here ')
        cy.writeFile('sample.txt','i am learning cypress', {flag:'a+'})
    })