import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import ProductsOverview from "../screens/shop/ProductsOverview";
import ProductDetail from "../screens/shop/ProductDetail";
import Colors from "../constants/Colors";
import Orders from "../screens/shop/Orders";
import Cart from "../screens/shop/Cart";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.os === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.os === "android" ? "white" : Colors.primary,
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverview,
    ProductDetail: ProductDetail,
    Cart: Cart,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  { Orders: Orders },
  { defaultNavigationOptions: defaultNavigationOptions }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
  },
  {
    contentOptions: {
      activeTintColos: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
