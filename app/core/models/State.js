// @flow

export default class State {
	name: string;
	buy: number;
	rent: number;
	constructor(name: string, buy: number, rent: number) {
		this.name = name;
		this.buy = buy;
		this.rent = rent;
		Object.freeze(this);
	}
}
