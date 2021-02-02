function pageLoad() {
  let canvas = document.getElementById('testCanvas');

  let ctx = canvas.getContext('2d');

  ctx.fillStyle = "rgb(186, 194, 228)";
  ctx.beginPath();
  ctx.moveTo(329, 329);
  ctx.arc(329, 329, 300, -Math.PI/2, -46*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(253, 181, 183)";
  ctx.beginPath();
  ctx.moveTo(329, 329);
  ctx.arc(329, 329, 300, -46*Math.PI/100, -40*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(248, 210, 248)";
  ctx.beginPath();
  ctx.moveTo(329, 329);
  ctx.arc(329, 329, 300, -40*Math.PI/100, -28*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(158, 220, 253)";
  ctx.beginPath();
  ctx.moveTo(329, 329);
  ctx.arc(329, 329, 300, -28*Math.PI/100, -12*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(218, 250, 208)";
  ctx.beginPath();
  ctx.moveTo(329, 329);
  ctx.arc(329, 329, 300, -12*Math.PI/100, 34*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "rgb(215, 191, 255)";
  ctx.beginPath();
  ctx.moveTo(329, 329);
  ctx.arc(329, 329, 300, 34*Math.PI/100, 150*Math.PI/100, false);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

let c1 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col3'
).textContent;

let c2 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col3'
).textContent;

let c3 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col3'
).textContent;

let c4 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col3'
).textContent;

let c5 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col3'
).textContent;

let c6 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col3'
).textContent;

let a1 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col4'
).textContent;

let a2 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col4'
).textContent;

let a3 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col4'
).textContent;

let a4 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col4'
).textContent;

let a5 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col4'
).textContent;

let a6 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col4'
).textContent;

let dr1 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col5'
).textContent;

let dr2 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col5'
).textContent;

let dr3 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col5'
).textContent;

let dr4 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col5'
).textContent;

let dr5 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col5'
).textContent;

let dr6 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col5'
).textContent;

let tc = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row7'
).querySelector(
  '#col2'
);

let fc1 = Number(
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

let fc2 = Number(
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

let fc3 = Number(
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

let fc4 = Number(
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

let fc5 = Number(
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

let fc6 = Number(
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

let tr = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row7'
).querySelector(
  '#col3'
);

let ar1 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col7'
).textContent;

let ar2 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col7'
).textContent;

let ar3 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col7'
).textContent;

let ar4 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col7'
).textContent;

let ar5 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col7'
).textContent;

let ar6 = document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col7'
).textContent;

ar1 *= 0.01;
ar2 *= 0.01;
ar3 *= 0.01;
ar4 *= 0.01;
ar5 *= 0.01;
ar6 *= 0.01;

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col7'
).textContent = ar1

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col7'
).textContent = ar2

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col7'
).textContent = ar3

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col7'
).textContent = ar4

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col7'
).textContent = ar5

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col7'
).textContent = ar6

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col3'
).textContent = "$" + c1

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col3'
).textContent = "$" + c2

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col3'
).textContent = "$" + c3

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col3'
).textContent = "$" + c4

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col3'
).textContent = "$" + c5

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col3'
).textContent = "$" + c6

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col5'
).textContent = dr1 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col5'
).textContent = dr2 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col5'
).textContent = dr3 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col5'
).textContent = dr4 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col5'
).textContent = dr5 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col5'
).textContent = dr6 + "%"

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row1'
).querySelector(
  '#col6'
).textContent = "$" + fc1

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row2'
).querySelector(
  '#col6'
).textContent = "$" + fc2

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row3'
).querySelector(
  '#col6'
).textContent = "$" + fc3

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row4'
).querySelector(
  '#col6'
).textContent = "$" + fc4

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row5'
).querySelector(
  '#col6'
).textContent = "$" + fc5

document.querySelector(
  '.Product_Chart'
).querySelector(
  '#row6'
).querySelector(
  '#col6'
).textContent = "$" + fc6

let sum = Math.round(
  (
    fc1 + fc2 + fc3 + fc4 + fc5 + fc6
  ) * 100000
) / 100000;

tc.textContent = "$" + sum;

tr.textContent = ar1 + ar2 + ar3 + ar4 + ar5 + ar6;
