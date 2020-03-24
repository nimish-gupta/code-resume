import React, { useContext } from 'react';
import { Wrapper, Span, Pre, PageWrap, LineNo, FirstLineNo } from './style';
import { ThemeContext } from 'styled-components';

const renderProps = ({ str, index, color }) => ({
	color,
	initial: { x: 10 },
	animate: { x: 0 },
	whileHover: { x: 5 },
	transition: { duration: 0.2 },
	key: `${str + index}-detail`,
});

const outline = ({ text, theme }) =>
	text.split(' ').map((str, index) => (
		<Span
			initial={{ y: -50 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
			key={str}
			color={theme.headerColor[`color${index}`]}>
			{str}
		</Span>
	));

const Editor = (props) => {
	const theme = useContext(ThemeContext);
	const tab = props.path;
	const capitalizeWord = `${tab.charAt(0).toUpperCase()}${tab.slice(1)}`;
	const content = props.data && props.data[tab];
	const head = `import ${capitalizeWord} from '${capitalizeWord}';`;
	const foot = `export default ${capitalizeWord};`;

	let count = 0,
		color = '';

	const header = outline({ text: head, theme });

	const footer = outline({ text: foot, theme });

	const detail = content.split('\n').map((str, index) => {
		if (count >= 6) count = 0;
		if (index >= 6) {
			color = theme.contentColor[`color${count}`];
			count++;
		} else {
			color = theme.contentColor[`color${index}`];
		}

		let renderPre = <Pre {...renderProps({ str, index, color })}>{str}</Pre>;

		if (str.includes('href=')) {
			renderPre = (
				<Pre
					{...renderProps({ str, index, color })}
					dangerouslySetInnerHTML={{ __html: str }}></Pre>
			);
		}

		return (
			<PageWrap key={index}>
				<LineNo>{index + 2}</LineNo>
				{renderPre}
			</PageWrap>
		);
	});

	return (
		<Wrapper>
			<FirstLineNo>1</FirstLineNo>
			{header}
			{detail}
			<FirstLineNo>{content.split('\n').length + 2}</FirstLineNo>
			{footer}
		</Wrapper>
	);
};

export default Editor;
