import { Article } from 'htmlmodule/lib/article'
import { Details } from 'htmlmodule/lib/details'
import { Div } from 'htmlmodule/lib/div'
import { Figure } from 'htmlmodule/lib/figure'
import { Summary } from 'htmlmodule/lib/summary'
import { P } from 'htmlmodule/lib/p'
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
                return new Article([
                    new Details([
                        new Summary(album.title),
                        new Div({ innerHTML : album.description })
                    ]),
                    album.items.map(item => {
                        return new Figure({
                            style : { backgroundImage : `url(${ item.url })` },
                            dataset : {
                                bg : item.bg,
                                className : item.className
                            }
                        })
                    })
                ])
            })),
            new NextAlbum(),
            new NextSlide(),
        ]
    }
}
