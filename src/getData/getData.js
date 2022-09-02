const axios = require("axios");
const mapArrToStrings = require("../mapArrToStrings/mapArrToStrings");

const getData = async () => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");

    const userIds = users.data.map((user) => user.id);

    return mapArrToStrings(userIds);
  } catch (e) {}
};

module.exports = getData;
