import { Text } from "react-native";
import { Padding } from "../Padding";
import { HeadingProps } from "./types";

export function Heading({
  text,
  isCenter,
}: HeadingProps) {
  return(
    <Padding>
      <Text
        style={{
          fontSize: 24,
          lineHeight: 32,
          fontWeight: 'bold',
          color: 'rgb(31 41 55)',
          textAlign: isCenter ? 'center' : 'auto',
        }}
      >
        {text}
      </Text>
    </Padding>
  )
}