import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RelevantInformationPops } from "./types";
import { FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';
import { formattedDate } from "../../../../../../../../utils";
import { useCopy } from "../../../../../../../../hooks";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function RelevantInformation({
  id,
  length,
  residenceTime,
  isOpen,
}: RelevantInformationPops) {
  const {
    theme: {
      colors: {
        element1,
        main1,
      }
    }
  } = useTheme();
  const { handleCopy } = useCopy();

  return (
    <View style={{ ...styles.root, borderBlockColor: main1 }}>
      <View style={styles.idContainer}>
        <Text
          style={{
            ...styles.idLabel,
            color: element1,
          }}
        >
          ID: {id}
        </Text>

        <TouchableOpacity onPress={() => handleCopy(id)}>
          <FontAwesome6
            name="copy"
            size={16}
            color={element1}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.lengthContainer}>
          <MaterialCommunityIcons
            name="ruler-square-compass"
            size={20}
            color={element1}
          />
          <Text style={{ ...styles.label, color: element1 }}>
            {length}
          </Text>
        </View>

        <Text style={{ ...styles.label, color: element1 }}>
          {formattedDate(residenceTime)}
        </Text>

        <View style={{ ...styles.status, borderColor: element1 }}>
          <AntDesign
            name={isOpen ? "check" : "close"}
            size={18}
            color={element1}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  lengthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    marginRight: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  idContainer: {
    flexDirection: 'row',
    columnGap: 8,
  },
  idLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  status: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 2,
  },
});
