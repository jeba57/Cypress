export class LoginPage{
//here we ll make some funtion 

enterUsername(){
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
}

enterPassword(){
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
}


enterLogin(){
cy.get('.oxd-button').click()
}
}