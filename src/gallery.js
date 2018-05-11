import { Article } from 'htmlmodule/lib/article'
import { Details } from 'htmlmodule/lib/details'
import { Div } from 'htmlmodule/lib/div'
import { Figure } from 'htmlmodule/lib/figure'
import { Summary } from 'htmlmodule/lib/summary'
import { P } from 'htmlmodule/lib/p'
import { Group } from 'ariamodule/lib/group'
import { NextAlbum, NextSlide, PrevAlbum, PrevSlide } from './navbutton'

export class Gallery extends Div {
    init(init) {
        super.init(init)
        this.classList = 'gallery'
        this.children = [
            new PrevAlbum(),
            new PrevSlide(),
            new Group([
                new Article,
                new Article([
                    new Details([
                        new Summary('«Дом без окон, без дверей»'),
                        new P('Центр современной архитектуры и искусства.'),
                        new P('Проект.')
                    ]),
                    new Figure({
                        dataset : { bg : '#000' },
                        style : { backgroundImage : 'url("media/center/figure-3.jpg")' }
                    }),
                    new Figure({
                        style : { backgroundImage : 'url("media/center/figure.svg")' }
                    }),
                    new Figure({
                        dataset : { bg : '#000' },
                        style : { backgroundImage : 'url("media/center/figure-1.jpg")' }
                    })
                ])
            ]),
            new NextAlbum(),
            new NextSlide(),
        ]
    }
}
