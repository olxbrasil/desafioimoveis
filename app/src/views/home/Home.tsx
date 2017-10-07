import * as React from 'react';
import { connect } from 'react-redux';

import { getStateList } from '../../framework/actions/StateActions';
import { setInputValue } from '../../framework/actions/SimulationAction';
import StateSelect from '../../components/StateSelect/StateSelect';
import IStore from '../../../core/interfaces/IStore';
import Range from '../../components/Range/Range';
import ranges from '../../config/ranges';
import './home.scss';

type Props = {
    getStateList: () => void,
    setInputValue: (event: {name: string, value: string}) => void,
    simulation: {
        rental: string,
        purchase: string,
    }
};

class Home extends React.Component {

    props: Props;

    componentWillMount() {
        this.props.getStateList();
    }

    handleOnChange = (event: {target: {value: string, name: string}}) => {
        const { name, value} = event.target;
        this.props.setInputValue({
            name,
            value,
        });
    }

    renderRanges() {
        return ranges.map(range => (
            <Range
                key={range.name}
                label={range.label}
                name={range.name}
                step={range.step}
                onChange={this.handleOnChange}
                value={this.props.simulation[range.name]}
                labelMask={range.labelMask}
                min={range.min}
                max={range.max}
            />
        ));
    }

    render() {
        return (
        <section className="main-section">
            <h1 className="title">Comprar ou Alugar?</h1>
            <StateSelect />
            {this.renderRanges()}
        </section>
        );
    }
}
const mapStateToProps = (appState: IStore) => ({
    simulation: appState.simulator,
  });

const mapDispatchToProps = (dispatch: (action: Object) => void) => ({
    getStateList: () =>  getStateList(dispatch),
    setInputValue: (event: {name: string, value: string}) => { dispatch(setInputValue(event)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);