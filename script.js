let currentQuestion = 0;

function loadQuestion(){

    const q = questions[currentQuestion];

    document.getElementById("pagination").innerHTML =
        `Question ${currentQuestion+1} of ${questions.length}`;

    document.getElementById("question").innerHTML =
        `<h2>${q.question}</h2>`;

    let html="";

    q.options.forEach(option=>{

        html+=`<div class="option">${option}</div>`;

    });

    document.getElementById("options").innerHTML=html;

    document.getElementById("answer").style.display="none";

}

document.getElementById("showAnswerBtn").onclick=function(){

    const q=questions[currentQuestion];

    document.getElementById("answer").style.display="block";

    document.getElementById("answer").innerHTML=
    `
    <strong>Answer:</strong> ${q.options[q.answer]}<br><br>

    <strong>Explanation:</strong><br>

    ${q.explanation}
    `;
}

document.getElementById("nextBtn").onclick=function(){

    if(currentQuestion<questions.length-1){

        currentQuestion++;

        loadQuestion();

    }

}

document.getElementById("prevBtn").onclick=function(){

    if(currentQuestion>0){

        currentQuestion--;

        loadQuestion();

    }

}

loadQuestion();