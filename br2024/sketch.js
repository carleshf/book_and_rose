const bkg_col  = "#334499"
const cry_col  = "#DFDFDF"
const trnk_col = "#33AA77"
const get_petal_color = ( n ) => {
  let from = color( 139, 0, 0 )
  let to = color(255, 0, 0 )
  switch( n ) {
      case 0:
        return from
      case 1:
        return lerpColor( from, to, 0.33 )
      case 2:
        return lerpColor( from, to, 0.66 )
      default:
        return to
  }
}
var vase
var rose
var grad = 0
var gdir = true
var gfld = false
var font

function preload() {
  font = loadFont( 'fonts/Satisfy-Regular.ttf' )
}


class CrystalVase {
  constructor( x = 100, y = 100, w1 = 200, h1 = 400, h2 = 100, h3 = 10, w2 = 6, h4 = 100, h5 = 20 ) {
    this._x = x   // upper h corner
    this._y = y   // upper b corner
    this._w1 = w1 // vase height
    this._h1 = h1 // sqare vase height
    this._h2 = h2 // round vase height
    this._h3 = h3 // sqare bottom vase height
    this._w2 = w2 // reflex width
    this._h4 = h4 // large reflex height
    this._h5 = h5 // short reflex height
  }
  
  draw() {
    rectMode( CORNER )
    strokeWeight( 4 )
    stroke( cry_col )
    fill( bkg_col )

    // Large crystal
    beginShape()
    vertex( this._x, this._y + this._h1 )
    vertex( this._x + this._w1, this._y + this._h1 )
    vertex( this._x + this._w1, this._y + this._h2 )
    bezierVertex( 
      this._x + this._w1,     this._y + this._h2, 
      this._x + this._w1,     this._y, 
      this._x + this._w1 / 2, this._y 
    )
    bezierVertex( 
      this._x + this._w1 / 2, this._y,
      this._x,               this._y, 
      this._x,               this._y + this._h2
    )
    vertex( this._x, this._y + this._h2 )  
    vertex( this._x, this._y + this._h1 )
    endShape()
    
    // Bottom of crystal
    fill( cry_col )
    rect( this._x, this._y + this._h1, this._w1, this._h3 )
    
    // Reflexes
    noStroke()
    fill( cry_col )
    circle( this._x + this._w2 * 1.5, this._h2 * 2.5, this._w2 )
    rect(   this._x + this._w2,       this._h2 * 2.5, this._w2, this._h4 )
    circle( this._x + this._w2 * 1.5, this._h2 * 2.5 + this._h4, this._w2 )
    
    circle( this._x + this._w2 * 1.5, this._h2 * 2.7 + this._h4, this._w2 )
    rect(   this._x + this._w2,       this._h2 * 2.7 + this._h4, this._w2, this._h5 )
    circle( this._x + this._w2 * 1.5, this._h2 * 2.7 + this._h4 + this._h5, this._w2 )
  }
}

class Petal {
  constructor( x, y, r, c, w, h, f ) {
    this._x = x
    this._y = y
    this._r = r
    this._c = c
    this._w = w
    this._h = h
    this._f = f
  }
  
  draw() {
    rectMode( CENTER )
    angleMode( DEGREES )
    noStroke( 4 )
    fill( this._c )
    push()
    translate( this._x, this._y )
    rotate( this._r )
    if( this._f == 0 ) {
      rect( 0, 0, this._w, this._h, 20, 5, 20, 5 )
    } else if( this._f == 1 ) {
      rect( 0, 0, this._w, this._h, 5, 20, 5, 20 )
    } else {
      rect( 0, 0, this._w, this._h, 20, 20, 20, 20 )
    }
    pop()
  }
}

class Rose {
  constructor( x = 200, y = 100, w1 = 5, h1 = 200, w2 = 250, h2 = 100, w3 = 10 ) {
    this._x = x   // upper h corner
    this._y = y   // upper v corner
    this._w1 = w1 // width of the trunck
    this._h1 = h1 // height of the trunk
    this._w2 = w2 // weidth of the petal
    this._h2 = h2 // height of the petal
    this._w3 = w3
    this._petals = []
    this._create_petals()
  }
  
  _create_petals() {
    // bright red
    this._petals.push(
      new Petal( 197, 220, 90, get_petal_color( 3 ), 60, 35, 2 )
    )
    // light red
    this._petals.push(
      new Petal( 175, 230, 80, get_petal_color( 2 ), 60, 35, 0 )
    )
    this._petals.push(
      new Petal( 220, 230, -80, get_petal_color( 2 ), 60, 35, 1 )
    )
    
    // dark red
    this._petals.push(
      new Petal( 170, 240, 55, get_petal_color( 1 ), 60, 35, 0 )
    )
    this._petals.push(
      new Petal( 225, 240, -55, get_petal_color( 1 ), 60, 35, 1 )
    )
    
    // darkest red
    this._petals.push(
      new Petal( 140, 470, 25, get_petal_color( 0 ), 60, 35, 0 )
    )
    this._petals.push(
      new Petal( 230, 254, -25, get_petal_color( 0 ), 60, 35, 1 )
    )
  }
  
  draw() {
    rectMode( CENTER )
    push()
    translate( this._x, this._y )

    // trunk
    strokeWeight( 4 )
    fill( trnk_col )
    rect( -this._w1 / 2, this._h1 + this._h2 / 2, this._w1, this._h1 )
    
    pop()
    
    // spikes right
    noStroke()
    fill( trnk_col )
    beginShape()
    vertex( 200, 290 )
    bezierVertex( 220, 300, 200, 290, 200, 310 )
    vertex( 200, 310 )
    endShape()
    
    beginShape()
    vertex( 200, 390 )
    bezierVertex( 220, 400, 200, 390, 200, 410 )
    vertex( 200, 410 )
    endShape()
    
    // spikes left
    beginShape()
    vertex( 196, 340 )
    bezierVertex( 176, 350, 196, 340, 196, 360 )
    vertex( 196, 360 )
    endShape()
    
    // petals
    this._petals.forEach( (x) => x.draw() )
    
    // hallo
    noFill()
    stroke('lightpink')
    strokeWeight( 2 )
    
    if( gdir ) {
      grad += 0.1
    } else {
      grad -= 0.1
    }
    
    if( grad > 12 & !gfld ) {
      gdir = false
      gfld = true
    }
    
    if( grad < 1 & gfld ) {
      gdir = true
      gfld = false
    }
    
    drawingContext.shadowBlur = grad
    drawingContext.shadowColor = 'lightgray'
    ellipse( 200, 230, 150, 150)
    
    // reset
    drawingContext.shadowBlur = 0
    drawingContext.shadowColor = null
  }
}

const _draw_text = () => {
  rectMode( CENTER )
  noStroke()
  fill( bkg_col )
  rect( 200, 550, 500, 200 )
  textAlign( CENTER, CENTER )
  fill( "lightpink" )
  textFont( font )
  textSize( 29 )
  noStroke()
  text( "Perquè el teu somriure és", 200, 550 )
  text( "tan bell com el florir d'una rosa", 200, 600 )
}
  
  
function setup() {
  createCanvas( 400, 700 )
  background( bkg_col )
  
  let from = color( 139, 0, 0 )
  let to = color(255, 0, 0 )
  ptrl_col = [ from , lerpColor( from, to, 0.33 ), lerpColor( from, to, 0.66 ), to ]
  
  vase = new CrystalVase()
  rose = new Rose()
  
}

function draw() {
  _draw_text()
  vase.draw()
  rose.draw()
}
