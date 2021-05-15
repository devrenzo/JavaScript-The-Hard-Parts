const game = {
	suspects: [
		{
			name: 'Rusty',
			color: 'orange',
		},
		{
			name: 'Miss Scarlet',
			color: 'red',
		},
	],
};

game.suspects.forEach((sus) => {
	console.log(sus);
});

game.suspects.forEach((sus) => {
	const { name, color } = sus;
	sus.guilty = (color === 'red');
	console.log('name:', name, '|| color:', color, '|| guilty:', sus.guilty);
});
