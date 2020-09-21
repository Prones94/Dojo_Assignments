document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.world')
    let score = 0
    let lives = 3
    const liveDisplay = document.getElementById('lives')
    const scoreDisplay = document.getElementById('score')
    const width = 28

    // Layout of Ninjaman
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
      ]

      const squares = []
      /* Legend
        - 0 - pellets
        - 1 - wall
        - 2 - ghost keep
        - 3 - cherry
        - 4 - empty space
       */ 

      // Create Grid
      const createWorld = () => {
          for(let i = 0; i<layout.length; i++){
              const square = document.createElement('div')
              grid.appendChild(square)
              squares.push(square)

              // Add layout into world
              if(layout[i] === 0) {
                  squares[i].classList.add('pellet')
              } else if(layout[i] === 1) {
                  squares[i].classList.add('wall')
              } else if(layout[i] ===2){
                  squares[i].classList.add('ghostkeep')
              } else if(layout[i] === 3) {
                  squares[i].classList.add('cherry')
              }
          }
      }
      createWorld()


      // Starting positon of ninja
      let pacManStart = 490

      squares[pacManStart].classList.add('pacman')

      // Move Controls of Pac-man
      const movePacMan = e => {
          squares[pacManStart].classList.remove('pacman')
          switch (e.keyCode) {
              case 37:
                  if(
                      pacManStart % width !== 0 &&
                      !squares[pacManStart -1].classList.contains('wall') &&
                      !squares[pacManStart - 1].classList.contains('ghostkeep')
                      ) 
                  pacManStart -=1
                  if(squares[pacManStart -1] === squares[363]){
                      pacManStart = 391
                  }
                  break;
              case 38:
                  if(
                      pacManStart - width >= 0 && 
                      !squares[pacManStart - width].classList.contains('wall') &&
                      !squares[pacManStart - width].classList.contains('ghostkeep')
                      ) 
                  pacManStart -= width
                  break;
              case 39:
                  if(
                      pacManStart % width < width - 1 && 
                      !squares[pacManStart + 1].classList.contains('wall') &&
                      !squares[pacManStart + 1].classList.contains('ghostkeep')
                      ) 
                  pacManStart += 1
                  if(squares[pacManStart + 1] === squares[392]){
                      pacManStart = 364
                  }
                  break
              case 40:
                  if(
                      pacManStart + width < width * width && 
                      !squares[pacManStart + width].classList.contains('wall') &&
                      !squares[pacManStart + width].classList.contains('ghostkeep')
                      ) 
                  pacManStart += width
                  break
              default:
                  break;
          }
          squares[pacManStart].classList.add('pacman')
          pelletEaten()
          cherryEaten()
          gameOver()
          winningGame()

      }
      document.addEventListener('keydown', movePacMan);

      // PacMan eats coin
      const pelletEaten = () => {
          if(squares[pacManStart].classList.contains('pellet')){
              score++
              console.log(score);
              scoreDisplay.innerHTML = score
              squares[pacManStart].classList.remove('pellet')
          }
      }

      // Pacman eats an cherry
      const cherryEaten = () => {
          if(squares[pacManStart].classList.contains('cherry')) {
              score += 50
              ghosts.forEach(ghost => ghost.isScared = true)
              setTimeout(ghostTransition, 10000)
              squares[pacManStart].classList.remove('cherry')
          }
      }

      // Ghosts Scare Transition
      const ghostTransition = () => {
          ghosts.forEach(ghost => ghost.isScared = false)
      }

      // Create Ghost template
      class Ghost {
          constructor(className, startIdx, speed){
            this.className = className
            this.startIdx = startIdx
            this.speed = speed
            this.currentIdx = startIdx
            this.timerId = NaN
            this.isScared = false
          }
      }

      ghosts = [
          new Ghost('inky', 348, 250),
          new Ghost('pinky', 376, 400),
          new Ghost('clyde', 351, 300),
          new Ghost('blinky', 379, 500)
      ]

      // Draw Ghosts in Keep
      ghosts.forEach(ghost => {
          squares[ghost.currentIdx].classList.add(ghost.className)
          squares[ghost.currentIdx].classList.add('ghost')
      })


      // Function to move ghosts
      const moveGhost = ghost => {
          const directions = [-1,+1,width,-width]
          let direction = directions[Math.floor(Math.random() * directions.length)]


          ghost.timerId = setInterval(function() {
            // Ghost parameters
            if(!squares[ghost.currentIdx + direction].classList.contains('wall') &&
               !squares[ghost.currentIdx + direction].classList.contains('ghost')) {
                    squares[ghost.currentIdx].classList.remove(ghost.className, 'ghost', 'scaredy')
                    ghost.currentIdx += direction
                    squares[ghost.currentIdx].classList.add(ghost.className, 'ghost')
                } else direction = directions[Math.floor(Math.random() *directions.length)]

                if(ghost.isScared){
                    squares[ghost.currentIdx].classList.add('scaredy')
                }

                if(ghost.isScared && squares[ghost.currentIdx].classList.contains('pacman')){
                    squares[ghost.currentIdx].classList.remove(ghost.className, 'ghost', 'scaredy')
                    ghost.currentIdx = ghost.startIdx
                    score += 100
                    squares[ghost.currentIdx].classList.add(ghost.className, 'ghost')
                }
                gameOver()
          }, ghost.speed)
      }
      // Move ghosts randomly
      ghosts.forEach(ghost => moveGhost(ghost))

      // Game Over
      const gameOver = () => {
          if(
              squares[pacManStart].classList.contains('ghost') &&
              !squares[pacManStart].classList.contains('scaredy')
          ) {
              lives--
              liveDisplay.innerHTML = lives
          }
          if(lives === 0){
              ghosts.forEach(ghost => clearInterval(ghost.timerId))
              document.removeEventListener('keypress', movePacMan)
              scoreDisplay.innerHTML = 'Game Over'
          }
      }

      const winningGame = () => {
          if(score === 274){
              ghosts.forEach(ghsot => clearInterval(ghost.timerId))
              document.removeEventListener('keypress', movePacMan)
              scoreDisplay.innerHTML = 'You Won!'
          }
      }

})