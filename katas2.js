function add(x, y) {
    let soma = x + y
    return soma
}

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

function multiply(a, b) {
    let result = 0
    for (let i =0; i < b; i++){
    result = add(result, a) 
    }
    return result
}

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

function power(num, exp) {
    let result = 1
    for (let j = 0; j < exp; j++) {
        result = multiply(result, num)
    }
    return result
}

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

function factorial(fatorial) {
    let result = 1
    for (let i = fatorial; i > 1; i--) {
        result = multiply(result, i)
    }
    return result
}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

function fibonacci(x) {
    let arr = [0,1]
    let result = 0
    for (let i = 0; i < x; i++) {
        let anterior = arr[i]
        let posterior = arr[add(i, 1)]
        result = add(anterior, posterior)
        arr.push(result)
    }
    if (x === 0) {
        return 0
    } else if (x === 1) {
        return 1
    } else {
        return arr[x - 1]
    }
}

console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');