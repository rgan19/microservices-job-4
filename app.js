function getItems() {
    fetch(uri)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('data', data);
        return data;
      })
      .catch(error => console.error('Unable to get items.', error));
  }