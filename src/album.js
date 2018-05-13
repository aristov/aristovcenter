import { Group } from 'ariamodule/lib/group'
import { Article, Details, Div, Summary } from 'htmlmodule'
import { NextSlide, PrevSlide } from './navbutton'
import { Slide } from './slide'

export class Album extends Article {
    init(init) {
        super.init(init)
        this.classList.add('album')
        document.addEventListener('keydown', this.onKeyDown.bind(this))
    }

    createSlide() {
        const group = this._group
        const index = group.children.length
        const items = this._items
        const item = items[index]
        if(item) {
            new Slide({
                src : item.url,
                dataset : item.theme,
                position : !index?
                    'current' :
                    index === 1?
                        'next' :
                        index === items.length - 1? 'prev' : '',
                onready : event => {
                    group.append(event.target)
                    this.createSlide()
                }
            })
        }
        else this.emit('ready')
    }

    nextSlide() {
        const prev = this.find(Slide, '[data-position=prev]')
        const current = this.find(Slide, '[data-position=current]')
        const next = this.find(Slide, '[data-position=next]')
        if(next) {
            if(prev) {
                prev.position = ''
            }
            current.position = 'prev'
            next.position = 'current'
            next.next.position = 'next'
            this.emit('switch', { bubbles : true })
        }
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
        const current = this.find(Slide, '[data-position=current]')
        const next = this.find(Slide, '[data-position=next]')
        if(prev) {
            if(next) {
                next.position = ''
            }
            current.position = 'next'
            prev.position = 'current'
            prev.prev.position = 'prev'
            this.emit('switch', { bubbles : true })
        }
    }

    set data(data) {
        this._items = data.items
        this.children = [
            new Details({
                classList : 'albuminfo',
                children : [
                    new Summary(data.title),
                    new Div({ innerHTML : data.description })
                ]
            }),
            new PrevSlide({ onclick : event => this.prevSlide() }),
            this._group = new Group,
            new NextSlide({ onclick : event => this.nextSlide() })
        ]
        this.createSlide()
    }

    get next() {
        return this.nextElementSibling || this.parentElement.firstElementChild
    }

    set onready(onready) {
        this.on('ready', onready)
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
}
