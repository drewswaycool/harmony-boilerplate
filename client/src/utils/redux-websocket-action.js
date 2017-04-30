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

        try {
            const dispatchAction = JSON.parse(data);

            if (dispatchAction.WS_ACTION && dispatchAction.action) {
                this.store.dispatch(dispatchAction.action);
            }
        }

        catch (e) {
            if(process.env.NODE_ENV === 'development') {
                console.log("dispatchAction faild: ", e);
            }
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