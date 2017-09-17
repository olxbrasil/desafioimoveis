import React from 'react';
import PropTypes from 'prop-types';
import * as interestjs from 'interestjs/lib/interest'; // eslint-disable-line
import SingleGraph, { extraClasses } from './../SingleGraph/SingleGraph';
import './Graphs.scss'

function getRentValue(rangeValues) {
  const yearsInMonth = 12;
  const totalMonths = rangeValues.timeInProperty * yearsInMonth;
  return rangeValues.rentPerMonth * totalMonths;
}

function getBuyValue(rangeValues) {
  const yearsInMonth = 12;
  const totalMonths = rangeValues.timeInProperty * yearsInMonth;
  const monthlyValue = rangeValues.propertyToBuy / totalMonths;

  return interestjs(monthlyValue, totalMonths, rangeValues.interestTaxPerYear).sum;
}

function getHeightsInPercentage(rentValue, buyValue) {
  let rentPercent = 0;
  let buyPercent = 0;

  if (rentValue > buyValue) {
    buyPercent = (buyValue * 100) / rentValue;
  } else {
    rentPercent = (rentValue * 100) / buyValue;
  }

  return {
    rent: rentValue > buyValue ? 100 : rentPercent,
    buy: buyValue > rentValue ? 100 : buyPercent,
  };
}

const Graphs = props => (
  <div styleName="graph-section-container">
    <p styleName="graphs-title">Custo total</p>
    <div styleName="graphs-container">
      <SingleGraph
        label="Alugar"
        value={getRentValue(props.rangeValues)}
        prefix="R$"
        extraClasses={extraClasses.toRent}
        height={getHeightsInPercentage(getRentValue(props.rangeValues), getBuyValue(props.rangeValues)).rent}
      />
      <SingleGraph
        label="Comprar"
        value={getBuyValue(props.rangeValues)}
        prefix="R$"
        extraClasses={extraClasses.toBuy}
        height={getHeightsInPercentage(getRentValue(props.rangeValues), getBuyValue(props.rangeValues)).buy}
      />
    </div>
  </div>
);

Graphs.propTypes = {
  rangeValues: PropTypes.shape({
    rentPerMonth: PropTypes.number,
    propertyToBuy: PropTypes.number,
    timeInProperty: PropTypes.number,
    interestTaxPerYear: PropTypes.number,
  }),
};

export default Graphs;
