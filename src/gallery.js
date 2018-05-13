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
            new PrevAlbum(),
            new Group(gallery.map(data => new Album({ data }))),
            new NextAlbum(),
        ]
    }
}
