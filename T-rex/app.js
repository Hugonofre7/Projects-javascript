document.addEventListener("DOMContentLoaded", function() {
    const dino = document.getElementById('.dino')
    const grid = document.getElementById('.grid')
    const alert = document.getElementById('alert')
    let gravity = 0.9
    let isJumping = false
    let isGameOver = false

    function control(e) {
        if (e.code === "Space") {
            if (!isJumping) {
                jump()
            }
        }
    }  
    
    let position = 0
    function jump() {
        isJumping = true 
        let count = 0
        let timerId = setInterval(function() {
            // move down
            if (count === 15) {
                clearInterval(timerId)
                let downTimerId = setInterval(function(){ 
                    if (count === 0) {
                        clearInterval(downTimerId)
                        isJumping = false
                    }
                    position -= 5
                    count--
                    position = position * gravity
                    dino.style.bottom = position + "px"
                }, 20)
            }
            // move up
            position += 30
            count++
            position = position * gravity
            dino.style.bottom = position + "px"
        }, 20)
    }

    function generateObstacle() {
        let obstaclePosition = 1000
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        grid.appendChild(obstacle)
        obstacle.style.left = obstaclePosition + 'px'

        let timerId = setInterval(function() {
            if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
                clearInterval(timerId)
                alert.innerHTML = "Game Over"
                isGameOver = true
                // remove all children
                while (grid.firstChild) {
                    grid.removeChild(grid.firstChild)
                }
            }
            obstaclePosition -= 10
            obstacle.style.left = obstaclePosition + 'px'
    }, 20)
    if (!isGameOver) setTimeout(generateObstacle, randomTime)
    }
    generateObstacle()

    ducument.addEventListener('keydown', control)
})