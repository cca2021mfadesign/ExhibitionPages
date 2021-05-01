// let names = ["Keyu Mao", "Sarah Bonnickson", "Abigayle Cosinuke", "Tingyu Zhao", "Kaiwen Liu", "Fuming Zhou", "Yashan Deng", "Qianshi Zheng", "Jason Malik", "Mengwen Yu", "Eryn Bathke", "Tiaoli Li", "Haojie Chai", "Xiaohan Hannah Liao", "Hancai Wang", "Wen Liu", "Ashlyn Jackson", "Chloe Looker", "Troy Taylor", 
// "Tin Dinh", "Shang-Te Chen", "Meg Quarton", "Dom Granato", "Danielle Kim", "Rebecca Gardea"];

let data;
let cnv;
let circlesDiv = [];
let namesdiv = [];
let namea;
let circles;
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(40, windowWidth - 30);
    this.y = random(40, windowHeight - 30);
    this.r = 15;
    this.xSpeed = random(-1.5, 2);
    this.ySpeed = random(-1.5, 1.5);
  }

  // creation of a particle.
  createParticle(name, colors) {
    noStroke();
    // let c= color(colors);
  fill(colors);
    //text(name, this.x, this.y, 200, 30);

    //circle(this.x, this.y, this.r);
  }

  // setting the particle in motion.
  moveParticle() {
    if (this.x < windowWidth / 10 || this.x > windowWidth)
      this.xSpeed *= -1;
    if (this.y < windowHeight / 10 || this.y > windowHeight)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 200) {
        stroke('rgba(255,255,255,0.5)');
        strokeWeight(0.5);
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function preload() {
  myFont = loadFont('TINY5x3-140.otf');
  data = loadTable('name-colors.csv', 'csv', 'header')
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < data.getRowCount(); i++) {
    particles.push(new Particle());
      namea = createElement('a');
    circles=createElement('div');

    namesdiv.push(namea);
    circlesDiv.push(circles);
   
    //namesdiv.push(namea);
  }
  for (let n = 0; n < namesdiv.length; n++) {
    namesdiv[n].id(str(data.getColumn('names')[n]));
    circlesDiv[n].id(concat(str(data.getColumn('names')[n]), str(n)));
 document.getElementById(str(data.getColumn('names')[n])).innerText = str(data.getColumn('names')[n]);
 document.getElementById(str(data.getColumn('names')[n])).href= data.getColumn('websites')[n];

  }
 
  console.log("namesdiv#" + namesdiv.length);
  rectMode(CENTER);
  textFont(myFont);
  textSize(20);
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);
  print(data.getColumn('names'));
  print(data.getColumn('colors')[0]);

  //console.log(names.length);
  let pdiv = document.getElementById('page_middle');
  cnv.parent(pdiv);
}

function draw() {
  background('#0f0f0f');
//  background(100);
  for (let i = 0; i < particles.length; i++) {
    let c = color(str(data.getColumn('colors')[i]));
    // fill(c);
    particles[i].createParticle(data.getColumn('names')[i], c);

    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  
   namesdiv[i].position(particles[i].x,particles[i].y-20);
   namesdiv[i].style('color','#fff');
    namesdiv[i].mouseOver(changeColors);
    circlesDiv[i].addClass('circles');
  circlesDiv[i].position(particles[i].x-10,particles[i].y)
  circlesDiv[i].style('background-color',c);
 
  }
 
}
function changeColors(){
  for(let i=0; i<namesdiv[i].length; i++){
  let c = color(str(data.getColumn('colors')[i]));
    namesdiv[i].style('color',c)
  }
}
function windowResized() {
  cnv = resizeCanvas(windowWidth, windowHeight);
}