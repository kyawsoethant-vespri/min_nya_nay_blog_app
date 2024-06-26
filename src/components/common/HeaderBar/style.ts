import { Colors } from "@/constants";
import { styled } from "@mui/material";

export const StyledLinkTextLogo = styled("span")({
  "&:hover": {
    color: Colors.color,
    cursor: "pointer",
  },
});
