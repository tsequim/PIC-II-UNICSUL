// Função para definir o estado do array apenas com objetos únicos
export const addOnlyNews = (
  oldArray: any[],
  newObjects: any[],
  field: string
) => {
  const existingIds = oldArray.map((object) => object[field]);
  const newFilteredObjects = newObjects.filter(
    (object) => !existingIds.includes(object[field])
  );

  const newArray = [...oldArray, ...newFilteredObjects];
  return newArray;
};
