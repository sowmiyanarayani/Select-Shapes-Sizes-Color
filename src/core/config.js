
const config = {
	countStart: 0,
	increment: 2,
	shapeStyles: {
		square: {
			width: '300px',
			height: '300px',
		},
		rectangle: {
			width: '400px',
			height: '200px',
		},
		circle: {
			width: '200px',
			height: '200px',
			borderRadius: '50%',
		},
	},
	shapes: ['square', 'rectangle', 'circle'],

	colorStyles: {
		red: { backgroundColor: 'pink' },
		green: { backgroundColor: 'aqua' },
		blue: { backgroundColor: 'indigo' },
	},
	colors: ['pink', 'aqua', 'indigo'],

	sizeStyles: {
		small: { transform: 'scale(0.3)', rotate: '90deg' },
		medium: { transform: 'scale(0.7)', rotate: '90deg' },
		large: { transform: 'scale(1)', rotate: '90deg' },
	},
	sizes: ['small', 'medium', 'large'],
};

export default config;
