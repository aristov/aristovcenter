{
    const DELAY = 5000
    const TOUCH_DISTANCE_THRESHOLD = 50
    const TOUCH_INTERVAL = 500
    const body = document.body
    const main = body.querySelector('main')
    const group = main.querySelector('[role=group]')
    let timerId
    let albumLength
    let albumItem = 0
    function prevSlide() {
        const article = group.querySelectorAll('article')[1]
        article.prepend(article.lastElementChild)
        changeColor()
    }
    function nextSlide() {
        const article = group.querySelectorAll('article')[1]
        article.append(article.firstElementChild)
        changeColor()
    }
    function prevAlbum() {
        group.prepend(group.lastElementChild)
        changeColor()
    }
    function nextAlbum() {
        group.append(group.firstElementChild)
        changeColor()
    }
    function changeColor() {
        const article = group.querySelectorAll('article')[1]
        const { bg, className } = article.children[1].dataset
        body.style.backgroundColor = bg || ''
        body.className = className || ''
    }
    function startTimer() {
        timerId = setTimeout(() => {
            if(!albumLength) {
                albumLength = group.querySelectorAll('article')[1].childElementCount
            }
            if(albumItem < albumLength) {
                nextSlide()
                albumItem++
            }
            else {
                nextAlbum()
                albumLength = group.querySelectorAll('article')[1].childElementCount
                albumItem = 0
            }
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
        else if(key.startsWith('Arrow')) {
            if(key === 'ArrowLeft') {
                prevSlide()
            }
            else if(key === 'ArrowRight' || key === ' ') {
                nextSlide()
            }
            else if(key === 'ArrowUp') {
                prevAlbum()
            }
            else if(key === 'ArrowDown') {
                nextAlbum()
            }
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
                    prevSlide()
                    stopTimer()
                }
                else if(startX > endX + TOUCH_DISTANCE_THRESHOLD) {
                    nextSlide()
                    stopTimer()
                }
            }
            body.ontouchend = null
        }
    }
    body.onclick = event => {
        const { tagName, classList } = event.target
        if(tagName === 'BUTTON') {
            if(classList.contains('prevslide')) {
                prevSlide()
            }
            else if(classList.contains('nextslide')) {
                nextSlide()
            }
            else if(classList.contains('prevalbum')) {
                prevAlbum()
            }
            else if(classList.contains('nextalbum')) {
                nextAlbum()
            }
            stopTimer()
        }
    }
    body.onload = event => {
        body.removeAttribute('aria-busy')
        startTimer()
    }
}
