import{m as B}from"./chunk-BAOP5US2-C9QlnglV-BDK6vGe_.js";import{d as i,Y as S,G as F,X as P,i as W,U as z,a as T,A as x,a6 as Y,E as v,p as D,D as E,F as X,$}from"./index-DxZAA8Is.js";import{X as A}from"./gitGraph-YCYPL57B-MiYrXWen-CxBHwt-2.js";import"./_baseUniq-v35O2o7d-CdYoI0Wa.js";import"./_basePickBy-CyGFI_ex-D0pNdhKy.js";import"./clone-xDQJtMzt-DT7YyW4w.js";var w={packet:[]},m=structuredClone(w),H=X.packet,R=i(()=>{const t=x({...H,...E().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),G=i(()=>m.packet,"getPacket"),L=i(t=>{t.length>0&&m.packet.push(t)},"pushWord"),U=i(()=>{D(),m=structuredClone(w)},"clear"),u={pushWord:L,getPacket:G,getConfig:R,clear:U,setAccTitle:T,getAccTitle:z,setDiagramTitle:W,getDiagramTitle:P,getAccDescription:F,setAccDescription:S},j=1e4,I=i(t=>{B(t,u);let e=-1,o=[],s=1;const{bitsPerRow:n}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,$.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=n+1&&u.getPacket().length<j;){const[h,c]=M({start:a,end:r,label:p},s,n);if(o.push(h),h.end+1===s*n&&(u.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),M=i((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),q={parse:i(async t=>{const e=await A("packet",t);$.debug(e),I(e)},"parse")},J=i((t,e,o,s)=>{const n=s.db,a=n.getConfig(),{rowHeight:r,paddingY:p,bitWidth:h,bitsPerRow:c}=a,f=n.getPacket(),l=n.getDiagramTitle(),k=r+p,d=k*(f.length+1)-(l?0:r),b=h*c+2,g=Y(e);g.attr("viewbox",`0 0 ${b} ${d}`),v(g,d,b,a.useMaxWidth);for(const[y,C]of f.entries())K(g,C,y,a);g.append("text").text(l).attr("x",b/2).attr("y",d-k/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),K=i((t,e,o,{rowHeight:s,paddingX:n,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:h})=>{const c=t.append("g"),f=o*(s+a)+a;for(const l of e){const k=l.start%p*r+1,d=(l.end-l.start+1)*r-n;if(c.append("rect").attr("x",k).attr("y",f).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",k+d/2).attr("y",f+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!h)continue;const b=l.end===l.start,g=f-2;c.append("text").attr("x",k+(b?d/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",b?"middle":"start").text(l.start),b||c.append("text").attr("x",k+d).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),N={draw:J},O={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},V=i(({packet:t}={})=>{const e=x(O,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),rt={parser:q,db:u,renderer:N,styles:V};export{rt as diagram};
