// api/config/apiConfig.js
const request = require('supertest');

const api = request('http://lojaebac.ebaconline.art.br/wp-json/wc/v3');

const generateAuthentication = (username = "admin_ebac", password = "@admin!&b@c!2022") => {
  const basicAuth = Buffer.from(`${username}:${password}`).toString("base64");
  return basicAuth;
};

const getHeaders = () => {
  const basicAuth = generateAuthentication();
  return {
    Authorization: `Basic ${basicAuth}`,
    "Content-Type": "application/json",
    Accept: "*/*",
  };
};

module.exports = { api, getHeaders };
