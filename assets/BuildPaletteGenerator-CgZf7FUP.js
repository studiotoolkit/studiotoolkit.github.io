import{a as e,i as t,n,o as r,t as i}from"./index-Br0cC5eM.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./dist-DBo7ARI6.js";var p=r(e(),1),m=t();function h(){let[e,t]=(0,p.useState)(`{
  "harmonyPalette": ["#3498db"]
}`),[r,h]=(0,p.useState)(9),[g,_]=(0,p.useState)(``),[v,y]=(0,p.useState)(`harmony`),b=()=>{y(`harmony`);try{let t=JSON.parse(e),n=l(t,r);_(JSON.stringify(n,null,2))}catch(e){_(`Invalid input or error generating palettes: `+e.message)}},x=()=>{y(`perceptual`);try{let t=JSON.parse(e),n=o(t,r);_(JSON.stringify(n,null,2))}catch(e){_(`Invalid input or error generating palettes: `+e.message)}},S=()=>{y(`contrast`);try{let t=JSON.parse(e),n=f(t,r);_(JSON.stringify(n,null,2))}catch(e){_(`Invalid input or error generating palettes: `+e.message)}},C=()=>{y(`datavisuals`);try{let t=JSON.parse(e),n=Object.values(t).find(e=>Array.isArray(e)&&e.length>0);n&&_(JSON.stringify(s({square:n},r),null,2))}catch(e){_(`Invalid input or error generating palettes: `+e.message)}},w=()=>{y(`algorithmic`);try{let t=JSON.parse(e),n=Object.values(t).find(e=>Array.isArray(e)&&e.length>0);n&&_(JSON.stringify(a({square:n},r),null,2))}catch(e){_(`Invalid input or error generating palettes: `+e.message)}},T=()=>{y(`image`);try{let t=JSON.parse(e),n=Object.values(t).find(e=>Array.isArray(e)&&e.length>0);n&&_(JSON.stringify(d({square:n},r),null,2))}catch(e){_(`Invalid input or error generating palettes: `+e.message)}},E=()=>{y(`60-30-10`);try{let t=JSON.parse(e),n=Object.values(t).find(e=>Array.isArray(e)&&e.length>0);if(n){let e=u(n);_(JSON.stringify({neutralLight:[e.neutralLight.hex],neutralDark:[e.neutralDark.hex],mainColor:[e.mainColor.hex],mainColorShade:[e.mainColorShade.hex],accentColor:[e.accentColor.hex]},null,2))}}catch(e){_(`Invalid input or error generating palettes: `+e.message)}},D=()=>{y(`radium`);try{let t=JSON.parse(e),n=c(t);_(JSON.stringify(n,null,2))}catch(e){_(`Invalid input or error applying Radium: `+e.message)}},O=()=>{navigator.clipboard.writeText(g)},k=async()=>{try{let e=await navigator.clipboard.readText();t(e)}catch{alert(`Failed to read from clipboard`)}},A=()=>{let t=e,n=r;switch(v){case`harmony`:return`import { generateHarmonyPalettes } from "./color-palette-generator/HarmonyGenerator";

const input = ${t};
const count = ${n};

const palettes = generateHarmonyPalettes(input, count);
console.log(palettes);`;case`perceptual`:return`import { generatePerceptualPalettes } from "./color-palette-generator/PerceptualGenerator";

const input = ${t};
const count = ${n};

const palettes = generatePerceptualPalettes(input, count);
console.log(palettes);`;case`contrast`:return`import { generateContrastPalettes } from "./color-palette-generator/ContrastGenerator";

const input = ${t};
const count = ${n};

const palettes = generateContrastPalettes(input, count);
console.log(palettes);`;case`datavisuals`:return`import { generateDataVisuals } from "./color-palette-generator/DataVisualsGenerator";

const input = ${t};
const count = ${n};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateDataVisuals({ square: colors }, count);
console.log(palettes);`;case`algorithmic`:return`import { generateAlgorithmic } from "./color-palette-generator/AlgorithmicGenerator";

const input = ${t};
const count = ${n};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateAlgorithmic({ square: colors }, count);
console.log(palettes);`;case`image`:return`import { generateImagePalettes } from "./color-palette-generator/ImageGenerator";

const input = ${t};
const count = ${n};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateImagePalettes({ square: colors }, count);
console.log(palettes);`;case`60-30-10`:return`import { select60_30_10 } from "./color-palette-generator/select60-30-10";

const input = ${t};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const result = select60_30_10(colors);
console.log({
  neutralLight:   result.neutralLight.hex,
  neutralDark:    result.neutralDark.hex,
  mainColor:      result.mainColor.hex,
  mainColorShade: result.mainColorShade.hex,
  accentColor:    result.accentColor.hex,
});`;case`radium`:return`import { generateRadiumColors } from "./color-palette-generator/RadiumGenerator";

const input = ${t};

const radiumPalette = generateRadiumColors(input);
console.log(radiumPalette);`;default:return``}};return(0,m.jsxs)(`div`,{className:`build-page-wrapper`,children:[(0,m.jsx)(n,{}),(0,m.jsx)(`h4`,{className:`page-title`,children:`Color Palette Generator Library Usage`}),(0,m.jsx)(`div`,{className:`demo-palette-generator-container`,children:(0,m.jsxs)(`div`,{className:`demo-pg-layout`,children:[(0,m.jsxs)(`div`,{className:`demo-pg-input-panel`,children:[(0,m.jsxs)(`div`,{className:`demo-pg-panel-header`,children:[(0,m.jsx)(`h2`,{children:`Input Palette`}),(0,m.jsx)(`button`,{className:`paste-button-small`,onClick:k,children:`Paste`})]}),(0,m.jsx)(`textarea`,{className:`demo-palette-generator-textarea-input`,value:e,onChange:e=>t(e.target.value),cols:30,rows:10})]}),(0,m.jsxs)(`div`,{className:`demo-pg-controls-panel`,children:[(0,m.jsx)(`div`,{className:`demo-pg-panel-header`,children:(0,m.jsx)(`h2`,{children:`Generate`})}),(0,m.jsxs)(`label`,{className:`demo-palette-generator-count-label`,children:[`Count:`,(0,m.jsx)(`input`,{type:`number`,min:1,max:20,value:r,onChange:e=>h(Number(e.target.value)),className:`demo-palette-generator-count-input`})]}),(0,m.jsxs)(`div`,{className:`demo-palette-generator-buttons`,children:[(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:b,children:`Harmony (11)`}),(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:x,children:`Perceptual (10)`}),(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:S,children:`Contrast (7)`}),(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:C,children:`Data Visuals (7)`}),(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:w,children:`Algorithmic (11)`}),(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:T,children:`Image (10)`}),(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:E,children:`60-30-10 Design`}),(0,m.jsx)(`button`,{className:`demo-palette-generator-btn`,onClick:D,style:{background:`#9b59b6`},children:`Radium Colors`})]})]}),(0,m.jsxs)(`div`,{className:`demo-pg-output-panel`,children:[(0,m.jsxs)(`div`,{className:`demo-pg-panel-header`,children:[(0,m.jsx)(`h2`,{children:`Output`}),(0,m.jsx)(`button`,{className:`copy-button-small`,onClick:O,disabled:!g,children:`Copy`})]}),(0,m.jsx)(`textarea`,{className:`demo-palette-generator-textarea-results`,value:g,readOnly:!0,cols:30,rows:10})]}),(0,m.jsxs)(`div`,{className:`demo-pg-code-panel`,children:[(0,m.jsxs)(`div`,{className:`demo-pg-panel-header`,children:[(0,m.jsx)(`h2`,{children:`JavaScript Code`}),(0,m.jsx)(`button`,{className:`copy-button-small`,onClick:()=>{navigator.clipboard.writeText(A())},children:`Copy`})]}),(0,m.jsx)(`textarea`,{className:`demo-palette-generator-textarea-jscode`,value:A(),readOnly:!0,cols:30,rows:10})]})]})}),(0,m.jsx)(i,{})]})}export{h as default};