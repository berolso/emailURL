import axios from "axios";
const token = process.env.REACT_APP_TINYTOKEN;
console.log('token',token)

export default async function makeTiny(url) {
  const tinyAPI = "https://api.tinyurl.com/create";

  const data = {
    url: url,
    domain: "tiny.one",
    // alias: "shushy",
  };

  const config = {
    method: "post",
    url: tinyAPI,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return response
  } catch (e) {
    console.log("e", e);
  }
}