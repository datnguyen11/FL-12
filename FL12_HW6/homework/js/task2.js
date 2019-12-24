let a = prompt('Enter the length of the first side');
let b = prompt('Enter the length of the second side');
let c = prompt('Enter the length of the third side');

if (
    !isNaN(a) && isFinite(a) && a !== null && a.trim().length > 0 &&
    !isNaN(b) && isFinite(b) && b !== null && b.trim().length > 0 &&
    !isNaN(c) && isFinite(c) && c !== null && c.trim().length > 0
) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    console.log(`A side = ${a}\nB side = ${b}\nC side = ${c}`);
    if (a <= 0 || b <= 0 || c <= 0) {
        alert(
            'A triangle must have 3 sides with a positive definite length object'
        );
    } else if (a + b <= c || a + c <= b || b + c <= a) {
        console.log('Triangle doesn’t exist');
    } else if (a === b && a === c) {
        console.log('This triangle is equilateral');
    } else if (a === b || a === c || b === c) {
        console.log('This triangle is isosceles');
    } else {
        console.log('This triangle is scalene');
    }
} else {
    alert('Input values must be only numbers');
}