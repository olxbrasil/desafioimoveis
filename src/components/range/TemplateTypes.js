const template = {
	aluguel: {
		min: 100,
		max: 10000,
		step: 100,
		formatLabel: (value) => `R$${value}`,
	},
	compra: {
		min: 10000,
		max: 2000000,
		step: 10000,
		formatLabel: (value) => `R$${value}`,
	},
	anos: {
		min: 1,
		max: 30,
		step: 1,
		formatLabel: (value) => `${value} anos`,
	},
	taxa: {
		min: 0.5,
		max: 25.5,
		step: 0.5,
		formatLabel: (value) => `${value}%`,
	},
};

export default template;
