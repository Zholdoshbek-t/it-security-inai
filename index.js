let map = new Map();

let input = ['м', 'а', 'н', 'с', 'б', 'т', 'и', 'ң', 'ы', 'ю', 'я', 'р', 'д', 'к', 'е', 'й', 'г',
    'ү', 'л', 'ө', 'ш', 'ч', 'у', 'ж', 'о', 'п', 'з', 'э', 'М', 'А', 'Н', 'С', 'Б', 'Т', 'И', 'Ң', 'Ы',
    'Ю', 'Р', 'Д', 'К', 'Е', 'Й', 'Н', 'Y', 'Л', 'Ө', 'Ш', 'Ч', 'У', 'Ж', 'О', 'П', 'З', 'Э'];

let output = ['л', 'я', 'м', 'р', 'а', 'с', 'з', 'н', 'ъ', 'э', 'ю', 'п', 'г', 'й', 'д', 'и', 'в',
    'у', 'к', 'о', 'ч', 'ц', 'т', 'ё', 'ң', 'ө', 'ж', 'ь', 'Л', 'Я', 'М', 'Р', 'А', 'С', 'З', 'Н', 'Ъ',
    'Э', 'П', 'Г', 'Й', 'Д', 'И', 'В', 'У', 'К', 'О', 'Ч', 'Ц', 'Т', 'Ё', 'Ң', 'Ө', 'Ж', 'Ь'];

function shuffle() {
    map = new Map();

    shuffleArray(input);
        
    shuffleArray(output);

    let copy = output.slice();

    for (let i = 0; i < input.length; i++) {
        let randomIndex = Math.floor(Math.random() * copy.length);
        map.set(input[i], copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }
}

function encrypt() {
    shuffle();

    let text = document.getElementById("myTextarea").value;

    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) {
            console.log(text[i] + " -> " + map.get(text[i]));
            result += map.get(text[i]);
        } else {
            result += text[i];
        }
    }

    document.getElementById("result").innerHTML = result;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}