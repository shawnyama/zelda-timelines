import{m as P}from"./chunk-BAOP5US2-C9QlnglV-BDK6vGe_.js";import{d as p,G as U,Y as j,U as H,a as I,X as Q,i as _,$ as R,c as q,A as J,a6 as K,a8 as Z,E as tt,p as et,F as at,a9 as y,aa as nt,ab as z}from"./index-DxZAA8Is.js";import{X as rt}from"./gitGraph-YCYPL57B-MiYrXWen-CxBHwt-2.js";import{h as L}from"./arc-CgwJY7BF-C6vba0JM.js";import{h as it}from"./ordinal-DfAQgscy-Pc8f3NoK.js";import"./_baseUniq-v35O2o7d-CdYoI0Wa.js";import"./_basePickBy-CyGFI_ex-D0pNdhKy.js";import"./clone-xDQJtMzt-DT7YyW4w.js";import"./init-DjUOC4st-DHuO7-vr.js";function lt(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function ot(t){return t}function st(){var t=ot,a=lt,l=null,h=y(0),g=y(z),S=y(0);function i(e){var n,s=(e=nt(e)).length,u,$,x=0,c=new Array(s),r=new Array(s),f=+h.apply(this,arguments),A=Math.min(z,Math.max(-z,g.apply(this,arguments)-f)),m,C=Math.min(Math.abs(A)/s,S.apply(this,arguments)),D=C*(A<0?-1:1),d;for(n=0;n<s;++n)(d=r[c[n]=n]=+t(e[n],n,e))>0&&(x+=d);for(a!=null?c.sort(function(w,v){return a(r[w],r[v])}):l!=null&&c.sort(function(w,v){return l(e[w],e[v])}),n=0,$=x?(A-s*D)/x:0;n<s;++n,f=m)u=c[n],d=r[u],m=f+(d>0?d*$:0)+D,r[u]={data:e[u],index:n,value:d,startAngle:f,endAngle:m,padAngle:C};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(h=typeof e=="function"?e:y(+e),i):h},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:y(+e),i):g},i.padAngle=function(e){return arguments.length?(S=typeof e=="function"?e:y(+e),i):S},i}var ct=at.pie,E={sections:new Map,showData:!1},M=E.sections,F=E.showData,pt=structuredClone(ct),ut=p(()=>structuredClone(pt),"getConfig"),dt=p(()=>{M=new Map,F=E.showData,et()},"clear"),gt=p(({label:t,value:a})=>{M.has(t)||(M.set(t,a),R.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=p(()=>M,"getSections"),mt=p(t=>{F=t},"setShowData"),ht=p(()=>F,"getShowData"),V={getConfig:ut,clear:dt,setDiagramTitle:_,getDiagramTitle:Q,setAccTitle:I,getAccTitle:H,setAccDescription:j,getAccDescription:U,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=p((t,a)=>{P(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),wt={parse:p(async t=>{const a=await rt("pie",t);R.debug(a),xt(a,V)},"parse")},yt=p(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),St=yt,$t=p(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),At=p((t,a,l,h)=>{R.debug(`rendering pie chart
`+t);const g=h.db,S=q(),i=J(g.getConfig(),S.pie),e=40,n=18,s=4,u=450,$=u,x=K(a),c=x.append("g");c.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=S;let[f]=Z(r.pieOuterStrokeWidth);f??(f=2);const A=i.textPosition,m=Math.min($,u)/2-e,C=L().innerRadius(0).outerRadius(m),D=L().innerRadius(m*A).outerRadius(m*A);c.append("circle").attr("cx",0).attr("cy",0).attr("r",m+f/2).attr("class","pieOuterCircle");const d=g.getSections(),w=$t(d),v=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],T=it(v);c.selectAll("mySlices").data(w).enter().append("path").attr("d",C).attr("fill",o=>T(o.data.label)).attr("class","pieCircle");let W=0;d.forEach(o=>{W+=o}),c.selectAll("mySlices").data(w).enter().append("text").text(o=>(o.data.value/W*100).toFixed(0)+"%").attr("transform",o=>"translate("+D.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const O=c.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const k=n+s,G=k*T.domain().length/2,N=12*n,Y=b*k-G;return"translate("+N+","+Y+")"});O.append("rect").attr("width",n).attr("height",n).style("fill",T).style("stroke",T),O.data(w).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:b,value:k}=o.data;return g.getShowData()?`${b} [${k}]`:b});const X=Math.max(...O.selectAll("text").nodes().map(o=>o?.getBoundingClientRect().width??0)),B=$+e+n+s+X;x.attr("viewBox",`0 0 ${B} ${u}`),tt(x,u,B,i.useMaxWidth)},"draw"),vt={draw:At},Et={parser:wt,db:V,renderer:vt,styles:St};export{Et as diagram};
