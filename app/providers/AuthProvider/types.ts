import { ReactNode } from "react";

export type User = {
  name: string;
  iat: number;
  email: string | null;
}

export type AuthContextProps = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  userInfo: () => Promise<void>;
  register: (uname: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setTimezone: (id: string, timezone: string) => Promise<void>;
  setLocale: (id: string, locale: string) => Promise<void>;
  setCurrency: (id: string, currency: string) => Promise<void>;
}

export type AuthProviderProps = {
  children: ReactNode;
}