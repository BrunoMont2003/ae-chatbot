import axios from "axios";

function sendResponse(data: any) {
	var config = {
	  method: 'post',
      //https://graph.facebook.com/v16.0/103524596070832/messages
	  url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
	  headers: {
		'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
		'Content-Type': 'application/json'
	  },
	  data: data
	};

	return axios(config)
}

function getTextMessageInput(number: string, text: string) {
    return JSON.stringify({
      "messaging_product": "whatsapp",
      "preview_url": false,
      "recipient_type": "individual",
      "to": number,
      "type": "text",
      "text": {
          "body": text
      }
    });
  }

export { 
    sendResponse,
    getTextMessageInput 
};