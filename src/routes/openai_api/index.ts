import { Response, Request, Router } from "express";
//yarn add openai
import { Configuration, OpenAIApi } from "openai";

const router: Router = Router();

//Set OpenAI configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);


// Ask a question to the OpenAI API
router.post("/prompt", async (req: Request, res: Response) => {
	try {
	  const message = req.body.message;
      // If it is a question, search in the database

      // else, allow openai to answer
	  const completion = await openai.createCompletion({
		model: "text-davinci-003",
  		prompt: message,
	  });
	  console.log(completion.data.choices[0].text);
	  res.status(200).json({ response: completion.data.choices[0].text });
	} catch (error) {
	  res.status(500).json({ error: error });
	}
  }
);

export { router };