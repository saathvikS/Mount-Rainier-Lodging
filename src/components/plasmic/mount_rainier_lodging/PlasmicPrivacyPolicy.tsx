// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x2CpsrHBvuW1zdv5pEkF5Z
// Component: oSo094wahx2

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
import NavBar from "../../NavBar"; // plasmic-import: 1afyPt5Gh0q/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: bozP4lLlAZ/codeComponent
import FooterTop from "../../FooterTop"; // plasmic-import: GuV31ro_WY/component
import Footer from "../../Footer"; // plasmic-import: IDlLfPVadLh/component
import FooterBottom from "../../FooterBottom"; // plasmic-import: rDEJujvel4T/component

import { useScreenVariants as useScreenVariantsjNh4R65QhDehJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: jNH4r65QhDehJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_mount_rainier_lodging.module.css"; // plasmic-import: x2CpsrHBvuW1zdv5pEkF5Z/projectcss
import sty from "./PlasmicPrivacyPolicy.module.css"; // plasmic-import: oSo094wahx2/css

import mjTangonanOe6QLhRHhhsUnsplashjpgVemFsLYeBbSm from "./images/mjTangonanOe6QLhRHhhsUnsplashjpg.jpeg"; // plasmic-import: vemFS-lYeBbSm/picture
import coconut1JpgOmLgcR2KgB0Ci from "./images/coconut1Jpg.jpeg"; // plasmic-import: OmLgcR2KgB0Ci/picture

export type PlasmicPrivacyPolicy__VariantMembers = {};
export type PlasmicPrivacyPolicy__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrivacyPolicy__VariantsArgs;
export const PlasmicPrivacyPolicy__VariantProps = new Array<VariantPropType>();

export type PlasmicPrivacyPolicy__ArgsType = {};
type ArgPropType = keyof PlasmicPrivacyPolicy__ArgsType;
export const PlasmicPrivacyPolicy__ArgProps = new Array<ArgPropType>();

export type PlasmicPrivacyPolicy__OverridesType = {
  root?: p.Flex<"div">;
  headerMainSection?: p.Flex<"div">;
  container?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  h1?: p.Flex<"h1">;
  section1?: p.Flex<"div">;
  rowContainer8?: p.Flex<"div">;
  text?: p.Flex<"div">;
  footerTop?: p.Flex<typeof FooterTop>;
  footer?: p.Flex<typeof Footer>;
  footerBottom?: p.Flex<typeof FooterBottom>;
};

export interface DefaultPrivacyPolicyProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPrivacyPolicy__RenderFunc(props: {
  variants: PlasmicPrivacyPolicy__VariantsArgs;
  args: PlasmicPrivacyPolicy__ArgsType;
  overrides: PlasmicPrivacyPolicy__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsjNh4R65QhDehJ()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
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
                className={classNames(projectcss.all, sty.freeBox__cFcJo)}
              >
                <Reveal
                  className={classNames("__wab_instance", sty.reveal___5E1Se)}
                  duration={2000 as const}
                  triggerOnce={false}
                >
                  <ParallaxWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.scrollParallax__enAy9
                    )}
                    speed={5 as const}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__om0Oo
                        )}
                      >
                        {true ? (
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
                            {"Privacy Policy"}
                          </h1>
                        ) : null}
                      </div>
                    ) : null}
                  </ParallaxWrapper>
                </Reveal>
              </p.Stack>
            </div>
          </div>
          <ParallaxWrapper
            className={classNames("__wab_instance", sty.scrollParallax__t25B2)}
            speed={5 as const}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__gf9Hq)}>
                <div
                  data-plasmic-name={"section1"}
                  data-plasmic-override={overrides.section1}
                  className={classNames(projectcss.all, sty.section1)}
                >
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal__wme27)}
                    duration={2000 as const}
                    triggerOnce={false}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__cxakl)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__aVxYq
                        )}
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
                              sty.h2__ucsRw
                            )}
                          >
                            {hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "About our hotel"
                              : "Privacy Policy"}
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
                              ? "Five-star lodging with spectacular scenery, courtesy of Mt. Rainier, our lodge provides the perfect getaway for nature lovers, adventure seekers, and those looking to escape city life. Equipped with various on-site activities, a restaurant, and a wellness center, we are suited to fulfill all our residents' needs and desires."
                              : "At Mount Rainier Lodging, we respect your privacy and are committed to protecting the personal information you share with us. This privacy policy outlines the types of personal information we may collect, how we use and protect that information, and your rights regarding your personal information.\n\nInformation we collect:\nWe may collect personal information when you make a reservation, sign up for our newsletter, or contact us through our website. This may include your name, address, email address, phone number, and payment information.\n\nHow we use your information:\nWe may use your personal information to process reservations, respond to inquiries or requests, improve our services, and communicate with you about promotions or special offers.\n\nProtection of your information:\nWe take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security measures, including encryption and secure socket layer (SSL) technology, to protect your information.\n\nSharing of your information:\nWe do not share your personal information with third parties except as necessary to fulfill your reservation or as required by law.\n\nYour rights:\nYou have the right to access, modify, or delete your personal information at any time. You may also opt-out of receiving promotional emails from us by following the unsubscribe instructions in those emails.\n\nChanges to this policy:\nWe reserve the right to update or change this privacy policy at any time. Any changes will be posted on our website with the revised date.\n\nIf you have any questions or concerns about our privacy policy, please contact us below."}
                          </div>
                        </p.Stack>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            ) : null}
          </ParallaxWrapper>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___7ZzJr)}>
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__eO4Hy)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__dem9Y)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__nHfS)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__xWDq)}
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
                          sty.link__pzc20
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
                                sty.h2__zuTgg
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
                      className={classNames(projectcss.all, sty.column__pa3Km)}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__d7LkG)}
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
                          sty.link__tAwta
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
                                sty.h2__nnjEt
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
          <FooterTop
            data-plasmic-name={"footerTop"}
            data-plasmic-override={overrides.footerTop}
            className={classNames("__wab_instance", sty.footerTop)}
          />

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
        </div>
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
  footerTop: typeof FooterTop;
  footer: typeof Footer;
  footerBottom: typeof FooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrivacyPolicy__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrivacyPolicy__VariantsArgs;
    args?: PlasmicPrivacyPolicy__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrivacyPolicy__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPrivacyPolicy__ArgsType,
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
          internalArgPropNames: PlasmicPrivacyPolicy__ArgProps,
          internalVariantPropNames: PlasmicPrivacyPolicy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPrivacyPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrivacyPolicy";
  } else {
    func.displayName = `PlasmicPrivacyPolicy.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"x2CpsrHBvuW1zdv5pEkF5Z"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

export const PlasmicPrivacyPolicy = Object.assign(
  // Top-level PlasmicPrivacyPolicy renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    headerMainSection: makeNodeComponent("headerMainSection"),
    container: makeNodeComponent("container"),
    navBar: makeNodeComponent("navBar"),
    h1: makeNodeComponent("h1"),
    section1: makeNodeComponent("section1"),
    rowContainer8: makeNodeComponent("rowContainer8"),
    text: makeNodeComponent("text"),
    footerTop: makeNodeComponent("footerTop"),
    footer: makeNodeComponent("footer"),
    footerBottom: makeNodeComponent("footerBottom"),

    // Metadata about props expected for PlasmicPrivacyPolicy
    internalVariantProps: PlasmicPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicPrivacyPolicy__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPrivacyPolicy;
/* prettier-ignore-end */
