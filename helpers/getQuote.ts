export const getQuote = async (id?: string) => {
  const fetchApi = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/quote/${id && `${id}`}`,
    {
      method: "GET",
    }
  );
  const data = await fetchApi.json();
  return data;
};
