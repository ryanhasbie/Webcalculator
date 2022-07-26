// let a = 10;
// let b = 15;
// console.log(a < b && b < a); // menghasilkan nilai false, karena kondisi tidak sama
// console.log(a < b && b > a); // menghasikan nilai true, karena kondisi sama

// console.log(a < b || b < a); // menghasilkan nilai true, karena operator (or) boleh beda
// console.log(a < b || b > a); //menghasikan nilai true, karena kondisi sama

// console.log(!(a < 15)); // !(true) -> false
// console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

// let greeting = 'Selamat Pagi';
// let language = 'English';

// if (language === 'English') {
//     greeting = 'Good Morning';
// } else if (language === 'French') {
//     greeting = 'Bojour';
// } else if (language === 'Japan') {
//     greeting = 'Ohayogozaimasu';
// }

// console.log(greeting);

// let a = 50;
// if (a < 70) {
//     a = 'Benar';
// } else {
//     a = 'Salah';
// }
// console.log(a);


// let myArray = ["Arif", "Dika", "Hasbie"];
// for (const nama of myArray) {
//     console.log(nama);
// }

// function greeting(name, language) {
//     if (language === "English") {
//         console.log("Hello " + "Good Morning, " + name);
//     } else if (language === "French") {
//         console.log("Hello " + "Bojour, " + name);
//     } else if (language === "Japan") {
//         console.log("Hello " + "Ohayogozaimasu, " + name);
//     }
// }

// greeting("Ryan", "Japan");

// function greeting(name, language) {
//     if (language === "English") {
//         return "Hello " + "Good Morning, " + name;
//     } else if (language === "French") {
//         return "Hello " + "Bojour, " + name;
//     } else if (language === "Japan") {
//         return "Hello " + "Ohayogozaimasu, " + name;
//     }
// }

// const greetingMassage = greeting("Dika", "French");
// console.log(greetingMassage);


// function pesan(nama, bahasa) {
//     if (bahasa === "Indonesia") {
//         console.log("Hello, selamat pagi " + nama);
//     } else if (bahasa === "Inggris") {
//         console.log("Hello, Good Morning " + nama);
//     } else if (bahasa === "Jepang") {
//         console.log("Helo, Ohayogozaimasu " + nama);
//     }
// }

// const buatPesan = pesan("Ryan", "Indonesia");

// const namaDepan = prompt("Masukan nama depan kamu: ");
// const namaBelakang = prompt("Masukan nama belakang kamu: ");
// const bahasa = prompt("Masukan bahasa yang kamu kuasai: ");

// const user = {
//     nama: {
//         depan: namaDepan,
//         belakang: namaBelakang,
//     },
//     bahasa: bahasa
// }

// if (user.bahasa === "Inggris") {
//     alert('Helo Good Morning, ' + namaDepan + " " + namaBelakang);
// } else if (user.bahasa === "Indonesia") {
//     alert('Halo Selamat Pagi, ' + namaDepan + " " + namaBelakang);
// }
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
};

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = false;
}

function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
        calculator.operator = operator;
        calculator.isWaitForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator');
        return;
    }

    let result = 0;
    if (calculator.operator === '+') {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}

const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;

        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if (target.classList.contains('operator')) {
            handleOperator(target.innerText)
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}