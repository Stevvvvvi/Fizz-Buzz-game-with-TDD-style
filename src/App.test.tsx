import App from './App';
import { shallow } from 'enzyme';

describe("App testing",()=>{

  test("App should render <MainOutput /> component",()=>{
    const wrapper = shallow(<App />);
    expect(wrapper.find('MainOutput').length).toBe(1);
  })
})

