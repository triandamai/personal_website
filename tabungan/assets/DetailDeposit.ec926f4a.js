var e=Object.assign;import{d as a,n as t,j as i,l as s,r as l,o as n,c as o,p as r,v as c,a as d,t as u,w as g,m}from"./index.32dd00ad.js";import{u as f}from"./UserState.cd87c685.js";import{u as p}from"./SavingState.89a37c01.js";import{_ as b,u as x}from"./NoData.2fab0780.js";import{_ as h,a as v,b as k,c as w,d as y}from"./DialogLoading.fc63e711.js";var D=a({components:{BaseDialog:h,DialogLoading:v,DialogResult:k,IconFailed:w,IconSuccess:y,NoData:b},setup(){const a=s(),{getProfil:l,userState:n}=f(),{getDepositById:o,acceptDeposit:r}=p(),c=t({_id:"",sender:"",nominal:0,savingId:"",receipt:"",receiptname:"",accepted:"",description:"",type:"deposit",createdAt:0,updatedAt:0}),d=t(!1);return i((()=>{l(),o().then((e=>{e?(d.value=!1,c.value=e[0]):d.value=!0,console.log(c.value.sender!=n.profil.uid),console.log(""==c.value.accepted)}))})),e(e(e({userState:n,route:a,verifikasiDeposit:function(){r(n.profil.uid,c.value._id)}},p()),x()),{tabungan:c,noData:d})}});const j={class:"h-full w-full px-8 py-20 bg-gray-900"},S={class:"flex lg:flex-row flex-col items-center min-h-screen",style:{"font-family":"'Poppins', sans-serif"}},_={class:"w-full lg:w-1/2 text-center justify-center flex lg:mb-0 mb-12"},O={class:"lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:text-left text-center"},I=d("h2",{class:"md:text-4xl text-3xl text-white font-semibold mb-10 tracking-tight"}," Tabungan ",-1),N={class:"mb-8"},Y={class:"font-medium text-2xl text-white mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center"},C=d("p",{class:"text-base leading-7 tracking-wide sm:inline-block hidden caption-content-3-3"},[m(" We have provided highly experienced mentors"),d("br"),m(" for several years. ")],-1),H=m(" Kembali "),L={class:"mb-6 text-base leading-7 tracking-wide inline-block sm:hidden caption-content-3-3"};D.render=function(e,a,t,i,s,m){const f=l("no-data"),p=l("router-link"),b=l("dialog-loading"),x=l("base-dialog"),h=l("icon-failed"),v=l("dialog-result"),k=l("icon-success");return n(),o("section",j,[r(d(f,{class:"min-h-screen",title:"Uuups",text:"Gagal mengambil detail \n coba nanti agi ya..",button:"Okedeh"},null,8,["text"]),[[c,e.noData]]),r(d("div",S,[d("div",_,[d("img",{class:"rounded-lg",src:e.tabungan.receipt,alt:""},null,8,["src"])]),d("div",O,[I,d("ul",null,[d("li",N,[d("h4",Y,u(e.format(e.tabungan.nominal,"Rp")),1),C])]),r(d("button",{onClick:a[1]||(a[1]=(...a)=>e.verifikasiDeposit&&e.verifikasiDeposit(...a)),class:"mb-6 btn-fill-content-3-3 px-10 py-4 text-base text-white font-semibold rounded-xl cursor-pointer focus:outline-none tracking-wide"}," Terima ",512),[[c,e.tabungan.sender!=e.userState.profil.uid&&e.tabungan.accepted.length<1]]),d(p,{to:"/main/dashboard",class:"mb-6 px-10 py-4 text-base text-white font-semibold rounded-xl cursor-pointer focus:outline-none tracking-wide"},{default:g((()=>[H])),_:1}),d("p",L,u(e.route.params.id),1)])],512),[[c,!e.noData]]),d(x,{show:e.isLoading(),dissmisable:!1},{default:g((()=>[d(b)])),_:1},8,["show"]),d(x,{show:e.isDialogResult(),dissmisable:!0,onOnDismis:a[4]||(a[4]=a=>e.dismiss())},{default:g((()=>[e.isDialogSuccess()?(n(),o(v,{key:1,title:"Yuhuuu..",message:"Selamat! kamu berhasil menabung yuk tingkatkan lagi",positive:"Oke Coba lagi",negative:"Yaudah kembali",onOnNegative:a[3]||(a[3]=a=>e.gotoHome())},{default:g((()=>[d("div",null,[d(k)])])),_:1},8,["title"])):(n(),o(v,{key:0,title:"Yaah..",message:"Gagal verifikasi nih..Hal kaya gini normal sih bisanya si server lagi cape..",positive:"Oke Coba lagi",negative:"Yaudah kembali",onOnNegative:a[2]||(a[2]=a=>e.gotoHome())},{default:g((()=>[d("div",null,[d(h)])])),_:1},8,["title","message"]))])),_:1},8,["show"])])};export default D;
