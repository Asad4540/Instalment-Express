"use strict";function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return _typeof(key)==="symbol"?key:String(key)}function _toPrimitive(input,hint){if(_typeof(input)!=="object"||input===null)return input;var prim=input[Symbol.toPrimitive];if(prim!==undefined){var res=prim.call(input,hint||"default");if(_typeof(res)!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return(hint==="string"?String:Number)(input)}var TradingviewWidget=function(){function TradingviewWidget(settings){_classCallCheck(this,TradingviewWidget);this.element=document.querySelector(settings.element);this.height=settings.height;this.type=settings.type;this.theme=settings.theme;this.symbol=settings.symbol}_createClass(TradingviewWidget,[{key:"init",value:async function init(){this.writeWidget()}},{key:"marketOverview",value:function marketOverview(symbol,theme,height){var marketScript=document.createElement("script");marketScript.setAttribute("src","https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js");marketScript.setAttribute("async","");marketScript.innerHTML="\n        {\n            \"colorTheme\": \"".concat(theme,"\",\n            \"dateRange\": \"1D\",\n            \"showChart\": false,\n            \"locale\": \"en\",\n            \"width\": \"100%\",\n            \"height\": \"").concat(height,"\",\n            \"largeChartUrl\": \"\",\n            \"isTransparent\": true,\n            \"showSymbolLogo\": true,\n            \"showFloatingTooltip\": false,\n            \"plotLineColorGrowing\": \"rgba(41, 98, 255, 1)\",\n            \"plotLineColorFalling\": \"rgba(41, 98, 255, 1)\",\n            \"gridLineColor\": \"rgba(240, 243, 250, 0)\",\n            \"scaleFontColor\": \"rgba(120, 123, 134, 1)\",\n            \"belowLineFillColorGrowing\": \"rgba(41, 98, 255, 0.12)\",\n            \"belowLineFillColorFalling\": \"rgba(41, 98, 255, 0.12)\",\n            \"belowLineFillColorGrowingBottom\": \"rgba(41, 98, 255, 0)\",\n            \"belowLineFillColorFallingBottom\": \"rgba(41, 98, 255, 0)\",\n            \"symbolActiveColor\": \"rgba(41, 98, 255, 0.10)\",\n            \"tabs\": [\n                {\n                    \"title\": \"Instruments\",\n                    \"symbols\": ").concat(JSON.stringify(symbol),",\n                    \"originalTitle\": \"Instruments\"\n                }\n            ]\n        }");return marketScript}},{key:"symbolOverview",value:function symbolOverview(symbol,theme,height,container){var symbolScript=document.createElement("script");symbolScript.innerHTML="\n        new TradingView.MediumWidget(\n            {\n                \"symbols\": [\n                    [\n                        \"".concat(symbol,"|1Y\"\n                    ]\n                ],\n                \"chartOnly\": false,\n                \"width\": \"100%\",\n                \"height\": \"").concat(height,"\",\n                \"locale\": \"en\",\n                \"colorTheme\": \"").concat(theme,"\",\n                \"gridLineColor\": \"rgba(42, 46, 57, 0)\",\n                \"fontColor\": \"#787b86\",\n                \"isTransparent\": true,\n                \"autosize\": true,\n                \"showFloatingTooltip\": true,\n                \"scalePosition\": \"no\",\n                \"scaleMode\": \"Normal\",\n                \"fontFamily\": \"Trebuchet MS, sans-serif\",\n                \"noTimeScale\": false,\n                \"chartType\": \"area\",\n                \"lineColor\": \"#2962ff\",\n                \"bottomColor\": \"rgba(41, 98, 255, 0)\",\n                \"topColor\": \"rgba(41, 98, 255, 0.3)\",\n                \"container_id\": \"").concat(container,"\"\n            }\n        );");return symbolScript}},{key:"writeWidget",value:function writeWidget(){var _this=this;if(this.element!==null&&this.type==="market-overview"){this.element.appendChild(this.marketOverview(this.symbol,this.theme,this.height))}if(this.element!==null&&this.type==="symbol-overview"){var referenceEl=this.element;var containerId=referenceEl.getAttribute("id");var tvScript=document.createElement("script");tvScript.setAttribute("src","https://s3.tradingview.com/tv.js");referenceEl.parentElement.insertBefore(tvScript,referenceEl.nextSibling);setTimeout(function(){referenceEl.parentElement.insertBefore(_this.symbolOverview(_this.symbol,_this.theme,_this.height,containerId),referenceEl.nextSibling.nextSibling)},400)}}}]);return TradingviewWidget}();