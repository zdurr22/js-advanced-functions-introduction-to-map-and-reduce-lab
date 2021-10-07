// Your code here
const mapToNegativize = function(sourceArray) {
    let newArr = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArr.push(-1 * sourceArray[i])
    }
    return newArr;
}

const mapToNoChange = function (sourceArray) {
    let newArr = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArr.push(sourceArray[i])
    }
    return newArr;
}

const mapToDouble = function(sourceArray) {
    let newArr = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArr.push(2 * sourceArray[i])
    }
    return newArr;
}

const mapToSquare = function(sourceArray) {
    let newArr = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArr.push(sourceArray[i] ** 2)
    }
    return newArr;
}

function reduceToTotal(src, starting=0) {
    let total = starting
    for (let i = 0; i < src.length; i++) {
        total = total + src[i]
    }
    return total;
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (src[i]) return true
    }
    return false
}