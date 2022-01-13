"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[7219],{7408:function(e,t,a){var n=a(7462),r=a(3366),o=a(5900),l=a.n(o),i=a(7294),c=a(9541),m=["bsPrefix","className","as"],s=["xl","lg","md","sm","xs"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,d=e.as,u=void 0===d?"div":d,h=(0,r.Z)(e,m),p=(0,c.vE)(a,"col"),f=[],E=[];return s.forEach((function(e){var t,a,n,r=h[e];if(delete h[e],"object"==typeof r&&null!=r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var l="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+p+l:""+p+l+"-"+t),null!=n&&E.push("order"+l+"-"+n),null!=a&&E.push("offset"+l+"-"+a)})),f.length||f.push(p),i.createElement(u,(0,n.Z)({},h,{ref:t,className:l().apply(void 0,[o].concat(f,E))}))}));d.displayName="Col",t.Z=d},994:function(e,t,a){var n=a(7462),r=a(3366),o=a(5900),l=a.n(o),i=a(7294),c=a(9541),m=["bsPrefix","className","noGutters","as"],s=["xl","lg","md","sm","xs"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,d=e.noGutters,u=e.as,h=void 0===u?"div":u,p=(0,r.Z)(e,m),f=(0,c.vE)(a,"row"),E=f+"-cols",g=[];return s.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+E+n+"-"+t)})),i.createElement(h,(0,n.Z)({ref:t},p,{className:l().apply(void 0,[o,f,d&&"no-gutters"].concat(g))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.Z=d},9869:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(994),o=a(7408),l=a(1831),i=a(8544),c=a(9474),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){var t=e.chartFamily,a=i.c.filter((function(e){return e.family===t})).map((function(e,t){var a=(0,c.y)(e.pythonURL);return n.createElement(o.Z,{key:t,xs:4,md:2},n.createElement(l.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",null,n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),n.createElement(r.Z,null,a))}},9935:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(5444),o=a(1496),l=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){var t=e.imgName,a=e.caption;if(l.includes(t))return n.createElement("p",null,"TODO");var i=(0,r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(o.Z,{alt:a,fluid:i.node.childImageSharp.fluid,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},7834:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(9935),o=a(7408),l=a(5444);function i(e){var t=e.imgName,a=e.caption,i=e.linkTo;return n.createElement(o.Z,{xs:12,md:4},n.createElement(l.Link,{to:i},n.createElement(r.Z,{imgName:t,caption:a})))}},1831:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(5444),r=a(7294),o=a(583),l=a(8544).c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function i(e){var t=e.chartType,a=e.caption,i=e.link,c=l.includes(t);return r.createElement(r.Fragment,null,c?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(n.Link,{to:i},r.createElement(o.Z,{chartType:t})),r.createElement("p",{className:"distributionSection sectionLogoCaption"},a)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(n.Link,{to:i},r.createElement(o.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"distributionSection sectionLogoCaption"},a)))}},1006:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(4839),o=a(6594),l=a(5444),i=a(8544),c=a(9474);function m(e){var t=e.title,a=e.description,m=e.chartType,s=i.c.filter((function(e){return e.id===m}))[0];return n.createElement(n.Fragment,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("h1",{className:"mainTitle"},t),n.createElement("hr",{className:"smallHr"}),n.createElement(r.Z,null),n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}),m&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(l.Link,{to:(0,c.y)(s.pythonURL)},n.createElement(o.Z,{size:"sm"},s.label+" section")),n.createElement("a",{href:s.dataToVizURL},n.createElement(o.Z,{size:"sm"},"About this chart")))))}},138:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(1006),o=a(3203),l=a(6187),i=a(7567),c=a(994),m=a(7834),s=a(9869),d=a(5444),u=a(458),h=a(6594);function p(){return n.createElement(o.Z,{title:"Network chart",isTocEnabled:!0,seoDescription:"A collection of network chart examples made with Python, coming with explanation and reproducible code"},n.createElement(r.Z,{title:"Network chart",description:"<p>A <a href='https://www.data-to-viz.com/graph/network.html'>Network diagram</a> (or chart, or graph) show interconnections between a set of entities. Each entity is represented by a node (or vertices). Connection between nodes are represented through links (or edges). This section mainly focuses on <code>NetworkX</code>, probably the best library for this kind of chart with <code>python</code>."}),n.createElement(l.Z,null,n.createElement("h2",{id:"NetworkX"},"Network diagram with the ",n.createElement("code",null,"NetworkX")," library"),n.createElement("p",null,n.createElement("a",{href:"https://networkx.org"},"NetworkX")," is a Python package for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks.."),n.createElement("p",null,"The examples below will guide you through a migration dataset already discussed in ",n.createElement("a",{href:"https://www.data-to-viz.com/graph/chord.html"},"data-to-viz.com"),". It starts by describing the input dataset and the basic usage of the ",n.createElement("code",null,"Chord()")," function."),n.createElement("a",{href:"https://networkx.org"},n.createElement(h.Z,{size:"sm"},"Official doc")),n.createElement("br",null),n.createElement("br",null),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"320_Network_start_simple",caption:"Most basic network chart with Python and NetworkX",linkTo:"/320-basic-network-from-pandas-data-frame"}),n.createElement(m.Z,{imgName:"321_Network_custom_look4",caption:"Custom network appearance: color, shape, size, links",linkTo:"/321-custom-networkx-graph-appearance"}),n.createElement(m.Z,{imgName:"322_Network_layout4",caption:"Control the layout used for the node location",linkTo:"/322-network-layout-possibilities"}),n.createElement(m.Z,{imgName:"323_Network_direction1",caption:"Manage directed and undirected networks by adding arrows",linkTo:"/323-directed-or-undirected-network"}),n.createElement(m.Z,{imgName:"326_Network_background_color",caption:"Control the background color of a network chart",linkTo:"/326-background-colour-of-network-chart"})),n.createElement("br",null),n.createElement("p",null,"A common need when dealing with network charts is to map a numeric or categorical variable to the nodes or edges appearance. This is totally doable and adds some insight to the figure."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"324_Network_mapcolor1",caption:"Map a continuous or categoric variable to nodes",linkTo:"/324-map-a-color-to-network-nodes"}),n.createElement(m.Z,{imgName:"325_Network_mapcolorttoedge1",caption:"Map a color to edges",linkTo:"/325-map-colour-to-the-edges-of-a-network"}))),n.createElement(u.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Similarity matrix"},"Network chart from similarity matrix"),n.createElement("p",null,"Another commin task is to build a network chart from a correlation matrix. Let's say you have several numeric variables describing some items in a dataset. You can compute a similarity matrix and display it as a network chart. This process is described in the",n.createElement(d.Link,{to:"/327-network-from-correlation-matrix"},"post #327")," below."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"327_Network_from_correlation",caption:"Network chart from correlation matrix with Python and NetworkX",linkTo:"/327-network-from-correlation-matrix"}))),n.createElement(u.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Graph-tool"},"Network diagram with ",n.createElement("code",null,"graph-tool")),n.createElement("p",null,"The ",n.createElement("a",{href:"https://graph-tool.skewed.de"},"graph tool")," library is a python library implemented in C++. It makes it highly efficient to draw networks containing many nodes. Graphics to come."),n.createElement("a",{href:"https://graph-tool.skewed.de"},n.createElement(h.Z,{size:"sm"},"Official doc"))),n.createElement(u.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(l.Z,null,n.createElement(s.Z,{chartFamily:"flow"}))),n.createElement(u.Z,null),n.createElement(l.Z,null,n.createElement(i.Z,null)),n.createElement(u.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-network-chart-js-29a75bbf7ed2570e922a.js.map