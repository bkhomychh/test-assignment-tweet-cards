export const getDataFromLocalStorage = key => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  } catch (err) {
    console.log(err.message);
  }
};

export const saveDataToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.log(err.message);
  }
};
