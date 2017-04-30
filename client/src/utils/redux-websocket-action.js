import wsReconnect from 'ws-reconnect';

class WSActions {

    constructor(store, url, options) {
        this.store = store;
        this.url = url;
        this.socket = new wsReconnect(url, options);
    }

    start() {
        console.log(this.socket);
        this.socket.start();
        this.socket.on("message",this.onMessage.bind(this));
    }

    stop() {
        this.socket.destroy();
    }

    onMessage(message) {
        console.log(message);
        console.log(this.store);
    }

}

export default WSActions;