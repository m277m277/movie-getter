import{_ as x,a as k}from"./bar.40617cfc.js";import{d as w,b0 as B,r as s,l as m,x as V,c as i,w as p,s as j,_ as I,o as l,b as n,z as R,i as S,A as q,k as z,h as A,a as E,C as P,q as U}from"./index.460b4d4d.js";import{_ as $}from"./Pagination.51c2c8a7.js";import{a as D}from"./Space.6838c3e2.js";import"./Spin.a1a6e225.js";import"./Close.506a5cfa.js";const F={class:"pagination"},G=w({__name:"category",setup(H){const g=B(),e=j(),d=z(),a=s(e.params.pageNum?isNaN(Number(e.params.pageNum))?1:Number(e.params.pageNum):1),o=s(0),u=s([]),c=s("");function v(){c.value=g.Id_to_name(Number(e.params.id)),E(P+"/"+e.params.id,{pg:a.value,num:30},t=>{o.value=t.pgCount,u.value=t.movies,a.value>o.value&&(a.value=o.value>1?o.value:1)})}return m(v),m(()=>{a.value>0&&d.push({name:"category-page",params:{id:e.params.id,pageNum:a.value}})}),V(()=>e.params.id,()=>{a.value=1}),(t,r)=>{const _=A,f=x,N=k,y=$,b=D,C=I;return l(),i(C,{cols:"10","item-responsive":"",responsive:"screen"},{default:p(()=>[n(_,{span:"0 m:2 l:2"}),n(_,{span:"10 m:6 l:6"},{default:p(()=>[n(f,{name:c.value,id:Number(R(e).params.id)},null,8,["name","id"]),n(N,{movies:u.value},null,8,["movies"]),S("div",F,[o.value>1?(l(),i(b,{key:0,justify:"center"},{default:p(()=>[n(y,{page:a.value,"onUpdate:page":r[0]||(r[0]=h=>a.value=h),"page-count":o.value,"page-slot":7},null,8,["page","page-count"])]),_:1})):q("",!0)])]),_:1}),n(_,{span:"0 m:2 l:2"})]),_:1})}}});const T=U(G,[["__scopeId","data-v-58e9c1bc"]]);export{T as default};