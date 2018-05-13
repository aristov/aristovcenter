import { Group } from 'ariamodule/lib/group'
import { Article, Details, Div, Summary } from 'htmlmodule'
import { NextSlide, PrevSlide } from './navbutton'
import { Slide } from './slide'

export class Album extends Article {
    init(init) {
        super.init(init)
        document.addEventListener('keydown', this.onKeyDown.bind(this))
    }

    createSlide() {
        const group = this._group
        const index = group.children.length
        const items = this._items
        const item = items[index]
        if(item) {
            const slide = new Slide({
                src : item.url,
                position : !index?
                    'current' :
                    index === 1?
                        'next' :
                        index === items.length - 1? 'prev' : '',
                onready : event => {
                    slide.parentElement = group
                    this.createSlide()
                }
            })
        }
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
        }
    }

    onKeyDown(event) {
        const key = event.key
        if(key === 'ArrowRight') {
            this.nextSlide()
        }
        else if(key === 'ArrowLeft') {
            this.prevSlide()
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
        }
    }

    set data(data) {
        this._items = data.items
        this.children = [
            new PrevSlide({ onclick : event => this.prevSlide() }),
            new Details([
                new Summary(data.title),
                new Div({ innerHTML : data.description })
            ]),
            this._group = new Group,
            new NextSlide({ onclick : event => this.nextSlide() })
        ]
        this.createSlide()
    }
}
