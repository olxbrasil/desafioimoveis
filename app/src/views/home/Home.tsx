import * as React from 'react';
import { connect } from 'react-redux';

import { getStateList } from '../../framework/actions/StateActions';
import StateSelect from '../../components/StateSelect/StateSelect';
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
        <section className="main-section">
            <h1 className="title">Comprar ou Alugar?</h1>
            <StateSelect />
        </section>
        );
    }
}

const mapDispatchToProps = (dispatch: () => void) => ({
    getStateList: () =>  getStateList(dispatch),
});

export default connect(null, mapDispatchToProps)(Home);