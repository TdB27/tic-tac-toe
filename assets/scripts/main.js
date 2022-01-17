const game = function () {
  let card = document.querySelectorAll('[data-card]')
  let reload = document.getElementById('reload')
  let turn = document.getElementById('turn')
  const winnerMatch = document.getElementById('winner')
  let player,
    winner = null

  selectPlayer('X', '')

  function initGame() {
    card.forEach(item => {
      item.addEventListener('click', () => {
        match(item)
      })
    })
  }

  function match(value) {
    if (value.innerHTML !== '' || winner !== null) return

    value.innerHTML = player

    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }

    selectPlayer(player, value)
    checkWin()
  }

  function selectPlayer(value) {
    player = value
    turn.innerHTML = player
  }

  function checkWin() {
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    const card3 = document.getElementById('card3')
    const card4 = document.getElementById('card4')
    const card5 = document.getElementById('card5')
    const card6 = document.getElementById('card6')
    const card7 = document.getElementById('card7')
    const card8 = document.getElementById('card8')
    const card9 = document.getElementById('card9')
    const check = {
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
      card7,
      card8,
      card9
    }

    if (sequence(card1, card2, card3)) {
      activeWin(card1, card2, card3)
      changeWin(card1)
      return
    }
    if (sequence(card4, card5, card6)) {
      activeWin(card4, card5, card6)
      changeWin(card4)
      return
    }
    if (sequence(card7, card8, card9)) {
      activeWin(card7, card8, card9)
      changeWin(card7)
      return
    }
    if (sequence(card1, card4, card7)) {
      activeWin(card1, card4, card7)
      changeWin(card1)
      return
    }
    if (sequence(card2, card5, card8)) {
      activeWin(card2, card5, card8)
      changeWin(card2)
      return
    }
    if (sequence(card3, card6, card9)) {
      activeWin(card3, card6, card9)
      changeWin(card3)
      return
    }
    if (sequence(card1, card5, card9)) {
      activeWin(card1, card5, card9)
      changeWin(card1)
      return
    }
    if (sequence(card3, card5, card7)) {
      activeWin(card3, card5, card7)
      changeWin(card3)
    } else {
      draw(check)
    }
  }

  function sequence(card1, card2, card3) {
    let isEqual = false
    if (
      card1.innerHTML !== '' &&
      card1.innerHTML === card2.innerHTML &&
      card1.innerHTML === card3.innerHTML
    ) {
      isEqual = true
    }

    return isEqual
  }

  function changeWin(card) {
    winner = card.innerHTML
    winnerMatch.innerHTML = winner
  }

  function activeWin(card1, card2, card3) {
    card1.classList.add('card-active')
    card2.classList.add('card-active')
    card3.classList.add('card-active')
  }

  function draw(check) {
    if (
      check.card1.innerHTML !== '' &&
      check.card2.innerHTML !== '' &&
      check.card3.innerHTML !== '' &&
      check.card4.innerHTML !== '' &&
      check.card5.innerHTML !== '' &&
      check.card6.innerHTML !== '' &&
      check.card7.innerHTML !== '' &&
      check.card8.innerHTML !== '' &&
      check.card9.innerHTML !== ''
    )
      winnerMatch.innerHTML = 'Draw'
  }

  function reloadApp() {
    reload.addEventListener('click', () => {
      player = 'X'
      turn.innerHTML = player
      winner = null
      winnerMatch.innerHTML = ''
      card.forEach(item => {
        item.innerHTML = ''
        item.classList.remove('card-active')
      })
    })
  }

  return { initGame, reloadApp }
}

const newGame = game()
newGame.initGame()
newGame.reloadApp()
