// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x2CpsrHBvuW1zdv5pEkF5Z

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: L6MfauX2Cw/codeComponent
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-swell"; // plasmic-import: tbDZqxoBkbo/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  parallaxProviderWrapperProps?: Partial<
    Omit<React.ComponentProps<typeof ParallaxProviderWrapper>, "children">
  >;
  commerceProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof CommerceProviderComponent>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    parallaxProviderWrapperProps,
    commerceProviderComponentProps
  } = props;

  return (
    <ParallaxProviderWrapper
      {...parallaxProviderWrapperProps}
      scrollAxis={
        parallaxProviderWrapperProps &&
        "scrollAxis" in parallaxProviderWrapperProps
          ? parallaxProviderWrapperProps.scrollAxis!
          : ("vertical" as const)
      }
    >
      <CommerceProviderComponent
        {...commerceProviderComponentProps}
        publicKey={
          commerceProviderComponentProps &&
          "publicKey" in commerceProviderComponentProps
            ? commerceProviderComponentProps.publicKey!
            : ("pk_P3VXz3hbJB1aXDPn7yv8kJ0G8QRavtNc" as const)
        }
        storeId={
          commerceProviderComponentProps &&
          "storeId" in commerceProviderComponentProps
            ? commerceProviderComponentProps.storeId!
            : ("mount-ranier-lodging" as const)
        }
      >
        {children}
      </CommerceProviderComponent>
    </ParallaxProviderWrapper>
  );
}
