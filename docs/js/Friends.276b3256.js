"use strict";(self["webpackChunk_08_compo_api"]=self["webpackChunk_08_compo_api"]||[]).push([[732],{1499:function(e,r,s){s.r(r),s.d(r,{default:function(){return k}});var a=s(3396),n=s(7139);const i={key:0},u={key:1},o=["src","alt"],t=(0,a._)("br",null,null,-1),c=(0,a.Uk)(" regresar ");function l(e,r,s,l,d,f){const g=(0,a.up)("router-link");return l.friends||l.errorMessage?l.errorMessage?((0,a.wg)(),(0,a.iD)("h1",u,(0,n.zw)(l.errorMessage),1)):((0,a.wg)(),(0,a.iD)(a.HY,{key:2},[(0,a._)("h3",null,(0,n.zw)(l.friends.name),1),(0,a._)("img",{src:l.friends.url,alt:l.friends.name},null,8,o),t,(0,a.Wm)(g,{to:{name:"friends-search"}},{default:(0,a.w5)((()=>[c])),_:1})],64)):((0,a.wg)(),(0,a.iD)("h1",i," Buscando..."))}var d=s(678),f=s(6265),g=s.n(f),p=s(4870);const h=(e="1")=>{const r=(0,p.iH)(),s=(0,p.iH)(!1),a=(0,p.iH)(),n=async e=>{if(e){s.value=!0,r.value=null;try{const{data:s}=await g().get(`https://jugaz.github.io/series-tv-api/json/friends/${e}.json`);r.value=s,a.value=null}catch(n){a.value="No se puedo cargar"}s.value=!1}};return n(e),{errorMessage:a,friends:r,isLoading:s,searchFriends:n}};var m=h,v={setup(){const e=(0,d.yj)(),{errorMessage:r,friends:s,isLoading:n,searchFriends:i}=m(e.params.id);return(0,d.iS)((()=>{const e=window.confirm("¿Está seguro que desea salir?");if(!e)return!1})),(0,a.YP)((()=>e.params.id),(()=>i(e.params.id))),{errorMessage:r,friends:s,isLoading:n}}},w=s(89);const _=(0,w.Z)(v,[["render",l]]);var k=_}}]);
//# sourceMappingURL=Friends.276b3256.js.map