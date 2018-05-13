import { Img } from 'htmlmodule'

const transparent = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

export class Slide extends Img {
    init(init) {
        super.init(init)
        this.classList.add('slide')
        this.on('load', this.onLoad = this.onLoad.bind(this))
    }

    onLoad(event) {
        this.un('load', this.onLoad)
        this.style.backgroundImage = `url(${ this.src })`
        this.node.src = transparent
        this.busy = false
        this.emit('slideready', { bubbles : true })
    }

    get next() {
        return this.nextElementSibling || this.parentElement.firstElementChild
    }

    set position(position) {
        this.dataset.position = position
    }

    get position() {
        return this.dataset.position
    }

    get prev() {
        return this.previousElementSibling || this.parentElement.lastElementChild
    }

    set src(src) {
        this.busy = true
        super.src = src
    }

    get src() {
        return super.src
    }
}
