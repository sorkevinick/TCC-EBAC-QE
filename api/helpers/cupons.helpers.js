const generateAuthentication = (
    username = "admin_ebac",
    password = "@admin!&b@c!2022"
  ) => {
    const basicAuth = Buffer.from(`${username}:${password}`).toString("base64");
    return basicAuth;
  };
  
  const getHeaders = () => {
    const basicAuth = generateAuthentication();
    const headers = {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    };
    return headers;
  };
  
  module.exports = { generateAuthentication, getHeaders };
  