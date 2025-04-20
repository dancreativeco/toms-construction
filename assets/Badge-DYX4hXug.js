import{j as $}from"./index-CeUv-Fbt.js";import{t as m,c as r,b as x}from"./Card-Sw8-wAg0.js";const d=({children:e,variant:s="primary",size:t="md",disabled:a=!1,fullWidth:i=!1,className:n="",...o})=>{const g=`
    inline-flex items-center justify-center
    font-medium rounded-md
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${m.DEFAULT}
    ${i?"w-full":""}
  `,c={primary:`
      bg-${r.primary[600]}
      text-white
      hover:bg-${r.primary[700]}
      focus:ring-${r.primary[500]}
      disabled:bg-${r.primary[400]}
    `,secondary:`
      bg-white
      text-${r.gray[700]}
      border border-${r.gray[300]}
      hover:bg-${r.gray[50]}
      focus:ring-${r.primary[500]}
      disabled:bg-${r.gray[100]}
      disabled:text-${r.gray[400]}
    `,success:`
      bg-${r.success[600]}
      text-white
      hover:bg-${r.success[700]}
      focus:ring-${r.success[500]}
      disabled:bg-${r.success[400]}
    `,warning:`
      bg-${r.warning[600]}
      text-white
      hover:bg-${r.warning[700]}
      focus:ring-${r.warning[500]}
      disabled:bg-${r.warning[400]}
    `,error:`
      bg-${r.error[600]}
      text-white
      hover:bg-${r.error[700]}
      focus:ring-${r.error[500]}
      disabled:bg-${r.error[400]}
    `},b={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return $.jsx("button",{className:`
        ${g}
        ${c[s]}
        ${b[t]}
        ${n}
      `,disabled:a,...o,children:e})},l=({children:e,variant:s="default",size:t="md",className:a="",...i})=>{const n=`
    inline-flex items-center font-medium
    ${x.DEFAULT}
  `,o={default:`
      bg-${r.gray[100]}
      text-${r.gray[800]}
    `,primary:`
      bg-${r.primary[100]}
      text-${r.primary[800]}
    `,success:`
      bg-${r.success[100]}
      text-${r.success[800]}
    `,warning:`
      bg-${r.warning[100]}
      text-${r.warning[800]}
    `,error:`
      bg-${r.error[100]}
      text-${r.error[800]}
    `},g={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-0.5 text-sm",lg:"px-3 py-1 text-base"};return $.jsx("span",{className:`
        ${n}
        ${o[s]}
        ${g[t]}
        ${a}
      `,...i,children:e})};export{d as B,l as a};
