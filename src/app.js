
// // Hoisting - przenoszenie deklaracji na górę aktualnie przetwarzanego zasięgu
//
// // functions -
//
// function name(params){
//     // function body
//     // return
// }
//
// // function - keyword
// // name - opisowa nazwa, lowerCamelCase, angielski, litery i cyfry (cyfra nie może być pierwsza), underscore, dollar, czasowniki/akcja
// // () parameters - oddzielone przecinkiem, pozycyjne
// // { } curly braces - function body, tworzą scope function i block
// // return - zwraca wartość i przerywa funkcje
// // są hoistowane
//
//
// // anonymous functions
// // classic
// // function expression - przypisanie deklaracji fn do zmiennej
// const add = function(){
//     // logic
// }
//
// // arrow function
// const add1 = () => {}
//
// // wariancje funkcji
//
// function divide(a, b){
//     return a / b;
// }
// // divide (1, 2);   # WYWOŁANIE
//
// const divide1 = function(a, b){
//     return a / b;
// }
//
// // divide1(1, 2);
//
// const divide2 = (a, b) => a / b;
//
// // divide2(1, 2);
//
// const divide3 = (a, b) => a / b;
//
// const divide4 = () => 1 / 2:
//
// const divide5 = a => a / 2;
//
// const m = (a, b) => a <= b;
//
//
// // control flow - pętle i warunki
//
// const data = [1, 2, 3, 4];
// const data2 = [];
// for (let i = 0; i <= data.length; i++){
//     data2.push(data[i] * 2)
// }
//
// console.log(data2);
//
// for (const element of data){
//     data3.push(element * 2);
// }
// console.log(data3);
//
// const data4 = []
//
// while (data4.length <= data.length){
//     data4.push(data[counter] * 2);
//     counter++;
// }
//
// console.log(data4)
//
// const data5 = data.map((item) => item * 2);
// console.log(data5);
//
// do {
//     data6.push(data[counter2] * 2);
//     counter++;
// } while (data6.length < data.length);
//
//
//
// if(condition){
//
// }else if (condition2){
//
// }else {
// }
//
// switch (value){
//     case 10:
//         // logic
//         break;
//     case 12:
//         // logic
//         break;
//     default:
//     // logic
//
// }
//
// // napisz funkce, która zwraca najwyższą wartość z tablicy
//
// function max(list) {
//     let m = list[0];
//
//     for (const element off list){
//         if (element > m){
//             m = element
//         }
//     }
//     return m;
// }
//
// console.log(max(list: [1, 2, 3, 4, 32, 7]))
//
// // wylosuj 6 liczb z zakresu 1 - 49 bez powtórzeń
//
// function getRandomDigits(){
//     const digits = [];
//     while (digits.length < 6){
//         const result = Math.round(Math.random() * 48 + 1);
//         if (!digits.includes(result)){
//             digits.push(result);
//         }
//
//     }
//     return digits;
// }
//
// console.log(getRandomDigits());
//
//
// // zwróć wszystkie powetarzające się elementy z 2 tablic (czesc wspolna)
//
// const checkDigits = (arr1, arr2) => {
//     const temp = [];
//
//     for(const element of arr1){
//         if (arr2.includes(element)){
//             temp.push(element);
//         }
//     }
//     return temp;
// }
// console.log(checkDigits([1, 2, 3, 4],[2, 5, 1, 4, 6]));
//
//
// // console.log(range(3)); // [0, 1, 2]
// // console.log(range(3, 6)); // [3, 4, 5]
// // console.log(range(1, 4, 2)); // [1, 3]
// // console.log(range(4, 1)); // []
// // console.log(range(4, 1, -1)); // [4, 3, 2]
//
// function range(start, stop, step=1) {
//     if (stop === undefind){
//         stop = start;
//         start = 0;
//     }
//
//     if (step === 0){
//         throw new Error(`Invalid step value ${step}`)
//     }
//     const temp = [];
//     let counter = start;
//
//
//
//     while (temp.length < (stop - start) / step) {
//         temp.push(counter);
//         counter += step;
//
//     }
//
//     return temp;
//
// }
//
//
// console.log(range(3)); // [0, 1, 2]
// console.log(range(3, 6)); // [3, 4, 5]
// console.log(range(1, 4, 2)); // [1, 3]
// console.log(range(4, 1)); // []
// console.log(range(4, 1, -1)); // [4, 3, 2]
//
//
//
//
//
//

const auto = {
    name: 'ala',
    1: 'elo',
    true: 'ula',
    magic: function(){console.log('magic')},

}