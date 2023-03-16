let count = 0;
count += 1;
// count = '문자열';

const message: string = 'Hello world';
const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// message.push(1);

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

// let color: 'red' | 'orange' | 'yellow' = 'red';

// color = 'green';

function sum(x: number, y: number): number {
    return x + y;
}

const result = sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

function returnNothing(): void {
    console.log('어쩌구 저쩌고');
}

returnNothing();

function returnStringOrNumber(): string | number {
    return 4;
}

returnStringOrNumber();



