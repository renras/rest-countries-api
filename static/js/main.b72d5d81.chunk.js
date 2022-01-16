(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{13:function(e,n,t){e.exports={regionAccordion:"DropdownMenu_regionAccordion__E1L-B",regionHeader:"DropdownMenu_regionHeader__-u8r-",chevronDown:"DropdownMenu_chevronDown__OcNHo",regionsContainer:"DropdownMenu_regionsContainer__1UYq0",showAccordion:"DropdownMenu_showAccordion__sYqUm"}},19:function(e,n,t){e.exports={home:"Home_home__31jky",topOfSection:"Home_topOfSection__1eott",countries:"Home_countries__2iJ-j"}},23:function(e,n,t){e.exports={card:"Card_card__3XNLt",info:"Card_info__3ojJy"}},24:function(e,n,t){e.exports={searchBar:"SearchBar_searchBar__3Go3z",searchIcon:"SearchBar_searchIcon__1pJOV"}},25:function(e,n,t){e.exports={country_section:"CountryInfo_country_section__3oYp6",country_section_content:"CountryInfo_country_section_content__2YF-F"}},26:function(e,n,t){e.exports={country_info:"CountryInfoContent_country_info__3uFWu",country_info_body:"CountryInfoContent_country_info_body__2hvc5"}},27:function(e,n,t){e.exports={link:"GoBackButton_link__3rR-9",icon:"GoBackButton_icon__2CJS2"}},37:function(e,n,t){e.exports={header:"Navbar_header__31xIC"}},38:function(e,n,t){e.exports={darkMode:"ThemeToggler_darkMode__1ExOB"}},39:function(e,n,t){e.exports={link:"Country_link__3BO5D"}},42:function(e,n,t){e.exports={loadingIcon:"App_loadingIcon__AdLY8",rotation:"App_rotation__1Hlkn"}},43:function(e,n,t){e.exports={country_info_footer:"BorderCountries_country_info_footer__2ZOmS"}},44:function(e,n,t){e.exports={error:"Error_error__36RXz"}},56:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var r,c=t(2),o=t(16),a=t.n(o),i=t(4),s=(t(56),t(7)),u=t(3),d=t(37),j=t.n(d),l=t(38),b=t.n(l),h=t(1),f=function(e){var n=e.icon,t=e.text,r=e.themeToggler;return Object(h.jsxs)("button",{className:b.a.darkMode,onClick:r,children:[n,Object(h.jsx)("p",{children:t})]})},x=t(10),O=t(17),g=t(9),p=Object(g.c)({name:"navbar",initialState:{darkMode:!1},reducers:{toggleDarkMode:function(e){e.darkMode=!e.darkMode,document.documentElement.style.setProperty("--main-bg","".concat(e.darkMode?"#212e37":"#fafafa")),document.documentElement.style.setProperty("--secondary-bg","".concat(e.darkMode?"#46535d":"#fff")),document.documentElement.style.setProperty("--text-white","".concat(e.darkMode?"#f2f2f2":"#545454")),document.documentElement.style.setProperty("--shadow","".concat(e.darkMode?"0 0 20px 0 rgba(0, 0, 0, 0.5)":"0 0 10px 0 rgba(0, 0, 0, 0.1)"))}}}),_=p.actions,m=p.reducer,v=function(){var e=Object(i.b)();return{darkMode:Object(i.c)((function(e){return e.navbar.darkMode})),themeToggler:function(){e(_.toggleDarkMode())}}},C=function(){var e=v(),n=e.darkMode,t=e.themeToggler;return Object(h.jsxs)("header",{className:j.a.header,children:[Object(h.jsx)("h1",{children:"Where in the world?"}),Object(h.jsx)(f,{icon:n?Object(h.jsx)(O.b,{}):Object(h.jsx)(x.b,{}),text:n?"Light Mode":"Dark Mode",themeToggler:t})]})},y=t(39),k=t.n(y),B=t(11),N=t(22),w=t.n(N),R=t(40),M=t(41),T=t.n(M),A=Object(g.b)("countries/getCountries",function(){var e=Object(R.a)(w.a.mark((function e(n,t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://restcountries.com/v2/all");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),H=Object(g.c)({name:"app",initialState:{status:null,countries:[],filteredCountries:[],searchBarText:"",borderCountries:[],regions:[],activeRegion:"Filter by Region"},reducers:{updateSearchBarText:function(e,n){e.searchBarText=n.payload},filterCountries:function(e,n){var t=n.payload,r=t.searchBarText,c=t.activeRegion,o=e.countries.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())&&e.region===c}));"Filter by Region"===c&&(o=e.countries.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))),e.filteredCountries=o},setBorderCountries:function(e,n){e.borderCountries=n.payload},changeActiveRegion:function(e,n){e.activeRegion=n.payload,"None"===n.payload&&(e.activeRegion="Filter by Region")}},extraReducers:(r={},Object(B.a)(r,A.pending,(function(e,n){e.status="loading"})),Object(B.a)(r,A.fulfilled,(function(e,n){e.status="success",e.countries=n.payload.data,e.filteredCountries=n.payload.data;var t=new Set;e.countries.forEach((function(e){return t.add(e.region)})),t.add("None"),e.regions=Array.from(t)})),Object(B.a)(r,A.rejected,(function(e,n){e.status="failed"})),r)}),I=H.actions,S=H.reducer,D=function(){var e=Object(i.b)(),n=Object(i.c)((function(e){return e.app.searchBarText})),t=Object(i.c)((function(e){return e.app.filteredCountries})),r=Object(i.c)((function(e){return e.app.activeRegion}));return Object(c.useEffect)((function(){e(I.filterCountries({activeRegion:r,searchBarText:n}))}),[e,r,n]),{filteredCountries:t,searchBarText:n}},F=t(23),E=t.n(F),L=function(e){var n=e.country;return Object(h.jsxs)("div",{className:E.a.card,children:[Object(h.jsx)("img",{src:n.flags.png,alt:""}),Object(h.jsxs)("div",{className:E.a.info,children:[Object(h.jsx)("h2",{children:n.name}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Population"}),": ",n.population]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Region"}),": ",n.region]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Capital"}),": ",n.capital]})]})]})]})},P=function(){var e=D().filteredCountries;return Object(h.jsx)(h.Fragment,{children:e.map((function(e,n){return Object(h.jsx)(s.b,{className:k.a.link,to:"/country-info/".concat(e.name),children:Object(h.jsx)(L,{country:e})},n)}))})},J=t(24),Y=t.n(J),G=function(e){var n=e.text,t=e.onChange,r=e.placeHolder;return Object(h.jsxs)("div",{className:Y.a.searchBar,children:[Object(h.jsx)(x.c,{className:Y.a.searchIcon}),Object(h.jsx)("input",{type:"text",placeholder:r,value:n,onChange:t})]})},q=t(19),z=t.n(q),U=t(8),W=t(13),X=t.n(W),V=function(e){var n=e.showAccordion,t=e.content,r=e.selectItemHandler,c=e.styles,o=e.toggleAccordion;return Object(h.jsx)("div",{className:"".concat(!n&&c.showAccordion," ").concat(c.regionsContainer),children:Object(h.jsx)("ul",{children:t.map((function(e,n){return Object(h.jsx)("li",{onClick:function(){r(e),o()},children:e},n)}))})})},Z=function(e){var n=e.content,t=e.selectItemHandler,r=e.activeRegion,o=Object(c.useState)(!1),a=Object(U.a)(o,2),i=a[0],s=a[1],u=function(){s(!i)};return Object(h.jsxs)("div",{className:X.a.regionAccordion,children:[Object(h.jsxs)("div",{className:X.a.regionHeader,onClick:u,children:[Object(h.jsx)("p",{children:r}),Object(h.jsx)(x.a,{className:X.a.chevronDown})]}),Object(h.jsx)(V,{showAccordion:i,content:n,selectItemHandler:t,toggleAccordion:u,styles:X.a})]})},K=function(){var e=Object(i.c)((function(e){return e.app.searchBarText})),n=Object(i.b)();return{searchBarText:e,regions:Object(i.c)((function(e){return e.app.regions})),activeRegion:Object(i.c)((function(e){return e.app.activeRegion})),searchBarHandleChange:function(e){n(I.updateSearchBarText(e.target.value))},changeActiveRegion:function(e){n(I.changeActiveRegion(e))}}},Q=function(){var e=K(),n=e.searchBarText,t=e.regions,r=e.activeRegion,c=e.searchBarHandleChange,o=e.changeActiveRegion;return Object(h.jsxs)("main",{className:z.a.home,children:[Object(h.jsxs)("div",{className:z.a.topOfSection,children:[Object(h.jsx)(G,{searchBarText:n,onChange:c,placeHolder:"Search for a country..."}),Object(h.jsx)(Z,{content:t,selectItemHandler:o,activeRegion:r})]}),Object(h.jsx)("div",{className:z.a.countries,children:Object(h.jsx)(P,{})})]})},$=t(45),ee=t(42),ne=t.n(ee),te=t(25),re=t.n(te),ce=function(){var e=Object(i.b)(),n=Object(u.g)().name,t=Object(i.c)((function(e){return e.app.countries})),r=Object(i.c)((function(e){return e.app.borderCountries})),o=t.find((function(e){return e.name===n})),a=o.languages.map((function(e){return e.name}));return Object(c.useEffect)((function(){if("borders"in o){var n=o.borders,r=t.filter((function(e){return n.includes(e.alpha3Code)}));e(I.setBorderCountries(r))}"borders"in o||e(I.setBorderCountries([]))}),[e,o,t]),{currentCountry:o,getCurrencies:function(){try{return o.currencies[0].name}catch(e){}},languages:a,borderCountries:r}},oe=t(26),ae=t.n(oe),ie=function(e){var n=e.currentCountry;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Native Names"}),": ",n.nativeName]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Population"}),": ",n.population]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Region"}),": ",n.region]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Sub Region"}),": ",n.subregion]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Capital"}),": ",n.capital]})]})},se=function(e){var n=e.currentCountry,t=e.getCurrencies,r=e.languages;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Top Level Domain"}),": ",n.topLevelDomain]}),t()&&Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Currencies"}),": ",t()," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("b",{children:"Languages"}),": ",r.join(", ")]})]})},ue=t(43),de=t.n(ue),je=function(e){var n=e.borderCountries;return Object(h.jsx)(h.Fragment,{children:n.length>0&&Object(h.jsxs)("div",{className:de.a.country_info_footer,children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Border Countries"}),":"]}),Object(h.jsx)("ul",{children:n.map((function(e,n){return Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/country-info/".concat(e.name),children:e.name},n)})}))})]})})},le=function(e){var n=e.currentCountry,t=e.getCurrencies,r=e.languages,c=e.borderCountries;return Object(h.jsxs)("div",{className:ae.a.country_info,children:[Object(h.jsx)("h3",{children:n.name}),Object(h.jsxs)("div",{className:ae.a.country_info_body,children:[Object(h.jsx)(ie,{currentCountry:n}),Object(h.jsx)(se,{currentCountry:n,getCurrencies:t,languages:r})]}),Object(h.jsx)(je,{borderCountries:c})]})},be=t(27),he=t.n(be),fe=function(e){var n=e.path,t=e.text;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.b,{className:he.a.link,to:n,children:[Object(h.jsx)(O.a,{className:he.a.icon}),Object(h.jsx)("p",{children:t})]})})},xe=function(){var e=ce(),n=e.currentCountry,t=e.getCurrencies,r=e.languages,c=e.borderCountries;return Object(h.jsxs)("section",{className:re.a.country_section,children:[Object(h.jsx)(fe,{text:"Back",path:"/"}),Object(h.jsxs)("div",{className:re.a.country_section_content,children:[Object(h.jsx)("img",{src:n.flags.png,alt:"countryFlag"}),Object(h.jsx)(le,{getCurrencies:t,languages:r,borderCountries:c,currentCountry:n})]})]})},Oe=function(){var e=Object(i.b)(),n=Object(i.c)((function(e){return e.app.status}));return Object(c.useEffect)((function(){e(A())}),[e]),{status:n}},ge=t(44),pe=t.n(ge),_e=function(){return Object(h.jsxs)("div",{className:pe.a.error,children:[Object(h.jsx)(fe,{text:"Back",to:"/"}),Object(h.jsx)("h1",{children:"Page Not Found"})]})};var me=function(){var e=Oe().status;return Object(h.jsx)(h.Fragment,{children:"success"===e?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",element:Object(h.jsx)(Q,{})}),Object(h.jsx)(u.a,{exact:!0,path:"/country-info/:name",element:Object(h.jsx)(xe,{})}),Object(h.jsx)(u.a,{path:"*",element:Object(h.jsx)(_e,{})})]})]})}):Object(h.jsx)($.a,{className:ne.a.loadingIcon})})},ve=t(12),Ce=Object(g.a)({reducer:{app:S,navbar:m},middleware:[ve.a]});a.a.render(Object(h.jsx)(i.a,{store:Ce,children:Object(h.jsx)(me,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.b72d5d81.chunk.js.map