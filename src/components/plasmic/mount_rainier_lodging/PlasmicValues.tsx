// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x2CpsrHBvuW1zdv5pEkF5Z
// Component: cGx5Wjz36tS

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
import sty from "./PlasmicValues.module.css"; // plasmic-import: cGx5Wjz36tS/css

import image10EbRmFxzf from "./images/image10.png"; // plasmic-import: _EbRmFxzf/picture
import image13DxCorkRMq from "./images/image13.jpeg"; // plasmic-import: DxCorkRMq/picture
import image14AP9Iaewm4 from "./images/image14.jpeg"; // plasmic-import: aP9Iaewm4/picture
import image15VGvnaytVe from "./images/image15.png"; // plasmic-import: VGvnaytVe/picture

export type PlasmicValues__VariantMembers = {};
export type PlasmicValues__VariantsArgs = {};
type VariantPropType = keyof PlasmicValues__VariantsArgs;
export const PlasmicValues__VariantProps = new Array<VariantPropType>();

export type PlasmicValues__ArgsType = {};
type ArgPropType = keyof PlasmicValues__ArgsType;
export const PlasmicValues__ArgProps = new Array<ArgPropType>();

export type PlasmicValues__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultValuesProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicValues__RenderFunc(props: {
  variants: PlasmicValues__VariantsArgs;
  args: PlasmicValues__ArgsType;
  overrides: PlasmicValues__OverridesType;
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
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns__dldl8)}
          >
            <div className={classNames(projectcss.all, sty.column__cHoEh)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__kkFnA)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: image10EbRmFxzf,
                  fullWidth: 1400,
                  fullHeight: 933,
                  aspectRatio: undefined
                }}
              />

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__w6FEj
                )}
                href={`/acitvities`}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2___4Uby
                      )}
                    >
                      {"Wellness Center"}
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </a>
            </div>
            <div className={classNames(projectcss.all, sty.column__erqjK)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__do6ZM)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: image13DxCorkRMq,
                  fullWidth: 2400,
                  fullHeight: 1793,
                  aspectRatio: undefined
                }}
              />

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__hRgK
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__xS4Iy
                      )}
                    >
                      {"Meeting and Event Space"}
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </a>
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns__rIsKk)}
          >
            <div className={classNames(projectcss.all, sty.column__y6Aze)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__l0IMz)}
                displayHeight={"100%" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: image14AP9Iaewm4,
                  fullWidth: 1024,
                  fullHeight: 652,
                  aspectRatio: undefined
                }}
              />

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___83Zos
                )}
                href={`/acitvities`}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__xqxiS
                      )}
                    >
                      {"On-Site Dining"}
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </a>
            </div>
            <div className={classNames(projectcss.all, sty.column__qQNlJ)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__txCnE)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: image15VGvnaytVe,
                  fullWidth: 747,
                  fullHeight: 560,
                  aspectRatio: undefined
                }}
              />

              <a
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__eGrv
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2___7HfKy
                      )}
                    >
                      {"Meeting and Event Space"}
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </a>
            </div>
          </p.Stack>
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValues__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValues__VariantsArgs;
    args?: PlasmicValues__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicValues__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicValues__ArgsType,
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
          internalArgPropNames: PlasmicValues__ArgProps,
          internalVariantPropNames: PlasmicValues__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValues__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValues";
  } else {
    func.displayName = `PlasmicValues.${nodeName}`;
  }
  return func;
}

export const PlasmicValues = Object.assign(
  // Top-level PlasmicValues renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicValues
    internalVariantProps: PlasmicValues__VariantProps,
    internalArgProps: PlasmicValues__ArgProps
  }
);

export default PlasmicValues;
/* prettier-ignore-end */
