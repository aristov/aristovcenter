import 'babel-polyfill'
import 'dom4'
import 'shim-keyboard-event-key'
import 'ariamodule/lib/aria/html'
import { Gallery } from './gallery'
import { MenuButton } from './menubutton'
import './style/index.css'

MenuButton.init('#menubutton')
Gallery.init('#gallery')

