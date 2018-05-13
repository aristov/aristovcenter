/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ariamodule_lib_aria_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _menubutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(207);




_menubutton__WEBPACK_IMPORTED_MODULE_2__["MenuButton"].init('#menubutton')
_gallery__WEBPACK_IMPORTED_MODULE_1__["Gallery"].init('#gallery')



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var htmlmodule_lib_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



const { defineProperty } = Object

Object.values(___WEBPACK_IMPORTED_MODULE_1__).forEach(assembler => {
    const prototype = htmlmodule_lib_element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"].prototype
    const name = assembler.name
    const prop = name.charAt(0).toLowerCase() + name.substr(1)
    if(!(prop in prototype)) {
        defineProperty(prototype, prop, {
            configurable : true,
            set(value) {
                this.setAttribute(assembler, value)
            },
            get() {
                return this.getAttribute(assembler)
            }
        })
    }
})


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLElementAssembler", function() { return HTMLElementAssembler; });
/* harmony import */ var dommodule_lib_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const { assign, getPrototypeOf } = Object
const { HTMLDocument, HTMLElement, document } = window

const CLASS_PREFIX_RE = /^HTML/
const EMPTY_STRING = ''
const HTML_NAMESPACE_URI = 'http://www.w3.org/1999/xhtml'
const HTML_PREFIX = 'html'
const TABINDEX_ATTRIBUTE_NAME = 'tabindex'
const TABINDEX_DEFAULT_VALUE = -1

/**
 * @see https://www.w3.org/TR/html/dom.html#htmlelement
 * @abstract
 */
class HTMLElementAssembler extends dommodule_lib_element__WEBPACK_IMPORTED_MODULE_0__["ElementAssembler"] {
    /**
     * Click the element
     */
    click() {
        this.node.click()
    }

    /**
     * Focus the element
     */
    focus() {
        this.node.focus()
    }

    /**
     * Blur the element
     */
    blur() {
        this.node.blur()
    }

    /**
     * @param {String} accessKey
     */
    set accessKey(accessKey) {
        this.node.accessKey = accessKey
    }

    /**
     * @returns {String}
     */
    get accessKey() {
        return this.node.accessKey
    }

    /**
     * @param {{}} dataset
     */
    set dataset(dataset) {
        const _dataset = this.dataset
        for(let name in dataset) {
            if(dataset.hasOwnProperty(name)) {
                if(name === null) {
                    delete _dataset[name]
                }
                else _dataset[name] = dataset[name]
            }
        }
    }

    /**
     * @returns {{}} DOMStringMap
     */
    get dataset() {
        return this.node.dataset
    }

    /**
     * @param {String} dir
     */
    set dir(dir) {
        this.node.dir = dir
    }

    /**
     * @returns {String}
     */
    get dir() {
        return this.node.dir
    }

    /**
     * @param {String} innerHTML
     */
    set innerHTML(innerHTML) {
        this.node.innerHTML = innerHTML
    }

    /**
     * @returns {String} 
     */
    get innerHTML() {
        return this.node.innerHTML
    }

    /**
     * @param {String} innerText
     */
    set innerText(innerText) {
        this.node.innerText = innerText
    }

    /**
     * @returns {String}
     */
    get innerText() {
        return this.node.innerText
    }

    /**
     * @param {String} lang
     */
    set lang(lang) {
        this.node.lang = lang
    }

    /**
     * @returns {String}
     */
    get lang() {
        return this.node.lang
    }

    /**
     * @param {{}} style
     */
    set style(style) {
        assign(this.node.style, style)
    }

    /**
     * @returns {{}} CSSStyleDeclaration
     */
    get style() {
        return this.node.style
    }

    /**
     * @param {Number} tabIndex
     */
    set tabIndex(tabIndex) {
        if(isNaN(tabIndex)) {
            this.node.removeAttribute(TABINDEX_ATTRIBUTE_NAME)
        }
        else this.node.tabIndex = tabIndex
    }

    /**
     * @returns {Number}
     */
    get tabIndex() {
        const tabIndex = this.node.tabIndex
        return this.node.hasAttribute(TABINDEX_ATTRIBUTE_NAME) || tabIndex > TABINDEX_DEFAULT_VALUE?
            tabIndex :
            NaN
    }

    /**
     * @param {String} title
     */
    set title(title) {
        this.node.title = title
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.node.title
    }

    /**
     * @param {Boolean} translate
     */
    set translate(translate) {
        this.node.translate = translate
    }

    /**
     * @returns {Boolean}
     */
    get translate() {
        return this.node.translate
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        this.node.hidden = hidden
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return this.node.hidden
    }

    /**
     * @param {*} [init]
     * @returns {Element|*} created element
     */
    static create(init) {
        if(this === this.superAssembler) {
            throw TypeError(`Could not create an abstract ${ this.name } instance`)
        }
        else if(document instanceof HTMLDocument) {
            const { localName = this.localName } = init || this
            return document.createElement(localName)
        }
        else return super.create(init)
    }

    /**
     * @returns {Function} HTMLDocumentAssembler|DocumentAssembler
     */
    static get documentAssembler() {
        return HTMLElementAssembler.HTMLDocumentAssembler || super.documentAssembler
    }

    /**
     * @returns {window.HTMLElement}
     */
    static get interface() {
        return HTMLElement
    }

    /**
     * @returns {String}
     */
    static get localName() {
        const { superAssembler } = this
        let object = this
        let proto
        while(proto = getPrototypeOf(object)) {
            if(proto === superAssembler) break
            else object = proto
        }
        return object.name.replace(CLASS_PREFIX_RE, EMPTY_STRING).toLowerCase()
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return HTML_NAMESPACE_URI
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return document instanceof HTMLDocument?
            EMPTY_STRING :
            HTML_PREFIX
    }

    /**
     * @returns {Function} HTMLElementAssembler
     */
    static get superAssembler() {
        return HTMLElementAssembler
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAssembler", function() { return ElementAssembler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "element", function() { return element; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _parentnode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);





const { keys } = Object
const { isArray, prototype : { indexOf, map, reduce } } = Array
const { Attr, Document, Element, Node, document } = window
const DEFAULT_PROPERTY_NAME = 'children'
const IGNORED_PROPERTY_NAMES = ['namespace', 'localName', 'qualifiedName', 'prefix']

/**
 * @private
 */
function attrset(attrset, { name, value }) {
    attrset[name] = value
    return attrset
}

/**
 * @see https://www.w3.org/TR/dom/#interface-element
 */
class ElementAssembler extends _parentnode__WEBPACK_IMPORTED_MODULE_3__["ParentNodeAssembler"] {
    /**
     * @param {Function|String} object
     * @returns {ElementAssembler|AttrAssembler|*|null}
     */
    closest(object) {
        const assembler = this.constructor.elementAssembler
        if(typeof object === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]) {
            const node = this.node.closest(object.selector)
            if(node) {
                const element = this.getInstanceOf(node, assembler)
                return _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"].isPrototypeOf(object)?
                    element.getAttributeNode(object) :
                    element
            }
            else return null
        }
        else return this.getInstanceOf(this.node.closest(object), assembler)
    }

    /**
     * this.getAttribute(AttrAssembler)
     * this.getAttribute('attr')
     *
     * @param {Function|String} attr
     * @returns {*}
     */
    getAttribute(attr) {
        const node = this.node
        if(typeof attr === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]) {
            const { namespace, qualifiedName, localName } = attr
            return namespace?
                node.getAttributeNS(namespace, localName) :
                node.getAttribute(qualifiedName)
        }
        else return node.getAttribute(attr)
    }

