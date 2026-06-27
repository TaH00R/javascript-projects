const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const fontSize = 18;

const chars =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";

const letters = chars.split("");

let columns;
let drops;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function draw() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {

        const character =
            letters[Math.floor(Math.random() * letters.length)];

        const green = 140 + Math.random() * 115;

        ctx.fillStyle = `rgb(0, ${green}, 0)`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#32803265";

        ctx.fillText(
            character,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    requestAnimationFrame(draw);
}

draw();