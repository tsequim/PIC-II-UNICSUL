import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import * as auth from "../services/auth";
import { refreshToken } from "../services/auth";

import { IUser } from "../@types/user";

import { apiConfig } from "../services/apiConfig";
import { getBuyersById } from "../services/apiBuyers";
import { Notification } from "../components/Notifications";

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  signup(
    username: string,
    password: string,
    confirmationCode: string
  ): Promise<void>;
  login(username: string, password: string): Promise<void>;
  logout(): void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@BakeBliss:user");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));

        setIsLoading(false);
      }
    }
    loadStorageData();

    async function interceptors() {
      apiConfig.interceptors.request.use(
        async (config) => {
          const token = await AsyncStorage.getItem("@BakeBliss:token");
          config.headers["Authorization"] = `Bearer ${token}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      apiConfig.interceptors.response.use(
        (res) => {
          return res;
        },
        async (err) => {
          const originalConfig = err.config;

          if (err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
              originalConfig._retry = true;

              try {
                const userData: any = await AsyncStorage?.getItem(
                  "@BakeBliss:user"
                );
                const storagedRefreshToken = await AsyncStorage.getItem(
                  "@BakeBliss:refreshToken"
                );
                const rs = (await refreshToken(
                  JSON.parse(userData)?.username as string,
                  {
                    refreshToken: storagedRefreshToken as string,
                  }
                )) as any;
                const tokens = rs?.data;

                apiConfig.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${tokens?.accessToken}`;

                await AsyncStorage.setItem(
                  "@BakeBliss:refreshToken",
                  tokens?.refreshToken
                );
                await AsyncStorage.setItem(
                  "@BakeBliss:token",
                  tokens?.accessToken
                );

                return apiConfig(originalConfig);
              } catch (_error: any) {
                if (_error?.response && _error?.response?.data) {
                  return Promise.reject(_error?.response?.data);
                }
                // @ts-ignore
                // navigation.navigate("Login");
                // return Promise.reject(_error);
              }
            }
          }

          return Promise.reject(err);
        }
      );
    }

    interceptors();
  }, []);

  useEffect(() => {
    const setStorage = async () => {
      await AsyncStorage.setItem("@BakeBliss:user", JSON.stringify(user));
    };
    setStorage();
  }, [user]);

  async function signup(
    username: string,
    password: string,
    confirmationCode: string
  ) {
    const response = await auth
      .signUp({
        username,
        password,
        confirmationCode,
        role: "Buyer",
      })
      .then(async (res: any) => {
        const newUserState = {
          username,
          password,
          onboardingDone: false,
          mailValidation: false,
        };
        setUser(newUserState);
        await AsyncStorage.setItem(
          "@BakeBliss:user",
          JSON.stringify(newUserState)
        );
        // @ts-ignore
        navigation.navigate("NewUser");
      })
      .catch((err) => {
        switch (err?.code) {
          case "ConfirmationCodeExpired":
            Notification("Código de confirmação expirado!", "danger", 5000);
            return;
        }
      });
    // return response;
  }

  async function login(username: string, password: string) {
    await auth
      .login(username, password)
      .then(async (res: any) => {
        await AsyncStorage.setItem("@BakeBliss:token", res?.data?.accessToken);
        await AsyncStorage.setItem(
          "@BakeBliss:refreshToken",
          res?.data?.refreshToken
        );
        await auth.getUserId(username).then(async (res: any) => {
          await getBuyersById(res?.data).then(async (res: any) => {
            const newUserState = { ...res?.data, username, password };
            await AsyncStorage.setItem(
              "@BakeBliss:user",
              JSON.stringify(newUserState)
            );
            setUser(newUserState);
            // @ts-ignore
            navigation?.navigate("Home");
          });
        });
        // setUser()
      })
      .catch((err) => {
        switch (err?.code) {
          case "PasswordRecoveryNeeded":
            Notification(
              "É necessário recuperar a senha para fazer login.",
              "info",
              5000
            );
            // @ts-ignore
            navigation.navigate("MissPassword");
            return;
          case "UserBlocked":
            Notification("Usuário bloqueado.", "danger", 5000);
            return;
          default:
            Notification("E-mail e/ou senha inválidos.", "danger", 3500);
            return;
        }
      });
  }

  async function logout() {
    await AsyncStorage.clear();
    setUser(null);
    // @ts-ignore
    // navigation.navigate("Login");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: user?.onboardingDone as boolean,
        user: user,
        setUser,
        signup,
        login,
        logout,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
