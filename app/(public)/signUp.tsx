import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import BackButton from "../../src/components/common/BackButton";
import Button from "../../src/components/common/Button";
import Input from "../../src/components/common/Input";
import Icon from "../../src/components/icons";
import ScreenWrapper from "../../src/components/layout/ScreenWrapper";
import { theme } from "../../src/constants/theme";
import { supabase } from "../../src/lib/supabase";
import { hp, wp } from "../../src/utils/ui";

const SignUp = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    if (!nameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert("新規登録", "すべての項目を入力してください！");
      return;
    }

    const name = nameRef.current.trim();
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    setLoading(true);

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      Alert.alert("新規登録", error.message);
    } else if (session) {
      Alert.alert("新規登録", "アカウントが正常に作成されました！");
      router.navigate("/(auth)/home");
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View>
          <BackButton router={router} />
        </View>

        <View>
          <Text style={styles.welcomeText}>始めましょう</Text>
        </View>

        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            アカウント作成のため、詳細を入力してください
          </Text>
          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="お名前を入力"
            placeholderTextColor={theme.colors.textLight}
            onChangeText={(value) => {
              nameRef.current = value;
            }}
          />
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="メールアドレスを入力"
            placeholderTextColor={theme.colors.textLight}
            onChangeText={(value) => {
              emailRef.current = value;
            }}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            secureTextEntry
            placeholder="パスワードを入力"
            placeholderTextColor={theme.colors.textLight}
            onChangeText={(value) => {
              passwordRef.current = value;
            }}
          />

          <Button
            title="新規登録"
            loading={loading}
            onPress={onSubmit}
            hasShadow={true}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>すでにアカウントをお持ちの方は</Text>
          <Pressable onPress={() => router.navigate("/(public)/signIn")}>
            <Text
              style={[
                styles.footerText,
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
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.weight.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  input: {
    flexDirection: "row",
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.xxl,
    borderCurve: "continuous",
    padding: 18,
    paddingHorizontal: 20,
    gap: 15,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.weight.semibold,
    color: theme.colors.text,
  },
  loginText: {
    fontSize: hp(2.1),
    color: "white",
    fontWeight: theme.fonts.weight.bold,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});

export default SignUp;
