

export default function (intlProvider,messageId) {
	try{
		let messages = intlProvider.messages;
		let localizeMessages = messages[messageId];
		return intlProvider.formatMessage(localizeMessages);
	}catch(e){
		return messageId;
	}
	
};