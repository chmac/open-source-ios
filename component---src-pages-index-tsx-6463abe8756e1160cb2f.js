(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"30+C":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=n("iuhU"),c=n("kKAo"),s=n("H2TA"),l=i.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return i.createElement(c.a,Object(a.a)({className:Object(o.a)(n.root,s),elevation:d?8:1,ref:t},u))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return B}));var a=n("tRbT"),r=n("30+C"),i=n("oa/T"),o=n("ofer"),c=n("Z3vd"),s=n("wx14"),l=n("Ff2n"),d=n("q1tI"),u=n.n(d),m=n("iuhU"),p=n("H2TA");var g=d.createContext({}),f=d.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,i=e.component,o=void 0===i?"ul":i,c=e.dense,u=void 0!==c&&c,p=e.disablePadding,f=void 0!==p&&p,b=e.subheader,v=Object(l.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),x=d.useMemo((function(){return{dense:u}}),[u]);return d.createElement(g.Provider,{value:x},d.createElement(o,Object(s.a)({className:Object(m.a)(a.root,r,u&&a.dense,!f&&a.padding,b&&a.subheader),ref:t},v),b,n))})),b=Object(p.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(f),v=n("VD++"),x=n("ucBr"),y=n("bfFb"),h=n("i8i4"),j="undefined"==typeof window?d.useEffect:d.useLayoutEffect,w=d.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,r=e.autoFocus,i=void 0!==r&&r,o=e.button,c=void 0!==o&&o,u=e.children,p=e.classes,f=e.className,b=e.component,w=e.ContainerComponent,C=void 0===w?"li":w,O=e.ContainerProps,E=(O=void 0===O?{}:O).className,N=Object(l.a)(O,["className"]),S=e.dense,I=void 0!==S&&S,T=e.disabled,k=void 0!==T&&T,A=e.disableGutters,B=void 0!==A&&A,W=e.divider,R=void 0!==W&&W,M=e.focusVisibleClassName,P=e.selected,F=void 0!==P&&P,L=Object(l.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),z=d.useContext(g),D={dense:I||z.dense||!1,alignItems:a},V=d.useRef(null);j((function(){i&&V.current&&V.current.focus()}),[i]);var q=d.Children.toArray(u),G=q.length&&Object(x.a)(q[q.length-1],["ListItemSecondaryAction"]),H=d.useCallback((function(e){V.current=h.findDOMNode(e)}),[]),$=Object(y.a)(H,t),U=Object(s.a)({className:Object(m.a)(p.root,f,D.dense&&p.dense,!B&&p.gutters,R&&p.divider,k&&p.disabled,c&&p.button,"center"!==a&&p.alignItemsFlexStart,G&&p.secondaryAction,F&&p.selected),disabled:k},L),J=b||"li";return c&&(U.component=b||"div",U.focusVisibleClassName=Object(m.a)(p.focusVisible,M),J=v.a),G?(J=U.component||b?J:"div","li"===C&&("li"===J?J="div":"li"===U.component&&(U.component="div")),d.createElement(g.Provider,{value:D},d.createElement(C,Object(s.a)({className:Object(m.a)(p.container,E),ref:$},N),d.createElement(J,U,q),q.pop()))):d.createElement(g.Provider,{value:D},d.createElement(J,Object(s.a)({ref:$},U),q))})),C=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(w),O=d.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,i=e.disableTypography,c=void 0!==i&&i,u=e.inset,p=void 0!==u&&u,f=e.primary,b=e.primaryTypographyProps,v=e.secondary,x=e.secondaryTypographyProps,y=Object(l.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),h=d.useContext(g).dense,j=null!=f?f:n;null==j||j.type===o.a||c||(j=d.createElement(o.a,Object(s.a)({variant:h?"body2":"body1",className:a.primary,component:"span",display:"block"},b),j));var w=v;return null==w||w.type===o.a||c||(w=d.createElement(o.a,Object(s.a)({variant:"body2",className:a.secondary,color:"textSecondary",display:"block"},x),w)),d.createElement("div",Object(s.a)({className:Object(m.a)(a.root,r,h&&a.dense,p&&a.inset,j&&w&&a.multiline),ref:t},y),j,w)})),E=Object(p.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(O),N=n("RD7I"),S=n("Wbzz"),I=n("gd0A"),T=n("H8eV"),k=Object(N.a)((function(e){return{wrapper:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},button:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),A=function(e){var t=e.category,n=e.categories,s=k(),l=n.filter((function(e){return e.parentSlug===t.slug}));return u.a.createElement(a.a,{item:!0,xs:12,sm:6,md:4},u.a.createElement(r.a,null,u.a.createElement(i.a,null,u.a.createElement(o.a,{variant:"h3"},t.title),u.a.createElement(o.a,null,t.description),u.a.createElement(o.a,null,t.projectCount," projects"),u.a.createElement(c.a,{variant:"contained",component:S.Link,fullWidth:!0,to:"/category/"+t.slug+"/",className:s.button},"Browse ",t.title,"."),0===l.length?null:u.a.createElement(u.a.Fragment,null,u.a.createElement(o.a,{variant:"h5",component:"h4"},"Child categories:"),u.a.createElement(b,null,l.map((function(e){return u.a.createElement(C,{button:!0,key:e.id,component:S.Link,to:"/category/"+e.slug+"/"},u.a.createElement(E,{primary:e.title+" ("+e.projectCount+" projects)"}))})))))))},B="2328101272";t.default=function(e){var t=k(),n=e.data.allAppCategory.edges,r=e.data.allAppProject.totalCount,i=n.map((function(e){return e.node})),o=i.filter((function(e){return null===e.parentSlug}));return u.a.createElement(u.a.Fragment,null,u.a.createElement(T.a,{title:"Home"}),u.a.createElement(I.a,{title:"Open Source iOS Apps",description:"A community curated set of "+r+" open source iOS apps."}),u.a.createElement("div",{className:t.wrapper},u.a.createElement(a.a,{container:!0,spacing:2},o.map((function(e){return u.a.createElement(A,{key:e.id,category:e,categories:i})})))))}},gd0A:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("RD7I"),o=n("Ji2X"),c=n("ofer"),s=Object(i.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)}}}));t.a=function(e){var t=e.title,n=e.description,a=void 0===n?"":n,i=e.children,l=s();return r.a.createElement("div",{className:l.heroContent},r.a.createElement(o.a,{maxWidth:"md"},r.a.createElement(c.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},t),r.a.createElement(c.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},a),i))}},"oa/T":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=i.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return i.createElement(l,Object(a.a)({className:Object(o.a)(n.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},tRbT:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("wx14"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,m=e.component,p=void 0===m?"div":m,g=e.container,f=void 0!==g&&g,b=e.direction,v=void 0===b?"row":b,x=e.item,y=void 0!==x&&x,h=e.justify,j=void 0===h?"flex-start":h,w=e.lg,C=void 0!==w&&w,O=e.md,E=void 0!==O&&O,N=e.sm,S=void 0!==N&&N,I=e.spacing,T=void 0===I?0:I,k=e.wrap,A=void 0===k?"wrap":k,B=e.xl,W=void 0!==B&&B,R=e.xs,M=void 0!==R&&R,P=e.zeroMinWidth,F=void 0!==P&&P,L=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(o.a)(d.root,u,f&&[d.container,0!==T&&d["spacing-xs-".concat(String(T))]],y&&d.item,F&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==A&&d["wrap-xs-".concat(String(A))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==M&&d["grid-xs-".concat(String(M))],!1!==S&&d["grid-sm-".concat(String(S))],!1!==E&&d["grid-md-".concat(String(E))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==W&&d["grid-xl-".concat(String(W))]);return i.createElement(p,Object(r.a)({className:z,ref:t},L))})),m=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=m},ucBr:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6463abe8756e1160cb2f.js.map