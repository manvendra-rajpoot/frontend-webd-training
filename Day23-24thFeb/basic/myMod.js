const findSum = (a=0,b=0,c=0) => {
    console.log(`Doing Sum:`);
    return a+b+c;
}
const findProduct = (a=1,b=1,c=1) => {
    console.log(`Doing Multiplication:`);
    return a*b*c;
}
const isPrime = (x) => {
    console.log(`Is Prime:`);
    if(x<2) return;

    let flag = true;
    for(let i=2; i*i<=x; ++i ){
        if(x%i==0){
            flag=false;
            break;
        }
    }
    return flag;
}

module.exports= { findSum, findProduct, isPrime };