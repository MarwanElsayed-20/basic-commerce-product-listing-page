"use server";

const baseURL = process.env.BASE_URL;

export const getData = async ({ endpoint }: { endpoint: string }) => {
  const response = await fetch(`${baseURL}${endpoint}`);
  const data = await response.json();
  return data;
};
