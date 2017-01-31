import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BarChart.css';

class BarChart extends React.Component {
  static propTypes = {
    rent: PropTypes.string.isRequired,
    buy: PropTypes.string.isRequired,
  };

  render() {

    const {
      rent,
      buy,
    } = this.props

    const total = rent + buy;
    const rentPercentage = (rent * 100) / total
    const buyPecentage = (buy * 100) / total

    return (
      <div className={s.root}>
        <div className={s.rent} style={{ height: rentPercentage + '%'}}>
          <span>Alugar</span>R${rent}
        </div>
        <div className={s.buy} style={{ height: buyPecentage + '%' }}>
          <span>Comprar</span>R${buy}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(BarChart);
