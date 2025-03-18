const fetchData = async (url: string, errorMessage: string) => {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return data;
};

const fetchMutateData = async (
  url: string,
  method: string,
  data: object,
  headers: HeadersInit,
  errorMessage: string
) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: headers,
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return resData;
};

export const postMessage = async (data: object) => {
  const resData = await fetchMutateData(
    import.meta.env.VITE_NETLIFY_POSTMSG,
    'POST',
    data,
    { 'Content-Type': 'application/json' } as HeadersInit,
    'Failed to send message.'
  );

  return resData;
};
