(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"17":function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return m});var o=t(1),i=t(177),a=t(2),c=t.n(a),r=t(174),u=t(175),p=(t(59),t(58)),l=(t(61),function(){function defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(n,e,t){return e&&defineProperties(n.prototype,e),t&&defineProperties(n,t),n}}());function _possibleConstructorReturn(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}var s=[{"name":"折线图","icon":"icontubiaozhexiantu","type":"line"},{"name":"柱状图","icon":"icontubiaozhuzhuangtu","type":"bar"},{"name":"饼图","icon":"icontubiao08","type":"pie"},{"name":"散点图","icon":"iconsandiantu","type":"scatter"},{"name":"地图","icon":"iconditu","type":"map"},{"name":"k线图","icon":"iconKxiantu","type":"candlestick"},{"name":"雷达图","icon":"iconicon-test","type":"radar"},{"name":"盒须图","icon":"iconxiangxingtu","type":"boxplot"},{"name":"热力图","icon":"iconrelitu","type":"heatmap"},{"name":"关系图","icon":"iconguanxitu","type":"graph"},{"name":"路径图","icon":"iconlujingtu","type":"lines"},{"name":"树图","icon":"iconfanmi-shuxingjiegou","type":"tree"},{"name":"矩阵","icon":"iconjuzhen","type":"treemap"},{"name":"旭日图","icon":"iconxuritu","type":"sunburst"},{"name":"平行坐标系","icon":"iconpinghangzuobiao","type":"parallel"},{"name":"桑基图","icon":"iconsangjitu","type":"sankey"},{"name":"漏斗图","icon":"iconloudoutu","type":"funnel"},{"name":"仪表盘","icon":"iconyibiao","type":"gauge"},{"name":"象形柱图","icon":"iconpictorialbar","type":"pictorialBar"},{"name":"主题河流图","icon":"iconzhutiheliutu","type":"themeRiver"},{"name":"日历坐标系","icon":"iconrilizuobiaoxi","type":"calendar"},{"name":"数据集","icon":"iconshujuji","type":"dataset"},{"name":"数据区域缩放","icon":"iconquyusuofang","type":"dataZoom"},{"name":"拖拽","icon":"icontuozhuai","type":"drag"},{"name":"富文本","icon":"iconfuwenben","type":"richText"},{"name":"loading","icon":"iconloading","type":"loading"}],m=function(n){function Index(){var n,e,t;!function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=t=_possibleConstructorReturn(this,(n=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(n,[this].concat(c))),t.config={"navigationBarTitleText":"支持图表"},t.routeTo=function(n){var e=n.type,t=n.name;p.a[e]?o.a.navigateTo({"url":"/pages/chart/index?type="+e+"&name="+t}):Object(i.a)({"title":"暂无示例","icon":"none"})},_possibleConstructorReturn(t,e)}return function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(Index,o["a"].Component),l(Index,[{"key":"render","value":function render(){var n=this;return c.a.createElement(r.a,{"className":"page-container"},c.a.createElement(r.a,{"className":"menus-container"},s.filter(function(n){var e=n.type;return p.a[e]}).map(function(e){var t=e.name,o=e.icon;return c.a.createElement(r.a,{"key":t,"className":"menus-container__item","onClick":n.routeTo.bind(n,e)},c.a.createElement(r.a,{"className":"menus-container__item__icon"},c.a.createElement(r.a,{"className":" iconfont "+o})),c.a.createElement(u.a,{"className":"menus-container__item__name"},t))})))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),Index}()},"59":function(n,e,t){},"61":function(n,e,t){}}]);