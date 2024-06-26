"use client";
import FormControl from "@/components/common/utils/FormHelper/FormControl";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { BackgroundTypography } from "./style";
import CommonContainedButton from "@/components/common/utils/Button/CommonContainedButton";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log({ data });
    if (data) {
      router.push("/dashboard");
    }
  };

  return (
    <Container maxWidth="md">
      <Box mt={20}>
        <Grid container spacing={15}>
          <Grid item xs={6}>
            <BackgroundTypography variant="h4" sx={{ boxShadow: 10 }}>
              Min Nya Nay's <span style={{ color: "gold" }}>Blog</span>
            </BackgroundTypography>
            <Typography sx={{ paddingTop: "20px", fontFamily: "cursive" }}>
              Welcome to Min Nya Nay's Blog – a space where words weave stories,
              ideas ignite conversations, and the love for literature comes to
              life.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    type="submit"
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
