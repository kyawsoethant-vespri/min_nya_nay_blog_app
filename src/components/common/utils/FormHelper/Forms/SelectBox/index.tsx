import React from "react";
import { SelectBoxProps } from "./types";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  name,
  control,
  options,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <FormControl
          fullWidth
          size="small"
          margin="normal"
          error={error ? true : false}
        >
          <InputLabel id={label}>{label}</InputLabel>
          <Select
            value={value}
            labelId={label}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled ?? false}
          >
            {options?.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error ? error.message : ""}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default SelectBox;
