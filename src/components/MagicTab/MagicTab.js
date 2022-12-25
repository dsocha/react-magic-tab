import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Style from './MagicTab.style';

const MagicTab = ({ onExpanded, defaultExpanded, label, position, offset, sideContentSize, sideContentOverflow, sideContentBackgroundColor, sideContentForegroundColor, sideContentPadding, mainContentOverflow, mainContentBackgroundColor, mainContentForegroundColor, mainContentPadding, sideContent, mainContent, borderColor }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [hidden, setHidden] = useState(!defaultExpanded);
  const [expandedClass, setExpandedClass] = useState(null);

  //#region "Theme"

  const theme = {
    sideContentBackgroundColor,
    sideContentForegroundColor,
    mainContentBackgroundColor,
    mainContentForegroundColor,
    borderColor,
    position,
    offset,
    sideContentSize,
    sideContentOverflow,
    mainContentOverflow,
    sideContentPadding,
    mainContentPadding,
    anim1DurationMs: 600,
    anim2DurationMs: 150,
  };

  //#region

  useEffect(() => {
    handleOnExpanded();
  }, [expanded]);

  const handleOnExpanded = async () => {
    if (expanded) setHidden(false);
    setExpandedClass(expanded ? 'magic-tab-anim-expanded' : 'magic-tab-anim-collapsed');
    if (!expanded) {
      await sleepMs(theme.anim2DurationMs);
      setHidden(true);
    }
    if (onExpanded) onExpanded({ expanded });
  };

  const toggle = () => {
    if (expanded === hidden) return;
    setExpanded(!expanded);
  };

  //#region "Misc"

  const areParamsInvalid = () => {
    if (!['left', 'top', 'right', 'bottom'].includes(position)) return '[position] invalid value';
  };

  const sleepMs = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  //#endregion

  //#region "UI elements"

  const ControlButton = (
    <div className={`magic-tab-divider magic-tab-divider-${position}`}>
      <div
        className={`magic-tab-control-button magic-tab-control-button-${position}`}
        onClick={() => {
          toggle();
        }}
      >
        <div className='magic-tab-control-button-label'>{label}</div>
      </div>
    </div>
  );

  const SideContentBox = (
    <div className={`magic-tab-side-content-box magic-tab-side-content-box-${position}`}>
      <div className={expandedClass}>{sideContent}</div>
    </div>
  );

  const ControlButtonBox = <div className={`magic-tab-control-button-box magic-tab-control-button-box-${position}`}>{ControlButton}</div>;

  const MainContentBox = <div className='magic-tab-main-content-box'>{mainContent}</div>;

  const MainContentSpacerBox = <div className={`magic-tab-main-content-spacer-box magic-tab-spacer-box-${position}`} />;

  const SideContentSpacerBox = <div className={`magic-tab-side-content-spacer-box magic-tab-spacer-box-${position}`} />;

  //#endregion

  //#region "Rendering"

  const invalidParams = areParamsInvalid();
  if (invalidParams) return <Style>{invalidParams}</Style>;

  return (
    <Style theme={theme}>
      <div className={`magic-tab-main-${position}`}>
        {!hidden && (
          <Fragment>
            {SideContentBox}
            {SideContentSpacerBox}
          </Fragment>
        )}
        {ControlButtonBox}
        {MainContentSpacerBox}
        {MainContentBox}
      </div>
    </Style>
  );
};

MagicTab.propTypes = {
  /**
   * Set true if you want the tab to be expanded by default
   */
  defaultExpanded: PropTypes.bool,
  /**
   * The text you want to display on the tab
   */
  label: PropTypes.string,
  /**
   * Determines where the tab have to be displayed: top, right, bottom, left
   */
  position: PropTypes.string,
  /**
   * Set this property if you want to move the tab a little bit, i.e: '50px'
   */
  offset: PropTypes.string,
  /**
   * Provide a content for the side panel.
   */
  sideContent: PropTypes.any,
  /**
   * Determines a size of expaned side content, i.e: '140px'
   */
  sideContentSize: PropTypes.string,
  /**
   * You can decide what to do if the side content is to large: auto, hidden
   */
  sideContentOverflow: PropTypes.string,
  /**
   * The background color of the side content
   */
  sideContentBackgroundColor: PropTypes.string,
  /**
   * The foreground color of the side content
   */
  sideContentForegroundColor: PropTypes.string,
  /**
   * Paddings of the side content
   */
  sideContentPadding: PropTypes.string,
  /**
   * Provide a content for the main panel.
   */
  mainContent: PropTypes.any,
  /**
   * You can decide what to do if the main content is to large: auto, hidden
   */
  mainContentOverflow: PropTypes.string,
  /**
   * The background color of the main content
   */
  mainContentBackgroundColor: PropTypes.string,
  /**
   * The foreground color of the main content
   */
  mainContentForegroundColor: PropTypes.string,
  /**
   * Paddings of the main content
   */
  mainContentPadding: PropTypes.string,
  /**
   * The color of the border
   */
  borderColor: PropTypes.string,
  /**
   * Need to handle an event when the side content is being expanded or collapsed?
   */
  onExpanded: PropTypes.func,
};

MagicTab.defaultProps = {
  defaultExpanded: false,
  label: 'see more',
  position: 'left',
  offset: '12px',
  sideContent: '',
  sideContentSize: '240px',
  sideContentOverflow: 'auto',
  sideContentBackgroundColor: '#eeeeee',
  sideContentForegroundColor: '#333333',
  sideContentPadding: '8px',
  mainContent: '',
  mainContentOverflow: 'auto',
  mainContentBackgroundColor: '#ffffff',
  mainContentForegroundColor: '#000000',
  mainContentPadding: '8px',
  borderColor: '#555555',
};

export default MagicTab;
