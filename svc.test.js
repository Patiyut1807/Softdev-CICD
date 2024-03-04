let isPrime = require("./prime")

test('case 17', () => { 
    expect(isPrime(17)).toBe(true)
 })

 test('case 36', () => { 
    expect(isPrime(36)).toBe(false)
 })

 test('case 13219', () => { 
    expect(isPrime(13219)).toBe(true)
 })