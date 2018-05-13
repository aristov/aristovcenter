import { Group } from 'ariamodule/lib/group'
import { Article } from 'htmlmodule'
import { Details, Div, Summary } from 'htmlmodule/lib/index'
import { Slide } from './slide'

export class Album extends Article {
    createSlide() {
        const group = this._group
        const index = group.children.length
        const item = this._items[index]
        if(item) {
            const slide = new Slide({
                src : item.url,
                current : index? undefined : 'true',
                onready : event => {
                    slide.parentElement = group
                    this.createSlide()
                }
            })
        }
    }

    set data(data) {
        this._items = data.items
        this.children = [
            new Details([
                new Summary(data.title),
                new Div({ innerHTML : data.description })
            ]),
            this._group = new Group
        ]
        this.createSlide()
    }
}
