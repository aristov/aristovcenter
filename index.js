{
    const DELAY = 5000
    const TOUCH_DISTANCE_THRESHOLD = 150
    const body = document.body
    const main = document.querySelector('main')
    const article = main.querySelector('article')
    const prevButton = document.querySelector('button.prev')
    const nextButton = document.querySelector('button.next')
    let timerId
    function next() {
        article.append(article.firstElementChild)
        changeColor()
    }
    function prev() {
        article.prepend(article.lastElementChild)
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
    prevButton.onclick = event => {
        prev()
        stopTimer()
        event.stopPropagation()
    }
    nextButton.onclick = event => {
        next()
        stopTimer()
        event.stopPropagation()
    }
    startTimer()
}
