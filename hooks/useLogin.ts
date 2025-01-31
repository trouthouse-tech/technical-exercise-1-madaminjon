import { useRootNavigation } from "@/src/nav/root/hooks";
import { ROOT_ROUTES } from "@/src/nav/root/types";
import { storage } from "@/src/storage";
import { useAppDispatch } from "@/src/store/hooks";
import { userActions } from "@/src/store/slices/user";
import { useCallback, useMemo, useState } from "react";

export const useLogin = () => {
  const navigation = useRootNavigation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const login = useCallback(
    async (newUser: { email: string; password: string }) => {
      setLoading(true);
      try {
        // api call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        dispatch(userActions.login(newUser));

        // save user or token to the local storage
        await storage.setItem("user", JSON.stringify(newUser));

        // reset the user state and navigate to the main page
        setUser({ email: "", password: "" });
        navigation.navigate(ROOT_ROUTES.MAIN);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, setLoading, navigation, userActions.login]
  );

  return useMemo(
    () => ({
      user,
      setUser,
      login,
      loading,
    }),
    [user, login, loading, setUser]
  );
};
