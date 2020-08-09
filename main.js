const ans = {
    q1: "html",
    q2: "br",
    q3: "i",
    q4: "true",
    q5: "css"
}

function checkResult() {
    function countScore(qname) {
        let radioNo = document.getElementsByName(qname);
        let s = 0;
        for (let i = 0; i < radioNo.length; i++) {
            for (let j in ans) {
                if (radioNo[i].checked && radioNo[i].value == ans[j]) {

                    s = s + 1;
                    document.getElementById(qname + "right").style.display = "inline-block";
                    document.getElementById(qname + "wrong").style.display = "none";
                }

            }

        }
        return s;
    }


    let score = (countScore("q1") + countScore("q2") + countScore("q3") + countScore("q4") + countScore("q5"));

    document.getElementById("results").style.display = "block";

    document.getElementById("results").innerHTML = "Your Score is " + score;

    console.log(score);
}