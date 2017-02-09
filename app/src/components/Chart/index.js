// @flow
import React from 'react';

type Props = {
	rent: number,
	installment: number,
}

const Chart = (props: Props) => {
	const { rent, installment } = props;
	const rentHeight = rent > installment ? 100 : (100 * rent) / installment;
	const installmentHeight = rent < installment ? 100 : (100 * installment) / rent;
	return (
		<div>
			<div style={{ height: `${rentHeight}%` }}>
				{rent}
			</div>
			<div style={{ height: `${installmentHeight}%` }}>
				{installment}
			</div>
		</div>
	);
};

export default Chart;
