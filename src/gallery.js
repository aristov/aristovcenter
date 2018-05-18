import { Body } from 'htmlmodule/lib/body'
import { Div } from 'htmlmodule/lib/div'
import { NoScript } from 'htmlmodule/lib/noscript'
import { Group } from 'ariamodule/lib/group'
import { Album } from './album'
import { Slide } from './slide'
import { NextAlbum, PrevAlbum } from './navbutton'
// import gallery from './data/gallery'

const SLIDESHOW_DELAY = 5000
const TOUCH_DISTANCE_THRESHOLD = 50
const TOUCH_INTERVAL = 500

const body = document.body
const parser = new DOMParser

export class Gallery extends Div {
    create(init) {
        if(init && init.constructor === Object && init.hasOwnProperty('selector')) {
            this.node = document.querySelector(init.selector)
        }
        else super.create(init)
    }

    setProperty(name, value) {
        if(name !== 'selector') {
            super.setProperty(name, value)
        }
    }

    init(init) {
        const data = this.find(NoScript).textContent
        this._nextSlideIndex = 1
        this.classList = 'gallery'
        this.data = data
        this.on('albumready', event => this.createAlbum())
        this.on('slideready', this.onSlideReady = this.onSlideReady.bind(this))
        this.on('switch', event => this.applyTheme())
        this.on('touchstart', this.onTouchStart.bind(this))
        this.on('transitionend', event => this.transition = false)
        document.addEventListener('click', this.onClick.bind(this))
        document.addEventListener('keydown', this.onKeyDown.bind(this))
        super.init(init)
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
        const next = this.find(Album, '[data-position=next]')
        if(next && !this.transition) {
            const prev = this.find(Album, '[data-position=prev]')
            const nextNext = next.next
            if(prev) {
                prev.position = ''
            }
            this.currentAlbum.position = 'prev'
            next.position = 'current'
            if(nextNext === prev) {
                prev.style.transition = 'none'
                prev.position = 'next'
                setTimeout(() => prev.style.transition = '', 500)
            }
            else nextNext.position = 'next'
            this.applyTheme()
            this.transition = true
            return next
        }
        return null
    }

    nextSlide() {
        return this.currentAlbum.nextSlide()
    }

    onClick(event) {
        const target = event.target
        if(target.closest('button') || target.closest('details')) {
            this.live = 'off'
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

    onSlideReady(event) {
        this.un('slideready', this.onSlideReady)
        this.getInstanceOf(document.body, Body).busy = false
        this.live = 'assertive'
    }

    onTouchStart(event) {
        const { clientX : startX, clientY : startY } = event.changedTouches[0]
        const timeStamp = Date.now()
        this.node.ontouchend = event => {
            if(timeStamp + TOUCH_INTERVAL > Date.now()) {
                const { clientX : endX, clientY : endY } = event.changedTouches[0]
                if(endX > startX + TOUCH_DISTANCE_THRESHOLD) {
                    this.prevSlide()
                    this.live = 'off'
                }
                else if(startX > endX + TOUCH_DISTANCE_THRESHOLD) {
                    this.nextSlide()
                    this.live = 'off'
                }
                else if(endY > startY + TOUCH_DISTANCE_THRESHOLD) {
                    this.prevAlbum()
                    this.live = 'off'
                }
                else if(startY > endY + TOUCH_DISTANCE_THRESHOLD) {
                    this.nextAlbum()
                    this.live = 'off'
                }
            }
            this.node.ontouchend = null
        }
    }

    prevAlbum() {
        const prev = this.find(Album, '[data-position=prev]')
        if(prev && !this.transition) {
            const next = this.find(Album, '[data-position=next]')
            const prevPrev = prev.prev
            if(next) {
                next.position = ''
            }
            this.currentAlbum.position = 'next'
            prev.position = 'current'
            if(prevPrev === next) {
                next.style.transition = 'none'
                next.position = 'prev'
                setTimeout(() => next.style.transition = '', 500)
            }
            else prevPrev.position = 'prev'
            this.transition = true
            this.applyTheme()
        }
    }

    prevSlide() {
        return this.currentAlbum.prevSlide()
    }

    startTimer() {
        const nextSlide = () => {
            const slide = this.nextSlide()
            if(slide) {
                this._nextSlideIndex = slide.elementIndex
            }
            this.startTimer()
        }
        setTimeout(() => {
            if(this.live !== 'off') {
                if(this._nextSlideIndex) {
                    nextSlide()
                }
                else {
                    if(this.nextAlbum()) {
                        this._nextSlideIndex = 1
                        this.startTimer()
                    }
                    else nextSlide()
                }
            }
        }, SLIDESHOW_DELAY)
    }

    get currentAlbum() {
        return this.find(Album, '[data-position=current]')
    }

    set data(data) {
        const dom = parser.parseFromString(data, 'text/html')
        const items = this._items = dom.querySelectorAll('article')
        const multiple = items.length > 1
        this.children = [
            multiple && new PrevAlbum({ onclick : event => this.prevAlbum() }),
            this._group = new Group,
            multiple && new NextAlbum({ onclick : event => this.nextAlbum() }),
        ]
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

    set transition(transition) {
        this.classList.toggle('transition', transition)
    }

    get transition() {
        return this.classList.contains('transition')
    }
}
