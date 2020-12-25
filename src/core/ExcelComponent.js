import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {

    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribes = []


        this.prepare()
    }

    // settings our component to init
    prepare() {

    }

    toHTML() {
        return ''
    }

    // Notification listeners about Event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Subscribe on Event

    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribes.push(unsub)
    }

    // init component
    // add DOM listeners
    init() {
        this.initDOMListeners()
    }

    // Add component
    // Clear listeners
    destroy() {
        this.removeDOMListeners()
        this.unsubscribes.forEach(unsub => unsub())
    }
}
