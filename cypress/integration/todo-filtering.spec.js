/// <reference types="cypress" />

/*
describe('filtering', function() {
    beforeEach(() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')

      cy.get('.new-todo').type('Clean room{enter}')
      cy.get('.new-todo').type('Learn JavaScript{enter}')
      cy.get('.new-todo').type('Use Cypress{enter}')
      
      cy.get('.todo-list li:nth-child(2) .toggle').click()                         // I go to the “todo-list”, I go to the second “li” and the “toggle” - we have toggle the middle todo
    })

    it('should filter "Active" correctly', () => {                                // check that click on the “Active” button filter shows only the uncompleted todos
      cy.contains('Active').click()
    })
})
*/


/*
describe('filtering', function() {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Clean room{enter}')
    cy.get('.new-todo').type('Learn JavaScript{enter}')
    cy.get('.new-todo').type('Use Cypress{enter}')
    
    cy.get('.todo-list li:nth-child(2) .toggle').click()                         
  })

  it('should filter "Active" correctly', () => {                                
    cy.contains('Active').click()                                                // check how many elements the todo list has  
    cy.get('.todo-list li').should('have.length', 2)                             // We find all <li> elements in the todo-list, and use should to check that the result has a length of 2
  })
})
*/


/*
describe('filtering', function() {

  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Clean room{enter}')
    cy.get('.new-todo').type('Learn JavaScript{enter}')
    cy.get('.new-todo').type('Use Cypress{enter}')

    cy.get('.todo-list li:nth-child(2) .toggle').click()
  })

  it('should filter "Active" correctly', () => {
    cy.contains('Active').click()
    cy.get('.todo-list li').should('have.length', 2)                             // We find all <li> elements in the todo-list, and use should to check that the result has a length of 2
  })

  it('should filter "Completed" correctly', () => {
    cy.contains('Completed').click()
    cy.get('.todo-list li').should('have.length', 1)                             // We find all <li> elements in the todo-list, and use should to check that the result has a length of 1
  })

  it('should filter "All" correctly', () => {
    cy.contains('All').click()
    cy.get('.todo-list li').should('have.length', 3)                             // We find all <li> elements in the todo-list, and use should to check that the result has a length of 3
  })
})
*/

import {
  navigate,
  addTodo,
  toggleTodo,
  showOnlyActiveTodos,
  showOnlyCompletedTodos,
  showAllTodos,
  validateNumberOfTodosShown,
} from '../page-objects/todo-page'

describe('filtering', function() {
  beforeEach(() => {
    navigate()

    addTodo('Clean room')
    addTodo('Learn JavaScript')
    addTodo('Use Cypress')

    toggleTodo(1)
  })

  it('should filter "Active" correctly', () => {
    showOnlyActiveTodos()

    validateNumberOfTodosShown(2)
  })

  it('should filter "Completed" correctly', () => {
    showOnlyCompletedTodos()

    validateNumberOfTodosShown(1)
  })

  it('should filter "All" correctly', () => {
    showAllTodos()

    validateNumberOfTodosShown(3)
  })
})
