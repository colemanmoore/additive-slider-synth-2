(this["webpackJsonpadditive-slider-synth-2"]=this["webpackJsonpadditive-slider-synth-2"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(3),a=n.n(c),s=(n(12),n(1)),r=n(6),u=o.a.createContext(),l=function(e){var t,n=e.sliderHeight,o=void 0===n?100:n,c=e.initialLevel,a=void 0===c?0:c,r=Object(i.useState)(5),u=Object(s.a)(r,2),l=u[0],f=u[1],d=Object(i.useState)(a),v=Object(s.a)(d,2),h=v[0],m=v[1],b=function e(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",e)},p=function(e){var n=e.pageX,i=e.layerY;m((o-i)/o);var c,a,s,r=n-t;0!==r&&f((c=0,a=l+r,s=10,Math.min(Math.max(c,a),s)))};return[h,l,function(e){var n=e.pageX;t=n,document.addEventListener("mousemove",p),document.addEventListener("mouseup",b)},b,function(){m(0===h?.5:0)}]},f="#ff4499";var d={height:"".concat(300,"px"),width:"50px",float:"left",marginRight:"2px"},v={backgroundColor:"#2a282a",border:"black 1px solid",width:"40px",height:"".concat(300,"px"),position:"relative",left:"5px",cursor:"grab",display:"flex",flexDirection:"column",justifyContent:"flex-end"},h=function(e){var t=e.pid,n=e.noteOn,c=Object(i.useContext)(u),a=c.voice(t),h=Object(i.useState)(f),m=Object(s.a)(h,2),b=m[0],p=m[1],y=l({sliderHeight:300,initialLevel:a?a.vca.gain.value:0}),x=Object(s.a)(y,5),O=x[0],g=x[1],j=x[2],C=x[3],k=x[4];return Object(i.useEffect)((function(){isNaN(O)||c.voiceGain(t,O)}),[O,c,t]),Object(i.useEffect)((function(){c.voiceDetune(t,g)}),[g,c,t]),Object(i.useEffect)((function(){p(n?"#b3dbac":f)}),[n]),o.a.createElement("div",{style:d,onMouseDown:j,onMouseUp:C,onDoubleClick:function(){c.resumeAudio(),k()}},o.a.createElement("div",{style:Object(r.a)({},v,{left:"".concat(g,"px")})},o.a.createElement("div",{style:{height:"".concat(300*O,"px"),background:b,transition:"height 0.08s"}})))},m=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)(!1),a=Object(s.a)(c,2),r=a[0],u=a[1];return Object(i.useEffect)((function(){n&&(u(!0),setTimeout((function(){u(!1)}),100)),n||u(!1)}),[n]),[r,o]},b={minWidth:"700px",margin:"100px auto 50px",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},p={padding:"50px"},y={border:"1px solid #ffffff",color:"#ffffff",fontSize:"1.2rem",letterSpacing:"4px",padding:"10px 20px",borderRadius:"8px",cursor:"pointer"},x={color:"#f49",fontFamily:"sans-serif",letterSpacing:"3px",fontSize:"1.8rem",lineHeight:"2.15rem",marginBottom:"0.25rem"},O=function(){var e=Object(i.useContext)(u),t=m(),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(i.useRef)(null),l=Object(i.useState)([]),d=Object(s.a)(l,2),v=d[0],O=d[1],g=Object(i.useState)(e.waveform),j=Object(s.a)(g,2),C=j[0],k=j[1],E=Object(i.useState)(null),w=Object(s.a)(E,2),G=w[0],S=w[1],A=Object(i.useState)(null),F=Object(s.a)(A,2),T=F[0],V=F[1];Object(i.useEffect)((function(){r.current.focus()}),[]),Object(i.useEffect)((function(){O(Object.keys(e.voices))}),[e,e.voices,e.voicesConnected]),Object(i.useEffect)((function(){e&&e.masterGain>0&&(a(!0),setTimeout((function(){return a(!1)}),100))}),[e,e.masterGain,a]),Object(i.useEffect)((function(){S(T?o.a.createElement("strong",{style:{color:f}},Array.from("ASDFGHJKL").map((function(e){return e===T?o.a.createElement("span",{key:e,style:{color:"#b3dbac"}},e):e}))):o.a.createElement("strong",{style:{color:f}},"ASDFGHJKL"))}),[T]);return o.a.createElement("div",{style:b,onKeyDown:function(t){var n=t.keyCode;e.keyboardInput(n),V({65:"A",83:"S",68:"D",70:"F",71:"G",72:"H",74:"J",75:"K",76:"L"}[n]||null),a(!0)},onKeyUp:function(){e.keyboardInput(e.OFF),V(null),a(!1)},ref:r,tabIndex:"0"},o.a.createElement("div",null,v.map((function(e){return o.a.createElement(h,{key:e,pid:e,noteOn:c})})),o.a.createElement("div",{style:{color:"#ff5"}},e.voices.length)),o.a.createElement("div",{style:p},o.a.createElement("span",{style:y,onClick:function(){k(e.changeWave())}},C)),o.a.createElement("div",{style:x},"press a key: ",G))},g=n(4),j=n(5),C=function(){function e(t){var n=t.numberOfVoices,i=void 0===n?12:n,o=t.waveform,c=void 0===o?"sine":o;Object(g.a)(this,e),this.OFF="OFF",this.audioContext=null,this.voices={},this.numberOfVoices=0,this.voicesConnected=!1,this.waveform=null,this.numberOfVoices=i,this.waveform=c}return Object(j.a)(e,[{key:"resumeAudio",value:function(){if(!window.AudioContext&&!window.webkitAudioContext)return console.error("Browser does not support audio context"),void(this.voicesConnected=!1);this.audioContext?"suspended"===this.audioContext.state&&(console.log("resuming audio context..."),this.audioContext.resume()):(console.log("creating audio context..."),this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.audioContext.createGain()),this.voicesConnected||this.connectAllVoices()}},{key:"connectAllVoices",value:function(){this.masterGain.disconnect();for(var e=0;e<this.numberOfVoices;e++){var t=this.audioContext.createGain();t.gain.value=0===e?.5:0,t.connect(this.masterGain);var n=this.audioContext.createOscillator();n.type="sine",n.frequency.value=0,n.start(),n.connect(t),this.voices[e]={osc:n,vca:t}}this.masterGain.connect(this.audioContext.destination),this.voicesConnected=!0}},{key:"disconnectAllVoices",value:function(){for(var e=0;e<this.numberOfVoices;e++){var t=this.voices[e],n=t.osc,i=t.vca;i.disconnect(this.masterGain),n.disconnect(i),n.stop()}this.voices={},this.voicesConnected=!1}},{key:"voice",value:function(e){return this.voices[e]}},{key:"changeMasterGain",value:function(e){this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime),this.masterGain.gain.setTargetAtTime(e,this.audioContext.currentTime,.2)}},{key:"noteChange",value:function(e){var t=this;Object.keys(this.voices).filter((function(e){return!isNaN(parseInt(e))})).forEach((function(n){t.voice(n).osc.frequency.value=e*(parseInt(n)+1)}))}},{key:"keyboardInput",value:function(e){e!==this.OFF?this.keyToFrequency(e)&&(this.noteChange(this.keyToFrequency(e)/2),this.changeMasterGain(1)):this.changeMasterGain(0)}},{key:"voiceGain",value:function(e,t){this.voices[e]&&(this.voices[e].vca.gain.value=t/this.numberOfVoices)}},{key:"voiceDetune",value:function(e,t){this.voices[e]&&(this.voices[e].osc.detune.value=5*t)}},{key:"changeWave",value:function(){var e=this,t="triangle"===this.waveform?"sine":"triangle";return Object.keys(this.voices).forEach((function(n){e.voices[n].osc.type=t})),this.waveform=t,this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime),this.masterGain.gain.setTargetAtTime(0,this.audioContext.currentTime,.2),t}},{key:"keyToFrequency",value:function(e){var t={65:"a",83:"d",68:"e",70:"fsh",71:"g",72:"a",74:"b",75:"c8",76:"d8"};if(t[e])return{c:261.6,csh:277.2,d:297.7,dsh:311.1,e:329.6,f:349.2,fsh:370,g:392,gsh:415.3,a:440,ash:466.2,b:493.9,c8:523.2,d8:595.4}[t[e]]}}]),e}();var k={textAlign:"center",display:"flex",flexDirection:"column",padding:"50px"},E=function(){var e=new C({numberOfVoices:16});e.voiceGain(0,0,5);var t=Object(i.useRef)(null);return o.a.createElement("div",{style:k,onFocus:function(){e.resumeAudio()},ref:t},o.a.createElement(u.Provider,{value:e},o.a.createElement(O,null)))};a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4863e8a4.chunk.js.map