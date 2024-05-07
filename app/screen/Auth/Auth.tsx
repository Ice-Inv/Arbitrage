import { StyleSheet, View, Text, Pressable } from "react-native";
import { Button, ColorTheme, LoaderContainer, TextField } from "../../common";
import { useAuthorization } from "./hooks/useAuthorization";
import { IS_REGISTRATION, PLACEHOLDER, AUTH } from "./constants";
import { useTheme } from "@rneui/themed";

export function Auth() {
  const {
    isLoading,
    userLogin,
    password,
    repeatPassword,
    handleRegister,
    handleLogin,
    isRegistration,
    handleIsRegistration,
  } = useAuthorization();
  const { theme } = useTheme();

  return (
    <View style={{...styles.root, backgroundColor: theme.colors.bg1}}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={{...styles.title, color: theme.colors.element1}}>
            {isRegistration ? AUTH.signUp : AUTH.signIn}
          </Text>

          <LoaderContainer isLoading={isLoading}>
            <TextField {...userLogin} placeholder={PLACEHOLDER.username} />
            <TextField {...password} placeholder={PLACEHOLDER.password} />
            {isRegistration && <TextField {...repeatPassword} placeholder={PLACEHOLDER.repeatPassword} />}
          </LoaderContainer>

          <Button
            onPress={isRegistration ? handleLogin : handleRegister}
            title={isRegistration ? AUTH.signUp : AUTH.signIn}
          />

          <View style={styles.actionsContainer}>
            <ColorTheme />

            <Pressable onPress={handleIsRegistration}>
              <Text style={{...styles.pressableText, color: theme.colors.element1}}>
                {isRegistration ? IS_REGISTRATION.signUp : IS_REGISTRATION.signIn}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    paddingTop: 16,
  },
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  wrapper: {
    width: '90%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pressableText: {
    opacity: 0.8,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
