const { fullName } = require("./names");
const { hobbies } = require("./hobbies");
fullName("Andrea", "Boato");
hobbies("Rugby", "Calcio", "Piano",)
const separateName = fullName("Andrea", "Boato");
const completeName = separateName.firstName + ' ' + separateName.lastName
function people() {
    return {
        fullName: completeName,
        hobbies: hobbies("Rugby", "Calcio", "Piano"),
    }
}

module.exports = {
    people
}