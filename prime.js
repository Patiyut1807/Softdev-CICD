let isPrime = (num)=>{
    num = parseInt(num)
    let is_prime = true
    if (num === 1) {
    }else for (let index = 2; index < num; index++) {
        if (num%index === 0) {
            is_prime = false
            break
        }
    }
    return is_prime
}

module.exports = isPrime