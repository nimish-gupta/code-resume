import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import { Resume, SocialLinks, Title } from 'Data';

render(
	<App data={Resume} socialLinks={SocialLinks} title={Title} />,
	document.getElementById('root')
);
