import { Article, Details, Div, Summary } from 'htmlmodule'
import { Group } from 'ariamodule/lib/group'
import { NextAlbum, NextSlide, PrevAlbum, PrevSlide } from './navbutton'
import { Slide } from './slide'
import data from './data/gallery'

export class Gallery extends Div {
    init(init) {
        super.init(init)
        this.classList = 'gallery'
        this.children = [
            new PrevAlbum(),
            new PrevSlide(),
            new Group(data.map(album => {
                const group = new Group
                const slide = new Slide({
                    src : album.items[0].url,
                    current : 'true',
                    onready : event => {
                        slide.parentElement = group
                    }
                })
                return new Article([
                    new Details([
                        new Summary(album.title),
                        new Div({ innerHTML : album.description })
                    ]),
                    group
                    /*new Group(album.items.map(item => {
                        return new Figure({
                            style : { backgroundImage : `url(${ item.url })` },
                            dataset : {
                                bg : item.bg,
                                className : item.className
                            }
                        })
                    }))*/
                ])
            })),
            new NextAlbum(),
            new NextSlide(),
        ]
    }
}
