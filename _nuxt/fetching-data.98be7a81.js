import{j as _,r as v,k as G,l as b,b as h,e as t,d as o,t as n,u as i,F as x,h as A,o as d}from"./entry.981ae92b.js";import{u as C}from"./asyncData.fa76b86d.js";function F(){const a="https://api.github.com";async function s(e){return await $fetch(_(a,"repos",e,"stats/contributors"),{method:"GET",headers:{"X-GitHub-Api-Version":"2022-11-28"}})}async function r(e){return await $fetch(_(a,"repos",e),{method:"GET",headers:{"X-GitHub-Api-Version":"2022-11-28"}})}async function l(e){return await $fetch(_(a,"orgs",e),{method:"GET",headers:{"X-GitHub-Api-Version":"2022-11-28"}})}return{getContributorStats:s,getRepository:r,getOrganization:l}}const O={class:"container"},T={class:"organization"},B=t("h2",null,"Fetch Once - Server or Client",-1),S=t("strong",null,"Organization:",-1),V=t("br",null,null,-1),$=t("strong",null,"Public repositories count:",-1),k={class:"repository"},D=t("h2",null,"Fetch Once - Only Client",-1),E=t("strong",null,"Repository:",-1),H=t("br",null,null,-1),N=t("strong",null,"Description:",-1),R=t("h2",null,"Fetch Twice - Server and Client",-1),X={class:"contributors"},j={class:"contributor"},L=["src"],M=t("strong",null,"Total commits:",-1),w="mouseless",I={__name:"fetching-data",async setup(a){let s,r;const{getContributorStats:l,getRepository:e,getOrganization:z}=F(),p=`${w}/learn-nuxt`,u=v([]),g=v(),{data:m}=([s,r]=G(()=>C(()=>z(w),"$p36AzrYbr0")),s=await s,r(),s);return b(async()=>u.value=await e(p)),b(async()=>g.value=await l(p)),(P,U)=>{var y,f;return d(),h("div",O,[t("div",T,[B,t("div",null,[S,o(" "+n(i(m).name)+" ",1),V,$,o(" "+n(i(m).public_repos),1)])]),t("div",k,[D,t("div",null,[E,o(" "+n((y=i(u))==null?void 0:y.name)+" ",1),H,N,o(" "+n((f=i(u))==null?void 0:f.description),1)])]),t("div",null,[R,t("div",X,[(d(!0),h(x,null,A(i(g),c=>(d(),h("div",{key:c.author.login},[t("div",j,[t("img",{class:"profile-image",src:c.author.avatar_url},null,8,L),t("h3",null,n(c.author.login),1),t("p",null,[M,o(" "+n(c.total),1)])])]))),128))])])])}}};export{I as default};
