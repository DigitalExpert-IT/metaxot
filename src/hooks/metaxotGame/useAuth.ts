import Cookies from "js-cookie";
import axRef from "./axiosRef";
import { useAsyncCall } from "hooks/useAsyncCall";
import { useEffect, useState } from "react";

export type ILoginForm = {
  email: string;
  password: string;
};

const useAuth = () => {
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );

  useEffect(() => {
    const checkCookie = setInterval(() => {
      const updatedValue = Cookies.get("token");
      if (!updatedValue) {
        setToken(null);
      }

      if (updatedValue !== token) {
        setToken(updatedValue || "");
      }
    }, 1000);

    return () => {
      clearInterval(checkCookie);
    };
  }, [token]);

  const { exec: authenticate, isLoading } = useAsyncCall(
    async ({ email, password }: ILoginForm) => {
      try {
        const response = await axRef.post("/login", {
          email,
          password,
        });

        const { authorizationToken, user } = response.data.result;
        Cookies.set("token", authorizationToken);
        localStorage.setItem("userData", JSON.stringify(user));
      } catch (error) {
        throw new Error("Authentication failed");
      }
    }
  );

  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("userData");
  };

  return { authenticate, isAuthenticated: !!token, logout, isLoading };
};

export default useAuth;
