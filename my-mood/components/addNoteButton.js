import { Text } from "react-native";
import { Icon } from "@rneui/themed";

const AddNoteButton = ({ color }) => {
  const name = "emoticon-sad";
  const type = "material-community";
  return <Icon reverse name={name} type={type} color={color} />;
};

export default AddNoteButton;
