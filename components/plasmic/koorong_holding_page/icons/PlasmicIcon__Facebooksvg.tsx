// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebooksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebooksvgIcon(props: FacebooksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 5a5 5 0 015-5h22a5 5 0 015 5v22a5 5 0 01-5 5H5a5 5 0 01-5-5V5zm16 3c4.4 0 8 3.6 8 8 0 4-2.9 7.4-6.9 8v-5.7H19l.4-2.3h-2.2v-1.5c0-.6.3-1.2 1.3-1.2h1v-2s-.9-.2-1.8-.2c-1.8 0-3 1.1-3 3.1V16h-2v2.3h2v5.6C10.9 23.3 8 20 8 16c0-4.4 3.6-8 8-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebooksvgIcon;
/* prettier-ignore-end */
