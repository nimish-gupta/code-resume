import React from 'react';
import { motion } from 'framer-motion';
import { Wrapper, Link, Mode, List, Item } from './style';
import Twitter from 'Assets/svg/twitter.svg';
import Linkedin from 'Assets/svg/linkedin.svg';
import Github from 'Assets/svg/github.svg';
import Pdf from 'Assets/svg/pdf.svg';
import Resume from 'Assets/svg/resume.svg';
import Moon from 'Assets/svg/moon.svg';

const ActivityBar = (props) => {
	const { socialLinks, theme, setTheme } = props;

	const setMode = () => {
		const mode = theme === 'dark' ? 'light' : 'dark';
		setTheme(mode);
	};

	return (
		<Wrapper>
			<motion.ul initial="hidden" animate="visible" variants={List}>
				<Link
					title="Resume"
					variants={Item}
					whileHover={{ scale: 1.2 }}
					href={
						'https://github.com/nimish-gupta/code-resume/raw/master/data/resume.pdf'
					}
					target="_blank">
					<Resume />
				</Link>
				<Link
					title="Linkedin"
					variants={Item}
					whileHover={{ scale: 1.2 }}
					href={socialLinks.linkedin}
					target="_blank">
					<Linkedin />
				</Link>
				<Link
					title="Twitter"
					variants={Item}
					whileHover={{ scale: 1.2 }}
					href={socialLinks.twitter}
					target="_blank">
					<Twitter />
				</Link>
				<Link
					title="Github"
					variants={Item}
					whileHover={{ scale: 1.2 }}
					href={socialLinks.github}
					target="_blank">
					<Github />
				</Link>
				<Link
					title="Export as PDF"
					variants={Item}
					whileHover={{ scale: 1.2 }}
					href="/download"
					target="_blank">
					<Pdf className="pdf" />
				</Link>
			</motion.ul>

			<Mode whileHover={{ scale: 1.2 }} title="Change Theme">
				<Moon onClick={setMode} />
			</Mode>
		</Wrapper>
	);
};

export default ActivityBar;
