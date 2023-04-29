import { AddMessageDTO } from "../../dto/chat/add-message.dto";
import { createChatDTO } from "../../dto/chat/create-chat.dto";
import { ChatModel } from "../../models";

const createChat = async (chat: createChatDTO) => {
	const newChat = new ChatModel(chat);
	await newChat.save();
	return newChat;
};

const findChatByPhone = async (phone: string) => {
	const chat = await ChatModel.findOne({ phone });
	return chat;
};

const addMessageToChat = async (phone: string, message: AddMessageDTO) => {
	const chat = await ChatModel.findOne({ phone });
	if (!chat) return null;
	chat.messages.push(message);
	await chat.save();
	return chat;
};

const getHistory = async (phone: string) => {
	const chat = await ChatModel.findOne({ phone });
	if (!chat) return null;
	return chat.messages;
};

export default {
	createChat,
	findChatByPhone,
	addMessageToChat,
	getHistory,
};
