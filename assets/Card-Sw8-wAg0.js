import{j as s}from"./index-CeUv-Fbt.js";const x={primary:{100:"#e0f2fe",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",700:"#374151",800:"#1f2937"},success:{100:"#dcfce7",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534"},warning:{100:"#fef3c7",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e"},error:{100:"#fee2e2",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b"}},o={DEFAULT:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"},i={DEFAULT:"0.375rem",full:"9999px"},c={DEFAULT:"transition-all duration-300 ease-in-out"},d=({children:r,className:e="",hoverable:a=!1,...t})=>s.jsx("div",{className:`
        bg-white
        rounded-lg
        ${o.DEFAULT}
        ${a?`hover:${o.md} ${c.DEFAULT}`:""}
        ${e}
      `,...t,children:r}),b=({children:r,className:e="",...a})=>s.jsx("div",{className:`
        px-6 py-4
        border-b border-gray-200
        ${e}
      `,...a,children:r}),f=({children:r,className:e="",...a})=>s.jsx("div",{className:`
        px-6 py-4
        ${e}
      `,...a,children:r}),n=({children:r,className:e="",...a})=>s.jsx("div",{className:`
        px-6 py-4
        border-t border-gray-200
        ${e}
      `,...a,children:r});d.Header=b;d.Body=f;d.Footer=n;export{d as C,i as b,x as c,c as t};
