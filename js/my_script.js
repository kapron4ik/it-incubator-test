// Задание 3-4
const search = () => {
    let searchText = document.querySelector('.searchText');
    if (searchText.value == 'google') {
        alert('Yandex круче. Но это не точно')
    } else {
        alert(searchText.value)
    }
}

document.querySelector('.searchButton').addEventListener('click', search);

// Задание 5
let users = [
    {
        name: "Павлик",
        age: 30
    },
    {
        name: "Геша",
        age: 25
    },
    {
        name: "Гера",
        age: 28
    },
    {
        name: "Вася",
        age: 17
    },
]

const nameFirst = () => {
    alert(`Задание 5\nСвойство name первого объекта в массиве: \n${users[0].name}`)
}

document.querySelector('.searchButton').addEventListener('click', nameFirst);

// Задание 6
const superSum = (a, b) => {
    alert(`Задание 6\nCумма чисел переданных этой функции: \n${a}+${b}=${a + b}`)
}

document.querySelector('.searchButton').addEventListener('click', () => superSum(5, 7));

// Задание 7
let numbers = [89, 56, 14, 32, 91, 103, 27]

const nubers = () => {
    let maxNumber = 0;
    let minNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]
        }
        if (numbers[i] < minNumber) {
            minNumber = numbers[i]
        }
    }
    alert(`Задание 7\nМаксимальное значение в массиве: \n${maxNumber}\nМинимальное значение в массиве: \n${minNumber}`)
}

document.querySelector('.searchButton').addEventListener('click', nubers);

// Задание 8
let a = "XXX";
let b = "YYY";
console.log(`Старый "а" = ${a}`);
console.log(`Старый "b" = ${b}`);
let c = b;
b = a;
a = c;
console.log(`Новый "а" = ${a}`);
console.log(`Новый "b" = ${b}`);

// Задание 9
const findMax = (list) => {
    let maxNumber = Math.max(...list)
    alert(`Задание 9\nМаксимальное значение в массиве функцией findMax: \n${maxNumber}`)
}

let numbersNew = [89, 56, 14, 32, 91, 103, 27, 62, 98, 105, 121, 301]

document.querySelector('.searchButton').addEventListener('click', () => findMax(numbersNew));

// Задание 10
const searchNew = () => {
    let searchText = document.querySelector('.searchText');
    if (searchText.value == 'google') {
        alert('Задание 10\nYandex круче. Но это не точно')
    } else {
        alert(`Задание 10\n ${searchText.value}`)
    }
}

document.querySelector('.searchButton').addEventListener('click', () => setTimeout(searchNew, 3000));