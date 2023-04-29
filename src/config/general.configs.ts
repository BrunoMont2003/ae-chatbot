type TConfig = {
	api: {
		port: number | string;
		url: string;
	};
	mongo: {
		uri: string;
	};
	external: {
		openai: {
			apiKey: string;
		};
		whatsapp: {
			appId: string;
			appSecret: string;
			recipientWaid: string;
			version: string;
			phoneNumberId: string;
			accessToken: string;
			verifyToken?: string;
		}
	};
};
const config: TConfig = {
	// General
	api: {
		port: process.env.PORT || 3000,
		url: process.env.API_URL || "http://localhost:3000",
	},
	// Database
	mongo: {
		uri: process.env.MONGO_URI || "mongodb://localhost:27017",
	},
	external: {
		openai: {
			apiKey: process.env.OPENAI_API_KEY || "",
		},
		whatsapp: {
			appId: process.env.WAB_APP_ID || "",
			appSecret: process.env.WAB_APP_SECRET || "",
			recipientWaid: process.env.WAB_RECIPIENT_WAID || "",
			version: process.env.WAB_VERSION || "",
			phoneNumberId: process.env.WAB_PHONE_NUMBER_ID || "",
			accessToken: process.env.WAB_ACCESS_TOKEN || "",
			verifyToken: process.env.WAB_VERIFY_TOKEN || "",
		}
	},
};

export default config;
