webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _components_DialogResume__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/DialogResume */ "./components/DialogResume.js");


var _jsxFileName = "/Users/alexanderclaes/lextoc/alexanderclaesnew/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _root, _buttons;

  return {
    root: (_root = {
      position: 'relative',
      zIndex: 1,
      minHeight: '100vh'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_root, theme.breakpoints.up('sm'), {
      minHeight: '100vh',
      paddingTop: '5vh'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_root, '&::before', {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      backgroundImage: 'url("/static/background.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'top center',
      filter: 'grayscale(100%)',
      opacity: 0.15
    }), _root),
    paper: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginTop: theme.spacing(12),
      paddingBottom: theme.spacing(7),
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      textAlign: 'center'
    }, theme.breakpoints.down('xs'), {
      paddingBottom: theme.spacing(4)
    }),
    name: {
      fontSize: '2.5rem'
    },
    avatar: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      transform: 'translateY(-' + theme.spacing(9) + 'px)',
      width: theme.spacing(18),
      height: theme.spacing(18),
      marginRight: 'auto',
      marginBottom: '-' + theme.spacing(5) + 'px',
      marginLeft: 'auto',
      boxShadow: theme.shadows[2]
    }, theme.breakpoints.down('xs'), {
      marginBottom: '-' + theme.spacing(6) + 'px'
    }),
    buttons: (_buttons = {
      marginTop: theme.spacing(7)
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_buttons, theme.breakpoints.down('xs'), {
      marginTop: theme.spacing(3)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_buttons, '& > *', {
      margin: theme.spacing(1)
    }), _buttons),
    icons: {
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  };
});
/**
 * Returns the index page.
 *
 * @function
 * @returns {JSX.Element} The index page.
 */

function Index() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_13___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isDialogResumeOpen = _React$useState2[0],
      setOpenDialogResume = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].modalview('/resume');
    react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].event({
      category: 'Resume',
      action: 'Clicked View Button',
      label: 'Opened Dialog Via Homepage'
    });
    setOpenDialogResume(true);
  };

  var handleMailClick = function handleMailClick() {
    react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].event({
      category: 'Contact',
      action: 'Clicked Mail Button'
    });
  };

  var handleTwitterClick = function handleTwitterClick() {
    react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].event({
      category: 'Outbound',
      action: 'Clicked Twitter Link'
    });
  };

  var handleLinkedInClick = function handleLinkedInClick() {
    react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].event({
      category: 'Outbound',
      action: 'Clicked LinkedIn Link'
    });
  };

  var handleClose = function handleClose() {
    setOpenDialogResume(false);
  };

  if (true) {
    react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].initialize('UA-86155073-2');
    react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].pageview(window.location.pathname + window.location.search);
  }

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    maxWidth: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alt: "Alexander Claes",
    src: "/static/avatar.jpg",
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gutterBottom: true,
    variant: "h1",
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Alexander Claes"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gutterBottom: true,
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Front-end engineer with a passion for web performance. I love keeping code simple and scalable. Using tools like Vim and linters to work fast yet clean. Based in Antwerp, Belgium.", ' ', __jsx("span", {
    role: "img",
    "aria-label": "waving hand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "\uD83D\uDC4B"), ' ', __jsx("span", {
    role: "img",
    "aria-label": "belgian flag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "\uD83C\uDDE7\uD83C\uDDEA"))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.buttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "large",
    color: "primary",
    title: "View resume",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "View resume"), __jsx(_components_DialogResume__WEBPACK_IMPORTED_MODULE_15__["default"], {
    handleClose: handleClose,
    open: isDialogResumeOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    size: "large",
    color: "primary",
    href: "mailto:alexander.claes10@gmail.com",
    target: "_blank",
    title: "Contact via email",
    startIcon: __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }),
    onClick: handleMailClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Get in touch"))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.icons,
    m: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "go to twitter profile",
    title: "Visit Twitter profile",
    href: "https://twitter.com/alexander_claes",
    target: "_blank",
    onClick: handleTwitterClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_12___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-label": "go to linkedin profile",
    title: "Visit LinkedIn profile",
    href: "https://www.linkedin.com/in/alexander-claes-261aa3128/",
    target: "_blank",
    onClick: handleLinkedInClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_10___default.a, {
    fontSize: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.1d9ec2922c3daf817e0e.hot-update.js.map