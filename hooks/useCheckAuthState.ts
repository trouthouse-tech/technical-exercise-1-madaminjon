import { useRootNavigation } from "@/src/nav/root/hooks";
import { ROOT_ROUTES } from "@/src/nav/root/types";
import { storage } from "@/src/storage";
import { useAppDispatch } from "@/src/store/hooks";
import { userActions } from "@/src/store/slices/user";
import { useEffect, useState } from "react";

export const useCheckAuthState = () => {
  const dispatch = useAppDispatch();
  const navigation = useRootNavigation();
  const [loading, setLoading] = useState(true);

  const checkAuthState = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // get user from local storage
    const userString = await storage.getItem("user");
    const user = userString
      ? (JSON.parse(userString) as { email?: string; password?: string })
      : undefined;

    // check if user is logged in
    if (user && user.email && user.password) {
      dispatch(userActions.login(user));
      navigation.navigate(ROOT_ROUTES.MAIN);
    } else {
      dispatch(userActions.logout());
      navigation.navigate(ROOT_ROUTES.AUTH);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  return { loading };
};
