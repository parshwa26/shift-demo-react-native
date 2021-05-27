import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import appliedListingsApi from "../api/appliedlistings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

function AppliedListingsScreen({ navigation }) {
  const getAppliedListingsApi = useApi(appliedListingsApi.getAppliedListings);

  useEffect(() => {
    getAppliedListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getAppliedListingsApi.loading} />
      <Screen style={styles.screen}>
        {getAppliedListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getAppliedListingsApi.request} />
          </>
        )}
        <FlatList
          data={getAppliedListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          refreshing={false}
          onRefresh={getAppliedListingsApi.request}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              time={item.time}
              place={item.place}
              department={item.department}
              addButton={false}
              onPress={() => getAppliedListingsApi.request}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default AppliedListingsScreen;
