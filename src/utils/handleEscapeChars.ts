const handleEscapeChars = (str: string) => {
	return str.replace(/[\n\r]/g, " ");
};

export default handleEscapeChars;
