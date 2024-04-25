import { Text } from "react-native"
import { Padding } from "../Padding"
import { SubHeadingProps } from "./types"

export function SubHeading({
  text,
}: SubHeadingProps) {
  return(
    <Padding>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 28,
          fontWeight: 'bold',
          color: 'rgb(31 41 55)',
        }}
      >
        {text}
      </Text>
    </Padding>
  )
}