const { fullName } = require("./names");
const { hobbies } = require("./hobbies");
function people() {
    return { fullname: fullName("Andrea", "Boato"), hobbies: hobbies("Rugby", "Calcio", "Piano") }
}

module.exports = {
    people
}