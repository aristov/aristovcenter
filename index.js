{
    const body = document.body
    const main = document.querySelector('main')
    let timerId
    body.onkeydown = event => {
        const key = event.key
        if(key === 'ArrowRight' || key === ' ') {
            next()
            clearInterval(timerId)
        }
        else if(key === 'ArrowLeft') {
            prev()
            clearInterval(timerId)
        }
    }
    main.onclick = event => {
        next()
        clearInterval(timerId)
    }
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
    function intervalSwitch() {
        timerId = setTimeout(() => {
            next()
            intervalSwitch()
        }, 5000)
    }
    intervalSwitch()
}
