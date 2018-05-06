{
    const DELAY = 5000
    const TOUCH_DISTANCE_THRESHOLD = 50
    const TOUCH_INTERVAL = 500
    const body = document.body
    const header = body.querySelector('header')
    const main = body.querySelector('main')
    const menubutton = header.querySelector('button')
    const info = main.querySelector('article.info')
    const gallery = main.querySelector('.gallery')
    const group = main.querySelector('[role=group]')
    let timerId
    let albumLength
    let albumItem = 0
    function prevSlide() {
        const article = group.querySelectorAll('article')[1]
        const figures = article.querySelectorAll('figure')
        figures[0].before(figures[figures.length - 1])
        changeColor()
    }
    function nextSlide() {
        const article = group.querySelectorAll('article')[1]
        const figures = article.querySelectorAll('figure')
        figures[figures.length - 1].after(figures[0])
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
        const figures = article.querySelectorAll('figure')
        const { bg, className } = figures[1].dataset
        body.style.backgroundColor = bg || ''
        body.className = className || ''
    }
    function startTimer() {
        timerId = setTimeout(() => {
            if(!albumLength) {
                const article = group.querySelectorAll('article')[1]
                const figures = article.querySelectorAll('figure')
                albumLength = figures.length
            }
            if(albumItem < albumLength) {
                nextSlide()
                albumItem++
            }
            else {
                nextAlbum()
                const article = group.querySelectorAll('article')[1]
                const figures = article.querySelectorAll('figure')
                albumLength = figures.length
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
    menubutton.onclick = event => {
        menubutton.setAttribute('aria-pressed', String(gallery.hidden = !(info.hidden = !info.hidden)))
    }
    body.onkeydown = event => {
        if(!gallery.hidden) {
            const { key, target } = event
            if(key === ' ' && target.tagName === 'BUTTON') [
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
    }
    gallery.ontouchstart = event => {
        const changedTouches = event.changedTouches
        const { clientX : startX, clientY : startY } = changedTouches[0]
        const timeStamp = Date.now()
        body.ontouchend = event => {
            if(timeStamp + TOUCH_INTERVAL > Date.now()) {
                const changedTouches = event.changedTouches
                const { clientX : endX, clientY : endY } = changedTouches[0]
                if(endX > startX + TOUCH_DISTANCE_THRESHOLD) {
                    prevSlide()
                    stopTimer()
                }
                else if(startX > endX + TOUCH_DISTANCE_THRESHOLD) {
                    nextSlide()
                    stopTimer()
                }
                else if(endY > startY + TOUCH_DISTANCE_THRESHOLD) {
                    prevAlbum()
                    stopTimer()
                }
                else if(startY > endY + TOUCH_DISTANCE_THRESHOLD) {
                    nextAlbum()
                    stopTimer()
                }
            }
            body.ontouchend = null
        }
    }
    body.onclick = event => {
        const button = event.target.closest('button')
        if(button) {
            const classList = button.classList
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
