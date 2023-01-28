const React = require("react");
const GlobalLayout =
  require("./src/components/GlobalTemplate/GlobalTemplate").default;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <GlobalLayout isLayout={props?.data?.wpPage?.id !== 'cG9zdDo0Njg='} {...props}>
      {element}
    </GlobalLayout>
  );
};

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "pl" });
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Roboto-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Roboto-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Roboto-Black.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Roboto-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);
};
