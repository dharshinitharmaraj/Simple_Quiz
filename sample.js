const questions = [{
        q: "What is HTML",
        ans: {
            a: "HTML",
            b: "HMTP",
            c: "HTTP"
        },
        correct: "a"
    },

    {
        q: "What is i",
        ans: {
            a: "i",
            b: "italic",
            c: "em"
        },
        correct: "a"

    },
    {
        q: "What is break",
        ans: {
            a: "b",
            b: "br",
            c: "break"
        },
        correct: "b"
    },
    {
        q: "What is css",
        ans: {
            a: "s",
            b: "sc",
            c: "css"
        },
        correct: "c"
    },
    {
        q: "What is iFrame",
        ans: {
            a: "true",
            b: "false",
        },
        correct: "a"
    }
];

for (let i = 0; i < questions.length; i++) {
    for (let j in questions[i].ans) {

        let s = '<div class="question">' + questions[i].q + '</div>'
        let k = '<label>' +
            '<input type="radio" name="question' + i + '" value="' + j + '">' +
            j + ': ' +
            questions[i].ans[j] +
            '</label>'
        console.log(k);

        console.log(s);

        document.getElementById("sample").innerHTML = k;
        document.getElementById("sample").innerHTML = s;
    }
}