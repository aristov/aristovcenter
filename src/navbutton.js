import { Button } from 'htmlmodule/lib/button'
import arrowUpSvg from './graphics/arrow-up.svg'
import arrowDownSvg from './graphics/arrow-down.svg'
import arrowLeftSvg from './graphics/arrow-left.svg'
import arrowRightSvg from './graphics/arrow-right.svg'

class NavButton extends Button {
    init(init) {
        super.init(init)
        this.classList.add(this.constructor.name.toLowerCase())
    }
}

export class PrevAlbum extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Предыдущий альбом'
        this.innerHTML = arrowUpSvg
    }
}

export class NextAlbum extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Следующий альбом'
        this.innerHTML = arrowDownSvg
    }
}

export class PrevSlide extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Следующий слайд'
        this.innerHTML = arrowLeftSvg
    }
}

export class NextSlide extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Следующий слайд'
        this.innerHTML = arrowRightSvg
    }
}


