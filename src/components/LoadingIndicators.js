/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Oct 15 2020 16:11:50 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import { css } from "@emotion/core";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PulseLoader,
  PuffLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";

const loaderCSS = css`
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

function LoadingIndicators() {
  return (
    <div
      style={{
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <BarLoader css={loaderCSS} />
      <BeatLoader css={loaderCSS} />
      <BounceLoader css={loaderCSS} />
      <CircleLoader css={loaderCSS} />
      <ClimbingBoxLoader css={loaderCSS} />
      <ClipLoader css={loaderCSS} />
      <ClockLoader css={loaderCSS} />
      <DotLoader css={loaderCSS} />
      <FadeLoader css={loaderCSS} />
      <GridLoader css={loaderCSS} />
      <HashLoader css={loaderCSS} />
      <MoonLoader css={loaderCSS} />
      <PacmanLoader css={loaderCSS} />
      <PropagateLoader css={loaderCSS} />
      <PulseLoader css={loaderCSS} />
      <PuffLoader css={loaderCSS} />
      <RingLoader css={loaderCSS} />
      <RiseLoader css={loaderCSS} />
      <RotateLoader css={loaderCSS} />
      <ScaleLoader css={loaderCSS} />
      <SkewLoader css={loaderCSS} />
      <SquareLoader css={loaderCSS} />
      <SyncLoader css={loaderCSS} />
    </div>
  );
}

export default LoadingIndicators;
