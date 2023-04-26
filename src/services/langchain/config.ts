import { OpenAI } from "langchain/llms/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

/* Initialize the LLM to use to answer the question */
export const model = new OpenAI({});
/* Load in the file we want to do question answering over */
const text = fs.readFileSync("text.txt", "utf8");
/* Split the text into chunks */
const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });

export const getChain = async () => {
	const docs = await textSplitter.createDocuments([text]);
	/* Create the vectorstore */
	const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
	/* Create the chain */
	return ConversationalRetrievalQAChain.fromLLM(
		model,
		vectorStore.asRetriever()
	);
};
