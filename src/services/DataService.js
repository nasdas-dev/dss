import { getDomain } from "../helpers/getDomain";

/**
 * Data service which handles all the http calls.
 * @Class
 */
export default class DataService {
  // Get request
  static getRequest(url) {
    return fetch(`${getDomain()}${url}`, {
      method: "GET",
      headers: this.headers,
    });
  }

  // Post request
  static postRequest(url, data) {
    return fetch(`${getDomain()}${url}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
  }

  // Put request
  static putRequest(url, data, headers = this.headers) {
    return fetch(`${getDomain()}${url}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
  }

  // Returns the http header
  static get headers() {
    const token = localStorage.getItem("token") || "";

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("x-access-token", token);
    headers.set("Connection", "keep-alive");
    headers.set("Accept", "*");
    return headers;
  }
}
