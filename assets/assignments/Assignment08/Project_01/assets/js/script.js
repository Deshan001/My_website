let imgSrc = "assets/img/runner.gif";
let queData = {
    runner: [
        {letter: "A", img: imgSrc},
        {letter: "B", img: imgSrc},
        {letter: "C", img: imgSrc},
        {letter: "D", img: imgSrc},
        {letter: "E", img: imgSrc},
        {letter: "F", img: imgSrc}
    ],
    nextRunner: function () {
        let lastRunner = this.runner.pop();
        this.runner.unshift(lastRunner);
    }
}

renderQue();

function renderQue() {
    $("main> section:first-child").empty();
    for (let i = 0; i < queData.runner.length; i++) {
        $("main> section:first-child").append(`<div><img src="${queData.runner[i].img}" alt="runner"><h4>${queData.runner[i].letter}</h4></div>`);
    }
    queData.nextRunner();
}

setInterval(renderQue, 3000);
