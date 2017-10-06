import * as React from 'react';

import './home.scss';
import StateService from '../../../core/services/StateService';

const Home = () => {
    const stateService = new StateService();
    stateService.getList().then(data => console.log(data));
    return (
        <div className="main-section">
            Comprar ou Alugar?
        </div>
    );
};

export default Home;