{
    const DELAY = 5000
    const TOUCH_DISTANCE_THRESHOLD = 150
    const body = document.body
    const main = document.querySelector('main')
    let timerId
    function next() {
        main.append(main.firstElementChild)
        changeColor()
    }
    function prev() {
        main.prepend(main.lastElementChild)
        changeColor()
    }
    function changeColor() {
        const { bg, color } = main.children[1].dataset
        body.style.backgroundColor = bg || ''
        body.style.color = color || ''
    }
    function startTimer() {
        timerId = setTimeout(() => {
            next()
            startTimer()
        }, DELAY)
    }
    function stopTimer() {
        if(timerId) {
            clearInterval(timerId)
            timerId = null
        }
    }
    body.onkeydown = event => {
        const key = event.key
        if(key === 'ArrowRight' || key === ' ') {
            next()
            stopTimer()
        }
        else if(key === 'ArrowLeft') {
            prev()
            stopTimer()
        }
    }
    main.onclick = event => {
        next()
        stopTimer()
    }
    body.ontouchstart = event => {
        const changedTouches = event.changedTouches
        const startX = changedTouches[0].clientX
        body.ontouchend = event => {
            const changedTouches = event.changedTouches
            const endX = changedTouches[0].clientX
            if(endX > startX + TOUCH_DISTANCE_THRESHOLD) {
                prev()
                stopTimer()
            }
            else if(startX > endX + TOUCH_DISTANCE_THRESHOLD) {
                next()
                stopTimer()
            }
            body.ontouchend = null
        }
    }
    startTimer()
}
