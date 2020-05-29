
export const GOTO = "GOTO";
export const DELIVERER = "DELIVERER"

export function goTo(inputted="main"){
    return {type: GOTO,
    payload: inputted};
}
