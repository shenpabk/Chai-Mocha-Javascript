var Calculator = require('../code/calculator');

function delay (time, obj, action, params) {
    var promise = new Promise(function (resolve, reject) {
        var result;
        if(typeof obj[action] === 'function'){
            setTimeout(function(){
                resolve(obj[action].apply(null,params));
            },time);
            
        } else {
            reject("no method find");
        }
        
    });
    return promise;
}

module.exports = delay;