/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetchDatasets(params: Record<string, any>) {
  const cleanParams = Object.entries(params).reduce((acc, [key, value]) => {
    if (value !== "") acc[key] = value; // skip empty strings
    return acc;
  }, {} as Record<string, any>);

  const query = new URLSearchParams(cleanParams).toString();
  const res = await fetch(`https://api.datakeep.civicdays.in/api/search/dataset/?${query}`);
  if (!res.ok) throw new Error("Failed to fetch datasets");
  return res.json();
}
