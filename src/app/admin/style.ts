import { Colors } from "@/constants";
import { Typography, colors, styled } from "@mui/material";

export const BackgroundTypography = styled(Typography)({
  backgroundColor: Colors.bgColor,
  color: Colors.secondColor,
  padding: "10px",
});

export const RegisterTypography = styled(Typography)({
  fontSize: "12px",
  color: Colors.thirdColor,
  marginTop: "4px",
});

export const StyledLinkText = styled("span")({
  fontSize: "12px",
  paddingLeft: "10px",
  color: Colors.fourthColor,
  "&:hover": {
    color: Colors.fifthColor,
  },
});
