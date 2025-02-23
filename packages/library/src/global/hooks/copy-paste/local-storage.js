const getZoloEditorLocalStorage = (key = false) => {
  if (!window.localStorage) {
    return null;
  }

  if (!key) {
    return localStorage;
  }

  const zolo_librarytate = localStorage.getItem(key);

  if (zolo_librarytate) {
    return JSON.parse(zolo_librarytate);
  }

  return null;
};

export default getZoloEditorLocalStorage;
