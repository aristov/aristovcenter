import { Div } from 'htmlmodule'
import { Group } from 'ariamodule/lib/group'
import { Album } from './album'
import { NextAlbum, PrevAlbum } from './navbutton'
import gallery from './data/gallery'

export class Gallery extends Div {
    init(init) {
        super.init(init)
        this.classList = 'gallery'
        this.children = [
            new PrevAlbum({ onclick : event => this.prevAlbum() }),
            this._group = new Group,
            new NextAlbum({ onclick : event => this.nextAlbum() }),
        ]
        this.data = gallery
        document.addEventListener('keydown', this.onKeyDown.bind(this))
    }

    createAlbum() {
        const group = this._group
        const index = group.children.length
        const items = this._items
        const item = items[index]
        if(item) {
            new Album({
                data : item,
                position : !index?
                    'current' :
                    index === 1?
                        'next' :
                        index === items.length - 1? 'prev' : '',
                onready : event => {
                    group.append(event.target)
                    this.createAlbum()
                }
            })
        }
        else this.emit('ready')
    }

    nextAlbum() {
        const prev = this.find(Album, '[data-position=prev]')
        const current = this.find(Album, '[data-position=current]')
        const next = this.find(Album, '[data-position=next]')
        if(next) {
            if(prev) {
                prev.position = ''
            }
            current.position = 'prev'
            next.position = 'current'
            next.next.position = 'next'
        }
    }

    onKeyDown(event) {
        const key = event.key
        if(key === 'ArrowDown') {
            this.nextAlbum()
        }
        else if(key === 'ArrowUp') {
            this.prevAlbum()
        }
    }

    prevAlbum() {
        const prev = this.find(Album, '[data-position=prev]')
        const current = this.find(Album, '[data-position=current]')
        const next = this.find(Album, '[data-position=next]')
        if(prev) {
            if(next) {
                next.position = ''
            }
            current.position = 'next'
            prev.position = 'current'
            prev.prev.position = 'prev'
        }
    }

    set data(data) {
        this._items = data
        this.createAlbum()
    }
}
