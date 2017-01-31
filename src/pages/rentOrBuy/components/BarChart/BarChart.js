import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BarChart.css';
import Bar from './components/Bar'

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
        <Bar barClass={s.rent} height={rentPercentage} label="Aluguel" value={rent} />
        <Bar barClass={s.buy} height={buyPecentage} label="Comprar" value={buy} />
      </div>
    );
  }
}

export default withStyles(s)(BarChart);
