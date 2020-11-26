import client from "./client";

const register = (token) => {
  // to-> { data, type }
  client.post("/expoPushTokens", { token: token }); // to token->data
};
export default {
  register,
};
