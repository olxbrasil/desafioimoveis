import React, { Component } from 'react';
import PriceConfigurator from 'components/PriceConfigurator';
import GraphComparator from 'components/GraphComparator';

class App extends Component {
  componentWillMount () {
    console.warn('Hey OLX guys');
    console.info('The PropTypes validation erros on material-ui above will be fine when this issue "https://github.com/callemall/material-ui/issues/4890" has been closed.');
  }

  render() {
    return (
      <div className="mdl-layout">
        <header className="mdl-layout__header mdl-layout--fixed-header">
          <h1 className="mdl-layout-title mdl-layout-title__centered">Comprar ou alugar?</h1>
        </header>

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
  }
};

export default App;
