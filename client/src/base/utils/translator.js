

export default function (intlProvider,messageId) {
	try{
		let messages = intlProvider.messages;
		let localizeMessages = messages[messageId];
		return intlProvider.formatMessage(localizeMessages);
	}catch(e){
		return messageId;
	}
	
};

export function xxx(wrrapedComponent) {
    wrrapedComponent.prototype.T = function (messageId) {
        try{
            let messages = this.props.intl.messages;
            let localizeMessages = messages[messageId];
            return this.props.intl.formatMessage(localizeMessages);
        }catch(e){
            return messageId;
        }
	};

	return wrrapedComponent;
}