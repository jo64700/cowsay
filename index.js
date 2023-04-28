const user = require ("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm " + (user.name) + " Je suis au campus " + (user.campus),
    e : "oO",
    T : "U "
}));
//nouvel essaie 2 avec git