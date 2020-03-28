export const getEnvUrl = () => {
	if (window.location.hostname === 'localhost') {
		return `http://localhost:8000/`;
	}

	return 'https://blog.nimish-gupta.dev/';
};
