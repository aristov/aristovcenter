import { Img } from 'htmlmodule/lib/img'

const transparent = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

export class Slide extends Img {
    init(init) {
        this.on('load', this.onLoad = this.onLoad.bind(this))
        super.init(init)
    }

    onLoad(event) {
        this.un('load', this.onLoad)
        this.style.backgroundImage = `url(${ this.src })`
        this.node.src = transparent
        this.busy = false
        this.emit('ready')
    }

    set onready(onready) {
        this.on('ready', onready)
    }

    set src(src) {
        this.busy = true
        super.src = src
    }

    get src() {
        return super.src
    }
}
