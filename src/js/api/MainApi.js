export default class MainApi {
  constructor(options) {
    this.options = options;
  }

  getUser() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => ({ status: res.status, data })))
      .catch((err) => Promise.reject(err));
  }

  signup({ email, password, name }) {
    return fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => res.json().then((data) => ({ status: res.status, data })))
      .catch((err) => Promise.reject(err));
  }

  login({ email, password }) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json().then((data) => ({ status: res.status, data })))
      .catch((err) => Promise.reject(err));
  }

  logout() {
    return fetch(`${this.options.baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => ({ status: res.status, data })))
      .catch((err) => Promise.reject(err));
  }

  getArticles() {
    return fetch(`${this.options.baseUrl}/articles`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json().then((data) => ({ status: res.status, data })))
      .catch((err) => Promise.reject(err));
  }

  createArticle(data) {
    return fetch(`${this.options.baseUrl}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: data.keyword,
        title: data.title,
        text: data.text,
        date: data.date,
        source: data.source,
        link: data.link,
        image: data.image,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise));
      })
      .catch((err) => Promise.reject(err));
  }

  deleteArticle(id) {
    return fetch(`${this.options.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise));
      })
      .catch((err) => Promise.reject(err));
  }
}
