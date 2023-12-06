export const getDistinctObjects = (array: any, property: any) => {
  const distinctObjects: any = [];
  const seenValues: any = {};

  array.forEach((object: any) => {
    const value = object[property];

    if (!seenValues[value]) {
      seenValues[value] = true;
      distinctObjects.push(object);
    }
  });

  return distinctObjects;
};
