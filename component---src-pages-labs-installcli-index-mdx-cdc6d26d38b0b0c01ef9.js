(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{whsL:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return d}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var c=t("7ljp"),l=t("013z");t("qKvR");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e}).apply(this,arguments)}var o={},n=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",a)}},p=n("Accordion"),s=n("AccordionItem"),m={_frontmatter:o},b=l.a;function d(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,c,l={},i=Object.keys(e);for(c=0;c<i.length;c++)t=i[c],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(c.b)(b,i({},m,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"CLI tools provide the ability to manage applications, containers, infrastructures, services, and other resources. In this section you will install all the necessary CLI tool in your local machine to be able to complete the Labs."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Note:")," If you have already installed all CLIs in your local machine, you can skip this page."),Object(c.b)(p,{mdxType:"Accordion"},Object(c.b)(s,{title:"Install IBM Cloud Pak CLI (cloudctl)",mdxType:"AccordionItem"},Object(c.b)("p",null,"1.You should be on your CP4MCM Web Console, if not, check how to access it in ",Object(c.b)("a",i({parentName:"p"},{href:"../beforestart/"}),"Before Start")," page."),Object(c.b)("p",null,"  From the CP4MCM Web Console page, select the ",Object(c.b)("strong",{parentName:"p"},"user icon"),", then click ",Object(c.b)("strong",{parentName:"p"},"Configure client"),"."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACb0lEQVQ4y1VSy04UURDtX8GVumGCmMBicEHE6A8wxAeJOxMMQ8QgG1z5CchOggujrFy4UFeTuHHBygcD08w0w0B0Zvo9/Z7A8Z5qmkgnJ32rbtWpU7dKm380j6cLC6hWq1iqLgmWny1jcXERldkK5ipzl0Cf+GdnwdyZ2zMYGRlRuILSeBlaHMfwfR9eAc+Dq8B/kiSXwNg0zXB2OkTPCcBve/sDSqUSJiYmcPXadWgk65smLNsWmJYFi1Bn3g0GAwHPsSJ1rB6+/+hg89sQNR1YX99AaXQUU1NTuDE2pghVcLtzDOOwjcP2kcBQaCm72+shCAIho8Jmq4W1l2tYWXuFJ6+PcH91Gw8fVDA+fhPlchmTk5O5Qr3ZQuOAaGJfP8BByxBQbRiGQphlKer1PdyansbzlVW8/foHj1c2cOfeXWxubsEwDOi6nius7+uoN3Ls7jXwSyW2jEPYjiMKi7aTJEWj/hvvPu7gxfszVN84+PylBlfFZVkmXYjCpkqmSlF6/qev1+9fImTsUCl1vRBbnzqo7XTVgDIMVAyHyHuNLclkXReOAlXxH8cRoiiSlokoCsVmgVidMYxwmuV2fp/Halk2RBDGF6uRpqmsxiCILkjpj+Lk3BeLL1Z2ECr852Oulqhk22GVvDVWZJDjBohURfpYmWSOF1xMnYpdP49jrqyVItbIyr0zTQu27SiSXLqpdrPXN+U5ilY5ddosQp8/8CWOz0SfEHJZOd3O8Ym8IwM9z5fhcB/5nmzZtGz83K3LoFiQyTwXuV6hUBZWTbRzciLVi73jsheKWITEjPvb7YqPyZYq0j7qCDFF0PcP9A+PHcsoT8UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2 cloudpak cli",title:"2 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/a031c0084d85da671e5abc80e71ec65e/3cbba/2-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/a031c0084d85da671e5abc80e71ec65e/7fc1e/2-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/a031c0084d85da671e5abc80e71ec65e/a5df1/2-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/a031c0084d85da671e5abc80e71ec65e/3cbba/2-cloudpak-cli.png 1152w","/demohub/cp4mcm20-skytap/static/a031c0084d85da671e5abc80e71ec65e/b313a/2-cloudpak-cli.png 1242w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"2.Click ",Object(c.b)("strong",{parentName:"p"},"Install CLI tools"),"."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"540px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABLUlEQVQoz51SyU7DMBD1//8FBxbBgTsHLkicUHMrhSaplyZNXbI0CUmcpQ/bolHYJUZ6Gs9oPH5+MyTPc1BKIYSAlNL6OI7xlx0Ohw++bVs0TQNS1zXSNEOSpijLEnleoChKXdBBmSKlrDcXlDJQ6Pt+bDZtbEAiucPj0xJiHYKJwMJbURuvuIBHGZ49X+cYfMZtXGsmU3ZTIyZl3hs0Oo2m08x0YdsPI7tK/6Jp1MjyyOY7kJhR0PkcfLFAHgZAXWGQW3T77Ff9fmzonp7g4eIMzuU5ltdX2N/eILm/Q5sm+I8R6blwZzML33EQMIYgThHuXsDXAcJoi2ATQYQbGL2P8Vafh2H4wphkrxV8PQAaRuCRhEs5qB4G18PxmbDamcmOGr7raLbg8+oYewNys2aVoBGztwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"3 cloudpak cli",title:"3 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/9ca667aa6b9d0ad54cd3086a6b055be5/674c8/3-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/9ca667aa6b9d0ad54cd3086a6b055be5/7fc1e/3-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/9ca667aa6b9d0ad54cd3086a6b055be5/674c8/3-cloudpak-cli.png 540w"],sizes:"(max-width: 540px) 100vw, 540px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"3.Expand ",Object(c.b)("strong",{parentName:"p"},"Install IBM Cloud Pak CLI (cloudctl)"),". Read the text, then copy and run the curl command for your operating system."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQ4y42Sy1LCMBSG+4IsAF2BbnTwxdj7AD6CG8eN4w2RSwtW0muaJjT5PQkFBRHMzJemJ8mf/5zEu7y4xFWvh1azhWaziXarfZCT9orTk1Ocn3XQ6XTRJRqNBvr9Pjw/CBAQjDGkaYqyLA9SFCXmHyle30Lc3g3h+3OKFW6Ocw4vThJYtNbY14zRhHFQh2Vl4M8F7h8SXN/4mAUMggu3Ns9zeCl14YKBxQmSLENOp1m4RUjojbCpDzXuX8olTFW5uJLKxWyG3udoimAwxmwwxOzlGdOnR8wHr4jG72ATH9ksRJVna9Vvtxvp7+YEszBEQRsUOZJUA7NUNeRAKWglUUUMsG5qp6vszRYbwTSOsSAEFXVZ6dWmH9imaaFND9gvtCVYkFgcRcjoYjjVkFPQfYmCUKWAiaMtwd8X90Mw8ydg4xESfwr+QU9gD4ot9jraFczIgJdT3exAUc0qukW9g4utU6yf1l+CUkp4Qgg3WL8zcwB9xKETtHnnOXduDorVjo8KrheaI+7+U0Mr+AUDrNOe9PTFAgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"4 cloudpak cli",title:"4 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/ecc8c52093774e1811db92cd645173de/3cbba/4-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/ecc8c52093774e1811db92cd645173de/7fc1e/4-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/ecc8c52093774e1811db92cd645173de/a5df1/4-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/ecc8c52093774e1811db92cd645173de/3cbba/4-cloudpak-cli.png 1152w","/demohub/cp4mcm20-skytap/static/ecc8c52093774e1811db92cd645173de/ce6f1/4-cloudpak-cli.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"585px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABKElEQVQ4y9VS246CQBSb//8iv2IVQeQ+M+KdS8BoooJ26UncR5fNZh/2JCdTSmkLQXnBBL4OYbWBNgZGZ/DmU3xMp3AcB7PZDK7rIkkShGEo6/s+NpsNttst1uv1Fw6CAMraHEkcI89zWGuRZRnSNEGmNVarFeLhnhmCqqrCbrdDURTY7/eyNCJ/PB4Fl2UJFccRjDWDSSoPLxaLodlc8KtVFEVy7XmenGxCnlqWYAgNb7cbFN3P5zOappHaTCQ+nU4iXi6XYvx6Pbbk2xBTQ55leHZdB0VAAYXcw+Eg1WlKIyZzLpeL8G3boq5rCWaj6/UqmPz9fofq+x7c5/OJx+MhJJN4kv/J0Fx9J2LQ2JVvOEb4Mn4XyBHDd+Ix8w8Nf2P25w3523wCCz3qeI8gEsUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"5 cloudpak cli",title:"5 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/0efac12bd0edc73924252a8bc28a5a26/8fa75/5-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/0efac12bd0edc73924252a8bc28a5a26/7fc1e/5-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/0efac12bd0edc73924252a8bc28a5a26/a5df1/5-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/0efac12bd0edc73924252a8bc28a5a26/8fa75/5-cloudpak-cli.png 585w"],sizes:"(max-width: 585px) 100vw, 585px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"4.After you run the curl command for your operating system, continue to install the IBM Cloud Pak® CLI."),Object(c.b)("p",null,"  To install the IBM Cloud Pak® CLI, run the command that matches your client computer operating system, where <path_to_installer> is the path to the directory where you downloaded the cloudctl file, and <install_file> is the downloaded file name."),Object(c.b)("p",null,"  For example, for Linux and macOS, run the following commands to change and move the file. Remember that the curl command for your cluster is located in the console:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"chmod 755 <path_to_installer>/<install_file>\nsudo mv <path_to_installer>/<install_file> /usr/local/bin/cloudctl\n")),Object(c.b)("p",null,"  For Windows, rename the downloaded file to cloudctl and place the file on the PATH environment variable."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"570px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAcklEQVQI141OSQoEIRDz/0/Uk0KriOKC2y1NCnrOI4TEpEyprLWotSLGiNaaaO89QgjiPc8jnFJC710yauYE81IKcs7iKxZ++Ab5aK31w5wT917RXMo7y4kxBs45wvSVMQZaazjnZJjbWErmb6n33vj3vObh456/ZJbeAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"6 cloudpak cli",title:"6 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/8e5d87f2d5240976cf6dddb7ac55e7f5/2b0be/6-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/8e5d87f2d5240976cf6dddb7ac55e7f5/7fc1e/6-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/8e5d87f2d5240976cf6dddb7ac55e7f5/2b0be/6-cloudpak-cli.png 570w"],sizes:"(max-width: 570px) 100vw, 570px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"5.Confirm that cloudctl is installed:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"cloudctl --help\n")),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"585px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABpklEQVQ4y3WTi3KCQAxF+f8/6j/UOhVGUEBARUQF3+9H2pNOKNOZZubOZjebm+SyOF7wJl7sS5akkqapxFEo7ueHdDrgXbrdrriuK/1+X3q9ngRBIJ7nyWQykel0KuPxWMGemJPnhZTzUjabjaxWK5nNZrJYlN9YKJbLpZRlKdvtVvfH41Eul4ucz2fF4/GQ5/OpqKpKnLqu9AKB/X4vu91O9ySSgM/Z6XRS4EN+OBzUJ88M38myTJkhY7UEg52t1+vmDmSsTHW73TTOJMSVkAAtE6QKuN/vjd/eX69X9ekcnzz2YD6fi4NmVKjrutGM6qC95zIaU/w/Q2uHL4Q27apoZ3qhJaMAfM65wzSsdP16vX4JR6ORXsbweTrApICAOEUogH4AcjSG1ExH5v0wFgkQJUkieZ5LURRKBikE9pXtBUBmr8Ik02czHA6V2d4RoMDvm/zRkZXigGRIDTSDZHTbjIwWURTp2HEca6f4aEzHgLPBYKDFrDNymQBTQt/3NYDZyHTBRftQrBji2wf4a5w3hPyTHIRhKEgAIDdt2sK3idvAKP4FqNbdXluI5KoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"7 cloudpak cli",title:"7 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/8ac55c22d5239471b764b193097b9c28/8fa75/7-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/8ac55c22d5239471b764b193097b9c28/7fc1e/7-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/8ac55c22d5239471b764b193097b9c28/a5df1/7-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/8ac55c22d5239471b764b193097b9c28/8fa75/7-cloudpak-cli.png 585w"],sizes:"(max-width: 585px) 100vw, 585px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"6.Log in to your cluster with the following command:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"cloudctl login -a <CP4MCM_Console_URL>  --skip-ssl-validation\n")),Object(c.b)("p",null,"  Where ",Object(c.b)("inlineCode",{parentName:"p"},"CP4MCM_Console_URL")," is the hostname of your CP4MCM console, something like ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",i({parentName:"em"},{href:"https://icp-console.playgroth-mcm...appdomain.cloud"}),"https://icp-console.playgroth-mcm…appdomain.cloud"))),Object(c.b)("p",null,"  After the command, you need to enter your CP4MCM ",Object(c.b)("strong",{parentName:"p"},"admin user")," (1), your admin ",Object(c.b)("strong",{parentName:"p"},"password")," (32 charecters password that you defined in the CP4MCM installation) and enter ",Object(c.b)("strong",{parentName:"p"},"default")," as namespace."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"585px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"72.91666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7klEQVQ4y51TCXLiMBD0/7+0fwAWQ1gu2ziUwYcs+b7pbbmAIiRUUlHVuCV7pqdnrDHeNn+wtNZwnQMOhwOs/RYLc4bJdIrJZIIpcblcwjTNO87ncziOM5pt23ebTmcwLMvBbrsl0R6b3e4auMB6vcaOZ223gC39jsfjmFijfqdJLcsa/fzzGYbvn5GkKYRSCGwLiZQQIoYkdl2Hy+WCYRhG0+fb/tn6vkfbtjBCISDjGDHJmiwDGfCbpROXZQnDfX8fpYaO/fj1TqwdvzO9tMqqqmDoR1XXqCm3YknlcEGjs9GppdMj6StlNxwJoyhizwTCIIAoCpzSDL5K4LHxBRP8lPCu8OR58Gj23kIUCThCIogleiW/JHsm/kQoEhcq9xBnHlQRIO9blsxy6dRcS35F9lxyzdYZM6lgZzlmscKCpc7iBKZMsUoynjOIhr3thw+BrwgLtsxYJTnWaYE5gzfEXVYgJknR9civlrbdh8CvWqDRdV0YWsWSav5SlcY3mp2X8MoaB2LdD9+WfHuvJ8dImF2XlPGPZtxrVERFlVqpVvh8517dxZGwLjxU5QlNFaJrJOrSR0OryzPq4sRvPv9eyCk4c7yqT0of9y6vmqE4w2EUIuU8qyRBEAbjvYxljBMnSDf6JxOj12r1D/8B16SEZe6ze7AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"7 2 cluster mgmt img",title:"7 2 cluster mgmt img",src:"/demohub/cp4mcm20-skytap/static/c0071b66d6e6584de760ded9b0047e49/8fa75/7_2-cluster-mgmt-img.png",srcSet:["/demohub/cp4mcm20-skytap/static/c0071b66d6e6584de760ded9b0047e49/7fc1e/7_2-cluster-mgmt-img.png 288w","/demohub/cp4mcm20-skytap/static/c0071b66d6e6584de760ded9b0047e49/a5df1/7_2-cluster-mgmt-img.png 576w","/demohub/cp4mcm20-skytap/static/c0071b66d6e6584de760ded9b0047e49/8fa75/7_2-cluster-mgmt-img.png 585w"],sizes:"(max-width: 585px) 100vw, 585px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(s,{title:"Install Kubectl CLI",mdxType:"AccordionItem"},Object(c.b)("p",null,"1.Let’s set up the kubectl CLI. Expand Install Kubernetes CLI to download the installer by using a curl command. Copy and run the curl command for your operating system, then continue the installation procedure in the product documentation."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABWUlEQVQ4y5WTTVODMBCG+YkC1qGtjgd7qL/Rs1dvznjw6Eg7lpAQICF8vGaDdWgFxu7MOyFkeXY3u3hRFGHzsMHjdosgCOBf+QiDcFbXYQjfD3CzWOD+7hZRtMJyucR6tYZXliU+4xjxbockSZBlGbTWk6oqDZkrcF7iIxZ4e/9CnhdQSjl5bduCcY6EpTDGgPbn6rrOiZ6BDko3iPcKL68Znp734ExClRpkHjkSuSiKH2CDcxsCaT2aMda364PWpnZnHh1QqbEtO2EMXEhbTmbFwexeCIGmaU7AR/XvTgM7oJQSaZpaCTChkKQSzAahQAQeZjUGHgZwQCqXLpzKbWqDMfubWTfq54DU2cPhAOq4sXdx3pCLgYUFMVuysGAaAZnndu11bNYQMgX7BdIH1Om5sRlmOZshHVCpWldoJy57bGymfFyGZdFP+nCI/wOczLD/paqLgWP6Bmu/2DHPO9X7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"8 cloudpak cli",title:"8 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/7d77f727306059cc0383e3bce07c39f7/3cbba/8-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/7d77f727306059cc0383e3bce07c39f7/7fc1e/8-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/7d77f727306059cc0383e3bce07c39f7/a5df1/8-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/7d77f727306059cc0383e3bce07c39f7/3cbba/8-cloudpak-cli.png 1152w","/demohub/cp4mcm20-skytap/static/7d77f727306059cc0383e3bce07c39f7/a5a5c/8-cloudpak-cli.png 1244w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"2.Change the file to an executable, then move the file to a directory that is included in your PATH environment variable. See the following commands where <path_to_installer> is the location of the file that you downloaded and <install_file> is the name of the file:"),Object(c.b)("p",null,"  For Linux and macOS, run the following commands to change the permissions of the file and move the file to a directory that is included in your PATH environment variable:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"chmod 755 <path_to_installer>/<install_file>\nsudo mv <path_to_installer>/<install_file> /usr/local/bin/kubectl\n")),Object(c.b)("p",null,"  For Windows, rename the downloaded file to kubectl and place the file in a directory that is listed in the PATH environment variable.")),Object(c.b)(s,{title:"Install IBM Cloud CLI",mdxType:"AccordionItem"},"1.In this tutorial, you install the IBM Cloud CLI along with popular plug-ins and tools so you can work with Kubernete, OpenShift clusters, and more in IBM Cloud.",Object(c.b)("p",null,"  You can use the Red Hat OpenShift on IBM Cloud command line interface (CLI) plug-in (ibmcloud oc) to create and manage your OpenShift cluster infrastructure, such as creating clusters and worker nodes. Then, you can use the OpenShift CLI (oc) to manage the resources within your OpenShift cluster, such as projects, pods, and deployments."),Object(c.b)("p",null,"  Run the command below to install the IBM Cloud CLI."),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n")),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"585px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQ4y21T6dKiMBD0/R9qH0JFjkBABBE5wyWevT2xvt39sanqIgkznZnuZONFv+AlPlzngO12i91uB+fgQCmFvbPHbr+ze/v9Hgf3AN/3bZzECOTf4fDdl5jNaCZ0bYd5mi26poPpDAYzoG1ajMOIaZwwmpF7I/qut/ESY3rzjRkZM024Xq/YNLcbOgYVXY7MnJCbDKc+xXnIUS812rWBefRo1hrnJee6xfAwKObCzs29R78SfY/7/Y5NON+QXmuEcYg4OyLQCkoHcJWL4sqkvkXd1RaX+oKma1BWpV03RD/0du/1en0J9bRAjzOiYYaebkjKClqF1CSwOnquBx1pqEDB93wE3Jdvda1s68/HE6/nCzL+EEaEIqmaV5zaFjoMaYBrBRfEcYwgCJAkiTVETMiyDI7jUK7Okn0+ny9hTKFjCq/4jahlkuU4MjFNU2itEZL8eDxaAtkTYjmgqiqrm7T6MyxhwKRjniNgkOL8zHnLKuXkuq5toqwrzsXN/w2pTsa6rjTlXCChHsH5gqxubEXS7s99i6LI3i+fleU8TCpdlsUSvN9vS/ZDWJYlNRxpyjBBERmJNRMVyXySxqxYEEnb7EBHIefKavl8Pv+t8S9hcOK9o3YuTfF4WR1W6pZXhNRLMTFKTwhYpWIn21OOlM5KhdKeaHanyxOxssricsGmJmvHF1IQZ8FyQz4vuND5gi/kTMMME/rXGyMJ6u5LKIYYYuLDaHltzPuDXAg9tidGFHlmW83oaHUpUPGglkb0NGQlwYMV3ebZPjFbGSFti1ESVxYF9db4DZG5yumvggqUAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"17 cloudpak cli",title:"17 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/dbe40a82cb113fbf34fe20be76782c2e/8fa75/17-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/dbe40a82cb113fbf34fe20be76782c2e/7fc1e/17-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/dbe40a82cb113fbf34fe20be76782c2e/a5df1/17-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/dbe40a82cb113fbf34fe20be76782c2e/8fa75/17-cloudpak-cli.png 585w"],sizes:"(max-width: 585px) 100vw, 585px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"2.To verify that the CLI and Developer Tools were installed successfully, run the help command:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"ibmcloud dev help\n")),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"585px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABnUlEQVQ4y42TiY6CQAyGef832ndwNSvqooCIogh433fXr0nNxMRkmzRztNP+f9vxWsGXtOJfSZOBJIOBxFEo/k9dvut1qdVq0mg0xPd9abfb0mw2dUVHo5FkWSbD4VCVcxAE4mVZLsV0KovFQnUymUhVllIUher0aauqSmazmZTP+81mI5fLRY7Ho5zPZ7nf76qPx0Pm87l4VVXKbreTw+Eg1+tV96fT6XW3Xq/14X6/1ztWEq9WK7W5wnsvz3M1bLdbdVoul4oCVJaEzHaPL2hM2NsZIB7cyXq73RQJCiWMBIOOe48aRVcRfBQhm0/ionlH9TEgtXEN/5X3oBowSRLtJpQR6khHKbx1l/pRY6slNs7vogHDMNRim6RpKp1OR+I41rnqdrsv7fV6qlEUCcxISBBqzapNwcHNRhdBRRKQMHucQY5yB1JjgT8lY2U2PabeRUjXQT0ejxUJSEHNgFMe+yHYCeiKIoQemU1ARAAeEqDf7ys9+16sxgDKIAMxMfSnWA2twzgYVRrAY2sMjwhCAhoJIprJbFJHKP8BhuPflWx0nM8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"18 cloudpak cli",title:"18 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/887f58b8c89041cfa9e5fe94d4a46d95/8fa75/18-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/887f58b8c89041cfa9e5fe94d4a46d95/7fc1e/18-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/887f58b8c89041cfa9e5fe94d4a46d95/a5df1/18-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/887f58b8c89041cfa9e5fe94d4a46d95/8fa75/18-cloudpak-cli.png 585w"],sizes:"(max-width: 585px) 100vw, 585px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"3.Log in to IBM Cloud with your IBMid using the command below to guarantee that you will select your personal account (not DTE account)."),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"ibmcloud login -sso -r us-south -g default -c <your_ibm_id>\n")),Object(c.b)("p",null,"  Follow the URL in the prompt to get the one-time passcode. Copy and paste the passcode value in the CLI as your input."),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"ibmcloud login --sso -r us-south -g default -c <your_ibm_id>\nAPI endpoint: https://cloud.ibm.com\n\nGet One Time Code from https://identity-2.us-south.iam.cloud.ibm.com/identity/passcode to proceed.\nOpen the URL in the default browser? [Y/n]>\nOne Time Code >\nAuthenticating...\nOK\n")),Object(c.b)("p",null,"4.To avoid the SSO extra steps, you can generate an IBM Cloud API Key. Let’s do it!  Create an IBM Cloud API Key by running the follow command:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"ibmcloud iam api-key-create myibmcloudkey --file myic.key\n")),Object(c.b)("p",null,"5.Let’s test the new key. First logout from IBM Cloud."),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"ibmcloud logout\n")),Object(c.b)("p",null,"6.Now, log in using the command below:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"ibmcloud login --apikey @myic.key -r us-south -g default -c <your_ibm_id>\n"))),Object(c.b)(s,{title:"Install OC CLI",mdxType:"AccordionItem"},Object(c.b)("p",null,"1.Now open your OpenShift console (there is a link available in email that you received from IBM Cloud, after your Environment Request)."),Object(c.b)("p",null,"2.On Openshift Console, open the Help menu and select the Command Line Tools link."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACPklEQVQoz2VSa28SURDd36HyRiilLNACadO0UdNaU1ISjNEm/gD/rPGT8YvVUiiwsC/Y95PjzKXli5uc7H3MnDlz7kj5TAbdeh3VWg3ZbBbVahWlUgnFYhGFQuE/5HI5yI0GBoMBvt3e4v3xMfYol88qlQqkutyGfNhFrvgand4J7u5+YzS6h6qqWK/XWK1MwmoLk9aWBWP8gMmP79B+/cR6uYQp4rYx0vDzV/QHH3H25gLDT18wW5qwvQhpmmCzSQkbWqc78D70fUEeeB6SJNmeP91L1zdDXH7o4/T8HREPMXmcwnU9uF4Ay/FFVY8SwzBEEASEEB4ROq6LMIqwInU+7W2KN1nhxVUf528v0Ts5w9X1DebzOQzDEAlJuoFlrxDHMZ4/P4wICa02ogDbwn8/iKDrBqRmuwP2sVDeQ/f4FI/TKUxqx3EcUhVRW+SZoQultm2T+q2yIKZilg2b4lzqIAhjaJoGSSbC/YMmXmTyaB31MJlMhMIoYh/ZLwsKqWblnMCFIlLsR6mwwqD9g6LAp0I6FZZqRFau7uNVrrgj1HV912YYuFgsFkI1q2Olvh+QHaCiMQw6H43H4o7zJLl1hErtAC+zBUE4m83IF0soTCiLW1aUOUERo8TEPj9OlBDoUdQlxn//kK+huCOFMhiZfAlNmkdOdJytV0zKbVk0e7xn8/mM1YdhILxca6og5LVDHkuN1iHanR4RltEiwvlCFf48zxw/BBMySfI0a0wqRohUrUmVRsPND8N2/APPu8XIG20pbAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"19 cloudpak cli",title:"19 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/3eb9d76b2597a1ee90fab4013d573a6a/3cbba/19-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/3eb9d76b2597a1ee90fab4013d573a6a/7fc1e/19-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/3eb9d76b2597a1ee90fab4013d573a6a/a5df1/19-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/3eb9d76b2597a1ee90fab4013d573a6a/3cbba/19-cloudpak-cli.png 1152w","/demohub/cp4mcm20-skytap/static/3eb9d76b2597a1ee90fab4013d573a6a/942b3/19-cloudpak-cli.png 1456w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"3.On the  OpenShift Command Line Interface section, download the OC CLI specific for your operational system."),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACDUlEQVQoz3WSfW+TUBTG+Q4mGqdjg20t0MLadZ1+EePS6J8aP7EmujjbDgqUyzuUt/J4LrVWXbzJL+feS3jy3PMcQRJF3AyHUFQNIu37vR4k6RSyJOFEkiHLj5Hom6qq0DQNiqJA13UYhoF+vw9B00cwxtcQpXNMpq8xXyxgrmwsTQvfFhYcz0eapkiS5B/iA/GuxlSFAQleKBpeiBKupq9gewG8tIATZkQKN86RFhWaFo/Y4tcehyUMjBGUgdEJcoemy7AKMthBApbkHR6v6QZRUR/Y1IjLBnHRdOe8rNG2LQT+XHUveH0D6+47rB8rsAcLuesgc23CQRUwNFFwIAxQhz5qut+mSeeuE1SHlzjrqXh5eobxaAL77is8EnEtE45lYWWaHXEYIo0iJASvOfW1KoqOJvA7sZY/WR9doa/pODqRMSG39nyJIKvBohx+vEFTV6iJsiyxoZ/3FAS/KyvqbxRyeztBTb/sUj7mKY+vsLx/wJy+z70K9x4JZy3K7S6A/61tHHUOsRMcYWCMIcoXmEymMD9/wdp04C5McmtSP00wGqENY9RHH6XP/sBHwTyUnrt7Mu/hs6NjcJ48fd6lbVPf/LWLtWODURhrZ0U4Xc/2ZBRCRrPI99u6/sut8Hb2Hrezd3hzO8OHj59ooCkQFsIPgt8EQQhGDj2CkSuf4GdORMPMBz+ioDg/AU2FwOxmUEBWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"20 cloudpak cli",title:"20 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/e6965a252207e07707a54d886fb02ee7/3cbba/20-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/e6965a252207e07707a54d886fb02ee7/7fc1e/20-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/e6965a252207e07707a54d886fb02ee7/a5df1/20-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/e6965a252207e07707a54d886fb02ee7/3cbba/20-cloudpak-cli.png 1152w","/demohub/cp4mcm20-skytap/static/e6965a252207e07707a54d886fb02ee7/942b3/20-cloudpak-cli.png 1456w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"4.If you are using Linux or macOS, run the following commands to change and move the file."),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"chmod 755 <path_to_installer>/<install_file>\nsudo mv <path_to_installer>/<install_file> /usr/local/bin/cloudctl\n")),Object(c.b)("p",null,"5.To verify that the CLI was installed successfully, run the follow command:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"oc get nodes\n"))),Object(c.b)(s,{title:"Install Git CLI",mdxType:"AccordionItem"},Object(c.b)("p",null,"  You will need Git CLI to clone some YAML files as part of the Application Management Lab. Follow the installation steps described in the page below ",Object(c.b)("a",i({parentName:"p"},{href:"https://git-scm.com/downloads"}),"Git site")," , based in your operational system.")),Object(c.b)(s,{title:"(Optional) Install MC Plugin on cloudctl",mdxType:"AccordionItem"},"1.The mc plug-in is not in the IBM Cloud Pak CLI (cloudctl) installation. Complete the following procedure to download and install the plug-in to work with multiple clusters. Download the multicluster, or mc plug-in for the applicable operating system. See the list of the mc plug-in commands for the different operating systems:",Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"curl -kLo cloudctl-mc-plugin https://<Cluster_Master_Host>:<Cluster_Master_API Port>/rcm/plugins/mc-darwin-amd64\n")),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"585px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.916666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3klEQVQY0z1PWaqEQAz0/id6dxCU1+PSbu2oiLvoh6Co1EwFnIYiSaUqSVth8AfXvFC9S+TvHMZk0L6C47qwbRuO40ApBa21ROLhjDHIsuwH1pbWEdS/QhzHSNMUnud98ZLofoeGYYgkSaTv+74YqXu0VVUhz3PUdY2iKGCxKMsSfd/LBoKNKIqE52VBEMjwpmnQdR32fZf8OA4sy4JxHNG2LaZpgsViXVchn3zbNjHN8yxX0fQYuGgYBlnESA19/AmXWbyMIMkmSQppJs9B932D7zxPXNf1A+vnUUN8ANUQbnizdjbPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"14 cloudpak cli",title:"14 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/78aae3fc98376717437352de878be47c/8fa75/14-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/78aae3fc98376717437352de878be47c/7fc1e/14-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/78aae3fc98376717437352de878be47c/a5df1/14-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/78aae3fc98376717437352de878be47c/8fa75/14-cloudpak-cli.png 585w"],sizes:"(max-width: 585px) 100vw, 585px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"  Note: You can use your CP4MCM Web Console URL on HTTPS as ",Object(c.b)("em",{parentName:"p"},"Cluster Master Host")),Object(c.b)("p",null,"2.Install the mc plugin for cloudctl. Run the following command to install the plug-in"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"cloudctl plugin install -f cloudctl-mc-plugin\n")),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"566px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.916666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA+ElEQVQY01VPW26DQAzk/vfpHeADCkqaikJgaXhssrALoVJQeEztVakUSyPb47E1dg6nN/hJhCITyIVAmiT4OLzD9324rgvP82wdRRHCMEQQBLbmWZqmL0ho11HKQNYNdNfBaI26rtE0DbquhabeGINhGND3/T/GcbTcNE12zjrmO7rh8JHhZ4S5j9AkYqHWhoYG87yAY9uAdWVsf/1msRK518uy2N45k9WvokDaSHwrhTwX5LDA5XKEECdCBCnPKMtP4nOqJbIsQ0E7nOM4tl/tLp22bVFXJQzZvZM7Ka9Q6kqv3EikUFUCz+eDfM2E5cUNZwZze/wCN3p1yyq9g2UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"15 cloudpak cli",title:"15 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/e53993941729a771beb307f9953cb730/a0f28/15-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/e53993941729a771beb307f9953cb730/7fc1e/15-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/e53993941729a771beb307f9953cb730/a0f28/15-cloudpak-cli.png 566w"],sizes:"(max-width: 566px) 100vw, 566px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("p",null,"3.Verify that the mc plugin for cloudctl was successfully installed. Run the following command:"),Object(c.b)("pre",null,Object(c.b)("code",i({parentName:"pre"},{}),"cloudctl mc -help\n")),Object(c.b)("p",null,"  ",Object(c.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"585px"}}),"\n      ",Object(c.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABsUlEQVQ4y42TiW7CQAxE9///qN9QigoEJdBAuEm4EiDcx5S3khGVWqkrWd547fGsZ+OC6E1BJ1Q/6SlJEsVfbdU/P1SpYO+qVquq1+tqNpuq1WoKgkCNRkP9fl/D4VCDwcAb+yiK5MbjqbI0U17kWq/XWiwWWq1WyvP8h99utyqKQvv9Xqzb7fbD7ve7lsulHADlbqfz+az/Lop/W5fLRW42m2mz2Wj3AAUcFnRiD5vD4eD3xpTcv9bpdJKL49hfB9qwPB6PKsvSA5nRjDgNMJiQyxn+er16ML4fMxz7IIAsY0ShMcUDajPGU4OHDHtIUONGo5FXqdVqPQXpdDpK09SrTkPOe72eyCU2nU6fggHEGNh7QBKQvNvtaj6f+709B2KTycQD0QD/+lxoYvPFuIUjyJXoiiAE2dMZMJpgiIcHADMhATIhPUNjxIOFBQk8UMBoZg8X8WBoVwfQZkozQCHhAEEIW3QhRgGJJgoz4xuQLMueIKhLDa8Ac+122zPgEBBEgCGzDcPQF8MaUK4MMPY6JhsDeY7Bc0gn/gAObOCcAchIaIQgJgrgzBB2sLZ5fgNW1tV3fimpTgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"16 cloudpak cli",title:"16 cloudpak cli",src:"/demohub/cp4mcm20-skytap/static/5a73d3414a43b4fd63a20b066467e1c0/8fa75/16-cloudpak-cli.png",srcSet:["/demohub/cp4mcm20-skytap/static/5a73d3414a43b4fd63a20b066467e1c0/7fc1e/16-cloudpak-cli.png 288w","/demohub/cp4mcm20-skytap/static/5a73d3414a43b4fd63a20b066467e1c0/a5df1/16-cloudpak-cli.png 576w","/demohub/cp4mcm20-skytap/static/5a73d3414a43b4fd63a20b066467e1c0/8fa75/16-cloudpak-cli.png 585w"],sizes:"(max-width: 585px) 100vw, 585px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-installcli-index-mdx-cdc6d26d38b0b0c01ef9.js.map