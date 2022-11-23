interface IActionModel {
    type: string,
    payload: any
}

export default function ActionModel(
    type: string,
    payload: any
): IActionModel {
    return ({
        type: type,
        payload: payload
    })
}