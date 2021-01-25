(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var i=n(3),r=n(7),c=(n(0),n(94)),o={id:"github",title:"Github Actions"},a={unversionedId:"usage/github",id:"usage/github",isDocsHomePage:!1,title:"Github Actions",description:"Important prefaces",source:"@site/docs/usage/github.md",slug:"/usage/github",permalink:"/docs/usage/github",editUrl:"https://github.com/aevea/commitsar/edit/master/www/docs/usage/github.md",version:"current",sidebar:"someSidebar",previous:{title:"Docker",permalink:"/docs/usage/docker"},next:{title:"Gitlab CI",permalink:"/docs/usage/gitlab"}},u=[{value:"Important prefaces",id:"important-prefaces",children:[{value:"JIRA pipeline",id:"jira-pipeline",children:[]},{value:"actions/checkout@v2",id:"actionscheckoutv2",children:[]}]},{value:"Using the Github Action",id:"using-the-github-action",children:[]},{value:"Using Github Actions + Docker",id:"using-github-actions--docker",children:[]},{value:"Using with JIRA pipeline",id:"using-with-jira-pipeline",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"important-prefaces"},"Important prefaces"),Object(c.b)("h3",{id:"jira-pipeline"},"JIRA pipeline"),Object(c.b)("p",null,"When using ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://commitsar.tech/docs/configuration/config-file"}),"JIRA")," make sure to set ",Object(c.b)("inlineCode",{parentName:"p"},"actions/checkout@v2")," to pull from the pull_request HEAD. Github uses a single merge commit by default which is not referenced in git. This will cause commitsar JIRA check to fail as this commit will not be found by the API getting queried for PR by commit."),Object(c.b)("h3",{id:"actionscheckoutv2"},"actions/checkout@v2"),Object(c.b)("p",null,"When using ",Object(c.b)("inlineCode",{parentName:"p"},"actions/checkout@v2")," please set ",Object(c.b)("inlineCode",{parentName:"p"},"fetch_depth")," to 0. Currently commitsar needs full git objects to work correctly. This will be fixed in an upcoming release."),Object(c.b)("h2",{id:"using-the-github-action"},"Using the Github Action"),Object(c.b)("p",null,"A minimal example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"name: Linters\n\non: [pull_request]\n\njobs:\n  validate-commits:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Check out code into the Go module directory\n        uses: actions/checkout@v1\n      - name: Commitsar check\n        uses: aevea/commitsar@v0.11.0 (substitute for the current version)\n")),Object(c.b)("p",null,"This will run ",Object(c.b)("inlineCode",{parentName:"p"},"commitsar")," on every pull request and validate the commits for it."),Object(c.b)("h2",{id:"using-github-actions--docker"},"Using Github Actions + Docker"),Object(c.b)("p",null,"This is a faster method since you don't have to build the Docker image in your Github action. If you need maximum security provided by Github actions please the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"#github-action"}),"Github Action Flow"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"name: Linters\n\non: [pull_request]\n\njobs:\n  validate-commits:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Check out code into the Go module directory\n        uses: actions/checkout@v1\n      - name: Commitsar check\n        uses: docker://aevea/commitsar\n")),Object(c.b)("h2",{id:"using-with-jira-pipeline"},"Using with JIRA pipeline"),Object(c.b)("p",null,"This pipeline example uses the checkout at PR HEAD. ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/actions/checkout#Checkout-pull-request-HEAD-commit-instead-of-merge-commit"}),"https://github.com/actions/checkout#Checkout-pull-request-HEAD-commit-instead-of-merge-commit")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"validate-commits:\n  runs-on: ubuntu-latest\n  steps:\n    - name: Set up Go 1.13\n      uses: actions/setup-go@v1\n      with:\n        go-version: 1.13\n    - name: Check out code into the Go module directory\n      uses: actions/checkout@v2\n      with:\n        fetch-depth: 0\n        ref: ${{ github.event.pull_request.head.sha }}\n    - name: Commitsar check\n      uses: docker://aevea/commitsar\n      env:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}l.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=i,h=p["".concat(o,".").concat(b)]||p[b]||m[b]||c;return n?r.a.createElement(h,a(a({ref:t},s),{},{components:n})):r.a.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);