import { View } from "react-native";
import Loading from "../src/components/common/Loading";
import { theme } from "../src/constants/theme";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Loading size="large" color={theme.colors.primary} />
    </View>
  );
};

export default App;
