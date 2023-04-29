export interface createChatDTO {
	phone: string;
	messages: {
		question: string;
		answer: string;
		createdAt: Date;
	}[];
}
