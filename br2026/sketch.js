const layout = [
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'O', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', '3', ' ', 'R', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'B', ' ', '1', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'i', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'X', 'X', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', '5', ' ', 'W', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'N', ' ', '6', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'G', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
]

const createText = (text, fontsize) => {
  var paragraph = createP(text)
  paragraph.style('font-size', fontsize + 'px')
  paragraph.style('margin', '0')
  paragraph.style('padding', '0')
  paragraph.style('line-height', fontsize + 'px')
  paragraph.style('pointer-events', 'none')
  return paragraph
}

class Player {
  constructor(x, y, fS) {
    this.x = x
    this.y = y
    this.fS = fS
    this.emoji = createText('👧', fS)
  }

  setPos(pos) {
    this.x = pos.x
    this.y = pos.y
  }

  getPos() {
    return { x: this.x, y: this.y }
  }

  draw(padding) {
    this.emoji.position(this.x * padding, this.y * padding)
  }

  delete() {
    this.emoji.remove()
  }
}

class Wall {
  constructor(letter, fS) {
    letter = 'X' // treat all wall types the same visually
    this.emoji = createText({'X': '⬛', 'Y': '🟫', 'Z': '⬜'}[letter], fS)
  }

  draw(x, y) {
    this.emoji.position(x, y)
  }

  delete() {
    this.emoji.remove()
  }
}

class Pad {
  constructor(letter, fS) {
    const emojiMap = {
      'R': '🟥',
      'G': '🟪',
      'B': '🟦',
      'O': '🟧',
      'N': '🟫',
      'W': '⬜'
    }
    this.emoji = createText(emojiMap[letter], fS)
    this.color = letter
    this.active = true
  }

  draw(x, y) {
    if (this.active) {
      this.emoji.position(x, y)
    }
  }

  deactivate() {
    this.active = false
    this.emoji.remove()
  }

  delete() {
    this.emoji.remove()
  }
}

class Ball {
  constructor(letter, fS) {
    const emojiMap = {
      '1': '🔴',
      '2': '🟣',
      '3': '🔵',
      '4': '🟠',
      '5': '🟤',
      '6': '⚪'
    }
    this.emoji = createText(emojiMap[letter], fS)
    this.color = letter
    this.matched = false
  }

  draw(x, y) {
    this.emoji.position(x, y)
  }

  matchWithPad() {
    this.matched = true
    this.emoji.html('🟢')
  }

  delete() {
    this.emoji.remove()
  }
}

class Rose {
  constructor(fS) {
    this.emoji = null
    this.active = false
    this.fS = fS
  }

  draw(x, y) {
    if (this.active) {
      if (this.emoji === null) {
        this.emoji = createText('🌹', this.fS)
      }
      this.emoji.position(x, y)
    }
  }

  show() {
    this.active = true
  }

  delete() {
    this.emoji.remove()
  }
}

class Empty {
  draw(x, y) { }

  delete() { }
}


class TouchControls {
  constructor() {
    this.activeDirection = null
    this.moveInterval = null
    this.moveTimeout = null
    this.initialDelay = 450  // ms before repeat kicks in
    this.moveDelay = 280     // ms between repeated moves
  }

  startMoving(direction) {
    this.stopMoving() // clear any lingering timers first
    this.activeDirection = direction
    this.move() // one immediate step
    // Only start repeating after a deliberate hold
    this.moveTimeout = setTimeout(() => {
      this.moveInterval = setInterval(() => this.move(), this.moveDelay)
    }, this.initialDelay)
  }

  stopMoving() {
    this.activeDirection = null
    if (this.moveTimeout) {
      clearTimeout(this.moveTimeout)
      this.moveTimeout = null
    }
    if (this.moveInterval) {
      clearInterval(this.moveInterval)
      this.moveInterval = null
    }
  }

  move() {
    if (worldMap && !worldMap.gameComplete) {
      worldMap.movePlayer(this.activeDirection)
    }
  }
}

