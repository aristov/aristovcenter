import { Body, Div } from 'htmlmodule'
import { Group } from 'ariamodule/lib/group'
import { Album } from './album'
import { Slide } from './slide'
import { NextAlbum, PrevAlbum } from './navbutton'
import gallery from './data/gallery'

const body = document.body
const DELAY = 5000

export class Gallery extends Div {
    init(init) {
        super.init(init)
        this._nextSlideIndex = 1
        this.classList = 'gallery'
        this.children = [
            new PrevAlbum({ onclick : event => this.prevAlbum() }),
            this._group = new Group,
            new NextAlbum({ onclick : event => this.nextAlbum() }),
        ]
        this.data = gallery
        this.on('slideready', this.onSlideReady = this.onSlideReady.bind(this))
        this.on('albumready', this.onAlbumReady.bind(this))
        this.on('switch', this.onSwitch.bind(this))
        document.addEventListener('click', this.onClick.bind(this))
        document.addEventListener('keydown', this.onKeyDown.bind(this))
    }

    applyTheme() {
        const album = this.find(Album, '[data-position=current]')
        const slide = album.find(Slide, '[data-position=current]')
        const { background, content } = slide.dataset
        body.style.backgroundColor = background || ''
        body.className = content || ''
    }

    createAlbum() {
        const group = this._group
        const index = group.children.length
        const items = this._items
        const item = items[index]
        if(item) {
            new Album({
                parentElement : group,
                data : item,
                position : !index?
                    'current' :
                    index === 1?
                        'next' :
                        index === items.length - 1? 'prev' : ''
            })
        }
        else {
            this.busy = false
            this.emit('ready')
        }
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
            this.applyTheme()
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
        if(key.startsWith('Arrow')) {
            this.live = 'off'
        }
    }

    onAlbumReady(event) {
        this.createAlbum()
    }

    onClick(event) {
        const target = event.target
        if(target.closest('button') || target.closest('details')) {
            this.live = 'off'
        }
    }

    onSlideReady(event) {
        this.un('slideready', this.onSlideReady)
        this.getInstanceOf(document.body, Body).busy = 'false'
        this.live = 'assertive'
    }

    onSwitch(event) {
        this.applyTheme()
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
            this.applyTheme()
        }
    }

    startTimer() {
        setTimeout(() => {
            if(this.live !== 'off') {
                if(this._nextSlideIndex) {
                    const album = this.find(Album, '[data-position=current]')
                    const slide = album.nextSlide()
                    if(slide) {
                        this._nextSlideIndex = slide.elementIndex
                    }
                    this.startTimer()
                }
                else {
                    this.nextAlbum()
                    this._nextSlideIndex = 1
                    this.startTimer()
                }
            }
        }, DELAY)
    }

    set data(data) {
        this._items = data
        this.busy = true
        this.createAlbum()
    }

    set live(live) {
        if(live !== 'off') {
            this.startTimer()
        }
        super.live = live
    }

    get live() {
        return super.live || 'off'
    }
}
