import PasswordInput from "./Forms/PasswordInput";
import SelectBox from "./Forms/SelectBox";
import { SelectBoxProps } from "./Forms/SelectBox/types";
import TextInput from "./Forms/TextInput";
import { TextInputProps } from "./Forms/TextInput/types";

interface FormControlProps extends TextInputProps, SelectBoxProps {
  type: string;
}

const FormControl: React.FC<FormControlProps> = ({ type, ...rest }) => {
  switch (type) {
    case "text":
      return <TextInput {...rest} />;

    case "password":
      return <PasswordInput {...rest} />;

    case "select":
      return <SelectBox {...rest} />;

    default:
      return null;
  }
};

export default FormControl;
