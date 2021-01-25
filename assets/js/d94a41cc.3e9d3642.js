(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(94)),i={id:"config-file",title:"Configuration File"},c={unversionedId:"configuration/config-file",id:"configuration/config-file",isDocsHomePage:!1,title:"Configuration File",description:"The configuration file is still under development and is subject to changes",source:"@site/docs/configuration/config-file.md",slug:"/configuration/config-file",permalink:"/docs/configuration/config-file",editUrl:"https://github.com/aevea/commitsar/edit/master/www/docs/configuration/config-file.md",version:"current",sidebar:"someSidebar",previous:{title:"Flags",permalink:"/docs/configuration/flags"},next:{title:"Get started",permalink:"/docs/contributing/get_started"}},b=[{value:"Global configuration",id:"global-configuration",children:[]},{value:"Commit style settings",id:"commit-style-settings",children:[]},{value:"Pull Request style settings",id:"pull-request-style-settings",children:[]}],o={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"The configuration file is still under development and is subject to changes")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Name:")," ",Object(l.b)("inlineCode",{parentName:"p"},".commitsar.yml")),Object(l.b)("p",null,"In order to make configuration easier than through flags we provide configuration file support. Most up to date examples can be found in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aevea/commitsar/tree/master/config/testdata"}),"https://github.com/aevea/commitsar/tree/master/config/testdata"),"."),Object(l.b)("p",null,"By default the current working directory is used to scan for the file. However this can be overriden by specifying ",Object(l.b)("inlineCode",{parentName:"p"},"COMMITSAR_CONFIG_PATH")," environment variable. Accepts relative or absolute paths."),Object(l.b)("p",null,"Example: ",Object(l.b)("inlineCode",{parentName:"p"},"COMMITSAR_CONFIG_PATH=./testdata")," will scan for ",Object(l.b)("inlineCode",{parentName:"p"},".commitsar.yaml")," in the ",Object(l.b)("inlineCode",{parentName:"p"},"testdata")," folder."),Object(l.b)("h2",{id:"global-configuration"},"Global configuration"),Object(l.b)("p",null,"These are settings that get used across all runs of commitsar."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"version: 1\nverbose: false\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Available from"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"version"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Currently not in use. Might be used in the future in case of incompatible upgrades."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.14.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"verbose"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Turns on debug logging of commitsar. Useful if you want to submit an issue."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.14.0")))),Object(l.b)("h2",{id:"commit-style-settings"},"Commit style settings"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"commits:\n  disabled: false\n  strict: true\n  limit: 0\n  all: false\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Available from"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"disabled"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disables checking commmits. Useful if you want to use commitsar only for PR titles."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.14.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strict"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enforces strict category enforcement."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.14.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"limit"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Makes commitsar check only the last x commits. Useful if you want to run commitsar on master."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.14.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"all"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Makes commitsar check all the commits in history. ",Object(l.b)("strong",{parentName:"td"},"Overrides the ",Object(l.b)("inlineCode",{parentName:"strong"},"limit")," flag")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.14.0")))),Object(l.b)("h2",{id:"pull-request-style-settings"},"Pull Request style settings"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Pull Request pipeline is still in early stages. Please report any bugs")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"pull_request:\n  jira_title: true\n  jira_keys:\n    - TEST\n    - TSLA\n")),Object(l.b)("p",null,"Setting ",Object(l.b)("inlineCode",{parentName:"p"},"jira_title")," to true will enable the pipeline. By default commitsar will use a basic regex to check for any JIRA-like references. Further scoping can be done using the ",Object(l.b)("inlineCode",{parentName:"p"},"jira_keys")," setting."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Available from"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"jira_title"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Turns on the pipeline and will check for JIRA issues in the PR title."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.15.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"jira_keys"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of string project keys from JIRA."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v0.15.0")))))}s.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,O=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);