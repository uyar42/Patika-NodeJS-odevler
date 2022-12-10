const circleArea =(radius)=>{
let area = Math.PI*Math.pow(radius,2)
console.log( area);
}

const circleCircumference =(radius)=>{
let circumference = 2*Math.PI*radius
console.log(circumference);
}


export {
    circleArea,
    circleCircumference
}