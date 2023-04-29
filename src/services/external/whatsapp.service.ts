import config from "../../config/general.configs";
import axios from "axios";
import { getTextMessageInput } from "../../helpers/whatsapp";

type SendMessageToWhatsappInput = {
    phone: string,
    text: string
}
export const sendMessageToWhatsapp = async (
    { phone, text }: SendMessageToWhatsappInput
) => {
    const endpoint = `https://graph.facebook.com/${config.external.whatsapp.version}/${config.external.whatsapp.phoneNumberId}/messages`;
    const res = await axios.post(endpoint, getTextMessageInput(phone, text), {
        headers: {
            'Authorization': `Bearer ${config.external.whatsapp.accessToken}`,
            'Content-Type': 'application/json'
        }
    });
    console.log(res.data);
    return res;
}