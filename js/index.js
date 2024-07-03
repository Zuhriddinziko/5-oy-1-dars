// masala 1
// function nemArr(arr){
//    let res=arr.filter(function(value){
//        return value.length>5
//     })
//    let resul= res.map(function(value){
//     return value[0].toUpperCase() + value.slice(1)
//    });
//    return resul;
// }

// let fruit = ['appel', 'ananas','banan', 'nok', 'limon', 'apelsin'];
// console.log(nemArr(fruit))

// masala 2
// const students = [
//     { name: "Ali", age: 19 },
//     { name: "Vali", age: 21 },
//     { name: "Sara", age: 22 },
//     { name: "John", age: 18 }
//   ];
//   function egaStudent(arr){
//     let res= arr.find(function(res){
//         return res.age>20
//     })
//     let rezul=res.map(function(value){
//         return value.name.toUpperCase()
//     })
//     return rezul;
//   }
// console.log(egaStudent(students));


// masala 3
// let sum = [1234, 456, 56, 89, 23, 568];
// function regulerSum(arr){
//     let res =arr.filter(function(value){
//         return value>100;
//     })
//     let sum =0;
//     res.forEach(function(value){
//         sum+=value
//     })
//     return sum;
// }
// console.log(regulerSum(sum))


// masala 4


// function checkNumbers(numbers) {
//     const allPositive = numbers.every(number => number > 0);
//     const hasLargeNumber = numbers.some(number => number > 100);
  
    
//     if (allPositive) {
//       console.log("Barcha sonlar musbat");
//     } else {
//       console.log("Musbat bo'lmagan sonlar bor");
//     }
  
//     if (hasLargeNumber) {
//       console.log("Katta son bor");
//     }
//   }

//   const numbers1 = [10, 20, 30, 40,102, -5, 50];
//   const numbers2 = [10, -20, 30, 40, 50];
//   const numbers3 = [10, 20, 130, 40, 50];
  
//   checkNumbers(numbers1);

//   checkNumbers(numbers2);

  
//   checkNumbers(numbers3);


// masala 5
// const som1 =function (arr){
//     let res= arr.map(function(value){
//         return value**2
//     })
//     return res;
// }

// let oli =[45,41,5,9];
// console.log(som1(oli))


// masala 6
// function calcul(salar) {
  
 
//     let res=salar.filter(function(value){
//         return value >2000;
//     })
//     let less=salar.filter(function(value){
//         return value<2000;
//     })
        
//     let resul=res.map(function(value){
//         return value*1.1;
//     })
//     let umum= resul.concat(less)
       
//    return umum
    

        
//     }
//     const salaries = [1800, 2500, 3000, 1500, 2200, 5000];

    
//     console.log(calcul(salaries));


// masala 7




// Yozuvlarga oid.
// masala 1
// function upperstr(str){
//     return str.toUpperCase();
// }
// let ali='salom dostlar';
// console.log(upperstr(ali))

// const upperstr=function (str){
//     return str.toUpperCase();
// }
// let ali='salom dostlar';
// console.log(upperstr(ali))


// masala 2
// const ster=function(str, element){
//     return str.includes(element)
    
// }
// const sre='dunyo birinchiligi';
// let a ='d';
// console.log(ster(sre,a));

// masala 3
// function repleseStr(str){
//     return str.replace('javascript','js')
// }
// let stri='salom biz bugun javascriptni organamiz'

// console.log(repleseStr(stri));

// masala 4
// function repit(str){
//     let res= str.split(' ')
//     let nevmas=[]
//     let resul=res.map(function(value){
//         nevmas.unshift(value)
//     }
//     )
    
//     return nevmas.join(' ')
// }
// let one ='olam va odam';
// console.log(repit(one));

// masala 5
// function boshJoy(str){
//     return str.trim()
// }
// let a='"  menga bir ish keraak   "';
// console.log(boshJoy(a));