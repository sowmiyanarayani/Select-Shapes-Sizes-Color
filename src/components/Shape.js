import { React } from 'react';
import SelectBox from './SelectBox';
import { peek } from '@laufire/utils/debug';

const Shape = (context) => {
	const {
		config: { shapeStyles, shapes, colors, sizeStyles, sizes },
		state: { shape, color, size },
		actions: { setShape, setColor, setSize },
	} = context;

	peek(color);
	return <div> <center>
		<div style={ {
			...shapeStyles[shape],
			...sizeStyles[size],
			backgroundColor: color,
		} }
		/>
		<SelectBox { ...{ data: { action: setShape, list: shapes }} }/>
		<SelectBox { ...{ data: { action: setColor, list: colors }} }/>
		<SelectBox { ...{ data: { action: setSize, list: sizes }} }/>
	</center>
	</div>;
};

export default Shape;
