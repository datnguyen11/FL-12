const two = 2;
const four = 4;

let a = prompt('Enter a');
let b = prompt('Enter b');
let c = prompt('Enter c');

if (
    !isNaN(a) && isFinite(a) && a !== null && a.trim().length > 0 &&
    !isNaN(b) && isFinite(b) && b !== null && b.trim().length > 0 &&
    !isNaN(c) && isFinite(c) && c !== null && c.trim().length > 0
) {
    a = +a;
    b = +b;
    c = +c;
    let discriminant = Math.pow(b, two) - four * a * c;
    console.log(`Your discriminant =  ${discriminant}`);
    if (discriminant < 0 || a === 0) {
        console.log('There is no solutions');
    } else if (discriminant === 0) {
        let x = -b / (two * a);
        console.log(`Your x = ${Math.round(x)}`);
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (two * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (two * a);
        console.log(`X1 = ${Math.round(x1)}; X2 = ${Math.round(x2)}`);
    }
} else {
    alert('Input values must be only numbers');
}