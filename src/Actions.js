
export const NAVCLICK = "NAVCLICK";

export function NavClick(inputted="main"){
    return {type: NAVCLICK,
    payload: inputted};
}
