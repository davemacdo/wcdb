!function(a){var e={};function n(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return a[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=a,n.c=e,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{configurable:!1,enumerable:!0,get:t})},n.r=function(a){Object.defineProperty(a,"__esModule",{value:!0})},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=5)}([function(a,e,n){a.exports=n.p+"../css/style.css"},function(a){a.exports={AD:"Andorra",AE:["United Arab Emirates","UAE"],AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivia",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos (Keeling) Islands",CD:"Congo, The Democratic Republic of the",CF:"Central African Republic",CG:"Congo",CH:"Switzerland",CI:"Cote D'Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",EU:"European Union",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands (Malvinas)",FM:"Micronesia, Federated States of",FO:"Faroe Islands",FR:"France",GA:"Gabon",GB:["United Kingdom","UK"],GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong",HM:"Heard Island and Mcdonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran, Islamic Republic Of",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:["Democratic People's Republic of Korea","North Korea"],KR:["Korea, Republic of","South Korea"],KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Lao People's Democratic Republic",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libyan Arab Jamahiriya",MA:"Morocco",MC:"Monaco",MD:"Moldova, Republic of",ME:"Montenegro",MG:"Madagascar",MH:"Marshall Islands",MK:"Macedonia, The Former Yugoslav Republic of",ML:"Mali",MM:["Myanmar","Burma"],MN:"Mongolia",MO:"Macao",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn",PR:"Puerto Rico",PS:["Palestinian Territory, Occupied","Palestine"],PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Qatar",RE:"Reunion",RO:"Romania",RS:"Serbia",RU:"Russian Federation",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"Sao Tome and Principe",SV:"El Salvador",SY:"Syrian Arab Republic",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania, United Republic of",UA:"Ukraine",UG:"Uganda",UM:"United States Minor Outlying Islands",US:["United States","USA"],UY:"Uruguay",UZ:"Uzbekistan",VA:"Holy See (Vatican City State)",VC:"Saint Vincent and the Grenadines",VE:"Venezuela",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",VN:"Viet Nam",VU:"Vanuatu",WF:"Wallis and Futuna",WS:"Samoa",XK:"Kosovo",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe"}},function(a,e,n){"use strict";const t=n(1),i=127397,o=/^[a-z]{2}$/i,r=/^.{2,}$/,l=/\uD83C[\uDDE6-\uDDFF]/;function s(a,e){if(-1!==(e=e.toLowerCase()).indexOf(a)||-1!==a.indexOf(e))return!0;if(-1!==e.indexOf(",")){const n=e.split(", ").reverse().join(" ");if(-1!==n.indexOf(a)||-1!==a.indexOf(n))return!0}return!1}function c(a){return a=a.toUpperCase(),t[a]?a:void 0}function u(a){if(!a||!r.test(a))return;a=a.trim().toLowerCase();for(const e in t)if({}.hasOwnProperty.call(t,e)){let n=t[e];Array.isArray(n)||(n=[n]);for(const t of n)if(t.toLowerCase()===a)return e}const e=Object.keys(t).filter(e=>{let n=t[e];Array.isArray(n)||(n=[n]);for(const e of n)if(s(a,e))return!0;return!1});return 1===e.length?e[0]:void 0}function d(a){if(!a||!o.test(a))return;const e=t[a.toUpperCase()];return Array.isArray(e)?e[0]:e}function p(a){if(a&&o.test(a)&&(a=c(a)))return String.fromCodePoint(...[...a].map(a=>i+a.charCodeAt()))}function m(a){if(a&&l.test(a))return c([...a].map(a=>a.codePointAt(0)-i).map(a=>String.fromCharCode(a)).join(""))}a.exports={MAGIC_NUMBER:i,CODE_RE:o,NAME_RE:r,FLAG_RE:l,code:function(a){return m(a)||u(a)},flag:function(a){return o.test(a)&&"UK"!==a||(a=u(a)),p(a)},name:function(a){return l.test(a)&&(a=m(a)),d(a)},isCode:c,fuzzyCompare:s,codeToName:d,codeToFlag:p,nameToCode:u,flagToCode:m}},function(a,e,n){"use strict";const{flag:t,name:i,code:o}=n(2);a.exports={flag:t,name:i,code:o}},function(a,e,n){const{flag:t,name:o,code:r}=n(3),l=[{label:"name",icon:null,type:"name"},{label:"living",icon:"🌞",type:"living-dead"},{label:"dead",icon:"🌜",type:"living-dead"},{label:"male",icon:"M",type:"gender"},{label:"female",icon:"F",type:"gender"},{label:"non-binary",icon:"NB",type:"gender"},{label:"orchestra",icon:"Or",type:"genre"},{label:"wind band",class:"wind-band",icon:"W",type:"genre"},{label:"chorus",icon:"Cho",type:"genre"},{label:"chamber",icon:"Cha",type:"genre"},{label:"voice",icon:"V",type:"genre"},{label:"opera",icon:"Op",type:"genre"},{label:"jazz/improvisation",class:"jazz",icon:"J",type:"genre"},{label:"film",icon:"F",type:"genre"},{label:"video games",class:"video-games",icon:"VG",type:"genre"},{label:"music theatre",class:"music-theatre",icon:"MT",type:"genre"},{label:"songwriting",icon:"SW",type:"genre"},{label:"electroacoustic & installation",class:"electroacoustic",icon:"EA",type:"genre"},{label:"folk/traditional genres",class:"folk",icon:"F/Tr",type:"genre"},{label:"white",icon:"Wh",type:"demographic"},{label:"black",icon:"Bl",type:"demographic"},{label:"Latinx",class:"latinx",icon:"Lat",type:"demographic"},{label:"Asian",class:"asian",icon:"Asn",type:"demographic"},{label:"West Asian/North African",class:"wana",icon:"WANA",type:"demographic"},{label:"South Asian",class:"south-asian",icon:"SoAs",type:"demographic"},{label:"American Indian",class:"american-indian",icon:"AmIn",type:"demographic"},{label:"other",icon:"Oth",type:"demographic"},{label:"city/state",icon:null,type:"geographic"},{label:"country",icon:null,type:"geographic"},{label:"string quartet",class:"string-quartet",icon:"sq",type:"medium"},{label:"wind quintet",class:"wind-quintet",icon:"WQ",type:"medium"},{label:"brass quintet",class:"brass-quintet",icon:"bq",type:"medium"},{label:"young band",class:"young-band",icon:"YB",type:"medium"},{label:"young orchestra",class:"young-orchestra",icon:"YO",type:"medium"},{label:"young choir",class:"young-choir",icon:"YC",type:"medium"},{label:"young piano",class:"young-piano",icon:"YP",type:"medium"},{label:"URL",icon:"🔗",type:"url"}];new Vue({el:"#app",data:{title:"Diversity Initiative Composers Database",headings:null,list:null,search:"",filters:new Array(36),filterOptions:[1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29,30,31,32,33,34,35],vueFields:l},methods:{getData:function(){this.$http.get("assets/composer-diversity-offline.json").then(function(a){a=a.data.values;this.headings=a[0],this.list=a.slice(1)},function(a){console.log(a.statusText)})},runFiltersOr:function(a){if(-1==this.filters.indexOf(!0))return!0;var e=!1;for(i=0;i<this.filters.length;i++)"X"==a[i]&&1==this.filters[i]&&(e=!0);return e},runFiltersAnd:function(a){if(-1==this.filters.indexOf(!0))return!0;var e=!0;for(i=0;i<this.filters.length;i++)1==this.filters[i]&&"X"!=a[i]&&(e=!1);return e},composerProps:function(a){var e="";for(i=1;i<l.length;i++)"X"==a[i]&&(e+='<span class="'+l[i].type+" "+(l[i].hasOwnProperty("class")?l[i].class:l[i].label)+(this.filters[i]?" selected":"")+'" title="'+l[i].label+'">'+l[i].icon+"</span>");return e},composerGeo:function(a){var e="",n=["N/A",""];return n.includes(a[24])||(e=a[24],n.includes(a[25])||(e+=", "+a[25]+(t(a[25])?" "+t(a[25]):""))),""!=e||n.includes(a[25])||(e=a[25]+(t(a[25])?" "+t(a[25]):"")),e}},mounted:function(){this.getData()},template:'\n\t\t<div class="wrapper">\n\t\t\t<h1>{{title}}</h1>\n\t\t\t<div class="inputs">\n\t\t\t\t<input type="text" v-model="search" class="search" placeholder="search">\n\t\t\t\t<div class="filters">\n\t\t\t\t\t<template v-for="option in filterOptions">\n\t\t\t\t\t\t<label class="filter" :class="vueFields[option].type"><input type="checkbox" value="X" v-model="filters[option]">{{vueFields[option].label}} ({{headings[option]}})</label>\n\t\t\t\t\t</template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="list-wrapper">\n\t\t\t\t<ul class="composer-list">\n\t\t\t\t\t<template v-for="composer in list" v-if="composer[0].match(new RegExp(search, \'i\'))">\n\t\t\t\t\t\t<template v-if="runFiltersAnd(composer)">\n\t\t\t\t\t\t\t<li><span class="name"><a :href="composer[36]" target="_blank">{{composer[0]}}</a></span><span class="composer-props" v-html="composerProps(composer)"></span><span class="composer-geo" v-html="composerGeo(composer)"></span></li>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</template>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t'})},function(a,e,n){n(4),a.exports=n(0)}]);