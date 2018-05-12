import { Img } from 'htmlmodule/lib/img'

const transparent = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

export class Slide extends Img {
    init(init) {
        this.onLoad = this.onLoad.bind(this)
        super.init(init)
    }

    onLoad(event) {
        this.un('load', this.onLoad)
        this.style.backgroundImage = `url(${ this.src })`
        this.src = transparent
    }

    set src(src) {
        if(src !== transparent) {
            this.on('load', this.onLoad.bind(this))
        }
        super.src = src
    }

    get src() {
        return super.src
    }
}
