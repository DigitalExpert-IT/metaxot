import Cookies from "js-cookie";
import axRef from "./axiosRef";
import { useAsyncCall } from "hooks/useAsyncCall";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

export interface ILoginForm {
  email: string;
  password: string;
}

interface IUserData {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
}

const useAuth = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const toast = useToast();
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

        router.back();
        return { successMessage: t("succes.successLogin") };
      } catch (error) {
        throw new Error("Authentication failed");
      }
    }
  );

  const userData = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("userData");
      if (user) {
        return JSON.parse(user) as IUserData;
      }
    }

    return null;
  };

  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("userData");

    toast({ status: "success", description: "Logout Success" });
  };

  return {
    authenticate,
    isAuthenticated: !!token,
    logout,
    isLoading,
    userData: userData(),
  };
};

export default useAuth;
