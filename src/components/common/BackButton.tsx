import type { Router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { theme } from "../../constants/theme";
import Icon from "../icons";

interface BackButtonProps {
  router: Router;
  size?: number;
}

const BackButton = ({ router, size }: BackButtonProps) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon
        name="arrowLeft"
        strokeWidth={2.5}
        size={size ?? 24}
        color={theme.colors.text}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
});

export default BackButton;
