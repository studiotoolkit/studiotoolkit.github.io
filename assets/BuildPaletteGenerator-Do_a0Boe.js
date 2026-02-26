import{r as c,j as t,H as S,F as A}from"./index-Cpundhhs.js";import{d as I,L as P,M as G,b as J,f as k,p as $,A as D,x as w}from"./index-t_nCegOC.js";function R(){const[o,u]=c.useState(`{
  "harmonyPalette": ["#3498db"]
}`),[s,d]=c.useState(9),[i,n]=c.useState(""),[m,l]=c.useState("harmony"),g=()=>{l("harmony");try{const e=JSON.parse(o),a=I(e,s);n(JSON.stringify(a,null,2))}catch(e){n("Invalid input or error generating palettes: "+e.message)}},h=()=>{l("perceptual");try{const e=JSON.parse(o),a=P(e,s);n(JSON.stringify(a,null,2))}catch(e){n("Invalid input or error generating palettes: "+e.message)}},x=()=>{l("contrast");try{const e=JSON.parse(o),a=G(e,s);n(JSON.stringify(a,null,2))}catch(e){n("Invalid input or error generating palettes: "+e.message)}},y=()=>{l("datavisuals");try{const e=JSON.parse(o),a=Object.values(e).find(r=>Array.isArray(r)&&r.length>0);a&&n(JSON.stringify(J({square:a},s),null,2))}catch(e){n("Invalid input or error generating palettes: "+e.message)}},v=()=>{l("algorithmic");try{const e=JSON.parse(o),a=Object.values(e).find(r=>Array.isArray(r)&&r.length>0);a&&n(JSON.stringify(k({square:a},s),null,2))}catch(e){n("Invalid input or error generating palettes: "+e.message)}},b=()=>{l("image");try{const e=JSON.parse(o),a=Object.values(e).find(r=>Array.isArray(r)&&r.length>0);a&&n(JSON.stringify($({square:a},s),null,2))}catch(e){n("Invalid input or error generating palettes: "+e.message)}},j=()=>{l("60-30-10");try{const e=JSON.parse(o),a=Object.values(e).find(r=>Array.isArray(r)&&r.length>0);if(a){const r=D(a);n(JSON.stringify({neutralLight:[r.neutralLight.hex],neutralDark:[r.neutralDark.hex],mainColor:[r.mainColor.hex],mainColorShade:[r.mainColorShade.hex],accentColor:[r.accentColor.hex]},null,2))}}catch(e){n("Invalid input or error generating palettes: "+e.message)}},N=()=>{l("radium");try{const e=JSON.parse(o),a=w(e);n(JSON.stringify(a,null,2))}catch(e){n("Invalid input or error applying Radium: "+e.message)}},C=()=>{navigator.clipboard.writeText(i)},f=async()=>{try{const e=await navigator.clipboard.readText();u(e)}catch{alert("Failed to read from clipboard")}},p=()=>{const e=o,a=s;switch(m){case"harmony":return`import { generateHarmonyPalettes } from "./color-palette-generator/HarmonyGenerator";

const input = ${e};
const count = ${a};

const palettes = generateHarmonyPalettes(input, count);
console.log(palettes);`;case"perceptual":return`import { generatePerceptualPalettes } from "./color-palette-generator/PerceptualGenerator";

const input = ${e};
const count = ${a};

const palettes = generatePerceptualPalettes(input, count);
console.log(palettes);`;case"contrast":return`import { generateContrastPalettes } from "./color-palette-generator/ContrastGenerator";

const input = ${e};
const count = ${a};

const palettes = generateContrastPalettes(input, count);
console.log(palettes);`;case"datavisuals":return`import { generateDataVisuals } from "./color-palette-generator/DataVisualsGenerator";

const input = ${e};
const count = ${a};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateDataVisuals({ square: colors }, count);
console.log(palettes);`;case"algorithmic":return`import { generateAlgorithmic } from "./color-palette-generator/AlgorithmicGenerator";

const input = ${e};
const count = ${a};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateAlgorithmic({ square: colors }, count);
console.log(palettes);`;case"image":return`import { generateImagePalettes } from "./color-palette-generator/ImageGenerator";

const input = ${e};
const count = ${a};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const palettes = generateImagePalettes({ square: colors }, count);
console.log(palettes);`;case"60-30-10":return`import { select60_30_10 } from "./color-palette-generator/select60-30-10";

const input = ${e};

const colors = Object.values(input).find((v) => Array.isArray(v) && v.length > 0);
const result = select60_30_10(colors);
console.log({
  neutralLight:   result.neutralLight.hex,
  neutralDark:    result.neutralDark.hex,
  mainColor:      result.mainColor.hex,
  mainColorShade: result.mainColorShade.hex,
  accentColor:    result.accentColor.hex,
});`;case"radium":return`import { generateRadiumColors } from "./color-palette-generator/RadiumGenerator";

const input = ${e};

const radiumPalette = generateRadiumColors(input);
console.log(radiumPalette);`;default:return""}},O=()=>{navigator.clipboard.writeText(p())};return t.jsxs("div",{className:"build-page-wrapper",children:[t.jsx(S,{}),t.jsx("h4",{className:"page-title",children:"Color Palette Generator Library Usage"}),t.jsx("div",{className:"demo-palette-generator-container",children:t.jsxs("div",{className:"demo-pg-layout",children:[t.jsxs("div",{className:"demo-pg-input-panel",children:[t.jsxs("div",{className:"demo-pg-panel-header",children:[t.jsx("h2",{children:"Input Palette"}),t.jsx("button",{className:"paste-button-small",onClick:f,children:"Paste"})]}),t.jsx("textarea",{className:"demo-palette-generator-textarea-input",value:o,onChange:e=>u(e.target.value),cols:30,rows:10})]}),t.jsxs("div",{className:"demo-pg-controls-panel",children:[t.jsx("div",{className:"demo-pg-panel-header",children:t.jsx("h2",{children:"Generate"})}),t.jsxs("label",{className:"demo-palette-generator-count-label",children:["Count:",t.jsx("input",{type:"number",min:1,max:20,value:s,onChange:e=>d(Number(e.target.value)),className:"demo-palette-generator-count-input"})]}),t.jsxs("div",{className:"demo-palette-generator-buttons",children:[t.jsx("button",{className:"demo-palette-generator-btn",onClick:g,children:"Harmony (11)"}),t.jsx("button",{className:"demo-palette-generator-btn",onClick:h,children:"Perceptual (10)"}),t.jsx("button",{className:"demo-palette-generator-btn",onClick:x,children:"Contrast (7)"}),t.jsx("button",{className:"demo-palette-generator-btn",onClick:y,children:"Data Visuals (7)"}),t.jsx("button",{className:"demo-palette-generator-btn",onClick:v,children:"Algorithmic (11)"}),t.jsx("button",{className:"demo-palette-generator-btn",onClick:b,children:"Image (10)"}),t.jsx("button",{className:"demo-palette-generator-btn",onClick:j,children:"60-30-10 Design"}),t.jsx("button",{className:"demo-palette-generator-btn",onClick:N,style:{background:"#9b59b6"},children:"Radium Colors"})]})]}),t.jsxs("div",{className:"demo-pg-output-panel",children:[t.jsxs("div",{className:"demo-pg-panel-header",children:[t.jsx("h2",{children:"Output"}),t.jsx("button",{className:"copy-button-small",onClick:C,disabled:!i,children:"Copy"})]}),t.jsx("textarea",{className:"demo-palette-generator-textarea-results",value:i,readOnly:!0,cols:30,rows:10})]}),t.jsxs("div",{className:"demo-pg-code-panel",children:[t.jsxs("div",{className:"demo-pg-panel-header",children:[t.jsx("h2",{children:"JavaScript Code"}),t.jsx("button",{className:"copy-button-small",onClick:O,children:"Copy"})]}),t.jsx("textarea",{className:"demo-palette-generator-textarea-jscode",value:p(),readOnly:!0,cols:30,rows:10})]})]})}),t.jsx(A,{})]})}export{R as default};
