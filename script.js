// Минимальное значение
let minValue = parseInt(prompt('Введите минимальное знание числа для игры', '0'));

// Предупреждение если ввели число с "-" или текст.
if ((minValue < 0) || (isNaN(minValue))) {
    alert('Нельзя вводить число меньше "0", знаки или буквы!');
    minValue = 0;
}

// Максимальное значение
let maxValue = parseInt(prompt('Введите максимальное знание числа для игры', '100'));

// Предупреждение если ввели число больше "100" или текст.
if ((maxValue > 100) || (isNaN(minValue))) {
    alert('Нельзя вводить число больше "100", знаки или буквы!');
    maxValue = 100;
}

alert(`Загадайте любое число от ${minValue} до ${maxValue}, а я его угадаю.`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

// Кнопка - Больше
let output = document.querySelector('#answerFieldNumbers');

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
orderNumberField.innerText = orderNumber;

const phraseRandom = Math.round(Math.random() * 3);
const answerPhrase = (phraseRandom === 1) ?
    `Нет ничего проще! ${answerNumber }?\n\u{1F61C}` :
    `Это число! ${answerNumber }?\n\u{1F643}` ;
    `Вероятнее всего это! ${answerNumber }?\n\u{1F604}` ;
    answerField.innerText = answerPhrase;

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Что-то тут не так!\n\u{1F632}` :
                `Уф... Я сдаюсь.\n\u{1F62B}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Нет ничего проще! ${answerNumber }?\n\u{1F61C}` :
                `Это число! ${answerNumber }?\n\u{1F643}` ;
                `Вероятнее всего это! ${answerNumber }?\n\u{1F604}` ;
                answerField.innerText = answerPhrase;
            output.innerText = intToWords(answerNumber)

        }
    }
})

// Кнопка - Меньше
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Что-то тут не так!\n\u{1F632}` :
                `Уф... Я сдаюсь.\n\u{1F62B}` ;
                answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round(Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Нет ничего проще! ${answerNumber }?\n\u{1F61C}` :
                `Это число! ${answerNumber }?\n\u{1F643}` ;
                `Вероятнее всего это! ${answerNumber }?\n\u{1F604}` ;
                answerField.innerText = answerPhrase;
            output.innerText = intToWords(answerNumber)

        }
    }
})

//Кнопка - Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 3);
        const answerPhrase = (phraseRandom === 1) ?
            `Я никогда не ошибаюсь! \n\u{1F973}` :
            `Я гений! \n\u{1F60E}` ;
            `Меня сложно удивить! \n\u{1F609}` ;
            answerField.innerText = answerPhrase;
        gameRun = false;
        output.innerText = '';
    }
})

//Кнопка - Заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    alert(`Привет. Давайте поиграем! Введите любое число от "0" до "100". Только не вводи меньше "-999" и больше "999"`);
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю.`);

    // Предупреждение если ввели число меньше "-999".
    minValue = parseInt(prompt('Минимальное знание числа для игры', '-999'));
    minValue = (minValue < -999) ? '-999' : minValue;
    
    //Предупреждение если ввели число больше 999.
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '999'));
    maxValue = (maxValue >= 1000) ? '999' : maxValue;
    

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю.`);

    answerNumber = parseInt(Math.floor((minValue + maxValue) / 2));
    orderNumber = 1;
    const phraseRandom = Math.round(Math.random() * 3);
    const answerPhrase = (phraseRandom === 1) ?
    `Нет ничего проще! ${answerNumber }?\n\u{1F61C}` :
    `Это число! ${answerNumber }?\n\u{1F643}` ;
    `Вероятнее всего это! ${answerNumber }?\n\u{1F604}` ;
        answerField.innerText = answerPhrase;
    gameRun = true;
})