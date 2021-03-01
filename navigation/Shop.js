import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import Cart from "../screens/shop/Cart";
import Orders from "../screens/shop/Orders";
import ProductDetail from "../screens/shop/ProductDetail";
import ProductsOverview from "../screens/shop/ProductsOverview";
import EditProduct from "../screens/user/EditProduct";
import UserProducts from "../screens/user/UserProducts";

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

const AdminNavigator = createStackNavigator(
  { UserProducts: UserProducts, EditProduct: EditProduct },
  { defaultNavigationOptions: defaultNavigationOptions }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColos: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
