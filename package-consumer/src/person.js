const user = require("./user");

// console.log('person', user.GetMessage());

exports.GetMessage = function () {
    return user.GetMessage();
}

exports.SetMessage=function(){
    user.Hello("Money");
}