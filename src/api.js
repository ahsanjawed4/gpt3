import axios from "axios";
const url = "https://covid19.mathdro.id/api";
const options = {
  method: "GET",
};
const crypto = async (url) => {
  const { data } = await axios(url, options);
  const modify = data.map(({ totalConfirmed }) => ({
    name: totalConfirmed,
  }));
  return modify;
};
export { crypto, url };
