var t=Object.assign;import{d as e,u as a,o,c as n,a as r,t as s}from"./index.32dd00ad.js";import{u as p}from"./NoData.2fab0780.js";var i=e({props:{tabungan:{type:Object}},setup(e){const o=a();return t(t({props:e},p()),{toDetail:function(){var t;o.push({path:`/detail/${null==(t=e.tabungan)?void 0:t._id}`})}})}});const l={class:"flex px-2 py-4 rounded-lg my-2 border-1 bg-opacity-10 bg-green-400 border-green-300"},d=r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:"18",height:"18",stroke:"currentColor"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 11l7-7 7 7M5 19l7-7 7 7"})],-1),c={class:"mx-2"},g={class:"text-white"};i.render=function(t,e,a,p,i,u){return o(),n("div",l,[r("div",{class:["rounded-full p-4 bg-opacity-30",t.props.tabungan.accepted?"bg-green-500 text-green-200":"bg-yellow-500 text-yellow-200"]},[d],2),r("div",c,[r("a",{onClick:e[1]||(e[1]=(...e)=>t.toDetail&&t.toDetail(...e)),class:["font-medium",t.props.tabungan.accepted?" text-green-600":"text-yellow-600"]},s(t.format(t.props.tabungan.nominal,"Rp")),3),r("p",g,s(t.props.tabungan.description),1)])])};export{i as _};
