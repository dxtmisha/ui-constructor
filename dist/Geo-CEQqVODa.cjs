"use strict";var p=Object.defineProperty;var h=(o,n,a)=>n in o?p(o,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[n]=a;var u=(o,n,a)=>(h(o,typeof n!="symbol"?n+"":n,a),a);const t=require("./DataStorage-DA5HrVSP.cjs");function y(o){return typeof o=="string"}function l(o){return JSON.parse(JSON.stringify(o))}function g(o,n){return t.isNull(o)?!1:Array.isArray(n)?n.includes(o):o===n}const c=[{country:"US",countryAlternative:["EN"],language:"en",languageAlternative:["us"],firstDay:"Su",zone:"America/New_York",phoneCode:"1",phoneMask:["+1-***-***-****"]},{country:"GB",countryAlternative:["UK"],language:"en",firstDay:"Mo",zone:"Europe/London",phoneCode:"44",phoneMask:["+44-**-****-****"]},{country:"AF",language:"fa",firstDay:"Sa",zone:"Asia/Kabul",phoneCode:"93",phoneMask:["+93-**-***-****"]},{country:"AL",language:"sq",firstDay:"Mo",zone:"Europe/Tirane",phoneCode:"355",phoneMask:["+355-***-***-***"]},{country:"DZ",language:"ar",firstDay:"Sa",zone:"Africa/Algiers",phoneCode:"213",phoneMask:["+213-**-***-****"]},{country:"AS",language:"en",firstDay:null,zone:"Pacific/Pago_Pago",phoneCode:"1-684",phoneMask:["+1-684-***-****"]},{country:"AD",language:"ca",firstDay:"Mo",zone:"Europe/Andorra",phoneCode:"376",phoneMask:["+376-***-***"]},{country:"AO",language:"pt",firstDay:null,zone:"Africa/Lagos",phoneCode:"244",phoneMask:["+244-***-***-***"]},{country:"AI",language:"en",firstDay:null,zone:"America/Port_of_Spain",phoneCode:"1-264",phoneMask:["+1-264-***-****"]},{country:"AQ",language:"",firstDay:null,zone:"Antarctica/Troll",phoneCode:"672",phoneMask:["+672-1-**-***"]},{country:"AG",language:"en",firstDay:null,zone:"America/Antigua",phoneCode:"1-268",phoneMask:["+1-268-***-****"]},{country:"AR",language:"es",firstDay:"Su",zone:"America/Argentina/Buenos_Aires",phoneCode:"54",phoneMask:["+54-***-***-****"]},{country:"AM",language:"hy",firstDay:"Mo",zone:"Asia/Yerevan",phoneCode:"374",phoneMask:["+374-**-***-***"]},{country:"AW",language:"nl",firstDay:null,zone:"America/Curacao",phoneCode:"297",phoneMask:["+297-***-****"]},{country:"AU",language:"en",firstDay:"Mo",zone:"Australia/Sydney",phoneCode:"61",phoneMask:["+61-*-****-****"]},{country:"AT",language:"de",firstDay:"Mo",zone:"Europe/Vienna",phoneCode:"43",phoneMask:["+43-***-***-****","+43-***-***-*****"]},{country:"AZ",language:"az",firstDay:"Mo",zone:"Asia/Baku",phoneCode:"994",phoneMask:"+994-**-***-**-**"},{country:"BS",language:"en",firstDay:null,zone:"America/Nassau",phoneCode:"1-242",phoneMask:"+1-242-***-****"},{country:"BH",language:"ar",firstDay:"Sa",zone:"Asia/Bahrain",phoneCode:"973",phoneMask:"+973-****-****"},{country:"BD",language:"bn",firstDay:null,zone:"Asia/Dhaka",phoneCode:"880",phoneMask:"+880-**-***-***"},{country:"BB",language:"en",firstDay:null,zone:"America/Barbados",phoneCode:"1-246",phoneMask:"+1-246-***-****"},{country:"BY",language:"be",firstDay:"Mo",zone:"Europe/Minsk",phoneCode:"375",phoneMask:"+375-**-***-**-**"},{country:"BE",language:"nl",firstDay:"Mo",zone:"Europe/Brussels",phoneCode:"32",phoneMask:"+32-***-***-***"},{country:"BZ",language:"en",firstDay:"Su",zone:"America/Belize",phoneCode:"501",phoneMask:"+501-***-****"},{country:"BJ",language:"fr",firstDay:null,zone:"Africa/Lagos",phoneCode:"229",phoneMask:"+229-**-**-****"},{country:"BM",language:"en",firstDay:null,zone:"Atlantic/Bermuda",phoneCode:"1-441",phoneMask:"+1-441-***-****"},{country:"BT",language:"dz",firstDay:null,zone:"Asia/Thimphu",phoneCode:"975",phoneMask:["+975-*-***-***","+975-17-***-***"]},{country:"BO",language:"es",firstDay:"Su",zone:"America/La_Paz",phoneCode:"591",phoneMask:"+591-*-***-****"},{country:"BA",language:"bs",firstDay:null,zone:"Europe/Belgrade",phoneCode:"387",phoneMask:["+387-**-****","+387-**-*****"]},{country:"BW",language:"en",firstDay:null,zone:"Africa/Maputo",phoneCode:"267",phoneMask:"+267-**-***-***"},{country:"BR",language:"pt",firstDay:"Su",zone:"America/Sao_Paulo",phoneCode:"55",phoneMask:["+55-**-****-****","+55-**-*****-****"]},{country:"IO",language:"en",firstDay:null,zone:"Indian/Chagos",phoneCode:"246",phoneMask:"+246-***-****"},{country:"VG",language:"en",firstDay:null,zone:"America/Port_of_Spain",phoneCode:"1-284",phoneMask:"+1-284-***-****"},{country:"BN",language:"ms",firstDay:"Mo",zone:"Asia/Brunei",phoneCode:"673",phoneMask:"+673-***-****"},{country:"BG",language:"bg",firstDay:"Mo",zone:"Europe/Sofia",phoneCode:"359",phoneMask:"+359-***-***-***"},{country:"BF",language:"fr",firstDay:null,zone:"Africa/Abidjan",phoneCode:"226",phoneMask:"+226-**-**-****"},{country:"BI",language:"fr",firstDay:null,zone:"Africa/Maputo",phoneCode:"257",phoneMask:"+257-**-**-****"},{country:"KH",language:"km",firstDay:null,zone:"Asia/Phnom_Penh",phoneCode:"855",phoneMask:"+855-**-***-***"},{country:"CM",phoneCode:"237",zone:"Africa/Lagos",language:"en",firstDay:null,phoneMask:"+237-****-****"},{country:"CA",phoneCode:"1",zone:"America/Toronto",language:"en",firstDay:"Su",phoneMask:"+1-***-***-****"},{country:"CV",phoneCode:"238",zone:"Atlantic/Cape_Verde",language:"pt",firstDay:null,phoneMask:"+238-***-**-**"},{country:"KY",phoneCode:"1-345",zone:"America/Cayman",language:"en",firstDay:null,phoneMask:"+1-345-***-****"},{country:"CF",phoneCode:"236",zone:"Africa/Lagos",language:"fr",firstDay:null,phoneMask:"+236-**-**-****"},{country:"TD",phoneCode:"235",zone:"Africa/Ndjamena",language:"fr",firstDay:null,phoneMask:"+235-**-**-**-**"},{country:"CL",phoneCode:"56",zone:"America/Santiago",language:"es",firstDay:"Su",phoneMask:"+56-*-****-****"},{country:"CN",phoneCode:"86",zone:"Asia/Shanghai",language:"zh",firstDay:"Su",phoneMask:["+86-***-****-***","+86-***-****-****","+86-**-*****-*****"]},{country:"CX",phoneCode:"61",zone:"Indian/Christmas",language:"en",firstDay:null},{country:"CC",phoneCode:"61",zone:"Indian/Cocos",language:"ms",firstDay:null},{country:"CO",phoneCode:"57",zone:"America/Bogota",language:"es",firstDay:"Su",phoneMask:"+57-***-***-****"},{country:"KM",phoneCode:"269",zone:"Indian/Comoro",language:"ar",firstDay:null,phoneMask:"+269-**-*****"},{country:"CK",phoneCode:"682",zone:"Pacific/Rarotonga",language:"en",firstDay:null,phoneMask:"+682-**-***"},{country:"CR",phoneCode:"506",zone:"America/Costa_Rica",language:"es",firstDay:"Su",phoneMask:"+506-****-****"},{country:"HR",phoneCode:"385",zone:"Europe/Belgrade",language:"hr",firstDay:"Mo",phoneMask:"+385-**-***-***"},{country:"CU",phoneCode:"53",zone:"America/Havana",language:"es",firstDay:null,phoneMask:"+53-*-***-****"},{country:"CW",phoneCode:"599",zone:"America/Curacao",language:"nl",firstDay:null,phoneMask:"+599-***-****"},{country:"CY",phoneCode:"357",zone:"Asia/Nicosia",language:"el",firstDay:null,phoneMask:"+357-**-***-***"},{country:"CZ",phoneCode:"420",zone:"Europe/Prague",language:"cs",firstDay:"Mo",phoneMask:"+420-***-***-***"},{country:"CD",phoneCode:"243",zone:"Africa/Lagos",language:"fr",firstDay:null,phoneMask:"+243-***-***-***"},{country:"DK",phoneCode:"45",zone:"Europe/Copenhagen",language:"da",firstDay:"Mo",phoneMask:"+45-**-**-**-**"},{country:"DJ",phoneCode:"253",zone:"Africa/Djibouti",language:"fr",firstDay:null,phoneMask:"+253-**-**-**-**"},{country:"DM",phoneCode:"1-767",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-767-***-****"},{country:"DO",phoneCode:"1-809",zone:"North America",language:"America/Santo_Domingo",firstDay:"Su",phoneMask:["+1-809-***-****","+1-829-***-****","+1-849-***-****"]},{country:"TL",phoneCode:"670",zone:"Asia/Dili",language:"tet",firstDay:null,phoneMask:["+670-***-****","+670-77-*-*****","+670-78-*-*****"]},{country:"EC",phoneCode:"593",zone:"America/Guayaquil",language:"es",firstDay:"Su",phoneMask:["+593-*-***-****","+593-**-***-****"]},{country:"EG",phoneCode:"20",zone:"Africa/Cairo",language:"ar",firstDay:"Sa",phoneMask:"+20-***-***-****"},{country:"SV",phoneCode:"503",zone:"America/El_Salvador",language:"es",firstDay:"Su",phoneMask:"+503-**-**-****"},{country:"GQ",phoneCode:"240",zone:"Africa/Lagos",language:"es",firstDay:null,phoneMask:"+240-**-***-****"},{country:"ER",phoneCode:"291",zone:"Africa/Asmara",language:"aa",firstDay:null,phoneMask:"+291-*-***-***"},{country:"EE",phoneCode:"372",zone:"Europe/Tallinn",language:"et",firstDay:"Mo",phoneMask:["+372-***-****","+372-****-****"]},{country:"ET",phoneCode:"251",zone:"Africa/Addis_Ababa",language:"am",firstDay:null,phoneMask:"+251-**-***-****"},{country:"FK",phoneCode:"500",zone:"Atlantic/Stanley",language:"en",firstDay:null,phoneMask:"+500-*****"},{country:"FO",phoneCode:"298",zone:"Atlantic/Faroe",language:"fo",firstDay:null,phoneMask:"+298-***-***"},{country:"FJ",phoneCode:"679",zone:"Pacific/Fiji",language:"en",firstDay:null,phoneMask:"+679-**-*****"},{country:"FI",phoneCode:"358",zone:"Europe/Helsinki",language:"fi",firstDay:"Mo",phoneMask:["+358-***-***-**-*","+358-***-***-**-**"]},{country:"FR",phoneCode:"33",zone:"Europe/Paris",language:"fr",firstDay:"Mo",phoneMask:["+33-***-***-***","+262-*****-****","+508-**-****","+590-***-***-***"]},{country:"PF",phoneCode:"689",zone:"Pacific/Tahiti",language:"fr",firstDay:null,phoneMask:"+689-**-**-**"},{country:"GA",phoneCode:"241",zone:"Africa/Lagos",language:"fr",firstDay:null,phoneMask:"+241-*-**-**-**"},{country:"GM",phoneCode:"220",zone:"Africa/Abidjan",language:"en",firstDay:null,phoneMask:"+220-***-**-**"},{country:"GE",phoneCode:"995",zone:"Asia/Tbilisi",language:"ka",firstDay:"Mo",phoneMask:"+995-***-***-***"},{country:"DE",phoneCode:"49",zone:"Europe/Berlin",language:"de",firstDay:"Mo",phoneMask:["+49-***-***","+49-***-***-****","+49-****-***-****"]},{country:"GH",phoneCode:"233",zone:"Africa/Accra",language:"en",firstDay:null,phoneMask:"+233-***-***-***"},{country:"GI",phoneCode:"350",zone:"Europe/Gibraltar",language:"en",firstDay:null,phoneMask:"+350-***-*****"},{country:"GR",phoneCode:"30",zone:"Europe/Athens",language:"el",firstDay:"Mo",phoneMask:"+30-***-***-****"},{country:"GL",phoneCode:"299",zone:"America/Godthab",language:"kl",firstDay:null,phoneMask:"+299-**-**-**"},{country:"GD",phoneCode:"1-473",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-473-***-****"},{country:"GU",phoneCode:"1-671",zone:"Pacific/Guam",language:"en",firstDay:null,phoneMask:"+1-671-***-****"},{country:"GT",phoneCode:"502",zone:"America/Guatemala",language:"es",firstDay:"Su",phoneMask:"+502-*-***-****"},{country:"GG",phoneCode:"44-1481",zone:"Europe/London",language:"en",firstDay:null},{country:"GN",phoneCode:"224",zone:"Africa/Abidjan",language:"fr",firstDay:null,phoneMask:"+224-**-***-***"},{country:"GW",phoneCode:"245",zone:"Africa/Bissau",language:"pt",firstDay:null,phoneMask:"+245-*-******"},{country:"GY",phoneCode:"592",zone:"America/Guyana",language:"en",firstDay:null,phoneMask:"+592-***-****"},{country:"HT",phoneCode:"509",zone:"America/Port-au-Prince",language:"ht",firstDay:null,phoneMask:"+509-**-**-****"},{country:"HN",phoneCode:"504",zone:"America/Tegucigalpa",language:"es",firstDay:"Su",phoneMask:"+504-****-****"},{country:"HK",phoneCode:"852",zone:"Asia/Hong_Kong",language:"zh",firstDay:"Su",phoneMask:"+852-****-****"},{country:"HU",phoneCode:"36",zone:"Europe/Budapest",language:"hu",firstDay:"Mo",phoneMask:"+36-***-***-***"},{country:"IS",phoneCode:"354",zone:"Atlantic/Reykjavik",language:"is",firstDay:"Mo",phoneMask:"+354-***-****"},{country:"IN",phoneCode:"91",zone:"Asia/Kolkata",language:"en",firstDay:"Mo",phoneMask:"+91-****-***-***"},{country:"ID",phoneCode:"62",zone:"Asia/Jakarta",language:"id",firstDay:"Mo",phoneMask:["+62-**-***-**","+62-**-***-***","+62-**-***-****","+62-8-**-***-***","+62-8-**-***-****","+62-8-**-***-**-***"]},{country:"IR",phoneCode:"98",zone:"Asia/Tehran",language:"fa",firstDay:"Sa",phoneMask:"+98-***-***-****"},{country:"IQ",phoneCode:"964",zone:"Asia/Baghdad",language:"ar",firstDay:"Sa",phoneMask:"+964-***-***-****"},{country:"IE",firstDay:"Mo",language:"en",phoneCode:"353",phoneMask:"+353-***-***-***",zone:"Europe/Dublin"},{country:"IM",firstDay:null,language:"Pound",phoneCode:"44-1624",zone:"Isle of Man"},{country:"IL",firstDay:"Su",language:"he",languageAlternative:["il"],phoneCode:"972",phoneMask:["+972-*-***-****","+972-5-*-***-****"],zone:"Asia/Jerusalem"},{country:"IT",firstDay:"Mo",language:"it",phoneCode:"39",phoneMask:"+39-***-****-***",zone:"Europe/Rome"},{country:"CI",phoneCode:"225",zone:"Africa/Abidjan",language:"fr",firstDay:null,phoneMask:"+225-**-***-***"},{country:"JM",phoneCode:"1-876",zone:"America/Jamaica",language:"en",firstDay:"Su",phoneMask:"+1-876-***-****"},{country:"JP",phoneCode:"81",zone:"Asia/Tokyo",language:"ja",firstDay:"Su",phoneMask:["+81-***-***-***","+81-**-****-****"]},{country:"JE",phoneCode:"44-1534",zone:"Europe/London",language:"en",firstDay:null},{country:"JO",phoneCode:"962",zone:"Asia/Amman",language:"ar",firstDay:"Sa",phoneMask:"+962-*-****-****"},{country:"KZ",phoneCode:"7",zone:"Asia/Almaty",language:"kk",firstDay:"Mo",phoneMask:["+7-6-**-***-**-**","+7-7-**-***-**-**"]},{country:"KE",phoneCode:"254",zone:"Africa/Nairobi",language:"en",firstDay:"Su",phoneMask:"+254-***-******"},{country:"KI",phoneCode:"686",zone:"Pacific/Tarawa",language:"en",firstDay:null,phoneMask:"+686-**-***"},{country:"XK",phoneCode:"383",zone:"Europe/Belgrade",language:"sq",firstDay:"Mo"},{country:"KW",phoneCode:"965",zone:"Asia/Kuwait",language:"ar",firstDay:"Sa",phoneMask:"+965-****-****"},{country:"KG",phoneCode:"996",zone:"Asia/Bishkek",language:"ky",firstDay:"Mo",phoneMask:"+996-***-***-***"},{country:"LA",phoneCode:"856",zone:"Asia/Vientiane",language:"lo",firstDay:null,phoneMask:["+856-**-***-***","+856-20-**-***-***"]},{country:"LV",phoneCode:"371",zone:"Europe/Riga",language:"lv",firstDay:"Mo",phoneMask:"+371-**-***-***"},{country:"LB",phoneCode:"961",zone:"Asia/Beirut",language:"ar",firstDay:"Mo",phoneMask:["+961-*-***-***","+961-**-***-***"]},{country:"LS",phoneCode:"266",zone:"Africa/Johannesburg",language:"en",firstDay:null,phoneMask:"+266-*-***-****"},{country:"LR",phoneCode:"231",zone:"Africa/Monrovia",language:"en",firstDay:null,phoneMask:"+231-**-***-***"},{country:"LY",phoneCode:"218",zone:"Africa/Tripoli",language:"ar",firstDay:"Sa",phoneMask:["+218-**-***-***","+218-21-***-****"]},{country:"LI",phoneCode:"423",zone:"Europe/Zurich",language:"de",firstDay:null,phoneMask:"+423-***-***-****"},{country:"LT",phoneCode:"370",zone:"Europe/Vilnius",language:"lt",firstDay:"Mo",phoneMask:"+370-***-**-***"},{country:"LU",phoneCode:"352",zone:"Europe/Luxembourg",language:"lb",firstDay:"Mo",phoneMask:"+352-***-***-***"},{country:"MO",phoneCode:"853",zone:"Asia/Macau",language:"zh",firstDay:null,phoneMask:"+853-****-****"},{country:"MK",phoneCode:"389",zone:"Europe/Belgrade",language:"mk",firstDay:"Mo",phoneMask:"+389-**-***-***"},{country:"MG",phoneCode:"261",zone:"Indian/Antananarivo",language:"fr",firstDay:null,phoneMask:"+261-**-**-*****"},{country:"MW",phoneCode:"265",zone:"Africa/Maputo",language:"ny",firstDay:null,phoneMask:["+265-*-****-****","+265-1-***-***"]},{country:"MY",phoneCode:"60",zone:"Asia/Kuala_Lumpur",language:"ms",firstDay:"Mo",phoneMask:["+60-*-***-***","+60-**-***-***","+60-**-***-****","+60-***-***-***"]},{country:"MV",phoneCode:"960",zone:"Indian/Maldives",language:"dv",firstDay:null,phoneMask:"+960-***-****"},{country:"ML",phoneCode:"223",zone:"Africa/Abidjan",language:"fr",firstDay:null,phoneMask:"+223-**-**-****"},{country:"MT",phoneCode:"356",zone:"Europe/Malta",language:"mt",firstDay:null,phoneMask:"+356-****-****"},{country:"MH",phoneCode:"692",zone:"Pacific/Majuro",language:"mh",firstDay:null,phoneMask:"+692-***-****"},{country:"MR",phoneCode:"222",zone:"Africa/Abidjan",language:"ar",firstDay:null,phoneMask:"+222-**-**-****"},{country:"MU",phoneCode:"230",zone:"Indian/Mauritius",language:"en",firstDay:null,phoneMask:"+230-***-****"},{country:"YT",phoneCode:"262",zone:"Indian/Mayotte",language:"fr",firstDay:null},{country:"MX",phoneCode:"52",zone:"America/Mexico_City",language:"es",firstDay:"Su",phoneMask:["+52-**-**-****","+52-***-***-****"]},{country:"FM",phoneCode:"691",zone:"Pacific/Pohnpei",language:"en",firstDay:null,phoneMask:"+691-***-****"},{country:"MD",phoneCode:"373",zone:"Europe/Chisinau",language:"ro",firstDay:null,phoneMask:"+373-****-****"},{country:"MC",phoneCode:"377",zone:"Europe/Monaco",language:"fr",firstDay:"Mo",phoneMask:["+377-**-***-***","+377-***-***-***"]},{country:"MN",phoneCode:"976",zone:"Asia/Ulaanbaatar",language:"mn",firstDay:"Mo",phoneMask:"+976-**-**-****"},{country:"ME",phoneCode:"382",zone:"Europe/Belgrade",language:"sr",firstDay:null,phoneMask:"+382-**-***-***"},{country:"MS",phoneCode:"1-664",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-664-***-****"},{country:"MA",phoneCode:"212",zone:"Africa/Casablanca",language:"ar",firstDay:"Mo",phoneMask:"+212-**-****-***"},{country:"MZ",phoneCode:"258",zone:"Africa/Maputo",language:"pt",firstDay:null,phoneMask:"+258-**-***-***"},{country:"MM",phoneCode:"95",zone:"Asia/Rangoon",language:"my",firstDay:null,phoneMask:["+95-***-***","+95-*-***-***","+95-**-***-***"]},{country:"NA",phoneCode:"264",zone:"Africa/Windhoek",language:"en",firstDay:null,phoneMask:"+264-**-***-****"},{country:"NR",phoneCode:"674",zone:"Pacific/Nauru",language:"na",firstDay:null,phoneMask:"+674-***-****"},{country:"NP",phoneCode:"977",zone:"Asia/Kathmandu",language:"ne",firstDay:null,phoneMask:"+977-**-***-***"},{country:"NL",phoneCode:"31",zone:"Europe/Amsterdam",language:"nl",firstDay:"Mo",phoneMask:"+31-**-***-****"},{country:"AN",phoneCode:"599",zone:"America/Curacao",language:"nl",firstDay:null,phoneMask:["+599-***-****","+599-9-***-****"]},{country:"NC",phoneCode:"687",zone:"Pacific/Noumea",language:"fr",firstDay:null,phoneMask:"+687-**-****"},{country:"NZ",phoneCode:"64",zone:"Pacific/Auckland",language:"en",firstDay:"Mo",phoneMask:["+64-**-***-***","+64-***-***-***","+64-***-***-****"]},{country:"NI",phoneCode:"505",zone:"America/Managua",language:"es",firstDay:"Su",phoneMask:"+505-****-****"},{country:"NE",phoneCode:"227",zone:"Africa/Lagos",language:"fr",firstDay:null,phoneMask:"+227-**-**-****"},{country:"NG",phoneCode:"234",zone:"Africa/Lagos",language:"en",firstDay:null,phoneMask:["+234-**-***-**","+234-**-***-***","+234-***-***-****"]},{country:"NU",phoneCode:"683",zone:"Pacific/Niue",language:"niu",firstDay:null,phoneMask:"+683-****"},{country:"KP",phoneCode:"850",zone:"Asia/Pyongyang",language:"ko",firstDay:null,phoneMask:["+850-***-***","+850-**-***-***","+850-****-****","+850-***-****-***","+850-****-*************","+850-191-***-****"]},{country:"MP",phoneCode:"1-670",zone:"Pacific/Saipan",language:"fil",firstDay:null,phoneMask:"+1-670-***-****"},{country:"NO",phoneCode:"47",zone:"Europe/Oslo",language:"no",firstDay:"Mo",phoneMask:"+47-***-**-***"},{country:"OM",phoneCode:"968",zone:"Asia/Muscat",language:"ar",firstDay:"Sa",phoneMask:"+968-**-***-***"},{country:"PK",phoneCode:"92",zone:"Asia/Karachi",language:"ur",firstDay:"Mo",phoneMask:"+92-***-***-****"},{country:"PW",phoneCode:"680",zone:"Pacific/Palau",language:"pau",firstDay:null,phoneMask:"+680-***-****"},{country:"PS",phoneCode:"970",zone:"Asia/Hebron",language:"ar",firstDay:null,phoneMask:"+970-**-***-****"},{country:"PA",phoneCode:"507",zone:"America/Panama",language:"es",firstDay:"Su",phoneMask:"+507-***-****"},{country:"PG",phoneCode:"675",zone:"Pacific/Port_Moresby",language:"en",firstDay:null,phoneMask:"+675-***-**-***"},{country:"PY",phoneCode:"595",zone:"America/Asuncion",language:"es",firstDay:"Mo",phoneMask:"+595-***-***-***"},{country:"PE",phoneCode:"51",zone:"America/Lima",language:"es",firstDay:"Su",phoneMask:"+51-***-***-***"},{country:"PH",phoneCode:"63",zone:"Asia/Manila",language:"tl",firstDay:"Su",phoneMask:"+63-***-***-****"},{country:"PN",phoneCode:"64",zone:"Pacific/Pitcairn",language:"en",firstDay:null},{country:"PL",phoneCode:"48",zone:"Europe/Warsaw",language:"pl",firstDay:"Mo",phoneMask:"+48-***-***-***"},{country:"PT",phoneCode:"351",zone:"Europe/Lisbon",language:"pt",firstDay:"Mo",phoneMask:"+351-**-***-****"},{country:"PR",phoneCode:"1-787",zone:"San Juan",language:"Dollar",firstDay:"Su"},{country:"QA",phoneCode:"974",zone:"Asia/Qatar",language:"ar",firstDay:"Sa",phoneMask:"+974-****-****"},{country:"CG",phoneCode:"242",zone:"Africa/Lagos",language:"fr",firstDay:null,phoneMask:"+242-**-***-****"},{country:"RE",phoneCode:"262",zone:"Indian/Reunion",language:"fr",firstDay:null,phoneMask:"+262-*****-****"},{country:"RO",phoneCode:"40",zone:"Europe/Bucharest",language:"ro",firstDay:"Mo",phoneMask:"+40-**-***-****"},{country:"RU",phoneCode:"7",zone:"Europe/Moscow",language:"ru",firstDay:"Mo",phoneMask:"+7-***-***-**-**"},{country:"RW",phoneCode:"250",zone:"Africa/Maputo",language:"rw",firstDay:null,phoneMask:"+250-***-***-***"},{country:"BL",phoneCode:"590",zone:"America/Port_of_Spain",language:"fr",firstDay:null},{country:"SH",phoneCode:"290",zone:"Africa/Abidjan",language:"en",firstDay:null,phoneMask:"+290-****"},{country:"KN",phoneCode:"1-869",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-869-***-****"},{country:"LC",phoneCode:"1-758",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-758-***-****"},{country:"MF",phoneCode:"590",zone:"America/Port_of_Spain",language:"fr",firstDay:null},{country:"PM",phoneCode:"508",zone:"America/Miquelon",language:"fr",firstDay:null},{country:"VC",phoneCode:"1-784",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-784-***-****"},{country:"WS",phoneCode:"685",zone:"Pacific/Apia",language:"sm",firstDay:null,phoneMask:"+685-**-****"},{country:"SM",phoneCode:"378",zone:"Europe/Rome",language:"it",firstDay:null,phoneMask:"+378-****-******"},{country:"ST",phoneCode:"239",zone:"Africa/Abidjan",language:"pt",firstDay:null,phoneMask:"+239-**-*****"},{country:"SA",phoneCode:"966",zone:"Asia/Riyadh",language:"ar",firstDay:"Sa",phoneMask:["+966-*-***-****","+966-5-****-****"]},{country:"SN",phoneCode:"221",zone:"Africa/Abidjan",language:"fr",firstDay:null,phoneMask:"+221-**-***-****"},{country:"RS",phoneCode:"381",zone:"Europe/Belgrade",language:"sr",firstDay:"Mo",phoneMask:"+381-**-***-****"},{country:"SC",phoneCode:"248",zone:"Indian/Mahe",language:"en",firstDay:null,phoneMask:"+248-*-***-***"},{country:"SL",phoneCode:"232",zone:"Africa/Abidjan",language:"en",firstDay:null,phoneMask:"+232-**-******"},{country:"SG",phoneCode:"65",zone:"Asia/Singapore",language:"cmn",firstDay:"Mo",phoneMask:"+65-****-****"},{country:"SX",phoneCode:"1-721",zone:"America/Curacao",language:"nl",firstDay:null,phoneMask:"+1-721-***-****"},{country:"SK",phoneCode:"421",zone:"Europe/Prague",language:"sk",firstDay:"Mo",phoneMask:"+421-***-***-***"},{country:"SI",phoneCode:"386",zone:"Europe/Belgrade",language:"sl",firstDay:null,phoneMask:"+386-**-***-***"},{country:"SB",phoneCode:"677",zone:"Pacific/Guadalcanal",language:"en",firstDay:null,phoneMask:["+677-*****","+677-***-****"]},{country:"SO",phoneCode:"252",zone:"Africa/Mogadishu",language:"so",firstDay:null,phoneMask:["+252-*-***-***","+252-**-***-***"]},{country:"ZA",phoneCode:"27",zone:"Africa/Johannesburg",language:"zu",firstDay:"Su",phoneMask:"+27-**-***-****"},{country:"KR",phoneCode:"82",zone:"Asia/Seoul",language:"ko",firstDay:"Su",phoneMask:["+82-**-***-****","+82-**-***-****-**"]},{country:"SS",phoneCode:"211",zone:"Africa/Khartoum",language:"en",firstDay:null,phoneMask:"+211-**-***-****"},{country:"ES",phoneCode:"34",zone:"Europe/Madrid",language:"es",firstDay:"Mo",phoneMask:"+34-***-***-***"},{country:"LK",phoneCode:"94",zone:"Asia/Colombo",language:"si",firstDay:null,phoneMask:"+94-**-***-****"},{country:"SD",phoneCode:"249",zone:"Africa/Khartoum",language:"ar",firstDay:null,phoneMask:"+249-**-***-****"},{country:"SR",phoneCode:"597",zone:"America/Paramaribo",language:"nl",firstDay:null,phoneMask:["+597-***-***","+597-***-****"]},{country:"SJ",phoneCode:"47",zone:"Europe/Oslo",language:"no",firstDay:null},{country:"SZ",phoneCode:"268",zone:"Africa/Johannesburg",language:"en",firstDay:null,phoneMask:"+268-**-**-****"},{country:"SE",phoneCode:"46",zone:"Europe/Stockholm",language:"sv",firstDay:"Mo",phoneMask:"+46-**-***-****"},{country:"CH",phoneCode:"41",zone:"Europe/Zurich",language:"de",firstDay:"Mo",phoneMask:"+41-**-***-****"},{country:"SY",phoneCode:"963",zone:"Asia/Damascus",language:"ar",firstDay:"Sa",phoneMask:"+963-**-****-***"},{country:"TW",phoneCode:"886",zone:"Asia/Taipei",language:"zh",firstDay:"Su",phoneMask:["+886-****-****","+886-*-****-****"]},{country:"TJ",phoneCode:"992",zone:"Asia/Dushanbe",language:"tg",firstDay:null,phoneMask:"+992-**-***-****"},{country:"TZ",phoneCode:"255",zone:"Africa/Dar_es_Salaam",language:"sw",firstDay:null,phoneMask:"+255-**-***-****"},{country:"TH",phoneCode:"66",zone:"Asia/Bangkok",language:"th",firstDay:"Mo",phoneMask:"+66-**-***-****"},{country:"TG",phoneCode:"228",zone:"Africa/Abidjan",language:"fr",firstDay:null,phoneMask:"+228-**-***-***"},{country:"TK",phoneCode:"690",zone:"Pacific/Fakaofo",language:"tkl",firstDay:null,phoneMask:"+690-****"},{country:"TO",phoneCode:"676",zone:"Pacific/Tongatapu",language:"to",firstDay:null,phoneMask:"+676-*****"},{country:"TT",phoneCode:"1-868",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-868-***-****"},{country:"TN",phoneCode:"216",zone:"Africa/Tunis",language:"ar",firstDay:"Mo",phoneMask:"+216-**-***-***"},{country:"TR",phoneCode:"90",zone:"Europe/Istanbul",language:"tr",firstDay:"Mo",phoneMask:"+90-***-***-****"},{country:"TM",phoneCode:"993",zone:"Asia/Ashgabat",language:"tk",firstDay:null,phoneMask:"+993-*-***-****"},{country:"TC",phoneCode:"1-649",zone:"America/Grand_Turk",language:"en",firstDay:null,phoneMask:"+1-649-***-****"},{country:"TV",phoneCode:"688",zone:"Pacific/Funafuti",language:"tvl",firstDay:null,phoneMask:["+688-2-****","+688-90-****"]},{country:"VI",phoneCode:"1-340",zone:"America/Port_of_Spain",language:"en",firstDay:null,phoneMask:"+1-340-***-****"},{country:"UG",phoneCode:"256",zone:"Africa/Kampala",language:"en",firstDay:null,phoneMask:"+256-***-***-***"},{country:"UA",phoneCode:"380",zone:"Europe/Kiev",language:"uk",languageAlternative:["ua"],firstDay:"Mo",phoneMask:"+380-**-***-**-**"},{country:"AE",phoneCode:"971",zone:"Asia/Dubai",language:"ar",firstDay:"Sa",phoneMask:["+971-*-***-****","+971-5-*-***-****"]},{country:"UY",phoneCode:"598",zone:"America/Montevideo",language:"es",firstDay:"Mo",phoneMask:"+598-*-***-**-**"},{country:"UZ",phoneCode:"998",zone:"Asia/Tashkent",language:"uz",firstDay:"Mo",phoneMask:"+998-**-***-****"},{country:"VU",phoneCode:"678",zone:"Pacific/Efate",language:"bi",firstDay:null,phoneMask:["+678-*****","+678-**-*****"]},{country:"VA",phoneCode:"379",zone:"Europe/Rome",language:"la",firstDay:null,phoneMask:"+39-6-698-*****"},{country:"VE",phoneCode:"58",zone:"America/Caracas",language:"es",firstDay:"Su",phoneMask:"+58-***-***-****"},{country:"VN",phoneCode:"84",zone:"Asia/Ho_Chi_Minh",language:"vi",firstDay:"Mo",phoneMask:["+84-**-****-***","+84-***-****-***"]},{country:"WF",phoneCode:"681",zone:"Pacific/Wallis",language:"wls",firstDay:null,phoneMask:"+681-**-****"},{country:"EH",phoneCode:"212",zone:"Africa/El_Aaiun",language:"ar",firstDay:null},{country:"YE",phoneCode:"967",zone:"Asia/Aden",language:"ar",firstDay:"Sa",phoneMask:["+967-*-***-***","+967-**-***-***","+967-***-***-***"]},{country:"ZM",phoneCode:"260",zone:"Africa/Maputo",language:"en",firstDay:null,phoneMask:"+260-**-***-****"},{country:"ZW",phoneCode:"263",zone:"Africa/Maputo",language:"en",firstDay:"Su",phoneMask:"+263-*-******"},{country:"GF",phoneCode:"594",zone:"America/Cayenne",language:"fr",firstDay:"Mo",phoneMask:"+594-*****-****"},{country:"MQ",phoneCode:"596",zone:"America/Martinique",language:"fr",firstDay:"Mo",phoneMask:"+596-***-**-**-**"},{country:"NF",phoneCode:"672-3",zone:"Pacific/Norfolk",language:"en",firstDay:"Mo",phoneMask:"+672-3-**-***"},{country:"IC",phoneCode:"3428",zone:"Europe/Berlin",language:"es",firstDay:"Mo"}],f="geo-code",e=class e{static get(){return this.item}static getCountry(){return this.item.country}static getLanguage(){return this.language}static getStandard(){return this.item.standard}static getFirstDay(){return this.item.firstDay}static getLocation(){return this.location}static getItem(){return{...this.item,language:this.language}}static getList(){return c}static find(n){return this.getByCode(n)}static toStandard(n){return`${n.language}-${n.country}`}static set(n,a){this.location=n,this.item=this.getByCode(this.location),this.language=this.findLanguage(this.location),a&&this.storage.set(this.location)}static getByCode(n){let a;return n&&(n.match(/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/)&&(a=this.getByCodeFull(n)),!a&&n.match(/[A-Z]{2}/)&&(a=this.getByCountry(this.toCountry(n))),!a&&n.match(/[a-z]{2}/)&&(a=this.getByLanguage(this.toLanguage(n)))),this.toFull(l(a??this.getList()[0]))}static getByCodeFull(n){return this.getList().find(a=>g(n,[`${a.language}-${a.country}`,`${a.country}-${a.language}`]))}static getByCountry(n){return this.getList().find(a=>{var r;return a.country===n||((r=a==null?void 0:a.countryAlternative)==null?void 0:r.find(s=>s===n))})}static getByLanguage(n){return this.getList().find(a=>{var r;return a.language===n||((r=a==null?void 0:a.languageAlternative)==null?void 0:r.find(s=>s===n))})}static findLocation(){var n;return t.isDomRuntime()&&(this.storage.get()||((n=document.querySelector("html"))==null?void 0:n.lang)||navigator.language||navigator.languages[0]||t.useEnv("language"))||"en-GB"}static findLanguage(n){return n&&n.match(/[a-z]{2}/)?this.toLanguage(n):this.item.language}static toCountry(n){return n.replace(/[^A-Z]+/g,"")}static toLanguage(n){return n.replace(/[^a-z]+/g,"")}static toFull(n){return{...n,standard:this.toStandard(n),firstDay:(n==null?void 0:n.firstDay)||"Mo"}}};u(e,"storage",new t.DataStorage(f)),u(e,"location"),u(e,"item"),u(e,"language"),e.location=e.findLocation(),e.language=e.findLanguage(e.location),e.item=e.getByCode(e.location);let i=e;exports.Geo=i;exports.copyObject=l;exports.isSelected=g;exports.isString=y;