import { shallow, ShallowWrapper } from "enzyme"
import DisplayToHundred, { H3_TEXT } from "./DisplayToHundred";

describe("testing DisplayToHundred component",()=>{
    let wrapper:ShallowWrapper<{}, Readonly<{outputs:string[]}>>;

    beforeEach(()=>{
        wrapper = shallow(<DisplayToHundred />);
    })

    test("test h3 contain correct sentence",()=>{
        expect(wrapper.find('h3').text()).toBe(H3_TEXT);
    })

    test("test output ul exist and has correct id",()=>{
        expect(wrapper.find('#output_place').name()).toBe('ul');
    })

    test("test start calculating button exist", ()=>{
        expect(wrapper.find('button').text()).toBe('Start');
    })

    test("test click button to display all result of fizz buzz between 1 to 100",()=>{
        expect(wrapper.find('ul').children().length).toBe(0);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('ul').children().length).toBe(100);
        expect(wrapper.find('ul').childAt(0).name()).toBe('li');
        expect(wrapper.find('ul').childAt(0).text()).toBe('1: 1');
        expect(wrapper.find('ul').childAt(2).text()).toBe('3: fizz');
        expect(wrapper.find('ul').childAt(4).text()).toBe('5: buzz');
        expect(wrapper.find('ul').childAt(14).text()).toBe('15: fizz buzz');
    })

    test("test click button twice, the output becomes empty again",()=>{
        expect(wrapper.find('ul').children().length).toBe(0);
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('ul').children().length).toBe(0);
    })
    
    test("test <CustomForm /> component correctly rendered",()=>{
        expect(wrapper.childAt(3).name()).toBe('CustomForm');
    })
})