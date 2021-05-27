import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

function OpenListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  const addToAppliedListingsApi = useApi(listingsApi.addToListing);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    const result1 = await listingsApi.deleteListing({ ...listing });
    const result = await listingsApi.addToListing({ ...listing }, (progress) =>
      setProgress(progress)
    );
    if (!result.ok) {
      return alert("Could not apply for the shift");
    }
    if (!result1.ok) {
      return alert("Item Not deleted");
    }

    resetForm();
  };

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          refreshing={false}
          onRefresh={getListingsApi.request}
          extraData={getListingsApi.data}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              title={item.title}
              time={item.time}
              place={item.place}
              department={item.department}
              onSubmit={handleSubmit}
              addButton={true}
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

export default OpenListingsScreen;
