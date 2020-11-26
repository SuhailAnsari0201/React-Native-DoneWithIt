import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
// import messagesApi from "../api/messages";
// import useApi from "../hooks/useApi";
// import useAuth from "../auth/useAuth";
// import ActivityIndicator from "../components/ActivityIndicator";

const initialMessages = [
  {
    id: 1,
    title:
      "T1 fdwhjdgsfver fdge rhge5rtdhvw5yer tvg3t4hv3g4teyrcg34wthe c35eth3btrwhf35bykj 4v6uytejhc35rtehg34vt rchfb5yetrhfb5yetgh c5beythfg",
    description:
      "ewrcgw rgw4egrw4xteahrg xvtw4hrefgt4erhfgv t4efhgv4rehcb5eyrgth bvyetgjhbcytgth bvytrghceb",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen() {
  // const { user } = useAuth();
  // const getMessagesApi = useApi(messagesApi.getMessages);

  // useEffect(() => {
  //   getMessagesApi.request(user);
  // }, []);

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  //console.log("messs obj", getMessagesApi.data.length);
  return (
    <>
      {/* <ActivityIndicator visible={getMessagesApi.loading} /> */}

      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("message selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 3,
                title: "T3",
                description: "D3",
                image: require("../assets/mosh.jpg"),
              },
            ]);
          }}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
