import React from 'react';
import SingleGraph, { extraClasses } from './../SingleGraph/SingleGraph';
import './Graphs.scss'

const Graphs = props => (
  <div styleName="graph-section-container">
    <p styleName="graphs-title">Custo total</p>
    <div styleName="graphs-container">
      <SingleGraph
        label="Alugar"
        value={10}
        prefix="R$"
        extraClasses={extraClasses.toRent}
        height={80}
      />
      <SingleGraph
        label="Comprar"
        value={10}
        prefix="R$"
        extraClasses={extraClasses.toBuy}
        height={50}
      />
    </div>
  </div>
);

Graphs.propTypes = {};

export default Graphs;
