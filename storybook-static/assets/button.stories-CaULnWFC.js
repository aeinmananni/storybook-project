import{j as n}from"./jsx-runtime-CLpGMVip.js";const _=i=>{let r="";switch(i){case"success":r="bg-green-500";break;case"error":r="bg-red-500";break;case"disabled":r="bg-gray-300";break;case"primary":r="bg-blue-500";break;default:r="";break}return{backgroundColor:r}};function t({varient:i,...r}){const{backgroundColor:S}=_(i);return n.jsx("button",{...r,className:`${S} text-white py-1 w-full rounded-md duration-500 active:scale-90 ${r.className}`,children:r.children})}t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{varient:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "primary" | "disabled"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"disabled"'}]},description:""}}};const C={title:"Form/Button",component:t},e={args:{onClick:()=>console.log("My Button"),className:"!w-1/6",varient:"primary",children:"Primary"}},c={args:{...e.args,onClick:()=>console.log("My Body"),varient:"success",children:n.jsx("h1",{children:"my Long Button"})}},s=()=>n.jsx(t,{varient:"success",className:"!w-1/6",children:"Success"}),a=()=>n.jsx(t,{varient:"error",children:"Error"}),o=()=>n.jsx(t,{varient:"disabled",children:"Disable"});s.__docgenInfo={description:"",methods:[],displayName:"Success"};a.__docgenInfo={description:"",methods:[],displayName:"Error"};o.__docgenInfo={description:"",methods:[],displayName:"Disable"};var l,d,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onClick: () => console.log("My Button"),
    className: "!w-1/6",
    varient: "primary",
    children: "Primary"
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    onClick: () => console.log("My Body"),
    varient: "success",
    children: <h1>my Long Button</h1>
  }
}`,...(g=(p=c.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,b,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <Button varient="success" className="!w-1/6">\r
      Success\r
    </Button>;
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,B,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Button varient="error">Error</Button>;
}`,...(k=(B=a.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var f,x,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Button varient="disabled">Disable</Button>;
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const j=["Primary","LongPrimary","Success","Error","Disable"];export{o as Disable,a as Error,c as LongPrimary,e as Primary,s as Success,j as __namedExportsOrder,C as default};
