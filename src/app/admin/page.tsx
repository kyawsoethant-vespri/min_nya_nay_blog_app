"use client";
import FormControl from "@/components/common/utils/FormHelper/FormControl";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { BackgroundTypography } from "./style";
import CommonContainedButton from "@/components/common/utils/Button/CommonContainedButton";

const Admin = () => {
  const { control } = useForm();

  return (
    <Container maxWidth="md">
      <Box mt={20}>
        <Grid container spacing={15}>
          <Grid item xs={6}>
            <BackgroundTypography variant="h4" sx={{ boxShadow: 10 }}>
              Min Nya Nay's <span style={{ color: "gold" }}>Blog</span>
            </BackgroundTypography>
            <Typography sx={{ paddingTop: "20px", fontFamily: "cursive" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea culpa
              ab quas. Nobis facere dolorum nemo recusandae eaque delectus aut,
              laboriosam rem! Saepe distinctio dolore, harum similique id
              perferendis quidem!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <FormControl
                    name="email"
                    type="text"
                    required
                    control={control}
                    label="Your email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    name="password"
                    type="password"
                    required
                    control={control}
                    label="Your password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CommonContainedButton
                    btnText="Sign in"
                    size={"small"}
                    fullwidth
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Admin;
