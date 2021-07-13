import { createElement } from 'react';

var styles = {"test":"_3ybTi","img":"_3fvm5","slide":"_1zrfk"};

var CardComponent = function CardComponent(_ref) {
  var text = _ref.text,
      source = _ref.source;
  var htmlSlide = source.map(function (img, index) {
    return createElement("li", {
      key: index
    }, createElement("img", {
      src: img.src,
      alt: img.title
    }), createElement("p", null, img.title));
  });
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text, createElement("div", {
    className: styles.img
  }, createElement("img", {
    src: "https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/gai.jpg?alt=media&token=fd4ac42d-6d0f-4e4b-b76c-e1bffe5b1ec1",
    alt: ""
  })), createElement("hr", null), createElement("ul", {
    className: styles.slide
  }, htmlSlide));
};

export { CardComponent };
//# sourceMappingURL=index.modern.js.map
