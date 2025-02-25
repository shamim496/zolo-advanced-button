/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { SelectControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";

/**
 * Internal depencencies
 */
import {
  HeaderTabs,
  ResAlignmentControl,
  ResRangeControl,
  ColorControl,
  BorderControl,
  ResDimensionsControl,
  TypographyDropdown,
  TabPanelControl,
  NormalBGControl,
  BoxShadowControl,
  LinkControl,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloIconPicker,
  ZoloPanelBody,
} from "@zoloblocks/library";

import {
  TEXT_ALIGN_OPTIONS,
  ICON_POSITIONS,
  ICON_STATUS,
} from "../../../library/src/global/constants";

import objAttributes from "./attributes";

import {
  BUTTON_ALIGNMENT,
  PRESETS,
  BUTTON_BORDER,
  BUTTON_BORDER_RADIUS,
  BUTTON_PADDING,
  BUTTON_BG,
  BUTTON_HOVER_BG_COLOR,
  BUTTON_BOX_SHADOW,
  BUTTON_HOVER_BOX_SHADOW,
  ICON_SIZE,
  ICON_TEXT_SPACING,
  ICON_BORDER,
  ICON_BORDER_RADIUS,
  ICON_BOX_SHADOW,
  ICON_HOVER_BOX_SHADOW,
  ICON_PADDING,
  PT_BORDER,
  PT_BORDER_RADIUS,
  PF_SWIDTH,
  PFV_BORDER,
  PFV_BORDER_RADIUS,
  PS_BORDER,
  PS_BORDER_RADIUS,
  PSE_BORDER,
  PSE_BRADIUS,
  PSE_BG,
  PT_BG,
  PTH_BG,
  PFTH_BG,
  ICON_ANIMATIONS,
} from "./constants";

import ExtraImage from "../../../library/src/images/singleblocks.png";
import { BUTTON_TYPOGRAPHY } from "./constants/typoPrefixConstant";
import { CardDivider } from "@wordpress/components";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    resMode,
    label,
    link,
    iconType,
    icon,
    iconPosition,
    iconColor,
    iconHoverColor,
    iconBg,
    iconHoverBg,
    iconBorderHoverColor,
    textColor,
    textHoverColor,
    borderHoverColor,
    preset,
    presetFourStyles,
    presetSixStyle,
    presetSevenStyles,
    iconAnimation,
    buttonTwoBorderColor,
    psStarColor,
  } = attributes;

  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes,
  };

  // on presets change comment
  const onPresetChange = (selected) => {
    setAttributes({ preset: selected });
  };

  // preset options
  const presetOptions = applyFilters("zolo.advancedButton.presets", PRESETS);

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/advanced-button"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody
              title={__("General", "zolo-advanced-button")}
              panelProps={props}
              firstOpen={true}
            >
              <SelectControl
                label={__("Styles", "zolo-advanced-button")}
                value={preset}
                options={applyFilters("zolo.advancedButton.presets", PRESETS)}
                onChange={(value) => onPresetChange(value)}
              />

              <ResAlignmentControl
                label={__("Alignment", "zolo-advanced-button")}
                controlName={BUTTON_ALIGNMENT}
                requiredProps={requiredProps}
                alignOptions={TEXT_ALIGN_OPTIONS}
              />
            </ZoloPanelBody>
            <ZoloPanelBody
              title={__("Content", "zolo-advanced-button")}
              panelProps={props}
            >
              {iconType !== "iconOnly" && (
                <TextControl
                  label={__("Text", "zolo-advanced-button")}
                  onChange={(value) => setAttributes({ label: value })}
                  value={label}
                  placeholder={__("label..", "zolo-advanced-button")}
                />
              )}
              <div className="zolo-flex-row-control-tab">
                <IconicBtnGroup
                  label={__("Icon", "zolo-advanced-button")}
                  value={iconType}
                  onChange={(value) =>
                    setAttributes({
                      iconType: value,
                    })
                  }
                  options={ICON_STATUS}
                />
              </div>
              <LinkControl
                label={__("URL", "zolo-advanced-button")}
                value={link}
                onChange={(value) => setAttributes({ link: value })}
              />
              {iconType !== "none" && (
                <Fragment>
                  <ZoloIconPicker
                    label={__("Select Icon", "zolo-advanced-button")}
                    value={icon}
                    onChange={(value) => {
                      setAttributes({
                        icon: value,
                      });
                    }}
                  />
                  {iconType !== "iconOnly" && (
                    <>
                      {(iconAnimation === "" ||
                        iconAnimation === null ||
                        iconAnimation === undefined ||
                        iconAnimation === "undefined" ||
                        (iconAnimation !== "" &&
                          iconAnimation !== null &&
                          iconAnimation !== undefined &&
                          iconAnimation !== "undefined" &&
                          (preset === "button-1" ||
                            preset === "button-3"))) && (
                        <>
                          <IconicBtnGroup
                            label={__("Icon Position", "zolo-advanced-button")}
                            value={iconPosition}
                            onChange={(value) =>
                              setAttributes({
                                iconPosition: value,
                              })
                            }
                            options={ICON_POSITIONS}
                          />
                        </>
                      )}
                    </>
                  )}
                </Fragment>
              )}
            </ZoloPanelBody>
            {iconType === "iconText" &&
              preset !== "button-1" &&
              preset !== "button-3" && (
                <>
                  {applyFilters(
                    "zolo.advancedButton.animationPanel",
                    <ZoloPanelBody
                      title={__("Icon Animation", "zolo-advanced-button")}
                      panelProps={props}
                      isPro={true}
                      isDisabled={true}
                    >
                      <SelectControl
                        label={__("Icon Animation", "zolo-advanced-button")}
                        value={iconAnimation}
                        options={ICON_ANIMATIONS}
                        onChange={(value) =>
                          setAttributes({ iconAnimation: value })
                        }
                      />
                    </ZoloPanelBody>
                  )}
                </>
              )}
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody
              title={__("Button", "zolo-advanced-button")}
              panelProps={props}
              firstOpen={true}
              stylePanel={true}
            >
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zolo-advanced-button")}
                      color={textColor}
                      onChange={(value) =>
                        setAttributes({
                          textColor: value,
                        })
                      }
                    />
                    <TypographyDropdown
                      label={__("Typography", "zolo-advanced-button")}
                      typoPrefixConstant={BUTTON_TYPOGRAPHY}
                      requiredProps={requiredProps}
                      max={36}
                    />
                    <CardDivider />
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={BUTTON_BG}
                      noMainBGImg={false}
                    />
                    <ResDimensionsControl
                      label={__("Padding", "zolo-advanced-button")}
                      controlName={BUTTON_PADDING}
                      requiredProps={requiredProps}
                      forBorderRadius={false}
                    />
                    <CardDivider />
                    <BorderControl
                      label={__("Border", "zolo-advanced-button")}
                      controlName={BUTTON_BORDER}
                      requiredProps={requiredProps}
                    />
                    {preset !== "button-4" && preset !== "button-6" && (
                      <BoxShadowControl
                        controlName={BUTTON_BOX_SHADOW}
                        requiredProps={requiredProps}
                      />
                    )}
                    <ResDimensionsControl
                      label={__("Border Radius", "zolo-advanced-button")}
                      controlName={BUTTON_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__("Color", "zolo-advanced-button")}
                      color={textHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          textHoverColor: value,
                        })
                      }
                    />
                    {preset !== "button-1" && (
                      <>
                        <NormalBGControl
                          requiredProps={requiredProps}
                          controlName={BUTTON_HOVER_BG_COLOR}
                          noMainBGImg={false}
                        />
                        <CardDivider />
                      </>
                    )}
                    <ColorControl
                      label={__("Border Color", "zolo-advanced-button")}
                      color={borderHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          borderHoverColor: value,
                        })
                      }
                    />
                    <BoxShadowControl
                      controlName={BUTTON_HOVER_BOX_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={true}
                    />
                  </>
                }
              />
            </ZoloPanelBody>
            {iconType !== "none" && (
              <ZoloPanelBody
                title={__("Icon", "zolo-advanced-button")}
                panelProps={props}
                stylePanel={true}
              >
                <TabPanelControl
                  normalComponents={
                    <>
                      <ColorControl
                        label={__("Color", "zolo-advanced-button")}
                        color={iconColor}
                        onChange={(value) =>
                          setAttributes({
                            iconColor: value,
                          })
                        }
                      />
                      {iconType !== "none" && (
                        <Fragment>
                          <ResRangeControl
                            label={__("Size", "zolo-advanced-button")}
                            controlName={ICON_SIZE}
                            requiredProps={requiredProps}
                            min={0}
                            max={36}
                            step={1}
                          />
                          {iconType !== "iconOnly" && (
                            <ResRangeControl
                              label={__("Gap", "zolo-advanced-button")}
                              controlName={ICON_TEXT_SPACING}
                              requiredProps={requiredProps}
                              min={0}
                              max={100}
                              step={1}
                            />
                          )}
                        </Fragment>
                      )}
                      <CardDivider />

                      <ColorControl
                        label={__("Background", "zolo-advanced-button")}
                        color={iconBg}
                        onChange={(value) =>
                          setAttributes({
                            iconBg: value,
                          })
                        }
                      />
                      <ResDimensionsControl
                        label={__("Padding", "zolo-advanced-button")}
                        controlName={ICON_PADDING}
                        requiredProps={requiredProps}
                        forBorderRadius={false}
                      />
                      <CardDivider />
                      <BorderControl
                        label={__("Border", "zolo-advanced-button")}
                        controlName={ICON_BORDER}
                        requiredProps={requiredProps}
                        hoverControl={
                          <ColorControl
                            label={__("Border Color", "zolo-advanced-button")}
                            color={iconBorderHoverColor}
                            onChange={(value) =>
                              setAttributes({
                                iconBorderHoverColor: value,
                              })
                            }
                          />
                        }
                      />
                      <BoxShadowControl
                        label={__("Box Shadow", "zolo-advanced-button")}
                        controlName={ICON_BOX_SHADOW}
                        requiredProps={requiredProps}
                      />
                      <ResDimensionsControl
                        label={__("Border Radius", "zolo-advanced-button")}
                        nBg
                        controlName={ICON_BORDER_RADIUS}
                        requiredProps={requiredProps}
                        forBorderRadius={true}
                      />
                    </>
                  }
                  hoverComponents={
                    <>
                      <ColorControl
                        label={__("Color", "zolo-advanced-button")}
                        color={iconHoverColor}
                        onChange={(value) =>
                          setAttributes({
                            iconHoverColor: value,
                          })
                        }
                      />

                      <ColorControl
                        label={__("Background", "zolo-advanced-button")}
                        color={iconHoverBg}
                        onChange={(value) =>
                          setAttributes({
                            iconHoverBg: value,
                          })
                        }
                      />
                      <BoxShadowControl
                        controlName={ICON_HOVER_BOX_SHADOW}
                        requiredProps={requiredProps}
                      />
                    </>
                  }
                />
              </ZoloPanelBody>
            )}
            {preset !== "" && preset !== "button-2" && (
              <ZoloPanelBody
                title={__("Preset Style", "zolo-advanced-button")}
                panelProps={props}
                stylePanel={true}
              >
                {preset === "button-1" && (
                  <Fragment>
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={PT_BG}
                      noMainBGImg={true}
                    />
                  </Fragment>
                )}
                {preset === "button-3" && (
                  <Fragment>
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={PFTH_BG}
                      noMainBGImg={true}
                    />
                  </Fragment>
                )}
                {preset === "button-4" && (
                  <Fragment>
                    <TabPanelControl
                      normalComponents={
                        <>
                          <ColorControl
                            label={__("Shadow Color", "zolo-advanced-button")}
                            color={
                              presetFourStyles && presetFourStyles.shadowColor
                            }
                            onChange={(value) =>
                              setAttributes({
                                presetFourStyles: {
                                  ...presetFourStyles,
                                  shadowColor: value,
                                },
                              })
                            }
                          />
                          <ResRangeControl
                            label={__("Shadow Width", "zolo-advanced-button")}
                            controlName={PF_SWIDTH}
                            requiredProps={requiredProps}
                            min={1}
                            max={100}
                          />
                        </>
                      }
                      hoverComponents={
                        <>
                          <ColorControl
                            label={__("Text Color", "zolo-advanced-button")}
                            color={
                              presetFourStyles && presetFourStyles.textColor
                            }
                            onChange={(value) =>
                              setAttributes({
                                presetFourStyles: {
                                  ...presetFourStyles,
                                  textColor: value,
                                },
                              })
                            }
                          />
                          <ColorControl
                            label={__("Text Shadow Color", "zolo-advanced-button")}
                            color={
                              presetFourStyles &&
                              presetFourStyles.textShadowColor
                            }
                            onChange={(value) =>
                              setAttributes({
                                presetFourStyles: {
                                  ...presetFourStyles,
                                  textShadowColor: value,
                                },
                              })
                            }
                          />
                          <CardDivider />
                          <ColorControl
                            label={__("Overlay Background", "zolo-advanced-button")}
                            color={
                              presetFourStyles && presetFourStyles.colorOne
                            }
                            onChange={(value) =>
                              setAttributes({
                                presetFourStyles: {
                                  ...presetFourStyles,
                                  colorOne: value,
                                },
                              })
                            }
                          />
                        </>
                      }
                    />
                  </Fragment>
                )}
                {preset === "button-5" && (
                  <Fragment>
                    <BorderControl
                      label={__("Border", "zolo-advanced-button")}
                      controlName={PFV_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__("Border Radius", "zolo-advanced-button")}
                      controlName={PFV_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </Fragment>
                )}
                {preset === "button-6" && (
                  <Fragment>
                    <ColorControl
                      label={__("Shadow Color", "zolo-advanced-button")}
                      color={presetSixStyle && presetSixStyle}
                      onChange={(value) =>
                        setAttributes({
                          presetSixStyle: value,
                        })
                      }
                    />
                  </Fragment>
                )}
                {preset === "button-7" && (
                  <Fragment>
                    <ColorControl
                      label={__("Shadow Background", "zolo-advanced-button")}
                      color={presetSevenStyles && presetSevenStyles.bgColor}
                      onChange={(value) =>
                        setAttributes({
                          presetSevenStyles: {
                            ...presetSevenStyles,
                            bgColor: value,
                          },
                        })
                      }
                    />
                    <CardDivider />
                    <BorderControl
                      label={__("Border", "zolo-advanced-button")}
                      controlName={PS_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__("Border Radius", "zolo-advanced-button")}
                      controlName={PS_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </Fragment>
                )}

                {preset == "button-8" && (
                  <Fragment>
                    <NormalBGControl
                      requiredProps={requiredProps}
                      controlName={PSE_BG}
                      noMainBGImg={true}
                    />
                    <CardDivider />
                    <BorderControl
                      label={__("Border", "zolo-advanced-button")}
                      controlName={PSE_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__("Border Radius", "zolo-advanced-button")}
                      controlName={PSE_BRADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </Fragment>
                )}

                {preset == "button-9" && (
                  <>
                    <ColorControl
                      label={__("Star Color", "zolo-advanced-button")}
                      color={psStarColor}
                      onChange={(value) =>
                        setAttributes({
                          psStarColor: value,
                        })
                      }
                    />
                  </>
                )}
              </ZoloPanelBody>
            )}
          </>
        }
        advancedTab={
          <>
            <div className="zolo-side-premium-notice-wrap">
              <img
                src={ExtraImage}
                alt="extra settings"
                width="300"
                height="700"
              />
              <div className="zolo-side-premium-notice">
                <svg
                  className="zolo-premium-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50.17,19.22c1.91-3.48,5.22-4.43,5.22-4.43l-5.21-5.29-5.21,5.29s3.31.95,5.21,4.43Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M77.56,31.04c1.42-.03,3.35-1.18,3.35-3.38s-1.98-3.27-3.46-3.43-2.49,1.5-2.49,1.5c0,0,1.93-.29,2.06,1.63.13,1.93-2.63,1.85-2.46,2.33.16.48,1.58,1.37,3,1.34Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M72.73,18.05c.91,0,1.65-.74,1.65-1.65s-.74-1.65-1.65-1.65-1.65.74-1.65,1.65.74,1.65,1.65,1.65Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M92.97,19.53c-1.12,0-2.03.91-2.03,2.03s.91,2.03,2.03,2.03,2.03-.91,2.03-2.03-.91-2.03-2.03-2.03Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <circle
                    cx="50.03"
                    cy="6.82"
                    r="2.22"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M22.79,31.04c1.42.03,2.84-.86,3-1.34.16-.48-2.6-.4-2.46-2.33s2.06-1.63,2.06-1.63c0,0-1.02-1.66-2.49-1.5s-3.46,1.23-3.46,3.43,1.93,3.35,3.35,3.38Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M27.61,18.05c.91,0,1.65-.74,1.65-1.65s-.74-1.65-1.65-1.65-1.65.74-1.65,1.65.74,1.65,1.65,1.65Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M7.04,19.14c-1.12,0-2.04.91-2.04,2.04s.91,2.04,2.04,2.04,2.04-.91,2.04-2.04-.91-2.04-2.04-2.04Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M81.35,24.63s1,1.04,1.13,2.65c.12,1.61-1.16,6.19-5.71,5.75-4.54-.44-6.35-4.98-6.27-7.15.08-2.17,1-3.7,1.77-3.94,1.45-.56,1.69-.68,1.65-1.73-.2-1.28-2.17-.56-2.81-.56-1.37-1.77-2.21-1.25-2.65-.32-.44.92,1.05,2.13,1.49,2.77-.48,2.85-6.27,7.07-10.37,7.19-4.1.12-6.51-2.93-6.97-5.55-.46-2.61,1.23-3.78,2.47-4.02,1.25-.24,2.61.52,2.93,1.45.32.92-.44,1.41-1.13,2.29,3.3.56,3.94-.96,4.26-2.09.32-1.12-.76-3.98-4.34-4.5-2.88-.42-5.65,2.61-6.62,3.82-.98-1.21-3.75-4.24-6.62-3.82-3.58.52-4.66,3.38-4.34,4.5.32,1.13.96,2.65,4.26,2.09-.68-.88-1.45-1.36-1.13-2.29.32-.92,1.69-1.69,2.93-1.45,1.25.24,2.93,1.41,2.47,4.02-.46,2.61-2.87,5.67-6.97,5.55-4.1-.12-9.89-4.34-10.37-7.19.44-.64,1.93-1.85,1.49-2.77-.44-.92-1.29-1.45-2.65.32-.64,0-2.61-.72-2.81.56-.04,1.05.2,1.17,1.65,1.73.76.24,1.69,1.77,1.77,3.94.08,2.17-1.73,6.71-6.27,7.15-4.54.44-5.83-4.14-5.71-5.75.12-1.61,1.13-2.65,1.13-2.65,0,0-5.26-2.66-9.92.32,1.12,1.32,5.55,2.25,10.31,14.02,8.08-5.09,19.29-8.24,31.67-8.24,11.68,0,22.3,2.8,30.25,7.39,4.63-10.96,8.87-11.87,9.96-13.16-4.66-2.98-9.93-.32-9.93-.32Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <path
                    d="M71.72,54.99l-9.06,9.06c1.34,1.5,2.93,3.91,2.93,6.06,0,2.59-1.03,4.74-2.69,6.45-1.61,1.66-3.71,2.48-6.18,2.48h-19.67l34.55-33.99s.01,0,.02,0l5.62-5.55c-7.03-3.77-16.18-6.04-26.18-6.04s-18.92,2.22-25.92,5.91v23.64s21.69-22.03,21.69-22.03c1.39-.1,2.8-.16,4.24-.16,2.06,0,4.07.12,6.02.33l-31.95,31.81v21.52l12.76-.09h18.8c6.62,0,12.11-2.04,16.69-6.13,4.47-4.09,6.73-10.76,6.73-17.1,0-6.71-3.38-12.35-8.39-16.16ZM28.95,42.39c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM35.1,40.45c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM41.96,38.97c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM49.59,38.26c-.66,0-1.2-.54-1.2-1.2s.54-1.2,1.2-1.2,1.2.54,1.2,1.2-.54,1.2-1.2,1.2ZM70.23,39.11c.66,0,1.2.54,1.2,1.2s-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2.54-1.2,1.2-1.2ZM64.09,37.33c.66,0,1.2.54,1.2,1.2s-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2.54-1.2,1.2-1.2ZM56.02,37.37c0-.66.54-1.2,1.2-1.2s1.2.54,1.2,1.2-.54,1.2-1.2,1.2-1.2-.54-1.2-1.2Z"
                    style={{ fill: "#d59f30" }}
                  />
                  <rect width={100} height={100} style={{ fill: "none" }} />
                </svg>

                <p>Get zolo-advanced-button for advanced control and extra features.</p>
                <a
                  href="https://wordpress.org/plugins/zolo-advanced-button/"
                  target="_blank"
                >
                  Go zolo-advanced-button
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