class LevelMap {
  constructor(array, fontsize) {
    this.mapData = createMap(array, fontsize)
    this.map = this.mapData.layout
    this.player = this.mapData.player
    this.balls = this.mapData.balls
    this.pads = this.mapData.pads
    this.rose = this.mapData.rose
    this.rosePosition = this.mapData.rosePosition
    this.gameComplete = false
    this.activeKey = null
    this.keyInterval = null
    this.active = true
  }

  delete() {
    if (this.active) {
      for(var jj = 0; jj < this.map.length; jj++) {
        for(var ii = 0; ii < this.map[0].length; ii++) {
          this.map[jj][ii].delete()
        }
      }
      this.player.delete()
      this.rose.delete()
      this.active = false
    }
  }

  draw(padding) {
    if (this.active) {
      for(var jj = 0; jj < this.map.length; jj++) {
        for(var ii = 0; ii < this.map[0].length; ii++) {
          this.map[jj][ii].draw(jj * padding, ii * padding)
        }
      }
      this.player.draw(padding)
      this.rose.draw(this.rosePosition.x * padding, this.rosePosition.y * padding)

      // Check if all balls are matched
      if (!this.gameComplete && this.balls.every(b => b.ball.matched)) {
        this.rose.show()
      }

      // Check if player reached the rose
      if (this.rose.active &&
          this.player.x === this.rosePosition.x &&
          this.player.y === this.rosePosition.y) {
        this.gameComplete = true
      }
    }
  }

  movePlayer(direction) {
    if (!this.active) return false
    if (this.gameComplete) return false

    var nP = this.player.getPos()
    var d = direction

    switch(direction) {
      case 'U':
        nP.y -= 1
        break
      case 'D':
        nP.y += 1
        break
      case 'L':
        nP.x -= 1
        break
      case 'R':
        nP.x += 1
        break
      default:
        return false
    }

    if (isAccessible(nP, d, this.map, this)) {
      this.player.setPos(nP)
      return true
    }
    return false
  }

  keyPressed(keyCode) {
    if (!this.active) return
    if (this.gameComplete) return

    let direction = null
    switch(keyCode) {
      case UP_ARROW:
        direction = 'U'
        break
      case DOWN_ARROW:
        direction = 'D'
        break
      case LEFT_ARROW:
        direction = 'L'
        break
      case RIGHT_ARROW:
        direction = 'R'
        break
      default:
        return
    }

    if (this.activeKey !== direction) {
      this.activeKey = direction
      this.movePlayer(direction)
      if (this.keyInterval) clearInterval(this.keyInterval)
      this.keyInterval = setInterval(() => {
        if (this.activeKey) this.movePlayer(this.activeKey)
      }, 150)
    }
  }

  keyReleased(keyCode) {
    if (!this.active) return
    if (this.gameComplete) return

    let releasedDirection = null
    switch(keyCode) {
      case UP_ARROW:
        releasedDirection = 'U'
        break
      case DOWN_ARROW:
        releasedDirection = 'D'
        break
      case LEFT_ARROW:
        releasedDirection = 'L'
        break
      case RIGHT_ARROW:
        releasedDirection = 'R'
        break
      default:
        return
    }

    if (this.activeKey === releasedDirection) {
      this.activeKey = null
      if (this.keyInterval) {
        clearInterval(this.keyInterval)
        this.keyInterval = null
      }
    }
  }

  isGameComplete() {
    return this.gameComplete
  }
}

