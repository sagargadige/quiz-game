const questions = [
    {
        que: "What is 27 + 18?",
        a: "45",
        b: "44",
        c: "46",
        d: "48",
        correct: "a"
    },
    {
        que: "What is 56 - 19?",
        a: "35",
        b: "37",
        c: "36",
        d: "38",
        correct: "c"
    },
    {
        que: "What is 12 × 7?",
        a: "72",
        b: "84",
        c: "96",
        d: "78",
        correct: "b"
    },
    {
        que: "What is 144 ÷ 12?",
        a: "10",
        b: "11",
        c: "12",
        d: "14",
        correct: "c"
    },
    {
        que: "What is 9 × 6 + 4?",
        a: "54",
        b: "58",
        c: "64",
        d: "60",
        correct: "b"
    }
];


let index = 0;
let right = 0;
let wrong = 0;

const h2 = document.querySelector('h2');
const options = document.querySelectorAll('.options');
let total = questions.length;



const loadQue = () => {
    if (index === total) {
        return end();
    }
    reset();
    const data = questions[index];
    h2.innerText = `${index + 1}. ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
};


const submit = () => {
    const data = questions[index];
    const ans = getAns();

    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQue();
};


const getAns = () => {
    let answer;
    options.forEach(input => {
        if (input.checked) answer = input.value;
    });
    return answer;
};


const reset = () => {
    options.forEach(input => input.checked = false);
};


const end = () => {
    document.getElementById('box').innerHTML = `
        <div class="result-card">
            <h3> Thank you for playing :)</h3>
            <p class="score">${right} / ${total} correct</p>
            <button class="restart-btn" onclick="location.reload()">Play Again</button>
        </div>
    `;
};


loadQue();
