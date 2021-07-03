
const randomStrings = require('../index')




describe('Test functionality ', () => {
    

    test('Test functionality', () => {
        expect(typeof(randomStrings())).toBe('string')
    })

    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Monteria/)
    })
    

})

