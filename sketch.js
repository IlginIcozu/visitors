var styles = `
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
  touch-action: none;
  background: #252525;
}
main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  width: auto !important;
  height: auto !important;
  max-width: 100% !important;
  max-height: 100% !important;
 /* box-shadow: 0px 0px 40px #000000;*/
}
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

let particles = [],
  particles2 = [],
  particles3 = [];
let particles4 = [],
  particles5 = [],
  particles6 = [];
let particles7 = [],
  particles8 = [],
  particles9 = [];
let mult = 0.03;
let vec, vec2, vec3;
let vec4, vec5, vec6;
let vec7, vec8, vec9;

function genTokenData(projectNum) {
  let data = {};
  let hash = "0x";
  for (var i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  data.hash = hash;
  data.tokenId = (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString();
  return data;
}
let tokenData = genTokenData(123);

// tokenData = {
//   hash: "0x1c42ac97551d0dd5497d74aba24b1872bed7a6fb726febf377b8f7f700e69de6",
//   tokenId: "16000130"
// }

let hash = tokenData.hash
let id = tokenData.tokenId

console.log(hash)
console.log(id)

let rSeed
let nSeed
let nSeed1
let nSeed2
let nSeed3
let progress1, progress2, progress3, progress

let rSeed1 = 12.49414
let rSeed2 = 78.233
let rSeed3 = 43758.5453123

let strokesSc
let blurSc
let drawAngle
let shapeC, dir
let uRadC2

let uSqr
let stC
let uRand
let uRand2
let swangle
let tick
let radMult
let swirlShader

let speed
let sek
let counter = 0
let sw
let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let bolBol = false;
let colPic, colPic2, colPic3
let yatayChooser
let yataStr
let bol1, bol2, bol3
let fr
let pg, blurBg
let c = 0
let c2 = 0
let c3 = 0
let noiseRandom1, noiseRandom2, noiseRandom3
let xoff1 = 0;
let xoff2 = 0;
let xoff3 = 0;

let uvChooser, uvChooser2
let intensityC
let roundnessC
let angleC
let radC
let darkC
let denC;
let sinC;
let max
let wi
let fbmShader
let strokeShader
let strokePg, fbmPg
let uRoundness, uAngleC
let pgPg
let dirR
let randRan
let dirCr
let noiseC
let soloChooser
let rotateC
let rotCh
let angleC2, radC2, dirR2
let uRound, spaBuf

let col1, col2, col3
let colV1, colV2, colV3
let col1Smin, col1Smax
let col2Smin, col2Smax
let col3Smin, col3Smax

let col1Bmin, col1Bmax
let col2Bmin, col2Bmax
let col3Bmin, col3Bmax

let colV1Bmin, colV1Bmax
let colV2Bmin, colV2Bmax
let colV3Bmin, colV3Bmax

let colV1Smin, colV1Smax
let colV2Smin, colV2Smax
let colV3Smin, colV3Smax

let briMult, briMult2

let uniRand1
let uniRand2, fbmC

let pix = 3;
let kalCh

let combinationC
let combName
let granPg

let dirdir
let fig
let genel
let stars = []
let rad
let tanC, tanC2
let uPi
let wW, hH
let gate
let compGroup
let direction
let starC = 0

function preload() {

  fbmShader = loadShader("fbm.vert", "fbm.frag");

  swirlShader = loadShader("swirl.vert", "swirl.frag")
  spaShader = loadShader("spa.vert", "spa.frag")

}

function drawRandomTexture(r, w) {
  randomSeed(rSeed)

  // randomSeed(307449.212650388)
  randomSeed(538097.1603766044)

  randomCanvas = createImage(w, w * r);
  randomCanvas.loadPixels();
  for (let i = 0; i < randomCanvas.width; i++) {
    for (let j = 0; j < randomCanvas.height; j++) {
      randomCanvas.set(i, j, color(random(255)));
    }
  }
  randomCanvas.updatePixels();
  randomSeed(rSeed)
}

function setup() {
  let ar = 3 / 4
  createCanvas(1000, 1000 * ar);
  pg = createGraphics(1000, 1000 * ar)
  fbmPg = createGraphics(1000, 1000 * ar, WEBGL)
  blurBg = createGraphics(1000, 1000 * ar, WEBGL)
  granPg = createGraphics(1000, 1000 * ar)
  bgSh = createGraphics(1000, 1000 * ar, WEBGL);
  spaBuf = createGraphics(1000, 1000 * ar, WEBGL)


  pixelDensity(pix)
  colorMode(HSB, 360, 100, 100, 1);
  background(20, 10, 0);
  rectMode(CENTER)

  pg.pixelDensity(pix)
  pg.colorMode(HSB, 360, 100, 100, 1);
  pg.background(20, 10, 0);
  pg.rectMode(CENTER);

  blurBg.pixelDensity(pix)
  blurBg.colorMode(HSB, 360, 100, 100, 1);
  blurBg.background(20, 10, 0);
  blurBg.rectMode(CENTER);

  fbmPg.pixelDensity(pix)
  fbmPg.colorMode(HSB, 360, 100, 100, 1);
  fbmPg.background(20, 10, 0);
  fbmPg.rectMode(CENTER);

  granPg.pixelDensity(pix)
  granPg.colorMode(HSB, 360, 100, 100, 1);
  granPg.rectMode(CENTER);

  bgSh.pixelDensity(pix);
  bgSh.colorMode(HSB, 360, 100, 100, 1);

  spaBuf.pixelDensity(pix)
  spaBuf.noStroke()


  let R = new Random()


  drawRandomTexture(ar, width)


  rSeed = R.random_dec() * 999999

  // rSeed = 404234.03047638084



  console.log(rSeed)


  nSeed = R.random_dec() * 999999
  nSeed1 = R.random_dec() * 1874915
  nSeed2 = R.random_dec() * 158719
  nSeed3 = R.random_dec() * 527915



  randomSeed(rSeed)
  noiseSeed(rSeed)


  //------------------------------Colors
  colPic = random(1)
  let colCol = random(1)

  if (colPic > 0.60) {
    if (colCol < .40) {
      col1 = 190
      col2 = 10
      col3 = 30
    } else {
      col1 = 30
      col2 = 190
      col3 = 10
    }
  } else if (colPic > 0.20) {
    col1 = 220
    col2 = 20
    col3 = 180
  } else {
    col1 = 20
    col2 = 220
    col3 = 180

  }

  col1 = random([190, 10, 30, 220, 20, 180, 40, 50, 260, 340])
  col2 = random([190, 10, 30, 220, 20, 180, 190, 10, 30, 220, 20, 180])
  col3 = random([190, 10, 30, 220, 20, 180, 190, 10, 30, 220, 20, 180])

  // if(abs(col1 - col2) < 35){
  //   col3 = Math.max(col1, col2) + 50
  // }

  colPic = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 14, 14, 14, 14, 14])

  // colPic = 1



  if (colPic == 1) {
    col1 = 340
    col2 = 180
    col3 = 30
  } else if (colPic == 2) {
    col1 = 32
    col2 = 166
    col3 = 246
  } else if (colPic == 3) {
    col1 = 299
    col2 = 188
    col3 = 240
  } else if (colPic == 4) {
    col1 = 18
    col2 = 350
    col3 = 330
  } else if (colPic == 5) {
    col1 = 216
    col2 = 43
    col3 = 0
  } else if (colPic == 6) {
    col1 = 180
    col2 = 331
    col3 = 32
  } else if (colPic == 7) {
    col1 = 180
    col2 = 331
    col3 = 86
  } else if (colPic == 8) {
    col1 = 180
    col2 = 49
    col3 = 86
  } else if (colPic == 9) {
    col1 = 7
    col2 = 336
    col3 = 157
  } else if (colPic == 10) {
    col1 = 47
    col2 = 187
    col3 = 354
  } else if (colPic == 11) {
    col1 = 47
    col2 = 271
    col3 = 187
  } else if (colPic == 12) {
    col1 = 19
    col2 = 354
    col3 = 187
  } else if (colPic == 13) {
    col1 = 0
    col2 = 70
    col3 = 202
  } else if (colPic == 14) {
    col1 = random([190, 10, 30, 220, 20, 180, 40, 50, 260, 340])
    col2 = random([190, 10, 30, 220, 20, 180, 190, 10, 30, 220, 20, 180])
    col3 = random([190, 10, 30, 220, 20, 180, 190, 10, 30, 220, 20, 180])

    if (abs(col1 - col2) % 360 < 20) {
      col3 = (Math.max(col1, col2) + 50) % 360
    }
  }



  briMult = 2
  briMult2 = 2

  sw = 3 //map(pix, 1, 7, 2, 2.35) * 1.5
  yatayChooser = random(1);

  soloChooser = random(1)

  noiseRandom1 = random(45, 55)
  noiseRandom2 = random(45, 55)
  noiseRandom3 = random(45, 55)
  wi = random(15, 20)
  drawAngle = random(1)


  uvChooser = random([0.0, 1.0, 1.0]);
  uvChooser2 = random([0.0, 0.0, 0.0, 1.0]);
  rotCh = random([0, 1, 2, 3, 0, 0])

  randRan = random(1)
  denC = random(1)
  sinC = random(1)
  dirCr = random(1)
  uAmp = random(0.15, 0.24);
  uOctave = random(2.8, 5.0);
  uFbmAmp = random(1.0, 4.0);
  uRoundness = random(1);
  uAngleC = random(1);
  uSqr = 0.0
  stC = random(1)
  uRand = random(1)
  uRand2 = random(1)

  rotateC = random(1)
  strokesSc = random([0.5, 1, 1])
  blurSc = random([0.5, 1, 1])
  uniRand1 = round(random(0.2, 0.4), 2)
  uniRand2 = round(random(0.1, 0.4), 2)
  fbmC = random(1)
  noiseC = 1
  kalCh = random(1)
  angleC = random(1)
  radC = random(1)
  dirR = random(1)
  angleC2 = random(1)
  radC2 = random(1)
  dirR2 = random(1)

  intensityC = round(random(0.1, 2.0), 4);
  roundnessC = round(random(0.05, 0.16), 4);
  combinationC = random(1)


  intensityC = round(random(0.9, 1.35), 4)
  roundnessC = round(random(0.05, 0.22), 4)


  kalCh = random([0, 0, 1, 1, 0])

  uvChooser = 1
  yatayChooser = 0
  fbmC = 0



  yatayChooser = random([0.0, 1.0])




  if (yatayChooser == 0) {
    yataStr = "ver"
  } else {
    yataStr = "hor"
  }

  yataStr = "hor"


  darkC = 0

  soloChooser = random([1, 1, 0, 1, 1])

  // soloChooser = 0

  if (soloChooser == 0.0) {
    soloChooser = "Solo"
    kalCh = 0
  } else {
    soloChooser = "Triplet"
  }




  // if (drawAngle < 0.8) {
  max = random(0.1, 0.3);
  // } else {
  //   max = PI / 2
  // }


  placements();

  randomSeed(rSeed)
  noiseSeed(rSeed)




  for (var i = 0; i < 2800; i++) {
    let r = random(1)

    stars[i] = new Star(r);
  }





  circ = 0


  compGroup = random([1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 3, 4, 5, 6, 7, 9])

  // gate = random([0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0, 26.0, 27.0, 28.0, 29.0, 30.0, 31.0, 32.0, 33.0, 34.0, 35.0, 36.0, 37.0, 38.0, 39.0, 40.0, 41.0, 42.0, 43.0, 44.0, 45.0])

  if (compGroup == 1) {
    gate = random([11, 12, 26, 27, 25, 9, 10, 28])
  } else if (compGroup == 2) {
    gate = random([30, 33, 31, 38])
  } else if (compGroup == 3) {
    // let subg = random([1, 2, 3])
    // if (subg == 1) {
    gate = random([37, 22, 32, 23, 17, 29, 13, 36])
    // } else if (subg == 2) {
    //   gate = random([32, 23, 17, 29])
    // } else {
    //   gate = random([13, 36])
    // }

  } else if (compGroup == 4) {
    gate = random([0, 1, 40])
  } else if (compGroup == 5) {
    gate = random([14, 15, 16])
  } else if (compGroup == 6) {
    gate = random([41, 6, 8, 42, 43, 5, 7])
  } else if (compGroup == 7) {
    gate = random([44, 21])
  } else if (compGroup == 8) {
    circ = 1
    gate = random([24, 20, 18])
  } else if (compGroup == 9) {
    gate = random([35, 45])
  }

  let radM = 1






  rad = random([0.5, 0.6, 0.7, 0.8]) / 1
  swangle = random([1.0, 2.0, 3.0, 0.75, 1.25, 1.5, 1.75, 2.25, 2.5, 2.75])
  tick = random([0.0, 0.1, 0.2]) ///////////////////////varity icin random([0.0, 0.1, 0.2, 0.3, 0.4])
  shapeC = random([0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 0.0, 7.0, 8.0])
  radMult = 1.0 //random([2.0, 2.0, 1.0, 1.75, 1.5])
  direction = random([-1, 1])


  angleC = random([1.0, 2.0, 3.0, 4.0])
  radC = random([1.0, 2.0, 3.0, 4.0, 5.0, 6.0])
  dirR = random([1.0, 2.0, 3.0, 4.0, 5.0, 6.0])

  uSc = random(0.5, 1.5)
  uRound = random(0.05, 0.35)
  uRadC2 = random([0.0, 1.0])

  tanC = random(1)
  tanC2 = random(1)
  uPi = random(1, 1.5)

  // gate = 0

  if (gate == 0) {
    shapeC = random([0, 7, 8])

    rad = random([0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.5 1.0  if7 0.3 1.0
    swangle = random([1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]) // 1.5 5
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) /// 0.2
  } else if (gate == 1) {
    shapeC = random([0, 2, 4])

    rad = random(0.6, 0.8) ///0.6 0.8 -floating if2 0.4 0.6
    swangle = random([3.0, 3.5, 4.0, 4.5, 5.0]) //3.0 5.0
    tick = 0.0 //0.0
  } else if (gate == 5) {
    shapeC = random([0, 2, 3, 5, 7])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) ///0.4 1.0
    swangle = random([3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 3.0 50.0
    tick = 0.0 //0.0
    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 6) {
    shapeC = random([0, 2, 4, 5, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8]) ///0.4 0.8
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) //0.2
    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 7) {
    shapeC = random([0, 2, 4, 5, 6, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) ///0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) //0.2
    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 8) {
    shapeC = random([0, 6])

    shapeC = 0


    rad = random([0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) ///0.5 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 8.0, 10.0, 12.0, 15.0, 18.0, 25.0]) // 1.0 25.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) //0.2
  } else if (gate == 9) {
    shapeC = random([0, 1, 4, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])


    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 10) {
    shapeC = random([0, 1, 2])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 11) {
    shapeC = random([0, 4, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 12) {
    shapeC = random([0, 2, 6])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 13) {
    shapeC = random([0, 5, 7, 8])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

  } else if (gate == 14) {
    shapeC = random([0, 1, 5, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)

  } else if (gate == 15) {
    shapeC = random([0, 1, 2, 3, 5, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 16) {
    shapeC = random([0, 2, 3, 5, 6, 7, 8])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2


  } else if (gate == 17) {
    shapeC = random([0, 2, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2
    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 18) {
    shapeC = random([0, 1, 5, 7, 8])

    rad = random(0.4, 0.55) /// 0.6 1.0
    swangle = random(3.0, 5.0) // 2.0 4.0
    tick = 0.0

  } else if (gate == 20) {
    shapeC = random([0, 3])

    shapeC = 3
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    if (circ == 1) radM = 1.5

    rad = random(0.4, 0.55) /// 0.6 1.0
    swangle = random(3.0, 5.0) // 2.0 4.0
    tick = 0.0
  } else if (gate == 21) {
    shapeC = random([0, 2, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])


    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0]) // 3.0 100.0
    tick = 0.0 // 0.0

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 22) {
    shapeC = random([0, 1, 2, 5, 6, 7, 8, 6])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

  } else if (gate == 23) {
    shapeC = random([0, 2, 3, 4, 7, 8])
    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

  } else if (gate == 24) {
    shapeC = random([0, 1, 3, 4, 5, 7])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    if (circ == 1) radM = 1.5

    rad = random(0.4, 0.55) /// 0.6 1.0
    swangle = random(3.0, 5.0) // 2.0 4.0
    tick = 0.0
  } else if (gate == 25) {
    shapeC = random([0, 1, 5, 7])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 26) {
    shapeC = random([0, 5, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 27) {
    shapeC = random([0, 5])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 28) {
    shapeC = random([0, 7])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 45.0, 20.0, 50.0]) // 1.0 50.0+
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 29) {
    shapeC = random([0, 2, 5, 8])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

  } else if (gate == 30) {
    shapeC = random([0, 5, 7, 8])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

  } else if (gate == 31) {
    shapeC = random([0, 1, 2, 5, 7, 8])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2
  } else if (gate == 32) {
    shapeC = random([0, 2, 3, 5, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2
    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 33) {
    shapeC = random([0, 1, 5, 7, 8])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2
  } else if (gate == 35) {
    shapeC = random([0, 4, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8]) /// 0.4 0.8
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = 0.0 // 0.0

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 36) {
    shapeC = random([0, 1, 2, 5, 7, 8])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

  } else if (gate == 37) {
    shapeC = random([0, 1, 2, 4, 5, 7, 8])

    rad = random([0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.6 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0]) // 2.0 4.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

  } else if (gate == 38) {
    shapeC = random([0, 1, 3, 4, 7, 8])
    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2
  } else if (gate == 40) {
    shapeC = random([0, 1, 2, 4, 5, 7, 8])


    rad = random([0.4, 0.5, 0.6, 0.7, 0.8]) /// 0.4 0.8
    swangle = random([1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0]) // 1.0 4.0
    tick = 0.0 // 0.0

  } else if (gate == 41) {
    shapeC = random([0, 1, 2, 4, 5, 6, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])


    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 2.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 42) {
    shapeC = random([0, 2, 3, 4, 5, 6, 7, 8])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 2.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2
  } else if (gate == 43) {
    shapeC = random([0, 2, 4, 5, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 2.0 50.0
    tick = random([0.0, 0.1, 0.2, 0.0, 0.0]) // 0.2
    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 44) {
    shapeC = random([0, 1, 4, 6, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    rad = random([0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]) /// 0.4 1.0
    swangle = random([3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0]) // 3.0 100.0
    tick = 0.0 // 0.0
    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  } else if (gate == 45) {
    shapeC = random([0, 3, 5, 7, 8])
    circ = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])

    rad = random([0.4, 0.5, 0.6, 0.7, 0.8]) /// 0.4 0.8
    swangle = random([1.0, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 7.0, 10.0, 15.0, 25.0, 30.0, 40.0, 50.0]) // 1.0 50.0
    tick = 0.0 // 0.0

    if (circ == 1) rad = random(0.4, 0.55), swangle = random(3.0, 5.0)
  }


  // gate = 10 ////1  5 6 7 8 9 10 11 12 13 14 15 16 17 18 20 21

  // shapeC = 6.0

  // rad = 0.4

  // swangle = 5

  // tick = 0.0



  // circ = 0.0



  // ps = random(1)

  // uAmp = random(0.15, 0.24);
  // uOctave = random(2.1, 5.0);
  // uFbmAmp = random(1.0, 4.0);




  console.log("rad: " + rad)
  console.log("swangle: " + swangle)
  console.log("tick: " + tick)
  console.log("shapeC: " + shapeC)
  console.log("gate: " + gate)
  console.log("circ: " + circ)
  console.log("uAmp: " + uAmp)
  console.log("uOctave: " + uOctave)
  console.log("uFbmAmp: " + uFbmAmp)



  wW = random([1.5, 1.75, 2.0, 2.25, 2.5, 3.0, 2., 2., 2.])
  hH = random(1.90, 2.10)

  // wW = 2
  // hH = 2

  granPg.background(0, 0, 0)
  starsGran(2, 1, 2)
  starsGranSN(2, 1, 2)


}

function draw() {
  noStroke()
  pg.noStroke();

  let dir
  let dir2
  let dir3

  frameRate(60);

  let ed = 50

  if (yataStr == "ver") {
    sek = 0
  }

  if (yataStr == "hor") {
    sek = -PI / 2
  }

  if (sinC < 0.70) {
    // noiseSeed(nSeed1)
    dir = map(noise(xoff1 / noiseRandom1, frameCount / noiseRandom1 / 1), 0, 1, -max, max)
    // noiseSeed(nSeed2)
    dir2 = map(noise(xoff1 / noiseRandom2, frameCount / noiseRandom2 / 1), 0, 1, -max, max)
    // noiseSeed(nSeed3)
    dir3 = map(noise(xoff1 / noiseRandom3, frameCount / noiseRandom3 / 1), 0, 1, -max, max)
  } else {
    // noiseSeed(nSeed1)
    dir = map(sin(frameCount / 50), -1, 1, -max, max)
    // noiseSeed(nSeed2)
    dir2 = map(sin(frameCount / 75), -1, 1, -max, max)
    // noiseSeed(nSeed3)
    dir3 = map(sin(frameCount / noiseRandom3), -1, 1, -max, max)
  }

  xoff1 += 0.1;
  xoff2 += 0.2;
  xoff3 += 0.3;

  let n1 = dir
  let n2 = dir
  let n3 = dir
  let n4 = dir2
  let n5 = dir2
  let n6 = dir2
  let n7 = dir3
  let n8 = dir3
  let n9 = dir3
  counter += 1
  // noiseSeed(nSeed1)
  let spe = 1
  let magN1 = spe //map(noise(frameCount / (1000 / random(0.80, 1.10)) / .5), 0, 1, 0.1, .7) * 2.5
  let magN2 = spe //map(noise(frameCount / (1050 / random(0.90, 1.20)) / .5), 0, 1, 0.1, .7) * 2.5
  let magN3 = spe //map(noise(frameCount / (950 / random(0.80, 1.20)) / .5), 0, 1, 0.1, .7) * 2.5
  // noiseSeed(nSeed2)
  let magN4 = spe //map(noise(frameCount / (950 / random(0.90, 1.20)) / .5), 0, 1, 0.1, .7) * 2.5
  let magN5 = spe //map(noise(frameCount / (1050 / random(0.80, 1.20)) / .5), 0, 1, 0.1, .7) * 2.5
  let magN6 = spe //map(noise(frameCount / (1000 / random(0.80, 1.10)) / .5), 0, 1, 0.1, .7) * 2.5
  // noiseSeed(nSeed3)
  let magN7 = spe //map(noise(frameCount / (1050 / random(0.90, 1.20)) / .5), 0, 1, 0.1, .7) * 2.5
  let magN8 = spe //map(noise(frameCount / (1000 / random(0.80, 1.20)) / .5), 0, 1, 0.1, .7) * 2.5
  let magN9 = spe //map(noise(frameCount / (950 / random(0.80, 1.10)) / .5), 0, 1, 0.1, .7) * 2.5
  // noiseSeed(rSeed)

  pg.push()



  for (let i = 0; i < particles.length; i = i + 1) {

    let angle = map(sin(particles[i].y * mult / particles[i].x * mult), 0, 1, -sek, sek);
    let angle2 = map(sin(particles2[i].y * mult / particles2[i].x * mult), 0, 1, -sek, sek);
    let angle3 = map(sin(particles3[i].y * mult / particles3[i].x * mult), 0, 1, -sek, sek);

    angle = angle + n1;
    angle2 = angle2 + n2
    angle3 = angle3 + n3

    vec = createVector(sin(angle * 1), cos(angle));
    vec2 = createVector(sin(angle2 * 1), cos(angle2));
    vec3 = createVector(sin(angle3 * 1), cos(angle3));

    vec.setMag(magN1 * (sw / 2));
    vec2.setMag(magN2 * (sw / 2));
    vec3.setMag(magN3 * (sw / 2));

    particles[i].add(vec);
    particles2[i].add(vec2);
    particles3[i].add(vec3);

    let ma = 1 //map(noise(particles[i].x * mult, particles[i].y * mult * 100, frameCount * mult * 20), 0, 1, 0, 1)

    let ma2 = 1 //map(noise(particles2[i].x * mult, particles2[i].y * mult * 92, frameCount * mult * 20), 0, 1, 0, 1)
    let ma3 = 1 //map(noise(particles3[i].x * mult, particles3[i].y * mult * 92, frameCount * mult * 20), 0, 1, 0, 1)



    if (yataStr == "hor") {
      bol1 = particles[i].x < width - ed && particles[i].x > ed
      bol2 = particles2[i].x < width - ed && particles2[i].x > ed
      bol3 = particles3[i].x < width - ed && particles3[i].x > ed
    }

    if (bol1) {
      pg.fill(col1, random(60, 80), random(30, 50) * briMult, ma);
      pg.ellipse(particles[i].x + ma * 5 * random(-1, 1), particles[i].y, sw)
    }

    if (bol2) {
      pg.fill(col2, random(30, 50) * briMult, random(20, 50) * briMult2, ma2);
      pg.ellipse(particles2[i].x, particles2[i].y, sw)
    }

    if (bol3) {

      pg.fill(col3, random(60, 80), random(40, 80), ma3);

      if (yataStr == "hor") {
        if (particles3[i].x >= width - ed - 5) {
          flag1 = true
          fr = frameCount
        }
      }

      pg.ellipse(particles3[i].x, particles3[i].y, sw * 1)
    }

    if (yatayChooser == 0) {
      let firstcheck = min(particles[i].y, particles2[i].y)
      let secondcheck = min(particles2[i].y, particles3[i].y)
      progress = min(firstcheck, secondcheck);
    } else {
      let firstcheck = min(particles[i].x, particles2[i].x)
      let secondcheck = min(particles2[i].x, particles3[i].x)
      progress = min(firstcheck, secondcheck);
    }

  }


  if (soloChooser == "Triplet") {
    for (let i = 0; i < particles4.length; i = i + 1) {
      let angle4 = map(sin(particles4[i].y * mult / particles4[i].x * mult), 0, 1, -sek, sek);
      let angle5 = map(sin(particles5[i].y * mult / particles5[i].x * mult), 0, 1, -sek, sek);
      let angle6 = map(sin(particles6[i].y * mult / particles6[i].x * mult), 0, 1, -sek, sek);

      angle4 = angle4 + n4;
      angle5 = angle5 + n5;
      angle6 = angle6 + n6;

      vec4 = createVector(sin(angle4 * 1), cos(angle4));
      vec5 = createVector(sin(angle5 * 1), cos(angle5));
      vec6 = createVector(sin(angle6 * 1), cos(angle6));

      vec4.setMag(magN4 * (sw / 2));
      vec5.setMag(magN5 * (sw / 2));
      vec6.setMag(magN6 * (sw / 2));

      particles4[i].add(vec4);
      particles5[i].add(vec5);
      particles6[i].add(vec6);

      let ma = 1 //map(noise(particles4[i].x * mult, particles4[i].y * mult * 100, frameCount * mult * 20), 0, 1, 0, 1)

      let ma2 = 1 //map(noise(particles5[i].x * mult, particles5[i].y * mult * 92, frameCount * mult * 20), 0, 1, 0, 1)
      let ma3 = 1 //map(noise(particles6[i].x * mult, particles6[i].y * mult * 92, frameCount * mult * 20), 0, 1, 0, 1)



      if (yataStr == "hor") {
        bol1 = particles4[i].x < width - ed && particles4[i].x > ed
        bol2 = particles5[i].x < width - ed && particles5[i].x > ed
        bol3 = particles6[i].x < width - ed && particles6[i].x > ed
      }

      if (bol1) {
        pg.fill(col1, random(60, 80), random(30, 50) * briMult, ma);

        pg.ellipse(particles4[i].x + ma * 5 * random(-1, 1), particles4[i].y, sw)
      }

      if (bol2) {

        pg.fill(col2, random(30, 50) * briMult, random(20, 50) * briMult2, ma2);

        pg.ellipse(particles5[i].x, particles5[i].y, sw)
      }

      if (bol3) {

        pg.fill(col3, random(60, 80), random(40, 80), ma3);




        if (yataStr == "hor") {
          if (particles6[i].x >= width - ed - 5) {
            flag2 = true
            fr = frameCount
          }
        }

        pg.ellipse(particles6[i].x, particles6[i].y, sw * 1)
      }
      if (yatayChooser == 0) {
        let firstcheck = min(particles4[i].y, particles5[i].y)
        progress2 = min(firstcheck, particles6[i].y);
      } else {
        let firstcheck = min(particles4[i].x, particles5[i].x)
        progress2 = min(firstcheck, particles6[i].x);
      }
    }

    for (let i = 0; i < particles7.length; i = i + 1) {
      let angle7 = map(sin(particles7[i].y * mult / particles7[i].x * mult), 0, 1, -sek, sek);
      let angle8 = map(sin(particles8[i].y * mult / particles8[i].x * mult), 0, 1, -sek, sek);
      let angle9 = map(sin(particles9[i].y * mult / particles9[i].x * mult), 0, 1, -sek, sek);

      angle7 = angle7 + n7;
      angle8 = angle8 + n8;
      angle9 = angle9 + n9;

      vec7 = createVector(sin(angle7 * 1), cos(angle7));
      vec8 = createVector(sin(angle8 * 1), cos(angle8));
      vec9 = createVector(sin(angle9 * 1), cos(angle9));

      vec7.setMag(magN7 * (sw / 2));
      vec8.setMag(magN8 * (sw / 2));
      vec9.setMag(magN9 * (sw / 2));

      particles7[i].add(vec7);
      particles8[i].add(vec8);
      particles9[i].add(vec9);

      let ma = 1 //map(noise(particles7[i].x * mult, particles7[i].y * mult * 100, frameCount * mult * 20), 0, 1, 0, 1)

      let ma2 = 1 //map(noise(particles8[i].x * mult, particles8[i].y * mult * 92, frameCount * mult * 20), 0, 1, 0, 1)
      let ma3 = 1 //map(noise(particles9[i].x * mult, particles9[i].y * mult * 92, frameCount * mult * 20), 0, 1, 0, 1)



      if (yataStr == "hor") {
        bol1 = particles7[i].x < width - ed && particles7[i].x > ed
        bol2 = particles8[i].x < width - ed && particles8[i].x > ed
        bol3 = particles9[i].x < width - ed && particles9[i].x > ed
      }

      if (bol1) {
        pg.fill(col1, random(60, 80), random(30, 50) * briMult, ma);
        pg.ellipse(particles7[i].x + ma * 5 * random(-1, 1), particles7[i].y, sw)
      }

      if (bol2) {
        pg.fill(col2, random(30, 50) * briMult, random(20, 50) * briMult2, ma2);
        pg.ellipse(particles8[i].x, particles8[i].y, sw)
      }

      if (bol3) {
        pg.fill(col3, random(60, 80), random(40, 80), ma3);


        if (yataStr == "hor") {
          if (particles9[i].x >= width - ed - 5) {
            flag3 = true
            fr = frameCount
          }
        }
        pg.ellipse(particles9[i].x, particles9[i].y, sw * 1)
      }

      if (yatayChooser == 0) {
        let firstcheck = min(particles7[i].y, particles8[i].y)
        progress3 = min(firstcheck, particles9[i].y);
      } else {
        let firstcheck = min(particles7[i].x, particles8[i].x)
        progress3 = min(firstcheck, particles9[i].x);
      }

    }
  }

  pg.pop();


  // pg.fill(random([0, 20, 180]), random(60, 80), random(60, 80), random(1))
  // pg.ellipse(random(width/2 - 200, width/2 + 200), height / 2, random(100, width/1.05), random(100, height/1.05))

  // if(frameCount > 100) bolBol = true



  push()
  image(granPg, 0, 0)

  // background(0, 0, 5, 0.7)
  // starC += 1;
  // if(starC == 2)starsS(2, 1, 2)


  if (soloChooser == "Triplet") progress = min(progress2, progress3)
  let limit

  if (yatayChooser == 0) {
    limit = height
  } else {
    limit = width
  }
  // let yuzde = floor(map(progress, 0, limit, 0, 100))

  // fill(0, 0, 80)
  // noStroke()
  // textFont("Verdana");
  // textSize(25);
  // textAlign(CENTER, CENTER)
  // text("%" + yuzde, width / 2, height / 2);

  speed = progress / 10
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  translate(-width / 2, -height / 2);
  // image(granPg, 0, 0)
  pop()


  if (soloChooser == "Triplet") {
    bolBol = flag1 && flag2 && flag3;

  } else {
    bolBol = flag1
    // noLoop();
  }

  // if (bolBol) {
  // noLoop()


  if (bolBol) { //flag1 && flag2 && flag3 - flag1
    // for (let i = 0; i < 4; i++) {


    fbmShader.setUniform("uTexture0", pg);
    fbmShader.setUniform("randomTex", randomCanvas);
    fbmShader.setUniform('u_time', millis() / 1000.0)
    fbmShader.setUniform("u_middle", [mouseX, mouseY]);
    fbmShader.setUniform("u_amp", uAmp);
    fbmShader.setUniform("uResolution", [width * pix, height * pix]);
    fbmShader.setUniform("uPla", [width * pix, height * pix]);
    fbmShader.setUniform("u_octave", uOctave);
    fbmShader.setUniform("u_fbmAmp", uFbmAmp);
    fbmShader.setUniform("u_roundness", uRoundness);
    fbmShader.setUniform("u_angleC", uAngleC);
    fbmShader.setUniform("u_sqr", uSqr);
    fbmShader.setUniform("u_fbmC", fbmC);

    fbmPg.noStroke()

    fbmPg.shader(fbmShader);
    fbmPg.rect(0, 0, width, height);


    c += 1
    // frameRate(1)
    if (c == 4) {
      for (let i = 0; i < 200; i++) {
        let cho = random(1)
        if (cho > .66) {
          pg.fill(col3, random(60, 80) / 1, random(40, 80), 1);
        } else if (cho > .33) {
          pg.fill(col2, random(10, 40) / 1, random(0, 20), 1);
        } else {
          pg.fill(col1, random(60, 80) / 1, random(30, 50), 1);
        }

        el(random(width), random(height), randomGaussian(2, 7), i)
      }
      starsBg(2)
    }




    if (c > 4) {
      // granulate(50)
      // flag4 = true
      flag5 = true

    }

  }
  // }

  if (flag5) {

    for (let i = 0; i < 2; i++) {



      swirlShader.setUniform("uTexture0", fbmPg)
      swirlShader.setUniform("uResolution", [fbmPg.width * pix, fbmPg.height * pix]);
      swirlShader.setUniform("uCenter", [fbmPg.width / wW * pix, fbmPg.height / hH * pix]);
      swirlShader.setUniform("randomTex", randomCanvas);
      // swirlShader.setUniform("uCenter", [mouseX, mouseY]);
      swirlShader.setUniform("uRad", rad);
      swirlShader.setUniform("uAngle", swangle);
      swirlShader.setUniform("uTick", tick);
      swirlShader.setUniform("uShape", shapeC)
      swirlShader.setUniform("uDir", direction)
      swirlShader.setUniform("uRadMult", radMult)
      swirlShader.setUniform("u_gate", gate)
      swirlShader.setUniform("u_circ", circ)



      bgSh.noStroke()

      bgSh.shader(swirlShader);
      // bgSh.translate(-width / 2, -height / 2)
      bgSh.rect(0, 0, width, height);
      // pg.pop()

      c3 += 1
      if (c3 > 1) {
        flag4 = true

        // flag5 = false
      }

    }
  }

  // }


  if (flag4) {

    // for (let i = 0; i < 2; i++) {

    spaShader.setUniform('resolution', [width * pix, height * pix])
    spaShader.setUniform("randomTex", randomCanvas);
    spaShader.setUniform('img', bgSh)
    spaShader.setUniform("u_radC", radC);
    spaShader.setUniform("u_angleC", angleC);
    spaShader.setUniform("u_dirR", dirR);
    spaShader.setUniform("uScale", uSc);
    spaShader.setUniform("uRound", uRound);
    spaShader.setUniform("u_radC2", uRadC2);
    spaShader.setUniform("u_tanC", tanC);
    spaShader.setUniform("u_tanC2", tanC2);
    spaShader.setUniform("uPi", uPi);
    spaShader.setUniform("u_circ", circ);
    spaShader.setUniform("u_gate", compGroup)


    spaBuf.noStroke()
    spaBuf.shader(spaShader);

    spaBuf.rect(0, 0, width, height);


    push();

    if (gate == 1) rotCh = 2

    // rotCh = 2 ///////////////////////////////////////////////////////////////

    if (rotCh == 0) {
      translate(0, 0)
      scale(1, 1)
    } else if (rotCh == 1) {
      translate(width, 0)
      scale(-1, 1)
    } else if (rotCh == 2) {
      translate(width, height)
      scale(-1, -1)
    } else if (rotCh == 3) {
      translate(0, height)
      scale(1, -1)
    }

    image(spaBuf, 0, 0);

    // image(fbmPg, 0, 0);

    // image(bgSh, 0, 0);
    pop();

    c2 += 1
    if (c2 > 1) {
      for (let i = 0; i < 150; i++) {
        let cho = random(1)
        if (cho > .66) {
          fill(col3, random(60, 80) / 2, random(40, 80), 1);
        } else if (cho > .33) {
          fill(col2, random(10, 40) / 2, random(0, 20), 1);
        } else {
          fill(col1, random(60, 80) / 2, random(30, 50), 1);
        }
        // elN(random(width), random(height), random(2, 7), i)
      }

      // fill(0)
      // rect(width / 2, height / 2, width, height)

      push()
      for (let i = 0; i < 25; i++) {

        // noFill()
        // stroke(0, 0, 90)
        // strokeWeight(random(0.01, 0.08))
        // drawingContext.shadowOffsetX = 0;
        // drawingContext.shadowOffsetY = 0;
        // drawingContext.shadowBlur = 25;
        // drawingContext.shadowColor = 'white';
        // circle(random(width), random(height), random([50, 100, 20, 500]))


        // circC()
      }
      pop()

      starsS(2, 1, 2)
      starsS(2, 0.25, 2.5)
      starsSN(2, 1, 2)



      noLoop();


      // saveCanvas("sonTest2 " + compGroup + " " + gate + " " + shapeC + " " + circ + " " + colPic + " " + rSeed, "png")
      // setTimeout(function () {
      //   window.location.reload(1);
      // }, 5000);

    }
  }

}

function circC(x, y, r, s) {
  let xc = random(width)
  let xy = random(height)
  let xs = random([50, 100, 20, 500])
  beginShape(POINTS)
  for (let a = 0; a < TAU; a += 0.01) {



    let xd = dist(width / 2, height / 2, xc, xy)


    let sdist = map(xd, 0, width / 2, 0, 1)

    let x1 = xc + sin(a) * xs;
    let y1 = xy + cos(a) * xs;
    strokeWeight(sdist)
    curveVertex(x1, y1)

  }
  endShape(CLOSE)

}


function el(x, y, w, i) {

  pg.beginShape()
  for (let a = 0; a < TAU; a += PI / 60) {
    let n = map(noise(a * 1, i * 1), 0, 1, 0, 7)
    let x1 = x + cos(a) * w / 1.5 + n
    let y1 = y + sin(a) * w / 1.5 + n
    pg.vertex(x1, y1)
  }
  pg.endShape(CLOSE)

}

function elN(x, y, w, i) {

  beginShape()
  for (let a = 0; a < TAU; a += PI / 60) {
    let n = map(noise(a * 1, i * 1), 0, 1, 0, 7)
    let x1 = x + cos(a) * w / 1.5 + n
    let y1 = y + sin(a) * w / 1.5 + n
    vertex(x1, y1)
  }
  endShape(CLOSE)

}

function starsBg(s) {
  for (let i = 0; i < 500; i++) {
    let x = random(width)
    let y = random(height)
    pg.noStroke()
    pg.beginShape()
    let rr = random(0.01, 2)
    for (let a = 0; a < TAU; a += PI / 10) {
      let vX = x + sin(a) * rr + random(-0.5, 0.5)
      let vY = y + cos(a) * rr + random(-0.5, 0.5)
      let d = dist(x, y, width / s, height / 2)
      pg.fill(random([0, 20, 340, 280]), random(10, 30), random(90, 100) / 1.0, random(0.01, 0.8) / 1.2)
      // if (d < width / 3) 
      pg.curveVertex(vX, vY)
    }
    pg.endShape()
  }
}

function starsS(s, r, n) {
  for (let i = 0; i < 1000 * n; i++) {
    let x = random(width)
    let y = random(height)
    noStroke()
    beginShape()
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = 'white';
    let rr = random(0.001, 1.0) * r
    for (let a = 0; a < TAU; a += PI / 10) {
      // let rr = noise(i/10) * r * 2
      let n = map(noise(i / 10), 0, 1, 0.01, 1)
      let vX = x + sin(a) * rr + random(-0.5, 0.5)
      let vY = y + cos(a) * rr + random(-0.5, 0.5)
      fill(random([0, 20, 340, 280]), random(7, 20), random(90, 100) / 1.0, random(0.01, 0.8) / 1.2)
      curveVertex(vX, vY)
    }
    endShape()
  }
}

function starsSN(s, r, n) {
  for (let i = 0; i < 500 * n; i++) {
    let x = noise(i / 50) * width //random(width)
    let y = noise(i / 70) * height //random(height)
    noStroke()
    beginShape()
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 7;
    drawingContext.shadowColor = 'white';
    let rr = random(0.001, 1.0) * r
    for (let a = 0; a < TAU; a += PI / 10) {
      // let rr = noise(i/10) * r * 2
      let n = map(noise(i / 10), 0, 1, 0.01, 1)
      let vX = x + sin(a) * rr + random(-0.5, 0.5)
      let vY = y + cos(a) * rr + random(-0.5, 0.5)
      fill(random([0, 20, 340, 280]), random(7, 20), random(90, 100) / 1.0, random(0.01, 0.8) / 1.8)
      curveVertex(vX, vY)
    }
    endShape()
  }
}

function starsGran(s, r, n) {
  for (let i = 0; i < 1500; i++) {
    let x = random(width)
    let y = random(height)
    granPg.noStroke()
    granPg.beginShape()
    let rr = random(0.01, 2)
    for (let a = 0; a < TAU; a += PI / 10) {
      let vX = x + sin(a) * rr + random(-0.5, 0.5)
      let vY = y + cos(a) * rr + random(-0.5, 0.5)
      let d = dist(x, y, width / s, height / 2)
      granPg.fill(random([0, 20, 340, 280]), random(0, 10), random(90, 100) / 1.0, random(0.01, 0.8) / 1.2)
      // if (d < width / 3) 
      granPg.curveVertex(vX, vY)
    }
    granPg.endShape()
  }
}

function starsGranSN(s, r, n) {
  for (let i = 0; i < 1500; i++) {
    let x = noise(i / 50) * width * 1.25 //random(width)
    let y = noise(i / 70) * height * 1.25 //random(height)
    granPg.noStroke()
    granPg.beginShape()
    let rr = random(0.01, 2)
    for (let a = 0; a < TAU; a += PI / 10) {
      let vX = x + sin(a) * rr + random(-0.5, 0.5)
      let vY = y + cos(a) * rr + random(-0.5, 0.5)
      let d = dist(x, y, width / s, height / 2)
      granPg.fill(random([0, 20, 340, 280]), random(0, 10), random(90, 100) / 1.0, random(0.01, 0.8) / 2.4)
      // if (d < width / 3) 
      granPg.curveVertex(vX, vY)
    }
    granPg.endShape()
  }
}

function placements() {


  if (yataStr == "hor") {
    /////////////////////////////////Yatay
    let hei = random([60, 100, 100, 50, 10, 200, 500])

    let space = 2

    let x1 = 100
    let x1L = 100
    let x2 = 300
    let x2L = 150
    let x3 = 550
    let x3L = 100


    let x1A = 900 + 100
    let x2A = 1100 + 100
    let x3A = 1400 + 100

    if (soloChooser == "Solo") {
      if (kalCh < 0.20) {
        x2 = 200
        x2L = 350
        x2A = 976
      } else {
        x2 = height / 2 - 100
        x2L = 200
        x2A = 1100 + 100
      }
    }

    let y1 = 5 //- hei / 10
    let y2 = 5 //- hei / 10
    let y3 = 5 //- hei / 10

    for (let y = x2; y < x2 + x2L; y += space) {
      let x = y1 + noise(y * 0.04, frameCount * 0.02) * hei
      let p = createVector(x, y)
      particles.push(p)
    }

    for (let y = x2; y < x2 + x2L; y += space) {
      let x = y1 + noise(y * 0.08, frameCount * 0.03) * hei
      let p = createVector(x, y)
      particles2.push(p)
    }

    for (let y = x2; y < x2 + x2L; y += space) {
      let x = y1 + noise(y * 0.038, frameCount * 0.08) * hei
      let p = createVector(x, y)
      particles3.push(p)
    }

    for (let y = x1; y < x1 + x1L; y += space) {
      let x = y2 + noise(y * 0.04, frameCount * 0.02) * hei
      let p = createVector(x, y)
      particles4.push(p)
    }

    for (let y = x1; y < x1 + x1L; y += space) {
      let x = y2 + noise(y * 0.08, frameCount * 0.03) * hei
      let p = createVector(x, y)
      particles5.push(p)
    }

    for (let y = x1; y < x1 + x1L; y += space) {
      let x = y2 + noise(y * 0.038, frameCount * 0.08) * hei
      let p = createVector(x, y)
      particles6.push(p)
    }

    for (let y = x3; y < x3 + x3L; y += space) {
      let x = y3 + noise(y * 0.04, frameCount * 0.02) * hei
      let p = createVector(x, y)
      particles7.push(p)
    }

    for (let y = x3; y < x3 + x3L; y += space) {
      let x = y3 + noise(y * 0.08, frameCount * 0.03) * hei
      let p = createVector(x, y)
      particles8.push(p)
    }

    for (let y = x3; y < x3 + x3L; y += space) {
      let x = y3 + noise(y * 0.038, frameCount * 0.08) * hei
      let p = createVector(x, y)
      particles9.push(p)
    }




  }
}

function granulate(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
    const grainAmount = random(-amount, amount);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
  }
  updatePixels();
}

function granulateGran(amount) {
  granPg.loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
    const grainAmount = random(-amount, amount);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
  }
  granPg.updatePixels();
}

function keyPressed() {
  if (key == 's') {
    saveCanvas("vcaSpace " + compGroup + " " + gate + " " + shapeC + " " + rSeed, 'png');
  }
}


class Random {
  constructor() {
    this.useA = false;
    let sfc32 = function (uint128Hex) {
      let a = parseInt(uint128Hex.substr(0, 8), 16);
      let b = parseInt(uint128Hex.substr(8, 8), 16);
      let c = parseInt(uint128Hex.substr(16, 8), 16);
      let d = parseInt(uint128Hex.substr(24, 8), 16);
      return function () {
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        let t = (((a + b) | 0) + d) | 0;
        d = (d + 1) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
      };
    };
    // seed prngA with first half of tokenData.hash
    this.prngA = new sfc32(tokenData.hash.substr(2, 32));
    // seed prngB with second half of tokenData.hash
    this.prngB = new sfc32(tokenData.hash.substr(34, 32));
    for (let i = 0; i < 1e6; i += 2) {
      this.prngA();
      this.prngB();
    }
  }
  // random number between 0 (inclusive) and 1 (exclusive)
  random_dec() {
    this.useA = !this.useA;
    return this.useA ? this.prngA() : this.prngB();
  }
}

class Star {
  constructor(r) {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.co = r;

  }

  update() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {

    // if (this.co > .66) {
    fill(col3, 0, random(90, 100), 1);
    // } else if (this.co > .33) {
    //   fill(col2, 0, random(50, 60), 1);
    // } else {
    //   fill(col1, 0, random(30, 50), 1);
    // }

    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 5, 0);
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = 'white';
    ellipse(sx, sy, r, r);

    // beginShape()
    // // drawingContext.shadowOffsetX = 0;
    // // drawingContext.shadowOffsetY = 0;
    // // drawingContext.shadowBlur = 7;
    // // drawingContext.shadowColor = 'white';
    // let rr = random(0.001, 1.0) * r
    // for (let a = 0; a < TAU; a += PI / 10) {
    //   let vX = sx + sin(a) * r + random(-0.5, 0.5)
    //   let vY = sy + cos(a) * r + random(-0.5, 0.5)
    //   fill(random([0, 20, 340, 280]), random(7, 20), random(90, 100) / 1.0, random(0.01, 0.8) / 1.2)
    //   curveVertex(vX, vY)
    // }
    // endShape()

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;


    // if (this.co > .66) {
    stroke(col3, 0, random(90, 100), 1);
    // } else if (this.co > .33) {
    //   stroke(col2, 0, random(50, 60), 1);
    // } else {
    //   stroke(col1, 0, random(30, 50), 1);
    // }
    strokeWeight(0.5)
    line(px, py, sx, sy);

  }
}
