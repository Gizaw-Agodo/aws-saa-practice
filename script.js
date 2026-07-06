let currentQuestion = 0;
let searchBase = 0;
let notFound = false;
const letters = ["A", "B", "C", "D"];

function loadQuestion(){

    const q = questions[currentQuestion];

    document.getElementById("pagination").innerHTML =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    let questionHTML = "";

    // ❌ NOT FOUND STATE
    if (notFound) {

        questionHTML = `
            <div class="not-found">
                ❌ Not Found<br><br>
                No question exists for this number.
            </div>
        `;

        document.getElementById("question").innerHTML = questionHTML;
        document.getElementById("options").innerHTML = "";
        return;
    }

    // ✅ NORMAL QUESTION
    document.getElementById("question").innerHTML =
        `<h2>${q.question}</h2>`;

    let html = "";

    q.options.forEach((option, index) => {

        html += `
            <div class="option">
                <strong>${letters[index]}.</strong> ${option}
            </div>
        `;
    });

    document.getElementById("options").innerHTML = html;

    document.getElementById("answer").style.display = "none";
}

document.getElementById("showAnswerBtn").onclick = function () {
  const q = questions[currentQuestion];

  document.getElementById("answer").style.display = "block";

  document.getElementById("answer").innerHTML = `
    <strong>Answer:</strong> ${letters[q.answer]}. ${q.options[q.answer]}<br><br>

    <strong>Explanation:</strong><br>

    ${q.explanation}
    `;
};

document.getElementById("nextBtn").onclick = function () {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
};

document.getElementById("prevBtn").onclick = function () {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

document.getElementById("searchBtn").onclick = function () {

    const value = parseInt(document.getElementById("searchInput").value);

    if (isNaN(value)) return;

    if (value < 1 || value > questions.length) {

        notFound = true;
        document.getElementById("answer").style.display = "none";
        loadQuestion(); 
        return;
    }

    notFound = false;

    currentQuestion = value - 1;
    searchBase = currentQuestion;

    loadQuestion();
};

loadQuestion();
