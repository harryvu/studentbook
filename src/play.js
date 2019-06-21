// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log(this.foo);
//         console.log(self.foo);
//         (function() {
//             console.log(this.foo);
//             console.log(self.foo);
//         }());
//     }
//   };
//   myObject.func();

  function main() {

    console.log("i = ", i);
 
    for (var i = 0; i < 10; i++){
        // do work
    }
 
    console.log("i = ", i);
 }
 
 main();