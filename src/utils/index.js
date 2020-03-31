export const getEnvUrl = () => {
	if (window.location.hostname === 'localhost') {
		return `http://localhost:8000/`;
	}

	return 'https://nimish-gupta.dev/';
};
