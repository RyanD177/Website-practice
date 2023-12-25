// const website = {
// name: 'Ryan',
// rating: 3 ,
// founders: ['Ryan', 'Tommy'],


// };
//  console.log({} === {});
//  // 2 objects are not equal to eachother based on their values
//  // error : " This condition will always return 'false' since JavaScript compares objects by reference, not value" 

// const obj = new Object();
// obj.name = "Ryan"
// console.log(obj);


function Ryan (name, rating, madeBy) {
    this.name = name; 
    this.rating  = rating;
    this.madeBy = madeBy;
}
const myWebsite = new Website();
//whenever we use the new keyword it creates a new object, and the object is set equal to this. The this calls will become the new object .
