// --------------------------------------------------------
// SANT JORDI 2023
// --------------------------------------------------------
// Create your own rose/flower using a simple colored menu
// --------------------------------------------------------
// Carles Hernandez-Ferrer / Abril 2023
// --------------------------------------------------------

// Global variables
var color_array = [ 
  "#f58231", "#ffe119", "#bfef45", "#3cb44b", 
  "#42d4f4", "#4363d8", "#911eb4", "#f032e6" 
]
var buttons = [ ]
var show_flower = false
var bgcolor = ( 100, 100, 100 )
var setting = [ false, false, false, false, false ]

// Generic wrapper class for buttons (menu)
class Btn {
  constructor( config ) {
    this.x = config.x
    this.y = config.y
    this.sz = config.sz
    this.drw = config.drawing_fun
    this.clk = config.click_fun
    this.clr = config.clr
    this.n = config.n
    this.selected = false
  }
  click( over ) {
    if( over ) {
      this.selected = !this.selected
      setting[ this.n - 4 ] = !setting[ this. n - 4 ]
      if( this.clk !== null ) {
        this.clk()
      }
    }
  }
  draw() {
    this.drw( this.x, this.y, this.clr, this.n, this.selected )
  }
  isMouseOn() {
    return(
      mouseX > this.x && mouseX < this.x + this.sz && mouseY > this.y && mouseY < this.y + this.sz
    )
  }
}

// Function to draw n-sided regular polygons (from p5js doc)
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Creation of the configuration menu
for( var ii = 4; ii < 9; ii++ ) {
  var config = {
    x: 25 + 75 * ( ii - 4 ), y: 120, sz: 50, clr: color_array[ ii - 4 ], n: ii,
    drawing_fun: ( x, y, clr, n, selected ) => {
      let sz = 50
      let inc = 10
      let bordc = clr
      let fillc = "#FFFFFF" 
      if( selected ) {
        fillc = clr
        bordc = "#FFFFFF" 
      }
      fill( fillc )
      stroke( bordc )
      rect( x, y, sz, sz, 5, 5 )
      fill( bordc )
      polygon(x + sz/2, y + sz/2, sz / 2 - inc, n )
    },
    click_fun: null
  }
  buttons.push( new Btn( config ) )
}

// Creation of the "play button" for the menu
const play_btn = {
  x: 175,
  y: 250,
  sz: 50,
  drawing_fun: ( x, y, clr = "#DD5555", selected = false  ) => {
    let sz = 50
    let inc = 10
    let bordc = clr
    let fillc = "#FFFFFF" 
    fill( fillc )
    stroke( bordc )
    rect( x, y, sz, sz, 5, 5 )
    fill( bordc )
    triangle( x + inc, y + sz / 2, x + sz - inc, y + inc, x + sz - inc, y + sz - inc )
  },
  click_fun: () => { show_flower = true; }
}

buttons.push( new Btn( play_btn ) )

// Load the cool font from Google Fonts
function preload() {
  // https://fonts.google.com/specimen/Zeyada?category=Serif,Handwriting
  text_font = loadFont('assets/Zeyada-Regular.ttf');
}

function setup() {
  createCanvas( 400, 600 )
  frameRate( 60 )
}

function draw() {
  background( bgcolor )
  if( show_flower ) {
    flower()
    ground()
  } else {
    // Show the menu
    fill( "#FFFFFF" )
    noStroke()
    textFont(text_font)
    textSize( 32 )
    text( 'Tria la teva configuració', 55, 100 )
    text( 'I prem el "play"!', 115, 235 )
    buttons.forEach( (x) => { x.draw() } )
  }
}

function mouseClicked() {
  if( !show_flower ) {
    buttons.forEach( ( x ) => x.click( x.isMouseOn() ) )
  }
}

function touchStarted() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if( !show_flower ) {
      buttons.forEach( ( x ) => x.click( x.isMouseOn() ) )
    }
  }
}

// Simple ground
function ground() {
  noStroke()
  fill( "#AA9692F0" )
  rect( 0, 530, 600, 530 )
}




function flower() {
  // flor segun la configuración
  var petals = 5
  var internals = true
  var clr_flw = "#BBAAFFDD"
  var clr_trc = "#994444F0"
  
  
  if( setting[ 0 ] || setting[ 1 ] ) {
    clr_flw = "#FDAC53DD"
  }
  if( setting[ 0 ] ) {
    petals = 6
  }
  if( setting[ 1 ] ) {
    clr_trc = "#33AA11F0"
  }
  if( setting[ 2 ] ) {
    internals = false
    petals = 7
  }
  if( setting[ 2 ] && setting[ 4 ] ) {
    internals = true
    petals = 8
  }
  if( setting[ 1 ] && setting[ 3 ] ) {
    clr_flw = "#D2386CDD"
  }
  if( setting[ 3 ] && setting[ 4 ] ) {
    clr_flw = "#FF0000DD"
    clr_trc = "#33AA11F0"
    petals = 10
    internals = false
  }
  
  
  // Stem
  for( var ii = 0; ii < petals; ii++ ) {
    stroke( clr_trc )
    strokeWeight( 6 )
    if( frameCount <= 600 ) {
      line( 200, 580, 200, 430 + frameCount / 10);
    } else if( frameCount > 600 ) {
      line( 200, 580, 200, 490 )
    }
    noStroke()
  }
  
  
  push()
  // External petals
  fill( clr_flw )
  translate( 200, 430 )
  noStroke()

  for(var jj = 0; jj < petals; jj++) {
    if( frameCount <= 600 ) {
      ellipse( 0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20 )
    } else if( frameCount > 600 ) {
      ellipse( 0, 40, 25, 50 )
    }
    rotate( 2 * PI / petals )
  }
  
  // Internal petals (always white)
  if( internals ) {
    fill( "#FFFFFFAA")
    noStroke()
    for( var kk = 0; kk < petals; kk++ ) {
      if( frameCount <= 600 ) {
        ellipse( 0, 10 + frameCount / 40, 10 + frameCount / 80, 20 + frameCount / 40 )
      } else if( frameCount > 600 ) {
        ellipse( 0, 25, 17.5, 35 )
      }
      rotate( 2 * PI / petals )
    }
  }
  pop()
  
  // Greetings
  if( frameCount > 600 ) {
    fill( "#FFFFFF" )
    noStroke()
    textSize( 41 )
    text( 'Feliç Sant Jordi!', 55, 100 )
    textSize( 23 )
    text( 'Barcelona, Abril 2023', 200, 190 )
  }
}

