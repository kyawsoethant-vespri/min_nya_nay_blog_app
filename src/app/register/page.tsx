"use client";
import Animation from "@/components/common/utils/Animation";
import FormControl from "@/components/common/utils/FormHelper/FormControl";
import { Box, Grid } from "@mui/material";
import adminLogin from "../../../public/animation/AdminLogin.json";
import success from "../../../public/animation/Success.json";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CommonContainedButton from "@/components/common/utils/Button/CommonContainedButton";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const defaultValues = {
    selectRole: "superAdmin",
  };

  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log({ data });
    if (data) {
      setSubmitted(true);

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  };
  return (
    <>
      {submitted ? (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          style={{ height: "100vh" }}
        >
          <Animation animationData={success} width="50%" />
        </Grid>
      ) : (
        <Box>
          <Grid container direction={"row"} item xs={12} marginTop={22}>
            <Grid item xs={6} paddingLeft={8}>
              <Animation animationData={adminLogin} width="100%" />
            </Grid>
            <Grid item xs={6} paddingLeft={15}>
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
                    <FormControl
                      type="select"
                      name="selectRole"
                      control={control}
                      required
                      options={[
                        { id: 1, value: "superAdmin", label: "Super Admin" },
                        { id: 2, value: "admin", label: "Admin" },
                      ]}
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
      )}
    </>
  );
};

export default Register;
