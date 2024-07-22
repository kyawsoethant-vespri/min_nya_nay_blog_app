"use client";
import Animation from "@/components/common/utils/Animation";
import FormControl from "@/components/common/utils/FormHelper/FormControl";
import { Box, Grid } from "@mui/material";
import adminLogin from "../../../public/animation/AdminLogin.json";
import React from "react";
import { useForm } from "react-hook-form";
import CommonContainedButton from "@/components/common/utils/Button/CommonContainedButton";

const Register = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log({ data });
    // if (data) {
    //   router.push("/dashboard");
    // }
  };
  return (
    <Box>
      <Grid container direction={"row"} item xs={12} marginTop={29}>
        <Grid item xs={6}>
          <Animation animationData={adminLogin} width="100%" />
        </Grid>
        <Grid item xs={6} paddingLeft={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
              <Grid item xs={8}>
                <FormControl
                  name="email"
                  type="text"
                  required
                  control={control}
                  label="Your email"
                />
              </Grid>

              <Grid item xs={8}>
                <FormControl
                  name="password"
                  type="password"
                  required
                  control={control}
                  label="Password"
                />
              </Grid>

              <Grid item xs={8}>
                <FormControl
                  name="confirmPassword"
                  type="password"
                  required
                  control={control}
                  label="Confirm password"
                />
              </Grid>

              <Grid item xs={8}>
                <CommonContainedButton
                  btnText="Register"
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
  );
};

export default Register;
