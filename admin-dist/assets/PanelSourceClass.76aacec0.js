import{d as h,bB as y,r as c,q as x,by as b,Q as B,Z as N,T as a,b6 as k,S as e,X as o,U as d,bl as i,h as s}from"./index.4c1dfbbb.js";import{p as D}from"./path.e28dce16.js";import{u as v,n as F,o as I,p as S}from"./api.ffde16e9.js";import{C as w}from"./data.82102eaf.js";import{F as z,A as V,R as A}from"./RefreshCircleOutline.617368d9.js";import{N as E,_ as O}from"./DataTable.da2467b6.js";import{N as R,_ as p}from"./Space.4f7edd38.js";import{N as U}from"./Switch.a21d81d2.js";import{_ as P}from"./Input.7226f636.js";import"./Checkbox.7bdea7db.js";import"./Dropdown.e5280587.js";import"./next-frame-once.da993024.js";const j={style:{display:"flex","align-items":"center",height:"100%"}},q={style:{display:"flex","align-items":"center",height:"100%"}},ee=h({__name:"PanelSourceClass",setup(G){const _=y(),m=v();D.value=[{name:"\u91C7\u96C6\u6E90",params:null,to:""},{name:"\u91C7\u96C6\u7C7B",params:null,to:""}];const l=c([]);x(()=>{b(()=>{F(Number(_.params.id),l)})});const f=c([{title:"ID",key:"id",width:100,align:"center"},{title:"\u540D\u5B57",key:"name",align:"center"},{title:"\u662F\u5426\u91C7\u96C6",key:"get",width:200,align:"center",render(t,u){return s(U,{value:t.get,onUpdateValue:n=>{I(t.id,n).then(()=>{t.get=n})}})}},{title:"\u6240\u5C5E\u5206\u7C7B",key:"categoryId",width:200,align:"center",render(t,u){return s(E,{value:t.categoryId,options:w.value,onUpdateValue:(n,r)=>{S(t.id,n).then(()=>{t.categoryId=n,m.success({duration:1500,content:"\u5206\u914D\u91C7\u96C6\u7C7B",meta:"\u64CD\u4F5C\u6210\u529F"})})}})}},{title:"\u64CD\u4F5C",key:"action",width:"150px",align:"center",render(t,u){return s(p,{justify:"center"},()=>s(i,{secondary:!0,type:"error",size:"small",disabled:!0,onClick:()=>{}},()=>"\u5220\u9664"))}}]);return(t,u)=>{const n=R,r=P,C=O,g=k;return B(),N(g,{title:"\u5206\u7C7B\u7BA1\u7406",size:"small"},{"header-extra":a(()=>[e(o(p),null,{default:a(()=>[e(r,{placeholder:"\u641C\u7D22",round:"",disabled:""},{prefix:a(()=>[e(n,{component:o(z)},null,8,["component"])]),_:1}),d("div",j,[e(o(i),{text:"",type:"primary",style:{"font-size":"24px"},disabled:""},{default:a(()=>[e(n,null,{default:a(()=>[e(o(V))]),_:1})]),_:1})]),d("div",q,[e(o(i),{text:"",type:"info",style:{"font-size":"24px"}},{default:a(()=>[e(n,null,{default:a(()=>[e(o(A))]),_:1})]),_:1})])]),_:1})]),default:a(()=>[e(C,{columns:f.value,data:l.value,bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{ee as default};