    /**
     * this.getAttributeNode(AttrAssembler)
     * this.getAttributeNode('attr')
     *
     * @param {Function|String} attr
     * @returns {AttrAssembler|null|*}
     */
    getAttributeNode(attr) {
        const node = this.node
        const isFunctionType = typeof attr === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]
        let attrNode
        if(isFunctionType) {
            const { namespace, qualifiedName, localName } = attr
            attrNode = namespace?
                node.getAttributeNodeNS(namespace, localName) :
                node.getAttributeNode(qualifiedName)
        }
        else attrNode = node.getAttributeNode(attr)
        if(attrNode) {
            const assembler = isFunctionType?
                attr :
                this.constructor.attrAssembler
            return this.getInstanceOf(attrNode, assembler)
        }
        else return null
    }

    /**
     * @param {Function|String} attr
     * @returns {Boolean}
     */
    hasAttribute(attr) {
        const node = this.node
        if(typeof attr === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]) {
            const { namespace, qualifiedName, localName } = attr
            return namespace?
                node.hasAttributeNS(namespace, localName) :
                node.hasAttribute(qualifiedName)
        }
        else return node.hasAttribute(attr)
    }

    /**
     * @returns {Boolean}
     */
    hasAttributes() {
        return this.node.hasAttributes()
    }

    /**
     * @param {String} selectors
     * @returns {Boolean}
     */
    matches(selectors) {
        return this.node.matches(selectors)
    }

    /**
     * @param {Function|String} attr
     */
    removeAttribute(attr) {
        const node = this.node
        if(typeof attr === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]) {
            const { namespace, qualifiedName, localName } = attr
            if(namespace) {
                node.removeAttributeNS(namespace, localName)
            }
            else node.removeAttribute(qualifiedName)
        }
        else node.removeAttribute(attr)
    }

    /**
     * this.removeAttributeNode('attr')
     * this.removeAttributeNode(AttrAssembler)
     * this.removeAttributeNode(this.getAttributeNode('attr'))
     * this.removeAttributeNode(this.node.getAttributeNode('attr'))
     *
     * @param {AttrAssembler|Attr|Function|String} attr
     * @returns {AttrAssembler|ElementAssembler.attrAssembler|null}
     */
    removeAttributeNode(attr) {
        const node = this.node
        const type = typeof attr
        if(type === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"] || type === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]) {
            const instance = this.getAttributeNode(attr)
            if(instance) {
                instance.remove()
                return instance
            }
            else return null
        }
        else {
            if(attr instanceof _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"]) return attr.remove()
            else {
                const attrNode = node.removeAttributeNode(attr)
                const { attrAssembler } = this.constructor
                return this.getInstanceOf(attrNode, attrAssembler)
            }
        }
    }

    /**
     * this.setAttribute(AttrAssembler, 'foobar')
     * this.setAttribute('attr', 'foobar')
     *
     * @param {Function|String|*} attr
     * @param {*} value
     */
    setAttribute(attr, value) {
        const instance = this.getAttributeNode(attr)
        if(instance) instance.value = value
        else {
            if(typeof attr === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]) {
                if(!attr.removeOnValue(value)) {
                    this.setAttributeNode(new attr({ value }))
                }
            }
            else if(!this.constructor.attrAssembler.removeOnValue(value)) {
                this.node.setAttribute(attr, value)
            }
        }
    }

    /**
     * this.setAttributeNode(new AttrAssembler)
     * this.setAttributeNode(document.createAttribute('attr'))
     *
     * @param {AttrAssembler|Attr} attr
     * @returns {AttrAssembler|ElementAssembler.attrAssembler|null}
     */
    setAttributeNode(attr) {
        const node = this.node
        let replacedNode
        if(attr instanceof _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"]) {
            const { namespaceURI, name } = attr
            replacedNode = namespaceURI?
                node.getAttributeNodeNS(namespaceURI, name) :
                node.getAttributeNode(name)
            attr.ownerElement = node
        }
        else {
            replacedNode = attr.namespaceURI?
                node.setAttributeNodeNS(attr) :
                node.setAttributeNode(attr)
        }
        if(replacedNode) {
            const { attrAssembler } = this.constructor
            return this.getInstanceOf(replacedNode, attrAssembler)
        }
        else return null
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(!IGNORED_PROPERTY_NAMES.includes(name)) {
            super.setProperty(name, value)
        }
    }

    /**
     * Set content attributes on the element
     * @param {*} attributes
     */
    set attributes(attributes) {
        if(attributes instanceof _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"]) {
            attributes.ownerElement = this.node
        }
        else if(isArray(attributes)) {
            attributes.forEach(attr => this.attributes = attr)
        }
        else this.setAttributeNode(attributes)
    }

    /**
     * Get all attributes of the element as an array
     * @returns {Array}
     */
    get attributes() {
        const assembler = this.constructor.attrAssembler
        return map.call(this.node.attributes, node => this.getInstanceOf(node, assembler))
    }

    /**
     * Set content attributes on the element
     * @param {*} attrset dictionary object
     */
    set attrset(attrset) {
        const node = this.node
        for(let name in attrset) {
            node.setAttribute(name, attrset[name])
        }
    }

    /**
     * Get all content attributes of the element as a dictionary-object
     * @returns {{}}
     */
    get attrset() {
        return reduce.call(this.node.attributes, attrset, {})
    }

    /**
     * Append children to the element
     * @param {*} children
     */
    set children(children) {
        this.childNodes = children
    }

    /**
     * Get all children of the element as an array
     * @returns {Array}
     */
    get children() {
        const { elementAssembler } = this.constructor
        return map.call(this.node.children, node => this.getInstanceOf(node, elementAssembler))
    }

    /**
     * Set the class list of the element
     * @param {*} classList token / token list / token-boolean dict {String|Array|{}}
     */
    set classList(classList) {
        if(classList) {
            const list = this.node.classList
            if(isArray(classList)) {
                classList.forEach(token => this.classList = token)
            }
            else if(classList.constructor === Object) {
                keys(classList).forEach(token => {
                    if(classList[token]) list.add(token)
                })
            }
            else list.add(classList)
        }
    }

    /**
     * Get the class list of the element as an array
     * @returns {DOMTokenList} classList interface
     */
    get classList() {
        return this.node.classList
    }

    /**
     * Set the class name of the element
     * @param {String} className
     */
    set className(className) {
        if(className) {
            this.node.className = className
        }
        else this.node.removeAttribute('class')
    }

    /**
     * Get the class name of the element
     * @returns {String}
     */
    get className() {
        return this.node.className
    }

    /**
     * Get the element index among its sibling elements or -1 if it has no parent
     * @returns {Number}
     */
    get elementIndex() {
        const parentNode = this.node.parentNode
        return parentNode?
            indexOf.call(parentNode.children, this.node) :
            _common__WEBPACK_IMPORTED_MODULE_0__["NO_PARENT_INDEX"]
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get firstElementChild() {
        return this.getInstanceOf(this.node.firstElementChild, this.constructor.elementAssembler)
    }

    /**
     * Set the unique identifier on the element
     * @param {String} id
     */
    set id(id) {
        this.node.id = id
    }

    /**
     * Get the unique identifier of the element
     * @returns {String}
     */
    get id() {
        return this.node.id
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get lastElementChild() {
        return this.getInstanceOf(this.node.lastElementChild, this.constructor.elementAssembler)
    }

    /**
     * @returns {String}
     */
    get localName() {
        return this.node.localName
    }

    /**
     * @returns {String|null}
     */
    get namespaceURI() {
        return this.node.namespaceURI
    }

    /**
     * Get a next sibling of the element
     * @returns {ChildNodeAssembler|null|*}
     */
    get nextElementSibling() {
        return this.getInstanceOf(this.node.nextElementSibling, this.constructor.elementAssembler)
    }
    
    /**
     * @return {String}
     */
    get prefix() {
        return this.node.prefix
    }

    /**
     * Get a previous sibling of the element
     * @returns {ChildNodeAssembler|null|*}
     */
    get previousElementSibling() {
        return this.getInstanceOf(this.node.previousElementSibling, this.constructor.elementAssembler)
    }

    /**
     * @return {String}
     */
    get tagName() {
        return this.node.tagName
    }

    /**
     * Create the specified Element node
     * @param {*} [init]
     * @returns {Element|*} created element
     * @override
     */
    static create(init) {
        const {
            namespace = this.namespace,
            prefix = this.prefix,
            localName = this.localName
        } = init || this
        let qualifiedName = init && init.qualifiedName
        if(!qualifiedName) {
            qualifiedName = prefix?
                prefix + _common__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE_SEPARATOR"] + localName :
                localName
        }
        return document.createElementNS(namespace, qualifiedName)
    }

    /**
     * @param {String|Element|Document|DocumentFragment} [selectorOrContext=this.selector]
     * @param {Element|Document|DocumentFragment} [context=window.document]
     * @returns {Array} array of initialized instances
     */
    static init(selectorOrContext = this.selector, context = document) {
        if(selectorOrContext instanceof Node) {
            context = selectorOrContext
            selectorOrContext = this.selector
        }
        return map.call(context.querySelectorAll(selectorOrContext), node => {
            return new this({ node })
        })
    }
    
    /**
     * @returns {String}
     * @override
     */
    static get defaultPropertyName() {
        return DEFAULT_PROPERTY_NAME
    }

    /**
     * @returns {window.Element}
     * @override
     */
    static get interface() {
        return Element
    }

    /**
     * The local name of the element node
     * @returns {String}
     */
    static get localName() {
        return this === ElementAssembler?
            element.name :
            this.name.toLowerCase()
    }

    /**
     * Default namespace URI
     * @returns {String}
     */
    static get namespace() {
        return _common__WEBPACK_IMPORTED_MODULE_0__["EMPTY_STRING"]
    }

    /**
     * The XML namespace prefix
     * @returns {String}
     */
    static get prefix() {
        return _common__WEBPACK_IMPORTED_MODULE_0__["EMPTY_STRING"]
    }

    /**
     * The qualified name of the element node
     * @returns {String}
     */
    static get qualifiedName() {
        const { prefix, localName } = this
        return prefix?
            prefix + _common__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE_SEPARATOR"] + localName :
            localName
    }

    /**
     * @returns {String}
     */
    static get selector() {
        return this.localName
    }
}

_node__WEBPACK_IMPORTED_MODULE_2__["NodeAssembler"].ElementAssembler = ElementAssembler

/**
 * Element assembler factory
 * @param {*} init
 * @returns {ElementAssembler}
 */
function element(init) {
    return new ElementAssembler(init)
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_STRING", function() { return EMPTY_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE_SEPARATOR", function() { return NAMESPACE_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_PARENT_INDEX", function() { return NO_PARENT_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_FUNCTION", function() { return TYPE_FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_STRING", function() { return TYPE_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_UNDEFINED", function() { return TYPE_UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
const { isArray } = Array

const EMPTY_STRING = ''
const NAMESPACE_SEPARATOR = ':'
const NO_PARENT_INDEX = -1
const TYPE_FUNCTION = 'function'
const TYPE_STRING = 'string'
const TYPE_UNDEFINED = 'undefined'

/**
 * @param {Array} array
 * @returns {Array}
 */
function flatten(array) {
    const result = []
    array.forEach(item => {
        if(isArray(item)) {
            result.push(...flatten(item))
        }
        else if(item) {
            result.push(item)
        }
    })
    return result
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrAssembler", function() { return AttrAssembler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const { prototype : { map } } = Array
const { Attr, Element, Node, document } = window
const DEFAULT_PROPERTY_NAME = 'value'
const IGNORED_PROPERTY_NAMES = ['namespace', 'localName', 'name', 'prefix']

/**
 * @see https://www.w3.org/TR/dom/#interface-attr
 */
class AttrAssembler extends _node__WEBPACK_IMPORTED_MODULE_2__["NodeAssembler"] {
    /**
     * @returns {AttrAssembler}
     */
    remove() {
        const ownerElement = this.ownerElement
        if(ownerElement) {
            return ownerElement.removeAttributeNode(this.node)
        }
        else throw TypeError(`Failed to execute 'remove' on '${ this.constructor.name }': the ownerElement is null.`)
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(!IGNORED_PROPERTY_NAMES.includes(name)) {
            super.setProperty(name, value)
        }
    }

    /**
     * @returns {String}
     */
    get localName() {
        return this.node.localName
    }

    /**
     * @return {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @returns {String|null}
     */
    get namespaceURI() {
        return this.node.namespaceURI
    }

    /**
     * @param {ElementAssembler|Element|{}|null} ownerElement
     */
    set ownerElement(ownerElement) {
        const node = this.node
        if(ownerElement instanceof _element__WEBPACK_IMPORTED_MODULE_1__["ElementAssembler"]) {
            ownerElement.setAttributeNode(node)
        }
        else if(ownerElement instanceof Element) {
            if(node.namespaceURI) {
                ownerElement.setAttributeNodeNS(node)
            }
            else ownerElement.setAttributeNode(node)
        }
        else if(ownerElement && ownerElement.constructor === Object) {
            if(this.node.ownerElement) {
                this.ownerElement.init(ownerElement)
            }
            else {
                const { elementAssembler } = this.constructor
                const element = new elementAssembler(ownerElement)
                element.setAttributeNode(node)
            }
        }
        else if(ownerElement === null) {
            this.remove()
        }
        else throw TypeError(`Failed to set 'ownerElement' on '${ this.constructor.name }': parameter is not of expected type.`)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get ownerElement() {
        return this.getInstanceOf(this.node.ownerElement, this.constructor.elementAssembler)
    }

    /**
     * @param {ElementAssembler|Element|*|null} parentElement
     */
    set parentElement(parentElement) {
        if(this.node.ownerElement) {
            this.ownerElement.parentElement = parentElement
        }
        else throw Error(`Failed to set 'parentElement' on '${ this.constructor.name }': the 'ownerElement' is null.`)
    }

    /**
     * @returns {ElementAssembler|*|null}
     */
    get parentElement() {
        return this.node.ownerElement && this.ownerElement.parentElement
    }

    /**
     * @param {ParentNodeAssembler|*|null} parentNode
     */
    set parentNode(parentNode) {
        if(this.node.ownerElement) {
            this.ownerElement.parentNode = parentNode
        }
        else throw Error(`Failed to set 'parentNode' on '${ this.constructor.name }': the 'ownerElement' is null.`)
    }

    /**
     * @returns {ParentNodeAssembler|*|null}
     */
    get parentNode() {
        return this.node.ownerElement && this.ownerElement.parentNode
    }

    /**
     * @return {String}
     */
    get prefix() {
        return this.node.prefix
    }

    /**
     * @param {*} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {*}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {{}} [init]
     * @returns {Attr|*}
     * @override
     */
    static create(init) {
        const {
            namespace = this.namespace,
            prefix = this.prefix,
            localName = this.localName
        } = init || this
        let name = init && init.name
        if(!name) {
            name = prefix?
                prefix + _common__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE_SEPARATOR"] + localName :
                localName
        }
        return namespace?
            document.createAttributeNS(namespace, name) :
            document.createAttribute(name)
    }

    /**
     * @param {String|Element|Document|DocumentFragment} [selectorOrContext=this.selector]
     * @param {Element|Document|DocumentFragment} [context=window.document]
     * @returns {Array} array of initialized instances
     */
    static init(selectorOrContext, context = document) {
        const localName = this.localName
        if(selectorOrContext instanceof Node) {
            context = selectorOrContext
            selectorOrContext = this.selector
        }
        return map.call(context.querySelectorAll(selectorOrContext), ownerElement => {
            const node = ownerElement.attributes[localName]
            return node?
                new this({ node }) :
                new this({ ownerElement })
        })
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === null
    }

    /**
     * @returns {String}
     * @override
     */
    static get defaultPropertyName() {
        return DEFAULT_PROPERTY_NAME
    }

    /**
     * @returns {window.Attr}
     * @override
     */
    static get interface() {
        return Attr
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return this === AttrAssembler?
            attr.name :
            this.name.toLowerCase()
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return _common__WEBPACK_IMPORTED_MODULE_0__["EMPTY_STRING"]
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return _common__WEBPACK_IMPORTED_MODULE_0__["EMPTY_STRING"]
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        const { prefix, localName } = this
        return prefix?
            prefix + _common__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE_SEPARATOR"] + localName :
            localName
    }

    /**
     * @returns {String}
     */
    static get selector() {
        return `[${ this.localName }]`
    }
}

_node__WEBPACK_IMPORTED_MODULE_2__["NodeAssembler"].AttrAssembler = AttrAssembler

/**
 * @param {*} [init]
 * @returns {AttrAssembler}
 */
function attr(init) {
    return new AttrAssembler(init)
}

/*
 * !!! Workaround !!!
 * Garbage collector in Safari drops AttrAssembler instances
 *  which have no links from a static memory structure.
 * TODO Write a bug report
 * TODO Implement a custom garbage collector here
 */
const { userAgent } = window.navigator
if(/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    const proto = AttrAssembler.prototype
    const setInstanceOf = proto.setInstanceOf
    AttrAssembler.__instances__ = []
    proto.setInstanceOf = function(target) {
        setInstanceOf.call(this, target)
        AttrAssembler.__instances__.push(this)
    }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeAssembler", function() { return NodeAssembler; });
/* harmony import */ var esmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _eventtarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



const { Node } = window
const {
    ATTRIBUTE_NODE,
    COMMENT_NODE,
    DOCUMENT_NODE,
    DOCUMENT_TYPE_NODE,
    DOCUMENT_FRAGMENT_NODE,
    ELEMENT_NODE,
    TEXT_NODE
} = Node
const { getTargetOf } = esmodule__WEBPACK_IMPORTED_MODULE_0__["Assembler"]

/**
 * @see https://www.w3.org/TR/dom/#interface-node
 * @abstract
 */
class NodeAssembler extends _eventtarget__WEBPACK_IMPORTED_MODULE_1__["EventTargetAssembler"] {
    /**
     * @param {*} [init]
     * @override
     */
    create(init) {
        if(init && init.constructor === Object && init.hasOwnProperty('node')) {
            this.node = init.node
        }
        else super.create(init)
    }

    /**
     * @param {Boolean} deep
     * @returns {NodeAssembler|*}
     */
    cloneNode(deep) {
        return this.getInstanceOf(this.node.cloneNode(deep), this.constructor)
    }

    /**
     * @param {Node|NodeAssembler|*|null} node
     * @param {Function} [assembler]
     * @returns {NodeAssembler|*}
     */
    getInstanceOf(node, assembler) {
        return this.constructor.getInstanceOf(node, assembler)
    }

    /**
     * @param {NodeAssembler|Node} object
     * @returns {Boolean}
     *
     */
    isEqualNode(object) {
        return this.node.isEqualNode(getNodeOf(object))
    }
    
    /**
     * @param {Node|*} node
     */
    set node(node) {
        if(node !== this.node) {
            const constructor = this.constructor
            if(node instanceof constructor.interface) {
                this.setInstanceOf(node)
            }
            else throw TypeError(`Failed to set 'node' on '${ constructor.name }': parameter is not of expected type.`)
        }
    }

    /**
     * @returns {Node|*}
     */
    get node() {
        return getTargetOf(this)
    }

    /**
     * @returns {DocumentAssembler}
     */
    get ownerDocument() {
        return this.getInstanceOf(this.node.ownerDocument, this.constructor.documentAssembler)
    }

    /**
     * @abstract
     * @override
     */
    static create() {
        throw TypeError(`Could not create an abstract ${ this.name } instance`)
    }

    /**
     * @param {Node|NodeAssembler|*|null} node
     * @param {Function} [assembler]
     * @returns {NodeAssembler|*}
     */
    static getInstanceOf(node, assembler) {
        if(node) {
            const instance = super.getInstanceOf(node)
            if(instance) return instance
            if(!assembler) {
                assembler = this.resolveNodeType(node.nodeType)
            }
            return new assembler({ node })
        }
        else return null
    }

    /**
     * @param {NodeAssembler|Node|*} object
     * @returns {*}
     */
    static getNodeOf(object) {
        return object instanceof NodeAssembler?
            object.node :
            object
    }

    /**
     * @param {Number} nodeType
     * @returns {NodeAssembler|*}
     */
    static resolveNodeType(nodeType) {
        return this.nodeTypeResolver[nodeType] || this.assembler
    }

    /**
     * @returns {{}}
     */
    static get nodeTypeResolver() {
        return {
            [ATTRIBUTE_NODE] : this.attrAssembler,
            [COMMENT_NODE] : this.commentAssembler,
            [DOCUMENT_NODE] : this.documentAssembler,
            [DOCUMENT_TYPE_NODE] : this.doctypeAssembler,
            [DOCUMENT_FRAGMENT_NODE] : this.documentFragmentAssembler,
            [ELEMENT_NODE] : this.elementAssembler,
            [TEXT_NODE] : this.textAssembler
        }
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    static get assembler() {
        return NodeAssembler.ChildNodeAssembler
    }

    /**
     * @returns {NodeAssembler.AttrAssembler|*}
     */
    static get attrAssembler() {
        return NodeAssembler.AttrAssembler
    }

    /**
     * @returns {NodeAssembler.CommentAssembler|*}
     */
    static get commentAssembler() {
        return NodeAssembler.CommentAssembler
    }

    /**
     * @returns {NodeAssembler.DocumentTypeAssembler|*}
     */
    static get doctypeAssembler() {
        return NodeAssembler.DocumentTypeAssembler
    }

    /**
     * @returns {NodeAssembler.DocumentAssembler|*}
     */
    static get documentAssembler() {
        return NodeAssembler.DocumentAssembler
    }

    /**
     * @returns {NodeAssembler.DocumentFragmentAssembler|*}
     */
    static get documentFragmentAssembler() {
        return NodeAssembler.DocumentFragmentAssembler
    }

    /**
     * @returns {NodeAssembler.ElementAssembler|*}
     */
    static get elementAssembler() {
        return NodeAssembler.ElementAssembler
    }

    /**
     * @returns {NodeAssembler.TextAssembler|*}
     */
    static get textAssembler() {
        return NodeAssembler.TextAssembler
    }

    /**
     * @returns {window.Node}
     * @override
     */
    static get interface() {
        return Node
    }
}

const { getNodeOf } = NodeAssembler


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assembler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INSTANCE_PROPERTY_NAME", function() { return _assembler__WEBPACK_IMPORTED_MODULE_0__["INSTANCE_PROPERTY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TARGET_PROPERTY_NAME", function() { return _assembler__WEBPACK_IMPORTED_MODULE_0__["TARGET_PROPERTY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assembler", function() { return _assembler__WEBPACK_IMPORTED_MODULE_0__["Assembler"]; });

/**
 * @module esmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @license MIT
 */



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTANCE_PROPERTY_NAME", function() { return INSTANCE_PROPERTY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGET_PROPERTY_NAME", function() { return TARGET_PROPERTY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assembler", function() { return Assembler; });
const TYPE_UNDEFINED = 'undefined'

const INSTANCE_PROPERTY_NAME = '__instance__'
const TARGET_PROPERTY_NAME = '__target__'

/**
 * @summary Assembler is a simple class, which helps to assemble another JavaScript objects.
 */
class Assembler {
    /**
     * Create the assembler instance and assemble the specified object
     * Initializes the object by all passed init arguments
     * @param {*} [init]
     */
    constructor(init) {
        this.assemble(init)
    }

    /**
     * Instantiate and initialize the specified object
     * @param {*} [init] initializing dictionary
     * @returns {Object|*}
     */
    assemble(init) {
        this.create(init)
        this.init(init)
        return this[TARGET_PROPERTY_NAME]
    }

    /**
     * Create the defined object
     * @param {*} [init] initializing dictionary
     */
    create(init) {
        this.setInstanceOf(init && init.constructor === Object?
            this.constructor.create(init) :
            this.constructor.create())
    }

    /**
     * This is a handshake between the Assembler instance and a target
     * @param {Object|*} target
     */
    setInstanceOf(target) {
        this[TARGET_PROPERTY_NAME] = target
        target[INSTANCE_PROPERTY_NAME] = this
    }

    /**
     * Initialize target with the specified properties
     * @param {*} [init] initializing dictionary
     */
    init(init) {
        if(init && init.constructor === Object) {
            this.assign(init)
        }
        else {
            const name = this.constructor.defaultPropertyName
            if(typeof init !== TYPE_UNDEFINED && typeof name !== TYPE_UNDEFINED) {
                this.assign({ [name] : init })
            }
            else this.assign({})
        }
    }

    /**
     * Assign specified properties on the instance if they are not static
     * @param {{}} init
     */
    assign(init) {
        for(let prop in init) {
            if(init.hasOwnProperty(prop)) {
                this.setProperty(prop, init[prop])
            }
        }
    }

    /**
     * Set a single property if it is in this and not undefined or fallback otherwise
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(typeof value !== TYPE_UNDEFINED) {
            if(name in this) {
                this[name] = value
            }
            else this.setPropertyFallback(name, value)
        }
    }

    /**
     * Set a signle property on target if it is in target or mismatch otherwise
     * @param name
     * @param value
     */
    setPropertyFallback(name, value) {
        const target = this[TARGET_PROPERTY_NAME]
        if(name in target) {
            target[name] = value
        }
        else this.setPropertyMismatch(name)
    }

    /**
     * Handle a mismatched property assignment
     * @param {String} name mismatched property name
     */
    setPropertyMismatch(name) {
        throw Error(`The property "${ name }" is not found on the ${ this.constructor.name } instance`)
    }

    /**
     * Create the interface prototype object and define it's properties if they are specified
     * @param {{}} [init]
     * @returns {Object}
     */
    static create(init) {
        return Object.create(this.interface.prototype)
    }

    /**
     * Get an instance of the target or an instance itself
     * @param {Assembler|Object|*} object
     * @returns {Assembler|*|null}
     */
    static getInstanceOf(object) {
        return object instanceof Assembler?
            object :
            object[INSTANCE_PROPERTY_NAME] || null
    }

    /**
     * Get a target of the instance
     * @param {Assembler|*} instance
     * @returns {*}
     */
    static getTargetOf(instance) {
        return instance[TARGET_PROPERTY_NAME]
    }

    /**
     * This property name is used for the `init.constructor !== Object` case
     * @returns {undefined|String}
     * @abstract
     */
    static get defaultPropertyName() {}

    /**
     * A default interface of a target object
     * @returns {ObjectConstructor|*}
     */
    static get interface() {
        return Object
    }
}

Object.defineProperty(Assembler.prototype, TARGET_PROPERTY_NAME, { writable : true, value : null })


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTargetAssembler", function() { return EventTargetAssembler; });
/* harmony import */ var esmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


const { CustomEvent, EventTarget } = window
const { getTargetOf } = esmodule__WEBPACK_IMPORTED_MODULE_0__["Assembler"]

/**
 * @see https://www.w3.org/TR/dom/#interface-eventtarget
 */
class EventTargetAssembler extends esmodule__WEBPACK_IMPORTED_MODULE_0__["Assembler"] {
    /**
     * @param {String} type
     * @param {CustomEventInit|{}} [eventInitDict]
     */
    emit(type, eventInitDict) {
        getTargetOf(this).dispatchEvent(new CustomEvent(type, eventInitDict))
    }

    /**
     * @param {String} type
     * @param {Function} callback
     * @param {Object} [capture=false]
     */
    on(type, callback, capture = false) {
        getTargetOf(this).addEventListener(type, callback, capture)
    }

    /**
     * @param {String} type
     * @param {Function} callback
     * @param {Boolean} [capture=false]
     */
    un(type, callback, capture = false) {
        getTargetOf(this).removeEventListener(type, callback, capture)
    }

    /**
     * @returns {Window.EventTarget}
     * @override
     */
    static create() {
        return new EventTarget
    }

    /**
     * @returns {window.EventTarget}
     * @override
     */
    static get interface() {
        return EventTarget
    }
}

Object.defineProperty(
    EventTarget?
        EventTarget.prototype :
        window.Node.prototype, // MSIE fallback
    esmodule__WEBPACK_IMPORTED_MODULE_0__["INSTANCE_PROPERTY_NAME"],
    { writable : true, value : null })

/*
 * Workaround for JSDOM, where the Node still is not a superclass of the Attr
 * https://github.com/jsdom/jsdom/issues/1641
 */
if(Object.getPrototypeOf(window.Attr) !== window.Node) {
    Object.defineProperty(
        window.Attr.prototype,
        esmodule__WEBPACK_IMPORTED_MODULE_0__["INSTANCE_PROPERTY_NAME"],
        { writable : true, value : null })
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentNodeAssembler", function() { return ParentNodeAssembler; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _childnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);





const { prototype : { forEach, map } } = Array
const { Attr, Node, document } = window
const { getNodeOf } = _node__WEBPACK_IMPORTED_MODULE_3__["NodeAssembler"]
const DEFAULT_PROPERTY_NAME = 'childNodes'

/**
 * @see https://www.w3.org/TR/dom/#interface-parentnode
 * @abstract
 */
class ParentNodeAssembler extends _childnode__WEBPACK_IMPORTED_MODULE_2__["ChildNodeAssembler"] {
    /**
     * Append child nodes to the node
     * @param {String|Node|ChildNodeAssembler|Array|*} childNodes
     */
    append(...childNodes) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["flatten"])(childNodes).forEach(this.appendChild, this)
    }

    /**
     * @param {*} child
     * @returns {ChildNodeAssembler|*}
     */
    appendChild(child) {
        const node = this.node
        if(typeof child === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"]) {
            return this.getInstanceOf(node.appendChild(document.createTextNode(child)))
        }
        else if(child instanceof _node__WEBPACK_IMPORTED_MODULE_3__["NodeAssembler"] || child instanceof Node) {
            const instance = this.getInstanceOf(child)
            instance.parentNode = node
            return instance
        }
        else throw TypeError(`Failed to execute 'appendChild' on '${ this.constructor.name }': parameter is not of expected type.`)
    }

    /**
     * @param {ChildNodeAssembler|Node|*} object
     * @returns {Boolean}
     */
    contains(object) {
        return this.node.contains(getNodeOf(object))
    }

    /**
     * @param {Function|String|*} subject
     * @param {Function|String} [filter]
     * @returns {ChildNodeAssembler|*|null}
     */
    find(subject, filter) {
        const isString = typeof subject === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"]
        if(typeof filter === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]) {
            const instances = this.findAll(subject, filter)
            return instances[0] || null
        }
        let selector = isString?
            subject :
            subject.selector
        if(typeof filter === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"]) {
            selector += filter
        }
        const node = this.node.querySelector(selector)
        if(node) {
            const isAttr = subject === _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"] || _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"].isPrototypeOf(subject)
            const elementAssembler = isAttr || isString?
                this.constructor.elementAssembler :
                subject
            const element = this.getInstanceOf(node, elementAssembler)
            return isAttr?
                element.getAttributeNode(subject) :
                element
        }
        return null
    }

    /**
     * @param {Function|String|*} subject
     * @param {Function|String} [filter]
     * @returns {Array}
     */
    findAll(subject, filter) {
        const isString = typeof subject === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"]
        let selector = isString?
            subject :
            subject.selector
        if(typeof filter === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"]) {
            selector += filter
        }
        const nodeList = this.node.querySelectorAll(selector)
        const isAttr = subject === _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"] || _attr__WEBPACK_IMPORTED_MODULE_1__["AttrAssembler"].isPrototypeOf(subject)
        const elementAssembler = isAttr || isString?
            this.constructor.elementAssembler :
            subject
        const results = map.call(nodeList, node => {
            const element = this.getInstanceOf(node, elementAssembler)
            return isAttr?
                element.getAttributeNode(subject) :
                element
        })
        return typeof filter === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_FUNCTION"]?
            results.filter(filter) :
            results
    }

    /**
     * @returns {Boolean}
     */
    hasChildNodes() {
        return this.node.hasChildNodes()
    }

    /**
     * @param {ChildNodeAssembler|Node|*} node
     * @param {ChildNodeAssembler|Node|*} child
     * @returns {ChildNodeAssembler|*}
     */
    insertBefore(node, child) {
        return this.getInstanceOf(this.node.insertBefore(getNodeOf(node), getNodeOf(child)))
    }

    /**
     * Prepend child nodes to the node
     * @param {String|Node|ChildNodeAssembler|Array|*} childNodes
     */
    prepend(...childNodes) {
        this.node.prepend(...Object(_common__WEBPACK_IMPORTED_MODULE_0__["flatten"])(childNodes).map(child => {
            const node = getNodeOf(child)
            return node instanceof Attr?
                node.ownerElement :
                node
        }))
    }

    /**
     * @param {ChildNodeAssembler|Node|*} child
     */
    removeChild(child) {
        if(child instanceof _childnode__WEBPACK_IMPORTED_MODULE_2__["ChildNodeAssembler"]) {
            child.remove()
            return child
        }
        else {
            return this.getInstanceOf(this.node.removeChild(child))
        }
    }

    /**
     * @param {ChildNodeAssembler|Node|*} node
     * @param {ChildNodeAssembler|Node|*} child
     * @returns {ChildNodeAssembler|*}
     */
    replaceChild(node, child) {
        return this.getInstanceOf(this.node.replaceChild(getNodeOf(node), getNodeOf(child)))
    }

    /**
     * Set child nodes of the node
     * @param {String|Node|ChildNodeAssembler|Array|*} childNodes
     */
    set childNodes(childNodes) {
        if(this.hasChildNodes()) {
            this.childNodes.forEach(child => child.remove())
        }
        this.append(childNodes)
    }

    /**
     * Get an array of child nodes
     * @returns {*} {Array}
     */
    get childNodes() {
        return map.call(this.node.childNodes, node => this.getInstanceOf(node))
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get firstChild() {
        return this.getInstanceOf(this.node.firstChild)
    }

    /**
     * @returns {ChildNodeAssembler|*}
     */
    get lastChild() {
        return this.getInstanceOf(this.node.lastChild)
    }

    /**
     * Set a text content of the node
     * @param {String} textContent
     */
    set textContent(textContent) {
        this.node.textContent = textContent
    }

    /**
     * Get a text content of the node
     * @returns {String}
     */
    get textContent() {
        return this.node.textContent
    }

    /**
     * @returns {String}
     * @override
     */
    static get defaultPropertyName() {
        return DEFAULT_PROPERTY_NAME
    }
}

_node__WEBPACK_IMPORTED_MODULE_3__["NodeAssembler"].ParentNodeAssembler = ParentNodeAssembler


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildNodeAssembler", function() { return ChildNodeAssembler; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const { prototype : { indexOf } } = Array
const { Attr } = window
const { getNodeOf } = _node__WEBPACK_IMPORTED_MODULE_1__["NodeAssembler"]

/**
 * @see https://www.w3.org/TR/dom/#interface-childnode
 * @abstract
 */
class ChildNodeAssembler extends _node__WEBPACK_IMPORTED_MODULE_1__["NodeAssembler"] {
    /**
     * @param {ChildNodeAssembler|Node|String} siblings
     */
    after(...siblings) {
        this.node.after(...Object(_common__WEBPACK_IMPORTED_MODULE_0__["flatten"])(siblings).map(sibling => {
            const node = getNodeOf(sibling)
            return node instanceof Attr?
                node.ownerElement :
                node
        }))
    }

    /**
     * @param {ChildNodeAssembler|Node|String} siblings
     */
    before(...siblings) {
        this.node.before(...Object(_common__WEBPACK_IMPORTED_MODULE_0__["flatten"])(siblings).map(sibling => {
            const node = getNodeOf(sibling)
            return node instanceof Attr?
                node.ownerElement :
                node
        }))
    }

    /**
     * Remove node from tree
     */
    remove() {
        this.node.remove()
    }

    /**
     * @param {ChildNodeAssembler|Node|String} objects
     */
    replaceWith(...objects) {
        this.node.replaceWith(...Object(_common__WEBPACK_IMPORTED_MODULE_0__["flatten"])(objects).map(object => {
            const node = getNodeOf(object)
            return node instanceof Attr?
                node.ownerElement :
                node
        }))
    }

    /**
     * Get the node index among its sibling nodes or -1 if it has no parent
     * @returns {Number}
     */
    get index() {
        const parentNode = this.node.parentNode
        return parentNode?
            indexOf.call(parentNode.childNodes, this.node) :
            _common__WEBPACK_IMPORTED_MODULE_0__["NO_PARENT_INDEX"]
    }

    /**
     * Get a next sibling of the node
     * @returns {ChildNodeAssembler|null|*}
     */
    get nextSibling() {
        return this.getInstanceOf(this.node.nextSibling)
    }

    /**
     * Get a previous sibling of the node
     * @returns {ChildNodeAssembler|null|*}
     */
    get previousSibling() {
        return this.getInstanceOf(this.node.previousSibling)
    }

    /**
     * @param {ElementAssembler} parentElement
     */
    set parentElement(parentElement) {
        parentElement.appendChild(this.node)
    }

    /**
     * @returns {ElementAssembler}
     */
    get parentElement() {
        return this.getInstanceOf(this.node.parentElement, this.constructor.elementAssembler)
    }

    /**
     * Append the node to the specified parent
     * @param {ParentNodeAssembler|*} parentNode
     */
    set parentNode(parentNode) {
        parentNode.appendChild(this.node)
    }

    /**
     * Get the parent node
     * @returns {ParentNodeAssembler|*}
     */
    get parentNode() {
        return this.getInstanceOf(this.node.parentNode)
    }
}

_node__WEBPACK_IMPORTED_MODULE_1__["NodeAssembler"].ChildNodeAssembler = ChildNodeAssembler


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activedescendant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendant", function() { return _activedescendant__WEBPACK_IMPORTED_MODULE_0__["ActiveDescendant"]; });

/* harmony import */ var _atomic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Atomic", function() { return _atomic__WEBPACK_IMPORTED_MODULE_1__["Atomic"]; });

/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _autocomplete__WEBPACK_IMPORTED_MODULE_2__["Autocomplete"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttrType", function() { return _boolean__WEBPACK_IMPORTED_MODULE_3__["BooleanAttrType"]; });

/* harmony import */ var _busy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Busy", function() { return _busy__WEBPACK_IMPORTED_MODULE_4__["Busy"]; });

/* harmony import */ var _checked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checked", function() { return _checked__WEBPACK_IMPORTED_MODULE_5__["Checked"]; });

/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return _controls__WEBPACK_IMPORTED_MODULE_6__["Controls"]; });

/* harmony import */ var _colcount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColCount", function() { return _colcount__WEBPACK_IMPORTED_MODULE_7__["ColCount"]; });

/* harmony import */ var _colindex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColIndex", function() { return _colindex__WEBPACK_IMPORTED_MODULE_8__["ColIndex"]; });

/* harmony import */ var _colspan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColSpan", function() { return _colspan__WEBPACK_IMPORTED_MODULE_9__["ColSpan"]; });

/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return _current__WEBPACK_IMPORTED_MODULE_10__["Current"]; });

/* harmony import */ var _describedby__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescribedBy", function() { return _describedby__WEBPACK_IMPORTED_MODULE_11__["DescribedBy"]; });

/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return _details__WEBPACK_IMPORTED_MODULE_12__["Details"]; });

/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Disabled", function() { return _disabled__WEBPACK_IMPORTED_MODULE_13__["Disabled"]; });

/* harmony import */ var _dropeffect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropEffect", function() { return _dropeffect__WEBPACK_IMPORTED_MODULE_14__["DropEffect"]; });

/* harmony import */ var _errormessage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return _errormessage__WEBPACK_IMPORTED_MODULE_15__["ErrorMessage"]; });

/* harmony import */ var _expanded__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expanded", function() { return _expanded__WEBPACK_IMPORTED_MODULE_16__["Expanded"]; });

/* harmony import */ var _flowto__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlowTo", function() { return _flowto__WEBPACK_IMPORTED_MODULE_17__["FlowTo"]; });

/* harmony import */ var _grabbed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grabbed", function() { return _grabbed__WEBPACK_IMPORTED_MODULE_18__["Grabbed"]; });

/* harmony import */ var _haspopup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasPopup", function() { return _haspopup__WEBPACK_IMPORTED_MODULE_19__["HasPopup"]; });

/* harmony import */ var _hidden__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return _hidden__WEBPACK_IMPORTED_MODULE_20__["Hidden"]; });

/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Invalid", function() { return _invalid__WEBPACK_IMPORTED_MODULE_21__["Invalid"]; });

/* harmony import */ var _keyshortcuts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyShortCuts", function() { return _keyshortcuts__WEBPACK_IMPORTED_MODULE_22__["KeyShortCuts"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_23__["Label"]; });

/* harmony import */ var _labelledby__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelledBy", function() { return _labelledby__WEBPACK_IMPORTED_MODULE_24__["LabelledBy"]; });

/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return _level__WEBPACK_IMPORTED_MODULE_25__["Level"]; });

/* harmony import */ var _live__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Live", function() { return _live__WEBPACK_IMPORTED_MODULE_26__["Live"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_27__["Modal"]; });

/* harmony import */ var _multiline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiline", function() { return _multiline__WEBPACK_IMPORTED_MODULE_28__["Multiline"]; });

/* harmony import */ var _multiselectable__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiselectable", function() { return _multiselectable__WEBPACK_IMPORTED_MODULE_29__["Multiselectable"]; });

/* harmony import */ var _orientation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orientation", function() { return _orientation__WEBPACK_IMPORTED_MODULE_30__["Orientation"]; });

/* harmony import */ var _owns__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return _owns__WEBPACK_IMPORTED_MODULE_31__["Owns"]; });

/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return _placeholder__WEBPACK_IMPORTED_MODULE_32__["Placeholder"]; });

/* harmony import */ var _posinset__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PosInSet", function() { return _posinset__WEBPACK_IMPORTED_MODULE_33__["PosInSet"]; });

/* harmony import */ var _pressed__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pressed", function() { return _pressed__WEBPACK_IMPORTED_MODULE_34__["Pressed"]; });

/* harmony import */ var _readonly__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadOnly", function() { return _readonly__WEBPACK_IMPORTED_MODULE_35__["ReadOnly"]; });

/* harmony import */ var _relevant__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Relevant", function() { return _relevant__WEBPACK_IMPORTED_MODULE_36__["Relevant"]; });

/* harmony import */ var _required__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Required", function() { return _required__WEBPACK_IMPORTED_MODULE_37__["Required"]; });

/* harmony import */ var _roledescription__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoleDescription", function() { return _roledescription__WEBPACK_IMPORTED_MODULE_38__["RoleDescription"]; });

/* harmony import */ var _rowcount__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowCount", function() { return _rowcount__WEBPACK_IMPORTED_MODULE_39__["RowCount"]; });

/* harmony import */ var _rowindex__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowIndex", function() { return _rowindex__WEBPACK_IMPORTED_MODULE_40__["RowIndex"]; });

/* harmony import */ var _rowspan__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowSpan", function() { return _rowspan__WEBPACK_IMPORTED_MODULE_41__["RowSpan"]; });

/* harmony import */ var _selected__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Selected", function() { return _selected__WEBPACK_IMPORTED_MODULE_42__["Selected"]; });

/* harmony import */ var _setsize__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetSize", function() { return _setsize__WEBPACK_IMPORTED_MODULE_43__["SetSize"]; });

/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return _sort__WEBPACK_IMPORTED_MODULE_44__["Sort"]; });

/* harmony import */ var _valuemax__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueMax", function() { return _valuemax__WEBPACK_IMPORTED_MODULE_45__["ValueMax"]; });

/* harmony import */ var _valuemin__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueMin", function() { return _valuemin__WEBPACK_IMPORTED_MODULE_46__["ValueMin"]; });

/* harmony import */ var _valuenow__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueNow", function() { return _valuenow__WEBPACK_IMPORTED_MODULE_47__["ValueNow"]; });

/* harmony import */ var _valuetext__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueText", function() { return _valuetext__WEBPACK_IMPORTED_MODULE_48__["ValueText"]; });




















































/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendant", function() { return ActiveDescendant; });
/* harmony import */ var _idref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


/**
 * @summary Identifies the currently active element when DOM focus
 *  is on a composite widget, textbox, group, or application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant
 */
class ActiveDescendant extends _idref__WEBPACK_IMPORTED_MODULE_0__["IDREFAttrType"] {}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDREFAttrType", function() { return IDREFAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


/**
 * @summary Reference to the ID of another element in the same document
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref
 */
class IDREFAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {*} value {ElementAssembler|RoleAttrAssembler|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(typeof value === 'string') {
            super.value = value
        }
        else if('id' in value) {
            super.value = value.id
        }
    }

    /**
     * @returns {RoleAttrAssembler|ElementAssembler|null}
     */
    get value() {
        const value = super.value
        const element = value?
            this.ownerDocument.getElementById(value) :
            null
        return element && element.role || element
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return null
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIAAttrAssembler", function() { return ARIAAttrAssembler; });
/* harmony import */ var dommodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


const ARIA_PREFIX = 'aria-'
const ARIA_NAMESPACE_URI = 'http://www.w3.org/ns/wai-aria/'
const ARIA_NAMESPACE_PREFIX = 'aria'
const DEFAULT_VALUE = ''

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_attrs
 * @see https://www.w3.org/TR/html/dom.html#state-and-property-attributes
 * @see http://www.w3.org/ns/wai-aria/
 */
class ARIAAttrAssembler extends dommodule__WEBPACK_IMPORTED_MODULE_0__["AttrAssembler"] {
    /**
     * @returns {String}
     */
    static get defaultValue() {
        return DEFAULT_VALUE
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return ARIA_PREFIX + this.name.toLowerCase()
    }

    /**
     * @returns {String}
     */
    static get prefix() {
        return document instanceof XMLDocument?
            ARIA_NAMESPACE_PREFIX :
            super.prefix
    }

    /**
     * @returns {String}
     */
    static get namespace() {
        return document instanceof XMLDocument?
            ARIA_NAMESPACE_URI :
            super.namespace
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.localName
    }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttrAssembler", function() { return _attr__WEBPACK_IMPORTED_MODULE_0__["AttrAssembler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _attr__WEBPACK_IMPORTED_MODULE_0__["attr"]; });

/* harmony import */ var _characterdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterDataAssembler", function() { return _characterdata__WEBPACK_IMPORTED_MODULE_1__["CharacterDataAssembler"]; });

/* harmony import */ var _childnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildNodeAssembler", function() { return _childnode__WEBPACK_IMPORTED_MODULE_2__["ChildNodeAssembler"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentAssembler", function() { return _comment__WEBPACK_IMPORTED_MODULE_3__["CommentAssembler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return _comment__WEBPACK_IMPORTED_MODULE_3__["comment"]; });

/* harmony import */ var _doctype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeAssembler", function() { return _doctype__WEBPACK_IMPORTED_MODULE_4__["DocumentTypeAssembler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doctype", function() { return _doctype__WEBPACK_IMPORTED_MODULE_4__["doctype"]; });

/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentAssembler", function() { return _document__WEBPACK_IMPORTED_MODULE_5__["DocumentAssembler"]; });

/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementAssembler", function() { return _element__WEBPACK_IMPORTED_MODULE_6__["ElementAssembler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "element", function() { return _element__WEBPACK_IMPORTED_MODULE_6__["element"]; });

/* harmony import */ var _eventtarget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventTargetAssembler", function() { return _eventtarget__WEBPACK_IMPORTED_MODULE_7__["EventTargetAssembler"]; });

/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentFragmentAssembler", function() { return _fragment__WEBPACK_IMPORTED_MODULE_8__["DocumentFragmentAssembler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return _fragment__WEBPACK_IMPORTED_MODULE_8__["fragment"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeAssembler", function() { return _node__WEBPACK_IMPORTED_MODULE_9__["NodeAssembler"]; });

/* harmony import */ var _parentnode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParentNodeAssembler", function() { return _parentnode__WEBPACK_IMPORTED_MODULE_10__["ParentNodeAssembler"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAssembler", function() { return _text__WEBPACK_IMPORTED_MODULE_11__["TextAssembler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "text", function() { return _text__WEBPACK_IMPORTED_MODULE_11__["text"]; });

/**
 * @module dommodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @license MIT
 * @see https://www.w3.org/TR/dom
 * @see https://dom.spec.whatwg.org
 */














/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDataAssembler", function() { return CharacterDataAssembler; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _childnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const { CharacterData } = window
const DATA_PROPERTY_NAME = 'data'
const DEFAULT_DATA = ''

/**
 * @see https://www.w3.org/TR/dom/#interface-characterdata
 * @abstract
 */
class CharacterDataAssembler extends _childnode__WEBPACK_IMPORTED_MODULE_1__["ChildNodeAssembler"] {
    /**
     * Use the string type init as data
     * @param {*} init
     * @override
     */
    create(init) {
        if(typeof init === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"]) {
            init = { data : init }
        } 
        super.create(init)
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(name !== DATA_PROPERTY_NAME) {
            super.setProperty(name, value)
        }
    }

    /**
     * Set character data of the node
     * @param {String} data
     */
    set data(data) {
        this.node.data = data
    }

    /**
     * Get character data of the node
     * @returns {String}
     */
    get data() {
        return this.node.data
    }

    /**
     * @returns {String}
     */
    static get data() {
        return DEFAULT_DATA
    }

    /**
     * @returns {window.CharacterData}
     * @override
     */
    static get interface() {
        return CharacterData
    }
}

_node__WEBPACK_IMPORTED_MODULE_2__["NodeAssembler"].CharacterDataAssembler = CharacterDataAssembler


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentAssembler", function() { return CommentAssembler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return comment; });
/* harmony import */ var _characterdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const { Comment, document } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-comment
 */
class CommentAssembler extends _characterdata__WEBPACK_IMPORTED_MODULE_0__["CharacterDataAssembler"] {
    /**
     * Create the specified Comment node
     * @param {String} data
     * @returns {Comment}
     * @override
     */
    static create({ data = this.data } = this) {
        return document.createComment(data)
    }

    /**
     * @returns {window.Comment}
     * @override
     */
    static get interface() {
        return Comment
    }
}

_node__WEBPACK_IMPORTED_MODULE_1__["NodeAssembler"].CommentAssembler = CommentAssembler

/**
 * Comment assembler factory
 * @param {{}|Node|String|NodeAssembler|Array} [init]
 * @returns {CommentAssembler}
 */
function comment(init) {
    return new CommentAssembler(init)
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTypeAssembler", function() { return DocumentTypeAssembler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doctype", function() { return doctype; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _childnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);





const { DocumentType, document : { implementation } } = window
const DEFAULT_PUBLIC_ID = ''
const DEFAULT_SYSTEM_ID = ''
const IGNORED_PROPERTY_NAMES = ['qualifiedName', 'publicId', 'systemId']

/**
 * @see https://www.w3.org/TR/dom/#interface-documenttype
 */
class DocumentTypeAssembler extends _childnode__WEBPACK_IMPORTED_MODULE_1__["ChildNodeAssembler"] {
    /**
     * @param {*} [init]
     * @override
     */
    create(init) {
        if(typeof init === _common__WEBPACK_IMPORTED_MODULE_0__["TYPE_STRING"]) {
            init = { qualifiedName : init }
        }
        super.create(init)
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(!IGNORED_PROPERTY_NAMES.includes(name)) {
            super.setProperty(name, value)
        }
    }

    /**
     * @param {ParentNodeAssembler|*} parentNode
     * @override
     */
    set parentNode(parentNode) {
        if(parentNode instanceof _document__WEBPACK_IMPORTED_MODULE_2__["DocumentAssembler"]) {
            parentNode.doctype = this
        }
        else {
            const node = this.node
            const firstChild = parentNode.firstChild
            if(firstChild) {
                if(firstChild instanceof DocumentType) {
                    parentNode.replaceChild(node, firstChild)
                }
                else parentNode.insertBefore(node, firstChild)
            }
            else parentNode.appendChild(node)
        }
    }

    /**
     * @returns {*}
     * @override
     */
    get parentNode() {
        return super.parentNode
    }

    /**
     * Create the specified DocumentType node
     * @param {{}} [init]
     * @returns {DocumentType}
     * @override
     */
    static create(init) {
        const {
            qualifiedName = this.qualifiedName,
            publicId = this.publicId,
            systemId = this.systemId
        } = init || this
        return implementation.createDocumentType(qualifiedName, publicId, systemId)
    }

    /**
     * @returns {window.DocumentType}
     * @override
     */
    static get interface() {
        return DocumentType
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return this.documentAssembler.elementAssembler.qualifiedName
    }

    /**
     * @returns {String}
     */
    static get publicId() {
        return DEFAULT_PUBLIC_ID
    }

    /**
     * @returns {String}
     */
    static get systemId() {
        return DEFAULT_SYSTEM_ID
    }
}

_node__WEBPACK_IMPORTED_MODULE_3__["NodeAssembler"].DocumentTypeAssembler = DocumentTypeAssembler

/**
 * DocumentType assembler factory
 * @param {Node|{}|String} [init]
 * @returns {DocumentTypeAssembler}
 */
function doctype(init) {
    return new DocumentTypeAssembler(init)
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAssembler", function() { return DocumentAssembler; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _doctype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _parentnode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);






const {
    Document,
    DocumentType,
    Element,
    document : { implementation }
} = window

let isConstructorSupported = true
try {
    new Document
}
catch(error) {
    isConstructorSupported = false
}

/**
 * @see https://www.w3.org/TR/dom/#interface-document
 */
class DocumentAssembler extends _parentnode__WEBPACK_IMPORTED_MODULE_4__["ParentNodeAssembler"] {
    /**
     * @param {String} id
     * @returns {ElementAssembler}
     */
    getElementById(id) {
        return this.getInstanceOf(this.node.getElementById(id))
    }

    /**
     * Set the associated document type declaration node
     * @param {*} doctype node or assembler
     */
    set doctype(doctype) {
        if(doctype instanceof _doctype__WEBPACK_IMPORTED_MODULE_1__["DocumentTypeAssembler"]) {
            doctype.parentNode = this.node
        }
        else {
            const node = this.node
            const firstChild = node.firstChild
            if(firstChild) {
                if(firstChild instanceof DocumentType) {
                    node.replaceChild(doctype, firstChild)
                }
                else node.insertBefore(doctype, firstChild)
            }
            else node.appendChild(doctype)
        }
    }

    /**
     * The associatied document type declaration node
     * @returns {DocumentTypeAssembler|DocumentAssembler.doctypeAssembler|null}
     */
    get doctype() {
        return this.getInstanceOf(this.node.doctype, this.constructor.doctypeAssembler)
    }

    /**
     * Set the root document element
     * @param {*} documentElement node or assembler or init dictionary
     */
    set documentElement(documentElement) {
        const node = this.node
        const element = this.documentElement
        if(documentElement instanceof _element__WEBPACK_IMPORTED_MODULE_2__["ElementAssembler"]) {
            if(element) element.remove()
            documentElement.parentNode = node
        }
        else if(documentElement instanceof Element) {
            if(element) element.remove()
            node.appendChild(documentElement)
        }
        else if(documentElement === null) {
            if(element) element.remove()
        }
        else {
            if(element) element.init(documentElement)
            else {
                const { elementAssembler } = this.constructor
                const element = new elementAssembler(documentElement)
                element.parentNode = node
            }
        }
    }

    /**
     * The root document element
     * @returns {ElementAssembler|DocumentAssembler.elementAssembler|null} Element
     */
    get documentElement() {
        return this.getInstanceOf(this.node.documentElement, this.constructor.elementAssembler)
    }

    /**
     * Create a new Document node
     * @returns {Document}
     * @override
     */
    static create() {
        return isConstructorSupported?
            new Document :
            implementation.createDocument(_common__WEBPACK_IMPORTED_MODULE_0__["EMPTY_STRING"], _common__WEBPACK_IMPORTED_MODULE_0__["EMPTY_STRING"], null)
    }

    /**
     * @returns {window.Document}
     * @override
     */
    static get interface() {
        return Document
    }
}

_node__WEBPACK_IMPORTED_MODULE_3__["NodeAssembler"].DocumentAssembler = DocumentAssembler 


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFragmentAssembler", function() { return DocumentFragmentAssembler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return fragment; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _parentnode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



const { DocumentFragment, document } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-documentfragment
 */
class DocumentFragmentAssembler extends _parentnode__WEBPACK_IMPORTED_MODULE_1__["ParentNodeAssembler"] {
    /**
     * @returns {DocumentFragment}
     * @override
     */
    static create(init) {
        return document.createDocumentFragment()
    }

    /**
     * @returns {window.DocumentFragment}
     * @override
     */
    static get interface() {
        return DocumentFragment
    }
}

_node__WEBPACK_IMPORTED_MODULE_0__["NodeAssembler"].DocumentFragmentAssembler = DocumentFragmentAssembler

/**
 * DocumentFragment assembler factory
 * @param {{}|*} [init]
 * @returns {DocumentFragmentAssembler}
 */
function fragment(init) {
    return new DocumentFragmentAssembler(init)
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAssembler", function() { return TextAssembler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony import */ var _characterdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const { Text, document } = window

/**
 * @see https://www.w3.org/TR/dom/#interface-text
 */
class TextAssembler extends _characterdata__WEBPACK_IMPORTED_MODULE_0__["CharacterDataAssembler"] {
    /**
     * @param {String} data
     * @returns {Text}
     * @override
     */
    static create({ data = this.data } = this) {
        return document.createTextNode(data)
    }

    /**
     * @returns {window.Text}
     * @override
     */
    static get interface() {
        return Text
    }
}

_node__WEBPACK_IMPORTED_MODULE_1__["NodeAssembler"].TextAssembler = TextAssembler

/**
 * Text assembler factory
 * @param {{}|Node|String|NodeAssembler|Array} [init]
 * @returns {TextAssembler}
 */
function text(init) {
    return new TextAssembler(init)
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atomic", function() { return Atomic; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates whether assistive technologies will present all,
 *  or only parts of, the changed region based on the change
 *  notifications defined by the aria-relevant attribute.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-atomic
 */
class Atomic extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttrType", function() { return BooleanAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


const TOKEN_TRUE = 'true'

/**
 * @summary Value representing either true or false.
 *  The default value for this value type is false unless otherwise specified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_true-false
 */
class BooleanAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {*} value {Boolean}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Boolean}
     */
    get value() {
        return this.node.value === TOKEN_TRUE
    }

    /**
     * @param {Boolean} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === false
    }

    /**
     * @returns {Boolean}
     */
    static get defaultValue() {
        return false
    }
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


const TOKEN_NONE = 'none'

/**
 * @summary Indicates whether inputting text could trigger display
 *  of one or more predictions of the user's intended value for an input
 *  and specifies how predictions would be presented if they are made.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete
 */
class Autocomplete extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenAttrType", function() { return TokenAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


const TOKEN_UNDEFINED = 'undefined'

/**
 * @summary One of a limited set of allowed values. An explicit value
 *  of undefined for this type is the equivalent of providing no value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token
 */
class TokenAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {*} value {String|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || value === TOKEN_UNDEFINED
    }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Busy", function() { return Busy; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates an element is being modified and that assistive technologies MAY want
 *  to wait until the modifications are complete before exposing them to the user.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-busy
 */
class Busy extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checked", function() { return Checked; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


/**
 * @summary Indicates the current "checked" state of checkboxes,
 *  radio buttons, and other widgets.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-checked
 */
class Checked extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony import */ var _idreflist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


/**
 * @summary Identifies the element (or elements) whose contents
 *  or presence are controlled by the current element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-controls
 */
class Controls extends _idreflist__WEBPACK_IMPORTED_MODULE_0__["IDREFListAttrType"] {}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDREFListAttrType", function() { return IDREFListAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


const ID_REF_SEPARATOR = ' '
const idMap = ({ id }) => id

/**
 * @summary A list of one or more ID references.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_idref_list
 */
class IDREFListAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {*} value {Array|String|*}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else {
            if(Array.isArray(value)) {
                this.node.value = value.map(idMap).join(ID_REF_SEPARATOR)
            }
            else {
                const isObject = typeof value === 'object'
                this.node.value = isObject && 'id' in value?
                    value.id :
                    value
            }
        }
    }

    /**
     * @returns {NodeAssembler[]}
     */
    get value() {
        const value = this.node.value
        return value?
            value.split(ID_REF_SEPARATOR).map(id => {
                const element = id?
                    this.ownerDocument.getElementById(id) :
                    null
                return element && element.role || element
            }) : []
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || (Array.isArray(value) && !value.length)
    }

    /**
     * @returns {Array}
     */
    static get defaultValue() {
        return []
    }
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColCount", function() { return ColCount; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines the total number of columns in a table, grid, or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-colcount
 */
class ColCount extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerAttrType", function() { return IntegerAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


/**
 * @summary A numerical value without a fractional component.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_integer
 */
class IntegerAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(this.node.value)
    }

    /**
     * @param {Number} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return isNaN(value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return NaN
    }
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColIndex", function() { return ColIndex; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-colindex
 */
class ColIndex extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColSpan", function() { return ColSpan; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines the number of columns spanned by a cell
 *  or gridcell within a table, grid, or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-colspan
 */
class ColSpan extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


const TOKEN_FALSE = 'false'

/**
 * @summary Indicates the element that represents the current item
 *  within a container or set of related elements.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-current
 */
class Current extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescribedBy", function() { return DescribedBy; });
/* harmony import */ var _idreflist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


/**
 * @summary Identifies the element (or elements) that describes the object.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-describedby
 */
class DescribedBy extends _idreflist__WEBPACK_IMPORTED_MODULE_0__["IDREFListAttrType"] {}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony import */ var _idref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


/**
 * @summary Identifies the element that provides a detailed, extended description for the object.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-details
 */
class Details extends _idref__WEBPACK_IMPORTED_MODULE_0__["IDREFAttrType"] {}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disabled", function() { return Disabled; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates that the element is perceivable but disabled,
 *  so it is not editable or otherwise operable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-disabled
 */
class Disabled extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {
    /**
     * @param {*} [init]
     */
    init(init) {
        this._tabIndex = NaN
        super.init(init)
    }

    /**
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
        if(ownerElement.hasAttribute('tabindex')) {
            this._tabIndex = ownerElement.tabIndex
            ownerElement.removeAttribute('tabIndex')
        }
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        return super.ownerElement
    }

    /**
     * Revert tabIndex value on remove
     */
    remove() {
        if(!isNaN(this._tabIndex)) {
            this.ownerElement.tabIndex = this._tabIndex
        }
        super.remove()
    }
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropEffect", function() { return DropEffect; });
/* harmony import */ var _tokenlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);


/**
 * @summary [Deprecated in ARIA 1.1]
 *  Indicates what functions can be performed when a dragged object is released on the drop target.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect
 * @deprecated
 */
class DropEffect extends _tokenlist__WEBPACK_IMPORTED_MODULE_0__["TokenListAttrType"] {}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListAttrType", function() { return TokenListAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


const TOKEN_SEPARATOR = ' '

/**
 * @summary A list of one or more tokens.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_token_list
 */
class TokenListAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {*} value {String[]|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else if(Array.isArray(value)) {
            const list = value.filter(Boolean)
            if(list.length) {
                this.node.value = list.join(TOKEN_SEPARATOR)
            }
            else this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String[]}
     */
    get value() {
        const value = this.node.value
        return value? value.split(TOKEN_SEPARATOR) : []
    }

    /**
     * @param {*} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return !value || (Array.isArray(value) && !value.length)
    }

    /**
     * @returns {Array}
     */
    static get defaultValue() {
        return []
    }
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var _idref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


/**
 * @summary Identifies the element that provides an error message for the object.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage
 */
class ErrorMessage extends _idref__WEBPACK_IMPORTED_MODULE_0__["IDREFAttrType"] {}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expanded", function() { return Expanded; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


/**
 * @summary Indicates whether the element, or another grouping
 *  element it controls, is currently expanded or collapsed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
 */
class Expanded extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowTo", function() { return FlowTo; });
/* harmony import */ var _idreflist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


/**
 * @summary dentifies the next element (or elements) in an alternate reading order
 *  of content which, at the user's discretion, allows assistive technology
 *  to override the general default of reading in document source order.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-flowto
 */
class FlowTo extends _idreflist__WEBPACK_IMPORTED_MODULE_0__["IDREFListAttrType"] {}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grabbed", function() { return Grabbed; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


/**
 * @summary Indicates an element's "grabbed" state in a drag-and-drop operation.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed
 * @deprecated in ARIA 1.1
 */
class Grabbed extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasPopup", function() { return HasPopup; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates the availability and type of interactive popup element,
 *  such as menu or dialog, that can be triggered by an element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
 */
class HasPopup extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return Hidden; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates whether the element is exposed to an accessibility API.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-hidden
 */
class Hidden extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invalid", function() { return Invalid; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


const TOKEN_FALSE = 'false'

/**
 * @summary Indicates the entered value does not conform to the format expected by the application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-invalid
 */
class Invalid extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_FALSE
    }
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyShortCuts", function() { return KeyShortCuts; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);


/**
 * @summary Indicates keyboard shortcuts that an author has implemented
 *  to activate or give focus to an element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts
 */
class KeyShortCuts extends _string__WEBPACK_IMPORTED_MODULE_0__["StringAttrType"] {}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringAttrType", function() { return StringAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


/**
 * @summary Unconstrained value type.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_string
 */
class StringAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {String} value
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return value === this.defaultValue
    }
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);


/**
 * @summary Defines a string value that labels the current element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-label
 */
class Label extends _string__WEBPACK_IMPORTED_MODULE_0__["StringAttrType"] {}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelledBy", function() { return LabelledBy; });
/* harmony import */ var _idreflist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


/**
 * @summary Identifies the element (or elements) that labels the current element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby
 */
class LabelledBy extends _idreflist__WEBPACK_IMPORTED_MODULE_0__["IDREFListAttrType"] {}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines the hierarchical level of an element within a structure.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-level
 */
class Level extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live", function() { return Live; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


const TOKEN_OFF = 'off'

/**
 * @summary Indicates that an element will be updated, and describes
 *  the types of updates the user agents, assistive technologies,
 *  and user can expect from the live region.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-live
 */
class Live extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_OFF
    }
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates whether an element is modal when displayed.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-modal
 */
class Modal extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiline", function() { return Multiline; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates whether a text box accepts multiple lines of input or only a single line.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-multiline
 */
class Multiline extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiselectable", function() { return Multiselectable; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates that the user may select more than one item
 *  from the current selectable descendants.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable
 */
class Multiselectable extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orientation", function() { return Orientation; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


/**
 * @summary Indicates whether the element's orientation
 *  is horizontal, vertical, or unknown/ambiguous.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-orientation
 */
class Orientation extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Owns", function() { return Owns; });
/* harmony import */ var _idreflist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


/**
 * @summary Identifies an element (or elements) in order to define a visual,
 *  functional, or contextual parent/child relationship between DOM elements
 *  where the DOM hierarchy cannot be used to represent the relationship.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-owns
 */
class Owns extends _idreflist__WEBPACK_IMPORTED_MODULE_0__["IDREFListAttrType"] {}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return Placeholder; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);


/**
 * @summary Defines a short hint (a word or short phrase) intended
 *  to aid the user with data entry when the control has no value.
 *  A hint could be a sample value or a brief description of the expected format.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder
 */
class Placeholder extends _string__WEBPACK_IMPORTED_MODULE_0__["StringAttrType"] {}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosInSet", function() { return PosInSet; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines an element's number or position in the current set of listitems
 *  or treeitems. Not required if all elements in the set are present in the DOM.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-posinset
 */
class PosInSet extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pressed", function() { return Pressed; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


/**
 * @summary Indicates the current "pressed" state of toggle buttons.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
 */
class Pressed extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {
    /**
     * @param {*} [init]
     */
    init(init) {
        super.init(init)
        this.onClick = this.onClick.bind(this)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        this.value = String(this.value === 'false')
    }

    /**
     * @returns {AttrAssembler}
     */
    remove() {
        this.ownerElement.un('click', this.onClick)
        return super.remove()
    }

    /**
     * @param {Button|null|*} ownerElement
     */
    set ownerElement(ownerElement) {
        if(super.ownerElement = ownerElement) {
            this.getInstanceOf(ownerElement).on('click', this.onClick)
        }
    }

    /**
     * @returns {Button|null|*}
     */
    get ownerElement() {
        return super.ownerElement
    }
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnly", function() { return ReadOnly; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates that the element is not editable, but is otherwise operable.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
 */
class ReadOnly extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relevant", function() { return Relevant; });
/* harmony import */ var _tokenlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);


/**
 * @summary Indicates what notifications the user agent will trigger
 *  when the accessibility tree within a live region is modified.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-relevant
 */
class Relevant extends _tokenlist__WEBPACK_IMPORTED_MODULE_0__["TokenListAttrType"] {}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Required", function() { return Required; });
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


/**
 * @summary Indicates that user input is required on the element before a form may be submitted.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-required
 */
class Required extends _boolean__WEBPACK_IMPORTED_MODULE_0__["BooleanAttrType"] {}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDescription", function() { return RoleDescription; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);


/**
 * @summary Defines a human-readable, author-localized description for the role of an element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription
 */
class RoleDescription extends _string__WEBPACK_IMPORTED_MODULE_0__["StringAttrType"] {}


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowCount", function() { return RowCount; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines the total number of rows in a table, grid, or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount
 */
class RowCount extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowIndex", function() { return RowIndex; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines an element's row index or position with respect
 *  to the total number of rows within a table, grid, or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex
 */
class RowIndex extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowSpan", function() { return RowSpan; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines the number of rows spanned by a cell
 *  or gridcell within a table, grid, or treegrid.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan
 */
class RowSpan extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selected", function() { return Selected; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


/**
 * @summary Indicates the current "selected" state of various widgets.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-selected
 */
class Selected extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSize", function() { return SetSize; });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);


/**
 * @summary Defines the number of items in the current set of listitems or treeitems.
 *  Not required if all elements in the set are present in the DOM.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-setsize
 */
class SetSize extends _integer__WEBPACK_IMPORTED_MODULE_0__["IntegerAttrType"] {}


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


const TOKEN_NONE = 'none'

/**
 * @summary Indicates if items in a table or grid are sorted in ascending or descending order.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-sort
 */
class Sort extends _token__WEBPACK_IMPORTED_MODULE_0__["TokenAttrType"] {
    /**
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return super.removeOnValue(value) || value === TOKEN_NONE
    }
}


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueMax", function() { return ValueMax; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);


/**
 * @summary Defines the maximum allowed value for a range widget.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax
 */
class ValueMax extends _number__WEBPACK_IMPORTED_MODULE_0__["NumberAttrType"] {}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberAttrType", function() { return NumberAttrType; });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


/**
 * @summary Any real numerical value.
 * @see https://www.w3.org/TR/wai-aria-1.1/#valuetype_number
 */
class NumberAttrType extends _aria__WEBPACK_IMPORTED_MODULE_0__["ARIAAttrAssembler"] {
    /**
     * @param {*} value {Number|String}
     */
    set value(value) {
        if(this.constructor.removeOnValue(value)) {
            this.remove()
        }
        else this.node.value = String(value)
    }

    /**
     * @returns {Number}
     */
    get value() {
        return Number(this.node.value)
    }

    /**
     * @param {Number} value
     * @returns {Boolean}
     */
    static removeOnValue(value) {
        return isNaN(value)
    }

    /**
     * @returns {Number}
     */
    static get defaultValue() {
        return NaN
    }
}


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueMin", function() { return ValueMin; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);


/**
 * @summary Defines the minimum allowed value for a range widget.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin
 */
class ValueMin extends _number__WEBPACK_IMPORTED_MODULE_0__["NumberAttrType"] {}


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueNow", function() { return ValueNow; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);


/**
 * @summary Defines the current value for a range widget.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow
 */
class ValueNow extends _number__WEBPACK_IMPORTED_MODULE_0__["NumberAttrType"] {}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueText", function() { return ValueText; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);


/**
 * @summary Defines the human readable text alternative of aria-valuenow for a range widget.
 * @see https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext
 */
class ValueText extends _string__WEBPACK_IMPORTED_MODULE_0__["StringAttrType"] {}


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var ariamodule_lib_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(195);
/* harmony import */ var _album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(200);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206);
/* harmony import */ var _navbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(201);





// import gallery from './data/gallery'

const SLIDESHOW_DELAY = 5000
const TOUCH_DISTANCE_THRESHOLD = 50
const TOUCH_INTERVAL = 500

const body = document.body
const parser = new DOMParser

class Gallery extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__["Div"] {
    create(init) {
        if(init && init.constructor === Object && init.hasOwnProperty('selector')) {
            this.node = document.querySelector(init.selector)
        }
        else super.create(init)
    }

    setProperty(name, value) {
        if(name !== 'selector') {
            super.setProperty(name, value)
        }
    }

    init(init) {
        const data = this.find(htmlmodule__WEBPACK_IMPORTED_MODULE_0__["NoScript"]).textContent
        this._nextSlideIndex = 1
        this.classList = 'gallery'
        this.data = data
        this.on('albumready', event => this.createAlbum())
        this.on('slideready', this.onSlideReady = this.onSlideReady.bind(this))
        this.on('switch', event => this.applyTheme())
        this.on('touchstart', this.onTouchStart.bind(this))
        this.on('transitionend', event => this.transition = false)
        document.addEventListener('click', this.onClick.bind(this))
        document.addEventListener('keydown', this.onKeyDown.bind(this))
        super.init(init)
    }

    applyTheme() {
        const album = this.find(_album__WEBPACK_IMPORTED_MODULE_2__["Album"], '[data-position=current]')
        const slide = album.find(_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"], '[data-position=current]')
        const { background, content } = slide.dataset
        body.style.backgroundColor = background || ''
        body.className = content || ''
    }

    createAlbum() {
        const group = this._group
        const index = group.children.length
        const items = this._items
        const item = items[index]
        if(item) {
            new _album__WEBPACK_IMPORTED_MODULE_2__["Album"]({
                parentElement : group,
                data : item,
                position : !index?
                    'current' :
                    index === 1?
                        'next' :
                        index === items.length - 1? 'prev' : ''
            })
        }
        else {
            this.busy = false
            this.emit('ready')
        }
    }

    nextAlbum() {
        const next = this.find(_album__WEBPACK_IMPORTED_MODULE_2__["Album"], '[data-position=next]')
        if(next && !this.transition) {
            const prev = this.find(_album__WEBPACK_IMPORTED_MODULE_2__["Album"], '[data-position=prev]')
            const nextNext = next.next
            if(prev) {
                prev.position = ''
            }
            this.currentAlbum.position = 'prev'
            next.position = 'current'
            if(nextNext === prev) {
                prev.style.transition = 'none'
                prev.position = 'next'
                setTimeout(() => prev.style.transition = '', 500)
            }
            else nextNext.position = 'next'
            this.applyTheme()
            this.transition = true
            return next
        }
        return null
    }

    nextSlide() {
        return this.currentAlbum.nextSlide()
    }

    onClick(event) {
        const target = event.target
        if(target.closest('button') || target.closest('details')) {
            this.live = 'off'
        }
    }

    onKeyDown(event) {
        const key = event.key
        if(key === 'ArrowDown') {
            this.nextAlbum()
        }
        else if(key === 'ArrowUp') {
            this.prevAlbum()
        }
        if(key.startsWith('Arrow')) {
            this.live = 'off'
        }
    }

    onSlideReady(event) {
        this.un('slideready', this.onSlideReady)
        this.getInstanceOf(document.body, htmlmodule__WEBPACK_IMPORTED_MODULE_0__["Body"]).busy = false
        this.live = 'assertive'
    }

    onTouchStart(event) {
        const { clientX : startX, clientY : startY } = event.changedTouches[0]
        const timeStamp = Date.now()
        this.node.ontouchend = event => {
            if(timeStamp + TOUCH_INTERVAL > Date.now()) {
                const { clientX : endX, clientY : endY } = event.changedTouches[0]
                if(endX > startX + TOUCH_DISTANCE_THRESHOLD) {
                    this.prevSlide()
                    this.live = 'off'
                }
                else if(startX > endX + TOUCH_DISTANCE_THRESHOLD) {
                    this.nextSlide()
                    this.live = 'off'
                }
                else if(endY > startY + TOUCH_DISTANCE_THRESHOLD) {
                    this.prevAlbum()
                    this.live = 'off'
                }
                else if(startY > endY + TOUCH_DISTANCE_THRESHOLD) {
                    this.nextAlbum()
                    this.live = 'off'
                }
            }
            this.node.ontouchend = null
        }
    }

    prevAlbum() {
        const prev = this.find(_album__WEBPACK_IMPORTED_MODULE_2__["Album"], '[data-position=prev]')
        if(prev && !this.transition) {
            const next = this.find(_album__WEBPACK_IMPORTED_MODULE_2__["Album"], '[data-position=next]')
            const prevPrev = prev.prev
            if(next) {
                next.position = ''
            }
            this.currentAlbum.position = 'next'
            prev.position = 'current'
            if(prevPrev === next) {
                next.style.transition = 'none'
                next.position = 'prev'
                setTimeout(() => next.style.transition = '', 500)
            }
            else prevPrev.position = 'prev'
            this.transition = true
            this.applyTheme()
        }
    }

    prevSlide() {
        return this.currentAlbum.prevSlide()
    }

    startTimer() {
        setTimeout(() => {
            if(this.live !== 'off') {
                if(this._nextSlideIndex) {
                    const slide = this.nextSlide()
                    if(slide) {
                        this._nextSlideIndex = slide.elementIndex
                    }
                    this.startTimer()
                }
                else {
                    this.nextAlbum()
                    this._nextSlideIndex = 1
                    this.startTimer()
                }
            }
        }, SLIDESHOW_DELAY)
    }

    get currentAlbum() {
        return this.find(_album__WEBPACK_IMPORTED_MODULE_2__["Album"], '[data-position=current]')
    }

    set data(data) {
        const dom = parser.parseFromString(data, 'text/html')
        const items = this._items = dom.querySelectorAll('article')
        const multiple = items.length > 1
        this.children = [
            multiple && new _navbutton__WEBPACK_IMPORTED_MODULE_4__["PrevAlbum"]({ onclick : event => this.prevAlbum() }),
            this._group = new ariamodule_lib_group__WEBPACK_IMPORTED_MODULE_1__["Group"],
            multiple && new _navbutton__WEBPACK_IMPORTED_MODULE_4__["NextAlbum"]({ onclick : event => this.nextAlbum() }),
        ]
        this.busy = true
        this.createAlbum()
    }

    set live(live) {
        if(live !== 'off') {
            this.startTimer()
        }
        super.live = live
    }

    get live() {
        return super.live || 'off'
    }

    set transition(transition) {
        this.classList.toggle('transition', transition)
    }

    get transition() {
        return this.classList.contains('transition')
    }
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _a__WEBPACK_IMPORTED_MODULE_0__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _a__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _abbr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Abbr", function() { return _abbr__WEBPACK_IMPORTED_MODULE_1__["Abbr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "abbr", function() { return _abbr__WEBPACK_IMPORTED_MODULE_1__["abbr"]; });

/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return _address__WEBPACK_IMPORTED_MODULE_2__["Address"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "address", function() { return _address__WEBPACK_IMPORTED_MODULE_2__["address"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return _area__WEBPACK_IMPORTED_MODULE_3__["Area"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area__WEBPACK_IMPORTED_MODULE_3__["area"]; });

/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return _article__WEBPACK_IMPORTED_MODULE_4__["Article"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "article", function() { return _article__WEBPACK_IMPORTED_MODULE_4__["article"]; });

/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return _aside__WEBPACK_IMPORTED_MODULE_5__["Aside"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "aside", function() { return _aside__WEBPACK_IMPORTED_MODULE_5__["aside"]; });

/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLAudio", function() { return _audio__WEBPACK_IMPORTED_MODULE_6__["HTMLAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "audio", function() { return _audio__WEBPACK_IMPORTED_MODULE_6__["audio"]; });

/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "B", function() { return _b__WEBPACK_IMPORTED_MODULE_7__["B"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _b__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _base__WEBPACK_IMPORTED_MODULE_8__["Base"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base", function() { return _base__WEBPACK_IMPORTED_MODULE_8__["base"]; });

/* harmony import */ var _bdi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bdi", function() { return _bdi__WEBPACK_IMPORTED_MODULE_9__["Bdi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bdi", function() { return _bdi__WEBPACK_IMPORTED_MODULE_9__["bdi"]; });

/* harmony import */ var _bdo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bdo", function() { return _bdo__WEBPACK_IMPORTED_MODULE_10__["Bdo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bdo", function() { return _bdo__WEBPACK_IMPORTED_MODULE_10__["bdo"]; });

/* harmony import */ var _blockquote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlockQuote", function() { return _blockquote__WEBPACK_IMPORTED_MODULE_11__["BlockQuote"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockquote", function() { return _blockquote__WEBPACK_IMPORTED_MODULE_11__["blockquote"]; });

/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return _body__WEBPACK_IMPORTED_MODULE_12__["Body"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "body", function() { return _body__WEBPACK_IMPORTED_MODULE_12__["body"]; });

/* harmony import */ var _br__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Br", function() { return _br__WEBPACK_IMPORTED_MODULE_13__["Br"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "br", function() { return _br__WEBPACK_IMPORTED_MODULE_13__["br"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_14__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "button", function() { return _button__WEBPACK_IMPORTED_MODULE_14__["button"]; });

/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _canvas__WEBPACK_IMPORTED_MODULE_15__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return _canvas__WEBPACK_IMPORTED_MODULE_15__["canvas"]; });

/* harmony import */ var _caption__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Caption", function() { return _caption__WEBPACK_IMPORTED_MODULE_16__["Caption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caption", function() { return _caption__WEBPACK_IMPORTED_MODULE_16__["caption"]; });

/* harmony import */ var _cite__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cite", function() { return _cite__WEBPACK_IMPORTED_MODULE_17__["Cite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cite", function() { return _cite__WEBPACK_IMPORTED_MODULE_17__["cite"]; });

/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(101);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _code__WEBPACK_IMPORTED_MODULE_18__["Code"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "code", function() { return _code__WEBPACK_IMPORTED_MODULE_18__["code"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_19__["Col"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "col", function() { return _col__WEBPACK_IMPORTED_MODULE_19__["col"]; });

/* harmony import */ var _colgroup__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColGroup", function() { return _colgroup__WEBPACK_IMPORTED_MODULE_20__["ColGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colgroup", function() { return _colgroup__WEBPACK_IMPORTED_MODULE_20__["colgroup"]; });

/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return _data__WEBPACK_IMPORTED_MODULE_21__["Data"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "data", function() { return _data__WEBPACK_IMPORTED_MODULE_21__["data"]; });

/* harmony import */ var _datalist__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataList", function() { return _datalist__WEBPACK_IMPORTED_MODULE_22__["DataList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "datalist", function() { return _datalist__WEBPACK_IMPORTED_MODULE_22__["datalist"]; });

/* harmony import */ var _dd__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(107);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dd", function() { return _dd__WEBPACK_IMPORTED_MODULE_23__["Dd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dd", function() { return _dd__WEBPACK_IMPORTED_MODULE_23__["dd"]; });

/* harmony import */ var _del__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(108);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Del", function() { return _del__WEBPACK_IMPORTED_MODULE_24__["Del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _del__WEBPACK_IMPORTED_MODULE_24__["del"]; });

/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(110);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return _details__WEBPACK_IMPORTED_MODULE_25__["Details"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "details", function() { return _details__WEBPACK_IMPORTED_MODULE_25__["details"]; });

/* harmony import */ var _dfn__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dfn", function() { return _dfn__WEBPACK_IMPORTED_MODULE_26__["Dfn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dfn", function() { return _dfn__WEBPACK_IMPORTED_MODULE_26__["dfn"]; });

/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _dialog__WEBPACK_IMPORTED_MODULE_27__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return _dialog__WEBPACK_IMPORTED_MODULE_27__["dialog"]; });

/* harmony import */ var _div__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(113);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return _div__WEBPACK_IMPORTED_MODULE_28__["Div"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "div", function() { return _div__WEBPACK_IMPORTED_MODULE_28__["div"]; });

/* harmony import */ var _dl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(114);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dl", function() { return _dl__WEBPACK_IMPORTED_MODULE_29__["Dl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dl", function() { return _dl__WEBPACK_IMPORTED_MODULE_29__["dl"]; });

/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(115);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLDocumentAssembler", function() { return _document__WEBPACK_IMPORTED_MODULE_30__["HTMLDocumentAssembler"]; });

/* harmony import */ var _doctype__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(116);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLDocumentTypeAssembler", function() { return _doctype__WEBPACK_IMPORTED_MODULE_31__["HTMLDocumentTypeAssembler"]; });

/* harmony import */ var _dt__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(118);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dt", function() { return _dt__WEBPACK_IMPORTED_MODULE_32__["Dt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dt", function() { return _dt__WEBPACK_IMPORTED_MODULE_32__["dt"]; });

/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLElementAssembler", function() { return _element__WEBPACK_IMPORTED_MODULE_33__["HTMLElementAssembler"]; });

/* harmony import */ var _em__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Em", function() { return _em__WEBPACK_IMPORTED_MODULE_34__["Em"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "em", function() { return _em__WEBPACK_IMPORTED_MODULE_34__["em"]; });

/* harmony import */ var _embed__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return _embed__WEBPACK_IMPORTED_MODULE_35__["Embed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "embed", function() { return _embed__WEBPACK_IMPORTED_MODULE_35__["embed"]; });

/* harmony import */ var _fieldset__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSet", function() { return _fieldset__WEBPACK_IMPORTED_MODULE_36__["FieldSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fieldset", function() { return _fieldset__WEBPACK_IMPORTED_MODULE_36__["fieldset"]; });

/* harmony import */ var _figcaption__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FigCaption", function() { return _figcaption__WEBPACK_IMPORTED_MODULE_37__["FigCaption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "figcaption", function() { return _figcaption__WEBPACK_IMPORTED_MODULE_37__["figcaption"]; });

/* harmony import */ var _figure__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(123);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return _figure__WEBPACK_IMPORTED_MODULE_38__["Figure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "figure", function() { return _figure__WEBPACK_IMPORTED_MODULE_38__["figure"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(124);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_39__["Footer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_39__["footer"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_40__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "form", function() { return _form__WEBPACK_IMPORTED_MODULE_40__["form"]; });

/* harmony import */ var _h1__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(125);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return _h1__WEBPACK_IMPORTED_MODULE_41__["H1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h1", function() { return _h1__WEBPACK_IMPORTED_MODULE_41__["h1"]; });

/* harmony import */ var _h2__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return _h2__WEBPACK_IMPORTED_MODULE_42__["H2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h2", function() { return _h2__WEBPACK_IMPORTED_MODULE_42__["h2"]; });

/* harmony import */ var _h3__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return _h3__WEBPACK_IMPORTED_MODULE_43__["H3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h3", function() { return _h3__WEBPACK_IMPORTED_MODULE_43__["h3"]; });

/* harmony import */ var _h4__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return _h4__WEBPACK_IMPORTED_MODULE_44__["H4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h4", function() { return _h4__WEBPACK_IMPORTED_MODULE_44__["h4"]; });

/* harmony import */ var _h5__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return _h5__WEBPACK_IMPORTED_MODULE_45__["H5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h5", function() { return _h5__WEBPACK_IMPORTED_MODULE_45__["h5"]; });

/* harmony import */ var _h6__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return _h6__WEBPACK_IMPORTED_MODULE_46__["H6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h6", function() { return _h6__WEBPACK_IMPORTED_MODULE_46__["h6"]; });

/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(131);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return _head__WEBPACK_IMPORTED_MODULE_47__["Head"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _head__WEBPACK_IMPORTED_MODULE_47__["head"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(132);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_48__["Header"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "header", function() { return _header__WEBPACK_IMPORTED_MODULE_48__["header"]; });

/* harmony import */ var _hgroup__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(133);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HGroup", function() { return _hgroup__WEBPACK_IMPORTED_MODULE_49__["HGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hgroup", function() { return _hgroup__WEBPACK_IMPORTED_MODULE_49__["hgroup"]; });

/* harmony import */ var _hr__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(134);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hr", function() { return _hr__WEBPACK_IMPORTED_MODULE_50__["Hr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hr", function() { return _hr__WEBPACK_IMPORTED_MODULE_50__["hr"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return _html__WEBPACK_IMPORTED_MODULE_51__["Html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _html__WEBPACK_IMPORTED_MODULE_51__["html"]; });

/* harmony import */ var _hyperlink__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLHyperlinkAssembler", function() { return _hyperlink__WEBPACK_IMPORTED_MODULE_52__["HTMLHyperlinkAssembler"]; });

/* harmony import */ var _i__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(135);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I", function() { return _i__WEBPACK_IMPORTED_MODULE_53__["I"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _i__WEBPACK_IMPORTED_MODULE_53__["i"]; });

/* harmony import */ var _iframe__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IFrame", function() { return _iframe__WEBPACK_IMPORTED_MODULE_54__["IFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iframe", function() { return _iframe__WEBPACK_IMPORTED_MODULE_54__["iframe"]; });

/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return _img__WEBPACK_IMPORTED_MODULE_55__["Img"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "img", function() { return _img__WEBPACK_IMPORTED_MODULE_55__["img"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_56__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "input", function() { return _input__WEBPACK_IMPORTED_MODULE_56__["input"]; });

/* harmony import */ var _ins__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(139);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ins", function() { return _ins__WEBPACK_IMPORTED_MODULE_57__["Ins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ins", function() { return _ins__WEBPACK_IMPORTED_MODULE_57__["ins"]; });

/* harmony import */ var _kbd__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(140);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kbd", function() { return _kbd__WEBPACK_IMPORTED_MODULE_58__["Kbd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kbd", function() { return _kbd__WEBPACK_IMPORTED_MODULE_58__["kbd"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_59__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _label__WEBPACK_IMPORTED_MODULE_59__["label"]; });

/* harmony import */ var _legend__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(141);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return _legend__WEBPACK_IMPORTED_MODULE_60__["Legend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legend", function() { return _legend__WEBPACK_IMPORTED_MODULE_60__["legend"]; });

/* harmony import */ var _li__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(142);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return _li__WEBPACK_IMPORTED_MODULE_61__["Li"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "li", function() { return _li__WEBPACK_IMPORTED_MODULE_61__["li"]; });

/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(143);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_62__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "link", function() { return _link__WEBPACK_IMPORTED_MODULE_62__["link"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(144);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _main__WEBPACK_IMPORTED_MODULE_63__["Main"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _main__WEBPACK_IMPORTED_MODULE_63__["main"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(145);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _map__WEBPACK_IMPORTED_MODULE_64__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_64__["map"]; });

/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(146);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return _mark__WEBPACK_IMPORTED_MODULE_65__["Mark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return _mark__WEBPACK_IMPORTED_MODULE_65__["mark"]; });

/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(87);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMediaAssembler", function() { return _media__WEBPACK_IMPORTED_MODULE_66__["HTMLMediaAssembler"]; });

/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(147);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_67__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return _menu__WEBPACK_IMPORTED_MODULE_67__["menu"]; });

/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(148);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return _meta__WEBPACK_IMPORTED_MODULE_68__["Meta"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return _meta__WEBPACK_IMPORTED_MODULE_68__["meta"]; });

/* harmony import */ var _meter__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Meter", function() { return _meter__WEBPACK_IMPORTED_MODULE_69__["Meter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meter", function() { return _meter__WEBPACK_IMPORTED_MODULE_69__["meter"]; });

/* harmony import */ var _mod__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(109);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLModAssembler", function() { return _mod__WEBPACK_IMPORTED_MODULE_70__["HTMLModAssembler"]; });

/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(150);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _nav__WEBPACK_IMPORTED_MODULE_71__["Nav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nav", function() { return _nav__WEBPACK_IMPORTED_MODULE_71__["nav"]; });

/* harmony import */ var _noscript__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoScript", function() { return _noscript__WEBPACK_IMPORTED_MODULE_72__["NoScript"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noscript", function() { return _noscript__WEBPACK_IMPORTED_MODULE_72__["noscript"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLObject", function() { return _object__WEBPACK_IMPORTED_MODULE_73__["HTMLObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _object__WEBPACK_IMPORTED_MODULE_73__["object"]; });

/* harmony import */ var _ol__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(153);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ol", function() { return _ol__WEBPACK_IMPORTED_MODULE_74__["Ol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ol", function() { return _ol__WEBPACK_IMPORTED_MODULE_74__["ol"]; });

/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(154);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return _optgroup__WEBPACK_IMPORTED_MODULE_75__["OptGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optgroup", function() { return _optgroup__WEBPACK_IMPORTED_MODULE_75__["optgroup"]; });

/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLOption", function() { return _option__WEBPACK_IMPORTED_MODULE_76__["HTMLOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "option", function() { return _option__WEBPACK_IMPORTED_MODULE_76__["option"]; });

/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(155);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return _output__WEBPACK_IMPORTED_MODULE_77__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "output", function() { return _output__WEBPACK_IMPORTED_MODULE_77__["output"]; });

/* harmony import */ var _p__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(156);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _p__WEBPACK_IMPORTED_MODULE_78__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _p__WEBPACK_IMPORTED_MODULE_78__["p"]; });

