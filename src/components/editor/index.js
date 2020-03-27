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

const outline = ({ text, theme, index }) => (
	<>
		<FirstLineNo>{index}</FirstLineNo>
		{text.split(' ').map((str, index) => (
			<Span
				initial={{ y: -50 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.3 }}
				key={str}
				color={theme.headerColor[`color${index}`]}>
				{str}
			</Span>
		))}
	</>
);

const emptyLine = (index) => (
	<PageWrap key={index.toString()}>
		<LineNo>{index}</LineNo>
		<pre>{'\n'}</pre>
	</PageWrap>
);

const getRenderPre = ({ str, index, theme, props }) => {
	if (str.includes('<a') || str.includes('<span')) {
		return <Pre {...props} dangerouslySetInnerHTML={{ __html: str }}></Pre>;
	}

	if (index === 0) {
		return str.split(' ').map((s, pos) => (
			<Span {...props} color={theme.headerColor[`color${pos}`]}>
				{s}
			</Span>
		));
	}

	return <Pre {...props}>{str}</Pre>;
};

const Editor = (props) => {
	const theme = useContext(ThemeContext);
	const tab = props.path;
	const capitalizeWord = `${tab.charAt(0).toUpperCase()}${tab.slice(1)}`;
	const content = props.data && props.data[tab];
	const head = `import ${capitalizeWord} from '${capitalizeWord}';`;
	const foot = `export default ${capitalizeWord};`;
	const indexFactor = 3; // One for 0, other for header and for empty space
	const contentLength = content.split('\n').length;

	let count = 0,
		color = '';

	const header = outline({ text: head, theme, index: 1 });

	const footer = outline({
		text: foot,
		theme,
		index: contentLength + indexFactor + 1, // added one for empty line,
	});

	const detail = content.split('\n').map((str, index) => {
		if (count >= 6) count = 0;
		if (index >= 6) {
			color = theme.contentColor[`color${count}`];
			count++;
		} else {
			color = theme.contentColor[`color${index}`];
		}

		return (
			<PageWrap key={index}>
				<LineNo>{index + indexFactor}</LineNo>
				{getRenderPre({
					str,
					index,
					theme,
					props: renderProps({ str, index, color }),
				})}
			</PageWrap>
		);
	});

	return (
		<Wrapper>
			{header}
			{emptyLine(2)}
			{detail}
			{emptyLine(contentLength + indexFactor)}
			{footer}
		</Wrapper>
	);
};

export default Editor;
