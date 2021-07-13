var React = require('react');

var styles = {"test":"_3ybTi","img":"_3fvm5"};

var CardComponent = function CardComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text, React.createElement("div", {
    className: styles.img
  }, React.createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/gai.jpg?alt=media&token=fd4ac42d-6d0f-4e4b-b76c-e1bffe5b1ec1",
    alt: ""
  })));
};

exports.CardComponent = CardComponent;
//# sourceMappingURL=index.js.map
