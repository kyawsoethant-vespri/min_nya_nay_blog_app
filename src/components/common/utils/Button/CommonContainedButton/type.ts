export interface CommonContainedButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  btnText: string;
  variant?: "text" | "contained" | "outlined";
  fullwidth?: boolean;
  size: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
