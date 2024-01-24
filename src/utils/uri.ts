export const CATEGORY_MAP: { [key: string]: string } = {
  "0": "lot",
  "1": "building",
};

export const generateUriPath = (uuid: string, category: number) => {
  const categoryName = CATEGORY_MAP[category.toString()];
  return `get_${categoryName}?${categoryName}Id=${uuid}`;
};
