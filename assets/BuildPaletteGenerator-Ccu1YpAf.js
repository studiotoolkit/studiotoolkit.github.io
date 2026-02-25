import{c as fe,r as Z,j as a,H as ye,F as xe}from"./index-BDGaIHWC.js";import{a as be,b as _e,c as ve,d as je,e as Ne,f as Ce,s as Se,g as Oe}from"./select60-30-10-B9NDgKCs.js";function $e(){const e=fe.c(95),[n,de]=Z.useState(`{
  "harmonyPalette": ["#3498db"]
}`),[l,ge]=Z.useState(9),[c,s]=Z.useState(""),[ee,o]=Z.useState("harmony");let I;e[0]!==l||e[1]!==n?(I=()=>{o("harmony");try{const t=JSON.parse(n),r=be(t,l);s(JSON.stringify(r,null,2))}catch(t){s("Invalid input or error generating palettes: "+t.message)}},e[0]=l,e[1]=n,e[2]=I):I=e[2];const te=I;let G;e[3]!==l||e[4]!==n?(G=()=>{o("perceptual");try{const t=JSON.parse(n),r=_e(t,l);s(JSON.stringify(r,null,2))}catch(t){s("Invalid input or error generating palettes: "+t.message)}},e[3]=l,e[4]=n,e[5]=G):G=e[5];const ae=G;let J;e[6]!==l||e[7]!==n?(J=()=>{o("contrast");try{const t=JSON.parse(n),r=ve(t,l);s(JSON.stringify(r,null,2))}catch(t){s("Invalid input or error generating palettes: "+t.message)}},e[6]=l,e[7]=n,e[8]=J):J=e[8];const re=J;let k;e[9]!==l||e[10]!==n?(k=()=>{o("datavisuals");try{const t=JSON.parse(n),r=Object.values(t).find(Ge);r&&s(JSON.stringify(je({square:r},l),null,2))}catch(t){s("Invalid input or error generating palettes: "+t.message)}},e[9]=l,e[10]=n,e[11]=k):k=e[11];const ne=k;let $;e[12]!==l||e[13]!==n?($=()=>{o("algorithmic");try{const t=JSON.parse(n),r=Object.values(t).find(Ie);r&&s(JSON.stringify(Ne({square:r},l),null,2))}catch(t){s("Invalid input or error generating palettes: "+t.message)}},e[12]=l,e[13]=n,e[14]=$):$=e[14];const le=$;let D;e[15]!==l||e[16]!==n?(D=()=>{o("image");try{const t=JSON.parse(n),r=Object.values(t).find(Ae);r&&s(JSON.stringify(Ce({square:r},l),null,2))}catch(t){s("Invalid input or error generating palettes: "+t.message)}},e[15]=l,e[16]=n,e[17]=D):D=e[17];const se=D;let R;e[18]!==n?(R=()=>{o("60-30-10");try{const t=JSON.parse(n),r=Object.values(t).find(Pe);if(r){const A=Se(r);s(JSON.stringify({neutralLight:[A.neutralLight.hex],neutralDark:[A.neutralDark.hex],mainColor:[A.mainColor.hex],mainColorShade:[A.mainColorShade.hex],accentColor:[A.accentColor.hex]},null,2))}}catch(t){s("Invalid input or error generating palettes: "+t.message)}},e[18]=n,e[19]=R):R=e[19];const oe=R;let w;e[20]!==n?(w=()=>{o("radium");try{const t=JSON.parse(n),r=Oe(t);s(JSON.stringify(r,null,2))}catch(t){s("Invalid input or error applying Radium: "+t.message)}},e[20]=n,e[21]=w):w=e[21];const ce=w;let H;e[22]!==c?(H=()=>{navigator.clipboard.writeText(c)},e[22]=c,e[23]=H):H=e[23];const ie=H;let q;e[24]===Symbol.for("react.memo_cache_sentinel")?(q=async()=>{try{const t=await navigator.clipboard.readText();de(t)}catch{alert("Failed to read from clipboard")}},e[24]=q):q=e[24];const he=q;let V;e[25]!==ee||e[26]!==l||e[27]!==n?(V=()=>{const t=n,r=l;switch(ee){case"harmony":return`import { generateHarmonyPalettes } from "./color-palette-generator/HarmonyGenerator";

const input = ${t};
const count = ${r};

const palettes = generateHarmonyPalettes(input, count);
console.log(palettes);`;case"perceptual":return`import { generatePerceptualPalettes } from "./color-palette-generator/PerceptualGenerator";

const input = ${t};
const count = ${r};

const palettes = generatePerceptualPalettes(input, count);
console.log(palettes);`;case"contrast":return`import { generateContrastPalettes } from "./color-palette-generator/ContrastGenerator";

const input = ${t};
const count = ${r};

const palettes = generateContrastPalettes(input, count);
console.log(palettes);`;case"datavisuals":return`import { generateDataVisuals } from "./color-palette-generator/DataVisualsGenerator";

const input = ${t};
const count = ${r};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateDataVisuals({ square: colors }, count);
console.log(palettes);`;case"algorithmic":return`import { generateAlgorithmic } from "./color-palette-generator/AlgorithmicGenerator";

const input = ${t};
const count = ${r};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateAlgorithmic({ square: colors }, count);
console.log(palettes);`;case"image":return`import { generateImagePalettes } from "./color-palette-generator/ImageGenerator";

const input = ${t};
const count = ${r};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateImagePalettes({ square: colors }, count);
console.log(palettes);`;case"60-30-10":return`import { select60_30_10 } from "./color-palette-generator/select60-30-10";

const input = ${t};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const result = select60_30_10(colors);
console.log({
  neutralLight:   result.neutralLight.hex,
  neutralDark:    result.neutralDark.hex,
  mainColor:      result.mainColor.hex,
  mainColorShade: result.mainColorShade.hex,
  accentColor:    result.accentColor.hex,
});`;case"radium":return`import { generateRadiumColors } from "./color-palette-generator/RadiumGenerator";

const input = ${t};

const radiumPalette = generateRadiumColors(input);
console.log(radiumPalette);`;default:return""}},e[25]=ee,e[26]=l,e[27]=n,e[28]=V):V=e[28];const L=V;let E;e[29]!==L?(E=()=>{navigator.clipboard.writeText(L())},e[29]=L,e[30]=E):E=e[30];const ue=E;let F,T;e[31]===Symbol.for("react.memo_cache_sentinel")?(F=a.jsx(ye,{}),T=a.jsx("h4",{className:"page-title",children:"Color Palette Generator Library Usage"}),e[31]=F,e[32]=T):(F=e[31],T=e[32]);let U;e[33]===Symbol.for("react.memo_cache_sentinel")?(U=a.jsxs("div",{className:"demo-pg-panel-header",children:[a.jsx("h2",{children:"Input Palette"}),a.jsx("button",{className:"paste-button-small",onClick:he,children:"Paste"})]}),e[33]=U):U=e[33];let z;e[34]===Symbol.for("react.memo_cache_sentinel")?(z=t=>de(t.target.value),e[34]=z):z=e[34];let i;e[35]!==n?(i=a.jsxs("div",{className:"demo-pg-input-panel",children:[U,a.jsx("textarea",{className:"demo-palette-generator-textarea-input",value:n,onChange:z,cols:30,rows:10})]}),e[35]=n,e[36]=i):i=e[36];let B;e[37]===Symbol.for("react.memo_cache_sentinel")?(B=a.jsx("div",{className:"demo-pg-panel-header",children:a.jsx("h2",{children:"Generate"})}),e[37]=B):B=e[37];let K;e[38]===Symbol.for("react.memo_cache_sentinel")?(K=t=>ge(Number(t.target.value)),e[38]=K):K=e[38];let u;e[39]!==l?(u=a.jsxs("label",{className:"demo-palette-generator-count-label",children:["Count:",a.jsx("input",{type:"number",min:1,max:20,value:l,onChange:K,className:"demo-palette-generator-count-input"})]}),e[39]=l,e[40]=u):u=e[40];let m;e[41]!==te?(m=a.jsx("button",{className:"demo-palette-generator-btn",onClick:te,children:"Harmony (11)"}),e[41]=te,e[42]=m):m=e[42];let p;e[43]!==ae?(p=a.jsx("button",{className:"demo-palette-generator-btn",onClick:ae,children:"Perceptual (10)"}),e[43]=ae,e[44]=p):p=e[44];let d;e[45]!==re?(d=a.jsx("button",{className:"demo-palette-generator-btn",onClick:re,children:"Contrast (7)"}),e[45]=re,e[46]=d):d=e[46];let g;e[47]!==ne?(g=a.jsx("button",{className:"demo-palette-generator-btn",onClick:ne,children:"Data Visuals (7)"}),e[47]=ne,e[48]=g):g=e[48];let h;e[49]!==le?(h=a.jsx("button",{className:"demo-palette-generator-btn",onClick:le,children:"Algorithmic (11)"}),e[49]=le,e[50]=h):h=e[50];let f;e[51]!==se?(f=a.jsx("button",{className:"demo-palette-generator-btn",onClick:se,children:"Image (10)"}),e[51]=se,e[52]=f):f=e[52];let y;e[53]!==oe?(y=a.jsx("button",{className:"demo-palette-generator-btn",onClick:oe,children:"60-30-10 Design"}),e[53]=oe,e[54]=y):y=e[54];let M;e[55]===Symbol.for("react.memo_cache_sentinel")?(M={background:"#9b59b6"},e[55]=M):M=e[55];let x;e[56]!==ce?(x=a.jsx("button",{className:"demo-palette-generator-btn",onClick:ce,style:M,children:"Radium Colors"}),e[56]=ce,e[57]=x):x=e[57];let b;e[58]!==m||e[59]!==p||e[60]!==d||e[61]!==g||e[62]!==h||e[63]!==f||e[64]!==y||e[65]!==x?(b=a.jsxs("div",{className:"demo-palette-generator-buttons",children:[m,p,d,g,h,f,y,x]}),e[58]=m,e[59]=p,e[60]=d,e[61]=g,e[62]=h,e[63]=f,e[64]=y,e[65]=x,e[66]=b):b=e[66];let _;e[67]!==u||e[68]!==b?(_=a.jsxs("div",{className:"demo-pg-controls-panel",children:[B,u,b]}),e[67]=u,e[68]=b,e[69]=_):_=e[69];let Q;e[70]===Symbol.for("react.memo_cache_sentinel")?(Q=a.jsx("h2",{children:"Output"}),e[70]=Q):Q=e[70];const me=!c;let v;e[71]!==ie||e[72]!==me?(v=a.jsxs("div",{className:"demo-pg-panel-header",children:[Q,a.jsx("button",{className:"copy-button-small",onClick:ie,disabled:me,children:"Copy"})]}),e[71]=ie,e[72]=me,e[73]=v):v=e[73];let j;e[74]!==c?(j=a.jsx("textarea",{className:"demo-palette-generator-textarea-results",value:c,readOnly:!0,cols:30,rows:10}),e[74]=c,e[75]=j):j=e[75];let N;e[76]!==v||e[77]!==j?(N=a.jsxs("div",{className:"demo-pg-output-panel",children:[v,j]}),e[76]=v,e[77]=j,e[78]=N):N=e[78];let W;e[79]===Symbol.for("react.memo_cache_sentinel")?(W=a.jsx("h2",{children:"JavaScript Code"}),e[79]=W):W=e[79];let C;e[80]!==ue?(C=a.jsxs("div",{className:"demo-pg-panel-header",children:[W,a.jsx("button",{className:"copy-button-small",onClick:ue,children:"Copy"})]}),e[80]=ue,e[81]=C):C=e[81];const pe=L();let S;e[82]!==pe?(S=a.jsx("textarea",{className:"demo-palette-generator-textarea-jscode",value:pe,readOnly:!0,cols:30,rows:10}),e[82]=pe,e[83]=S):S=e[83];let O;e[84]!==C||e[85]!==S?(O=a.jsxs("div",{className:"demo-pg-code-panel",children:[C,S]}),e[84]=C,e[85]=S,e[86]=O):O=e[86];let P;e[87]!==i||e[88]!==_||e[89]!==N||e[90]!==O?(P=a.jsx("div",{className:"demo-palette-generator-container",children:a.jsxs("div",{className:"demo-pg-layout",children:[i,_,N,O]})}),e[87]=i,e[88]=_,e[89]=N,e[90]=O,e[91]=P):P=e[91];let X;e[92]===Symbol.for("react.memo_cache_sentinel")?(X=a.jsx(xe,{}),e[92]=X):X=e[92];let Y;return e[93]!==P?(Y=a.jsxs("div",{className:"build-page-wrapper",children:[F,T,P,X]}),e[93]=P,e[94]=Y):Y=e[94],Y}function Pe(e){return Array.isArray(e)&&e.length>0}function Ae(e){return Array.isArray(e)&&e.length>0}function Ie(e){return Array.isArray(e)&&e.length>0}function Ge(e){return Array.isArray(e)&&e.length>0}export{$e as default};
