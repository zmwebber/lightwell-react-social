export default interface IActionModel{
    className: string | undefined,
    type: string,
    payload: any,
    metadata: any | null | undefined,
    timestamp: Date | null | undefined
}