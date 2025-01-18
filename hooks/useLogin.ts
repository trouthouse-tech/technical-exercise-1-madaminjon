import { useAppDispatch } from "@/src/store/hooks";
import { userActions } from "@/src/store/slices/user";
import { useCallback, useState } from "react";

export const useLogin = () => {
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

        // reset the user state and navigate to the main page
        setUser({ email: "", password: "" });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, setLoading]
  );

  return {
    user,
    setUser,
    login,
    loading,
  };
};
