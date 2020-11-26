import client from "./client";

const send = (message, listingId) =>
  client.post("/messages", {
    message,
    listingId,
  });

const getMessages = (userInfo) => {
  client.get("/messages", userInfo);
};

export default { send, getMessages };
