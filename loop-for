'use: strict';


// Tablica (Array) zawierająca kilka danych:

const jonasA =
    [
        'Jonas',
        'Schmedtmann',
        2037 - 1991,
        'teacher',
        ['Michael', 'Peter', 'Steven'],
    ];

// Chcemy wyświetlić każdą z tych danych w osobnej lini:

for (let i = 0; i < jonasA.length; i++) {   // zamiast jonasA można użyć liczby, ale taki zapis umożliwia dynamiczny dostsowanie się do wielkości tablicy
    console.log(jonasA[i]);
}

// Jeśli chceilibyśmy poznać typ zmiennych:

for (let i = 0; i < jonasA.length; i++) {
    console.log(typeof jonasA[i]);
}

// Petle for możemy także użyć do uzupełniania danymi tablic, na podstawie innych tablic:

const urodzenie = [1934, 1999, 1942, 1984, 1994, 2004];
const wiek = [];

for (let i = 0; i < urodzenie.length; i++) {
    wiek[i] = 2023 - urodzenie[i];
}

console.log(wiek);

// ----------------------------------------------------------
// Czasem warto zastosować pętle w pętli:

for (let i = 1; i < 6; i++) {
    console.log(`-------------Seria ćwiczeń ${i}----------`);
    for (let j = 1; j < 10; j++) {
        console.log(`pompeczka x${j}`);
    }
    for (let k = 1; k < 7; k++) {
        console.log(`przysiad x${k}`);
    }
};

// ----------------------------------------------------------