/* harmony import */ var _param__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _param__WEBPACK_IMPORTED_MODULE_79__["Param"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "param", function() { return _param__WEBPACK_IMPORTED_MODULE_79__["param"]; });

/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(158);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return _picture__WEBPACK_IMPORTED_MODULE_80__["Picture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "picture", function() { return _picture__WEBPACK_IMPORTED_MODULE_80__["picture"]; });

/* harmony import */ var _pre__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(159);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return _pre__WEBPACK_IMPORTED_MODULE_81__["Pre"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pre", function() { return _pre__WEBPACK_IMPORTED_MODULE_81__["pre"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(160);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_82__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_82__["progress"]; });

/* harmony import */ var _q__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(161);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return _q__WEBPACK_IMPORTED_MODULE_83__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _q__WEBPACK_IMPORTED_MODULE_83__["q"]; });

/* harmony import */ var _rp__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(162);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rp", function() { return _rp__WEBPACK_IMPORTED_MODULE_84__["Rp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rp", function() { return _rp__WEBPACK_IMPORTED_MODULE_84__["rp"]; });

/* harmony import */ var _rt__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(163);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rt", function() { return _rt__WEBPACK_IMPORTED_MODULE_85__["Rt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rt", function() { return _rt__WEBPACK_IMPORTED_MODULE_85__["rt"]; });

/* harmony import */ var _ruby__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(164);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ruby", function() { return _ruby__WEBPACK_IMPORTED_MODULE_86__["Ruby"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruby", function() { return _ruby__WEBPACK_IMPORTED_MODULE_86__["ruby"]; });

/* harmony import */ var _s__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(165);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _s__WEBPACK_IMPORTED_MODULE_87__["S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _s__WEBPACK_IMPORTED_MODULE_87__["s"]; });

/* harmony import */ var _samp__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(166);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Samp", function() { return _samp__WEBPACK_IMPORTED_MODULE_88__["Samp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "samp", function() { return _samp__WEBPACK_IMPORTED_MODULE_88__["samp"]; });

/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(167);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return _script__WEBPACK_IMPORTED_MODULE_89__["Script"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "script", function() { return _script__WEBPACK_IMPORTED_MODULE_89__["script"]; });

