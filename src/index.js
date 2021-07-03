const cities = ['Bogotá','Lima','Medellin','Montreal','Buenos Aires','Puebla','Toledo']

const randomStringsCities = ()=>{
    const string = cities[Math.floor(Math.random()*cities.length)]
    return string
}

//Promises and async await
const reverseStringTwo = (str)=>{
    return new Promise ((resolve,reject)=>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}

module.exports = randomStringsCities