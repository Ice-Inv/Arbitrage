import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@rneui/themed';
import * as Clipboard from 'expo-clipboard';
import { InvitationCodeProps } from "../../../Profile/components/ProfileForm/components/InvitationСode/types";
import { MainGradient } from "../../../../common/MainGradient";
import {Padding} from "../../../../common";
import { Feather } from '@expo/vector-icons';

export function InvitationCode({
 code,
}: InvitationCodeProps) {
  const {
    theme: {
      colors: {
        blue1,
        element2,
      }
    }
  } = useTheme();

  const handleCopyInviteCode = () => {
    Clipboard.setString(code);
  };

  return (
    <Padding>
      <View>
        <MainGradient style={styles.gradient}>
          <View style={styles.container}>
            <View>
              <Text style={{ ...styles.label, color: element2 }}>Скидка на подписку</Text>
              <Text style={{ ...styles.code, color: element2 }}>Пригласи друга и получи скидку до 30%</Text>
            </View>

            <TouchableOpacity
              onPress={handleCopyInviteCode}
              style={{ ...styles.copy, backgroundColor: blue1 }}
            >
              <Feather name="users" size={24} color={element2} />
            </TouchableOpacity>
          </View>
        </MainGradient>
      </View>
    </Padding>
  );
}

const styles = StyleSheet.create({
  gradient: {
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  copy: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
  },
  code: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 4,
  }
});
