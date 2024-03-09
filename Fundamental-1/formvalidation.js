let name = "mithun";
let email = "mithun.s@pw.live";
let age = "21";

if(typeof name !== "string"){
    console.log(`Name should be a string`);
}
else if(typeof email !== "striing"){
    console.log(`Email should be a string`);
}
else if(typeof age !== "number"){
    console.log(`Age should be a number`);
}
else{
    console.log(`Yahh!! All the fields are proper.`);
}