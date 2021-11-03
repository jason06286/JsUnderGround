import{r as N,o as u,c as d,a as r,b as f,w as A,F as b,d as w,e as h,t as v,f as k,g as S,h as y,i as W,j as R,k as C}from"./vendor.3d979492.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function l(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(a){if(a.ep)return;a.ep=!0;const s=l(a);fetch(a.href,s)}};I();var z=(i,t)=>{for(const[l,e]of t)i[l]=e;return i};const O={};function H(i,t,l,e,a,s){const n=N("router-view");return u(),d("div",null,[r(n)])}var $=z(O,[["render",H]]);const M={setup(i){return{linksArray:f([{to:"/lv9",name:"TurnTableLv9"}])}}},G={class:"flex items-center justify-center w-full h-screen bg-gray-700"},U=h("Home");function V(i,t,l,e,a,s){const n=N("router-link");return u(),d("div",G,[r(n,{to:"/",class:"px-5 py-3 mx-3 bg-gray-500 border rounded hover:bg-gray-400"},{default:A(()=>[U]),_:1}),(u(!0),d(b,null,w(e.linksArray,p=>(u(),d(n,{to:p.to,class:"px-5 py-3 mx-3 bg-gray-500 border rounded hover:bg-gray-400",key:p.name},{default:A(()=>[h(v(p.name),1)]),_:2},1032,["to"]))),128))])}var Y=z(M,[["render",V]]);const q={setup(){const i=f(null),t=f([]),l=f([]),e=f(17),a=f(0),s=f(0),n=f(""),p=f(!1),g=f(!1);async function P(){const o=await(await fetch("/JsUnderGround/api/prize.json")).json();t.value=o[0].prizes2017,l.value=o[0].prizes2018}const E=k(()=>{const o=m=>m===17?t.value.map((x,c,_)=>`rotate(${360/_.length*c}deg)`):l.value.map((x,c,_)=>`rotate(${360/_.length*c}deg)`);return{year17:o(17),year18:o(18)}}),D=k(()=>{const o=()=>e.value===17?`rotate(${360/t.value.length}deg)`:`rotate(${360/l.value.length}deg)`;return{year17:o(17),year18:o(18)}}),F=k(()=>{const o=()=>e.value===17?{transform:`rotate(${360/t.value.length/2}deg)`}:{transform:`rotate(${360/l.value.length/2}deg)`};return{year17:o(17),year18:o(18)}});function T(){p.value=!1,g.value=!1,B(e.value),n.value="";let o=[];e.value===17?t.value.forEach((m,x)=>{for(let c=0;c<m.amount;c++)o.push(x)}):l.value.forEach((m,x)=>{for(let c=0;c<m.amount;c++)o.push(x)}),a.value=o[Math.floor(Math.random()*o.length)],j()}function j(){let o=[];e.value===17?o=t.value.map((x,c,_)=>360/_.length*c):o=l.value.map((x,c,_)=>360/_.length*c);let m=o[a.value];i.value.classList.add("animate"),m-s.value<180?i.value.style.transform=`rotate(${m+1080}deg)`:i.value.style.transform=`rotate(${m+720}deg)`,s.value=m,setTimeout(()=>{i.value.classList.remove("animate"),i.value.style.transform=`rotate(${s.value}deg)`,e.value===17?(p.value=!0,n.value=t.value[a.value].prizeName,t.value[a.value].amount-=1):(g.value=!0,n.value=l.value[a.value].prizeName,l.value[a.value].amount-=1)},2e3)}function B(){if(e.value===17){if(t.value.length<0)return;t.value=t.value.filter(o=>o.amount>0)}else{if(l.value.length<0)return;l.value=l.value.filter(o=>o.amount>0)}}return S(()=>{P()}),{prizes17:t,prizes18:l,eachRotDeg:E,eachPercent:D,awardItemDeg:F,hand:i,pickPrize:T,windIndex:a,prizeWindName:n,year:e,isShow17:p,isShow18:g}}},J={class:"bg-[#5858B9]"},K={class:"absolute z-30 top-10 left-10"},Q={key:0,class:"relative flex items-center justify-center w-full h-screen overflow-hidden "},X={class:`
          md:w-[540px] md:h-[540px]
          w-[270px]
          h-[270px]
          bg-whell
          relative
          turnTable17
          z-10
        `},Z={class:"material-icons md:text-[48px] text-[32px]"},ee=h(" PRESS "),te={class:"hand",style:{"--handRotate":"360deg"},ref:"hand"},ne={key:0,class:`
          md:h-[400px]
          h-[200px]
          hidden
          bg-[#343BAA]
          text-white
          absolute
          inset-0
          sm:flex
          m-auto
          justify-around
          items-center
        `},re=r("p",{class:"font-black md:text-[72px] text-[36px]"},[h(" WELL "),r("br"),h(" DONE! ")],-1),ae=r("div",{class:"md:w-[540px] md:h-[540px] w-[270px] h-[270px] mr-20"},null,-1),oe={class:"font-black"},le=r("p",{class:"text-2xl md:text-3xl"},"YOU GET A FREE ...",-1),se={class:"underline text-[#FF00BA] md:text-[72px] text-[36px]"},ie={key:1,class:"relative flex items-center justify-center w-full h-screen overflow-hidden "},ce={class:`
          md:w-[540px] md:h-[540px]
          w-[270px]
          h-[270px]
          bg-whell
          relative
          turnTable18
          z-10
        `},ue=h(" PRESS "),de={class:"hand",style:{"--handRotate":"360deg"},ref:"hand"},pe={key:0,class:`
          md:h-[400px]
          h-[200px]
          hidden
          bg-[#343BAA]
          text-white
          absolute
          inset-0
          sm:flex
          m-auto
          justify-around
          items-center
        `},me=r("p",{class:"font-black md:text-[72px] text-[36px]"},[h(" WELL "),r("br"),h(" DONE! ")],-1),fe=r("div",{class:"md:w-[540px] md:h-[540px] w-[270px] h-[270px] mr-20"},null,-1),he={class:"font-black"},ve=r("p",{class:"text-2xl md:text-3xl"},"YOU GET Number ...",-1),xe={class:"underline text-[#FF00BA] md:text-[72px] text-[36px]"};function _e(i,t,l,e,a,s){return u(),d("div",J,[r("div",K,[r("button",{type:"button",class:["px-5 py-3 font-black bg-gray-500 rounded hover:bg-gray-200",{"bg-red-400":e.year===17}],onClick:t[1]||(t[1]=n=>e.year=17)}," 2017 ",2),r("button",{type:"button",class:["px-5 py-3 ml-5 font-black bg-gray-500 rounded hover:bg-gray-200",{"bg-red-400":e.year===18}],onClick:t[2]||(t[2]=n=>e.year=18)}," 2018 ",2)]),e.year===17?(u(),d("div",Q,[r("ul",X,[(u(!0),d(b,null,w(e.prizes17,(n,p)=>(u(),d("li",{class:["absolute w-full h-full overflow-hidden rounded-full",[e.prizeWindName===n.prizeName&&"choiced-style"]],key:n.prizeName,style:[{"clip-path":"polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)"},{"--eachPercent":e.eachPercent.year17,transform:e.eachRotDeg.year17[p]}]},[r("div",{class:[`
              md:pt-8
              pt-3
              text-center
              awardItem
              font-black
              text-[#343BAA]
              md:text-3xl
              text-base
              h-1/2
              origin-bottom
            `,[e.prizeWindName===n.prizeName&&"choiced-style"]],style:e.awardItemDeg.year17},[r("span",Z,v(n.iconClassName),1),r("p",null,v(n.prizeName),1),r("p",null,"("+v(n.amount)+")",1)],6)],6))),128))]),r("div",{class:`
          md:w-[128px] md:h-[128px]
          w-[64px]
          h-[64px]
          absolute
          inset-0
          m-auto
          rounded-full
          bg-[#1F1172]
          text-[#F101B5]
          font-black
          flex
          items-center
          justify-center
          md:text-3xl
          text-base
          hover:bg-gray-300
          cursor-pointer
          z-20
        `,onClick:t[3]||(t[3]=n=>e.pickPrize(17))},[ee,r("div",te,null,512)]),e.isShow17?(u(),d("div",ne,[re,ae,r("div",oe,[le,r("p",se,v(e.prizeWindName),1)])])):y("",!0)])):y("",!0),e.year===18?(u(),d("div",ie,[r("ul",ce,[(u(!0),d(b,null,w(e.prizes18,(n,p)=>(u(),d("li",{class:["absolute w-full h-full overflow-hidden rounded-full",[e.prizeWindName===n.prizeName&&"choiced-style"]],key:n.prizeName,style:[{"clip-path":"polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)"},{"--eachPercent":e.eachPercent.year18,transform:e.eachRotDeg.year18[p]}]},[r("div",{class:[`
              md:pt-8
              pt-3
              text-center
              awardItem
              font-black
              text-[#343BAA]
              md:text-3xl
              text-base
              h-1/2
              origin-bottom
            `,[e.prizeWindName===n.prizeName&&"choiced-style"]],style:e.awardItemDeg.year18},[r("p",null,v(n.prizeName),1),r("p",null,"("+v(n.amount)+")",1)],6)],6))),128))]),r("div",{class:`
          md:w-[128px] md:h-[128px]
          w-[64px]
          h-[64px]
          absolute
          inset-0
          m-auto
          rounded-full
          bg-[#1F1172]
          text-[#F101B5]
          font-black
          flex
          items-center
          justify-center
          md:text-3xl
          text-base
          hover:bg-gray-300
          cursor-pointer
          z-20
        `,onClick:t[4]||(t[4]=n=>e.pickPrize())},[ue,r("div",de,null,512)]),e.isShow18?(u(),d("div",pe,[me,fe,r("div",he,[ve,r("p",xe,v(e.prizeWindName),1)])])):y("",!0)])):y("",!0)])}var ye=z(q,[["render",_e]]);const ge=[{path:"/",name:"Home",component:Y},{path:"/lv9",name:"lv9",component:ye}],be=W({history:R(),routes:ge}),L=C($);L.use(be);L.mount("#app");
