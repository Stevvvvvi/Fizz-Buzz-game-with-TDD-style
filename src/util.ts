export function fizzBuzzOutput(value:number):string{
    if (value%3===0 && value%5===0){
        return "fizz buzz";
    }else if (value%3===0 && value%5!==0){
        return "fizz";
    }else if (value%3!==0 && value%5===0){
        return "buzz";
    }
    return value.toString();
}