import { Button } from "@mui/material";
import { CommonContainedButtonProps } from "./type";

const CommonContainedButton: React.FC<CommonContainedButtonProps> = ({
  type,
  btnText,
  variant,
  fullwidth,
  size,
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      type={type}
      variant={variant ? variant : "contained"}
      fullWidth={fullwidth ?? false}
      size={size ?? "medium"}
      startIcon={startIcon ?? ""}
      endIcon={endIcon ?? ""}
    >
      {btnText}
    </Button>
  );
};

export default CommonContainedButton;
