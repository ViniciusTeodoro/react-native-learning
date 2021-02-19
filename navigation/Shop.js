import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import ProductsOverview from "../screens/shop/ProductsOverview";
import ProductDetail from "../screens/shop/ProductDetail";
import Colors from "../constants/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverview,
    ProductDetail: ProductDetail,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.os === "android" ? Colors.primary : "",
      },
      headerTintCOlor: Platform.os === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
