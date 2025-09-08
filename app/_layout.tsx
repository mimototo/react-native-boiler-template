import type { Session, User } from "@supabase/supabase-js";
import { Stack, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../src/components/provider/AuthProvider";
import { supabase } from "../src/lib/supabase";
import { getUserData } from "../src/services/userService";

const RootLayout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

const MainLayout = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const { setAuth, setUserData } = useAuth();
  const router = useRouter();

  const updateUserData = useCallback(
    async (user: User) => {
      try {
        const res = await getUserData(user.id);
        if (res.success) {
          setUserData(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    },
    [setUserData],
  );

  useEffect(() => {
    // 初期認証状態を取得
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsInitialized(true);
    });

    // 認証状態の変更を監視
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // セッション状態に応じて認証フローを処理
  useEffect(() => {
    if (!isInitialized) return;

    if (session) {
      setAuth(session.user);
      updateUserData(session.user);
      router.replace("/(auth)/home");
    } else {
      setAuth(undefined);
      router.replace("/(public)/welcome");
    }
  }, [session, isInitialized, setAuth, updateUserData, router]);

  // 初期化が完了するまで何も表示しない
  if (!isInitialized) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)/home" />
      <Stack.Screen name="(public)/signIn" />
      <Stack.Screen name="(public)/signUp" />
      <Stack.Screen name="(public)/welcome" />
    </Stack>
  );
};

export default RootLayout;
