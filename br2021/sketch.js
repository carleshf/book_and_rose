class Cell {
  constructor(x, y, w, t = '🌹') {
    this._x = x
    this._y = y
    this._w = w
    this._t = t
    this._alpha = 255
    this._fadeout = false
    this._fix = false
  }
  
  draw() {
    textSize(0.95 * this._w)
    textAlign(CENTER)
    textFont("Georgia")
    text(this._t, this._x + this._w / 2, this._y + this._w - 0.07 * this._w)
    color(255, 255, 255, 0)
    if(!this._fix) {
      if(this._fadeout) {
        this._alpha -= 20
        if(this._alpha < 0) {
          this._alpha = 0
        }
      } else if(this._alpha < 255) {
        this._alpha += 10
      } else {
        this._alpha = 255
      }
    } else {
      this._alpha = 0
    }
    rectMode(CORNER)
    stroke("#F0FFF0")
    strokeWeight(3)
    fill(143, 188, 143 , this._alpha)
    square(this._x, this._y, this._w)
  }
  
  isOver(mx, my) {
    if(mx >= this._x & mx < this._x + this._w & my >= this._y & my < this._y + this._w) {
      this._fadeout = true
    } else {
      this._fadeout = false
    }
  }
  
  isClicked(mx, my) {
    if(mx >= this._x & mx < this._x + this._w & my >= this._y & my < this._y + this._w & this._t == '🌹') {
      this._fix = true
      return true
    }
    return false
  }
}

var newFont;

function preload() {
  newFont = loadFont("assets/Parisienne-Regular.ttf")
}

var maxR = 5
var cnt = 0
var grid = []
var upOffset = 50
function setup() {
  createCanvas(800, 600)
  for(var ii = 0; ii < 16; ii++) {
    var line = []
    for(var jj = 0; jj < 10; jj++ ) {
      x = random()
      if( x < 0.05 & maxR > 0 ) {
        x = "🌹"
        maxR -= 1
      } else {
        x = ["🌻", "🌷", "🌺"][round(random(0, 2))]
      }
      line.push(new Cell(50 * ii, 50 * jj + upOffset, 50, x))
    }
    grid.push(line)
  }
}

function draw() {
  background("#F0FFF0")
  grid.map( (line) => {
    line.map((tile) => tile.draw())
  })
  noStroke()
  textAlign(LEFT)
  textFont(newFont)
  textSize(35)
  text('Pots trobar les 5 roses?', 20, 35)
  textSize(23)
  text('Feliç Sant Jordi * Barcelona 2021', 455, 580)
}

function mouseMoved() {
  grid.map( (line) => {
    line.map((tile) => tile.isOver(mouseX, mouseY))
  })
}

function mouseClicked() {
  grid.map( (line) => {
    line.map((tile) => {
      if(tile.isClicked(mouseX, mouseY)) {
        cnt += 1
      }
    })
  })
}