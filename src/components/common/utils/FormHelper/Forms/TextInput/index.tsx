import { Controller } from "react-hook-form";
import { TextInputProps } from "./types";
import { InputAdornment, TextField } from "@mui/material";

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  control,
  multiline,
  required,
  disabled,
  icon,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          size={"small"}
          label={label}
          id={name}
          multiline={multiline ?? false}
          required={required ?? false}
          disabled={disabled ?? false}
          fullWidth={true}
          InputProps={{
            startAdornment: icon ? (
              <InputAdornment position="start">{icon}</InputAdornment>
            ) : null,
          }}
        />
      )}
    />
  );
};

export default TextInput;
