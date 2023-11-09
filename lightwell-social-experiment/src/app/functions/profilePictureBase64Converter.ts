export const getBase64DataUrl = (fileObject: any) => {
  if (!fileObject || !fileObject.contentType || !fileObject.data) return undefined;
  return `data:${fileObject.contentType};base64,${fileObject.data}`;
};