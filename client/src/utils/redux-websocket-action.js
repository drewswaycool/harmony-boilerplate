const wsReconnectClient = require('ws-reconnect-js');

class WSActions {

    constructor(store, url, options) {
        this.store = store;
        this.url = url;
        this._socket = new wsReconnectClient(url, options,{
			onMessageHandler:this.onMessage.bind(this)
		});
		
    }
	onMessage(msg,data) {
        console.log(msg);
        console.log(data);

        if (data.WS_ACTION) {
            console.log(this.store);
        }
	}
    start() {
        this._socket.start();
    }

    stop() {
        this._socket.destroy();
    }


}

export default WSActions;