import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.requestAnimationFrme = function(callback) {
    setTimeout(callback, 0);
};

configure({ adapter: new Adapter() });
