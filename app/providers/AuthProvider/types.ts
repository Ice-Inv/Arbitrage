import { ReactNode } from "react";

export type User = {
  login: string;
  iat: number;
  email: string | null;
  timezone: string | null;
  currency: string | null;
  locale: string | null;
}

export type AuthContextProps = {
  user: User | null;
  isLoading: boolean;
  userInfo: () => Promise<void>;
  register: (login: string, password: string) => Promise<void>;
  login: (login: string, password: string) => Promise<void>;
  logout: (id: string) => Promise<void>;
  setTimezone: (id: string, timezone: string) => Promise<void>;
  setLocale: (id: string, locale: string) => Promise<void>;
  setCurrency: (id: string, currency: string) => Promise<void>;
}

export type AuthProviderProps = {
  children: ReactNode;
}