import { TouchableOpacity, Text, Dimensions, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { Avatar, LoaderContainer, Padding, Rate } from "../../common";
import { useAuth } from "../../hooks";
import { HeaderProps } from "./types";
import { NAVIGATE } from "../../constants";
import { useTheme } from "@rneui/themed";

const { width } = Dimensions.get('window');
  const calculatedWidth = width - 92;

export function Header({
  title,
}: HeaderProps) {
  const { isLoading, user } = useAuth();
  const { navigate } = useNavigation();
  const {
    theme: {
      mode,
      colors : {
        main1,
        element1,
        element2,
      },
    },
  } = useTheme();

  function handleNavigate() {
    if (title) return;

    navigate(NAVIGATE.Profile);
  }

  return (
    <LoaderContainer isLoading={isLoading}>
      <Padding style={styles.root}>
        <Avatar name={user?.login} size="large" />
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={handleNavigate}
            style={styles.avatarPress}
          >
            <Text
              style={{
                ...styles.avatarText,
                color: mode === 'light' ? element1 : element2
              }}
            >
              {title ? title : user?.login || 'Noname'}
            </Text>
            {!title && (
              <Entypo
                name="chevron-small-right"
                size={28}
                style={styles.avatarIcon}
              />
            )}
          </TouchableOpacity>

          <Rate />
        </View>
      </Padding>
    </LoaderContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPress: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: calculatedWidth,
  },
  avatarText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  avatarIcon: {
    color: 'rgb(31 41 55)',
  },
})