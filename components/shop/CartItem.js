import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>R${props.amount.toFixed(2)} </Text>
        <TouchableOpacity style={styles.deleteButton}>
          <Button title="Remove" onPress={props.onRemove} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    color: "#888",
    fontSize: 16,
  },
  mainText: { fontSize: 16 },
  deleteBUtton: {
    marginLeft: 20,
  },
});

export default CartItem;
