"use client";
import React from "react";
import Lottie from "lottie-react";

interface AnimationProps {
  animationData?: object;
  width?: string;
}

const Animation: React.FC<AnimationProps> = ({ animationData, width }) => {
  return <Lottie loop animationData={animationData} style={{ width }}></Lottie>;
};

export default Animation;
