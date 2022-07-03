var a = 1;
var b = 1;

var prommise = new Promise(function(resolve, reject){
    if(a > b) {
        resolve()
    }
    else {
        reject()
    }
})

prommise
.then(function() {
    console.log('thanh cong');
})
.catch(function(){
    console.log('that bai !!');
})
.finally(function() {
    console.log('Done !!');
})


var prommise1 = new Promise(
    function(resolve) {
        setTimeout(function(){
            resolve([1,2])
        },1000)
    }
)
var prommise2 = new Promise(
    function(resolve) {
        setTimeout(function(){
            resolve([3,4])
        },5000)
    }
)

Promise.all([prommise1,prommise2])
.then(function(result){
    console.log(result);
})