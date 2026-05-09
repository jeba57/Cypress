import {LoginPage} from "./LoginPage_pom.cy"

const login= new LoginPage()


it('login test',()=>{

cy.visit('https://opensource-demo.orangehrmlive.com/')
login.enterUsername()
login.enterPassword()
login.enterLogin()


/*cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
cy.get('.oxd-button').click() */
})      // they are looking more complex and also mix of method and class to 
         //to be apply page-object-method we are to create a new file and in that export the func and in that fun we ll use all the method and class so all that ll be in one file , less time consuming if error comes 