/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(168);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _section__WEBPACK_IMPORTED_MODULE_90__["Section"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "section", function() { return _section__WEBPACK_IMPORTED_MODULE_90__["section"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _select__WEBPACK_IMPORTED_MODULE_91__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_91__["select"]; });

/* harmony import */ var _small__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return _small__WEBPACK_IMPORTED_MODULE_92__["Small"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "small", function() { return _small__WEBPACK_IMPORTED_MODULE_92__["small"]; });

/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(171);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _source__WEBPACK_IMPORTED_MODULE_93__["Source"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "source", function() { return _source__WEBPACK_IMPORTED_MODULE_93__["source"]; });

/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(172);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _span__WEBPACK_IMPORTED_MODULE_94__["Span"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "span", function() { return _span__WEBPACK_IMPORTED_MODULE_94__["span"]; });

/* harmony import */ var _strong__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(173);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return _strong__WEBPACK_IMPORTED_MODULE_95__["Strong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strong", function() { return _strong__WEBPACK_IMPORTED_MODULE_95__["strong"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(174);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _style__WEBPACK_IMPORTED_MODULE_96__["Style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _style__WEBPACK_IMPORTED_MODULE_96__["style"]; });

/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(175);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return _sub__WEBPACK_IMPORTED_MODULE_97__["Sub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return _sub__WEBPACK_IMPORTED_MODULE_97__["sub"]; });

/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(176);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return _summary__WEBPACK_IMPORTED_MODULE_98__["Summary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "summary", function() { return _summary__WEBPACK_IMPORTED_MODULE_98__["summary"]; });

/* harmony import */ var _sup__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(177);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sup", function() { return _sup__WEBPACK_IMPORTED_MODULE_99__["Sup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sup", function() { return _sup__WEBPACK_IMPORTED_MODULE_99__["sup"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(178);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_100__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "table", function() { return _table__WEBPACK_IMPORTED_MODULE_100__["table"]; });

/* harmony import */ var _tbody__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(180);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TBody", function() { return _tbody__WEBPACK_IMPORTED_MODULE_101__["TBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tbody", function() { return _tbody__WEBPACK_IMPORTED_MODULE_101__["tbody"]; });

/* harmony import */ var _td__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(182);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return _td__WEBPACK_IMPORTED_MODULE_102__["Td"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "td", function() { return _td__WEBPACK_IMPORTED_MODULE_102__["td"]; });

/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(185);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _template__WEBPACK_IMPORTED_MODULE_103__["Template"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _template__WEBPACK_IMPORTED_MODULE_103__["template"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(186);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_104__["TextArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textarea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_104__["textarea"]; });

/* harmony import */ var _tfoot__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(184);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TFoot", function() { return _tfoot__WEBPACK_IMPORTED_MODULE_105__["TFoot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tfoot", function() { return _tfoot__WEBPACK_IMPORTED_MODULE_105__["tfoot"]; });

/* harmony import */ var _th__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(183);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return _th__WEBPACK_IMPORTED_MODULE_106__["Th"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "th", function() { return _th__WEBPACK_IMPORTED_MODULE_106__["th"]; });

/* harmony import */ var _thead__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(179);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "THead", function() { return _thead__WEBPACK_IMPORTED_MODULE_107__["THead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thead", function() { return _thead__WEBPACK_IMPORTED_MODULE_107__["thead"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(187);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return _time__WEBPACK_IMPORTED_MODULE_108__["Time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _time__WEBPACK_IMPORTED_MODULE_108__["time"]; });

/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(188);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _title__WEBPACK_IMPORTED_MODULE_109__["Title"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "title", function() { return _title__WEBPACK_IMPORTED_MODULE_109__["title"]; });

/* harmony import */ var _tr__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(181);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return _tr__WEBPACK_IMPORTED_MODULE_110__["Tr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tr", function() { return _tr__WEBPACK_IMPORTED_MODULE_110__["tr"]; });

/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(189);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return _track__WEBPACK_IMPORTED_MODULE_111__["Track"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "track", function() { return _track__WEBPACK_IMPORTED_MODULE_111__["track"]; });

/* harmony import */ var _u__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(190);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "U", function() { return _u__WEBPACK_IMPORTED_MODULE_112__["U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _u__WEBPACK_IMPORTED_MODULE_112__["u"]; });

/* harmony import */ var _ul__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return _ul__WEBPACK_IMPORTED_MODULE_113__["Ul"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ul", function() { return _ul__WEBPACK_IMPORTED_MODULE_113__["ul"]; });

/* harmony import */ var _var__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(192);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return _var__WEBPACK_IMPORTED_MODULE_114__["Var"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return _var__WEBPACK_IMPORTED_MODULE_114__["variable"]; });

/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(193);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _video__WEBPACK_IMPORTED_MODULE_115__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "video", function() { return _video__WEBPACK_IMPORTED_MODULE_115__["video"]; });

/* harmony import */ var _wbr__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(194);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wbr", function() { return _wbr__WEBPACK_IMPORTED_MODULE_116__["Wbr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wbr", function() { return _wbr__WEBPACK_IMPORTED_MODULE_116__["wbr"]; });

/**
 * @module htmlmodule
 * @author Vyacheslav Aristov <vv.aristov@gmail.com>
 * @license MIT
 * @see {@link https://www.w3.org/TR/html}
 */























































































































/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony import */ var _hyperlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);


const { HTMLAnchorElement } = window

class A extends _hyperlink__WEBPACK_IMPORTED_MODULE_0__["HTMLHyperlinkAssembler"] {
    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @param {String} download
     */
    set download(download) {
        this.node.download = download
    }

    /**
     * @returns {String}
     */
    get download() {
        return this.node.download
    }
    
    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.node.rel
    }

    /**
     * @param {String} rev
     */
    set rev(rev) {
        this.node.rev = rev
    }

    /**
     * @returns {String}
     */
    get rev() {
        return this.node.rev
    }

    /**
     * @param {String} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {String}
     */
    get hreflang() {
        return this.node.hreflang
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {window.HTMLAnchorElement}
     */
    static get interface() {
        return HTMLAnchorElement
    }
}

/**
 * @param {*} [init]
 * @returns {A}
 */
function a(init) {
    return new A(init)
}


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLHyperlinkAssembler", function() { return HTMLHyperlinkAssembler; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLHyperlinkElementUtils } = window

/**
 * @see https://www.w3.org/TR/html/links.html#htmlhyperlinkelementutils
 * @abstract
 */
class HTMLHyperlinkAssembler extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @returns {String}
     */
    get origin() {
        return this.node.origin
    }

    /**
     * @param {String} protocol
     */
    set protocol(protocol) {
        this.node.protocol = protocol
    }

    /**
     * @returns {String}
     */
    get protocol() {
        return this.node.protocol
    }

    /**
     * @param {String} username
     */
    set username(username) {
        this.node.username = username
    }

    /**
     * @returns {String} 
     */
    get username() {
        return this.node.username
    }

    /**
     * @param {String} password
     */
    set password(password) {
        this.node.password = password
    }

    /**
     * @returns {String}
     */
    get password() {
        return this.node.password
    }

    /**
     * @param {String} host
     */
    set host(host) {
        this.node.host = host
    }

    /**
     * @returns {String} 
     */
    get host() {
        return this.node.host
    }

    /**
     * @param {String} hostname
     */
    set hostname(hostname) {
        this.node.hostname = hostname
    }

    /**
     * @returns {String}
     */
    get hostname() {
        return this.node.hostname
    }

    /**
     * @param {String} port
     */
    set port(port) {
        this.node.port = port
    }

    /**
     * @returns {String}
     */
    get port() {
        return this.node.port
    }

    /**
     * @param {String} pathname
     */
    set pathname(pathname) {
        this.node.pathname = pathname
    }

    /**
     * @returns {String}
     */
    get pathname() {
        return this.node.pathname
    }

    /**
     * @param {String} search
     */
    set search(search) {
        this.node.search = search
    }

    /**
     * @returns {String}
     */
    get search() {
        return this.node.search
    }

    /**
     * @param {String} hash
     */
    set hash(hash) {
        this.node.hash = hash
    }

    /**
     * @returns {String}
     */
    get hash() {
        return this.node.hash
    }

    /**
     * @returns {window.HTMLHyperlinkElementUtils}
     */
    static get interface() {
        return HTMLHyperlinkElementUtils
    }

    /**
     * @returns {Function} HTMLHyperlinkAssembler
     */
    static get superAssembler() {
        return HTMLHyperlinkAssembler
    }
}


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abbr", function() { return Abbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abbr", function() { return abbr; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Abbr extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Abbr}
 */
function abbr(init) {
    return new Abbr(init)
}


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "address", function() { return address; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Address extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Address}
 */
function address(init) {
    return new Address(init)
}


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return area; });
/* harmony import */ var _hyperlink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);


const { HTMLAreaElement } = window

class Area extends _hyperlink__WEBPACK_IMPORTED_MODULE_0__["HTMLHyperlinkAssembler"] {
    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @param {String} coords
     */
    set coords(coords) {
        this.node.coords = coords
    }

    /**
     * @returns {String}
     */
    get coords() {
        return this.node.coords
    }

    /**
     * @param {String} shape
     */
    set shape(shape) {
        this.node.shape = shape
    }

    /**
     * @returns {String}
     */
    get shape() {
        return this.node.shape
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @param {String} download
     */
    set download(download) {
        this.node.download = download
    }

    /**
     * @returns {String}
     */
    get download() {
        return this.node.download
    }

    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.node.rel
    }

    /**
     * @returns {DOMTokenList}
     */
    get relList() {
        return this.node.relList
    }

    /**
     * @param {String} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {String}
     */
    get hreflang() {
        return this.node.hreflang
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {window.HTMLAreaElement}
     */
    static get interface() {
        return HTMLAreaElement
    }
}

/**
 * @param {*} [init]
 * @returns {Area}
 */
function area(init) {
    return new Area(init)
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "article", function() { return article; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Article extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Article}
 */
function article(init) {
    return new Article(init)
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aside", function() { return Aside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aside", function() { return aside; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Aside extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Aside}
 */
function aside(init) {
    return new Aside(init)
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLAudio", function() { return HTMLAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audio", function() { return audio; });
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);


const { HTMLAudioElement } = window

/**
 * The `HTML` prefix is used to avoid a conflict with the Audio class from the HTML standard
 * https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlaudioelement-audio
 */
class HTMLAudio extends _media__WEBPACK_IMPORTED_MODULE_0__["HTMLMediaAssembler"] {
    /**
     * @returns {window.HTMLAudioElement}
     */
    static get interface() {
        return HTMLAudioElement
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLAudio}
 */
function audio(init) {
    return new HTMLAudio(init)
}


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMediaAssembler", function() { return HTMLMediaAssembler; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLMediaElement } = window

/**
 * @see https://www.w3.org/TR/html/semantics-embedded-content.html#htmlmediaelement
 * @abstract
 */
class HTMLMediaAssembler extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @see https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlmediaelement-load
     */
    load() {
        this.node.load()
    }

    /**
     * @param type
     * @returns {CanPlayTypeResult}
     */
    canPlayType(type) {
        return this.node.canPlayType
    }

    /**
     * @param {Number} time
     */
    fastSeek(time) {
        this.node.fastSeek(time)
    }

    /**
     * @returns {Date}
     */
    getStartDate() {
        return this.node.getStartDate()
    }

    /**
     * @see https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlmediaelement-play
     */
    play() {
        this.node.play()
    }

    /**
     * @see https://www.w3.org/TR/html/semantics-embedded-content.html#dom-htmlmediaelement-pause
     */
    pause() {
        this.node.pause()
    }

    /**
     * @param {TextTrackKind} kind
     * @param {String} [label='']
     * @param {String} [language='']
     * @returns {TextTrack}
     */
    addTextTrack(kind, label = '', language = '') {
        return this.node.addTextTrack(kind, label, language)
    }

    /**
     * @returns {MediaError}
     */
    get error() {
        return this.node.error
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {MediaProvider} srcObject
     */
    set srcObject(srcObject) {
        this.node.srcObject = srcObject
    }

    /**
     * @returns {MediaProvider}
     */
    get srcObject() {
        return this.node.srcObject
    }

    /**
     * @returns {String}
     */
    get currentSrc() {
        return this.node.currentSrc
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @returns {Number}
     */
    get networkState() {
        return this.node.networkState
    }

    /**
     * @param {String} preload
     */
    set preload(preload) {
        this.node.preload = preload
    }

    /**
     * @returns {String}
     */
    get preload() {
        return this.node.preload
    }

    /**
     * @returns {TimeRanges}
     */
    get buffered() {
        return this.node.buffered
    }

    /**
     * @returns {Number}
     */
    get readyState() {
        return this.node.readyState
    }

    /**
     * @returns {Boolean}
     */
    get seeking() {
        return this.node.seeking
    }

    /**
     * @param {Number} currentTime
     */
    set currentTime(currentTime) {
        this.node.currentTime = currentTime
    }

    /**
     * @returns {Number}
     */
    get currentTime() {
        return this.node.currentTime
    }

    /**
     * @returns {Number}
     */
    get duration() {
        return this.node.duration
    }

    /**
     * @returns {Boolean}
     */
    get paused() {
        return this.node.paused
    }

    /**
     * @param {Number} defaultPlaybackRate
     */
    set defaultPlaybackRate(defaultPlaybackRate) {
        this.node.defaultPlaybackRate = defaultPlaybackRate
    }

    /**
     * @returns {Number}
     */
    get defaultPlaybackRate() {
        return this.node.defaultPlaybackRate
    }

    /**
     * @param {Number} playbackRate
     */
    set playbackRate(playbackRate) {
        this.node.playbackRate = playbackRate
    }

    /**
     * @returns {Number}
     */
    get playbackRate() {
        return this.node.playbackRate
    }

    /**
     * @returns {TimeRanges}
     */
    get played() {
        return this.node.played
    }

    /**
     * @returns {TimeRanges}
     */
    get seekable() {
        return this.node.seekable
    }

    /**
     * @returns {Boolean}
     */
    get ended() {
        return this.node.ended
    }

    /**
     * @param {Boolean} autoplay
     */
    set autoplay(autoplay) {
        this.node.autoplay = autoplay
    }

    /**
     * @returns {Boolean}
     */
    get autoplay() {
        return this.node.autoplay
    }

    /**
     * @param {Boolean} loop
     */
    set loop(loop) {
        this.node.loop = loop
    }

    /**
     * @returns {Boolean}
     */
    get loop() {
        return this.node.loop
    }

    /**
     * @param {Boolean} controls
     */
    set controls(controls) {
        this.node.controls = controls
    }

    /**
     * @returns {Boolean}
     */
    get controls() {
        return this.node.controls
    }

    /**
     * @param {Number} volume
     */
    set volume(volume) {
        this.node.volume
    }

    /**
     * @returns {Number}
     */
    get volume() {
        return this.node.volume
    }

    /**
     * @param {Boolean} muted
     */
    set muted(muted) {
        this.node.muted = muted
    }

    /**
     * @returns {Boolean}
     */
    get muted() {
        return this.node.muted
    }

    /**
     * @param {Boolean} defaultMuted
     */
    set defaultMuted(defaultMuted) {
        this.node.defaultMuted = defaultMuted
    }

    /**
     * @returns {Boolean}
     */
    get defaultMuted() {
        return this.node.defaultMuted
    }

    /**
     * @returns {AudioTrackList}
     */
    get audioTracks() {
        return this.node.audioTracks
    }

    /**
     * @returns {VideoTrackList}
     */
    get videoTracks() {
        return this.node.videoTracks
    }

    /**
     * @returns {TextTrackList}
     */
    get textTracks() {
        return this.node.textTracks
    }

    /**
     * @returns {window.HTMLMediaElement}
     */
    static get interface() {
        return HTMLMediaElement
    }

    /**
     * @returns {Function} HTMLMediaAssembler
     */
    static get superAssembler() {
        return HTMLMediaAssembler
    }
}


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class B extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {B}
 */
function b(init) {
    return new B(init)
}


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLBaseElement } = window

class Base extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @returns {window.HTMLBaseElement}
     */
    static get interface() {
        return HTMLBaseElement
    }
}

/**
 * @param {*} [init]
 * @returns {Base}
 */
function base(init) {
    return new Base(init)
}


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bdi", function() { return Bdi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdi", function() { return bdi; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Bdi extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Bdi}
 */
function bdi(init) {
    return new Bdi(init)
}


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bdo", function() { return Bdo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bdo", function() { return bdo; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Bdo extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Bdo}
 */
function bdo(init) {
    return new Bdo(init)
}


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockQuote", function() { return BlockQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockquote", function() { return blockquote; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLQuoteElement } = window

class BlockQuote extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @returns {window.HTMLQuoteElement}
     */
    static get interface() {
        return HTMLQuoteElement
    }
}

/**
 * @param {*} [init]
 * @returns {BlockQuote}
 */
function blockquote(init) {
    return new BlockQuote(init)
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "body", function() { return body; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLBodyElement } = window

class Body extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLBodyElement}
     */
    static get interface() {
        return HTMLBodyElement
    }
}

/**
 * @param {*} [init]
 * @returns {Body}
 */
function body(init) {
    return new Body(init)
}


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Br", function() { return Br; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "br", function() { return br; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLBRElement } = window

class Br extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLBRElement}
     */
    static get interface() {
        return HTMLBRElement
    }
}

/**
 * @param {*} [init]
 * @returns {Br}
 */
function br(init) {
    return new Br(init)
}


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97);




const { map } = Array.prototype
const { HTMLButtonElement } = window

class Button extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_1__["Form"])
    }

    /**
     * @param {String} formAction
     */
    set formAction(formAction) {
        this.node.formAction = formAction
    }

    /**
     * @returns {String}
     */
    get formAction() {
        return this.node.formAction
    }

    /**
     * @param {String} formEnctype
     */
    set formEnctype(formEnctype) {
        this.node.formEnctype = formEnctype
    }

    /**
     * @returns {String}
     */
    get formEnctype() {
        return this.node.formEnctype
    }

    /**
     * @param {String} formMethod
     */
    set formMethod(formMethod) {
        this.node.formMethod = formMethod
    }

    /**
     * @returns {String}
     */
    get formMethod() {
        return this.node.formMethod
    }

    /**
     * @param {Boolean} formNoValidate
     */
    set formNoValidate(formNoValidate) {
        this.node.formNoValidate = formNoValidate
    }

    /**
     * @returns {Boolean}
     */
    get formNoValidate() {
        return this.node.formNoValidate
    }

    /**
     * @param {String} formTarget
     */
    set formTarget(formTarget) {
        this.node.formTarget = formTarget
    }

    /**
     * @returns {String}
     */
    get formTarget() {
        return this.node.formTarget
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, _label__WEBPACK_IMPORTED_MODULE_2__["Label"])
        })
    }

    /**
     * @returns {window.HTMLButtonElement}
     */
    static get interface() {
        return HTMLButtonElement
    }
}

/**
 * @param {*} [init]
 * @returns {Button}
 */
function button(init) {
    return new Button(init)
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { map } = Array.prototype
const { HTMLFormElement } = window

class Form extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * Reset the form
     */
    reset() {
        this.node.reset()
    }

    /**
     * Submit the form
     */
    submit() {
        this.node.submit()
    }

    /**
     * @param {String} acceptCharset
     */
    set acceptCharset(acceptCharset) {
        this.node.acceptCharset = acceptCharset
    }

    /**
     * @returns {String}
     */
    get acceptCharset() {
        return this.node.acceptCharset
    }

    /**
     * @param {String} action
     */
    set action(action) {
        this.node.action = action
    }

    /**
     * @return {String}
     */
    get action() {
        return this.node.action
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @returns {(HTMLElementAssembler|*)[]}
     */
    get elements() {
        return map.call(this.node.elements, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @param {String} enctype
     */
    set enctype(enctype) {
        this.node.enctype = enctype
    }

    /**
     * @returns {String}
     */
    get enctype() {
        return this.node.enctype
    }

    /**
     * @param {String} method
     */
    set method(method) {
        this.node.method = method
    }

    /**
     * @returns {String}
     */
    get method() {
        return this.node.method
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {Boolean} noValidate
     */
    set noValidate(noValidate) {
        this.node.noValidate = noValidate
    }

    /**
     * @returns {Boolean}
     */
    get noValidate() {
        return this.node.noValidate
    }

    /**
     * @param {String} target
     */
    set target(target) {
        this.node.target = target
    }

    /**
     * @returns {String}
     */
    get target() {
        return this.node.target
    }

    /**
     * @returns {window.HTMLFormElement}
     */
    static get interface() {
        return HTMLFormElement
    }
}

/**
 * @param {*} [init]
 * @returns {Form}
 */
function form(init) {
    return new Form(init)
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);



const { HTMLLabelElement } = window

class Label extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param control
     */
    set control(control) {
        this.htmlFor = control.id
    }

    /**
     * @returns {*}
     */
    get control() {
        return this.getInstanceOf(this.node.control)
    }

    /**
     * @returns {Form|ElementAssembler|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_1__["Form"])
    }

    /**
     * @param {*} htmlFor
     */
    set htmlFor(htmlFor) {
        this.node.htmlFor = htmlFor
    }

    /**
     * @returns {NodeAssembler|null}
     */
    get htmlFor() {
        return this.node.htmlFor
    }

    /**
     * @returns {window.HTMLLabelElement}
     */
    static get interface() {
        return HTMLLabelElement
    }
}

/**
 * @param {*} [init]
 * @returns {Label}
 */
function label(init) {
    return new Label(init)
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLCanvasElement } = window

class Canvas extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} contextId
     * @param {*} args
     * @returns {*|CanvasRenderingContext2D|WebGLRenderingContext}
     */
    getContext(contextId, ...args) {
        return this.node.getContext(contextId, ...args)
    }

    /**
     * @param {String} contextId
     * @param {*} args
     * @returns {Boolean}
     */
    probablySupportsContext(contextId, ...args) {
        return this.node.probablySupportsContext(contextId, ...args)
    }

    /**
     * @param {String} type
     * @param {*} args
     * @returns {String}
     */
    toDataURL(type, ...args) {
        return this.node.toDataURL(type, ...args)
    }

    /**
     * @param {Function} _callback
     * @param {String} type
     * @param {*} args
     */
    toBlob(_callback, type, ...args) {
        this.node.toBlob(_callback, type, ...args)
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {window.HTMLCanvasElement}
     */
    static get interface() {
        return HTMLCanvasElement
    }
}

/**
 * @param {*} [init]
 * @returns {Canvas}
 */
function canvas(init) {
    return new Canvas(init)
}


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caption", function() { return Caption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caption", function() { return caption; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLTableCaptionElement } = window

class Caption extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLTableCaptionElement}
     */
    static get interface() {
        return HTMLTableCaptionElement
    }
}

/**
 * @param {*} [init]
 * @returns {Caption}
 */
function caption(init) {
    return new Caption(init)
}


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cite", function() { return Cite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cite", function() { return cite; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Cite extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Cite}
 */
function cite(init) {
    return new Cite(init)
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "code", function() { return code; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Code extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Code}
 */
function code(init) {
    return new Code(init)
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "col", function() { return col; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLTableColElement } = window

class Col extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {Number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {window.HTMLTableColElement}
     */
    static get interface() {
        return HTMLTableColElement
    }
}

/**
 * @param {*} [init]
 * @returns {Col}
 */
function col(init) {
    return new Col(init)
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColGroup", function() { return ColGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colgroup", function() { return colgroup; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLTableColElement } = window

class ColGroup extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} span
     */
    set span(span) {
        this.node.span = span
    }

    /**
     * @returns {Number}
     */
    get span() {
        return this.node.span
    }

    /**
     * @returns {window.HTMLTableColElement}
     */
    static get interface() {
        return HTMLTableColElement
    }
}

/**
 * @param {*} [init]
 * @returns {ColGroup}
 */
function colgroup(init) {
    return new ColGroup(init)
}


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLDataElement } = window

class Data extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {window.HTMLDataElement}
     */
    static get interface() {
        return HTMLDataElement
    }
}

/**
 * @param {*} [init]
 * @returns {Data}
 */
function data(init) {
    return new Data(init)
}


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataList", function() { return DataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datalist", function() { return datalist; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);



const { prototype : { map } } = Array
const { HTMLDataListElement } = window

class DataList extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {HTMLOption[]}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstanceOf(option, _option__WEBPACK_IMPORTED_MODULE_1__["HTMLOption"])
        })
    }

    /**
     * @returns {window.HTMLDataListElement}
     */
    static get interface() {
        return HTMLDataListElement
    }
}

/**
 * @param {*} [init]
 * @returns {DataList}
 */
function datalist(init) {
    return new DataList(init)
}


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLOption", function() { return HTMLOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option", function() { return option; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);



const { HTMLOptionElement } = window

/**
 * The `HTML` prefix is used to avoid a conflict with the Option class from the HTML standard
 * https://www.w3.org/TR/html/sec-forms.html#dom-htmloptionelement-option
 */
class HTMLOption extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_1__["Form"])
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.node.label
    }

    /**
     * @param {Boolean} defaultSelected
     */
    set defaultSelected(defaultSelected) {
        this.node.defaultSelected = defaultSelected
    }

    /**
     * @returns {Boolean}
     */
    get defaultSelected() {
        return this.node.defaultSelected
    }

    /**
     * @param {Boolean} selected
     */
    set selected(selected) {
        this.node.selected = selected
    }

    /**
     * @returns {Boolean}
     */
    get selected() {
        return this.node.selected
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {Number}
     */
    get index() {
        return this.node.index
    }

    /**
     * @returns {window.HTMLOptionElement}
     */
    static get interface() {
        return HTMLOptionElement
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLOption}
 */
function option(init) {
    return new HTMLOption(init)
}


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dd", function() { return Dd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dd", function() { return dd; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Dd extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Dd}
 */
function dd(init) {
    return new Dd(init)
}


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Del", function() { return Del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony import */ var _mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);


class Del extends _mod__WEBPACK_IMPORTED_MODULE_0__["HTMLModAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Del}
 */
function del(init) {
    return new Del(init)
}


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLModAssembler", function() { return HTMLModAssembler; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLModElement } = window

/**
 * @see https://www.w3.org/TR/html/edits.html#htmlmodelement
 * @abstract
 */
class HTMLModAssembler extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @param {String} dateTime
     */
    set dateTime(dateTime) {
        this.node.dateTime = dateTime
    }

    /**
     * @returns {String}
     */
    get dateTime() {
        return this.node.dateTime
    }

    /**
     * @returns {Function} HTMLModAssembler
     */
    static get superAssembler() {
        return HTMLModAssembler
    }

    /**
     * @returns {window.HTMLModElement}
     */
    static get interface() {
        return HTMLModElement
    }
}


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "details", function() { return details; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLDetailsElement } = window

class Details extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Boolean} open
     */
    set open(open) {
        this.node.open = open
    }

    /**
     * @returns {Boolean}
     */
    get open() {
        return this.node.open
    }

    /**
     * @returns {window.HTMLDetailsElement}
     */
    static get interface() {
        return HTMLDetailsElement
    }
}

/**
 * @param {*} [init]
 * @returns {Details}
 */
function details(init) {
    return new Details(init)
}


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dfn", function() { return Dfn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dfn", function() { return dfn; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Dfn extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Dfn}
 */
function dfn(init) {
    return new Dfn(init)
}


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return dialog; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLDialogElement } = window

