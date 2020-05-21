
export const CONSTNAME = "CONSTNAME";
export const DELIVERER = "DELIVERER"

export function constName(inputted=0){
    return {type: CONSTNAME,
    payload: inputted};
}


export function deliverer(inputted=0){
    return {type: DELIVERER,
    payload: inputted};
}
