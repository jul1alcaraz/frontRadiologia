export const getBooks = async () => {
  const response = await fetch( );
  const result = await response.json();

  console.log( result);

  return result;
};