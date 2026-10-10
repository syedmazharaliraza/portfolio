(function(){
const R=window.React, h=R.createElement;
const MONO="'Geist Mono',ui-monospace,monospace";
const ok=(l,c,hue,a)=>`oklch(${l} ${c} ${hue}${a!=null?' / '+a:''})`;
if(!document.getElementById('illo-kf')){const s=document.createElement('style');s.id='illo-kf';s.textContent='@keyframes illoIn{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:none}}@keyframes illoPop{0%{opacity:0;transform:scale(.92)}100%{opacity:1;transform:none}}@keyframes illoPulse{0%,100%{opacity:1}50%{opacity:.3}}@keyframes illoDot{0%,80%,100%{opacity:.25}40%{opacity:1}}@keyframes illoRing{0%{box-shadow:0 0 0 0 rgba(255,255,255,.35)}100%{box-shadow:0 0 0 14px rgba(255,255,255,0)}}';document.head.appendChild(s);}
function useTick(ms){const[t,setT]=R.useState(0);R.useEffect(()=>{const id=setInterval(()=>setT(x=>x+1),ms);return()=>clearInterval(id);},[ms]);return t;}
const B=(st,...k)=>h('div',{style:st},...k);
const S=(s,st)=>h('span',{style:st},s);
const mono=(s,st)=>S(s,Object.assign({fontFamily:MONO,fontSize:10,whiteSpace:'nowrap'},st));
const dots=(c)=>B({display:'inline-flex',gap:3},...[0,1,2].map(i=>S('',{width:4,height:4,borderRadius:'50%',background:c,animation:`illoDot 1s ${i*0.15}s infinite`})));
const scene=(bg,...k)=>B({position:'absolute',inset:0,background:bg,overflow:'hidden',fontFamily:"'Geist',system-ui,sans-serif",color:'#fff'},...k);

/* Markopolo — agent-led cart recovery across channels */
function Markopolo({t}){
  const H=285, p=t%20, ink=ok(0.96,0.02,H), soft=ok(0.75,0.06,H);
  const CH=[{n:'Email',hue:250},{n:'SMS',hue:160},{n:'WhatsApp',hue:150},{n:'Push',hue:75},{n:'AI voice',hue:30}];
  const steps=[
    {k:'Browsed product',d:'8:00 AM'},{k:'Added to cart',d:'12:30 PM'},{k:'Left at checkout',d:'12:34 PM',warn:1},
    {k:'Email',s:'ignored',ch:0,msg:'Your cart is waiting'},{k:'SMS',s:'read',ch:1,msg:'Still thinking it over?'},
    {k:'WhatsApp',s:'replied',ch:2,msg:'Want help picking a size?'},{k:'AI voice call',s:'connected',ch:4,call:1},
    {k:'Purchase recovered',d:'6:02 PM',win:1}];
  const n=Math.min(steps.length,Math.floor(p/2)+1), cur=steps[n-1], vis=steps.slice(Math.max(0,n-5),n);
  const phone=B({position:'absolute',right:'6%',top:'13%',bottom:'17%',width:'36%',borderRadius:18,background:'#0d0b14',border:`1px solid ${ok(0.4,0.06,H)}`,boxShadow:'0 18px 40px rgba(0,0,0,.45)',padding:'14px 10px',display:'flex',flexDirection:'column',gap:8},
    B({alignSelf:'center',width:36,height:4,borderRadius:2,background:'#2a2633'}),
    B({display:'flex',alignItems:'center',gap:6},S('',{width:18,height:18,borderRadius:'50%',background:`linear-gradient(135deg,${ok(0.7,0.17,H)},${ok(0.7,0.15,330)})`}),mono('your store',{color:soft})),
    B({flex:1,display:'flex',flexDirection:'column',justifyContent:'flex-end',gap:6},
      cur.msg?h('div',{key:'m'+n,style:{alignSelf:'flex-start',maxWidth:'92%',padding:'7px 9px',borderRadius:'10px 10px 10px 3px',background:ok(0.32,0.08,CH[cur.ch].hue),fontSize:11,lineHeight:1.3,animation:'illoPop .35s both'}},mono(CH[cur.ch].n,{display:'block',fontSize:9,opacity:.7,marginBottom:2}),cur.msg):null,
      cur.ch===2&&p%2===1?h('div',{key:'r'+n,style:{alignSelf:'flex-end',padding:'6px 9px',borderRadius:'10px 10px 3px 10px',background:'#2a2633',fontSize:11,animation:'illoPop .3s both'}},'Yes, M or L?'):null,
      cur.call?h('div',{key:'c'+n,style:{alignSelf:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:8,animation:'illoPop .3s both'}},S('',{width:40,height:40,borderRadius:'50%',background:ok(0.62,0.17,30),animation:'illoRing 1.2s infinite'}),mono('AI voice · 00:1'+(p%10),{color:soft})):null,
      cur.win?h('div',{key:'w'+n,style:{alignSelf:'stretch',padding:'10px',borderRadius:10,background:ok(0.4,0.12,150),fontSize:12,fontWeight:600,textAlign:'center',animation:'illoPop .35s both'}},'Order placed ✓'):null,
      !cur.msg&&!cur.call&&!cur.win?B({alignSelf:'flex-start',padding:'8px 10px',borderRadius:10,background:'#1c1926'},dots(soft)):null));
  return scene(`radial-gradient(110% 90% at 0% 0%, ${ok(0.32,0.12,H)}, #100d18 65%)`,
    B({position:'absolute',left:'6%',top:'6%',display:'flex',alignItems:'center',gap:8},S('',{width:8,height:8,borderRadius:'50%',background:ok(0.75,0.17,H),animation:'illoPulse 1.4s infinite'}),mono('Revenue agent · shopper journey',{color:ink,fontSize:10.5})),
    B({position:'absolute',left:'6%',top:'15%',bottom:'17%',width:'50%',display:'flex',flexDirection:'column',justifyContent:'flex-end',gap:6,overflow:'hidden'},
      ...vis.map((s,i)=>{const last=i===vis.length-1, hu=s.ch!=null?CH[s.ch].hue:s.warn?25:s.win?150:H;
        return h('div',{key:s.k,style:{display:'flex',alignItems:'center',gap:8,padding:'6px 8px',borderRadius:8,background:last?ok(0.3,0.07,hu,0.9):'rgba(255,255,255,.04)',border:`1px solid ${last?ok(0.55,0.12,hu):'rgba(255,255,255,.06)'}`,animation:'illoIn .4s both',opacity:last?1:.7}},
          S('',{flex:'none',width:7,height:7,borderRadius:2,background:ok(0.72,0.15,hu)}),
          S(s.k,{fontSize:11.5,fontWeight:500,flex:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}),
          mono(s.s||s.d,{color:s.s==='ignored'?'#9a96a6':ok(0.85,0.08,hu)}));})),
    phone,
    B({position:'absolute',left:'6%',right:'6%',bottom:'6%',display:'flex',gap:5},...CH.map((c,i)=>S(c.n,{flex:1,textAlign:'center',padding:'4px 0',borderRadius:5,fontFamily:MONO,fontSize:9.5,background:cur.ch===i?ok(0.4,0.1,c.hue):'rgba(255,255,255,.05)',color:cur.ch===i?'#fff':'#9a96a6',transition:'all .3s'})))
  );
}

/* Tealfeed — booking for appointment-led practices */
function Tealfeed({t}){
  const H=190, p=t%16, ink=ok(0.25,0.04,H), mid=ok(0.5,0.04,H);
  const days=[['Mon',12],['Tue',13],['Wed',14],['Thu',15],['Fri',16]], slots=['10:00','11:30','14:00','16:30'];
  const day=p>=2?2:-1, slot=p>=4?1:-1, pay=p>=6&&p<9, paid=p>=9, toast=p>=11;
  const teal=ok(0.62,0.11,H), tealBg=ok(0.95,0.03,H);
  return scene(`linear-gradient(160deg, ${ok(0.97,0.015,H)}, ${ok(0.92,0.03,H)})`,
    B({position:'absolute',inset:'7% 7% 7% 7%',borderRadius:12,background:'#fff',boxShadow:'0 10px 30px rgba(10,60,60,.12)',padding:'5% 6%',display:'flex',flexDirection:'column',gap:'4%',color:ink},
      B({display:'flex',alignItems:'center',gap:10},
        S('',{width:30,height:30,borderRadius:'50%',background:`linear-gradient(135deg,${ok(0.75,0.1,H)},${ok(0.6,0.12,220)})`}),
        B({display:'flex',flexDirection:'column',gap:1,flex:1},S('Counselling session',{fontSize:12.5,fontWeight:600}),S('50 min · online',{fontSize:10.5,color:mid})),
        mono('Book',{padding:'4px 9px',borderRadius:5,background:tealBg,color:ok(0.4,0.08,H)})),
      B({display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:5},...days.map(([d,n],i)=>B({padding:'6px 0',borderRadius:7,textAlign:'center',background:i===day?teal:'#f3f6f6',color:i===day?'#fff':ink,transition:'all .3s'},S(d,{display:'block',fontSize:9.5,opacity:.75}),S(String(n),{fontSize:13,fontWeight:600})))),
      B({display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:5},...slots.map((s,i)=>S(s,{padding:'6px 0',textAlign:'center',borderRadius:6,fontFamily:MONO,fontSize:10.5,border:`1px solid ${i===slot?teal:'#dde5e5'}`,background:i===slot?tealBg:'#fff',color:i===slot?ok(0.4,0.1,H):mid,opacity:day<0?.45:1,transition:'all .3s'}))),
      B({flex:1,minHeight:0,position:'relative'},
        pay?h('div',{key:'pay',style:{position:'absolute',inset:0,display:'flex',flexDirection:'column',gap:5,animation:'illoIn .35s both'}},
          ...[['UPI','PhonePe, GPay, Paytm'],['Card','Visa, Mastercard, RuPay'],['Net banking','Choose your bank']].map(([a,b],i)=>B({display:'flex',alignItems:'center',gap:8,padding:'5px 8px',borderRadius:6,border:`1px solid ${i===0&&p>=7?teal:'#e3eaea'}`,background:i===0&&p>=7?tealBg:'#fff',transition:'all .3s'},S('',{width:10,height:10,borderRadius:'50%',border:`2px solid ${i===0&&p>=7?teal:'#c9d4d4'}`}),S(a,{fontSize:11,fontWeight:600}),S(b,{fontSize:10,color:mid,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'})))):null,
        paid?h('div',{key:'paid',style:{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:6,animation:'illoPop .35s both'}},S('✓',{width:34,height:34,borderRadius:'50%',background:teal,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:700}),S('Payment done',{fontSize:12.5,fontWeight:600}),S('Wed 14 · 11:30',{fontFamily:MONO,fontSize:10.5,color:mid})):null,
        !pay&&!paid?B({position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'},S(slot<0?'Pick a time':'Continue to pay',{padding:'8px 16px',borderRadius:7,fontSize:11.5,fontWeight:600,background:slot<0?'#eef2f2':teal,color:slot<0?mid:'#fff',transition:'all .3s'})):null)),
    toast?h('div',{key:'toast',style:{position:'absolute',right:'4%',top:'4%',display:'flex',flexDirection:'column',gap:4,animation:'illoIn .4s both'}},
      B({padding:'7px 10px',borderRadius:8,background:ink,color:'#fff',fontSize:10.5,boxShadow:'0 8px 20px rgba(0,0,0,.2)'},'⏰ Reminder sent to client'),
      B({padding:'7px 10px',borderRadius:8,background:'#fff',color:ink,fontSize:10.5,border:'1px solid #dde5e5',boxShadow:'0 8px 20px rgba(0,0,0,.1)'},'Synced to Google Calendar')):null
  );
}

/* Cube — AI marketing agents: search ranking + review replies */
function Cube({t}){
  const H=262, p=t%16, pos=p<2?3:p<4?2:p<6?1:0, stars=Math.max(0,Math.min(5,p-6)), reply='Thank you! So glad the team made your visit easy — see you again soon.';
  const typed=p>=11?reply.slice(0,Math.min(reply.length,(p-10)*16)):'';
  const blue=ok(0.6,0.17,H);
  const tabs=['SEO','Reviews','Social','Paid ads'], tab=p<7?0:1;
  return scene(`linear-gradient(170deg, #0b0f1f, ${ok(0.2,0.06,H)})`,
    B({position:'absolute',left:'6%',right:'6%',top:'6%',display:'flex',gap:5},...tabs.map((s,i)=>S(s,{padding:'4px 9px',borderRadius:20,fontFamily:MONO,fontSize:9.5,background:i===tab?blue:'rgba(255,255,255,.06)',color:i===tab?'#fff':'#9aa3c0',transition:'all .3s'})),S('',{flex:1}),mono('AI agent',{color:'#9aa3c0',alignSelf:'center'})),
    B({position:'absolute',left:'6%',right:'6%',top:'17%',height:'40%',borderRadius:10,background:'#fff',padding:'3.5% 4%',color:'#1b2033',display:'flex',flexDirection:'column',gap:6},
      B({display:'flex',alignItems:'center',gap:8,height:22,borderRadius:11,border:'1px solid #e1e4ee',padding:'0 10px'},S('⌕',{fontSize:11,color:'#7a8199'}),S('dentist near me',{fontSize:10.5,color:'#4a5068'})),
      B({flex:1,position:'relative'},
        ...[0,1,2,3].map(i=>B({position:'absolute',left:0,right:'26%',top:`${i*25}%`,height:'22%',display:'flex',flexDirection:'column',justifyContent:'center',gap:3,opacity:.5},S('',{width:`${44+i*8}%`,height:4,borderRadius:2,background:'#c3c8d8'}),S('',{width:`${70-i*5}%`,height:3,borderRadius:2,background:'#e1e4ee'}))),
        B({position:'absolute',left:-4,right:'24%',top:`${pos*25}%`,height:'24%',display:'flex',alignItems:'center',gap:7,padding:'0 4px',borderRadius:6,background:ok(0.96,0.03,H),border:`1px solid ${ok(0.8,0.08,H)}`,transition:'top .7s cubic-bezier(.3,.7,.2,1)'},mono('#'+(pos+1),{color:blue,fontWeight:600}),B({flex:1,display:'flex',flexDirection:'column',gap:3},S('Bright Smile Dental',{fontSize:10.5,fontWeight:600,color:ok(0.45,0.17,H)}),S('★★★★★ · Open now',{fontSize:9,color:'#7a8199'}))),
        B({position:'absolute',right:0,top:0,bottom:0,width:'22%',display:'flex',alignItems:'flex-end',gap:2},...[3,4,4,5,6,7,8,10].map((v,i)=>S('',{flex:1,borderRadius:'2px 2px 0 0',height:`${(i<=Math.min(7,p)?v:2)*10}%`,background:i===7?blue:ok(0.85,0.06,H),transition:'height .5s'}))))),
    B({position:'absolute',left:'6%',right:'6%',top:'61%',bottom:'6%',borderRadius:10,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',padding:'3% 4%',display:'flex',flexDirection:'column',gap:5},
      B({display:'flex',alignItems:'center',gap:8},S('',{width:18,height:18,borderRadius:'50%',background:ok(0.7,0.12,40)}),S('New review',{fontSize:10.5,fontWeight:600}),S('★★★★★'.split('').map((s,i)=>i<stars?'★':'☆').join(''),{fontSize:11,color:ok(0.85,0.15,85),letterSpacing:1})),
      typed?B({flex:1,padding:'6px 8px',borderRadius:8,background:ok(0.3,0.1,H),fontSize:10.5,lineHeight:1.35},mono('AI reply · your brand voice',{display:'block',fontSize:9,color:'#b7c0e0',marginBottom:3}),typed,typed.length<reply.length?S('▍',{animation:'illoPulse .8s infinite'}):null)
        :B({display:'flex',flexDirection:'column',gap:4,paddingTop:2},S('',{width:'86%',height:4,borderRadius:2,background:'rgba(255,255,255,.18)'}),S('',{width:'64%',height:4,borderRadius:2,background:'rgba(255,255,255,.12)'})))
  );
}

/* Wayground — interactive video lesson + live quiz */
const QZ=[{hue:15,l:'A'},{hue:250,l:'B'},{hue:85,l:'C'},{hue:150,l:'D'}];
const tile=(i,label,state,extra)=>B(Object.assign({position:'relative',borderRadius:8,padding:'8px 10px',background:ok(state==='dim'?0.38:0.6,state==='dim'?0.06:0.15,QZ[i].hue),color:'#fff',fontSize:12,fontWeight:600,display:'flex',alignItems:'center',gap:8,boxShadow:state==='pick'||state==='right'?'0 0 0 2px #fff':'none',transition:'all .3s',overflow:'hidden'},extra||{}),S(QZ[i].l,{width:18,height:18,borderRadius:4,background:'rgba(0,0,0,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10}),label,state==='right'?S('✓',{marginLeft:'auto'}):null);
function WgVideo({t}){
  const H=300, p=t%18; let prog; if(p<6)prog=p/6*0.42; else if(p<12)prog=0.42; else prog=0.42+(p-12)/5*0.58;
  const q=p>=6&&p<12, pick=p>=8?1:-1, right=p>=9;
  const langs=['English','Español','Français','हिन्दी'];
  return scene(`linear-gradient(160deg, ${ok(0.3,0.12,H)}, #140b1f)`,
    B({position:'absolute',left:'6%',right:'6%',top:'6%',display:'flex',alignItems:'center',gap:8},B({flex:1,height:24,borderRadius:12,background:'rgba(255,255,255,.1)',display:'flex',alignItems:'center',padding:'0 10px',gap:7},S('⌕',{fontSize:11,opacity:.7}),S('fractions',{fontSize:10.5,opacity:.85})),h('span',{key:Math.floor(t/4)%4,style:{fontFamily:MONO,fontSize:10,padding:'4px 8px',borderRadius:12,background:'#fff',color:ok(0.4,0.15,H),animation:'illoPop .3s both'}},langs[Math.floor(t/4)%4])),
    B({position:'absolute',left:'6%',right:'6%',top:'17%',bottom:'7%',borderRadius:12,overflow:'hidden',background:`linear-gradient(135deg, ${ok(0.55,0.14,250)}, ${ok(0.45,0.16,H)})`},
      B({position:'absolute',left:'10%',top:'16%',width:'26%',aspectRatio:'1',borderRadius:'50%',background:ok(0.85,0.13,85),transform:`translateY(${q?0:Math.sin(t)*3}px)`}),
      B({position:'absolute',left:'44%',top:'22%',width:'16%',aspectRatio:'1',borderRadius:6,background:'rgba(255,255,255,.85)',transform:'rotate(12deg)'}),
      B({position:'absolute',left:'64%',top:'36%',width:'22%',height:'10%',borderRadius:4,background:'rgba(255,255,255,.35)'}),
      mono('Lesson video',{position:'absolute',left:12,top:10,color:'rgba(255,255,255,.85)'}),
      q?h('div',{key:'q',style:{position:'absolute',inset:'10% 8% 22% 8%',borderRadius:10,background:'rgba(20,10,35,.92)',padding:'10px',display:'flex',flexDirection:'column',gap:7,animation:'illoPop .35s both'}},
        S('Which is bigger: 1/2 or 1/3?',{fontSize:12.5,fontWeight:600}),
        B({display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,flex:1},...['1/2','1/3','Equal','Not sure'].map((a,i)=>tile(i,a,right?(i===0?'right':'dim'):i===pick-1?'pick':'',{padding:'6px 8px',fontSize:11})))):null,
      B({position:'absolute',left:'5%',right:'5%',bottom:'9%',height:5,borderRadius:3,background:'rgba(255,255,255,.25)'},
        B({height:'100%',width:(prog*100)+'%',borderRadius:3,background:'#fff',transition:'width .6s linear'}),
        ...[.42,.75].map(m=>B({position:'absolute',top:-4,left:`calc(${m*100}% - 6px)`,width:12,height:12,borderRadius:3,transform:'rotate(45deg)',background:prog>=m?ok(0.85,0.13,85):'rgba(255,255,255,.5)',transition:'background .3s'}))))
  );
}
function WgLive({t}){
  const H=300, p=t%16, joined=Math.min(28,4+p*3), live=p>=3&&p<12, reveal=p>=12;
  const resp=[0.12,0.68,0.12,0.08].map(v=>live||reveal?Math.min(v,v*(Math.min(p,11)-2)/8):0);
  const names=[['Aarav',250],['Mia',150],['Zoe',15],['Kabir',85]];
  const order=p<6?[0,1,2]:p<10?[1,0,2]:[1,2,0];
  return scene(`linear-gradient(160deg, ${ok(0.32,0.13,H)}, #130a1e)`,
    B({position:'absolute',left:'6%',right:'6%',top:'6%',display:'flex',alignItems:'center',gap:8},S('',{width:7,height:7,borderRadius:'50%',background:ok(0.7,0.2,25),animation:'illoPulse 1.2s infinite'}),mono('LIVE QUIZ',{fontSize:10.5,fontWeight:600}),S('',{flex:1}),B({display:'flex'},...names.map(([n,hu],i)=>S('',{width:18,height:18,borderRadius:'50%',background:ok(0.62,0.14,hu),border:'2px solid #2a1840',marginLeft:i?-6:0}))),mono(joined+' joined',{opacity:.85})),
    B({position:'absolute',left:'6%',width:'58%',top:'17%',bottom:'7%',display:'flex',flexDirection:'column',gap:7},
      B({padding:'9px 11px',borderRadius:10,background:'#fff',color:'#24123a',fontSize:13,fontWeight:700},'What is 7 × 8?'),
      B({flex:1,display:'grid',gridTemplateColumns:'1fr 1fr',gap:6},...['54','56','63','48'].map((a,i)=>B({position:'relative',borderRadius:8,overflow:'hidden'},
        tile(i,a,reveal?(i===1?'right':'dim'):'',{height:'100%'}),
        B({position:'absolute',left:0,bottom:0,height:4,width:(resp[i]*100/0.68)+'%',background:'rgba(255,255,255,.85)',transition:'width .5s'}))))),
    B({position:'absolute',right:'6%',width:'30%',top:'17%',bottom:'7%',borderRadius:10,background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.1)',padding:'8px',display:'flex',flexDirection:'column',gap:6},
      mono('Leaderboard',{opacity:.75}),
      B({position:'relative',flex:1},...[0,1,2].map(k=>{const r=order.indexOf(k);const [n,hu]=names[k];return B({position:'absolute',left:0,right:0,top:`${r*33}%`,height:'28%',display:'flex',alignItems:'center',gap:6,padding:'0 6px',borderRadius:6,background:r===0?'rgba(255,255,255,.14)':'transparent',transition:'top .6s cubic-bezier(.3,.7,.2,1)'},mono(String(r+1),{opacity:.7}),S('',{width:14,height:14,borderRadius:'50%',background:ok(0.62,0.14,hu)}),S(n,{fontSize:11,fontWeight:600}));})),
      h('span',{key:t,style:{fontFamily:MONO,fontSize:9.5,color:ok(0.85,0.12,85),animation:'illoIn .3s both'}},'synced · <150 ms'))
  );
}

/* Orbit — his own app: session statuses */
function Orbit({t}){
  const seq=['working','working','waiting for input','idle','finished','working'];
  const col={working:250,'waiting for input':30,idle:0,finished:160};
  const rows=[['Terminal','session 1'],['VS Code','session 2'],['Claude Desktop','session 3'],['Terminal','session 4']];
  return scene('radial-gradient(120% 80% at 80% 0%, oklch(0.24 0.03 160), #121316 60%)',
    B({position:'absolute',inset:'7%',display:'flex',flexDirection:'column',gap:'5%'},
      B({display:'flex',justifyContent:'space-between'},mono('Orbit',{fontSize:11.5}),mono(rows.length+' Claude Code sessions',{color:'#8a8d94'})),
      B({flex:1,display:'flex',flexDirection:'column',gap:'4%',justifyContent:'center'},...rows.map((r,i)=>{
        const s=seq[(Math.floor(t/2)+i*2)%seq.length], hu=col[s], wait=s==='waiting for input';
        return B({display:'flex',alignItems:'center',gap:10,padding:'3.2% 4%',borderRadius:8,border:`1px solid ${wait?ok(0.6,0.15,30):'#2a2c31'}`,background:wait?ok(0.22,0.04,30):'#17181c',transition:'all .4s'},
          S('',{width:8,height:8,borderRadius:'50%',background:hu?ok(0.7,0.14,hu):'#6a6d74',animation:wait?'illoPulse 1s infinite':'none'}),
          B({display:'flex',flexDirection:'column',gap:2,flex:1,minWidth:0},S(r[0],{fontSize:12,fontWeight:500}),mono(r[1],{color:'#8a8d94'})),
          mono(s,{padding:'3px 7px',borderRadius:4,background:hu?ok(0.3,0.06,hu):'#24262b',color:hu?ok(0.9,0.06,hu):'#8a8d94',transition:'all .4s'}),
          wait?mono('jump →',{color:ok(0.85,0.12,30)}):null);
      })))
  );
}
const MAP={'mk-intern':Markopolo,'mk-fe':Markopolo,tealfeed:Tealfeed,cube:Cube,'wg-l3':WgVideo,'wg-l4':WgLive,orbit:Orbit};
// Scenes are laid out on a fixed 480×360 canvas and scaled to fit, so they never reflow or clip at odd sizes.
const W=480, HT=360;
window.PortfolioIllo=function PortfolioIllo(props){
  const t=useTick(props.speed||650), ref=R.useRef(null), [k,setK]=R.useState(0);
  R.useLayoutEffect(()=>{const el=ref.current;const fit=()=>setK(Math.min(el.clientWidth/W,el.clientHeight/HT));fit();const ro=new ResizeObserver(fit);ro.observe(el);return()=>ro.disconnect();},[]);
  const Comp=MAP[props.kind]||Markopolo;
  return h('div',{ref,style:{position:'absolute',inset:0,overflow:'hidden'}},
    h('div',{style:{position:'absolute',left:'50%',top:'50%',width:W,height:HT,transform:`translate(-50%,-50%) scale(${k||1})`,visibility:k?'visible':'hidden'}},h(Comp,{t:props.kind==='mk-intern'?t+8:t})));
};
})();