const createMap = (array, fontsize) => {
  var iMap = []
  var player = null
  var balls = []
  var pads = []
  var rose = null

  for(var jj = 0; jj < array[0].length; jj++) {
    iMap.push([])
    for(var ii = 0; ii < array.length; ii++) {
      if (['X', 'Y', 'Z'].indexOf(array[ii][jj]) != -1) {
        iMap[jj].push(new Wall('X', fontsize))
      } else if (['R', 'G', 'B', 'O', 'N', 'W'].indexOf(array[ii][jj]) != -1) {
        const pad = new Pad(array[ii][jj], fontsize)
        iMap[jj].push(pad)
        pads.push({x: jj, y: ii, pad: pad})
      } else if (['1', '2', '3', '4', '5', '6'].indexOf(array[ii][jj]) != -1) {
        const ball = new Ball(array[ii][jj], fontsize)
        iMap[jj].push(ball)
        balls.push({x: jj, y: ii, ball: ball})
      } else if (array[ii][jj] == 'i') {
        player = new Player(jj, ii, fontsize)
        iMap[jj].push(new Empty())
      } else {
        iMap[jj].push(new Empty())
      }
    }
  }

  const centerX = Math.floor(array[0].length / 2)
  const centerY = Math.floor(array.length / 2)
  rose = new Rose(fontsize)

  return {
    layout: iMap,
    player: player,
    balls: balls,
    pads: pads,
    rose: rose,
    rosePosition: {x: centerX, y: centerY}
  }
}

const isAccessible = (pos, dir, map, gameState) => {
  if (pos.x < 0 || pos.x >= map.length || pos.y < 0 || pos.y >= map[0].length) {
    return false
  }

  if (map[pos.x][pos.y] instanceof Wall) {
    return false
  }

  if (map[pos.x][pos.y] instanceof Ball && !map[pos.x][pos.y].matched) {
    const inc = { 'U': { x: 0, y: -1 }, 'D': { x: 0, y: 1 }, 'L': { x: -1, y: 0 }, 'R': { x: 1, y: 0 }}[dir]
    const onePos = { x: pos.x + inc.x, y: pos.y + inc.y }

    if (onePos.x < 0 || onePos.x >= map.length || onePos.y < 0 || onePos.y >= map[0].length) {
      return false
    }

    if (map[onePos.x][onePos.y] instanceof Wall || map[onePos.x][onePos.y] instanceof Ball) {
      return false
    } else {
      // Move the ball
      map[onePos.x][onePos.y] = map[pos.x][pos.y]
      map[pos.x][pos.y] = new Empty()

      // Check if ball is on a pad of matching color
      if (map[onePos.x][onePos.y] instanceof Ball) {
        const ball = map[onePos.x][onePos.y]
        const padAtPosition = gameState.pads.find(p => p.x === onePos.x && p.y === onePos.y)

        if (padAtPosition && padAtPosition.pad.color === getBallColorCode(ball.color) && padAtPosition.pad.active) {
          ball.matchWithPad()
          padAtPosition.pad.deactivate()
        }
      }
    }
  }

  return true
}

const getBallColorCode = (ballColor) => {
  const map = {'1': 'R', '2': 'G', '3': 'B', '4': 'O', '5': 'N', '6': 'W'}
  return map[ballColor]
}

// ── Responsive sizing ────────────────────────────────────────────────────────

const GRID_SIZE = 25      // map is 25×25 cells
const CONTROLS_H = 100    // pixels reserved below the canvas for the single-row d-pad

function calculateLayout() {
  const dp = max(floor(min(windowWidth, 700) / GRID_SIZE), 5)
  const fs = max(dp - 3, 8)
  const w = dp * GRID_SIZE
  const h = max(windowHeight - CONTROLS_H, w) // portrait: taller than wide
  return { w, h, fs, dp }
}

// ── Touch / d-pad controls ───────────────────────────────────────────────────