class Dialog extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {MouseEvent|Element} [anchor]
     */
    show(anchor) {
        this.node.show(anchor)
    }

    /**
     * @param {MouseEvent|Element} [anchor]
     */
    showModal(anchor) {
        this.node.showModal(anchor)
    }

    /**
     * @param {String} returnValue
     */
    close(returnValue) {
        this.node.close(returnValue)
    }

    /**
     * @param {Boolean} open
     */
    set open(open) {
        this.node.open = open
    }

    /**
     * @returns {Boolean}
     */
    get open() {
        return this.node.open
    }

    /**
     * @param {String} returnValue
     */
    set returnValue(returnValue) {
        this.node.returnValue = returnValue
    }

    /**
     * @returns {String} 
     */
    get returnValue() {
        return this.node.returnValue
    }

    /**
     * @returns {window.HTMLDialogElement}
     */
    static get interface() {
        return HTMLDialogElement
    }
}

/**
 * @param {*} [init]
 * @returns {Dialog}
 */
function dialog(init) {
    return new Dialog(init)
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLDivElement } = window

class Div extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLDivElement}
     */
    static get interface() {
        return HTMLDivElement
    }
}

/**
 * @param {*} [init]
 * @returns {Div}
 */
function div(init) {
    return new Div(init)
}


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dl", function() { return Dl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dl", function() { return dl; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLDListElement } = window

class Dl extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLDListElement}
     */
    static get interface() {
        return HTMLDListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Dl}
 */
function dl(init) {
    return new Dl(init)
}


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDocumentAssembler", function() { return HTMLDocumentAssembler; });
/* harmony import */ var dommodule_lib_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _doctype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(116);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(117);





const { HTMLDocument, document : { implementation } } = window

const DEFAULT_TITLE = ''

/**
 * @see https://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html#ID-26809268
 */
class HTMLDocumentAssembler extends dommodule_lib_document__WEBPACK_IMPORTED_MODULE_0__["DocumentAssembler"] {
    /**
     * @param {HTMLElement} activeElement
     */
    set activeElement(activeElement) {
        if(this.node.contains(activeElement)) {
            activeElement.focus()
        }
    }

    /**
     * @returns {HTMLElement}
     */
    get activeElement() {
        return this.node.activeElement
    }

    /**
     * @param {HTMLBodyElement} body
     */
    set body(body) {
        this.node.body = body
    }

    /**
     * @returns {HTMLBodyElement}
     */
    get body() {
        return this.node.body
    }

    /**
     * @param {HTMLHeadElement} head
     */
    set head(head) {
        const element = this.head
        if(element) element.replaceWith(head)
        else this.documentElement.prepend(head)
    }

    /**
     * @returns {HTMLHeadElement}
     */
    get head() {
        return this.node.head
    }

    /**
     * @param {String} title
     */
    set title(title) {
        this.node.title = title
    }

    /**
     * @returns {String}
     */
    get title() {
        return this.node.title
    }

    /**
     * @param {*} [init]
     * @returns {HTMLDocument}
     * @override
     */
    static create(init) {
        const { title = this.title } = init || this
        return implementation.createHTMLDocument(title)
    }

    /**
     * @returns {Function}
     * @override
     */
    static get doctypeAssembler() {
        return _doctype__WEBPACK_IMPORTED_MODULE_1__["HTMLDocumentTypeAssembler"]
    }

    /**
     * @returns {Function} Html
     * @override
     */
    static get elementAssembler() {
        return _html__WEBPACK_IMPORTED_MODULE_3__["Html"]
    }

    /**
     * @returns {window.HTMLDocument}
     * @override
     */
    static get interface() {
        return HTMLDocument
    }

    /**
     * @returns {String}
     */
    static get title() {
        return DEFAULT_TITLE
    }
}

_element__WEBPACK_IMPORTED_MODULE_2__["HTMLElementAssembler"].HTMLDocumentAssembler = HTMLDocumentAssembler


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLDocumentTypeAssembler", function() { return HTMLDocumentTypeAssembler; });
/* harmony import */ var dommodule_lib_doctype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);



class HTMLDocumentTypeAssembler extends dommodule_lib_doctype__WEBPACK_IMPORTED_MODULE_0__["DocumentTypeAssembler"] {
    /**
     * @returns {HTMLDocumentAssembler}
     */
    static get documentAssembler() {
        return _document__WEBPACK_IMPORTED_MODULE_1__["HTMLDocumentAssembler"]
    }
}


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLHtmlElement } = window

class Html extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLHtmlElement}
     */
    static get interface() {
        return HTMLHtmlElement
    }
}

/**
 * @param {*} [init]
 * @returns {Html}
 */
function html(init) {
    return new Html(init)
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dt", function() { return Dt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dt", function() { return dt; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Dt extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Dt}
 */
function dt(init) {
    return new Dt(init)
}


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Em", function() { return Em; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "em", function() { return em; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Em extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Em}
 */
function em(init) {
    return new Em(init)
}


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return Embed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embed", function() { return embed; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLEmbedElement } = window

class Embed extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {window.HTMLEmbedElement}
     */
    static get interface() {
        return HTMLEmbedElement
    }
}

/**
 * @param {*} [init]
 * @returns {Embed}
 */
function embed(init) {
    return new Embed(init)
}


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSet", function() { return FieldSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldset", function() { return fieldset; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);



const { map } = Array.prototype
const { HTMLFieldSetElement } = window

class FieldSet extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }
    
    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_1__["Form"])
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {(HTMLElementAssembler|*)[]}
     */
    get elements() {
        return map.call(this.node.elements, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {window.HTMLFieldSetElement}
     */
    static get interface() {
        return HTMLFieldSetElement
    }
}

/**
 * @param {*} [init]
 * @returns {FieldSet}
 */
function fieldset(init) {
    return new FieldSet(init)
}


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigCaption", function() { return FigCaption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "figcaption", function() { return figcaption; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class FigCaption extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {FigCaption}
 */
function figcaption(init) {
    return new FigCaption(init)
}


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return Figure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "figure", function() { return figure; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Figure extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Figure}
 */
function figure(init) {
    return new Figure(init)
}


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Footer extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Footer}
 */
function footer(init) {
    return new Footer(init)
}


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h1", function() { return h1; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class H1 extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {H1}
 */
function h1(init) {
    return new H1(init)
}



/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h2", function() { return h2; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class H2 extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {H2}
 */
function h2(init) {
    return new H2(init)
}


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h3", function() { return h3; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class H3 extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {H3}
 */
function h3(init) {
    return new H3(init)
}


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h4", function() { return h4; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class H4 extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {H4}
 */
function h4(init) {
    return new H4(init)
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return H5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h5", function() { return h5; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class H5 extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {H5}
 */
function h5(init) {
    return new H5(init)
}


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return H6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h6", function() { return h6; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class H6 extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {H6}
 */
function h6(init) {
    return new H6(init)
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Head", function() { return Head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLHeadElement } = window

class Head extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLHeadElement}
     */
    static get interface() {
        return HTMLHeadElement
    }
}

/**
 * @param {*} [init]
 * @returns {Head}
 */
function head(init) {
    return new Head(init)
}


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Header extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Header}
 */
function header(init) {
    return new Header(init)
}


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HGroup", function() { return HGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hgroup", function() { return hgroup; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class HGroup extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {HGroup}
 */
function hgroup(init) {
    return new HGroup(init)
}


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hr", function() { return Hr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hr", function() { return hr; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLHRElement } = window

class Hr extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLHRElement}
     */
    static get interface() {
        return HTMLHRElement
    }
}

/**
 * @param {*} [init]
 * @returns {Hr}
 */
function hr(init) {
    return new Hr(init)
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return i; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class I extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {I}
 */
function i(init) {
    return new I(init)
}


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrame", function() { return IFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iframe", function() { return iframe; });
/* harmony import */ var dommodule_lib_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const { HTMLIFrameElement } = window

class IFrame extends _element__WEBPACK_IMPORTED_MODULE_1__["HTMLElementAssembler"] {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} srcdoc
     */
    set srcdoc(srcdoc) {
        this.node.srcdoc = srcdoc
    }

    /**
     * @returns {String}
     */
    get srcdoc() {
        return this.node.srcdoc
    }

    /**
     * @returns {DOMTokenList}
     */
    get sandbox() {
        return this.node.sandbox
    }

    /**
     * @param {Boolean} allowFullScreen
     */
    set allowFullScreen(allowFullScreen) {
        this.node.allowFullScreen = allowFullScreen
    }

    /**
     * @returns {Boolean}
     */
    get allowFullScreen() {
        return this.node.allowFullScreen
    }

    /**
     * @param {Boolean} allowPaymentRequest
     */
    set allowPaymentRequest(allowPaymentRequest) {
        this.node.allowPaymentRequest = allowPaymentRequest
    }

    /**
     * @returns {Boolean}
     */
    get allowPaymentRequest() {
        return this.node.allowPaymentRequest
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @returns {DocumentAssembler|null}
     */
    get contentDocument() {
        return this.getInstanceOf(this.node.contentDocument, dommodule_lib_document__WEBPACK_IMPORTED_MODULE_0__["DocumentAssembler"])
    }

    /**
     * @returns {window.HTMLIFrameElement}
     */
    static get interface() {
        return HTMLIFrameElement
    }
}

/**
 * @param {*} [init]
 * @returns {IFrame}
 */
function iframe(init) {
    return new IFrame(init)
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img", function() { return img; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLImageElement } = window

class Img extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Promise}
     */
    decode() {
        return this.node.decode()
    }

    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @returns {Boolean}
     */
    get complete() {
        return this.node.complete
    }

    /**
     * @returns {String}
     */
    get currentSrc() {
        return this.node.currentSrc
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} srcset
     */
    set srcset(srcset) {
        this.node.srcset = srcset
    }

    /**
     * @returns {String}
     */
    get srcset() {
        return this.node.srcset
    }

    /**
     * @param {String} sizes
     */
    set sizes(sizes) {
        this.node.sizes = sizes
    }

    /**
     * @returns {String}
     */
    get sizes() {
        return this.node.sizes
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @param {String} useMap
     */
    set useMap(useMap) {
        this.node.useMap = useMap
    }

    /**
     * @returns {String}
     */
    get useMap() {
        return this.node.useMap
    }

    /**
     * @param {Boolean} isMap
     */
    set isMap(isMap) {
        this.node.isMap = isMap
    }

    /**
     * @returns {Boolean}
     */
    get isMap() {
        return this.node.isMap
    }

    /**
     * @returns {Number}
     */
    get naturalWidth() {
        return this.node.naturalWidth
    }

    /**
     * @returns {Number}
     */
    get naturalHeight() {
        return this.node.naturalHeight
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @returns {window.HTMLImageElement}
     */
    static get interface() {
        return HTMLImageElement
    }
}

/**
 * @param {*} [init]
 * @returns {Img}
 */
function img(init) {
    return new Img(init)
}


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);




const { map } = Array.prototype
const { HTMLInputElement } = window

class Input extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * Select the input
     */
    select() {
        this.node.select()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {*} args
     */
    setRangeText(...args) {
        this.node.setRangeText(...args)
    }

    /**
     * @param {*} args
     */
    setSelectionRange(...args) {
        this.node.setSelectionRange(...args)
    }

    /**
     * @param {Number} n
     */
    stepDown(n) {
        this.node.stepDown()
    }

    /**
     * @param {Number} n
     */
    stepUp(n) {
        this.node.stepUp()
    }

    /**
     * @param {String} accept
     */
    set accept(accept) {
        this.node.accept = accept
    }

    /**
     * @returns {String}
     */
    get accept() {
        return this.node.accept
    }

    /**
     * @param {String} alt
     */
    set alt(alt) {
        this.node.alt = alt
    }

    /**
     * @returns {String}
     */
    get alt() {
        return this.node.alt
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Boolean} defaultChecked
     */
    set defaultChecked(defaultChecked) {
        this.node.defaultChecked = defaultChecked
    }

    /**
     * @returns {Boolean}
     */
    get defaultChecked() {
        return this.node.defaultChecked
    }

    /**
     * @param {Boolean} checked
     */
    set checked(checked) {
        this.node.checked = checked
    }

    /**
     * @returns {Boolean}
     */
    get checked() {
        return this.node.checked
    }

    /**
     * @param {String} dirName
     */
    set dirName(dirName) {
        this.node.dirName = dirName
    }

    /**
     * @returns {String}
     */
    get dirName() {
        return this.node.dirName
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_2__["Form"])
    }

    /**
     * @param {*} files
     */
    set files(files) {
        this.node.files = files
    }

    /**
     * @returns {*}
     */
    get files() {
        return this.node.files
    }

    /**
     * @param {String} formAction
     */
    set formAction(formAction) {
        this.node.formAction = formAction
    }

    /**
     * @returns {String}
     */
    get formAction() {
        return this.node.formAction
    }

    /**
     * @param {String} formEnctype
     */
    set formEnctype(formEnctype) {
        this.node.formEnctype = formEnctype
    }

    /**
     * @returns {String}
     */
    get formEnctype() {
        return this.node.formEnctype
    }

    /**
     * @param {String} formMethod
     */
    set formMethod(formMethod) {
        this.node.formMethod = formMethod
    }

    /**
     * @returns {String}
     */
    get formMethod() {
        return this.node.formMethod
    }

    /**
     * @param {Boolean} formNoValidate
     */
    set formNoValidate(formNoValidate) {
        this.node.formNoValidate = formNoValidate
    }

    /**
     * @returns {Boolean}
     */
    get formNoValidate() {
        return this.node.formNoValidate
    }

    /**
     * @param {String} formTarget
     */
    set formTarget(formTarget) {
        this.node.formTarget = formTarget
    }

    /**
     * @returns {String}
     */
    get formTarget() {
        return this.node.formTarget
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @param {Boolean} indeterminate
     */
    set indeterminate(indeterminate) {
        this.node.indeterminate = indeterminate
    }

    /**
     * @returns {Boolean}
     */
    get indeterminate() {
        return this.node.indeterminate
    }

    /**
     * @param {String} inputMode
     */
    set inputMode(inputMode) {
        this.node.inputMode = inputMode
    }

    /**
     * @returns {String}
     */
    get inputMode() {
        return this.node.inputMode
    }

    /**
     * @returns {HTMLElementAssembler|null}
     */
    get list() {
        return this.getInstanceOf(this.node.list, _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"])
    }

    /**
     * @param {String} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {String}
     */
    get max() {
        return this.node.max
    }

    /**
     * @param {Number} maxLength
     */
    set maxLength(maxLength) {
        this.node.maxLength = maxLength
    }

    /**
     * @returns {Number}
     */
    get maxLength() {
        return this.node.maxLength
    }

    /**
     * @param {String} min
     */
    set min(min) {
        this.node.min = min
    }

    /**
     * @returns {String}
     */
    get min() {
        return this.node.min
    }

    /**
     * @param {Number} minLength
     */
    set minLength(minLength) {
        this.node.minLength = minLength
    }

    /**
     * @returns {Number}
     */
    get minLength() {
        return this.node.minLength
    }

    /**
     * @param {Boolean} multiple
     */
    set multiple(multiple) {
        this.node.multiple = multiple
    }

    /**
     * @returns {Boolean}
     */
    get multiple() {
        return this.node.multiple
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} pattern
     */
    set pattern(pattern) {
        this.node.pattern = pattern
    }

    /**
     * @returns {String}
     */
    get pattern() {
        return this.node.pattern
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.node.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.node.placeholder
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.node.readOnly = readOnly
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.node.readOnly
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.node.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.node.required
    }

    /**
     * @param {Number} size
     */
    set size(size) {
        this.node.size = size
    }

    /**
     * @returns {Number}
     */
    get size() {
        return this.node.size
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} step
     */
    set step(step) {
        this.node.step = step
    }

    /**
     * @returns {String}
     */
    get step() {
        return this.node.step
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} defaultValue
     */
    set defaultValue(defaultValue) {
        this.node.defaultValue = defaultValue
    }

    /**
     * @returns {String}
     */
    get defaultValue() {
        return this.node.defaultValue
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {Date} valueAsDate
     */
    set valueAsDate(valueAsDate) {
        this.node.valueAsDate = valueAsDate
    }

    /**
     * @returns {Date}
     */
    get valueAsDate() {
        return this.node.valueAsDate
    }

    /**
     * @param {Number} valueAsNumber
     */
    set valueAsNumber(valueAsNumber) {
        this.node.valueAsNumber = valueAsNumber
    }

    /**
     * @returns {Number}
     */
    get valueAsNumber() {
        return this.node.valueAsNumber
    }

    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, _label__WEBPACK_IMPORTED_MODULE_1__["Label"])
        })
    }

    /**
     * @param {Number} selectionStart
     */
    set selectionStart(selectionStart) {
        this.node.selectionStart = selectionStart
    }

    /**
     * @returns {Number}
     */
    get selectionStart() {
        return this.node.selectionStart
    }

    /**
     * @param {Number} selectionEnd
     */
    set selectionEnd(selectionEnd) {
        this.node.selectionEnd = selectionEnd
    }

    /**
     * @returns {Number}
     */
    get selectionEnd() {
        return this.node.selectionEnd
    }

    /**
     * @param {String} selectionDirection
     */
    set selectionDirection(selectionDirection) {
        this.node.selectionDirection = selectionDirection
    }

    /**
     * @returns {String}
     */
    get selectionDirection() {
        return this.node.selectionDirection
    }

    /**
     * @returns {window.HTMLInputElement}
     */
    static get interface() {
        return HTMLInputElement
    }
}

/**
 * @param {*} [init]
 * @returns {Input}
 */
function input(init) {
    return new Input(init)
}


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ins", function() { return Ins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ins", function() { return ins; });
/* harmony import */ var _mod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);


class Ins extends _mod__WEBPACK_IMPORTED_MODULE_0__["HTMLModAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Ins}
 */
function ins(init) {
    return new Ins(init)
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kbd", function() { return Kbd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kbd", function() { return kbd; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Kbd extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Kbd}
 */
function kbd(init) {
    return new Kbd(init)
}


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legend", function() { return legend; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);



const { HTMLLegendElement } = window

class Legend extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_1__["Form"])
    }

    /**
     * @returns {window.HTMLLegendElement}
     */
    static get interface() {
        return HTMLLegendElement
    }
}

/**
 * @param {*} [init]
 * @returns {Legend}
 */
function legend(init) {
    return new Legend(init)
}


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "li", function() { return li; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLLIElement } = window

class Li extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {window.HTMLLIElement}
     */
    static get interface() {
        return HTMLLIElement
    }
}

/**
 * @param {*} [init]
 * @returns {Li}
 */
function li(init) {
    return new Li(init)
}


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLLinkElement } = window

class Link extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} href
     */
    set href(href) {
        this.node.href = href
    }

    /**
     * @returns {String}
     */
    get href() {
        return this.node.href
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @param {String} rel
     */
    set rel(rel) {
        this.node.rel = rel
    }

    /**
     * @returns {String}
     */
    get rel() {
        return this.node.rel
    }


    /**
     * @param {String} rev
     */
    set rev(rev) {
        this.node.rev = rev
    }

    /**
     * @returns {String}
     */
    get rev() {
        return this.node.rev
    }

    /**
     * @returns {DOMTokenList}
     */
    get relList() {
        return this.node.relList
    }

    /**
     * @param {String} media
     */
    set media(media) {
        this.node.media = media
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.node.media
    }

    /**
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {String}
     */
    get nonce() {
        return this.node.nonce
    }

    /**
     * @param {String} hreflang
     */
    set hreflang(hreflang) {
        this.node.hreflang = hreflang
    }

    /**
     * @returns {String}
     */
    get hreflang() {
        return this.node.hreflang
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {String}
     */
    get sizes() {
        return this.node.sizes
    }

    /**
     * @param {String} referrerPolicy
     */
    set referrerPolicy(referrerPolicy) {
        this.node.referrerPolicy = referrerPolicy
    }

    /**
     * @returns {String}
     */
    get referrerPolicy() {
        return this.node.referrerPolicy
    }
    
    /**
     * @returns {window.HTMLLinkElement}
     */
    static get interface() {
        return HTMLLinkElement
    }
}

/**
 * @param {*} [init]
 * @returns {Link}
 */
function link(init) {
    return new Link(init)
}


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Main extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Main}
 */
function main(init) {
    return new Main(init)
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);



const _map = Array.prototype.map
const { HTMLMapElement } = window

class Map extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Area[]}
     */
    get areas() {
        return _map.call(this.node.areas, node => {
            return this.getInstanceOf(node, _area__WEBPACK_IMPORTED_MODULE_1__["Area"])
        })
    }

    /**
     * @returns {(Img|Object)[]}
     */
    get images() {
        return _map.call(this.node.images, node => {
            return this.getInstanceOf(node)
        })
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @returns {window.HTMLMapElement}
     */
    static get interface() {
        return HTMLMapElement
    }
}

/**
 * @param {*} [init]
 * @returns {Map}
 */
function map(init) {
    return new Map(init)
}


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Mark extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Mark}
 */
function mark(init) {
    return new Mark(init)
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLMenuElement } = window

class Menu extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLMenuElement}
     */
    static get interface() {
        return HTMLMenuElement
    }
}

/**
 * @param {*} [init]
 * @returns {Menu}
 */
function menu(init) {
    return new Menu(init)
}


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLMetaElement } = window

class Meta extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} httpEquiv
     */
    set httpEquiv(httpEquiv) {
        this.node.httpEquiv = httpEquiv
    }

    /**
     * @returns {String}
     */
    get httpEquiv() {
        return this.node.httpEquiv
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} content
     */
    set content(content) {
        this.node.content = content
    }

    /**
     * @returns {String}
     */
    get content() {
        return this.node.content
    }

    /**
     * @returns {window.HTMLMetaElement}
     */
    static get interface() {
        return HTMLMetaElement
    }
}

/**
 * @param {*} [init]
 * @returns {Meta}
 */
function meta(init) {
    return new Meta(init)
}


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meter", function() { return Meter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meter", function() { return meter; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);



const { map } = Array.prototype
const { HTMLMeterElement } = window

class Meter extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {Number} min
     */
    set min(min) {
        this.node.min = min
    }

    /**
     * @returns {Number}
     */
    get min() {
        return this.node.min
    }

    /**
     * @param {Number} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {Number}
     */
    get max() {
        return this.node.max
    }

    /**
     * @param {Number} low
     */
    set low(low) {
        this.node.low = low
    }

    /**
     * @returns {Number}
     */
    get low() {
        return this.node.low
    }

    /**
     * @param {Number} high
     */
    set high(high) {
        this.node.high = high
    }

    /**
     * @returns {Number}
     */
    get high() {
        return this.node.high
    }

    /**
     * @param {Number} optimum
     */
    set optimum(optimum) {
        this.node.optimum = optimum
    }

    /**
     * @returns {Number}
     */
    get optimum() {
        return this.node.optimum
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, _label__WEBPACK_IMPORTED_MODULE_1__["Label"])
        })
    }

    /**
     * @returns {window.HTMLMeterElement}
     */
    static get interface() {
        return HTMLMeterElement
    }
}

/**
 * @param {*} [init]
 * @returns {Meter}
 */
function meter(init) {
    return new Meter(init)
}


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nav", function() { return nav; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Nav extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Nav}
 */
function nav(init) {
    return new Nav(init)
}


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoScript", function() { return NoScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noscript", function() { return noscript; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class NoScript extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {NoScript}
 */
function noscript(init) {
    return new NoScript(init)
}


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLObject", function() { return HTMLObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony import */ var dommodule_lib_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96);




const { HTMLObjectElement } = window

/**
 * The `HTML` prefix is used to avoid a conflict with
 * the native `Object` class from the ECMAScript standard
 * 
 * https://tc39.github.io/ecma262/#sec-object-objects
 */
class HTMLObject extends _element__WEBPACK_IMPORTED_MODULE_1__["HTMLElementAssembler"] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} data
     */
    set data(data) {
        this.node.data = data
    }

    /**
     * @returns {String}
     */
    get data() {
        return this.node.data
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {Boolean} typeMustMatch
     */
    set typeMustMatch(typeMustMatch) {
        this.node.typeMustMatch = typeMustMatch
    }

    /**
     * @returns {Boolean}
     */
    get typeMustMatch() {
        return this.node.typeMustMatch
    }

    /**
     * @param {String} useMap
     */
    set useMap(useMap) {
        this.node.useMap = useMap
    }

    /**
     * @returns {String}
     */
    get useMap() {
        return this.node.useMap
    }

    /**
     * @param {String} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {String}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {String} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {String} 
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_2__["Form"])
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {DocumentAssembler}
     */
    get contentDocument() {
        return this.getInstanceOf(this.node.contentDocument, dommodule_lib_document__WEBPACK_IMPORTED_MODULE_0__["DocumentAssembler"])
    }

    /**
     * @returns {window.HTMLObjectElement}
     */
    static get interface() {
        return HTMLObjectElement
    }
}

/**
 * @param {*} [init]
 * @returns {HTMLObject}
 */
function object(init) {
    return new HTMLObject(init)
}


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ol", function() { return Ol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ol", function() { return ol; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLOListElement } = window

class Ol extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Boolean} reversed
     */
    set reversed(reversed) {
        this.node.reversed = reversed
    }

    /**
     * @returns {Boolean}
     */
    get reversed() {
        return this.node.reversed
    }

    /**
     * @param {Number} start
     */
    set start(start) {
        this.node.start = start
    }

    /**
     * @returns {Number}
     */
    get start() {
        return this.node.start
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {window.HTMLOListElement}
     */
    static get interface() {
        return HTMLOListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Ol}
 */
function ol(init) {
    return new Ol(init)
}


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return OptGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optgroup", function() { return optgroup; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLOptGroupElement } = window

class OptGroup extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String} 
     */
    get label() {
        return this.node.label
    }

    /**
     * @returns {window.HTMLOptGroupElement}
     */
    static get interface() {
        return HTMLOptGroupElement
    }
}

/**
 * @param {*} [init]
 * @returns {OptGroup}
 */
function optgroup(init) {
    return new OptGroup(init)
}


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return Output; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "output", function() { return output; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97);




