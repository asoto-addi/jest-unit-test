const { expect, afterEach, afterAll, beforeEach, beforeAll } = require("@jest/globals")
const { string } = require("yargs")

const text = 'Hola Mundo'

const fruits = ['apple','orange','pineapple']


test('Debe contener un texto', () => {
    
    // Use // this mean that inside have word Mundo
    expect(text).toMatch(/Mundo/)


})


test('Have apple ?', () => {    
    expect(fruits).toContain('apple')
})


test('Mayor qué', () => {
    expect(10).toBeGreaterThan(9)
})

test('is True ?', () => {
    //use example to boolean
    expect(true).toBeTruthy()
})


//test to callbacks
//Create a function reverse
const reverseString = (str, callback) =>{
    //Logic by string reverse
    callback(str.split('').reverse().join(''))
    
}

//Test to function above
test('Test a callback', () => {
    //Execute callback
    reverseString('Hola', (str)=>{
        expect(str).toBe('aloH')
    })
})


//Promises and async await
const reverseStringTwo = (str)=>{
    return new Promise ((resolve,reject)=>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}
//Now i can do test to promise
test('Test to promise', () => {
    return reverseStringTwo('Hola')
    .then(string =>{
        expect(string).toBe('aloH')
    })
})

//Async await 

test('Test async await ', async () => {
    const str = await reverseStringTwo('Hola')
    expect(str).toBe('aloH')
    

})


/* 
afterEach(()=>{
  console.log('after to each test')  
})

afterAll(()=>{
    console.log('after to all test')
})

beforeEach(()=>{
    console.log('Before to each test')
})

beforeAll(()=>{
    console.log('Before to all test')
}) */