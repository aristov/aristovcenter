{
    const DELAY = 5000
    const TOUCH_DISTANCE_THRESHOLD = 50
    const TOUCH_INTERVAL = 500
    const body = document.body
    const main = document.querySelector('main')
    const article = main.querySelector('article')
    let timerId
    function prev() {
        article.prepend(article.lastElementChild)
        changeColor()
    }
    function next() {
        article.append(article.firstElementChild)
        changeColor()
    }
    function changeColor() {
        const { bg, className } = article.children[1].dataset
        body.style.backgroundColor = bg || ''
        body.className = className || ''
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
        if(key === ' ' && event.target.tagName === 'BUTTON') [
            event.stopPropagation()
        ]
        else if(key === 'ArrowRight' || key === ' ') {
            next()
            stopTimer()
        }
        else if(key === 'ArrowLeft') {
            prev()
            stopTimer()
        }
    }
    body.ontouchstart = event => {
        const changedTouches = event.changedTouches
        const startX = changedTouches[0].clientX
        const timeStamp = Date.now()
        body.ontouchend = event => {
            if(timeStamp + TOUCH_INTERVAL > Date.now()) {
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
            }
            body.ontouchend = null
        }
    }
    body.onclick = event => {
        const target = event.target
        if(target.tagName === 'BUTTON') {
            if(target.classList.contains('prev')) {
                prev()
            }
            else if(target.classList.contains('next')) {
                next()
            }
            stopTimer()
        }
    }
    startTimer()
}
