class EventEmitter {
    _events = {}

    on(eventName, handler) {
        if (this._events.hasOwnProperty(eventName)) {
            const prevHandler = this._events[eventName];
            this._events[eventName] = [prevHandler];
            this._events[eventName].push(handler);
        } else {
            this._events[eventName] = handler;
        }
    }

    emit(eventName, ...args) {
        if (this._events.hasOwnProperty(eventName)) {
            if (Array.isArray(this._events[eventName])) {
                this._events[eventName].forEach(fun => {
                    fun();
                });
                console.log(...args)
            } else {
                this._events[eventName]();
                console.log(...args)
            }
        }
    }

    once(eventName) {
        this.emit(eventName);
        delete this._events[eventName];
    }
}

const emitter = new EventEmitter;

const sayHello = () => {
    console.log('hello world!')
}
const sayHii = () => {
    console.log('Hii!')
}
emitter.on('abc', sayHello)
emitter.on('abc', sayHii)

emitter.emit('abc', 1, 3,  4, 5);