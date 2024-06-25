import { Button } from "@mui/material";
import { CommonContainedButtonProps } from "./type";

const CommonContainedButton: React.FC<CommonContainedButtonProps> = ({
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
    >
      {btnText}
    </Button>
  );
};

export default CommonContainedButton;
