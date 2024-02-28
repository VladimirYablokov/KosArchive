let count = 50;
let elems = ["flake.gif"];
let y = []
let x = []
let speed = []
let step = []
let xstep = []
let height = document.body.scrollHeight;
let width = document.body.scrollWidth;

for (i = 0; i < count; i++) {
    let pic = "./img/" + elems[Math.floor(Math.random() * elems.length)];
    let elem = document.createElement('img');
    elem.id = "elem" + i;
    elem.src = pic;
    elem.style.position = "absolute";
    document.body.appendChild(elem);
}

for (i = 0; i < count; i++) {
    y[i] = Math.round(Math.random() * height);
    x[i] = Math.round(Math.random() * width) - 90;
    xstep[i] = 0;
    speed[i] = Math.random() * 1.5 + 1;
    step[i] = Math.random() * 0.01 + 0.05;
}

function fall() {
    let height = document.body.scrollHeight;
    let width = document.body.scrollWidth;
    for (i = 0; i < count; i++) {
        let sx = speed[i] * Math.atan(xstep[i]);
        if (x[i] + sx > width - 50) {
            x[i] = sx
        };
        x[i] += sx;
        y[i] += speed[i] * Math.atan(Math.PI / 2);

        if (y[i] > height - 50) {
            y[i] = 0;
            x[i] = Math.random() * width - 50;
            step[i] = Math.random() * 0.1 + 0.05;
            speed[i] = Math.random() * 1 + 1;
        }

        document.getElementById("elem" + i).style.left = x[i] + "px";
        document.getElementById("elem" + i).style.top = y[i] + "px";
        xstep[i] += step[i];
    }
    setTimeout("fall()", 30);
}
fall();