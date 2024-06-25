import PasswordInput from "./Forms/PasswordInput";
import TextInput from "./Forms/TextInput";
import { TextInputProps } from "./Forms/TextInput/types";

interface FormControlProps extends TextInputProps {
  type: string;
}

const FormControl: React.FC<FormControlProps> = ({ type, ...rest }) => {
  switch (type) {
    case "text":
      return <TextInput {...rest} />;

    case "password":
      return <PasswordInput {...rest} />;

    default:
      return null;
  }
};

export default FormControl;
