import { createContext, useEffect, useMemo, useState } from "react";
import { AuthContextProps, User, AuthProviderProps} from './types';
import { authService } from "../../services/AuthProvider";
import { getToken } from "../../utils";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>('');
  const [refreshToken, setRefreshToken] = useState<string | null>('');

  async function handlerUserInfo() {
    setIsLoading(true);
    setError(null);

    try {
      const userInfo = await authService.getUserInfo();
      setUser(userInfo);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegister(uname: string, email: string, password: string) {
    setIsLoading(true);
    setError(null);

    try {
      await authService.postRegisterUser(uname, email, password);
      await handlerUserInfo();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(email: string, password: string) {
    setIsLoading(true);
    setError(null);

    try {
      await authService.postLoginUser(email, password);
      await handlerUserInfo();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    setIsLoading(true);
    setError(null);

    try {
      const userData = await authService.getLogout();
      
      userData && setUser(null);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleTimezone(id: string, timezone: string) {
    setIsLoading(true);
    setError(null);

    try {
      const userTimezone = await authService.putTimezone(id, timezone);
      
      user && setUser((prev) => prev && ({...prev, timezone: userTimezone}));
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLocale(id: string, locale: string) {
    setIsLoading(true);
    setError(null);

    try {
      const userLocale = await authService.putLocale(id, locale);
      
      user && setUser((prev) => prev && ({...prev, locale: userLocale}));
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCurrency(id: string, currency: string) {
    setIsLoading(true);
    setError(null);

    try {
      const userCurrency = await authService.putCurrency(id, currency);
      
      user && setUser((prev) => prev && ({...prev, currency: userCurrency}));
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getTokens() {
    const tokens = await Promise.all([
      getToken(ACCESS_TOKEN),
      getToken(REFRESH_TOKEN),
    ]);

    setAccessToken(tokens[0]);
    setRefreshToken(tokens[1]);
  }

  useEffect(() => {
    if (!accessToken || !refreshToken) return;

    handlerUserInfo();
  }, [accessToken, refreshToken]);

  useEffect(() => {
    getTokens();
    setIsLoadingInitial(false);
  }, []);

  const value = useMemo(() => ({
    user,
    isLoading,
    error,
    userInfo: handlerUserInfo,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    setTimezone: handleTimezone,
    setLocale: handleLocale,
    setCurrency: handleCurrency,
  }), [user, isLoading]);

  return (
    <AuthContext.Provider value={value}>
     {!isLoadingInitial && children}
    </AuthContext.Provider>
  )
}
