// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x2CpsrHBvuW1zdv5pEkF5Z
// Component: iSh5ehqohY

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_mount_rainier_lodging.module.css"; // plasmic-import: x2CpsrHBvuW1zdv5pEkF5Z/projectcss
import sty from "./PlasmicNavBarButtons.module.css"; // plasmic-import: iSh5ehqohY/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: RXtLxgj3os6IA/icon

export type PlasmicNavBarButtons__VariantMembers = {};
export type PlasmicNavBarButtons__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavBarButtons__VariantsArgs;
export const PlasmicNavBarButtons__VariantProps = new Array<VariantPropType>();

export type PlasmicNavBarButtons__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNavBarButtons__ArgsType;
export const PlasmicNavBarButtons__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicNavBarButtons__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultNavBarButtonsProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNavBarButtons__RenderFunc(props: {
  variants: PlasmicNavBarButtons__VariantsArgs;
  args: PlasmicNavBarButtons__ArgsType;
  overrides: PlasmicNavBarButtons__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {false ? (
        <IconIcon
          className={classNames(projectcss.all, sty.svg__cKcwd)}
          role={"img"}
        />
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__fFuvh)}>
        <div className={classNames(projectcss.all, sty.freeBox___3Gj2H)}>
          {p.renderPlasmicSlot({
            defaultContents: "About",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </div>
      {false ? (
        <IconIcon
          className={classNames(projectcss.all, sty.svg__ueHbg)}
          role={"img"}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBarButtons__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBarButtons__VariantsArgs;
    args?: PlasmicNavBarButtons__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBarButtons__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavBarButtons__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavBarButtons__ArgProps,
          internalVariantPropNames: PlasmicNavBarButtons__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBarButtons__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBarButtons";
  } else {
    func.displayName = `PlasmicNavBarButtons.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBarButtons = Object.assign(
  // Top-level PlasmicNavBarButtons renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNavBarButtons
    internalVariantProps: PlasmicNavBarButtons__VariantProps,
    internalArgProps: PlasmicNavBarButtons__ArgProps
  }
);

export default PlasmicNavBarButtons;
/* prettier-ignore-end */