const createTouchControls = () => {
  const btnSize = min(65, floor(windowWidth / 5))
  const btnPx = btnSize + 'px'

  const buttonContainer = createDiv()
  buttonContainer.style('position', 'fixed')
  buttonContainer.style('bottom', '15px')
  buttonContainer.style('left', '50%')
  buttonContainer.style('transform', 'translateX(-50%)')
  buttonContainer.style('display', 'flex')
  buttonContainer.style('flex-direction', 'row')
  buttonContainer.style('gap', '10px')
  buttonContainer.style('z-index', '1000')

  function createControlButton(emoji, direction) {
    const btn = createButton(emoji)
    btn.parent(buttonContainer)
    btn.style('width', btnPx)
    btn.style('height', btnPx)
    btn.style('background', 'rgba(255, 255, 255, 0.9)')
    btn.style('border', '3px solid #FF1493')
    btn.style('border-radius', '50%')
    btn.style('font-size', floor(btnSize * 0.5) + 'px')
    btn.style('display', 'flex')
    btn.style('justify-content', 'center')
    btn.style('align-items', 'center')
    btn.style('cursor', 'pointer')
    btn.style('pointer-events', 'auto')
    btn.style('box-shadow', '0 4px 8px rgba(0,0,0,0.2)')
    btn.style('transition', 'all 0.1s ease')
    btn.style('outline', 'none')
    btn.style('-webkit-tap-highlight-color', 'transparent')
    btn.style('user-select', 'none')
    btn.style('-webkit-touch-callout', 'none')
    // Prevent long-press context menu (causes vibration and swallows touchend)
    btn.elt.addEventListener('contextmenu', (e) => e.preventDefault())

    // Mobile browsers fire both touch events AND synthetic mouse events (~300ms later).
    // This timestamp suppresses the synthetic mouse events after a real touch.
    let lastTouchTime = 0
    const TOUCH_SUPPRESS_MS = 600
    const recentTouch = () => Date.now() - lastTouchTime < TOUCH_SUPPRESS_MS

    btn.mousePressed(() => {
      if (recentTouch()) return
      if (stage == 'starring') { startGame(); return }
      btn.style('background', '#FF1493')
      btn.style('color', 'white')
      touchControls.startMoving(direction)
    })
    btn.mouseReleased(() => {
      if (recentTouch()) return
      btn.style('background', 'rgba(255, 255, 255, 0.9)')
      btn.style('color', 'black')
      touchControls.stopMoving()
    })
    btn.mouseOut(() => {
      if (recentTouch()) return
      btn.style('background', 'rgba(255, 255, 255, 0.9)')
      btn.style('color', 'black')
      touchControls.stopMoving()
    })
    btn.touchStarted(() => {
      lastTouchTime = Date.now()
      if (stage == 'starring') { startGame(); return false }
      btn.style('background', '#FF1493')
      btn.style('color', 'white')
      touchControls.startMoving(direction)
      return false
    })
    btn.touchEnded(() => {
      lastTouchTime = Date.now()
      btn.style('background', 'rgba(255, 255, 255, 0.9)')
      btn.style('color', 'black')
      touchControls.stopMoving()
      return false
    })

    controlButtons.push(btn)
    return btn
  }

  // Single row: ⬅️ ⬆️ ⬇️ ➡️
  createControlButton('⬅️', 'L')
  createControlButton('⬆️', 'U')
  createControlButton('⬇️', 'D')
  createControlButton('➡️', 'R')
}


function setupSwipeControls() {
  let touchStart = { x: 0, y: 0 }
  const minSwipeDistance = 30

  // Get the canvas element safely
  const canvasElement = document.querySelector('canvas')
  if (!canvasElement) {
    console.error('Canvas not found')
    return
  }

  canvasElement.addEventListener('touchstart', (e) => {
    touchStart.x = e.touches[0].clientX
    touchStart.y = e.touches[0].clientY
    e.preventDefault()
  }, { passive: false })

  canvasElement.addEventListener('touchend', (e) => {
    if (worldMap && worldMap.gameComplete) return

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    }

    const dx = touchEnd.x - touchStart.x
    const dy = touchEnd.y - touchStart.y
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    if (Math.max(absDx, absDy) < minSwipeDistance) return

    if (absDx > absDy) {
      // Horizontal swipe
      if (dx > 0) {
        worldMap.movePlayer('R')
      } else {
        worldMap.movePlayer('L')
      }
    } else {
      // Vertical swipe
      if (dy > 0) {
        worldMap.movePlayer('D')
      } else {
        worldMap.movePlayer('U')
      }
    }
    e.preventDefault()
  }, { passive: false })

  canvasElement.addEventListener('touchmove', (e) => {
    e.preventDefault() // Prevent scrolling while swiping
  }, { passive: false })
}

