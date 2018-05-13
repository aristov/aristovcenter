import { Group } from 'ariamodule/lib/group'
import { Article, Details, Div, Summary } from 'htmlmodule'
import { NextSlide, PrevSlide } from './navbutton'
import { Slide } from './slide'

export class Album extends Article {
    init(init) {
        super.init(init)
        this.classList.add('album')
        this.on('slideready', event => this.createSlide())
        this.on('transitionend', event => this.transition = false)
        document.addEventListener('keydown', this.onKeyDown.bind(this))
    }

    createSlide() {
        const group = this._group
        const index = group.children.length
        const items = this._items
        const item = items[index]
        if(item) {
            new Slide({
                parentElement : group,
                alt : item.innerText,
                src : item.href,
                dataset : item.dataset,
                position : !index?
                    'current' :
                    index === 1?
                        'next' :
                        index === items.length - 1? 'prev' : ''
            })
        }
        else {
            this.busy = false
            this.emit('albumready', { bubbles : true })
        }
    }

    nextSlide() {
        const next = this.find(Slide, '[data-position=next]')
        if(next && !next.busy && !this.transition) {
            const prev = this.find(Slide, '[data-position=prev]')
            const current = this.find(Slide, '[data-position=current]')
            if(prev) {
                prev.position = ''
            }
            current.position = 'prev'
            next.position = 'current'
            next.next.position = 'next'
            this.emit('switch', { bubbles : true })
            this.transition = true
            return next
        }
        return null
    }

    onKeyDown(event) {
        if(this.position === 'current') {
            const key = event.key
            if(key === 'ArrowRight') {
                this.nextSlide()
            }
            else if(key === 'ArrowLeft') {
                this.prevSlide()
            }
        }
    }

    prevSlide() {
        const prev = this.find(Slide, '[data-position=prev]')
        if(prev && !prev.busy && !this.transition) {
            const current = this.find(Slide, '[data-position=current]')
            const next = this.find(Slide, '[data-position=next]')
            if(next) {
                next.position = ''
            }
            current.position = 'next'
            prev.position = 'current'
            prev.prev.position = 'prev'
            this.emit('switch', { bubbles : true })
            this.transition = true
            return prev
        }
        return null
    }

    set data(data) {
        this._items = data.querySelectorAll('a')
        this.children = [
            this._details = new Details({
                classList : 'albuminfo',
                children : [
                    new Summary(data.querySelector('h1').innerText),
                    new Div(Array.from(data.querySelectorAll('p')))
                ]
            }),
            new PrevSlide({ onclick : event => this.prevSlide() }),
            this._group = new Group,
            new NextSlide({ onclick : event => this.nextSlide() })
        ]
        this.busy = true
        this.createSlide()
    }

    get next() {
        return this.nextElementSibling || this.parentElement.firstElementChild
    }

    set position(position) {
        this._details.open = false
        this.dataset.position = position
    }

    get position() {
        return this.dataset.position
    }

    get prev() {
        return this.previousElementSibling || this.parentElement.lastElementChild
    }

    set transition(transition) {
        this.classList.toggle('transition', transition)
    }

    get transition() {
        return this.classList.contains('transition')
    }
}
