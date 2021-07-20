import React, { FunctionComponent, useState } from "react";
import { fizzBuzzOutput } from "../util";
import "./CustomForm.scss";

export const LABEL_TEXT="input a number to display 'fizz buzz' output:";
export const DEFAULT_OUTPUT="please input a number value";

const CustomForm:FunctionComponent=()=>{
    const [inputVal,setInputVal]=useState<number|undefined>();
    const [outputVal,setOutputVal]=useState('');
    const displayOutput=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(inputVal!==undefined){
            const result=fizzBuzzOutput(inputVal);
            setOutputVal(`${inputVal} - result: ${result}`);
        }else{
            setOutputVal(DEFAULT_OUTPUT);
        }

    }

    return (
        <div className="input_form">
            <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>displayOutput(e)}>
                <label htmlFor="input_number">{LABEL_TEXT}</label>
                <br />
                <input 
                type="number" 
                id="input_number" 
                name="input_number" 
                required 
                step="1" 
                value={inputVal} 
                onChange={(e:React.FormEvent<HTMLInputElement>)=>setInputVal(parseInt(e.currentTarget.value))}/>
                <br />
                <input className="submit_button" type="submit" value="Submit" id='submit' 
                />
            </form>
            <div id="form_output">{outputVal}</div>
        </div>
    )
}

export default CustomForm;
