import IActionModel from "../interfaces/IActionModel";

export default function ActionModel(
  type: Readonly<string>,
  payload: any = {},
  metadata: any = null
): Readonly<IActionModel> {
  return Object.freeze({
    type: type,
    payload: payload,
    metadata: metadata,
    timestamp: new Date(),
  } as IActionModel);
}
