import 'ariamodule/lib/aria/html'
import { Body } from 'htmlmodule/lib/body'
import { Gallery } from './gallery'

Gallery.init('#gallery')

const body = new Body({
    node : document.body,
    onload : event => {
        body.busy = false
    }
})
