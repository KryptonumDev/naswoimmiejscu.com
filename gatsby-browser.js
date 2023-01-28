const React = require("react");
const GlobalLayout =
  require("./src/components/GlobalTemplate/GlobalTemplate").default;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <GlobalLayout props={props} isLayout={props?.data?.wpPage?.id !== 'cG9zdDo0Njg='} {...props}>
      {element}
    </GlobalLayout>
  );
};
