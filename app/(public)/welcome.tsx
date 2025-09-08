import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Button from "../../src/components/common/Button";
import ScreenWrapper from "../../src/components/layout/ScreenWrapper";
import { theme } from "../../src/constants/theme";
import { hp, wp } from "../../src/utils/ui";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../../src/assets/images/welcome.png")}
        />

        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Your App!</Text>
          <Text style={styles.punchline}>
            Welcome to your app, let's start!
          </Text>
        </View>

        <View style={styles.footer}>
          <Button
            title="はじめる"
            textStyle={{}}
            loading={false}
            hasShadow={true}
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push("/(public)/signUp")}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>アカウントをお持ちですか？</Text>
            <Pressable onPress={() => router.push("/(public)/signIn")}>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.weight.semibold,
                  },
                ]}
              >
                ログイン
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(5),
  },
  welcomeImage: {
    height: hp(35),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.weight.extraBold,
  },
  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    gap: 30,
    width: "100%",
  },

  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});

export default WelcomePage;
