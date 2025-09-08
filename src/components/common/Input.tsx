import {
  type StyleProp,
  StyleSheet,
  TextInput,
  View,
  type ViewStyle,
} from "react-native";
import { theme } from "../../constants/theme";
import { hp } from "../../utils/ui";

interface InputProps {
  icon: React.ReactNode;
  placeholder: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputRef?: React.RefObject<TextInput>;
  placeholderTextColor: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input = ({
  icon,
  containerStyle,
  inputRef,
  placeholderTextColor,
  onChangeText,
  secureTextEntry,
  ...props
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle && containerStyle]}>
      {icon && icon}
      <TextInput
        style={{ flex: 1 }}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef && inputRef}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(7.2),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    paddingHorizontal: 18,
    gap: 12,
  },
});

export default Input;
