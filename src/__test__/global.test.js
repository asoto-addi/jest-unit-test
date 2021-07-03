const { expect } = require("@jest/globals")

const text = 'Hola Mundo'

const fruits = ['apple','orange','pineaple']


test('Debe contener un texto', () => {
    
    // Use // this mean that inside have word Mundo
    expect(text).toMatch(/Mundo/)


})


test('Have apple ?', () => {
    
    expect(fruits).toContain('apple')

})

