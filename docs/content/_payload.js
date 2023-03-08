export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:{"content-query-R06bpTvUhn":[{_path:o,title:k,position:p},{_path:"\u002Fpages",title:"Pages",position:d},{_path:"\u002Ftemplate-syntax",title:"Template Syntax",position:3},{_path:"\u002Fcomponents",title:"Components",position:4},{_path:"\u002Frouting",title:"Routing",position:5},{_path:"\u002Fconfiguration",title:"Configuration",position:6},{_path:"\u002Fsetup-guide",title:"Setup Guide",position:100},{_path:"\u002Fbuild-and-run",title:"Build & Run",position:101},{_path:"\u002Fcontributing",title:"Contributing",position:102}],"content-query-OnfRSB3irj":{_path:o,_dir:l,_draft:m,_partial:m,_locale:l,_empty:m,title:k,description:"We use Nuxt Content to render markdown content\nin a web page. Add @nuxt\u002Fcontent under modules in .theme\u002Fnuxt.config.ts",position:p,body:{type:"root",children:[{type:a,tag:"h1",props:{id:q},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"We use "},{type:a,tag:n,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002F",rel:["nofollow"]},children:[{type:b,value:"Nuxt Content"}]},{type:b,value:" to render markdown content\nin a web page. Add "},{type:a,tag:f,props:{},children:[{type:b,value:"@nuxt\u002Fcontent"}]},{type:b,value:" under modules in "},{type:a,tag:f,props:{},children:[{type:b,value:".theme\u002Fnuxt.config.ts"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Markdown files are placed at the root of to give focus on more to content than\nits theme layout."}]},{type:a,tag:g,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"We follow certain guidelines when creating new or adding\u002Fediting content on\nexisting markdown files. The aim is keeping the markdown files consistent in\nitself. Links, images etc. should be working on any platform this markdown file\nis viewed, such as GitHub. Below is the list of our conventions, the ones that\nrequire more explanation are explained in their own sections below."}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:"Line lengths sould be less or equal to 80 characters"}]},{type:a,tag:i,props:{},children:[{type:b,value:"Indentantions are two space, don't use tab indentation"}]},{type:a,tag:i,props:{},children:[{type:b,value:"Empty line before and after every Code Block, Image, Link, Mermaid Diagram,\nAlert \u002F Info \u002F Tip Boxes, Header etc."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Table rows should have the same width."}]},{type:a,tag:i,props:{},children:[{type:b,value:"We have disabled emoji conversion, use actual emoji icons."}]}]},{type:a,tag:g,props:{id:t},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"Code references are given in code block such as "},{type:a,tag:f,props:{},children:[{type:b,value:"const x = ref(5);"}]},{type:b,value:". To use\ncode block wrap the code with \"`\" character. This usage works for a single\nline, in order to have multiple lines of code block use \"```\" instead of \"`\"."}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Code related terms and terms in general are not given in code block,\nuse \"__Term__\" for code related terms, and italic for terms in general."}]}]},{type:a,tag:g,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"We use these boxes to give information, warning or tips when it is related to\nthe context but could not be included in the paragraph."}]},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:j,props:{},children:[{type:a,tag:y,props:{align:e},children:[{type:b,value:"Box Type"}]},{type:a,tag:y,props:{align:e},children:[{type:b,value:"Markdown Name"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:j,props:{},children:[{type:a,tag:h,props:{align:e},children:[{type:b,value:"Alert"}]},{type:a,tag:h,props:{align:e},children:[{type:b,value:":warning:"}]}]},{type:a,tag:j,props:{},children:[{type:a,tag:h,props:{align:e},children:[{type:b,value:"Info"}]},{type:a,tag:h,props:{align:e},children:[{type:b,value:v}]}]},{type:a,tag:j,props:{},children:[{type:a,tag:h,props:{align:e},children:[{type:b,value:"Tip"}]},{type:a,tag:h,props:{align:e},children:[{type:b,value:":bulb:"}]}]}]}]},{type:a,tag:g,props:{id:z},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"To link to another page, simply link to its markdown file in "},{type:a,tag:f,props:{},children:[{type:b,value:"[Link to](other-file.md)"}]},{type:b,value:" format as demonstrated below;"}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{href:"content\u002Flinks"},children:[{type:b,value:"Content \u002F Links"}]}]},{type:a,tag:g,props:{id:B},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:"To include an image in markdown, place image files in a folder named "},{type:a,tag:f,props:{},children:[{type:b,value:"-images"}]},{type:b,value:"\nat the same path as that markdown file. For example; if you have a file\n"},{type:a,tag:f,props:{},children:[{type:b,value:"\u002Fcontent\u002Fimages.md"}]},{type:b,value:", place its images in "},{type:a,tag:f,props:{},children:[{type:b,value:"\u002Fcontent\u002F-images"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Demo is at "},{type:a,tag:n,props:{href:"content\u002Fimages"},children:[{type:b,value:"Content \u002F Images"}]}]},{type:a,tag:g,props:{id:D},children:[{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:"We use a preprocessor to generate mermaid diagram images from markdown files.\nBelow is a demonstration of how to draw a diagram;"}]},{type:a,tag:c,props:{},children:[{type:a,tag:"img",props:{alt:"diagram",src:".\u002Fcontent-1.png"},children:[]}]}],toc:{title:l,searchDepth:d,depth:d,links:[{id:r,depth:d,text:s},{id:t,depth:d,text:u},{id:w,depth:d,text:x},{id:z,depth:d,text:A},{id:B,depth:d,text:C},{id:D,depth:d,text:E}]}},_type:"markdown",_id:"content:content.md",_source:q,_file:"content.md",_extension:"md"}},prerenderedAt:1678291800517}}("element","text","p",2,null,"code-inline","h2","td","li","tr","Content","",false,"a","\u002Fcontent",1,"content","conventions","Conventions","code-blocks","Code Blocks",":information_source:","alert-info-tip-box","Alert \u002F Info \u002F Tip Box","th","links","Links","images","Images","mermaid-diagrams","Mermaid Diagrams"))