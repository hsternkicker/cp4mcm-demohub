(window.webpackJsonp=window.webpackJsonp||[]).push([[61,35,39,40,44,63,65,66,68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("NmYn"),r=a.n(o),c=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),i=a("TSYQ"),u=a.n(i),p=a("QH2O"),m=a.n(p),d=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return Object(d.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,o=l.baseUrl,r=l.subDirectory,b=o+"/edit/"+l.branch+r+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=r()(e,{lower:!0,strict:!0}),o=l===n,b=new RegExp(n+"/?(#.*)?$"),s=a.replace(b,l);return Object(d.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(c.Link,{className:f.link,to:""+s},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},l))))))},t}(l.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,o=t.frontmatter,i=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,m=i.tabs,g=i.title,x=i.theme,f=i.description,N=i.keywords,T=Object(y.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,k=m?P.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",M=x||T;return Object(d.b)(s.a,{tabs:m,homepage:!1,theme:M,pageTitle:g,pageDescription:f,pageKeywords:N,titleType:p},Object(d.b)(O,{title:l?Object(d.b)(l,null):g,label:"label",tabs:m,theme:M}),m&&Object(d.b)(v,{slug:P,tabs:m,currentTab:k}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:u})),Object(d.b)(h.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:k}),Object(d.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},BIO5:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return i}));var n=a("wx14"),l=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),b={_frontmatter:c},s=r.a;function i(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You should have your CP4MCM environment on ROKS requested and installed. If not, please complete the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../environment/overview"}),"Request Your Environment")," steps before start the labs. The following labs are specific for ROKS environment, in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Multicloud-Management"}),"IBM Demos site"),", you will find a similar version using Skytap (available to use with Customers and Business Partners)."),Object(o.b)("h2",null,"Accessing your CP4MCM console"),Object(o.b)("p",null,"If you have just requested your environment and installed your CP4MCM on ROKS, you should be on your CP4MCM Console Page, so you can skip this section."),Object(o.b)("p",null,"If not, follow the steps below to access the CP4MCM Console."),Object(o.b)("p",null,"1.Log in to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://cloud.ibm.com"}),"IBM Cloud")," using your IBM credentials."),Object(o.b)("p",null,"2.First, confirm that you are on Digital Technical Engagement Account, if not click to change it."),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"images/ibmcloud-account.png",alt:null}))),Object(o.b)("p",null,"3.On IBM Cloud Dashboard, click ",Object(o.b)("strong",{parentName:"p"},"Clusters")," to see your OpenShift Hub Cluster."),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"images/ibmcloud-dashboard-cluster.png",alt:null}))),Object(o.b)("p",null,"4.Click the OpenShift Hub cluster to open the cluster view."),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"images/ocp-hubcluster.png",alt:null}))),Object(o.b)("p",null,"5.From the Hub Cluster details view, copy the ",Object(o.b)("strong",{parentName:"p"},"Ingress subdomain")," url."),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"images/ingress-subdomain.png",alt:null}))),Object(o.b)("p",null,"6.Open a new browser tab, and on the URL field, enter ",Object(o.b)("strong",{parentName:"p"},"https://icp-console.")," and paste the Ingress subdomain url that you copied in the previous step and press ",Object(o.b)("strong",{parentName:"p"},"Enter"),"."),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"images/cp4mcm-console-url.png",alt:null}))),Object(o.b)("p",null,"7.Log in with your admin and password defined on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../environment/overview"}),"Request Your Environment")," section."),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"images/cp4mcm-console-login.png",alt:null}))),Object(o.b)("p",null,"8.Great, now you are ready to start your lab! Next section you will learn how to install Command Line Interface tools."),Object(o.b)("p",null,"  ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"images/cp4mcm-welcome-page.png",alt:null}))))}i.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-roks-requesting-index-mdx-748aac08fefb3b8b2247.js.map