const isPalindrome = (word) => {
    return word.split("").reverse().join("").toLowerCase() === word.toLowerCase()
}

// console.log(isPalindrome('space'))
// console.log(isPalindrome('racECar'))


const disemvowelTrolls = (str) => {
    let newStr = str

    // Replace all not accounting for case insensitivity
    // could use replaceAll() || a for loop
    
    // Inefficient, not accounting for case insensitivity
    // for (let i = 0; i < newStr.length; i++) {
    //     newStr = newStr.replace('a', "")
    //     newStr = newStr.replace('e', "")
    //     newStr = newStr.replace('i', "")
    //     newStr = newStr.replace('o', "")
    //     newStr = newStr.replace('u', "")
        
    // }

    // RegEx begin and end w a forward /, not a back slash
    // Can use g after the closing slash to remove ALL instances of the RegEx
    // Can use i after closing slash for case insensitivity
    return newStr.replace(/[aeiou]/ig, "")
}

console.log(disemvowelTrolls("Every vowel is used at least once"))