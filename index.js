// Code your solution here
const findMatching = (drivers, str) => {
   return drivers.filter(function(driver) {
       return driver.toLowerCase() === str.toLowerCase()
    })
}

const fuzzyMatch = (drivers, str) => {
   return drivers.filter(function(driver) {
       return !!driver.match(new RegExp(`^${str}.*`, 'i'))
    })
}

const matchName = (drivers, str) => {
    let result = drivers.filter(function(driver){
        return driver.name.toLowerCase() === str.toLowerCase()
    })
    return result
}