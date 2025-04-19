import{j as a}from"./index-BWz8tt5W.js";const e={primary:{100:"#e0f2fe",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",700:"#374151",800:"#1f2937"},success:{100:"#dcfce7",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534"},warning:{100:"#fef3c7",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e"},error:{100:"#fee2e2",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b"}},g={DEFAULT:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"},f={DEFAULT:"0.375rem",full:"9999px"},$={DEFAULT:"transition-all duration-300 ease-in-out"},b=({children:r,className:s="",hoverable:t=!1,...n})=>a.jsx("div",{className:`
        bg-white
        rounded-lg
        ${g.DEFAULT}
        ${t?`hover:${g.md} ${$.DEFAULT}`:""}
        ${s}
      `,...n,children:r}),y=({children:r,className:s="",...t})=>a.jsx("div",{className:`
        px-6 py-4
        border-b border-gray-200
        ${s}
      `,...t,children:r}),l=({children:r,className:s="",...t})=>a.jsx("div",{className:`
        px-6 py-4
        ${s}
      `,...t,children:r}),u=({children:r,className:s="",...t})=>a.jsx("div",{className:`
        px-6 py-4
        border-t border-gray-200
        ${s}
      `,...t,children:r});b.Header=y;b.Body=l;b.Footer=u;const w=({children:r,variant:s="primary",size:t="md",disabled:n=!1,fullWidth:o=!1,className:i="",...c})=>{const d=`
    inline-flex items-center justify-center
    font-medium rounded-md
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${$.DEFAULT}
    ${o?"w-full":""}
  `,x={primary:`
      bg-${e.primary[600]}
      text-white
      hover:bg-${e.primary[700]}
      focus:ring-${e.primary[500]}
      disabled:bg-${e.primary[400]}
    `,secondary:`
      bg-white
      text-${e.gray[700]}
      border border-${e.gray[300]}
      hover:bg-${e.gray[50]}
      focus:ring-${e.primary[500]}
      disabled:bg-${e.gray[100]}
      disabled:text-${e.gray[400]}
    `,success:`
      bg-${e.success[600]}
      text-white
      hover:bg-${e.success[700]}
      focus:ring-${e.success[500]}
      disabled:bg-${e.success[400]}
    `,warning:`
      bg-${e.warning[600]}
      text-white
      hover:bg-${e.warning[700]}
      focus:ring-${e.warning[500]}
      disabled:bg-${e.warning[400]}
    `,error:`
      bg-${e.error[600]}
      text-white
      hover:bg-${e.error[700]}
      focus:ring-${e.error[500]}
      disabled:bg-${e.error[400]}
    `},p={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"};return a.jsx("button",{className:`
        ${d}
        ${x[s]}
        ${p[t]}
        ${i}
      `,disabled:n,...c,children:r})},h=({children:r,variant:s="default",size:t="md",className:n="",...o})=>{const i=`
    inline-flex items-center font-medium
    ${f.DEFAULT}
  `,c={default:`
      bg-${e.gray[100]}
      text-${e.gray[800]}
    `,primary:`
      bg-${e.primary[100]}
      text-${e.primary[800]}
    `,success:`
      bg-${e.success[100]}
      text-${e.success[800]}
    `,warning:`
      bg-${e.warning[100]}
      text-${e.warning[800]}
    `,error:`
      bg-${e.error[100]}
      text-${e.error[800]}
    `},d={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-0.5 text-sm",lg:"px-3 py-1 text-base"};return a.jsx("span",{className:`
        ${i}
        ${c[s]}
        ${d[t]}
        ${n}
      `,...o,children:r})};export{w as B,b as C,h as a,f as b,e as c,$ as t};
