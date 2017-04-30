//import wsReconnect from 'ws-reconnect';

class WSActions {

    constructor(store, url, options) {
        this.store = store;
        this.url = url;
        this.socket = new WebSocket(url);
    }

    start() {
        console.log(this.socket);
        this.socket.onmessage = this.onMessage.bind(this);
    }

    onMessage(message) {
        console.log(message);
        console.log(this.store);
        this.store.dispatch({
            type: 'FETCH_POSTS',
            payload: null
        });
    }

}

export default WSActions;