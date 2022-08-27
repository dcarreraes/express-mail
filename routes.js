var users = require('./routes/users');
var mail = require('./routes/mail');
middlewares = require("./middlewares");

module.exports = function(app){
    app.use("/api/mail", mail)
    app.use("/api/", [middlewares.api],  users)
}