let nextId = 1;

export const createEntity = (): number => nextId++;

export const removeEntity = (id: number) => {
  // For this example, we don't track all components globally,
  // so removal would be manual or tracked with a central registry
};
