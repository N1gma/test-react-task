export function Post(url, body) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    fetch(url, options)
      .then(res => res.json())
      .then((text) => resolve(text))
      .catch((error) => {
        reject(error);
      });
  });
}

export function Get(url) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then((text) => resolve(text))
      .catch((error) => {
        reject(error);
      });
  });
}

