(window.webpackJsonp=window.webpackJsonp||[]).push([[50,35,39,40,44,63,65,66,68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),o=a("NmYn"),l=a.n(o),r=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),m=a.n(u),d=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,b=e.tabs,o=void 0===b?[]:b;return Object(d.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,o=b.baseUrl,l=b.subDirectory,c=o+"/edit/"+b.branch+l+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),g=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=l()(e,{lower:!0,strict:!0}),o=b===n,c=new RegExp(n+"/?(#.*)?$"),i=a.replace(c,b);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(r.Link,{className:f.link,to:""+i},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},b))))))},t}(b.a.Component),v=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,m=s.tabs,j=s.title,g=s.theme,f=s.description,x=s.keywords,y=Object(k.a)().interiorTheme,C=Object(r.useStaticQuery)("2456312558").site.pathPrefix,T=C?n.pathname.replace(C,""):n.pathname,I=m?T.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",P=g||y;return Object(d.b)(i.a,{tabs:m,homepage:!1,theme:P,pageTitle:j,pageDescription:f,pageKeywords:x,titleType:u},Object(d.b)(O,{title:b?Object(d.b)(b,null):j,label:"label",tabs:m,theme:P}),m&&Object(d.b)(w,{slug:T,tabs:m,currentTab:I}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:p})),Object(d.b)(N.a,{pageContext:t,location:n,slug:T,tabs:m,currentTab:I}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xbZq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n,b=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),i=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),s={_frontmatter:c},p=r.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(p,Object(b.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(i,{mdxType:"PageDescription"},Object(l.b)("p",null,"Install and configure these tools for the course.")),Object(l.b)("h2",null,"Create accounts"),Object(l.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda Account"),": The account is free and easy to create.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://www.redhat.com/en"}),"RedHat Account"),": Needed for CodeReady Containers."))),Object(l.b)("h3",null,"Windows Users"),Object(l.b)("p",null,"Create ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://www.virtualbox.org/wiki/Downloads"}),"Linux VM")," with the following CLI’s and tools."),Object(l.b)("h3",null,"Mac/Linux Users"),Object(l.b)("p",null,"Make sure you install ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew")," for CLI and tool installation."),Object(l.b)("h2",null,"Install CLIs and tools"),Object(l.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Don’t install just the ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(b.a)({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n"))),Object(l.b)("li",{parentName:"ul"},"Note: If you log in to the web UI using SSO, you’ll need to ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI. (You can also use this API key for ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/cp4mcm-demohub/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".)"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for building and running docker images."),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(b.a)({parentName:"pre"},{}),"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(l.b)("li",{parentName:"ul"},"Enabling ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(l.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"}),"Minikube"),": Follow the instructions for your Operating System."),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Make sure you have Cisco VPN turned off when using minikube"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://code-ready.github.io/crc/#installing-codeready-containers_gsg"}),"OpenShift CodeReady Containers (CRC)")))),Object(l.b)("h3",null,"Minikube Setup"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Verify your cluster has 4GB+ memory, and kubernetes 1.16+",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"minikube config view\n"))),Object(l.b)("li",{parentName:"ul"},"Verify your ",Object(l.b)("inlineCode",{parentName:"li"},"vm-driver")," is set for ",Object(l.b)("inlineCode",{parentName:"li"},"hyperkit"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"minikube config set vm-driver hyperkit\n"))),Object(l.b)("li",{parentName:"ul"},"In case memory is not set, or need to increase set the memory and recreate the VM",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"minikube config set memory 4096\nminikube config set kubernetes-version v1.16.6\nminikube delete\nminikube start\n"))),Object(l.b)("li",{parentName:"ul"},"Kubernetes should be v1.15+",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-bash"}),"kubectl version\n")))),Object(l.b)("h2",null,"Reading Material"),Object(l.b)("p",null,"Watch the video and read the overview on this page ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://pages.github.ibm.com/CASE/cloudnative-bootcamp/cloud-native-overview"}),"Overview")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prerequisites-index-mdx-8680f722931e4f19a36c.js.map