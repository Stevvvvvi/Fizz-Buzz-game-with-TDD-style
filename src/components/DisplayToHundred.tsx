import { useState } from "react";
import { FunctionComponent } from "react";
import { fizzBuzzOutput } from "../util";
import CustomForm from "./CustomForm";
import "./DisplayToHundred.scss";

export const H3_TEXT="Start display output from 1 to 100";

const DisplayToHundred:FunctionComponent<{}>=()=>{
    const [outputs,setOutputs]=useState<string[]>([]);
    const handleGenerateOutputs=(v:number)=>{
        if(outputs.length===0){
            var returnValue:string[]=[];
            for (let i =1; i<=v;i++){
                let result = fizzBuzzOutput(i);
                returnValue.push(`${i}: ${result}`);
            }
            setOutputs([...returnValue]);
        }else{
            setOutputs([]);
        }
    }

    return (
        <>
            <h3>{H3_TEXT}</h3>
            <ul id="output_place">{outputs.map((v)=>(<li key={v}>{v}</li>))}</ul>
            <button onClick={()=>handleGenerateOutputs(100)}>Start</button>
            <CustomForm />
        </>
    );
}

export default DisplayToHundred;