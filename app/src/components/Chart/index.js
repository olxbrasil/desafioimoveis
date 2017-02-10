// @flow
import React from 'react';

import './Chart.scss';
import number from '../../helpers/numeral';

type Props = {
	rent: number,
	installment: number,
}

const Chart = (props: Props) => {
	const { rent, installment } = props;
	const rentHeight = rent > installment ? 100 : (100 * rent) / installment;
	const installmentHeight = rent < installment ? 100 : (100 * installment) / rent;
	const rentCss = rent > installment ? 'chart__column-expensive' : 'chart__column-cheap';
	const installmentCss = rent < installment ? 'chart__column-expensive' : 'chart__column-cheap';
	return (
		<div className="chart__wrapper">
			<div className={`chart__column ${rentCss}`} style={{ height: `${rentHeight}%` }}>
				<p>Alugar</p>
				<p>{number(rent).format('$0,0[.]00')}</p>
			</div>
			<div className={`chart__column ${installmentCss}`} style={{ height: `${installmentHeight}%` }}>
				<p>Comprar</p>
				<p>{number(installment).format('$0,0[.]00')}</p>
			</div>
		</div>
	);
};

export default Chart;
