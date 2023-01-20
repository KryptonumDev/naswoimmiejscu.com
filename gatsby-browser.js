const React = require("react");
const GlobalLayout =
  require("./src/components/GlobalTemplate/GlobalTemplate").default;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <GlobalLayout isLayout={props.location.pathname === "/404/"} {...props}>
      {element}
    </GlobalLayout>
  );
};
