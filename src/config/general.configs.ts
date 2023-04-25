type TConfig = {
	api: {
		port: number | string;
	};
	mongo: {
		uri: string;
	};
	external: {
		openai: {
			apiKey: string;
		};
	};
};

const config: TConfig = {
	// General
	api: {
		port: process.env.PORT || 3000,
	},
	// Database
	mongo: {
		uri: process.env.MONGO_URI || "mongodb://localhost:27017",
	},
	external: {
		openai: {
			apiKey: process.env.OPENAI_API_KEY || "",
		},
	},
};

export default config;
