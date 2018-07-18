import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-matcher-one-of';

configure({ adapter: new Adapter() });