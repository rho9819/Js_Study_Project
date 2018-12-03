
var lottoNum = Array(45)
    .fill()
    .map(function (item, idx) {
        return idx + 1;
    });

var shuffle = [];
while (lottoNum.length > 0) {
    var mvNum = lottoNum.splice(Math.floor(Math.random() * lottoNum.length), 1)[0]
    shuffle.push(mvNum);
}

var bonus = shuffle[shuffle.length - 1];
var resultNum = shuffle.slice(0, 6).sort(function (a, b) {
    return a - b;
})

var result = resultNum.concat(bonus);
var resultWrap = document.getElementById('result-wrap');

for (var i = 0; i < result.length; i++) {
    (function (i) {
        var current = i;
        setTimeout(function () {
            var circle = document.createElement('div');
            circle.textContent = result[i];
            circle.style.display = "inline-block";
            circle.style.width = "30px";
            circle.style.height = "30px";
            circle.style.lineHeight = "30px";
            circle.style.margin = "10px 0 10px 10px";
            circle.style.textAlign = "center";
            circle.style.border = "1px solid #000";
            circle.style.borderRadius = "50%";
            if (i === result.length - 1) {
                var bonusTxt = document.createElement('p');
                bonusTxt.textContent = "보너스"
                resultWrap.append(bonusTxt);
            }
            resultWrap.append(circle);
        }, current * 1000)
    })(i)

}