const { map } = Array.prototype
const { HTMLOutputElement } = window

class Output extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {String} htmlFor
     */
    set htmlFor(htmlFor) {
        this.node.htmlFor = htmlFor
    }

    /**
     * @returns {String}
     */
    get htmlFor() {
        return this.node.htmlFor
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_1__["Form"])
    }

    /**
     * @returns {String} 
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} defaultValue
     */
    set defaultValue(defaultValue) {
        this.node.defaultValue = defaultValue
    }

    /**
     * @returns {String}
     */
    get defaultValue() {
        return this.node.defaultValue
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, _label__WEBPACK_IMPORTED_MODULE_2__["Label"])
        })
    }

    /**
     * @returns {window.HTMLOutputElement}
     */
    static get interface() {
        return HTMLOutputElement
    }
}

/**
 * @param {*} [init]
 * @returns {Output}
 */
function output(init) {
    return new Output(init)
}


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return p; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLParagraphElement } = window

class P extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLParagraphElement}
     */
    static get interface() {
        return HTMLParagraphElement
    }
}

/**
 * @param {*} [init]
 * @returns {P}
 */
function p(init) {
    return new P(init)
}


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "param", function() { return param; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLParamElement } = window

class Param extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {window.HTMLParamElement}
     */
    static get interface() {
        return HTMLParamElement
    }
}

/**
 * @param {*} [init]
 * @returns {Param}
 */
function param(init) {
    return new Param(init)
}


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picture", function() { return picture; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLPictureElement } = window

class Picture extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLPictureElement}
     */
    static get interface() {
        return HTMLPictureElement
    }
}

/**
 * @param {*} [init]
 * @returns {Picture}
 */
function picture(init) {
    return new Picture(init)
}


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pre", function() { return pre; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLPreElement } = window

class Pre extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLPreElement}
     */
    static get interface() {
        return HTMLPreElement
    }
}

/**
 * @param {*} [init]
 * @returns {Pre}
 */
function pre(init) {
    return new Pre(init)
}


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);



const { map } = Array.prototype
const { HTMLProgressElement } = window

class Progress extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {Number}
     */
    get value() {
        return this.node.value
    }

    /**
     * @param {Number} max
     */
    set max(max) {
        this.node.max = max
    }

    /**
     * @returns {Number}
     */
    get max() {
        return this.node.max
    }

    /**
     * @returns {Number}
     */
    get position() {
        return this.node.position
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, _label__WEBPACK_IMPORTED_MODULE_1__["Label"])
        })
    }

    /**
     * @returns {window.HTMLProgressElement}
     */
    static get interface() {
        return HTMLProgressElement
    }
}

/**
 * @param {*} [init]
 * @returns {Progress}
 */
function progress(init) {
    return new Progress(init)
}


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return q; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLQuoteElement } = window

class Q extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} cite
     */
    set cite(cite) {
        this.node.cite = cite
    }

    /**
     * @returns {String}
     */
    get cite() {
        return this.node.cite
    }

    /**
     * @returns {window.HTMLQuoteElement}
     */
    static get interface() {
        return HTMLQuoteElement
    }
}

/**
 * @param {*} [init]
 * @returns {Q}
 */
function q(init) {
    return new Q(init)
}


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rp", function() { return Rp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rp", function() { return rp; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Rp extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Rp}
 */
function rp(init) {
    return new Rp(init)
}


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rt", function() { return Rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rt", function() { return rt; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Rt extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Rt}
 */
function rt(init) {
    return new Rt(init)
}


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruby", function() { return Ruby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruby", function() { return ruby; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Ruby extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Ruby}
 */
function ruby(init) {
    return new Ruby(init)
}


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return s; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class S extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {S}
 */
function s(init) {
    return new S(init)
}


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Samp", function() { return Samp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samp", function() { return samp; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Samp extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Samp}
 */
function samp(init) {
    return new Samp(init)
}


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Script", function() { return Script; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "script", function() { return script; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLScriptElement } = window

class Script extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} charset
     */
    set charset(charset) {
        this.node.charset = charset
    }

    /**
     * @returns {String}
     */
    get charset() {
        return this.node.charset
    }

    /**
     * @param {Boolean} async
     */
    set async(async) {
        this.node.async = async
    }

    /**
     * @returns {Boolean}
     */
    get async() {
        return this.node.async
    }

    /**
     * @param {Boolean} defer
     */
    set defer(defer) {
        this.node.defer = defer
    }

    /**
     * @returns {Boolean}
     */
    get defer() {
        return this.node.defer
    }

    /**
     * @param {String} crossOrigin
     */
    set crossOrigin(crossOrigin) {
        this.node.crossOrigin = crossOrigin
    }

    /**
     * @returns {String}
     */
    get crossOrigin() {
        return this.node.crossOrigin
    }

    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {String}
     */
    get nonce() {
        return this.node.nonce
    }

    /**
     * @returns {window.HTMLScriptElement}
     */
    static get interface() {
        return HTMLScriptElement
    }
}

/**
 * @param {*} [init]
 * @returns {Script}
 */
function script(init) {
    return new Script(init)
}


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "section", function() { return section; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Section extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Section}
 */
function section(init) {
    return new Section(init)
}


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97);
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(154);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);






const { map } = Array.prototype
const { HTMLSelectElement } = window

class Select extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {HTMLOption|HTMLOptionElement|OptGroup|HTMLOptGroupElement} element
     * @param {HTMLElementAssembler|HTMLElement|Number} [before=null]
     */
    add(element, before = null) {
        if(element instanceof _option__WEBPACK_IMPORTED_MODULE_4__["HTMLOption"] || element instanceof _optgroup__WEBPACK_IMPORTED_MODULE_3__["OptGroup"]) {
            element = element.node
        }
        if(before instanceof _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"]) {
            before = before.node
        }
        this.node.add(element, before)
    }

    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @param {Number} index
     * @returns {ElementAssembler|null}
     */
    item(index) {
        return this.getInstanceOf(this.node.item(index))
    }

    /**
     * @param {String} name
     * @returns {HTMLOption|null}
     */
    namedItem(name) {
        return this.getInstanceOf(this.node.namedItem(name), _option__WEBPACK_IMPORTED_MODULE_4__["HTMLOption"])
    }

    /**
     * @param {Number} [index]
     */
    remove(index) {
        this.node.remove(index)
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {Form|null}
     */
    get form() {
        return this.getInstanceOf(this.node.form, _form__WEBPACK_IMPORTED_MODULE_1__["Form"])
    }

    /**
     * @param {Boolean} multiple
     */
    set multiple(multiple) {
        this.node.multiple = multiple
    }

    /**
     * @returns {Boolean}
     */
    get multiple() {
        return this.node.multiple
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.node.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.node.required
    }

    /**
     * @param {Number} size
     */
    set size(size) {
        this.node.size = size
    }

    /**
     * @returns {Number}
     */
    get size() {
        return this.node.size
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {HTMLOption[]}
     */
    get options() {
        return map.call(this.node.options, option => {
            return this.getInstanceOf(option, _option__WEBPACK_IMPORTED_MODULE_4__["HTMLOption"])
        })
    }

    /**
     * @returns {Number}
     */
    get length() {
        return this.node.length
    }

    /**
     * @returns {HTMLOption[]}
     */
    get selectedOptions() {
        return map.call(this.node.selectedOptions, option => {
            return this.getInstanceOf(option, _option__WEBPACK_IMPORTED_MODULE_4__["HTMLOption"])
        })
    }

    /**
     * @param {Number} selectedIndex
     */
    set selectedIndex(selectedIndex) {
        this.node.selectedIndex = selectedIndex
    }

    /**
     * @returns {Number}
     */
    get selectedIndex() {
        return this.node.selectedIndex
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {ValidityState}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        return map.call(this.node.labels, node => {
            return this.getInstanceOf(node, _label__WEBPACK_IMPORTED_MODULE_2__["Label"])
        })
    }

    /**
     * @returns {window.HTMLSelectElement}
     */
    static get interface() {
        return HTMLSelectElement
    }
}

/**
 * @param {*} [init]
 * @returns {Select}
 */
function select(init) {
    return new Select(init)
}


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "small", function() { return small; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Small extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Small}
 */
function small(init) {
    return new Small(init)
}


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "source", function() { return source; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLSourceElement } = window

class Source extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} srcset
     */
    set srcset(srcset) {
        this.node.srcset = srcset
    }

    /**
     * @returns {String}
     */
    get srcset() {
        return this.node.srcset
    }

    /**
     * @param {String} sizes
     */
    set sizes(sizes) {
        this.node.sizes = sizes
    }

    /**
     * @returns {String}
     */
    get sizes() {
        return this.node.sizes
    }

    /**
     * @param {String} media
     */
    set media(media) {
        this.node.media = media
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.node.media
    }

    /**
     * @returns {window.HTMLSourceElement}
     */
    static get interface() {
        return HTMLSourceElement
    }
}

/**
 * @param {*} [init]
 * @returns {Source}
 */
function source(init) {
    return new Source(init)
}


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "span", function() { return span; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLSpanElement } = window

class Span extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLSpanElement}
     */
    static get interface() {
        return HTMLSpanElement
    }
}

/**
 * @param {*} [init]
 * @returns {Span}
 */
function span(init) {
    return new Span(init)
}


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strong", function() { return strong; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Strong extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Strong}
 */
function strong(init) {
    return new Strong(init)
}


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLStyleElement } = window

class Style extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} media
     */
    set media(media) {
        this.node.media = media
    }

    /**
     * @returns {String}
     */
    get media() {
        return this.node.media
    }

    /**
     * @param {String} nonce
     */
    set nonce(nonce) {
        this.node.nonce = nonce
    }

    /**
     * @returns {String}
     */
    get nonce() {
        return this.node.nonce
    }

    /**
     * @param {String} type
     */
    set type(type) {
        this.node.type = type
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @returns {window.HTMLStyleElement}
     */
    static get interface() {
        return HTMLStyleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Style}
 */
function style(init) {
    return new Style(init)
}


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return Sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Sub extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Sub}
 */
function sub(init) {
    return new Sub(init)
}


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summary", function() { return summary; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Summary extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Summary}
 */
function summary(init) {
    return new Summary(init)
}


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sup", function() { return Sup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sup", function() { return sup; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Sup extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Sup}
 */
function sup(init) {
    return new Sup(init)
}


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _caption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _thead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(179);
/* harmony import */ var _tfoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(184);
/* harmony import */ var _tbody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(180);
/* harmony import */ var _tr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(181);







const { map } = Array.prototype
const { HTMLTableElement } = window

class Table extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {HTMLTableCaptionElement}
     */
    createCaption() {
        return this.getInstanceOf(this.node.createCaption(), _caption__WEBPACK_IMPORTED_MODULE_1__["Caption"])
    }

    /**
     * Delete the table caption
     */
    deleteCaption() {
        this.node.deleteCaption()
    }
    
    /**
     * @returns {HTMLTableSectionElement}
     */
    createTHead() {
        return this.getInstanceOf(this.node.createTHead(), _thead__WEBPACK_IMPORTED_MODULE_2__["THead"])
    }

    /**
     * Delete the table caption
     */
    deleteTHead() {
        this.node.deleteTHead()
    }

    /**
     * @returns {HTMLTableSectionElement}
     */
    createTFoot() {
        return this.getInstanceOf(this.node.createTFoot(), _tfoot__WEBPACK_IMPORTED_MODULE_3__["TFoot"])
    }

    /**
     * Delete the table caption
     */
    deleteTFoot() {
        this.node.deleteTFoot()
    }

    /**
     * @returns {HTMLTableSectionElement}
     */
    createTBody() {
        return this.getInstanceOf(this.node.createTBody(), _tbody__WEBPACK_IMPORTED_MODULE_4__["TBody"])
    }

    /**
     * @param {Number} [index]
     * @returns {Tr}
     */
    insertRow(index) {
        return this.getInstanceOf(this.node.insertRow(index), _tr__WEBPACK_IMPORTED_MODULE_5__["Tr"])
    }

    /**
     * @param {Number} index
     */
    deleteRow(index) {
        this.node.deleteRow(index)
    }

    /**
     * @param {*} caption {Caption|HTMLTableCaptionElement|String}
     */
    set caption(caption) {
        const node = this.node
        if(caption instanceof _caption__WEBPACK_IMPORTED_MODULE_1__["Caption"]) {
            node.caption = caption.node
        }
        else if(typeof caption === 'string') {
            node.caption = new _caption__WEBPACK_IMPORTED_MODULE_1__["Caption"](caption)
        }
        else node.caption = caption
    }

    /**
     * @returns {HTMLTableCaptionElement}
     */
    get caption() {
        return this.node.caption
    }

    /**
     * @param {*} tHead {THead|HTMLTableSectionElement}
     */
    set tHead(tHead) {
        this.node.tHead = tHead instanceof _thead__WEBPACK_IMPORTED_MODULE_2__["THead"]?
            tHead.node :
            tHead
    }

    /**
     * @returns {THead}
     */
    get tHead() {
        return this.getInstanceOf(this.node.tHead, _thead__WEBPACK_IMPORTED_MODULE_2__["THead"])
    }

    /**
     * @param {*} tFoot {TFoot|HTMLTableSectionElement}
     */
    set tFoot(tFoot) {
        this.node.tFoot = tFoot instanceof _tfoot__WEBPACK_IMPORTED_MODULE_3__["TFoot"]?
            tFoot.node :
            tFoot
    }

    /**
     * @returns {TFoot}
     */
    get tFoot() {
        return this.getInstanceOf(this.node.tFoot, _tfoot__WEBPACK_IMPORTED_MODULE_3__["TFoot"])
    }

    /**
     * @returns {TBody[]}
     */
    get tBodies() {
        return map.call(this.node.tBodies, node => {
            return this.getInstanceOf(node, _tbody__WEBPACK_IMPORTED_MODULE_4__["TBody"])
        })
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => {
            return this.getInstanceOf(node, _tr__WEBPACK_IMPORTED_MODULE_5__["Tr"])
        })
    }

    /**
     * @returns {window.HTMLTableElement}
     */
    static get interface() {
        return HTMLTableElement
    }
}

/**
 * @param {*} [init]
 * @returns {Table}
 */
function table(init) {
    return new Table(init)
}


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THead", function() { return THead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thead", function() { return thead; });
/* harmony import */ var _tbody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);


class THead extends _tbody__WEBPACK_IMPORTED_MODULE_0__["TBody"] {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} [init]
 * @returns {THead}
 */
function thead(init) {
    return new THead(init)
}

const LOCAL_NAME = thead.name


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TBody", function() { return TBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tbody", function() { return tbody; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _tr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181);



const { map } = Array.prototype
const { HTMLTableSectionElement } = window

class TBody extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} [index]
     * @returns {Tr}
     */
    insertRow(index) {
        return this.getInstanceOf(this.node.insertRow(index), _tr__WEBPACK_IMPORTED_MODULE_1__["Tr"])
    }

    /**
     * @param {Number} index
     */
    deleteRow(index) {
        this.node.deleteRow(index)
    }

    /**
     * @returns {Tr[]}
     */
    get rows() {
        return map.call(this.node.rows, node => {
            return this.getInstanceOf(node, _tr__WEBPACK_IMPORTED_MODULE_1__["Tr"])
        })
    }

    /**
     * @returns {window.HTMLTableSectionElement}
     */
    static get interface() {
        return HTMLTableSectionElement
    }
}

/**
 * @param {*} [init]
 * @returns {TBody}
 */
function tbody(init) {
    return new TBody(init)
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tr", function() { return Tr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tr", function() { return tr; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _td__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony import */ var _th__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(183);




const { map } = Array.prototype
const { HTMLTableRowElement } = window

class Tr extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} [index]
     * @returns {Td}
     */
    insertCell(index) {
        return this.getInstanceOf(this.node.insertCell(index), _td__WEBPACK_IMPORTED_MODULE_1__["Td"])
    }

    /**
     * @param {Number} index
     */
    deleteCell(index) {
        this.node.deleteCell(index)
    }

    /**
     * @returns {Number}
     */
    get rowIndex() {
        return this.node.rowIndex
    }

    /**
     * @returns {Number}
     */
    get sectionRowIndex() {
        return this.node.sectionRowIndex
    }

    /**
     * @returns {(Td|Th)[]}
     */
    get cells() {
        return map.call(this.node.cells, node => {
            const assembler = node.tagName === 'TH'? _th__WEBPACK_IMPORTED_MODULE_2__["Th"] : _td__WEBPACK_IMPORTED_MODULE_1__["Td"]
            return this.getInstanceOf(node, assembler)
        })
    }

    /**
     * @returns {window.HTMLTableRowElement}
     */
    static get interface() {
        return HTMLTableRowElement
    }
}

/**
 * @param {*} [init]
 * @returns {Tr}
 */
function tr(init) {
    return new Tr(init)
}


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return Td; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "td", function() { return td; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLTableCellElement } = window

class Td extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {Number} colSpan
     */
    set colSpan(colSpan) {
        this.node.colSpan = colSpan
    }

    /**
     * @returns {Number}
     */
    get colSpan() {
        return this.node.colSpan
    }
    
    /**
     * @param {Number} rowSpan
     */
    set rowSpan(rowSpan) {
        this.node.rowSpan = rowSpan
    }

    /**
     * @returns {Number}
     */
    get rowSpan() {
        return this.node.rowSpan
    }

    /**
     * @param {Th[]} headers
     */
    set headers(headers) {
        this.node.headers = headers.map(({ id }) => id).join(' ')
    }

    /**
     * @returns {Th[]}
     */
    get headers() {
        const headers = this.node.headers
        return headers?
            headers.split(' ').map(id => {
                const node = document.getElementById(id)
                return node && this.getInstanceOf(node/*, Th*/) // fixme
            }) : []
    }

    /**
     * @returns {Number}
     */
    get cellIndex() {
        return this.node.cellIndex
    }

    /**
     * @returns {window.HTMLTableCellElement}
     */
    static get interface() {
        return HTMLTableCellElement
    }
}

/**
 * @param {*} [init]
 * @returns {Td}
 */
function td(init) {
    return new Td(init)
}


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "th", function() { return th; });
/* harmony import */ var _td__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);


class Th extends _td__WEBPACK_IMPORTED_MODULE_0__["Td"] {
    /**
     * @param {String} scope
     */
    set scope(scope) {
        this.node.scope = scope
    }

    /**
     * @returns {String}
     */
    get scope() {
        return this.node.scope
    }

    /**
     * @param {String} abbr
     */
    set abbr(abbr) {
        this.node.abbr = abbr
    }

    /**
     * @returns {String} 
     */
    get abbr() {
        return this.node.abbr
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} [init]
 * @returns {Th}
 */
function th(init) {
    return new Th(init)
}

const LOCAL_NAME = th.name


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TFoot", function() { return TFoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tfoot", function() { return tfoot; });
/* harmony import */ var _tbody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);


class TFoot extends _tbody__WEBPACK_IMPORTED_MODULE_0__["TBody"] {
    /**
     * @returns {String}
     */
    static get localName() {
        return LOCAL_NAME
    }
}

/**
 * @param {*} [init]
 * @returns {TFoot}
 */
function tfoot(init) {
    return new TFoot(init)
}

const LOCAL_NAME = tfoot.name


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var dommodule_lib_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const { HTMLTemplateElement } = window

class Template extends _element__WEBPACK_IMPORTED_MODULE_1__["HTMLElementAssembler"] {
    /**
     * @returns {DocumentFragmentAssembler}
     */
    get content() {
        return this.getInstanceOf(this.node.content, dommodule_lib_fragment__WEBPACK_IMPORTED_MODULE_0__["DocumentFragmentAssembler"])
    }

    /**
     * @returns {window.HTMLTemplateElement}
     */
    static get interface() {
        return HTMLTemplateElement
    }
}

/**
 * @param {*} [init]
 * @returns {Template}
 */
function template(init) {
    return new Template(init)
}


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textarea", function() { return textarea; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);



const { HTMLTextAreaElement } = window

class TextArea extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {Boolean}
     */
    checkValidity() {
        return this.node.checkValidity()
    }

    /**
     * @returns {Boolean}
     */
    reportValidity() {
        return this.node.reportValidity()
    }

    /**
     * Select the input
     */
    select() {
        this.node.select()
    }

    /**
     * @param {String} error
     */
    setCustomValidity(error) {
        this.node.setCustomValidity(error)
    }

    /**
     * @param {*} args
     */
    setRangeText(...args) {
        this.node.setRangeText(...args)
    }

    /**
     * @param {*} args
     */
    setSelectionRange(...args) {
        this.node.setSelectionRange(...args)
    }

    /**
     * @param {String} autocomplete
     */
    set autocomplete(autocomplete) {
        this.node.autocomplete = autocomplete
    }

    /**
     * @returns {String}
     */
    get autocomplete() {
        return this.node.autocomplete
    }

    /**
     * @param {Boolean} autofocus
     */
    set autofocus(autofocus) {
        this.node.autofocus = autofocus
    }

    /**
     * @returns {Boolean}
     */
    get autofocus() {
        return this.node.autofocus
    }

    /**
     * @param {Number} cols
     */
    set cols(cols) {
        this.node.cols = cols
    }

    /**
     * @returns {Number}
     */
    get cols() {
        return this.node.cols
    }
    
    /**
     * @param {String} dirName
     */
    set dirName(dirName) {
        this.node.dirName = dirName
    }

    /**
     * @returns {String}
     */
    get dirName() {
        return this.node.dirName
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.node.disabled = disabled
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.node.disabled
    }

    /**
     * @returns {*}
     */
    get form() {
        return this.node.form
    }
    
    /**
     * @param {String} inputMode
     */
    set inputMode(inputMode) {
        this.node.inputMode = inputMode
    }

    /**
     * @returns {String}
     */
    get inputMode() {
        return this.node.inputMode
    }

    /**
     * @param {Number} maxLength
     */
    set maxLength(maxLength) {
        this.node.maxLength = maxLength
    }

    /**
     * @returns {Number}
     */
    get maxLength() {
        return this.node.maxLength
    }
    
    /**
     * @param {Number} minLength
     */
    set minLength(minLength) {
        this.node.minLength = minLength
    }

    /**
     * @returns {Number}
     */
    get minLength() {
        return this.node.minLength
    }
    
    /**
     * @param {String} name
     */
    set name(name) {
        this.node.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.node.name
    }

    /**
     * @param {String} placeholder
     */
    set placeholder(placeholder) {
        this.node.placeholder = placeholder
    }

    /**
     * @returns {String}
     */
    get placeholder() {
        return this.node.placeholder
    }

    /**
     * @param {Boolean} readOnly
     */
    set readOnly(readOnly) {
        this.node.readOnly = readOnly
    }

    /**
     * @returns {Boolean}
     */
    get readOnly() {
        return this.node.readOnly
    }

    /**
     * @param {Boolean} required
     */
    set required(required) {
        this.node.required = required
    }

    /**
     * @returns {Boolean}
     */
    get required() {
        return this.node.required
    }

    /**
     * @param {Number} rows
     */
    set rows(rows) {
        this.node.rows = rows
    }

    /**
     * @returns {Number}
     */
    get rows() {
        return this.node.rows
    }

    /**
     * @param {String} wrap
     */
    set wrap(wrap) {
        this.node.wrap = wrap
    }

    /**
     * @returns {String}
     */
    get wrap() {
        return this.node.wrap
    }

    /**
     * @param {String} step
     */
    set step(step) {
        this.node.step = step
    }

    /**
     * @returns {String}
     */
    get step() {
        return this.node.step
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.type
    }

    /**
     * @param {String} defaultValue
     */
    set defaultValue(defaultValue) {
        this.node.defaultValue = defaultValue
    }

    /**
     * @returns {String}
     */
    get defaultValue() {
        return this.node.defaultValue
    }

    /**
     * @param {String} value
     */
    set value(value) {
        this.node.value = value
    }

    /**
     * @returns {String}
     */
    get value() {
        return this.node.value
    }

    /**
     * @returns {Number}
     */
    get textLength() {
        return this.node.textLength
    }
    
    /**
     * @returns {Boolean}
     */
    get willValidate() {
        return this.node.willValidate
    }

    /**
     * @returns {*}
     */
    get validity() {
        return this.node.validity
    }

    /**
     * @returns {String}
     */
    get validationMessage() {
        return this.node.validationMessage
    }

    /**
     * @returns {(Label)[]}
     */
    get labels() {
        const handler = node => this.getInstanceOf(node, _label__WEBPACK_IMPORTED_MODULE_1__["Label"])
        return map.call(this.node.labels, handler)
    }

    /**
     * @param {Number} selectionStart
     */
    set selectionStart(selectionStart) {
        this.node.selectionStart = selectionStart
    }

    /**
     * @returns {Number}
     */
    get selectionStart() {
        return this.node.selectionStart
    }

    /**
     * @param {Number} selectionEnd
     */
    set selectionEnd(selectionEnd) {
        this.node.selectionEnd = selectionEnd
    }

    /**
     * @returns {Number}
     */
    get selectionEnd() {
        return this.node.selectionEnd
    }

    /**
     * @param {String} selectionDirection
     */
    set selectionDirection(selectionDirection) {
        this.node.selectionDirection = selectionDirection
    }

    /**
     * @returns {String}
     */
    get selectionDirection() {
        return this.node.selectionDirection
    }
    
    /**
     * @returns {window.HTMLTextAreaElement}
     */
    static get interface() {
        return HTMLTextAreaElement
    }
}

/**
 * @param {*} [init]
 * @returns {TextArea}
 */
function textarea(init) {
    return new TextArea(init)
}


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLTimeElement } = window

class Time extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} dateTime
     */
    set dateTime(dateTime) {
        this.node.dateTime = dateTime
    }

    /**
     * @returns {String}
     */
    get dateTime() {
        return this.node.dateTime
    }

    /**
     * @returns {window.HTMLTimeElement}
     */
    static get interface() {
        return HTMLTimeElement
    }
}

/**
 * @param {*} [init]
 * @returns {Time}
 */
function time(init) {
    return new Time(init)
}


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLTitleElement } = window

