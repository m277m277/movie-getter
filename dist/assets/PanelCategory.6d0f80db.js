import{S as h}from"./public.74116213.js";import{p as x}from"./path.04d7b619.js";import{c as s}from"./data.984f0aa4.js";import{a as l,b as B,c as D}from"./api.4e22b5af.js";import{F}from"./FlashOutline.106e3a27.js";import{A as k,R as v}from"./RefreshCircleOutline.5d132b32.js";import{e as N,r as z,s as b,z as w,A as t,H as A,B as e,C as n,x as p,_ as u,h as r}from"./index.b5757991.js";import{u as O}from"./use-notification.94911e50.js";import{N as V}from"./Icon.93b8e06a.js";import{_ as c}from"./Space.19c09f4f.js";import{_ as $}from"./Input.d2a77564.js";import{_ as I}from"./DataTable.e0a228e3.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./Tooltip.e60e40cb.js";import"./use-merged-state.2943affb.js";import"./next-frame-once.da993024.js";import"./get-slot.5ad428c3.js";import"./Checkbox.4c7617c5.js";import"./Dropdown.c263331f.js";import"./create.aafe3cda.js";import"./Ellipsis.59aaf728.js";import"./Pagination.4ed9ba69.js";import"./Tag.9478b0e2.js";const R={style:{display:"flex","align-items":"center",height:"100%"}},S={style:{display:"flex","align-items":"center",height:"100%"}},se=N({__name:"PanelCategory",setup(j){x.value=[{name:"\u5206\u7C7B",params:null,to:""}];const _=z([{title:"ID",key:"id",width:100,align:"center"},{title:"\u540D\u5B57",key:"name",align:"center",render(a,o){return r(h,{value:a.name,onUpdateValue(i){s.value[o].name=i}})}},{title:"\u91C7\u96C6\u7C7B\u6570",key:"classNum",width:100,align:"center"},{title:"\u5F71\u7247\u6570",key:"movieNum",width:100,align:"center"},{title:"\u64CD\u4F5C",key:"action",width:"150px",align:"center",render(a,o){return r(c,{justify:"center"},()=>[a.create?r(u,{secondary:!0,type:"info",size:"small",onClick:()=>{B(a.name).then(()=>{l(),m.success({duration:2e3,content:"\u4FDD\u5B58",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u4FDD\u5B58"):null,r(u,{secondary:!0,type:"error",size:"small",onClick:()=>{D(a.id).then(()=>{l(),m.success({duration:2e3,content:"\u5220\u9664",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u5220\u9664")])}}]),m=O();function d(){s.value.push({id:0,name:"\u5F85\u4FDD\u5B58\u5206\u7C7B",classNum:0,movieNum:0,create:!0})}return(a,o)=>{const i=V,f=$,C=I,y=A;return b(),w(y,{title:"\u5206\u7C7B\u7BA1\u7406",size:"small"},{"header-extra":t(()=>[e(n(c),null,{default:t(()=>[e(f,{placeholder:"\u641C\u7D22",disabled:!0,round:""},{prefix:t(()=>[e(i,{component:n(F)},null,8,["component"])]),_:1}),p("div",R,[e(n(u),{text:"",type:"primary",style:{"font-size":"24px"},onClick:o[0]||(o[0]=g=>d())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(k))]),_:1})]),_:1})]),p("div",S,[e(n(u),{text:"",type:"info",style:{"font-size":"24px"},onClick:o[1]||(o[1]=g=>n(l)())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(v))]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(C,{columns:_.value,data:n(s),bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{se as default};