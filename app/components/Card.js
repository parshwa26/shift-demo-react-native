import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import { Form, SubmitButton } from "../components/forms";

import Text from "./Text";

function Card({ id, title, time, place, department, addButton, onSubmit }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle}>{time}</Text>
          <Text style={styles.subTitle}>{place}</Text>

          <Text style={styles.subTitle}>{department}</Text>
          {addButton ? (
            <Form
              initialValues={{
                id: id,
                title: title,
                time: time,
                place: place,
                department: department,
              }}
              onSubmit={onSubmit}
            >
              <SubmitButton title="Apply" />
            </Form>
          ) : (
            <></>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    marginBottom: 7,
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default Card;
