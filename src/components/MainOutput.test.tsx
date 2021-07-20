import { shallow, ShallowWrapper } from "enzyme";
import MainOutput from "./MainOutput";
import "./MainOutput.scss";


describe("MainOutput testing",()=>{
    let wrapper: ShallowWrapper<{}, Readonly<{}>>;
    beforeEach(()=>{
        wrapper = shallow(<MainOutput />);
    });

    test("testing rendering <DisplayToHundred /> component",()=>{
        expect(wrapper.find('DisplayToHundred').length).toBe(1);
    })
})