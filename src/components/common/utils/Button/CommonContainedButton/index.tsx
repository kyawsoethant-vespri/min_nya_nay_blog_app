import { Button } from "@mui/material";
import { CommonContainedButtonProps } from "./type";

const CommonContainedButton: React.FC<CommonContainedButtonProps> = ({
  type,
  btnText,
  variant,
  fullwidth,
  size,
}) => {
  return (
    <Button
      variant={variant ? variant : "contained"}
      fullWidth={fullwidth ?? false}
      size={size ?? "medium"}
      type={type}
    >
      {btnText}
    </Button>
  );
};

export default CommonContainedButton;
