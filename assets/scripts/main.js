const game = function () {
  let card = document.querySelectorAll('[data-card]')
  let player,
    vencedor = null

  selectPlayer('O', '')

  function initGame() {
    card.forEach(item => {
      item.addEventListener('click', () => {
        match(item)
      })
    })
  }

  function match(value) {
    if (value.innerHTML !== '' || vencedor !== null) return

    if (player === 'O') {
      player = 'X'
    } else {
      player = 'O'
    }

    selectPlayer(player, value)
    checkWin()
  }

  function selectPlayer(value, print) {
    player = value
    print.innerHTML = player
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
    vencedor = card.innerHTML
  }

  function activeWin(card1, card2, card3) {
    card1.classList.add('card-active')
    card2.classList.add('card-active')
    card3.classList.add('card-active')
  }

  return { initGame }
}

const newGame = game()
newGame.initGame()
