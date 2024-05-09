import { Layout } from "../../common";
import { Header } from "../../components";
import { Avatar } from "./components/Avatar";
import { ProfileForm } from "./components/ProfileForm";

export function Profile() {
  return (
    <Layout>
      <Header title="Личный кабинет" isNotCircle />
      <Avatar />
      <ProfileForm />
    </Layout>
  );
}
