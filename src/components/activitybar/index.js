import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Link, Mode, List, Item } from './style';
import Moon from 'Assets/svg/moon.svg';

const SocialLink = ({ title, href, children }) => (
	<Link
		title={title}
		href={href}
		variants={Item}
		whileHover={{ scale: 1.2 }}
		target="_blank">
		{children}
	</Link>
);

const ActivityBar = (props) => {
	const { socialLinks, theme, setTheme } = props;

	const setMode = () => {
		const mode = theme === 'dark' ? 'light' : 'dark';
		setTheme(mode);
	};

	return (
		<Wrapper>
			<motion.ul initial="hidden" animate="visible" variants={List}>
				{Object.entries(socialLinks).map(([title, [href, icon]]) => (
					<SocialLink title={title} href={href}>
						{icon()}
					</SocialLink>
				))}
			</motion.ul>

			<Mode whileHover={{ scale: 1.2 }} title="Change Theme">
				<Moon onClick={setMode} />
			</Mode>
		</Wrapper>
	);
};

export default ActivityBar;
