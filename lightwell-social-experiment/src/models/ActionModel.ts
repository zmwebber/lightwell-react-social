import { IActionModel } from "./IActionModel";

export default function ActionModel(
    type: string,
    payload: any
): IActionModel {
    return ({
        type: type,
        payload: payload
    })
}