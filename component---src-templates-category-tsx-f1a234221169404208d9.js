(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"30+C":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),c=a("iuhU"),o=a("kKAo"),s=a("H2TA"),l=i.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return i.createElement(o.a,Object(n.a)({className:Object(c.a)(a.root,s),elevation:d?8:1,ref:t},u))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},GsBC:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return v}));var n=a("wx14"),r=a("RD7I"),i=a("cNwE");var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(n.a)({defaultTheme:i.a},t))},o=a("ED4I");var s=a("tRbT"),l=a("30+C"),d=a("oa/T"),u=a("ofer"),m=a("q1tI"),f=a.n(m),g=a("gd0A"),p=a("H8eV"),x=c((function(e){return t={wrapper:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}},Object(o.a)(t);var t})),v="4050122774";t.default=function(e){var t=x(),a=e.data.appCategory,n=e.data.allAppProject.edges.map((function(e){return e.node}));return f.a.createElement(f.a.Fragment,null,f.a.createElement(p.a,{title:"Home"}),f.a.createElement(g.a,{title:"Category: "+a.title,description:a.description||""}),f.a.createElement("div",{className:t.wrapper},f.a.createElement(s.a,{container:!0,spacing:2},n.map((function(e){return f.a.createElement(s.a,{item:!0,xs:12,sm:6,md:4,key:e.id},f.a.createElement(l.a,null,f.a.createElement(d.a,null,f.a.createElement(u.a,{variant:"h3"},e.title),f.a.createElement(u.a,null,"Added: ",e.date_added),f.a.createElement(u.a,null,"Stars: ",e.stars),f.a.createElement(u.a,null,e.description),f.a.createElement(u.a,null,"Source:"," ",e.source?f.a.createElement("a",{href:e.source,target:"_blank",rel:"noreferrer"},e.source):"n/a"),f.a.createElement(u.a,null,"iTunes:"," ",e.itunes?f.a.createElement("a",{href:e.itunes,target:"_blank",rel:"noreferrer"},e.itunes):"n/a"),f.a.createElement(u.a,null,"Homepage:"," ",e.homepage?f.a.createElement("a",{href:e.homepage,target:"_blank",rel:"noreferrer"},e.homepage):"n/a"))))})))))}},gd0A:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("RD7I"),c=a("Ji2X"),o=a("ofer"),s=Object(i.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)}}}));t.a=function(e){var t=e.title,a=e.description,n=void 0===a?"":a,i=e.children,l=s();return r.a.createElement("div",{className:l.heroContent},r.a.createElement(c.a,{maxWidth:"sm"},r.a.createElement(o.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},t),r.a.createElement(o.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},n),i))}},"oa/T":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),c=a("iuhU"),o=a("H2TA"),s=i.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return i.createElement(l,Object(n.a)({className:Object(c.a)(a.root,o),ref:t},d))}));t.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},tRbT:function(e,t,a){"use strict";var n=a("Ff2n"),r=a("wx14"),i=a("q1tI"),c=a("iuhU"),o=a("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var u=i.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,g=e.container,p=void 0!==g&&g,x=e.direction,v=void 0===x?"row":x,h=e.item,w=void 0!==h&&h,b=e.justify,j=void 0===b?"flex-start":b,E=e.lg,y=void 0!==E&&E,C=e.md,O=void 0!==C&&C,S=e.sm,I=void 0!==S&&S,k=e.spacing,N=void 0===k?0:k,W=e.wrap,T=void 0===W?"wrap":W,A=e.xl,M=void 0!==A&&A,R=e.xs,z=void 0!==R&&R,B=e.zeroMinWidth,D=void 0!==B&&B,H=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),q=Object(c.a)(d.root,u,p&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],w&&d.item,D&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==T&&d["wrap-xs-".concat(String(T))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==z&&d["grid-xs-".concat(String(z))],!1!==I&&d["grid-sm-".concat(String(I))],!1!==O&&d["grid-md-".concat(String(O))],!1!==y&&d["grid-lg-".concat(String(y))],!1!==M&&d["grid-xl-".concat(String(M))]);return i.createElement(f,Object(r.a)({className:q,ref:t},H))})),m=Object(o.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return s.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(u);t.a=m}}]);
//# sourceMappingURL=component---src-templates-category-tsx-f1a234221169404208d9.js.map