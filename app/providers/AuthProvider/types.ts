import { ReactNode } from "react";

export type User = {
  name: string;
  phone: string;
  email: string;
  timezone: string;
  currency: string;
  locale: string;
  id: string;
}

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export type LoginData = {
  name?: string;
  email?: string;
  password: string;
}

export type AuthContextProps = {
  user: User | null;
  isLoading: boolean;
  register: (data: RegisterData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
  logout: (id: string) => Promise<void>;
  setTimezone: (id: string, timezone: string) => Promise<void>;
  setLocale: (id: string, locale: string) => Promise<void>;
  setCurrency: (id: string, currency: string) => Promise<void>;
}

export type AuthProviderProps = {
  children: ReactNode;
}