const victoryMessage = () => {
  const msg = createP('Feliç Sant Jordi!')
  const fontSize = min(48, max(20, floor(wW * 0.09)))
  msg.style('font-size', fontSize + 'px')
  msg.style('color', '#FF1493')
  msg.style('font-family', 'Borel')
  msg.style('text-align', 'center')
  msg.style('position', 'absolute')
  msg.style('width', wW + 'px')
  msg.style('top', (wH / 2 - fontSize) + 'px')
  msg.style('left', '0')
  msg.style('margin', '0')
  msg.style('padding', '0')
  msg.style('pointer-events', 'none')
  return msg
}

let wW = 700
let wH = 700  // will be set to windowHeight - CONTROLS_H in setup
let fS = 25
let dP = fS + 3
var worldMap
var stage = 'starring'

const startGame = () => {
  worldMap = new LevelMap(layout, fS)
  stage = 'gamming'
}
var touchControls
var controlButtons = [] // Store buttons to remove them later if needed
var endMsg;

function setup() {
  const dims = calculateLayout()
  wW = dims.w
  wH = dims.h
  fS = dims.fs
  dP = dims.dp

  createCanvas(wW, wH)

  document.body.style.margin = '0'
  document.body.style.padding = '0'
  document.body.style.touchAction = 'none' // Prevent page scrolling on touch
  document.body.style.overflow = 'hidden' // Prevent scrolling
  document.body.style.position = 'fixed' // Fix body position
  document.body.style.width = '100%'
  document.body.style.height = '100%'

  touchControls = new TouchControls()

  // Create touch control buttons
  createTouchControls()

  // Setup swipe controls after canvas is created
  setupSwipeControls()
}

function draw() {
  if (stage == 'starring') {
    background('#CAF0CA')
    textAlign(CENTER, CENTER)
    fill('#FF1493')
    const titleSize = min(36, max(14, floor(wW / 18)))
    textSize(titleSize)
    text('Ready to catch your rose? 🌹', wW / 2, wH / 2 - titleSize)
    fill('#888888')
    const subtitleSize = min(18, max(10, floor(wW / 30)))
    textSize(subtitleSize)
    text('Press any key or button to start', wW / 2, wH / 2 + subtitleSize)
  } else if (stage == 'gamming') {
    background('#FFE4C4')
    worldMap.draw(dP)

    if (worldMap.isGameComplete()) {
      worldMap.delete()
      endMsg = victoryMessage()
      stage = 'ending'
    }
  }
}

function keyPressed() {
  if (stage == 'starring') {
    startGame()
    return false
  }
  worldMap.keyPressed(keyCode)
  // Prevent default arrow key scrolling
  if (keyCode >= 37 && keyCode <= 40) {
    return false
  }
}

function keyReleased() {
  worldMap.keyReleased(keyCode)
  // Prevent default arrow key scrolling
  if (keyCode >= 37 && keyCode <= 40) {
    return false
  }
}

function windowResized() {
  const dims = calculateLayout()
  wW = dims.w
  wH = dims.h
  fS = dims.fs
  dP = dims.dp
  resizeCanvas(wW, wH)

  if (worldMap) {
    worldMap.delete()
    worldMap = null
  }
  if (endMsg) {
    endMsg.remove()
    endMsg = null
  }
  stage = 'starring'
}
