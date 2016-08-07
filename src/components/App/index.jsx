import React, { Component } from 'react';
import PriceConfigurator from 'components/PriceConfigurator';
import GraphComparator from 'components/GraphComparator';
import Header from 'components/Header';

const App = () => (
  <div className="mdl-layout">
    <Header />

    <main className="mdl-layout__content">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet">
          <PriceConfigurator />
        </div>

        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet">
          <GraphComparator />
        </div>
      </div>
    </main>
  </div>
);

export default App;
