import{a as e,i as t,n,o as r,r as i,t as a}from"./index-Br0cC5eM.js";var o=r(e(),1),s=t();function c(e){if(e&&typeof e==`object`&&!Object.isFrozen(e)){Object.freeze(e);for(let t of Object.keys(e))c(e[t])}return e}var l=c([{id:`default`,label:`Default`},{id:`gold`,label:`Gold`},{id:`blue`,label:`Blue`},{id:`wall-black`,label:`Wall Black`},{id:`wall-white`,label:`Wall White`},{id:`roman`,label:`Roman`},{id:`steel`,label:`Steel`},{id:`navy`,label:`Navy`},{id:`spectrum`,label:`Spectrum`},{id:`chrono`,label:`Chrono`},{id:`ocean`,label:`Ocean`},{id:`blush`,label:`Blush`}]),u={innerRing:!1,rings:[],numerals:`arabic`,rotateNumbers:!1,hideMarksAtNumbers:!1,minorNumberOpacity:1},d={...u,bezelWidth:.035,bezelMinWidth:2,innerRing:!0,linecap:`round`,numbers:`all`,numberRadius:.66,numberSize:.19,minorNumberSize:.15,minorNumberOpacity:.8,quarterMark:{from:.92,to:.83,width:.03,minWidth:2},hourMark:{from:.92,to:.85,width:.02,minWidth:1.5},minuteMark:{from:.92,to:.89,width:0,minWidth:1},hourHand:{shape:`taper`,length:.5,tail:.1,base:.075,tip:.035},minuteHand:{shape:`taper`,length:.74,tail:.12,base:.055,tip:.022},secondHand:{length:.84,tail:.2,width:.012,weight:.035,weightStyle:`filled`},capRadius:.05,capDotRadius:.025,labelOffset:.32},f={...u,bezelWidth:.07,bezelMinWidth:3,linecap:`butt`,numbers:`quarters`,numberRadius:.72,numberSize:.13,minorNumberSize:.13,quarterMark:null,hourMark:{from:.8,to:.6,width:.02,minWidth:1.5},minuteMark:{from:.93,to:.84,width:.007,minWidth:.75},hourHand:{shape:`taper`,length:.46,tail:.06,base:.035,tip:.02},minuteHand:{shape:`taper`,length:.74,tail:.06,base:.028,tip:.015},secondHand:{length:.86,tail:.24,width:.009,weight:.03,weightStyle:`ring`},capRadius:.045,capDotRadius:.02,labelOffset:.3},p={...u,bezelWidth:.08,bezelMinWidth:3,linecap:`butt`,numbers:`none`,numberRadius:.66,numberSize:0,minorNumberSize:0,quarterMark:{shape:`double`,from:.93,to:.7,width:.055,minWidth:3},hourMark:{from:.93,to:.75,width:.03,minWidth:1.5},minuteMark:{from:.93,to:.87,width:.012,minWidth:1},hourHand:{shape:`taper`,length:.55,tail:.12,base:.065,tip:.022},minuteHand:{shape:`taper`,length:.84,tail:.14,base:.048,tip:.016},secondHand:{length:.76,tail:.24,width:.014,weight:.045,weightStyle:`filled`},capRadius:.04,capDotRadius:.018,labelOffset:.36},m={hourHand:{shape:`taper`,length:.52,tail:.16,base:.075,tip:.035},minuteHand:{shape:`taper`,length:.8,tail:.18,base:.055,tip:.025},secondHand:{length:.84,tail:.3,width:.012,weight:.045,weightStyle:`bar`},capRadius:.035,capDotRadius:.02},h=c({default:d,gold:f,blue:p,"wall-black":{...u,...m,bezelWidth:.09,bezelMinWidth:4,innerRing:!0,linecap:`round`,numbers:`all`,numberRadius:.785,numberSize:.21,minorNumberSize:.21,quarterMark:{shape:`dot`,from:.66,to:.66,width:.04,minWidth:2.5},hourMark:{shape:`dot`,from:.66,to:.66,width:.04,minWidth:2.5},minuteMark:{from:.69,to:.63,width:.014,minWidth:1},labelOffset:-.3},"wall-white":{...u,...m,bezelWidth:.05,bezelMinWidth:3,innerRing:!0,linecap:`butt`,numbers:`all`,numberRadius:.71,numberSize:.245,minorNumberSize:.245,quarterMark:{from:.95,to:.87,width:.022,minWidth:1.5},hourMark:{from:.95,to:.87,width:.022,minWidth:1.5},minuteMark:{from:.95,to:.9,width:.012,minWidth:1},labelOffset:-.3},roman:{...u,bezelWidth:.08,bezelMinWidth:4,rings:[{radius:.66,width:.012}],linecap:`round`,numbers:`all`,numerals:`roman`,rotateNumbers:!0,numberRadius:.8,numberSize:.2,minorNumberSize:.2,quarterMark:null,hourMark:null,minuteMark:null,hourHand:{shape:`spade`,length:.48,tail:.04,base:.03,tip:.1},minuteHand:{shape:`spade`,length:.64,tail:.04,base:.022,tip:.08},secondHand:{length:.62,tail:.12,width:.008,weight:.025,weightStyle:`filled`},capRadius:.06,capDotRadius:.015,labelOffset:-.32},steel:{...u,bezelWidth:.075,bezelMinWidth:3,innerRing:!0,linecap:`butt`,numbers:[12,6],numerals:`roman`,hideMarksAtNumbers:!0,numberRadius:.76,numberSize:.17,minorNumberSize:.17,quarterMark:{from:.86,to:.7,width:.03,minWidth:1.5},hourMark:{from:.86,to:.7,width:.03,minWidth:1.5},minuteMark:{from:.955,to:.915,width:.008,minWidth:.75},hourHand:{shape:`dauphine`,length:.5,tail:.08,base:.02,tip:.06,facet:!0},minuteHand:{shape:`dauphine`,length:.83,tail:.1,base:.016,tip:.048,facet:!0},secondHand:{length:.9,tail:.2,width:.008,weight:.018,weightStyle:`filled`},capRadius:.035,capDotRadius:.014,labelOffset:.4},navy:{...u,bezelWidth:.09,bezelMinWidth:4,innerRing:!0,linecap:`butt`,numbers:`quarters`,hideMarksAtNumbers:!0,numberRadius:.73,numberSize:.19,minorNumberSize:.19,quarterMark:null,hourMark:{from:.9,to:.7,width:.034,minWidth:2},minuteMark:{shape:`dot`,from:.935,to:.935,width:.014,minWidth:1.25},hourHand:{shape:`sword`,length:.5,tail:.1,base:.05,tip:.075,inlay:!0},minuteHand:{shape:`sword`,length:.8,tail:.12,base:.04,tip:.058,inlay:!0},secondHand:{length:.88,tail:.22,width:.009,weight:.02,weightStyle:`filled`},capRadius:.04,capDotRadius:.016,labelOffset:.4},spectrum:{...u,bezelWidth:.065,bezelMinWidth:3,linecap:`butt`,numbers:`none`,numberRadius:.7,numberSize:0,minorNumberSize:0,spectrumTicks:!0,quarterMark:{from:.95,to:.66,width:.04,minWidth:2},hourMark:{from:.95,to:.72,width:.026,minWidth:1.5},minuteMark:{from:.95,to:.8,width:.014,minWidth:1},hourHand:{shape:`bar`,length:.5,tail:.05,base:.03,tip:.03},minuteHand:{shape:`bar`,length:.8,tail:.05,base:.024,tip:.024},secondHand:{length:.84,tail:.26,width:.012,weight:.03,weightStyle:`ring`},capRadius:.045,capDotRadius:.02,labelOffset:.36},chrono:{...u,bezelWidth:.08,bezelMinWidth:3,innerRing:!0,linecap:`butt`,numbers:`all`,numberRadius:.875,numberSize:.075,minorNumberSize:.075,quarterMark:{from:.82,to:.7,width:.045,minWidth:2},hourMark:{from:.82,to:.7,width:.045,minWidth:2},minuteMark:{from:.975,to:.935,width:.008,minWidth:.75},markOverrides:{12:{shape:`triangle`,from:.83,to:.69,width:.11,minWidth:5}},hourHand:{shape:`sword`,length:.52,tail:.12,base:.05,tip:.07,inlay:!0},minuteHand:{shape:`sword`,length:.82,tail:.14,base:.04,tip:.055,inlay:!0},secondHand:{length:.9,tail:.2,width:.008,weight:.02,weightStyle:`filled`},capRadius:.045,capDotRadius:.018,labelOffset:.42},ocean:{...u,bezelWidth:.1,bezelMinWidth:4,innerRing:!0,linecap:`butt`,numbers:`none`,numberRadius:.7,numberSize:0,minorNumberSize:0,quarterMark:{from:.9,to:.68,width:.065,minWidth:3},hourMark:{shape:`dot`,from:.8,to:.8,width:.1,minWidth:4},minuteMark:{from:.95,to:.91,width:.012,minWidth:1},markOverrides:{12:{shape:`triangle`,from:.92,to:.7,width:.17,minWidth:6}},hourHand:{shape:`sword`,length:.5,tail:.12,base:.06,tip:.1,inlay:!0},minuteHand:{shape:`sword`,length:.8,tail:.14,base:.045,tip:.07,inlay:!0},secondHand:{length:.86,tail:.22,width:.013,weight:.045,weightStyle:`ring`},capRadius:.05,capDotRadius:.022,labelOffset:.4},blush:{...u,bezelWidth:.06,bezelMinWidth:3,linecap:`round`,numbers:`quarters`,hideMarksAtNumbers:!0,numberRadius:.74,numberSize:.17,minorNumberSize:.17,quarterMark:null,hourMark:{from:.88,to:.76,width:.022,minWidth:1.5},minuteMark:{shape:`dot`,from:.935,to:.935,width:.013,minWidth:1.25},hourHand:{shape:`dauphine`,length:.5,tail:.07,base:.022,tip:.065,facet:!0},minuteHand:{shape:`dauphine`,length:.8,tail:.09,base:.016,tip:.05,facet:!0},secondHand:{length:.88,tail:.18,width:.008,weight:.02,weightStyle:`filled`},capRadius:.035,capDotRadius:.015,labelOffset:.36}}),g=Object.assign({"./faces/blue.css":`/* Blue face: brushed steel case, navy dial, white bar markers and hands. */
.analog-clock--blue {
  --ac-bezel: #9aa1aa;
  --ac-bezel-2: #eef1f4;
  --ac-face-inner: #24406f;
  --ac-face-outer: #10213f;
  --ac-tick: #f4f6f8;
  --ac-minor-tick: #e3e8ee;
  --ac-number: #f4f6f8;
  --ac-number-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-label: #f4f6f8;
  --ac-label-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-label-weight: 500;
  --ac-hour-hand: #e9edf1;
  --ac-minute-hand: #e9edf1;
  --ac-second-hand: #e2382c;
  --ac-cap: #c9ced4;
  --ac-digital: #1a3462;
  --ac-digital-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.analog-clock--blue[data-theme="dark"] {
  --ac-digital: #c8d6ec;
}
`,"./faces/blush.css":`/* Blush face: dress style. Rose-gold case, soft blush dial, serif 12/3/6/9,
   rose-gold markers and faceted hands, burgundy second hand. */
.analog-clock--blush {
  --ac-bezel: #b7795e;
  --ac-bezel-2: #f4cdb9;
  --ac-face-inner: #fff6f3;
  --ac-face-outer: #f1d3ca;
  --ac-tick: #b7795e;
  --ac-minor-tick: #c99a86;
  --ac-number: #9c5f48;
  --ac-number-font: Didot, 'Bodoni 72', 'Bodoni MT', Georgia, serif;
  --ac-number-weight: 400;
  --ac-label: #9c5f48;
  --ac-label-font: Didot, 'Bodoni 72', 'Bodoni MT', Georgia, serif;
  --ac-label-weight: 400;
  --ac-hour-hand: #a8674d;
  --ac-minute-hand: #a8674d;
  --ac-hand-shine: #ebbca6;
  --ac-second-hand: #8c2f39;
  --ac-cap: #b7795e;
  --ac-cap-dot: #f4cdb9;
  --ac-digital: #9c5f48;
  --ac-digital-font: Didot, 'Bodoni 72', 'Bodoni MT', Georgia, serif;
}

.analog-clock--blush[data-theme="dark"] {
  --ac-digital: #f4cdb9;
}
`,"./faces/chrono.css":`/* Chrono face: steel case, black dial, white minute track and numbers,
   white batons and sword hands with a bright stripe. */
.analog-clock--chrono {
  --ac-bezel: #a7adb4;
  --ac-bezel-2: #f5f7f9;
  --ac-face-inner: #1b1d21;
  --ac-face-outer: #08090b;
  --ac-tick: #f4f5f6;
  --ac-minor-tick: #d9dcdf;
  --ac-number: #f4f5f6;
  --ac-number-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-number-weight: 600;
  --ac-label: #f4f5f6;
  --ac-label-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-label-weight: 600;
  --ac-hour-hand: #c4c9cf;
  --ac-minute-hand: #c4c9cf;
  --ac-hand-inlay: #ffffff;
  --ac-second-hand: #f4f5f6;
  --ac-cap: #c4c9cf;
  --ac-cap-dot: #e3241b;
  --ac-digital: #1b1d21;
  --ac-digital-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.analog-clock--chrono[data-theme="dark"] {
  --ac-digital: #e6e8ea;
}
`,"./faces/default.css":`/* Default face: the original clock look. Matches the fallbacks in Clock.tsx. */
.analog-clock--default {
  --ac-bezel: #000;
  --ac-face-inner: #ffffff;
  --ac-face-outer: #eef1f5;
  --ac-tick: #000;
  --ac-minor-tick: rgba(0, 0, 0, 0.3);
  --ac-number: #000;
  --ac-number-font: 'Courier New', Courier, monospace;
  --ac-number-weight: bold;
  --ac-label: #6b7c8f;
  --ac-hour-hand: #000;
  --ac-minute-hand: #000;
  --ac-second-hand: #e03a3a;
  --ac-digital: #000;
  --ac-digital-font: 'Courier New', Courier, monospace;
}

.analog-clock--default[data-theme="dark"] {
  --ac-bezel: #56677a;
  --ac-face-inner: #262b33;
  --ac-face-outer: #15181d;
  --ac-tick: #ddd;
  --ac-minor-tick: rgba(221, 221, 221, 0.35);
  --ac-number: #ddd;
  --ac-label: #8fa3b8;
  --ac-hour-hand: #ddd;
  --ac-minute-hand: #ddd;
  --ac-digital: #ddd;
}
`,"./faces/gold.css":`/* Gold face: polished gold case, white dial, gold sticks and hands, red second hand. */
.analog-clock--gold {
  --ac-bezel: #b8862b;
  --ac-bezel-2: #f3d98b;
  --ac-face-inner: #ffffff;
  --ac-face-outer: #e9e6df;
  --ac-tick: #b08d3c;
  --ac-minor-tick: rgba(176, 141, 60, 0.75);
  --ac-number: #a5813a;
  --ac-number-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-number-weight: 400;
  --ac-label: #a5813a;
  --ac-label-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-label-weight: 500;
  --ac-hour-hand: #b08d3c;
  --ac-minute-hand: #b08d3c;
  --ac-second-hand: #e2382c;
  --ac-cap: #c79a3e;
  --ac-digital: #a5813a;
  --ac-digital-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.analog-clock--gold[data-theme="dark"] {
  --ac-digital: #e3c374;
}
`,"./faces/navy.css":`/* Navy face: polished steel case, blue dial that darkens toward the edge,
   12/3/6/9 numbers, silver batons and sword hands with a bright stripe. */
.analog-clock--navy {
  --ac-bezel: #a3a9b0;
  --ac-bezel-2: #f4f6f8;
  --ac-face-inner: #4a6aa8;
  --ac-face-outer: #0d1a3d;
  --ac-tick: #dfe3e8;
  --ac-minor-tick: #c3c9d1;
  --ac-number: #c9ced5;
  --ac-number-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-number-weight: 500;
  --ac-label: #e6e9ee;
  --ac-label-font: 'Times New Roman', Times, Georgia, serif;
  --ac-label-weight: 600;
  --ac-hour-hand: #b8bec6;
  --ac-minute-hand: #b8bec6;
  --ac-hand-inlay: #f4f7fb;
  --ac-second-hand: #d3d8de;
  --ac-cap: #c3c9d1;
  --ac-cap-dot: #eef1f4;
  --ac-digital: #1c3166;
  --ac-digital-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.analog-clock--navy[data-theme="dark"] {
  --ac-digital: #c8d6ec;
}
`,"./faces/ocean.css":`/* Ocean face: dive style. Thick dark-teal case, deep teal dial fading to
   near-black, mint lume markers and hands, orange second hand. */
.analog-clock--ocean {
  --ac-bezel: #0b2a33;
  --ac-bezel-2: #2f6170;
  --ac-face-inner: #127380;
  --ac-face-outer: #052630;
  --ac-tick: #d6fff0;
  --ac-minor-tick: #8fd3c4;
  --ac-number: #d6fff0;
  --ac-label: #d6fff0;
  --ac-label-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-label-weight: 600;
  --ac-hour-hand: #e4ebee;
  --ac-minute-hand: #e4ebee;
  --ac-hand-inlay: #b9ffe6;
  --ac-second-hand: #ff7a3d;
  --ac-cap: #e4ebee;
  --ac-cap-dot: #ff7a3d;
  --ac-digital: #0b3a44;
  --ac-digital-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.analog-clock--ocean[data-theme="dark"] {
  --ac-digital: #a8f0de;
}
`,"./faces/roman.css":`/* Roman face: thick black case, white dial, serif Roman numerals, black spade hands. */
.analog-clock--roman {
  --ac-bezel: #000000;
  --ac-bezel-2: #1c1c1c;
  --ac-face-inner: #ffffff;
  --ac-face-outer: #fafafa;
  --ac-ring: #000000;
  --ac-tick: #000000;
  --ac-minor-tick: #000000;
  --ac-number: #000000;
  --ac-number-font: 'Times New Roman', Times, Georgia, serif;
  --ac-number-weight: 400;
  --ac-label: #444444;
  --ac-label-font: 'Times New Roman', Times, Georgia, serif;
  --ac-label-weight: 400;
  --ac-hour-hand: #000000;
  --ac-minute-hand: #000000;
  --ac-second-hand: #000000;
  --ac-cap: #000000;
  --ac-cap-dot: #ffffff;
  --ac-digital: #000000;
  --ac-digital-font: 'Times New Roman', Times, Georgia, serif;
}

.analog-clock--roman[data-theme="dark"] {
  --ac-digital: #f0f0f0;
}
`,"./faces/spectrum.css":`/* Spectrum face: gunmetal case, white dial, ticks in the colours of the
   @studiotoolkit/color-wheel wheel (red at 12, then yellow, green, cyan, blue,
   magenta, clockwise), near-black hands. */
.analog-clock--spectrum {
  --ac-bezel: #3e4146;
  --ac-bezel-2: #8a8e94;
  --ac-face-inner: #ffffff;
  --ac-face-outer: #eef0f2;
  /* Spectrum ticks match the color wheel: hsl(hue, 100%, 50%), hue 0 (red) at
     12 o'clock rising clockwise, 6 degrees per minute */
  --ac-tick-hue: 0;
  --ac-tick-hue-step: 6;
  --ac-tick-sat: 100%;
  --ac-tick-light: 50%;
  --ac-number: #1c1d20;
  --ac-label: #4a4d52;
  --ac-label-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-label-weight: 500;
  --ac-hour-hand: #1c1d20;
  --ac-minute-hand: #1c1d20;
  --ac-second-hand: #e3241b;
  --ac-cap: #1c1d20;
  --ac-digital: #2a2b2e;
  --ac-digital-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.analog-clock--spectrum[data-theme="dark"] {
  --ac-digital: #e6e8ea;
}
`,"./faces/steel.css":`/* Steel face: polished steel case, silver-white dial, Roman XII and VI,
   applied silver batons and slim faceted dauphine hands. */
.analog-clock--steel {
  --ac-bezel: #a9afb6;
  --ac-bezel-2: #f7f8f9;
  --ac-face-inner: #fbfbfa;
  --ac-face-outer: #dcdedf;
  --ac-tick: #9ba1a8;
  --ac-minor-tick: #6f757c;
  --ac-number: #8e949b;
  --ac-number-font: 'Times New Roman', Times, Georgia, serif;
  --ac-number-weight: 400;
  --ac-label: #2b2e33;
  --ac-label-font: 'Times New Roman', Times, Georgia, serif;
  --ac-label-weight: 600;
  --ac-hour-hand: #6b7179;
  --ac-minute-hand: #6b7179;
  --ac-hand-shine: #c9cdd2;
  --ac-second-hand: #8a9097;
  --ac-cap: #9aa0a7;
  --ac-cap-dot: #d5d8dc;
  --ac-digital: #55595f;
  --ac-digital-font: 'Times New Roman', Times, Georgia, serif;
}

.analog-clock--steel[data-theme="dark"] {
  --ac-digital: #d5d8dc;
}
`,"./faces/wall-black.css":`/* Wall Black face: black case, white dial, numbers around the edge, red second hand. */
.analog-clock--wall-black {
  --ac-bezel: #141414;
  --ac-bezel-2: #4a4a4a;
  --ac-face-inner: #ffffff;
  --ac-face-outer: #f1f1f1;
  --ac-tick: #111111;
  --ac-minor-tick: #222222;
  --ac-number: #111111;
  --ac-number-font: 'Century Gothic', Futura, Avenir, 'Trebuchet MS', Arial, sans-serif;
  --ac-number-weight: 500;
  --ac-label: #2a8fbf;
  --ac-label-font: 'Century Gothic', Futura, Avenir, Arial, sans-serif;
  --ac-label-weight: 400;
  --ac-hour-hand: #111111;
  --ac-minute-hand: #111111;
  --ac-second-hand: #e0201b;
  --ac-cap: #111111;
  --ac-digital: #111111;
  --ac-digital-font: 'Century Gothic', Futura, Avenir, Arial, sans-serif;
}

.analog-clock--wall-black[data-theme="dark"] {
  --ac-bezel: #050505;
  --ac-bezel-2: #5a5a5a;
  --ac-digital: #e6e6e6;
}
`,"./faces/wall-white.css":`/* Wall White face: slim white case, white dial, heavy black numbers, red second hand. */
.analog-clock--wall-white {
  --ac-bezel: #d9dbde;
  --ac-bezel-2: #ffffff;
  --ac-face-inner: #ffffff;
  --ac-face-outer: #f3f4f5;
  --ac-tick: #111111;
  --ac-minor-tick: #1a1a1a;
  --ac-number: #151515;
  --ac-number-font: 'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-number-weight: 900;
  --ac-label: #2a8fbf;
  --ac-label-font: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --ac-label-weight: 500;
  --ac-hour-hand: #111111;
  --ac-minute-hand: #111111;
  --ac-second-hand: #e0201b;
  --ac-cap: #111111;
  --ac-digital: #151515;
  --ac-digital-font: 'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.analog-clock--wall-white[data-theme="dark"] {
  --ac-digital: #f0f0f0;
}
`}),_=Object.keys(g).sort().map(e=>g[e]).join(`
`),v=`studiotoolkit-analog-clock-faces`;function y(e=document){if(e.getElementById(`studiotoolkit-analog-clock-faces`))return;let t=e.createElement(`style`);t.id=v,t.textContent=_,e.head.prepend(t)}var b=[{id:`tick`,label:`Tick (default)`},{id:`smooth`,label:`Smooth glide`},{id:`sweep`,label:`Mechanical sweep`},{id:`stop-to-go`,label:`Stop-to-go`},{id:`bounce`,label:`Spring bounce`},{id:`ease`,label:`Ease-in-out tick`},{id:`anticipate`,label:`Anticipation tick`}],x={bounce:700,ease:300,anticipate:350},S={bounce:x.bounce/8,ease:x.ease,anticipate:x.anticipate},C={bounce:e=>e>=1?1:1-Math.exp(-5*e)*Math.cos(4*Math.PI*e),ease:e=>e<.5?4*e**3:1-(-2*e+2)**3/2,anticipate:e=>4*e**3-3*e**2};function w(e,t,n=0){let r=t+n/1e3;switch(e){case`smooth`:return r*6;case`sweep`:return(t+Math.floor(n/125)/8)*6;case`stop-to-go`:return Math.min(r*60/58,60)*6;case`bounce`:case`ease`:case`anticipate`:{let r=S[e],i=n>=1e3-r,a=i?t+1:t,o=i?n-(1e3-r):n+r,s=Math.min(o/x[e],1);return(a-1+C[e](s))*6}default:return t*6}}var T=[`bounce`,`ease`,`anticipate`],E=(e,t)=>w(e,t.getSeconds(),t.getMilliseconds());function D(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(typeof window>`u`||!window.matchMedia)return;let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);t(e.matches);let n=()=>t(e.matches);return e.addEventListener?.(`change`,n),()=>e.removeEventListener?.(`change`,n)},[]),e}function O(e,t=new Date){if(e)try{let n=new Intl.DateTimeFormat(`en-US`,{timeZone:e,hour:`numeric`,minute:`numeric`,second:`numeric`,hour12:!1}).formatToParts(t),r=e=>parseInt(n.find(t=>t.type===e)?.value??`0`,10);return{hours:r(`hour`)%24,minutes:r(`minute`),seconds:r(`second`)}}catch{}return{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()}}function k({hours:e,minutes:t,seconds:n},r=!0,i=`12h`){let a=e=>String(e).padStart(2,`0`),o=a(i===`24h`?e:e%12||12),s=r?`${o}:${a(t)}:${a(n)}`:`${o}:${a(t)}`;return i===`24h`?s:`${s} ${e<12?`AM`:`PM`}`}var A={light:{ink:`#000`,bezel:`#000`,faceInner:`#ffffff`,faceOuter:`#eef1f5`,minorTick:`rgba(0,0,0,0.3)`,label:`#6b7c8f`,faceShadow:.22,handShadow:.25},dark:{ink:`#ddd`,bezel:`#56677a`,faceInner:`#262b33`,faceOuter:`#15181d`,minorTick:`rgba(221,221,221,0.35)`,label:`#8fa3b8`,faceShadow:.6,handShadow:.5}},j=`#e03a3a`,M=[``,`I`,`II`,`III`,`IIII`,`V`,`VI`,`VII`,`VIII`,`IX`,`X`,`XI`,`XII`],N=`'Courier New', Courier, monospace`,P=(e,t)=>`var(--ac-${e}, ${t})`;function F({radius:e=100,label:t=``,timezone:n=null,face:r=`default`,theme:i=`light`,showSeconds:a=!0,secondHandMotion:c=`tick`,showDigital:l=!0,timeFormat:u=`12h`,borderColor:d,tickColor:f,hourHandColor:p,minuteHandColor:m,secondHandColor:g,numberColor:_,digitalColor:v}){let[b,x]=(0,o.useState)(null),S=(0,o.useId)().replace(/[^a-zA-Z0-9]/g,``);(0,o.useInsertionEffect)(()=>{y()},[]);let C=D()&&T.includes(c)?`tick`:c,F=a&&C!==`tick`,I=(0,o.useRef)(null),L=(0,o.useRef)(0);(0,o.useEffect)(()=>{if(!F){x(O(n));let e=setInterval(()=>x(O(n)),1e3);return()=>clearInterval(e)}let e=0,t=-1,r=e=>{e.getSeconds()!==t&&(t=e.getSeconds(),x(O(n,e)))},i=()=>{let t=new Date,n=L.current;I.current?.setAttribute(`transform`,`rotate(${E(C,t)} ${n} ${n})`),r(t),e=requestAnimationFrame(i)};i();let a=setInterval(()=>r(new Date),1e3);return()=>{cancelAnimationFrame(e),clearInterval(a)}},[n,F,C]);let R=h[r]??h.default,z=A[i]??A.light,B={};d&&(B[`--ac-bezel`]=B[`--ac-bezel-2`]=d),f&&(B[`--ac-tick`]=B[`--ac-minor-tick`]=f),p&&(B[`--ac-hour-hand`]=p),m&&(B[`--ac-minute-hand`]=m),g&&(B[`--ac-second-hand`]=g),_&&(B[`--ac-number`]=_),v&&(B[`--ac-digital`]=v);let V={bezel:P(`bezel`,z.bezel),bezel2:P(`bezel-2`,P(`bezel`,z.bezel)),faceInner:P(`face-inner`,z.faceInner),faceOuter:P(`face-outer`,z.faceOuter),tick:P(`tick`,z.ink),minorTick:P(`minor-tick`,z.minorTick),number:P(`number`,z.ink),label:P(`label`,z.label),hourHand:P(`hour-hand`,z.ink),minuteHand:P(`minute-hand`,z.ink),secondHand:P(`second-hand`,j),cap:P(`cap`,P(`hour-hand`,z.ink)),capDot:P(`cap-dot`,P(`second-hand`,j)),digital:P(`digital`,z.ink)},H=e*2+36,U=e+18;L.current=U;let W=t=>e*t,{hours:ee,minutes:G,seconds:K}=b??{hours:0,minutes:0,seconds:0},q=(ee%12*60+G)/720*360,J=C===`stop-to-go`?G*6:(G*60+K)/3600*360,te=F&&b?E(C,new Date):w(`tick`,K),Y=(e,t)=>{let n=(e-90)*(Math.PI/180);return{x:U+Math.cos(n)*t,y:U+Math.sin(n)*t}},X=R.numbers===`all`?[1,2,3,4,5,6,7,8,9,10,11,12]:R.numbers===`quarters`?[3,6,9,12]:R.numbers===`none`?[]:R.numbers,ne=Array.from({length:60},(e,t)=>{let n=t%5==0,r=t%15==0,i=t/5||12,a=n?R.markOverrides?.[i]:void 0,o=a===void 0?r?R.quarterMark:n?R.hourMark:R.minuteMark:a;return!o||n&&R.hideMarksAtNumbers&&X.includes(i)?null:{i:t,isHour:n,shape:o.shape??`line`,outer:Y(t*6,W(o.from)),inner:Y(t*6,W(o.to)),centre:Y(t*6,W((o.from+o.to)/2)),width:Math.max(o.minWidth,W(o.width))}}).filter(e=>e!==null),re=(e,t)=>R.spectrumTicks&&!f?`hsl(calc(var(--ac-tick-hue, 60) + ${e} * var(--ac-tick-hue-step, -6)), var(--ac-tick-sat, 85%), var(--ac-tick-light, 60%))`:t?V.tick:V.minorTick,ie=[...X].sort((e,t)=>e-t).map(e=>({num:e,text:R.numerals===`roman`?M[e]:String(e),...Y(e*30,W(R.numberRadius))})),Z=({shape:e,length:t,tail:n,base:r,tip:i})=>{let[a,o,s,c]=[W(t),W(n),W(r),W(i)];if(e===`bar`)return`M ${U-s/2} ${U+o} L ${U-s/2} ${U-a} L ${U+s/2} ${U-a} L ${U+s/2} ${U+o} Z`;if(e===`dauphine`){let e=U-a*.14;return`M ${U-s/2} ${U+o} L ${U-c/2} ${e} L ${U} ${U-a} L ${U+c/2} ${e} L ${U+s/2} ${U+o} Z`}if(e===`sword`){let e=U-a*.8;return`M ${U-s/2} ${U+o} L ${U-c/2} ${e} L ${U} ${U-a} L ${U+c/2} ${e} L ${U+s/2} ${U+o} Z`}if(e===`spade`){let e=U-a*.66,t=U-a*.84;return`M ${U-s/2} ${U+o} L ${U-s/2} ${e} Q ${U-c} ${t} ${U} ${U-a} Q ${U+c} ${t} ${U+s/2} ${e} L ${U+s/2} ${U+o} Z`}return`M ${U-s/2} ${U+o} L ${U-c/2} ${U-a} Q ${U} ${U-a-c} ${U+c/2} ${U-a} L ${U+s/2} ${U+o} Z`},ae=({length:e,tail:t,base:n,tip:r})=>{let[i,a,o,s]=[W(e),W(t),W(n),W(r)],c=U-i*.14;return`M ${U} ${U+a} L ${U+o/2} ${U+a} L ${U+s/2} ${c} L ${U} ${U-i} Z`},oe=({length:e,tip:t})=>{let[n,r]=[W(e),W(t)*.42];return`M ${U-r/2} ${U-n*.16} L ${U-r/2} ${U-n*.78} L ${U} ${U-n*.93} L ${U+r/2} ${U-n*.78} L ${U+r/2} ${U-n*.16} Z`},Q=(e,t,n)=>(0,s.jsxs)(s.Fragment,{children:[e.facet&&(0,s.jsx)(`path`,{className:`ac-hand-facet ac-hand-facet--${n}`,d:ae(e),style:{fill:P(`hand-shine`,`rgba(255,255,255,0.35)`)},transform:`rotate(${t} ${U} ${U})`}),e.inlay&&(0,s.jsx)(`path`,{className:`ac-hand-inlay ac-hand-inlay--${n}`,d:oe(e),style:{fill:P(`hand-inlay`,`rgba(255,255,255,0.85)`)},transform:`rotate(${t} ${U} ${U})`})]}),$=R.secondHand,se=!!t&&e>=50,ce=`face${S}`,le=`bezel${S}`,ue=`shadow${S}`,de=`hshadow${S}`,fe=k(b??{hours:0,minutes:0,seconds:0},a,u),pe=b?fe:`Clock`,me=t?`${t}: ${pe}`:pe;return(0,s.jsxs)(`div`,{className:`analog-clock analog-clock--${r}`,"data-face":r,"data-theme":i,style:{display:`inline-flex`,flexDirection:`column`,alignItems:`center`,...B},children:[(0,s.jsxs)(`svg`,{width:H,height:H,viewBox:`0 0 ${H} ${H}`,role:`img`,"aria-label":me,children:[(0,s.jsxs)(`defs`,{children:[(0,s.jsxs)(`radialGradient`,{id:ce,cx:`50%`,cy:`40%`,r:`65%`,children:[(0,s.jsx)(`stop`,{offset:`0%`,style:{stopColor:V.faceInner}}),(0,s.jsx)(`stop`,{offset:`100%`,style:{stopColor:V.faceOuter}})]}),(0,s.jsxs)(`linearGradient`,{id:le,x1:`0`,y1:`0`,x2:`1`,y2:`1`,children:[(0,s.jsx)(`stop`,{offset:`0%`,style:{stopColor:V.bezel}}),(0,s.jsx)(`stop`,{offset:`50%`,style:{stopColor:V.bezel2}}),(0,s.jsx)(`stop`,{offset:`100%`,style:{stopColor:V.bezel}})]}),(0,s.jsx)(`filter`,{id:ue,x:`-20%`,y:`-20%`,width:`140%`,height:`140%`,children:(0,s.jsx)(`feDropShadow`,{dx:`0`,dy:W(.03),stdDeviation:W(.05),floodColor:`#000`,floodOpacity:z.faceShadow})}),(0,s.jsx)(`filter`,{id:de,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,s.jsx)(`feDropShadow`,{dx:`0`,dy:`1`,stdDeviation:`1`,floodColor:`#000`,floodOpacity:z.handShadow})})]}),(0,s.jsx)(`circle`,{className:`ac-bezel`,cx:U,cy:U,r:e,fill:`url(#${ce})`,stroke:`url(#${le})`,strokeWidth:Math.max(R.bezelMinWidth,W(R.bezelWidth)),filter:`url(#${ue})`}),R.innerRing&&(0,s.jsx)(`circle`,{cx:U,cy:U,r:W(.95),fill:`none`,style:{stroke:V.bezel},strokeOpacity:.25,strokeWidth:1}),R.rings.map((e,t)=>(0,s.jsx)(`circle`,{className:`ac-ring`,cx:U,cy:U,r:W(e.radius),fill:`none`,style:{stroke:P(`ring`,V.tick)},strokeWidth:Math.max(1,W(e.width))},t)),ne.map(e=>{let t=e.isHour?`ac-tick ac-tick--hour`:`ac-tick`,n=re(e.i,e.isHour),r=e.i*6;if(e.shape===`dot`)return(0,s.jsx)(`circle`,{className:t,cx:e.centre.x,cy:e.centre.y,r:e.width/2,style:{fill:n}},e.i);if(e.shape===`square`)return(0,s.jsx)(`rect`,{className:t,x:e.centre.x-e.width/2,y:e.centre.y-e.width/2,width:e.width,height:e.width,style:{fill:n},transform:`rotate(${r} ${e.centre.x} ${e.centre.y})`},e.i);if(e.shape===`triangle`){let i=U-Math.hypot(e.outer.x-U,e.outer.y-U),a=U-Math.hypot(e.inner.x-U,e.inner.y-U);return(0,s.jsx)(`polygon`,{className:t,points:`${U-e.width/2},${i} ${U+e.width/2},${i} ${U},${a}`,style:{fill:n},transform:`rotate(${r} ${U} ${U})`},e.i)}if(e.shape===`double`){let i=U-Math.hypot(e.outer.x-U,e.outer.y-U),a=U-Math.hypot(e.inner.x-U,e.inner.y-U),o=Math.max(1,e.width*.32);return(0,s.jsxs)(`g`,{className:t,style:{stroke:n},strokeWidth:o,strokeLinecap:R.linecap,transform:`rotate(${r} ${U} ${U})`,children:[(0,s.jsx)(`line`,{x1:U-e.width/2,y1:i,x2:U-e.width/2,y2:a}),(0,s.jsx)(`line`,{x1:U+e.width/2,y1:i,x2:U+e.width/2,y2:a})]},e.i)}return(0,s.jsx)(`line`,{className:t,x1:e.outer.x,y1:e.outer.y,x2:e.inner.x,y2:e.inner.y,style:{stroke:n},strokeOpacity:!e.isHour&&f?.45:void 0,strokeWidth:e.width,strokeLinecap:R.linecap},e.i)}),ie.map(({num:e,text:t,x:n,y:r})=>(0,s.jsx)(`text`,{className:`ac-number`,x:n,y:r,textAnchor:`middle`,dominantBaseline:`central`,fontSize:W(e%3==0?R.numberSize:R.minorNumberSize),style:{fill:V.number,fontFamily:P(`number-font`,N),fontWeight:P(`number-weight`,`bold`)},opacity:e%3==0?1:R.minorNumberOpacity,transform:R.rotateNumbers?`rotate(${e*30} ${n} ${r})`:void 0,children:t},e)),se&&(0,s.jsx)(`text`,{className:`ac-label`,x:U,y:U-W(R.labelOffset),textAnchor:`middle`,dominantBaseline:`central`,fontSize:W(.1),letterSpacing:W(.012),style:{fill:V.label,fontFamily:P(`label-font`,N),fontWeight:P(`label-weight`,`bold`)},children:t.toUpperCase()}),b&&(0,s.jsxs)(`g`,{filter:`url(#${de})`,children:[(0,s.jsx)(`path`,{"data-hand":`hour`,className:`ac-hand ac-hand--hour`,d:Z(R.hourHand),style:{fill:V.hourHand},transform:`rotate(${q} ${U} ${U})`}),Q(R.hourHand,q,`hour`),(0,s.jsx)(`path`,{"data-hand":`minute`,className:`ac-hand ac-hand--minute`,d:Z(R.minuteHand),style:{fill:V.minuteHand},transform:`rotate(${J} ${U} ${U})`}),Q(R.minuteHand,J,`minute`),a&&(0,s.jsxs)(`g`,{ref:I,"data-hand":`second`,"data-motion":C,className:`ac-hand ac-hand--second`,transform:`rotate(${te} ${U} ${U})`,children:[(0,s.jsx)(`line`,{x1:U,y1:U+W($.tail),x2:U,y2:U-W($.length),style:{stroke:V.secondHand},strokeWidth:Math.max(1,W($.width)),strokeLinecap:`round`}),$.weightStyle===`bar`?(0,s.jsx)(`rect`,{x:U-W($.weight)/2,y:U,width:W($.weight),height:W($.tail),style:{fill:V.secondHand}}):(0,s.jsx)(`circle`,{cx:U,cy:U+W($.tail),r:W($.weight),style:$.weightStyle===`ring`?{fill:`none`,stroke:V.secondHand}:{fill:V.secondHand},strokeWidth:$.weightStyle===`ring`?Math.max(1,W($.width)):void 0})]})]}),(0,s.jsx)(`circle`,{"data-part":`cap`,cx:U,cy:U,r:Math.max(3,W(R.capRadius)),style:{fill:V.cap}}),(0,s.jsx)(`circle`,{"data-part":`cap-dot`,cx:U,cy:U,r:Math.max(1.5,W(R.capDotRadius)),style:{fill:V.capDot}})]}),l&&(0,s.jsx)(`div`,{className:`analog-clock-digital`,style:{fontSize:W(.25),fontFamily:P(`digital-font`,N),fontWeight:`bold`,letterSpacing:`0.1em`,marginTop:8,color:V.digital},children:(0,s.jsx)(`span`,{style:b?void 0:{visibility:`hidden`},"aria-hidden":!b||void 0,children:fe})})]})}var I=[{label:`Local time`,tz:``},{label:`UTC`,tz:`UTC`},{label:`New York`,tz:`America/New_York`},{label:`Chicago`,tz:`America/Chicago`},{label:`Los Angeles`,tz:`America/Los_Angeles`},{label:`São Paulo`,tz:`America/Sao_Paulo`},{label:`London`,tz:`Europe/London`},{label:`Paris`,tz:`Europe/Paris`},{label:`Berlin`,tz:`Europe/Berlin`},{label:`Moscow`,tz:`Europe/Moscow`},{label:`Dubai`,tz:`Asia/Dubai`},{label:`Kolkata`,tz:`Asia/Kolkata`},{label:`Singapore`,tz:`Asia/Singapore`},{label:`Shanghai`,tz:`Asia/Shanghai`},{label:`Tokyo`,tz:`Asia/Tokyo`},{label:`Sydney`,tz:`Australia/Sydney`},{label:`Auckland`,tz:`Pacific/Auckland`}],L=[{prop:`borderColor`,label:`Border`,initial:`#000000`},{prop:`tickColor`,label:`Ticks`,initial:`#000000`},{prop:`numberColor`,label:`Numbers`,initial:`#000000`},{prop:`hourHandColor`,label:`Hour Hand`,initial:`#000000`},{prop:`minuteHandColor`,label:`Minute Hand`,initial:`#000000`},{prop:`secondHandColor`,label:`Second Hand`,initial:`#e03a3a`},{prop:`digitalColor`,label:`Digital Time`,initial:`#000000`}],R=()=>Object.fromEntries(L.map(e=>[e.prop,{enabled:!1,value:e.initial}]));function z(){let{isDark:e}=i(),[t,r]=(0,o.useState)(120),[c,u]=(0,o.useState)(``),[d,f]=(0,o.useState)(``),[p,m]=(0,o.useState)(`default`),[h,g]=(0,o.useState)(`12h`),[_,v]=(0,o.useState)(!0),[y,x]=(0,o.useState)(`tick`),[S,C]=(0,o.useState)(!0),[w,T]=(0,o.useState)(R),E=e?`dark`:`light`,D=(e,t)=>T(n=>({...n,[e]:{...n[e],...t}})),O=Object.fromEntries(L.filter(e=>w[e.prop].enabled).map(e=>[e.prop,w[e.prop].value])),k=Object.keys(O).length,A=[t!==100&&`  radius={${t}}`,c&&`  label="${c}"`,d&&`  timezone="${d}"`,p!=="default"&&`  face="${p}"`,E!==`light`&&`  theme="${E}"`,h!==`12h`&&`  timeFormat="${h}"`,!_&&`  showSeconds={false}`,y!==`tick`&&`  secondHandMotion="${y}"`,!S&&`  showDigital={false}`,...Object.entries(O).map(([e,t])=>`  ${e}="${t}"`)].filter(Boolean),j=`import { Clock } from '@studiotoolkit/analog-clock';
import '@studiotoolkit/analog-clock/style.css';

${A.length?`<Clock\n${A.join(`
`)}\n/>`:`<Clock />`}`,M=()=>navigator.clipboard.writeText(j);return(0,s.jsxs)(`div`,{className:`build-clock-page`,children:[(0,s.jsx)(n,{}),(0,s.jsxs)(`main`,{className:`build-clock-content`,children:[(0,s.jsxs)(`h4`,{className:`page-title`,children:[`Build `,(0,s.jsx)(`span`,{children:`<Clock />`})]}),(0,s.jsxs)(`div`,{className:`build-clock-row1`,children:[(0,s.jsxs)(`div`,{className:`build-clock-controls`,children:[(0,s.jsx)(`h3`,{children:`Settings`}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-face`,children:`Watch Face`}),(0,s.jsx)(`select`,{id:`clock-face`,value:p,onChange:e=>m(e.target.value),className:`build-clock-select`,children:l.map(e=>(0,s.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsxs)(`label`,{htmlFor:`clock-radius`,children:[`Radius (`,t,`px)`]}),(0,s.jsx)(`input`,{id:`clock-radius`,type:`range`,min:30,max:200,value:t,onChange:e=>r(Number(e.target.value)),className:`build-clock-range`})]}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-label`,children:`Label`}),(0,s.jsx)(`input`,{id:`clock-label`,type:`text`,placeholder:`e.g. London`,value:c,onChange:e=>u(e.target.value),className:`build-clock-text-input`})]}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-timezone`,children:`Time Zone`}),(0,s.jsx)(`select`,{id:`clock-timezone`,value:d,onChange:e=>f(e.target.value),className:`build-clock-select`,children:I.map(e=>(0,s.jsx)(`option`,{value:e.tz,children:e.label},e.tz))})]}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-format`,children:`Digital Format`}),(0,s.jsxs)(`select`,{id:`clock-format`,value:h,onChange:e=>g(e.target.value),className:`build-clock-select`,children:[(0,s.jsx)(`option`,{value:`12h`,children:`12-hour`}),(0,s.jsx)(`option`,{value:`24h`,children:`24-hour`})]})]}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-seconds`,children:`Second Hand`}),(0,s.jsx)(`input`,{id:`clock-seconds`,type:`checkbox`,checked:_,onChange:e=>v(e.target.checked)})]}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-motion`,children:`Second Hand Motion`}),(0,s.jsx)(`select`,{id:`clock-motion`,value:y,disabled:!_,onChange:e=>x(e.target.value),className:`build-clock-select`,children:b.map(e=>(0,s.jsx)(`option`,{value:e.id,children:e.label},e.id))})]}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-digital`,children:`Digital Time`}),(0,s.jsx)(`input`,{id:`clock-digital`,type:`checkbox`,checked:S,onChange:e=>C(e.target.checked)})]}),(0,s.jsxs)(`details`,{className:`build-clock-colors`,children:[(0,s.jsxs)(`summary`,{className:`build-clock-subheading`,children:[`Colors`,k>0&&(0,s.jsxs)(`span`,{className:`build-clock-colors-count`,children:[`· `,k,` custom`]})]}),(0,s.jsxs)(`div`,{className:`build-clock-colors-body`,children:[(0,s.jsx)(`p`,{className:`build-clock-hint`,children:`Tick a color to override the watch face.`}),L.map(({prop:e,label:t})=>(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`label`,{htmlFor:`clock-${e}`,children:t}),(0,s.jsxs)(`div`,{className:`build-clock-color-row`,children:[(0,s.jsx)(`input`,{id:`clock-${e}`,type:`checkbox`,checked:w[e].enabled,onChange:t=>D(e,{enabled:t.target.checked})}),(0,s.jsx)(`input`,{type:`color`,"aria-label":`${t} color`,value:w[e].value,disabled:!w[e].enabled,onChange:t=>D(e,{value:t.target.value}),className:`build-clock-color-picker`})]})]},e))]})]}),(0,s.jsx)(`p`,{className:`build-clock-hint`,children:`Theme follows the site's light/dark toggle.`}),(0,s.jsxs)(`div`,{className:`build-clock-control-inline`,children:[(0,s.jsx)(`span`,{}),(0,s.jsx)(`button`,{className:`build-clock-reset-button`,onClick:()=>{r(120),u(``),f(``),m(`default`),g(`12h`),v(!0),x(`tick`),C(!0),T(R())},children:`Reset`})]})]}),(0,s.jsxs)(`div`,{className:`build-clock-preview`,children:[(0,s.jsx)(`h3`,{children:`Preview`}),(0,s.jsx)(`div`,{className:`build-clock-stage`,children:(0,s.jsx)(F,{radius:t,label:c,timezone:d||null,face:p,theme:E,timeFormat:h,showSeconds:_,secondHandMotion:y,showDigital:S,...O})})]}),(0,s.jsxs)(`div`,{className:`build-clock-code-section`,children:[(0,s.jsxs)(`div`,{className:`build-clock-code-header`,children:[(0,s.jsx)(`h3`,{children:`Generated Code`}),(0,s.jsx)(`button`,{className:`build-clock-copy-button`,onClick:M,children:`Copy`})]}),(0,s.jsx)(`textarea`,{className:`build-clock-textarea`,value:j,readOnly:!0})]})]}),(0,s.jsxs)(`section`,{className:`build-clock-faces`,"aria-labelledby":`clock-faces-title`,children:[(0,s.jsx)(`h3`,{id:`clock-faces-title`,children:`Faces`}),(0,s.jsx)(`div`,{className:`build-clock-faces-grid`,children:l.map(e=>(0,s.jsxs)(`button`,{type:`button`,className:`build-clock-face-card${p===e.id?` is-selected`:``}`,"aria-pressed":p===e.id,onClick:()=>m(e.id),children:[(0,s.jsx)(`span`,{className:`build-clock-face-name`,children:e.label}),(0,s.jsx)(F,{face:e.id,theme:E,radius:72,timezone:d||null,showSeconds:_,secondHandMotion:y,showDigital:!1})]},e.id))})]})]}),(0,s.jsx)(a,{})]})}export{z as default};