class Title extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} text
     */
    set text(text) {
        this.node.text = text
    }

    /**
     * @returns {String}
     */
    get text() {
        return this.node.text
    }

    /**
     * @returns {window.HTMLTitleElement}
     */
    static get interface() {
        return HTMLTitleElement
    }
}

/**
 * @param {*} [init]
 * @returns {Title}
 */
function title(init) {
    return new Title(init)
}


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "track", function() { return track; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLTrackElement } = window

class Track extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @param {String} kind
     */
    set kind(kind) {
        this.node.kind = kind
    }

    /**
     * @returns {String}
     */
    get kind() {
        return this.node.kind 
    }

    /**
     * @param {String} src
     */
    set src(src) {
        this.node.src = src
    }

    /**
     * @returns {String}
     */
    get src() {
        return this.node.src
    }

    /**
     * @param {String} srclang
     */
    set srclang(srclang) {
        this.node.srclang = srclang
    }

    /**
     * @returns {String}
     */
    get srclang() {
        return this.node.srclang
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.node.label = label
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.node.label
    }

    /**
     * @param {Boolean} value
     */
    set default(value) {
        this.node.default = value
    }

    /**
     * @returns {Boolean}
     */
    get default() {
        return this.node.default
    }

    /**
     * @returns {Number}
     */
    get readyState() {
        return this.node.readyState
    }

    /**
     * @returns {TextTrack}
     */
    get track() {
        return this.node.track
    }

    /**
     * @returns {window.HTMLTrackElement}
     */
    static get interface() {
        return HTMLTrackElement
    }
}

/**
 * @param {*} [init]
 * @returns {Track}
 */
function track(init) {
    return new Track(init)
}


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return u; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class U extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {U}
 */
function u(init) {
    return new U(init)
}


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ul", function() { return ul; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const { HTMLUListElement } = window

class Ul extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {
    /**
     * @returns {window.HTMLUListElement}
     */
    static get interface() {
        return HTMLUListElement
    }
}

/**
 * @param {*} [init]
 * @returns {Ul}
 */
function ul(init) {
    return new Ul(init)
}


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Var", function() { return Var; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return variable; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Var extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * The different naming is used to avoid a confilct
 * with the legacy `var` JavaScript keyword
 *
 * @param {*} [init]
 * @returns {Var}
 */
function variable(init) {
    return new Var(init)
}


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "video", function() { return video; });
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);


const { HTMLVideoElement } = window

class Video extends _media__WEBPACK_IMPORTED_MODULE_0__["HTMLMediaAssembler"] {
    /**
     * @param {Number} width
     */
    set width(width) {
        this.node.width = width
    }

    /**
     * @returns {Number}
     */
    get width() {
        return this.node.width
    }

    /**
     * @param {Number} height
     */
    set height(height) {
        this.node.height = height
    }

    /**
     * @returns {Number}
     */
    get height() {
        return this.node.height
    }

    /**
     * @returns {Number}
     */
    get videoWidth() {
        return this.node.videoWidth
    }

    /**
     * @returns {Number}
     */
    get videoHeight() {
        return this.node.videoHeight
    }

    /**
     * @param {String} poster
     */
    set poster(poster) {
        this.node.poster = poster
    }

    /**
     * @returns {String}
     */
    get poster() {
        return this.node.poster
    }

    /**
     * @returns {window.HTMLVideoElement}
     */
    static get interface() {
        return HTMLVideoElement
    }
}

/**
 * @param {*} [init]
 * @returns {Video}
 */
function video(init) {
    return new Video(init)
}


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wbr", function() { return Wbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wbr", function() { return wbr; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Wbr extends _element__WEBPACK_IMPORTED_MODULE_0__["HTMLElementAssembler"] {}

/**
 * @param {*} [init]
 * @returns {Wbr}
 */
function wbr(init) {
    return new Wbr(init)
}


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



/**
 * @summary A set of user interface objects which are not intended to be included
 *  in a page summary or table of contents by assistive technologies.
 * @see https://www.w3.org/TR/wai-aria-1.1/#group
 */
class Group extends _section__WEBPACK_IMPORTED_MODULE_0__["Section"] {
    /**
     * @param {*} activeDescendant
     */
    set activeDescendant(activeDescendant) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["ActiveDescendant"], activeDescendant)
    }

    /**
     * @returns {ElementAssembler|null}
     */
    get activeDescendant() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["ActiveDescendant"])
    }

    /**
     * @returns {Boolean}
     */
    static get abstract() {
        return false
    }
}

/**
 * @param {*} [init]
 * @returns {Group}
 */
function group(init) {
    return new Group(init)
}


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



/**
 * @summary A renderable structural containment unit in a document or application.
 * @see https://www.w3.org/TR/wai-aria-1.1/#section
 * @abstract
 */
class Section extends _structure__WEBPACK_IMPORTED_MODULE_0__["Structure"] {
    /**
     * @param {String} expanded
     */
    set expanded(expanded) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Expanded"], expanded)
    }

    /**
     * @returns {String}
     */
    get expanded() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Expanded"])
    }
}


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Structure", function() { return Structure; });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _roletype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(198);



/**
 * @summary A document structural element.
 * @see https://www.w3.org/TR/wai-aria-1.1/#structure
 * @abstract
 */
class Structure extends _roletype__WEBPACK_IMPORTED_MODULE_1__["RoleType"] {
    /**
     * @returns {String}
     */
    static get elementAssembler() {
        return htmlmodule__WEBPACK_IMPORTED_MODULE_0__["Div"]
    }
}


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleType", function() { return RoleType; });
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



/**
 * @summary The base role from which all other roles in this taxonomy inherit.
 * @see https://www.w3.org/TR/wai-aria-1.1/#roletype
 * @abstract
 */
class RoleType extends _role__WEBPACK_IMPORTED_MODULE_0__["RoleAttrAssembler"] {
    /**
     * @param {Boolean} atomic
     */
    set atomic(atomic) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Atomic"], atomic)
    }

    /**
     * @returns {Boolean}
     */
    get atomic() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Atomic"])
    }

    /**
     * @param {Boolean} busy
     */
    set busy(busy) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Busy"], busy)
    }

    /**
     * @returns {Boolean}
     */
    get busy() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Busy"])
    }

    /**
     * @param {*} controls
     */
    set controls(controls) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Controls"], controls)
    }

    /**
     * @returns {*[]}
     */
    get controls() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Controls"])
    }

    /**
     * @param {String} current
     */
    set current(current) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Current"], current)
    }

    /**
     * @returns {String}
     */
    get current() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Current"])
    }

    /**
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Disabled"], disabled)
    }

    /**
     * @returns {Boolean}
     */
    get disabled() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Disabled"])
    }

    /**
     * @param {String} dropEffect
     */
    set dropEffect(dropEffect) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["DropEffect"], dropEffect)
    }

    /**
     * @returns {String}
     */
    get dropEffect() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["DropEffect"])
    }

    /**
     * @param {ElementAssembler|RoleAttrAssembler|*|null} errorMessage
     */
    set errorMessage(errorMessage) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], errorMessage)
    }

    /**
     * @returns {*} {NodeAssembler|null}
     */
    get errorMessage() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"])
    }

    /**
     * @param {String} grabbed
     */
    set grabbed(grabbed) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Grabbed"], grabbed)
    }

    /**
     * @returns {String}
     */
    get grabbed() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Grabbed"])
    }

    /**
     * @param {String} hasPopup
     */
    set hasPopup(hasPopup) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["HasPopup"], hasPopup)
    }

    /**
     * @returns {String}
     */
    get hasPopup() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["HasPopup"])
    }

    /**
     * @param {Boolean} hidden
     */
    set hidden(hidden) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Hidden"], hidden)
    }

    /**
     * @returns {Boolean}
     */
    get hidden() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Hidden"])
    }

    /**
     * @param {String} invalid
     */
    set invalid(invalid) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Invalid"], invalid)
    }

    /**
     * @returns {String}
     */
    get invalid() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Invalid"])
    }

    /**
     * @param {String} keyShortCuts
     */
    set keyShortCuts(keyShortCuts) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["KeyShortCuts"], keyShortCuts)
    }

    /**
     * @returns {String}
     */
    get keyShortCuts() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["KeyShortCuts"])
    }

    /**
     * @param {String} label
     */
    set label(label) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Label"], label)
    }

    /**
     * @returns {String}
     */
    get label() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Label"])
    }

    /**
     * @param {*} labelledBy {(NodeAssembler|Node|String)[]}
     */
    set labelledBy(labelledBy) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["LabelledBy"], labelledBy)
    }

    /**
     * @returns {NodeAssembler[]}
     */
    get labelledBy() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["LabelledBy"])
    }

    /**
     * @param {String} live
     */
    set live(live) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Live"], live)
    }

    /**
     * @returns {String}
     */
    get live() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Live"])
    }

    /**
     * @param {NodeAssembler[]|*} owns
     */
    set owns(owns) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Owns"], owns)
    }

    /**
     * @returns {NodeAssembler[]|*}
     */
    get owns() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Owns"])
    }

    /**
     * @param {String[]} relevant
     */
    set relevant(relevant) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Relevant"], relevant)
    }

    /**
     * @returns {String[]}
     */
    get relevant() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["Relevant"])
    }

    /**
     * @param {String} roleDescription
     */
    set roleDescription(roleDescription) {
        this.setAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["RoleDescription"], roleDescription)
    }

    /**
     * @returns {String}
     */
    get roleDescription() {
        return this.getAttribute(_aria__WEBPACK_IMPORTED_MODULE_1__["RoleDescription"])
    }
}


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleAttrAssembler", function() { return RoleAttrAssembler; });
/* harmony import */ var dommodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _aria_aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



let undefined
const { getPrototypeOf } = Object
const { prototype : { map } } = Array
const { document } = window

const CLASS_PREFIX_RE = /^ARIA/
const EMPTY_STRING = ''
const ROLE_ATTR_NAME = 'role'
const ROLE_SEPARATOR = ' '
const UNIQUE_ID_MULTIPLIER = 1e10

/**
 * @see https://www.w3.org/TR/wai-aria-1.1/#host_general_role
 * @see https://www.w3.org/TR/html/dom.html#aria-role-attribute
 * @see https://www.w3.org/TR/role-attribute
 * @abstract
 */
class RoleAttrAssembler extends dommodule__WEBPACK_IMPORTED_MODULE_0__["AttrAssembler"] {
    /**
     * @param {*} [init]
     */
    create(init) {
        super.create(init)
        this.node.value = this.constructor.roleList.join(ROLE_SEPARATOR)
        if(init && init.constructor === Object && init.hasOwnProperty('ownerElement')) {
            this.ownerElement = init.ownerElement
        }
    }

    /**
     * @param {*} [init]
     */
    assign(init) {
        if(!init.hasOwnProperty('className')) {
            this.className = this.node.value
        }
        super.assign(init)
    }

    /**
     * @param {*} items
     */
    after(...items) {
        this.ownerElement.after(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {*} items
     */
    append(...items) {
        this.ownerElement.append(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {*} child
     */
    appendChild(child) {
        this.ownerElement.appendChild(child)
    }

    /**
     * @param {*} items
     */
    before(...items) {
        this.ownerElement.before(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * @param {Function} assembler
     * @returns {*|null}
     */
    closest(assembler) {
        return this.ownerElement.closest(assembler)
    }

    /**
     * @param {NodeAssembler|Node|*} node
     * @returns {Boolean}
     */
    contains(node) {
        return this.ownerElement.contains(node)
    }

    /**
     * @param {*} args
     */
    emit(...args) {
        this.ownerElement.emit(...args)
    }

    /**
     * @param {Function} assembler
     * @param {String} [selectorPart]
     * @returns {*}
     * fixme
     */
    find(assembler, selectorPart) {
        let selector = assembler.selector
        if(selectorPart) selector += selectorPart
        const node = this.ownerElement.node.querySelector(selector)
        if(node) {
            const element = this.getInstanceOf(node, assembler)
            const isAttr = assembler === dommodule__WEBPACK_IMPORTED_MODULE_0__["AttrAssembler"]
                || dommodule__WEBPACK_IMPORTED_MODULE_0__["AttrAssembler"].isPrototypeOf(assembler)
            return isAttr?
                element.getAttributeNode(assembler) :
                element
        }
        return null
    }

    /**
     * @param {Function} assembler
     * @param {String} [selectorPart]
     * @returns {(RoleAttrAssembler|ElementAssembler|*)[]}
     * fixme
     */
    findAll(assembler, selectorPart) {
        let selector = assembler.selector
        if(selectorPart) selector += selectorPart
        const collection = this.ownerElement.node.querySelectorAll(selector)
        const isAttr = assembler === dommodule__WEBPACK_IMPORTED_MODULE_0__["AttrAssembler"]
            || dommodule__WEBPACK_IMPORTED_MODULE_0__["AttrAssembler"].isPrototypeOf(assembler)
        return map.call(collection, node => {
            const element = this.getInstanceOf(node, assembler)
            return isAttr?
                element.getAttributeNode(assembler) :
                element
        })
    }

    /**
     * Focus the owner element
     */
    focus() {
        this.ownerElement.focus()
    }

    /**
     * Generate unique identifier among the document
     * @returns {String}
     */
    generateUniqueId() {
        const doc = this.node.ownerDocument || document
        let id
        do id = this.constructor.generateId()
        while(doc.getElementById(id))
        return id
    }

    /**
     * @param {*} attr
     * @returns {*}
     */
    getAttribute(attr) {
        const instance = this.ownerElement.getAttributeNode(attr)
        if(instance) return instance.value
        else {
            return typeof attr === 'function'?
                attr.defaultValue :
                this.constructor.attrAssembler.defaultValue
        }
    }

    getElementOf() {
        // todo
    }

    /**
     * @param {Node|NodeAssembler|*} target
     * @returns {RoleAttrAssembler|null|*}
     */
    getRoleOf(target) {
        const instance = this.getInstanceOf(target)
        return instance instanceof RoleAttrAssembler?
            instance :
            instance && instance.role || null
    }

    /**
     * @param {Function|String} attr
     */
    hasAttribute(attr) {
        return this.ownerElement.hasAttribute(attr)
    }

    /**
     * @param {*} items
     */
    prepend(...items) {
        this.ownerElement.prepend(...items.map(item => {
            return item instanceof RoleAttrAssembler?
                item.ownerElement :
                item
        }))
    }

    /**
     * Remove the onwer element from a tree
     */
    remove() {
        this.ownerElement.remove()
    }

    /**
     * @param {Function|String} attr
     */
    removeAttribute(attr) {
        this.ownerElement.removeAttribute(attr)
    }

    /**
     * @param {*} child
     */
    removeChild(child) {
        this.ownerElement.removeChild(child)
    }

    /**
     * @param {*} args
     */
    on(...args) {
        this.ownerElement.on(...args)
    }

    /**
     * @param {Function|String} attr
     * @param {*} value
     */
    setAttribute(attr, value) {
        this.ownerElement.setAttribute(attr, value)
    }

    /**
     * @param {String} name
     * @param {String} value
     */
    setProperty(name, value) {
        if(value !== undefined) {
            if(name === 'name') this.name = value
            else if(name in this.constructor || name === 'ownerElement') {
                void null
            }
            else if(name in this) {
                this[name] = value
            }
            else {
                const ownerElement = this.ownerElement
                if(name in ownerElement) {
                    ownerElement[name] = value
                }
                else if(name in ownerElement.node) {
                    ownerElement.node[name] = value
                }
                else this.setPropertyMismatch(name)
            }
        }
    }

    /**
     * @param {*} args
     */
    un(...args) {
        this.ownerElement.un(...args)
    }

    /**
     * @param {*} childNodes
     */
    set childNodes(childNodes) {
        this.ownerElement.childNodes = childNodes
    }

    /**
     * @returns {(ChildNodeAssembler)[]}
     */
    get childNodes() {
        return this.ownerElement.childNodes
    }

    /**
     * @param {*} children
     */
    set children(children) {
        this.ownerElement.children = children
    }

    /**
     * @returns {(ElementAssembler)[]}
     */
    get children() {
        return this.ownerElement.children
    }

    /**
     * @param {*} classList
     */
    set classList(classList) {
        this.ownerElement.classList = classList
    }

    /**
     * @returns {DOMTokenList}
     */
    get classList() {
        return this.ownerElement.classList
    }

    /**
     * @param {String} className
     */
    set className(className) {
        this.ownerElement.className = className
    }

    /**
     * @returns {String}
     */
    get className() {
        return this.ownerElement.className
    }

    /**
     * @param {*} dataset
     */
    set dataset(dataset) {
        this.ownerElement.dataset = dataset
    }

    /**
     * @returns {DOMStringMap}
     */
    get dataset() {
        return this.ownerElement.dataset
    }

    /**
     * @returns {Number}
     */
    get elementIndex() {
        return this.ownerElement.elementIndex
    }

    /**
     * @param {String} id
     */
    set id(id) {
        this.ownerElement.id = id
    }

    /**
     * @return {String}
     */
    get id() {
        return this.ownerElement.id || (this.id = this.generateUniqueId())
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this.dataset.name = name
    }

    /**
     * @returns {String}
     */
    get name() {
        return this.dataset.name
    }

    /**
     * @param {*} ownerElement
     */
    set ownerElement(ownerElement) {
        super.ownerElement = ownerElement
    }

    /**
     * @returns {*}
     */
    get ownerElement() {
        return super.ownerElement || (this.ownerElement = new this.constructor.elementAssembler)
    }

    /**
     * @param {*} parentNode
     */
    set parentNode(parentNode) {
        this.ownerElement.parentNode = parentNode
    }

    /**
     * @returns {ParentNodeAssembler|*|null}
     */
    get parentNode() {
        return this.ownerElement.parentNode
    }

    get parentRole() {
        // todo
    }

    /**
     * @param {*} style
     */
    set style(style) {
        this.ownerElement.style = style
    }

    /**
     * @returns {CSSStyleDeclaration}
     */
    get style() {
        return this.ownerElement.style
    }

    /**
     * @param {Number} tabIndex
     */
    set tabIndex(tabIndex) {
        this.ownerElement.tabIndex = tabIndex
    }

    /**
     * @returns {Number}
     */
    get tabIndex() {
        return this.ownerElement.tabIndex
    }

    /**
     * @param {String} textContent
     */
    set textContent(textContent) {
        this.ownerElement.textContent = textContent
    }

    /**
     * @returns {String}
     */
    get textContent() {
        return this.ownerElement.textContent
    }

    /**
     * @param {*} [init]
     */
    static create(init) {
        if(this.abstract) {
            throw TypeError(`Could not create an abstract ${ this.name } instance`)
        }
        return document.createAttribute(this.qualifiedName)
    }
    
    /**
     * @returns {String}
     */
    static generateId() {
        return this.name + Math.floor(Math.random() * UNIQUE_ID_MULTIPLIER)
    }

    static getRoleOf(object) {
        // todo
    }

    /*static get ownerElement() {
        return null
    }*/

    /**
     * @see https://www.w3.org/TR/wai-aria-1.1/#isAbstract
     * @returns {Boolean}
     */
    static get abstract() {
        return true
    }

    /**
     * @returns {Function}
     */
    static get attrAssembler() {
        return _aria_aria__WEBPACK_IMPORTED_MODULE_1__["ARIAAttrAssembler"]
    }

    /**
     * @returns {String}
     */
    static get defaultPropertyName() {
        return dommodule__WEBPACK_IMPORTED_MODULE_0__["ElementAssembler"].defaultPropertyName
    }

    /**
     * @returns {String}
     */
    static get localName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {String}
     */
    static get qualifiedName() {
        return ROLE_ATTR_NAME
    }

    /**
     * @returns {String}
     */
    static get selector() {
        return this.abstract?
            `[${ ROLE_ATTR_NAME }]` :
            `[${ ROLE_ATTR_NAME }~=${ this.role }]`
    }

    /**
     * @returns {String}
     */
    static get role() {
        return this.name.replace(CLASS_PREFIX_RE, EMPTY_STRING).toLowerCase()
    }

    /**
     * @returns {String[]}
     */
    static get roleList() {
        const list = []
        let object = this
        do if(object.abstract === false) {
            list.push(object.role)
        }
        while((object = getPrototypeOf(object)) && ROLE_ATTR_NAME in object)
        return list
    }
}

const proto = dommodule__WEBPACK_IMPORTED_MODULE_0__["ElementAssembler"].prototype
const appendChild = proto.appendChild

/**
 * @param {AttrAssembler|ChildNodeAssembler|Node|*} child
 */
proto.appendChild = function(child) {
    if(child instanceof RoleAttrAssembler) {
        child.parentNode = this.node
    }
    else appendChild.call(this, child)
}

Object.defineProperty(proto, 'role', {
    configurable : true,
    /**
     * @returns {RoleAttrAssembler}
     */
    get() {
        return this.getAttributeNode(RoleAttrAssembler)
    }
})


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony import */ var ariamodule_lib_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _navbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(201);
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206);





class Album extends htmlmodule__WEBPACK_IMPORTED_MODULE_1__["Article"] {
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
            new _slide__WEBPACK_IMPORTED_MODULE_3__["Slide"]({
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
        const next = this.find(_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"], '[data-position=next]')
        if(next && !next.busy && !this.transition) {
            const prev = this.find(_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"], '[data-position=prev]')
            const current = this.find(_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"], '[data-position=current]')
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
        const prev = this.find(_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"], '[data-position=prev]')
        if(prev && !prev.busy && !this.transition) {
            const current = this.find(_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"], '[data-position=current]')
            const next = this.find(_slide__WEBPACK_IMPORTED_MODULE_3__["Slide"], '[data-position=next]')
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
        const items = this._items = data.querySelectorAll('a')
        this.children = [
            this._details = new htmlmodule__WEBPACK_IMPORTED_MODULE_1__["Details"]({
                classList : 'albuminfo',
                children : [
                    new htmlmodule__WEBPACK_IMPORTED_MODULE_1__["Summary"](data.querySelector('h1').innerText),
                    new htmlmodule__WEBPACK_IMPORTED_MODULE_1__["Div"](Array.from(data.querySelectorAll('p')))
                ]
            }),
            new _navbutton__WEBPACK_IMPORTED_MODULE_2__["PrevSlide"]({ onclick : event => this.prevSlide() }),
            this._group = new ariamodule_lib_group__WEBPACK_IMPORTED_MODULE_0__["Group"],
            new _navbutton__WEBPACK_IMPORTED_MODULE_2__["NextSlide"]({ onclick : event => this.nextSlide() })
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


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevAlbum", function() { return PrevAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextAlbum", function() { return NextAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevSlide", function() { return PrevSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextSlide", function() { return NextSlide; });
/* harmony import */ var htmlmodule_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _graphics_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(202);
/* harmony import */ var _graphics_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graphics_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphics_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(203);
/* harmony import */ var _graphics_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_graphics_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphics_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(204);
/* harmony import */ var _graphics_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_graphics_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphics_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(205);
/* harmony import */ var _graphics_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_graphics_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__);






class NavButton extends htmlmodule_lib_button__WEBPACK_IMPORTED_MODULE_0__["Button"] {
    init(init) {
        super.init(init)
        this.classList.add('navbutton', this.constructor.name.toLowerCase())
    }
}

class PrevAlbum extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Предыдущий альбом'
        this.innerHTML = _graphics_arrow_up_svg__WEBPACK_IMPORTED_MODULE_1___default.a
    }
}

class NextAlbum extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Следующий альбом'
        this.innerHTML = _graphics_arrow_down_svg__WEBPACK_IMPORTED_MODULE_2___default.a
    }
}

class PrevSlide extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Следующий слайд'
        this.innerHTML = _graphics_arrow_left_svg__WEBPACK_IMPORTED_MODULE_3___default.a
    }
}

class NextSlide extends NavButton {
    init(init) {
        super.init(init)
        this.label = 'Следующий слайд'
        this.innerHTML = _graphics_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4___default.a
    }
}




/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"20\" viewBox=\"0 0 40 20\">\n    <path d=\"M 1 19 L 19 1 L 39 19\" stroke-width=\"0\" fill=\"#fff\"/>\n</svg>\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"20\" viewBox=\"0 0 40 20\">\n    <path d=\"M 1 1 L 19 19 L 39 1\" stroke-width=\"0\" fill=\"#fff\"/>\n</svg>\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"40\" viewBox=\"0 0 20 40\">\n    <path d=\"M 19 1 L 1 19 L 19 39\" stroke-width=\"0\" fill=\"#fff\"/>\n</svg>\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"40\" viewBox=\"0 0 20 40\">\n    <path d=\"M 1 1 L 19 19 L 1 39\" stroke-width=\"0\" fill=\"#fff\"/>\n</svg>\n"

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);


const transparent = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='

class Slide extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__["Img"] {
    init(init) {
        super.init(init)
        this.classList.add('slide')
        this.on('load', this.onLoad = this.onLoad.bind(this))
    }

    onLoad(event) {
        this.un('load', this.onLoad)
        this.style.backgroundImage = `url(${ this.src })`
        this.node.src = transparent
        this.busy = false
        this.emit('slideready', { bubbles : true })
    }

    get next() {
        return this.nextElementSibling || this.parentElement.firstElementChild
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

    set src(src) {
        this.busy = true
        super.src = src
    }

    get src() {
        return super.src
    }
}


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony import */ var htmlmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _graphics_menubutton_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208);
/* harmony import */ var _graphics_menubutton_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_graphics_menubutton_svg__WEBPACK_IMPORTED_MODULE_1__);



class MenuButton extends htmlmodule__WEBPACK_IMPORTED_MODULE_0__["Button"] {
    init(init) {
        super.init(init)
        this.innerHTML = _graphics_menubutton_svg__WEBPACK_IMPORTED_MODULE_1___default.a
        this.on('click', this.onClick.bind(this))
    }

    onClick(event) {
        const info = document.getElementById('info')
        const gallery = document.getElementById('gallery')
        this.pressed = String(gallery.hidden = !(info.hidden = !info.hidden))
    }
}


/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\">\n    <path d=\"M 0 1 L 18 1 M 0 8 L 18 8 M 0 15 L 18 15\" stroke=\"#fff\" stroke-width=\"2\" fill=\"transparent\"/>\n</svg>\n"

/***/ })
/******/ ]);