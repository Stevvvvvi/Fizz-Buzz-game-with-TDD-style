import { shallow, ShallowWrapper } from "enzyme"
import CustomForm, { DEFAULT_OUTPUT, LABEL_TEXT } from "./CustomForm";

describe("testing CustomForm Component",()=>{
    let wrapper:ShallowWrapper<{}, Readonly<{inputVal:number|null}>>;

    beforeEach(()=>{
        wrapper = shallow(<CustomForm />);
    })

    test("testing CustomForm compnent should render a form element",()=>{
        expect(wrapper.length).toBe(1);
        expect(wrapper.name()).toBe('div');
        expect(wrapper.childAt(0).type()).toBe('form');
    })

    test("testing form should have label with correct text",()=>{
        expect(wrapper.childAt(0).childAt(0).name()).toBe('label');
        expect(wrapper.find('label').text()).toBe(LABEL_TEXT);
        expect(wrapper.childAt(0).childAt(1).name()).toBe('br');
    })

    test("testing input should be number with correct id",()=>{
        expect(wrapper.find('#input_number').type()).toBe('input');
        expect(wrapper.find('#input_number').prop('type')).toBe('number');
    })

    test("testing submit button with correct id",()=>{
        expect(wrapper.find('#submit').type()).toBe('input');
        expect(wrapper.find('#submit').hasClass('submit_button')).toBe(true);
    })

    test("testing form_output should be correct element type",()=>{
        expect(wrapper.find('#form_output').type()).toBe('div');
        expect(wrapper.childAt(1).prop('id')).toBe('form_output');
    })

    test("testing clicking the submit button, #form_output should render result",()=>{
        wrapper.find('form').simulate('submit',{
            preventDefault: () => {
            }
        });
        expect(wrapper.find('#form_output').text()).toBe(DEFAULT_OUTPUT);
    })

    /** few more test could be written but this is enzyme adapter 16 
     * while react is on version 17, and official enzyme adapter 17 has 
     * not yet released therefore bit hard to write more test. 
     */

})