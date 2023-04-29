import { Request, Response } from "express";
import config from "../config/general.configs";
import axios from "axios";

const token = config.external.whatsapp.accessToken;

const post = async (req: Request, res: Response) => {
    // check the incoming webhook message 
    console.log(req.body);

    if (!req.body.object) return res.status(400).json({ message: "Invalid request" });
    if (
        req.body.entry &&
        req.body.entry[0].changes &&
        req.body.entry[0].changes[0] &&
        req.body.entry[0].changes[0].value.messages &&
        req.body.entry[0].changes[0].value.messages[0]
    ) {
        const phone_number_id =
            req.body.entry[0].changes[0].value.metadata.phone_number_id;
        const from = req.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
        const msg_body = req.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
        axios({
            method: "POST", // Required, HTTP method, a string, e.g. POST, GET
            url:
                "https://graph.facebook.com/v12.0/" +
                phone_number_id +
                "/messages?access_token=" +
                token,
            data: {
                messaging_product: "whatsapp",
                to: from,
                text: { body: "Ack: " + msg_body },
            },
            headers: { "Content-Type": "application/json" },
        });
    }
    res.sendStatus(200);
}


const get = async (req: Request, res: Response) => {
    // Parse params from the webhook verification request
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (!mode || !token) return res.status(400).json({ message: "Invalid request" });
    if (mode === "subscribe" && token === config.external.whatsapp.verifyToken) {
        // Respond with 200 OK and challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        return res.status(200).send(challenge);
    }
    res.sendStatus(403);
}

export default {
    post,
    get
}