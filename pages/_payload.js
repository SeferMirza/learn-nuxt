export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:{"content-query-IHEGqZI4XK":[{_path:"\u002Fcontent",title:u,position:1},{_path:v,title:n,position:e},{_path:"\u002Fvue-files",title:"Vue Files",position:h},{_path:"\u002Fcomponents",title:"Components",position:4},{_path:"\u002Frouting",title:w,position:5},{_path:"\u002Fconfiguration",title:"Configuration",position:6},{_path:"\u002Fsetup-guide",title:"Setup Guide",position:100},{_path:"\u002Fbuild-and-run",title:"Build & Run",position:101},{_path:"\u002Fcontributing",title:"Contributing",position:102}],"content-query-r2kwVMYPck":{_path:v,_dir:o,_draft:p,_partial:p,_locale:o,_empty:p,title:n,description:"You can create pages under .theme\u002Fpages\u002F.",position:e,body:{type:"root",children:[{type:b,tag:"h1",props:{id:"pages"},children:[{type:a,value:n}]},{type:b,tag:d,props:{},children:[{type:a,value:"You can create pages under "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpages\u002F"}]},{type:a,value:i}]},{type:b,tag:k,props:{id:x},children:[{type:a,value:y}]},{type:b,tag:d,props:{},children:[{type:a,value:"Content page is a page that uses "},{type:b,tag:c,props:{},children:[{type:a,value:"\u003CContentDoc \u002F\u003E"}]},{type:a,value:" which renders given markdown\ncontent as html. It is at "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpages\u002F[...content-page].vue"}]},{type:a,value:" which has a\ncatch all route to handle any markdown file in any directory."}]},{type:b,tag:l,props:{id:z},children:[{type:a,value:A},{type:b,tag:c,props:{},children:[{type:a,value:q}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"We needed to load all markdown content under a folder in one page. To achieve\nthis we used "},{type:b,tag:c,props:{},children:[{type:a,value:q}]},{type:a,value:" by which you can retrieve content under "},{type:b,tag:c,props:{},children:[{type:a,value:"content\u002F"}]},{type:a,value:"\nfolder."}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:r}]},{type:b,tag:d,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"find"}]},{type:a,value:B},{type:b,tag:c,props:{},children:[{type:a,value:"findOne"}]},{type:a,value:" methods return "},{type:b,tag:c,props:{},children:[{type:a,value:"promise"}]},{type:a,value:" so you need to wait with "},{type:b,tag:c,props:{},children:[{type:a,value:"await"}]},{type:a,value:i}]}]},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:g,props:{href:C},children:[{type:a,value:C}]}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:b,tag:d,props:{},children:[{type:a,value:"We've disabled "},{type:b,tag:c,props:{},children:[{type:a,value:D}]},{type:a,value:E},{type:b,tag:c,props:{},children:[{type:a,value:F}]},{type:a,value:" options to avoid extra queries\nwhen a page is loaded. You might reenable these depending on the theme you\nare using."}]}]},{type:b,tag:l,props:{id:G},children:[{type:a,value:A},{type:b,tag:c,props:{},children:[{type:a,value:j}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"We needed to load all markdown content under a folder on a single page. When\nthere is no need to change the data we receive with "},{type:b,tag:c,props:{},children:[{type:a,value:q}]},{type:a,value:" in the\nscript block, the query sent to the content with "},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:" was made to\nreduce the crowd in the script."}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:b,tag:d,props:{},children:[{type:a,value:"Use "},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:" only if you know what you're doing, because it works in\nthe render stage. Otherwise, we strongly suggest usage of "},{type:b,tag:c,props:{},children:[{type:a,value:H}]},{type:a,value:"\nwhich runs once in setup stage."}]}]},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:g,props:{href:I},children:[{type:a,value:I}]}]},{type:b,tag:l,props:{id:J},children:[{type:a,value:K}]},{type:b,tag:d,props:{},children:[{type:a,value:"We don't use document-driven mode even if it's a website that contains only\nmarkdown content. This is because all it does is to register a page with\ncatch-all route along with extra queries like "},{type:b,tag:c,props:{},children:[{type:a,value:D}]},{type:a,value:B},{type:b,tag:c,props:{},children:[{type:a,value:F}]},{type:a,value:" which\ncould be unncessary in your theme. If you need to render navigation menu etc.,\nuse "},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:L},{type:b,tag:c,props:{},children:[{type:a,value:H}]},{type:a,value:" queries."}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:b,tag:d,props:{},children:[{type:a,value:"This project contains pages without a corresponding markdown content under\n"},{type:b,tag:c,props:{},children:[{type:a,value:M}]},{type:a,value:" path. When you enable document-driven mode, dynamic pages under\n"},{type:b,tag:c,props:{},children:[{type:a,value:M}]},{type:a,value:" will not work."}]}]},{type:b,tag:k,props:{id:N},children:[{type:a,value:O}]},{type:b,tag:d,props:{},children:[{type:a,value:"You can visit "},{type:b,tag:g,props:{href:".\u002Frouting"},children:[{type:a,value:w}]},{type:a,value:" to learn how to create custom pages for\ndifferent types of routes."}]},{type:b,tag:k,props:{id:P},children:[{type:a,value:Q}]},{type:b,tag:d,props:{},children:[{type:a,value:"We used layout to seperate header and sidebar components from pages. For nuxt\nto recognize layouts, they should be implemented in "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Flayout"}]},{type:a,value:" folder. To\ncreate a layout create a "},{type:b,tag:c,props:{},children:[{type:a,value:"default.vue"}]},{type:a,value:" in the layout folder. Our implementation\nis at "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Flayout\u002Fdefault.vue"}]},{type:a,value:". For layout to be used in every page it needs\nto be added to "},{type:b,tag:c,props:{},children:[{type:a,value:"app.vue"}]},{type:a,value:" as shown in "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fapp.vue"}]},{type:a,value:i}]},{type:b,tag:l,props:{id:R},children:[{type:a,value:S}]},{type:b,tag:d,props:{},children:[{type:a,value:"To serve static assets in a theme like "},{type:b,tag:c,props:{},children:[{type:a,value:".css"}]},{type:a,value:L},{type:b,tag:c,props:{},children:[{type:a,value:T}]},{type:a,value:" files simply put any\nfile under "},{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:" folder. It will be served at the root path. E.g.\n"},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpublic\u002Flogo.png"}]},{type:a,value:" will be at "},{type:b,tag:c,props:{},children:[{type:a,value:"\u002Flogo.png"}]},{type:a,value:i}]},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:g,props:{href:U},children:[{type:a,value:U}]},{type:a,value:i}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:r}]},{type:b,tag:d,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:T}]},{type:a,value:" from content images or generated diagrams should be served under\n"},{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:" but they shouldn't be included in git. To preserve the\ndefault behaviour while solving this problem, we change public assets folder\nfrom "},{type:b,tag:c,props:{},children:[{type:a,value:t}]},{type:a,value:" to "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002F.public"}]},{type:a,value:" via "},{type:b,tag:c,props:{},children:[{type:a,value:"dir.public"}]},{type:a,value:" in\n"},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fnuxt.config.ts"}]},{type:a,value:" and copy public assets, content images and generated\ndiagrams into "},{type:b,tag:c,props:{},children:[{type:a,value:".public"}]},{type:a,value:" during preprocessing."}]}]},{type:b,tag:k,props:{id:V},children:[{type:a,value:W}]},{type:b,tag:d,props:{},children:[{type:a,value:"When we use "},{type:b,tag:X,props:{},children:[{type:a,value:"Nuxt"}]},{type:a,value:" "},{type:b,tag:X,props:{},children:[{type:a,value:u}]},{type:a,value:" components "},{type:b,tag:c,props:{},children:[{type:a,value:"\u003CContentDoc\u003E"}]},{type:a,value:E},{type:b,tag:c,props:{},children:[{type:a,value:j}]},{type:a,value:", we\nconfigure the error content with "},{type:b,tag:c,props:{},children:[{type:a,value:Y}]},{type:a,value:" when the component cannot find\nthe markdown file it is looking for. To keep with the concept of managing the\ncontent of each page with markdown, we get the "},{type:b,tag:c,props:{},children:[{type:a,value:Y}]},{type:a,value:" content from the\n"},{type:b,tag:c,props:{},children:[{type:a,value:"not-found.md"}]},{type:a,value:" file."}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:r}]},{type:b,tag:d,props:{},children:[{type:a,value:"If you are getting the not-found content from markdown you should add a link\nto "},{type:b,tag:c,props:{},children:[{type:a,value:"generate.routes"}]},{type:a,value:". See\n"},{type:b,tag:g,props:{href:"\u002Fconfiguration#generate-routes"},children:[{type:a,value:"Configuration \u002F Generate Routes"}]},{type:a,value:" for details."}]}]},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:g,props:{href:Z},children:[{type:a,value:Z}]}]}],toc:{title:o,searchDepth:e,depth:e,links:[{id:x,depth:e,text:y,children:[{id:z,depth:h,text:"Querying with queryContent"},{id:G,depth:h,text:"Querying with \u003CContentQuery\u003E"},{id:J,depth:h,text:K}]},{id:N,depth:e,text:O},{id:P,depth:e,text:Q,children:[{id:R,depth:h,text:S}]},{id:V,depth:e,text:W}]}},_type:"markdown",_id:"content:pages.md",_source:"content",_file:"pages.md",_extension:"md"}},prerenderedAt:1686143176322}}("text","element","code-inline","p",2,"blockquote","a",3,".","\u003CContentQuery\u003E","h2","h3","Demo is at ","Pages","",false,"queryContent",":information_source:",":warning:",".theme\u002Fpublic","Content","\u002Fpages","Routing","content-page","Content Page","querying-with-querycontent","Querying with ",", ","\u002Fdemo\u002Fquery-content","navigation"," and ","surround","querying-with-contentquery","queryContent()","\u002Fdemo\u002Fcontent-query","about-document-driven-mode","About Document-Driven Mode"," or ","\u002Fdemo","custom-pages","Custom Pages","layout","Layout","public-assets","Public Assets",".png","\u002Fdemo\u002Fpublic-assets","404-not-found","404 - Not Found","em","#not-found","\u002Fdemo\u002Ferror\u002Fnon-existent-content"))