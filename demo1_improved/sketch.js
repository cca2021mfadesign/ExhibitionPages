// let names = ["Keyu Mao", "Sarah Bonnickson", "Abigayle Cosinuke", "Tingyu Zhao", "Kaiwen Liu", "Fuming Zhou", "Yashan Deng", "Qianshi Zheng", "Jason Malik", "Mengwen Yu", "Eryn Bathke", "Tiaoli Li", "Haojie Chai", "Xiaohan Hannah Liao", "Hancai Wang", "Wen Liu", "Ashlyn Jackson", "Chloe Looker", "Troy Taylor", 
// "Tin Dinh", "Shang-Te Chen", "Meg Quarton", "Dom Granato", "Danielle Kim", "Rebecca Gardea"];


let data;
let cnv;
let circlesDiv = [];
let namesdiv = [];
let namea;
let circles;
let changesColors = false;
let hoverNames;
let idstring;
let particleIsStop = false;
let cnvW,cn
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(40, width - 30);
    this.y = random(40, height - 30);
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
    if (this.x < width / 10 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < height / 10 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
    stopParticle() {
    this.x = mouseX;
    this.y = mouseY;
    this.xSpeed += 0;
    this.ySpeed += 0;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 200) {
        stroke('rgba(0,0,0,0.5)');
        strokeWeight(1);
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
  //cnv = createCanvas(width, height);
  let bkcontainer = document.getElementById('background-container')

  cnv = createCanvas(bkcontainer.offsetWidth, bkcontainer.offsetHeight);
  cnv.parent(bkcontainer);
 // cnv.style("z-index: 10");
  cnv.position(0,0);
  for (let i = 0; i < data.getRowCount(); i++) {
    particles.push(new Particle());
      namea = createElement('a');
    circles=createElement('div');
        namea.style('color', '#000');
    namea.style('font-size', '30px');
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
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);
  print(data.getColumn('names'));
  print(data.getColumn('colors')[0]);

  //console.log(names.length);
 // let pdiv = document.getElementById('page_middle');
  //cnv.parent(pdiv);
}

function draw() {
 // background('#0f0f0f');
 //background('rgba(255,255,255, 0.001)');
 clear();

//  background(100);
  //  background(100);
  for (let i = 0; i < particles.length; i++) {

    // fill(c);
    let c = color(str(data.getColumn('colors')[i]));
//     particles[i].createParticle(data.getColumn('names')[i], c);

//     particles[i].moveParticle();
//     particles[i].joinParticles(particles.slice(i));


//     //  namesdiv[i].style('color','#fff');

//     circlesDiv[i].addClass('circles');
//     circlesDiv[i].position(particles[i].x - 10, particles[i].y)
//     circlesDiv[i].style('background-color', c);
//     namesdiv[i].position(particles[i].x, particles[i].y - 20);

       document.getElementById(str(data.getColumn('names')[i])).onmouseover = function() {
      document.getElementById(str(data.getColumn('names')[i])).style.color = c;
      particles[i].stopParticle();
    };
    document.getElementById(str(data.getColumn('names')[i])).onmouseout = function() {
    document.getElementById(str(data.getColumn('names')[i])).style.color = '#000';
    particles[i].moveParticle();
    };
    particles[i].createParticle(data.getColumn('names')[i], c);

    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));


    //  namesdiv[i].style('color','#fff');

    circlesDiv[i].addClass('circles');
    circlesDiv[i].position(particles[i].x - 10, particles[i].y)
    circlesDiv[i].style('background-color', c);
    namesdiv[i].position(particles[i].x, particles[i].y - 20);
  }


 
}
function changeColors(){
  for(let i=0; i<namesdiv[i].length; i++){
  let c = color(str(data.getColumn('colors')[i]));
    namesdiv[i].style('color',c)
  }
}
function windowResized() {
  cnv = resizeCanvas(width, height);
}