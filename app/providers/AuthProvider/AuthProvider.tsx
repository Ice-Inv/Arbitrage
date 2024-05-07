import { createContext, useEffect, useMemo, useState } from "react";
import { AuthContextProps, User, AuthProviderProps} from './types';
import { authService } from "../../services/AuthProvider";
import { AxiosError } from "axios";

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handlerUserInfo();
  }, []);

  async function handlerUserInfo() {
    try {
      setIsLoading(true);
      const userInfo = await authService.getUserInfo();
      setUser(userInfo !== undefined ? userInfo : null);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegister(login: string, password: string) {
    try {
      setIsLoading(true);
      await authService.postRegisterUser(login, password);
      await handlerUserInfo();
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(login: string, password: string) {
    try {
      setIsLoading(true);
      await authService.postLoginUser(login, password);
      await handlerUserInfo();
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout(id: string) {
    try {
      setIsLoading(true);
      const userData = await authService.getLogout(id);
      
      userData && setUser(null);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleTimezone(id: string, timezone: string) {
    try {
      setIsLoading(true);
      const userTimezone = await authService.putTimezone(id, timezone);
      
      user && setUser((prev) => prev && ({...prev, timezone: userTimezone}));
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLocale(id: string, locale: string) {
    try {
      setIsLoading(true);
      const userLocale = await authService.putLocale(id, locale);
      
      user && setUser((prev) => prev && ({...prev, locale: userLocale}));
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCurrency(id: string, currency: string) {
    try {
      setIsLoading(true);
      const userCurrency = await authService.putCurrency(id, currency);
      
      user && setUser((prev) => prev && ({...prev, currency: userCurrency}));
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }

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
     {!isLoading && children}
    </AuthContext.Provider>
  )
}
