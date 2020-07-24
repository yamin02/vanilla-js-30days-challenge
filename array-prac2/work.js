const comment = [
    {'text' :'cool' , id : 1},
    {'text' :'wbansl' , id : 2} ,
    {'text' :'badol' , id : 3} ,
    {'text' :'cisdafl' , id : 4} ,
]
const people = [
    {'name' : "yamin" , "dof":13},
    {'name' : "yabeyain" , "dof":123},
    {'name' : "beyaamin" , "dof":132},
    {'name' : "beyaamibeya" , "dof":213},
]
//if at least 19 years old
const isadult = people.some(function(person){
    const currentyear= (new Date()).getFullYear();
    if(currentyear - person.dof  > 19 ){
        return true;}});
const isadult2 = people.some(person => 
     (new Date()).getFullYear - person.dof > 19);
console.log({isadult2});

//if everyone is min 19 
const alladult = people.every(person => 
    (new Date()).getFullYear - person.dof > 19);
console.log(alladult);

//find will return only one output
const find1 = comment.find(val => val.id >= 1)
console.log(find1);

//find comment with the id= 2
const index = comment.findIndex(val => val.id === 3);
console.log(index);
//delete the above index
// const yamx = comment.splice(index,1);  initial array changes
// console.table(comment);

//to keep initial array intact 
const newcomment = [
    ...comment.slice(0,index),  //...(spread items) remove array inside array and show all as main array elements
    ...comment.slice(index+1)   //means (index+1 , end_of_array)
] 
console.table(newcomment);
console.table(comment); 

var arr = [23,56,87,32,75,13];
var new_arr = arr.splice(2,1,'ra');
console.log(arr);