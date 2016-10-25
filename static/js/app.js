let loadData = (address = '/', oncontent = () => {}, onerror = () => {}) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', address, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        oncontent(xhr.responseText);
      } else {
        onerror();
      }
    }
  };
  xhr.send();
};
