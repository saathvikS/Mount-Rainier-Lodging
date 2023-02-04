// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x2CpsrHBvuW1zdv5pEkF5Z
// Component: 8y0EWuFHRBh
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import NavBar from "../../NavBar"; // plasmic-import: 1afyPt5Gh0q/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import FooterTop from "../../FooterTop"; // plasmic-import: GuV31ro_WY/component
import Footer from "../../Footer"; // plasmic-import: IDlLfPVadLh/component
import FooterBottom from "../../FooterBottom"; // plasmic-import: rDEJujvel4T/component

import { useScreenVariants as useScreenVariantsjNh4R65QhDehJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jNH4r65QhDehJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_mount_rainier_lodging.module.css"; // plasmic-import: x2CpsrHBvuW1zdv5pEkF5Z/projectcss
import sty from "./PlasmicActivities.module.css"; // plasmic-import: 8y0EWuFHRBh/css

import mjTangonanOe6QLhRHhhsUnsplashjpgVemFsLYeBbSm from "./images/mjTangonanOe6QLhRHhhsUnsplashjpg.jpeg"; // plasmic-import: vemFS-lYeBbSm/picture
import coconut1JpgOmLgcR2KgB0Ci from "./images/coconut1Jpg.jpeg"; // plasmic-import: OmLgcR2KgB0Ci/picture

export type PlasmicActivities__VariantMembers = {};
export type PlasmicActivities__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivities__VariantsArgs;
export const PlasmicActivities__VariantProps = new Array<VariantPropType>();

export type PlasmicActivities__ArgsType = {};
type ArgPropType = keyof PlasmicActivities__ArgsType;
export const PlasmicActivities__ArgProps = new Array<ArgPropType>();

export type PlasmicActivities__OverridesType = {
  root?: p.Flex<"div">;
  headerMainSection?: p.Flex<"div">;
  container?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  h1?: p.Flex<"h1">;
  section1?: p.Flex<"div">;
  rowContainer8?: p.Flex<"div">;
  text?: p.Flex<"div">;
  embedHtml?: p.Flex<typeof Embed>;
  footerTop?: p.Flex<typeof FooterTop>;
  footer?: p.Flex<typeof Footer>;
  footerBottom?: p.Flex<typeof FooterBottom>;
};

export interface DefaultActivitiesProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicActivities__RenderFunc(props: {
  variants: PlasmicActivities__VariantsArgs;
  args: PlasmicActivities__ArgsType;
  overrides: PlasmicActivities__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjNh4R65QhDehJ()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
            data-plasmic-name={"headerMainSection"}
            data-plasmic-override={overrides.headerMainSection}
            className={classNames(projectcss.all, sty.headerMainSection)}
          >
            <div
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              className={classNames(projectcss.all, sty.container)}
            >
              <NavBar
                data-plasmic-name={"navBar"}
                data-plasmic-override={overrides.navBar}
                className={classNames("__wab_instance", sty.navBar)}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__npwMh)}
              >
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__dl0Xh)}
                  duration={1500 as const}
                  triggerOnce={false}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Activities."}
                  </h1>
                </Reveal>
              </p.Stack>
            </div>
          </div>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__gYj8C)}>
              <div
                data-plasmic-name={"section1"}
                data-plasmic-override={overrides.section1}
                className={classNames(projectcss.all, sty.section1)}
              >
                <div className={classNames(projectcss.all, sty.columns__b1W3V)}>
                  <div
                    className={classNames(projectcss.all, sty.column___6EabX)}
                  >
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__lqFbY
                      )}
                      duration={2000 as const}
                      triggerOnce={false}
                    >
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"rowContainer8"}
                        data-plasmic-override={overrides.rowContainer8}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.rowContainer8
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2___4NqaO
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Explore what Mount Ranier has to offer."
                            : "Explore what Mount Rainier has to offer."}
                        </h2>

                        <div
                          data-plasmic-name={"text"}
                          data-plasmic-override={overrides.text}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text
                          )}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Mount Rainier is surrounded with beautiful peaks, trails, and much more. Click on each pin to get directions or learn more about it."
                            : "Mount Rainier is surrounded with beautiful peaks, trails, and much more. Click on each pin to get directions or learn more about it."}
                        </div>
                      </p.Stack>
                    </Reveal>
                  </div>
                </div>
              </div>

              <Reveal
                className={classNames("__wab_instance", sty.reveal__rm77I)}
                duration={3000 as const}
                triggerOnce={false}
              >
                <Embed
                  data-plasmic-name={"embedHtml"}
                  data-plasmic-override={overrides.embedHtml}
                  className={classNames("__wab_instance", sty.embedHtml)}
                  code={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? ('<iframe src="https://www.google.com/maps/d/embed?mid=1UQg1ZbkHPmFcp0mHLIoG3WnRZYe4ExQ&ehbc=2E312F" width="400" height="489"></iframe>' as const)
                      : ('<iframe src="https://www.google.com/maps/d/embed?mid=1UQg1ZbkHPmFcp0mHLIoG3WnRZYe4ExQ&ehbc=2E312F" width="1519" height="489"></iframe>' as const)
                  }
                />
              </Reveal>
            </div>
          ) : null}

          <Reveal
            className={classNames("__wab_instance", sty.reveal__pyB2D)}
            duration={2000 as const}
            triggerOnce={false}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__hKz6G)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__e54Ro)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.columns__ptx5M)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__krwla
                        )}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img___7OLh3)}
                          displayHeight={"434px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? ("none" as const)
                              : ("100%" as const)
                          }
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={{
                            src: mjTangonanOe6QLhRHhhsUnsplashjpgVemFsLYeBbSm,
                            fullWidth: 2734,
                            fullHeight: 4096,
                            aspectRatio: undefined
                          }}
                        />

                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link__bNdze
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
                                  sty.h2__zzLKo
                                )}
                              >
                                {"Discover new adventures."}
                              </h2>
                            }
                            <React.Fragment>{""}</React.Fragment>
                          </React.Fragment>
                        </a>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__hstQk
                        )}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__xVswC)}
                          displayHeight={"434px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? ("none" as const)
                              : ("100%" as const)
                          }
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={{
                            src: coconut1JpgOmLgcR2KgB0Ci,
                            fullWidth: 800,
                            fullHeight: 1200,
                            aspectRatio: undefined
                          }}
                        />

                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link__guHLg
                          )}
                          href={`/amenities`}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <h2
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h2,
                                  projectcss.__wab_text,
                                  sty.h2__qkuRz
                                )}
                              >
                                {"Luxurious Amenities."}
                              </h2>
                            }
                            <React.Fragment>{""}</React.Fragment>
                          </React.Fragment>
                        </a>
                      </div>
                    </p.Stack>
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
          </Reveal>

          <Reveal
            className={classNames("__wab_instance", sty.reveal__hrZr5)}
            duration={2000 as const}
            triggerOnce={false}
          >
            <FooterTop
              data-plasmic-name={"footerTop"}
              data-plasmic-override={overrides.footerTop}
              className={classNames("__wab_instance", sty.footerTop)}
            />
          </Reveal>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          ) : null}

          <FooterBottom
            data-plasmic-name={"footerBottom"}
            data-plasmic-override={overrides.footerBottom}
            className={classNames("__wab_instance", sty.footerBottom)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerMainSection",
    "container",
    "navBar",
    "h1",
    "section1",
    "rowContainer8",
    "text",
    "embedHtml",
    "footerTop",
    "footer",
    "footerBottom"
  ],
  headerMainSection: ["headerMainSection", "container", "navBar", "h1"],
  container: ["container", "navBar", "h1"],
  navBar: ["navBar"],
  h1: ["h1"],
  section1: ["section1", "rowContainer8", "text"],
  rowContainer8: ["rowContainer8", "text"],
  text: ["text"],
  embedHtml: ["embedHtml"],
  footerTop: ["footerTop"],
  footer: ["footer"],
  footerBottom: ["footerBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerMainSection: "div";
  container: "div";
  navBar: typeof NavBar;
  h1: "h1";
  section1: "div";
  rowContainer8: "div";
  text: "div";
  embedHtml: typeof Embed;
  footerTop: typeof FooterTop;
  footer: typeof Footer;
  footerBottom: typeof FooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivities__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivities__VariantsArgs;
    args?: PlasmicActivities__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivities__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicActivities__ArgsType,
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
          internalArgPropNames: PlasmicActivities__ArgProps,
          internalVariantPropNames: PlasmicActivities__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicActivities__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicActivities";
  } else {
    func.displayName = `PlasmicActivities.${nodeName}`;
  }
  return func;
}

export const PlasmicActivities = Object.assign(
  // Top-level PlasmicActivities renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerMainSection: makeNodeComponent("headerMainSection"),
    container: makeNodeComponent("container"),
    navBar: makeNodeComponent("navBar"),
    h1: makeNodeComponent("h1"),
    section1: makeNodeComponent("section1"),
    rowContainer8: makeNodeComponent("rowContainer8"),
    text: makeNodeComponent("text"),
    embedHtml: makeNodeComponent("embedHtml"),
    footerTop: makeNodeComponent("footerTop"),
    footer: makeNodeComponent("footer"),
    footerBottom: makeNodeComponent("footerBottom"),

    // Metadata about props expected for PlasmicActivities
    internalVariantProps: PlasmicActivities__VariantProps,
    internalArgProps: PlasmicActivities__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Activities",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicActivities;
/* prettier-ignore-end */
