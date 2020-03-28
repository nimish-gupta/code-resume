import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, Label, Ul, Li } from './style';
import { getEnvUrl } from '../../utils';

const SideBar = (props) => {
	const Tabs = props.data && Object.keys(props.data);
	const List = Tabs.map((list) => {
		return (
			<Li key={list}>
				<NavLink to={`/${list.toLowerCase()}`} activeClassName="active">
					{list}
				</NavLink>
			</Li>
		);
	});
	console.log(getEnvUrl());
	return (
		<Wrapper>
			<Label>Explorer</Label>
			<Ul>
				{List}
				<Li key={'blog'}>
					<a href={getEnvUrl()} target="_blank" activeClassName="active">
						Blog
					</a>
				</Li>
			</Ul>
		</Wrapper>
	);
};

export default SideBar;
