import{j as v}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const y=({label:s,size:g="normal",allCaps:h=!1,color:x,fontColor:z})=>v.jsx("span",{className:`label ${g} ${x||""}`,style:{color:z},children:h?s.toUpperCase():s});y.__docgenInfo={description:"",methods:[],displayName:"Label",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"All caps",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const L={title:"UI/labels/label",component:y,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:{type:"inline-radio"}},color:{control:{type:"color"}}}},e={args:{label:"Label",size:"normal",allCaps:!1}},a={args:{label:"All Caps label",size:"h1",allCaps:!0}},l={args:{label:"Secondary label",size:"h2",color:"text-primary",allCaps:!1}},r={args:{label:"Custom Color label",size:"h3",fontColor:"#00ff00",allCaps:!1}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'normal',
    allCaps: false
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    size: 'h1',
    allCaps: true
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    size: 'h2',
    color: "text-primary",
    allCaps: false
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,C,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    size: 'h3',
    fontColor: '#00ff00',
    allCaps: false
  }
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const q=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,r as CustomColor,l as Secondary,q as __namedExportsOrder,L as default};
