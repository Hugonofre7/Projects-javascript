document.addEventListener("DOMContentLoaded", () => {
    const dino = document.getElementById(".dino");
    const desert = document.getElementById("#desert");

    function control() {
        if (e.keyCode === "Space") {
            console.log("Jump");
            jump();
        }
    }
    function jump() {
        let timerId = setInterval(function(){
            // move up
            
        })
    }

    document.addEventListener("keydown", control);
});

