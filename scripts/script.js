let count = 10;
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
    let snow = document.createElement('img');
    snow.id = "snow" + i;
    snow.src = pic;
    snow.style.position = "absolute";
    document.body.appendChild(snow);
}

for (i = 0; i < count; i++) {
    y[i] = Math.round(Math.random() * height);
    x[i] = Math.round(Math.random() * width) - 90;
    speed[i] = Math.random() * 5 + 2;
    xstep[i] = 0;
    step[i] = Math.random() * 0.1 + 0.05;
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
        y[i] += speed[i] * Math.sin(Math.PI / 2);

        if (y[i] > height - 60) {
            y[i] = 0;
            x[i] = Math.random() * width - 89;
            step[i] = Math.random() * 0.1 + 0.05;
            speed[i] = Math.random() * 5 + 2;
        }

        document.getElementById("snow" + i).style.left = x[i] + "px";
        document.getElementById("snow" + i).style.top = y[i] + "px";
        xstep[i] += step[i];
    }
    setTimeout("fall()", 30);
}
fall();