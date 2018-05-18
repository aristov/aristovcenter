import { Button } from 'htmlmodule/lib/button'
import menuButtonSvg from './graphics/menubutton.svg'

export class MenuButton extends Button {
    init(init) {
        super.init(init)
        this.innerHTML = menuButtonSvg
        this.on('click', this.onClick.bind(this))
    }

    onClick(event) {
        const info = document.getElementById('info')
        const gallery = document.getElementById('gallery')
        this.pressed = String(gallery.hidden = !(info.hidden = !info.hidden))
    }
}
