function pageLoad() {
  let canvas = document.getElementById('testCanvas');

  let ctx = canvas.getContext('2d');

  ctx.fillStyle = "rgb(186, 194, 228)";
  ctx.beginPath();
  ctx.moveTo(270, 240);
  ctx.arc(270, 240, 200, -Math.PI/2, -46*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(253, 181, 183)";
  ctx.beginPath();
  ctx.moveTo(270, 240);
  ctx.arc(270, 240, 200, -46*Math.PI/100, -40*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(248, 210, 248)";
  ctx.beginPath();
  ctx.moveTo(270, 240);
  ctx.arc(270, 240, 200, -40*Math.PI/100, -28*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(158, 220, 253)";
  ctx.beginPath();
  ctx.moveTo(270, 240);
  ctx.arc(270, 240, 200, -28*Math.PI/100, -12*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(218, 250, 208)";
  ctx.beginPath();
  ctx.moveTo(270, 240);
  ctx.arc(270, 240, 200, -12*Math.PI/100, 34*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(215, 191, 255)";
  ctx.beginPath();
  ctx.moveTo(270, 240);
  ctx.arc(270, 240, 200, 34*Math.PI/100, 150*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

let c1 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col2'
).textContent;

let c2 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col2'
).textContent;

let c3 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col2'
).textContent;

let c4 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col2'
).textContent;

let c5 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col2'
).textContent;

let c6 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col2'
).textContent;

let a1 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col3'
).textContent;

let a2 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col3'
).textContent;

let a3 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col3'
).textContent;

let a4 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col3'
).textContent;

let a5 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col3'
).textContent;

let a6 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col3'
).textContent;

let dr1 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col4'
).textContent;

let dr2 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col4'
).textContent;

let dr3 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col4'
).textContent;

let dr4 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col4'
).textContent;

let dr5 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col4'
).textContent;

let dr6 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col4'
).textContent;

let tc = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row7'
).querySelector(
  '#col2'
);

let tc1 = Number(
  c1
) * Number(
  a1
) * Number(
  (
    100 - Number(
    dr1
    )
  ) * 0.01
);

let tc2 = Number(
  c2
) * Number(
  a2
) * Number(
  (
    100 - Number(
      dr2
    )
  ) * 0.01
);

let tc3 = Number(
  c3
) * Number(
  a3
) * Number(
  (
    100 - Number(
      dr3
    )
  ) * 0.01
);

let tc4 = Number(
  c4
) * Number(
  a4
) * Number(
  (
    100 - Number(
      dr4
    )
  ) * 0.01
);

let tc5 = Number(
  c5
) * Number(
  a5
) * Number(
  (
    100 - Number(
      dr5
    )
  ) * 0.01
);

let tc6 = Number(
  c6
) * Number(
  a6
) * Number(
  (
    100 - Number(
      dr6
    )
  ) * 0.01
);

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col2'
).textContent = "$" + c1

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col2'
).textContent = "$" + c2

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col2'
).textContent = "$" + c3

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col2'
).textContent = "$" + c4

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col2'
).textContent = "$" + c5

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col2'
).textContent = "$" + c6

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col4'
).textContent = dr1 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col4'
).textContent = dr2 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col4'
).textContent = dr3 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col4'
).textContent = dr4 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col4'
).textContent = dr5 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col4'
).textContent = dr6 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col5'
).textContent = "$" + tc1

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col5'
).textContent = "$" + tc2

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col5'
).textContent = "$" + tc3

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col5'
).textContent = "$" + tc4

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col5'
).textContent = "$" + tc5

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col5'
).textContent = "$" + tc6

let sum = Math.round(
  (
    tc1 + tc2 + tc3 + tc4 + tc5 + tc6
  ) * 100000
) / 100000;

tc.textContent = "$" + sum;
