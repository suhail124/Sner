//for the addition
const add = (a,b) => {
return a + b;
};
//for the subtraction
const sub = (a,b) => {
    return a - b;
};
//for the multiplication
const mul = (a,b) => {
    return a * b;
};
//for the division
const div = (a,b) => {
    return a / b;
};

const name = "Suhail Mohammad";
/*module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;*/

//without writing module.exports for every operator it can also be written as the following 

module.exports = { add , sub , mul , div , name };


//module.exports = name;