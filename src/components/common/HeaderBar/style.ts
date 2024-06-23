import { BorderColor } from "@mui/icons-material";
import { Button, InputBase, ListItem, alpha, styled } from "@mui/material";

export const ListItemDrawer = styled(ListItem)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  color: "white",
  "&:hover": {
    backgroundColor: "#313f45",
    cursor: "pointer",
  },
});

export const StyledLinkTextLogo = styled("span")({
  "&:hover": {
    color: "gold",
    cursor: "pointer",
  },
});

export const StyledLink = styled("span")({
  padding: "20px",
  "&:hover": {
    color: "gold",
    cursor: "pointer",
  },
});

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
