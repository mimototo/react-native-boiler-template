import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import BackButton from "../../src/components/common/BackButton";
import Button from "../../src/components/common/Button";
import Input from "../../src/components/common/Input";
import Lock from "../../src/components/icons/Lock";
import Mail from "../../src/components/icons/Mail";
import ScreenWrapper from "../../src/components/layout/ScreenWrapper";
import { theme } from "../../src/constants/theme";
import { supabase } from "../../src/lib/supabase";
import { hp, wp } from "../../src/utils/ui";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("ログイン", "すべての項目を入力してください！");
      return;
    }

    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert("ログイン", error.message);
    setLoading(false);
  };

  return (
    <ScreenWrapper bg={"white"}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View>
          <BackButton router={router} size={24} />
        </View>

        <View>
          <Text style={styles.welcomeText}>おかえりなさい</Text>
        </View>

        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            続行するにはログインしてください
          </Text>
          <Input
            icon={<Mail width={26} height={26} strokeWidth={1.6} />}
            placeholder="メールアドレスを入力"
            placeholderTextColor={theme.colors.textLight}
            onChangeText={(value) => {
              emailRef.current = value;
            }}
          />
          <Input
            icon={<Lock width={26} height={26} strokeWidth={1.6} />}
            secureTextEntry={true}
            placeholder="パスワードを入力"
            placeholderTextColor={theme.colors.textLight}
            onChangeText={(value) => {
              passwordRef.current = value;
            }}
          />

          <Button
            title="ログイン"
            loading={loading}
            onPress={onSubmit}
            hasShadow={true}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>アカウントをお持ちでない方は</Text>
          <Pressable onPress={() => router.navigate("/(public)/signUp")}>
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.primaryDark,
                  fontWeight: theme.fonts.weight.semibold,
                },
              ]}
            >
              新規登録
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

export default SignIn;
