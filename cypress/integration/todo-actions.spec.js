/// <reference types="cypress" />                                               

/*
 it('should navigate to the To Do App', () => {                                 //the first test will be witten inside an it function
    cy.visit ('http://todomvc-app-for-testing.surge.sh')                        //see how autocomplete showed us the list of methods for cy object and the documentation for them
})
*/


/*
it('should be able to add a new to do to the list', () => {                    
    cy.visit ('http://todomvc-app-for-testing.surge.sh')                        //command visit will visit the app
    cy.get('.new-todo')                                                         //command get will get the element we need
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh')   
    cy.get('.new-todo').type('Clean room{enter}')                               //command type will type whatever we want into the element that get got
                                                                                //enter in the string indicates that Cypress should type "enter" and todo will be added
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000')   // ?delay-new-todo=#  - little funcionality which will delay the new todo by 3 sec
    cy.get('.new-todo').type('Clean room{enter}')                               //command type will type whatever we want into the element that get got
                                                                                //enter in the string indicates that Cypress should type "enter" and todo will be added
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')    // delay the new todo by 5 sec (which is above the 4 second time out)
    cy.get('.new-todo').type('Clean room{enter}')             
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')   // delay the new todo by 5 sec (which is above the 4 second time out)
    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')              // timeout is "options" parametar which we added. We pass a timeout of 6 seconds      
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type("Clean room{enter}")
    cy.get('.toggle').click()                                                  // command click will click on the element
    cy.contains('Clear completed').click()                                     // instead of cy.get, I will say, cy.contains('Clear completed'), and I'll click on it.
})
*/

// Validations

/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/')   
    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')              
    cy.get('label').should('have.text', 'Clean room')                          // validate that the element label contains the text "Clean room"  
                                                                               // the first argument to the should is what to check. And in this case, it’s “have.text”
                                                                               // the second argument is the value of what to test - the condition.
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/')   
    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')              
    cy.get('label').should('have.text', 'Clean vroom')                         // validate that the element label contains the text "Clean vroom"                                                                       
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/')   
    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}') 
    cy.get('label').should('have.text', 'Clean room') 
    cy.get('.toggle').should('not.be.checked') 
    cy.get('.toggle').click()                                                   // validate that toggling the todo will make it strike through
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')  // check that the css property ‘text-decoration-line’ of the element is ‘line-through’                                                                     
})
*/


/*
it('should be able to add a new to do to the list', () => {
    cy.visit ('http://todomvc-app-for-testing.surge.sh/')   
    cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}') 
    cy.get('label').should('have.text', 'Clean room') 
    cy.get('.toggle').should('not.be.checked') 
    cy.get('.toggle').click()                                                   
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')  
    cy.contains('Clear completed').click()                                     // validate whether clearing all the completed todos will clear the to do list
    cy.get('.todo-list').should('not.have.descendants', 'li')                  // check whether this element, which is a “ul”, has any “li” elements, because each todo is an “li” element                                                                         
})
*/

// Grouping tests with Mocha

// Separating the test into 3 tests:

/*
it('should add a new todo to the list', () => {                               // 1. Should add a new todo to the list
  cy.visit('http://todomvc-app-for-testing.surge.sh/')
  cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
  cy.get('label').should('have.text', 'Clean room')
  cy.get('.toggle').should('not.be.checked')
})

it('should mark a todo as completed', () => {                                 // 2. Should mark a todo as completed
  cy.get('.toggle').click()
  cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})

it('should clear completed todos', () => {                                    // 3. Should clear completed todos
  cy.contains('Clear completed').click()
  cy.get('.todo-list').should('not.have.descendants', 'li')
})
*/

// Grouping the tests:

/*
describe('todo actions', () => {                                // we've now grouped tests in one group - describe group which is actually just a function call and call it “todo actions”
    it.only('should add a new todo to the list', () => {        // if we add a .only to the it, that will make Mocha run only that test
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
        cy.get('label').should('have.text', 'Clean room')
        cy.get('.toggle').should('not.be.checked')
    })
  
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
  
      it('should clear completed', () => {
        cy.contains('Clear completed').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
      })
  })                              
*/


/*
describe('todo actions', () => {
    beforeEach(() => {                                      // beforeEach is a function of Mocha, and it accepts another function. This function will be executed before each of the tests.
      cy.visit('http://todomvc-app-for-testing.surge.sh/')  // anything we put inside a “beforeEach” will be executed before each test in the group.
      cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
    })
  
    it('should add a new todo to the list', () => {
      cy.get('label').should('have.text', 'Clean room')
      cy.get('.toggle').should('not.be.checked')
    })
  
    it.only('should mark a todo as completed', () => {       // I want to run this test only
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
  
    it('should clear completed', () => {
        cy.contains('Clear completed').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
  })
*/


// Page Objects in Cypress

import {
  navigate,
  addTodo,
  validateTodoText,
  toggleTodo,
  clearCompleted,
  validateTodoCompletedState,
  validateToggleState,
  validateNumberOfTodosShown,
} from '../page-objects/todo-page'

describe('todo actions', () => {
  beforeEach(() => {
    navigate()
    addTodo('Clean room')
  })

  it('should add a new todo to the list', () => {
    validateTodoText(0, 'Clean room')
    validateToggleState(0, false)
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      toggleTodo(0)
      validateTodoCompletedState(0, true)
    })

    it('should clear completed', () => {
      toggleTodo(0)
      clearCompleted()
      validateNumberOfTodosShown(0)
    })
  })
})



  

