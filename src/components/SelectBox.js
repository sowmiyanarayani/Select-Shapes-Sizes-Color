/* eslint-disable no-undef */
import { React } from 'react';
import { peek } from '@laufire/utils/debug';

const SelectBox = ({ data: { action, list }}) => {
	peek(list);
	return (
		<select
			onChange={ (event) => action(event.target.value) }
		>
			{ list.map((newValue, index) =>
				<option
					key={ index }
				>
					{ newValue }
				</option>) }
		</select>
	);
};

export default SelectBox;
