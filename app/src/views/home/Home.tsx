import * as React from 'react';
import { connect } from 'react-redux';

import { getStateList } from '../../framework/actions/StateActions';
import './home.scss';

type Props = {
    getStateList: () => void,
};

class Home extends React.Component {

    props: Props;

    componentWillMount() {
        this.props.getStateList();
    }

    render() {
        return (
        <div className="main-section">
            Comprar ou Alugar?
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch: () => void) => ({
    getStateList: () =>  getStateList(dispatch),
});

export default connect(null, mapDispatchToProps)(Home);