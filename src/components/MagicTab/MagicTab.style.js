import styled from 'styled-components';

const Styles = styled.div`
  height: 100%;
  width: 100%;

  // <main>

  .magic-tab-main-left {
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 100%;
  }

  .magic-tab-main-top {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
  }

  .magic-tab-main-right {
    display: flex;
    flex-flow: row-reverse;
    width: 100%;
    height: 100%;
  }

  .magic-tab-main-bottom {
    display: flex;
    flex-flow: column-reverse;
    width: 100%;
    height: 100%;
  }

  // </main>

  // <boxes>

  .magic-tab-side-content-box {
    flex: 0 1 auto;
    overflow: ${(props) => props.theme.sideContentOverflow};
    background-color: ${(props) => props.theme.sideContentBackgroundColor};
    color: ${(props) => props.theme.sideContentForegroundColor};
    padding: ${(props) => props.theme.sideContentPadding};
  }

  .magic-tab-side-content-box-left {
    width: ${(props) => props.theme.sideContentSize};
    min-width: ${(props) => props.theme.sideContentSize};
  }

  .magic-tab-side-content-box-top {
    height: ${(props) => props.theme.sideContentSize};
    min-height: ${(props) => props.theme.sideContentSize};
  }

  .magic-tab-side-content-box-right {
    width: ${(props) => props.theme.sideContentSize};
    min-width: ${(props) => props.theme.sideContentSize};
  }

  .magic-tab-side-content-box-bottom {
    height: ${(props) => props.theme.sideContentSize};
    min-height: ${(props) => props.theme.sideContentSize};
  }

  .magic-tab-control-button-box {
    z-index: 1;
    flex: 0 1 auto;
    background-color: ${(props) => props.theme.mainContentBackgroundColor};
  }

  .magic-tab-control-button-box-left {
    width: 30px;
  }

  .magic-tab-control-button-box-top {
    height: 30px;
  }

  .magic-tab-control-button-box-right {
    width: 30px;
  }

  .magic-tab-control-button-box-bottom {
    height: 30px;
  }

  .magic-tab-main-content-spacer-box {
    flex: 0 1 auto;
    background-color: ${(props) => props.theme.mainContentBackgroundColor};
  }

  .magic-tab-side-content-spacer-box {
    flex: 0 1 auto;
    background-color: ${(props) => props.theme.sideContentBackgroundColor};
  }

  .magic-tab-spacer-box-left {
    width: 4px;
    min-width: 4px;
  }

  .magic-tab-spacer-box-top {
    height: 4px;
    min-height: 4px;
  }

  .magic-tab-spacer-box-right {
    width: 4px;
    min-width: 4px;
  }

  .magic-tab-spacer-box-bottom {
    height: 4px;
    min-height: 4px;
  }

  .magic-tab-main-content-box {
    flex: 1 1 auto;
    overflow: ${(props) => props.theme.mainContentOverflow};
    background-color: ${(props) => props.theme.mainContentBackgroundColor};
    color: ${(props) => props.theme.mainContentForegroundColor};
    padding: ${(props) => props.theme.mainContentPadding};
  }

  // <boxes>

  // <control button>

  .magic-tab-divider {
  }

  .magic-tab-divider-left {
    /* width: 29px; */
    height: 100%;
    border-left: solid ${(props) => props.theme.borderColor} 1px;
  }

  .magic-tab-divider-top {
    width: 100%;
    /* height: 29px; */
    border-top: solid ${(props) => props.theme.borderColor} 1px;
  }

  .magic-tab-divider-right {
    /* width: 29px; */
    height: 100%;
    border-right: solid ${(props) => props.theme.borderColor} 1px;
  }

  .magic-tab-divider-bottom {
    width: 100%;
    /* height: 29px; */
    border-bottom: solid ${(props) => props.theme.borderColor} 1px;
  }

  .magic-tab-control-button {
    display: inline-flex;
    line-height: 1.6em;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.sideContentBackgroundColor};
    overflow: hidden;
  }

  .magic-tab-control-button-label {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    font-weight: 600;
    align-self: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .magic-tab-control-button-left {
    writing-mode: vertical-rl;
    width: 28px;
    margin-top: ${(props) => props.theme.offset};
    margin-left: -1px;
    padding: 16px 0;
    color: ${(props) => props.theme.sideContentForegroundColor};
    border-bottom: solid ${(props) => props.theme.borderColor} 1px;
    border-right: solid ${(props) => props.theme.borderColor} 1px;
    border-top: solid ${(props) => props.theme.borderColor} 1px;
    border-left: solid ${(props) => props.theme.sideContentBackgroundColor} 1px;
    border-radius: 0 5px 5px 0;
  }

  .magic-tab-control-button-top {
    height: 28px;
    margin-left: ${(props) => props.theme.offset};
    margin-top: -1px;
    padding: 0 16px;
    color: ${(props) => props.theme.sideContentForegroundColor};
    border-bottom: solid ${(props) => props.theme.borderColor} 1px;
    border-right: solid ${(props) => props.theme.borderColor} 1px;
    border-left: solid ${(props) => props.theme.borderColor} 1px;
    border-top: solid ${(props) => props.theme.sideContentBackgroundColor} 1px;
    border-radius: 0 0 5px 5px;
  }

  .magic-tab-control-button-right {
    writing-mode: vertical-rl;
    width: 28px;
    margin-top: ${(props) => props.theme.offset};
    margin-right: -1px;
    transform: scale(-1);
    padding: 16px 0;
    color: ${(props) => props.theme.sideContentForegroundColor};
    border-bottom: solid ${(props) => props.theme.borderColor} 1px;
    border-right: solid ${(props) => props.theme.borderColor} 1px;
    border-top: solid ${(props) => props.theme.borderColor} 1px;
    border-left: solid ${(props) => props.theme.sideContentBackgroundColor} 1px;
    border-radius: 0 5px 5px 0;
  }

  .magic-tab-control-button-bottom {
    height: 28px;
    margin-left: ${(props) => props.theme.offset};
    margin-bottom: -1px;
    padding: 0 16px;
    color: ${(props) => props.theme.sideContentForegroundColor};
    border-top: solid ${(props) => props.theme.borderColor} 1px;
    border-right: solid ${(props) => props.theme.borderColor} 1px;
    border-left: solid ${(props) => props.theme.borderColor} 1px;
    border-bottom: solid ${(props) => props.theme.sideContentBackgroundColor} 1px;
    border-radius: 5px 5px 0 0;
    font-size: 12px;
    font-weight: 600;
  }

  // </control button>

  // <animations>

  .magic-tab-anim-expanded {
    animation-name: magic-tab-anim-expanded-frames;
    animation-duration: ${(props) => props.theme.anim1DurationMs}ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes magic-tab-anim-expanded-frames {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .magic-tab-anim-collapsed {
    animation-name: magic-tab-anim-collapsed-frames;
    animation-duration: ${(props) => props.theme.anim2DurationMs}ms;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes magic-tab-anim-collapsed-frames {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  // </animations>

  /* @keyframes blink-frames-1 {
    50% {
      opacity: 0.4;
    }
  }

  .pop-1 {
    opacity: 1;
    animation-name: pop-anim-1;
    animation-duration: 0.6s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-fill-mode: backwards;
  } */
`;

export default Styles;
