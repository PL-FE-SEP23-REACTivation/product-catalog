export const capitalize = (string: string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export const getSearchParams = (
  oldParams: URLSearchParams,
  paramsToUpdate: [key: string, value: string]
) => {
  const newParams = new URLSearchParams(oldParams.toString());

  newParams.set(...paramsToUpdate);

  return newParams.toString();
};
