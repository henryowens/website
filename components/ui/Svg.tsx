"use client";

import { randomUUID } from "crypto";
import { FC } from "react";
import { ReactSVG } from "react-svg";
import { classes, cssRaw, style } from "typestyle";

interface SvgProps {
  src: string;
  width?: string;
  height?: number;
  className?: string;
  fill?: { default: string; hover: string };
}

const Svg: FC<SvgProps> = ({ fill, className, width, height, ...props }) => (
  <ReactSVG
    {...{
      ...props,
      className: classes(
        style({
          $nest: {
            svg: {
              fill: fill?.default || "inherit",
              width: width || "auto",
              height: height || "auto",
              $nest: {
                "&:hover": {
                  fill: fill?.hover || "inherit",
                },
              },
            },
          },
        }),
        className
      ),
    }}
  />
);

export default Svg;
