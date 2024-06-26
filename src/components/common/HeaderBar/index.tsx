import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { StyledLinkTextLogo } from "./style";
import { Grid } from "@mui/material";

interface Props {
  window?: () => Window;
}

export default function DrawerAppBar(props: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ bgcolor: "#232F34" }}>
          <Grid item xs={12} container spacing={30}>
            <Grid item xs={6}>
              <Typography variant="h6" component="div">
                <Link href={"/"}>
                  <StyledLinkTextLogo>Min Nya Nay's </StyledLinkTextLogo>
                  <span style={{ color: "gold" }}>Blog</span>
                </Link>
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link href={"/"}>
                  <StyledLinkTextLogo>Admin Portal</StyledLinkTextLogo>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
