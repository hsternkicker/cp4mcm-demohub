(window.webpackJsonp=window.webpackJsonp||[]).push([[24,35,39,40,44,53,55,56,58],{"013z":function(t,e,a){"use strict";var b=a("q1tI"),n=a.n(b),r=a("NmYn"),c=a.n(r),l=a("Wbzz"),i=a("Xrax"),O=a("k4MR"),j=a("TSYQ"),o=a.n(j),p=a("QH2O"),s=a.n(p),m=a("qKvR"),d=function(t){var e,a=t.title,b=t.theme,n=t.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:o()(s.a.pageHeader,(e={},e[s.a.withTabs]=r.length,e[s.a.darkMode]="dark"===b,e))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:s.a.text},a)))))},u=a("BAC9"),g=function(t){var e=t.relativePagePath,a=t.repository,b=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||b,r=n.baseUrl,c=n.subDirectory,i=r+"/edit/"+n.branch+c+"/src/pages"+e;return r?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),f=a("I8xM"),k=function(t){function e(){return t.apply(this,arguments)||this}return Object(h.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,b=a.split("/").filter(Boolean).slice(-1)[0],n=e.map((function(t){var e,n=c()(t,{lower:!0,strict:!0}),r=n===b,i=new RegExp(b+"/?(#.*)?$"),O=a.replace(i,n);return Object(m.b)("li",{key:t,className:o()((e={},e[f.selectedItem]=r,e),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+O},t))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},n))))))},e}(n.a.Component),y=a("MjG9"),x=a("CzIb");e.a=function(t){var e=t.pageContext,a=t.children,b=t.location,n=t.Title,r=e.frontmatter,j=void 0===r?{}:r,o=e.relativePagePath,p=e.titleType,s=j.tabs,u=j.title,h=j.theme,f=j.description,v=j.keywords,w=Object(x.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=T?b.pathname.replace(T,""):b.pathname,P=s?C.split("/").filter(Boolean).slice(-1)[0]||c()(s[0],{lower:!0}):"",L=h||w;return Object(m.b)(O.a,{tabs:s,homepage:!1,theme:L,pageTitle:u,pageDescription:f,pageKeywords:v,titleType:p},Object(m.b)(d,{title:n?Object(m.b)(n,null):u,label:"label",tabs:s,theme:L}),s&&Object(m.b)(k,{slug:C,tabs:s,currentTab:P}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:o})),Object(m.b)(N.a,{pageContext:e,location:b,slug:C,tabs:s,currentTab:P}),Object(m.b)(i.a,null))}},"93Cv":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return s}));var b=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),i=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}},O=i("AnchorLinks"),j=i("AnchorLink"),o={_frontmatter:l},p=c.a;function s(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(r.b)(p,Object(b.a)({},o,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)(O,{mdxType:"AnchorLinks"},Object(r.b)(j,{mdxType:"AnchorLink"},"Containers"),Object(r.b)(j,{mdxType:"AnchorLink"},"Kubernetes"),Object(r.b)(j,{mdxType:"AnchorLink"},"Continuous Integration"),Object(r.b)(j,{mdxType:"AnchorLink"},"Continuous Deployment")),Object(r.b)("h1",null,"Activities"),Object(r.b)("h2",null,"Containers"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"What is a Container?"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"A look under the the covers at what is a Linux Container?"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container",target:"_blank"},"Understand Containers"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"What is an Image?"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"A look under the the covers at what is a Linux Container Image?"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container-image",target:"_blank"},"Container Images"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Docker Basics"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set of walkthroughs that cover docker basics"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",{href:"https://www.katacoda.com/courses/docker",target:"_blank"},"Docker Basics"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Docker Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Running a Sample Application on Docker"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../containers/activities"}),"Docker Lab"))))),Object(r.b)("h2",null,"Kubernetes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Pod Creation"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Challenge yourself to create a Pod YAML file to meet certain parameters."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab1"}),"Pod Creation"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Pod Configuration"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Configure a pod to meet compute resource requirements."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab2"}),"Pod Configuration"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Multiple Containers"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Build a container using legacy container image."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab3"}),"Multiple Containers"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Probes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Create some Health & Startup Probes to find what’s causing an issue."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab4"}),"Probes"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Rolling Updates Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Create a Rolling Update for your application."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab6"}),"Rolling Updates"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Cron Jobs Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Using Tekton to test new versions of applications."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab7"}),"Crons Jobs"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Creating Services"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Create two services with certain requirements."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab8"}),"Setting up Services"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Setting up Persistent Volumes"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Create a Persistent Volume that’s accessible from a SQL Pod."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab10"}),"Setting up Persistent Volumes"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Debugging"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Find which service is breaking in your cluster and find out why."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/lab5"}),"Debugging"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Solutions "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Lab Solutions"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Solutions for the Kubernetes Labs"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../kubernetes/activities/labs/solutions"}),"Solutions"))))),Object(r.b)("h2",null,"Continuous Integration"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Deploying Applications From Source"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Using OpenShift 4"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://learn.openshift.com/introduction/deploying-python/"}),"S2I"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Tekton Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Using Tekton to test new versions of applications."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../continuous-integration/activities/"}),"Tekton"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Jenkins Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Using Jenkins to test new versions of applications."),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../continuous-integration/activities/jenkins-lab/"}),"Jenkins"))))),Object(r.b)("h2",null,"Continuous Deployment"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"GitOps"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Introduction to GitOps with OpenShift"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://learn.openshift.com/introduction/gitops-introduction/"}),"Learn OpenShift"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"GitOps Multi-cluster"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Multi-cluster GitOps with OpenShift"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"https://learn.openshift.com/introduction/gitops-multicluster/"}),"Learn OpenShift"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArgoCD Lab"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Learn how to setup ArgoCD and Deploy Application"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../continuous-deployment/activities"}),"ArgoCD on Minikube"))))),Object(r.b)("h2",null,"Projects"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OpenShift Project"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Building a Devops Pipeline with Openshift and Tekton"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"../project-cicd/"}),"Project"))))))}s.isMDXComponent=!0},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-activities-index-mdx-2cb0c0b0008d2e2571c5.js.map