webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./modules/Projects/projectList.js":
/*!*****************************************!*\
  !*** ./modules/Projects/projectList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return projectList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Blogs_blog_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Blogs/blog.css */ "./modules/Blogs/blog.css");
/* harmony import */ var _Blogs_blog_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Blogs_blog_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Footer_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Footer/footer */ "./modules/Footer/footer.js");
/* harmony import */ var _BackButton_backButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../BackButton/backButton */ "./modules/BackButton/backButton.js");
/* harmony import */ var _Loader_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Loader/loader */ "./modules/Loader/loader.js");
/* harmony import */ var _helper_projectList_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../helper/projectList.json */ "./modules/helper/projectList.json");
var _helper_projectList_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../helper/projectList.json */ "./modules/helper/projectList.json", 1);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var projectList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(projectList, _React$Component);

  function projectList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, projectList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(projectList).call(this, props));
    _this.state = {
      data: props.data
    };
    _this.genList = _this.genList.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.fetchData = _this.fetchData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(projectList, [{
    key: "getTime",
    value: function getTime(timeinSec) {
      var utcSeconds = timeinSec;
      var d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      return d.getFullYear();
    }
  }, {
    key: "constructCard",
    value: function constructCard(data, i) {
      return __jsx("div", {
        key: "card" + i,
        onClick: function onClick() {
          window.open(data.link, "_blank");
        },
        className: i == 0 ? "card first" : "card"
      }, __jsx("h2", null, react_html_parser__WEBPACK_IMPORTED_MODULE_9___default()(data.title)), __jsx("p", {
        className: "date"
      }, this.getTime(data.timestamp["_seconds"])), __jsx("p", null, react_html_parser__WEBPACK_IMPORTED_MODULE_9___default()(data.content)));
    }
  }, {
    key: "genList",
    value: function genList() {
      var ls = [];

      for (var i = 0; i < this.state.data.length; i++) {
        ls.push(this.constructCard(this.state.data[i], i));
      }

      return ls;
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var data, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("/api/projectsList"));

            case 3:
              data = _context.sent;
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(data.json());

            case 6:
              response = _context.sent;
              this.setState({
                data: response["data"]
              });
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              this.setState({
                data: _helper_projectList_json__WEBPACK_IMPORTED_MODULE_13__["data"]
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 10]]);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.data) {
        this.fetchData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.data) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_BackButton_backButton__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("div", {
          className: "wrapper"
        }, __jsx("div", {
          className: "top"
        }), __jsx("div", {
          className: "content"
        }, this.genList())), __jsx(_Footer_footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
      } else {
        return __jsx(_Loader_loader__WEBPACK_IMPORTED_MODULE_12__["default"], null);
      }
    }
  }]);

  return projectList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./modules/helper/projectList.json":
/*!*****************************************!*\
  !*** ./modules/helper/projectList.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[{\"timestamp\":{\"_seconds\":1514399400,\"_nanoseconds\":0},\"title\":\"Samyog\",\"content\":\"Samyog is a portal aimed at creating a dynamic nexus of projects and volunteers working for providing free education to underprivileged children. Many educational and other institutes in India are taking a lead in educating such children with the support of passionate volunteers. Though working for an immensely noble cause, these programs often come across tough challenges such as shortage of volunteers and difficulty in reaching out to the masses. Volunteer too, don’t even have any means to easily locate all these projects let alone getting involved in the cumbersome application process. Samyog, with its powerful features aims to counter exactly such challenges, making interaction among the involved parties both simple and meaningful.\",\"link\":\"https://github.com/ronork/Samyog/\"},{\"link\":\"https://aarithmos.github.io/\",\"title\":\"Arithmos\",\"content\":\"A website that allows user to search through algorithms, aimed at encouraging users to concentrate on the logic of the problem rather than the syntax of languages.\",\"timestamp\":{\"_seconds\":1483036200,\"_nanoseconds\":0}},{\"timestamp\":{\"_seconds\":1451586600,\"_nanoseconds\":0},\"title\":\"To-Do App\",\"content\":\"What was once the simple choice between using a notebook, legal pad, or stack of Post-it notes to manage your personal to-do list is now a mind-numbing decision between dozens of to-do apps.\\n\\nIn this project I made a web based Application using ruby on rails 4.2.6 successfully deployed it using Heroku a cloud application platform. The web-app has the following features: Plain text approach ,Great UI ,Dynamic updation\\n\\nThis project helped me to learn basics of ruby on rails and efficient use of css/scss for designing the over all layout of the app.\",\"link\":\"https://intense-waters-76388.herokuapp.com/\"},{\"content\":\"A quiz game designed in the form of a web application.It brings the enjoyable activity of quizzing and the concept of online gaming together. The game requires a player to answer a set of questions from one of the given categories of History, Geography, MELA or Science, in stipulated time. At the end of the game, the player would be awarded points based on his responses.\",\"link\":\"/quizotopia/Quiz-Home.html\",\"timestamp\":{\"_seconds\":1451413800,\"_nanoseconds\":0},\"title\":\"Quizotopia\"}]}");

/***/ })

})
//# sourceMappingURL=projects.js.954665c7fa500403f0f9.hot-update.js.map