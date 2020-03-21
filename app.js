// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Júlia: 62
// };
// console.log('Boris' in ages);
// console.log("toString" in Object.keys(ages));
// console.log(ages.hasOwnProperty("toString"));

// for(k in ages){
//     if(ages.hasOwnProperty(k)){
//         console.log(k)
//     }
// }

// If you pass null to Object.create, the resulting object will not
// derive from Object.prototype and can safely be used as a map.

// let ages = Object.create(null);
// Object.defineProperties(ages,{
//     Boris : {
//         value : 39,
//         enumerable : true
//     },
//     Liang : {
//         value : 33,
//         enumerable : true
//     }
// })
// console.log('Boris' in ages);
// console.log('Liang' in ages);
// console.log('toString' in ages);

// for(e in ages){
//    console.log(e)
// }

