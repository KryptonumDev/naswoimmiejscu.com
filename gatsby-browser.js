const React = require("react");
const GlobalLayout = require("./src/components/GlobalTemplate/GlobalTemplate").default;

exports.wrapPageElement = ({ element, props }) => {
  return (
      <GlobalLayout {...props}>{element}</GlobalLayout>
  );
};