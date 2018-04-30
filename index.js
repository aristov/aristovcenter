{
    const main = document.querySelector('main')
    document.body.onkeydown = event => {
        if(event.key === 'ArrowRight' || event.key === ' ') {
            main.append(main.firstElementChild)
        }
        else if(event.key === 'ArrowLeft') {
            main.prepend(main.lastElementChild)
        }
    }
    main.onclick = event => {
        main.append(main.firstElementChild)
    }
}
