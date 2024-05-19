import { Layout } from "../../common";
import { Header } from "../../components";
import {SettingsBox} from "./components/SettingsBox";

export function Settings() {
  return (
    <Layout>
      <Header title="Настройки" isNotCircle />
      <SettingsBox/>
    </Layout>
  );
}
