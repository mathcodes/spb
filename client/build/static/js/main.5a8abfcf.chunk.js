(this.webpackJsonpspb=this.webpackJsonpspb||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/SPBRetroSlantAcross1382x120.b0d88454.png"},27:function(e,t,a){e.exports=a(40)},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),i=a(21),s=a(14),o=a(8),u=a(2),m=r.a.createContext({id:"",cuisine:[],excludeCuisine:[],diet:[],intolerances:[],includeIngredients:[],excludeIngredients:[],recipes:[],savedRecipes:[],activeRecipe:0,activePage:""}),d=a(4),f=a(17),h=a.n(f),E=(a(35),function(e){var t=e.children;return r.a.createElement("section",{className:"App hero is-success is-fullheight",style:{backgroundColor:"var(--lgreen)"}},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},t)))}),g=a(1),p=function(e){return e.map((function(e){return{name:e.name,amount:e.amount.toFixed(1),unit:e.unitShort}}))},b=function(e){return[].concat(Object(g.a)(N(e)),Object(g.a)(v(e)))},v=function(e){return p(e.missedIngredients)},N=function(e){return p(e.usedIngredients)},j=function(e){return p(e.unusedIngredients)},y=function(e){return e.nutrition.nutrients.map((function(e){return{name:e.title,amount:e.amount.toFixed(0),unit:e.unit,dv:e.percentOfDailyNeeds.toFixed(0)}}))},x=function(e){return e.analyzedInstructions?e.analyzedInstructions[0].steps.map((function(e){return e.step})):[]},k=function(e){return{id:e.id,name:e.title,prepTime:e.preparationMinutes,cookTime:e.cookingMinutes,url:e.sourceUrl,image:e.image}},O=function(e){return{information:k(e),instructions:x(e),nutrients:y(e),missedIngredients:v(e),usedIngredients:N(e),unusedIngredients:j(e),allIngredients:b(e)}},I=function(e){var t=e.submitHandler;return r.a.createElement("form",{className:"field has-addons",onSubmit:t},r.a.createElement("input",{className:"input",type:"text",placeholder:"Ingredients"}),r.a.createElement("button",{className:"add-button"},"Add"))},C=a(41),S=function(e){var t=e.children;return r.a.createElement("div",{className:"container",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",flexDirection:"row"}},t)},w=function(e){var t=e.items,a=e.onClickHandler,n={margin:"0.2em"};return r.a.createElement(S,null,t.map((function(e){return r.a.createElement("button",{key:Object(C.a)(),className:"button",onClick:a,style:n},e)})))},R=function(e){var t=e.dispatch,a=e.id,l=e.src,c=e.alt,i=e.title,s=e.prepTime,u=e.cookTime,f=Object(d.b)().isAuthenticated,h=Object(n.useContext)(m),E=h.activePage,p=h.recipes,b=h.savedRecipes;return r.a.createElement("div",{className:"card card-modify",style:{margin:"0.5em",background:"#222222",color:"var(--dgreen)",padding:"1px",borderRadius:"3px"}},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:l,alt:c}))),r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title is-centered"},i)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Prep ",r.a.createElement("i",{className:"fas fa-clock"})," : ",s," min"),r.a.createElement("p",null,"Cook ",r.a.createElement("i",{className:"fas fa-clock"})," : ",u," min"))),r.a.createElement("footer",{className:"card-foot"},r.a.createElement(o.b,{to:"/details",className:"moreButton button is-fullwidth",onClick:function(){return t({activeRecipe:a})}},"Details"),"search"===E?r.a.createElement("button",{className:"save-button button is-fullwidth",onClick:function(){var e=[].concat(Object(g.a)(p),Object(g.a)(b)).filter((function(e){return e.information.id===a}))[0];t({savedRecipes:[].concat(Object(g.a)(b),[e])})}},"Save"):"library"===E?r.a.createElement("button",{className:"delete-button button is-fullwidth",onClick:function(){f&&t({savedRecipes:b.filter((function(e){return e.information.id!==a}))})}},"Delete"):null))},T=function(e){var t=e.dispatch,a=e.recipes;return r.a.createElement(S,null,a.map((function(e){var a=e.information;return r.a.createElement(R,{key:Object(C.a)(),dispatch:t,id:a.id,src:a.image,alt:a.name,title:a.name,prepTime:a.prepTime,cookTime:a.cookTime})})))},P=a(20),F=a.n(P),A=function(){Object(d.b)().loginWithRedirect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"landingtext"},"Welcome to SUPER PANTRY BUDDY!!!"),r.a.createElement("h2",{className:"landingtext"},"To get started, click the ",r.a.createElement("i",{className:"fas fa-sign-in-alt tabicon","aria-hidden":"true"})," on the bottom right of the screen to login and get started!!!"))},D=a(26),G=a.n(D),W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",{className:"headerImageSPB"},r.a.createElement("img",{src:G.a,alt:"super pantry buddy logo"})))},B=function(e){var t=e.dispatch,a=Object(d.b)().isAuthenticated,l=Object(n.useContext)(m),c=l.cuisine,i=l.excludeCuisine,o=l.diet,u=l.intolerances,f=l.includeIngredients,h=l.excludeIngredients,E=l.recipes,p=Object(n.useState)(6),b=Object(s.a)(p,2),v=b[0],N=b[1];Object(n.useEffect)((function(){return t({activePage:"search"})}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h6",null,"Type in the ingredients you have on hand to find recipes that work for you! Use the Details and Save buttons to take a closer look or save the recipe to your library!"),r.a.createElement("br",null),r.a.createElement(I,{submitHandler:function(e){e.preventDefault(),t({includeIngredients:Object(g.a)(new Set([].concat(Object(g.a)(f),Object(g.a)(e.target.firstChild.value.split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e}))))))}),e.target.firstChild.value=""}}),r.a.createElement("h6",null,"Once you add ingredients, you can click to delete them or click Get Recipes to start cooking!"),r.a.createElement(w,{items:f,onClickHandler:function(e){t({includeIngredients:f.filter((function(t){return t!==e.target.innerText}))})}}),r.a.createElement("button",{className:"moreButton button is-fullwidth",onClick:function(){console.log("getRecipes"),F()("api/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cuisine:c.join(),excludeCuisine:i.join(),diet:o.join(),intolerances:u.join(),includeIngredients:f.join(),excludeIngredients:h.join(),number:6,instructionsRequired:!0,fillIngredients:!0,addRecipeInformation:!0,addRecipeNutrition:!0,ignorePantry:!0})}).then((function(e){console.log(e),e.json(),console.log(e)})).then((function(e){var a=e.results;t({recipes:a.map((function(e){return O(e)}))})})).catch((function(e){return console.log(e)}))}},"Get Recipes"),r.a.createElement(T,{dispatch:t,recipes:E}),E.length>0?r.a.createElement("button",{className:"moreButton button is-fullwidth",onClick:function(){N(v+6),F()("api/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cuisine:c.join(),excludeCuisine:i.join(),diet:o.join(),intolerances:u.join(),includeIngredients:f.join(),excludeIngredients:h.join(),number:6,offset:v,instructionsRequired:!0,fillIngredients:!0,addRecipeInformation:!0,addRecipeNutrition:!0,ignorePantry:!0})}).then((function(e){return e.json()})).then((function(e){var a=e.results;return t({recipes:[].concat(Object(g.a)(E),Object(g.a)(a.map((function(e){return O(e)}))))})})).catch((function(e){return console.log(e)}))}},"Get More Recipes"):null):r.a.createElement(A,null))},H=function(){var e=Object(d.b)(),t=e.loginWithRedirect,a=e.isAuthenticated;e.logout;return r.a.createElement("div",{className:"navbar is-fixed-bottom",style:{backgroundColor:"#284d1d"}},r.a.createElement("div",{className:"tabs navtabs is-boxed is-fullwidth"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"./search"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"./library"},r.a.createElement("i",{className:"fa fa-list","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"./settings"},r.a.createElement("i",{className:"fa fa-cog","aria-hidden":"true"}))),r.a.createElement("li",null,a?r.a.createElement(o.b,{to:"./search"},r.a.createElement("i",{className:"fas fa-sign-out-alt","aria-hidden":"true"})):r.a.createElement(o.b,{to:"./search",onClick:function(){return t()}},r.a.createElement("i",{className:"fas fa-sign-in-alt","aria-hidden":"true"}))))))},M=function(e){var t=e.dispatch,a=Object(n.useContext)(m).savedRecipes;Object(n.useEffect)((function(){return t({activePage:"library"})}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center",fontSize:"larger"}},"Saved Recipes"),r.a.createElement("br",null),r.a.createElement(T,{dispatch:t,recipes:a})):r.a.createElement(r.a.Fragment,null," ",r.a.createElement("h1",{className:"h1Library"},"There is nothing in your library!!!"),r.a.createElement("br",null),r.a.createElement("h3",{className:"h3Library"},"Easy as 1, 2, 3 to start saving recipes in your library:",r.a.createElement("br",null),r.a.createElement("br",null),"1) Login"," ",r.a.createElement("i",{className:"fas fa-sign-in-alt tabicon","aria-hidden":"true"}),r.a.createElement("br",null),"2) Search"," ",r.a.createElement("i",{className:"fa fa-search tabicon","aria-hidden":"true"}),r.a.createElement("br",null),"3) Save"," ",r.a.createElement("span",{className:"tag tagicon is-medium"},"Save"),r.a.createElement("br",null))))},J=function(e){var t=e.text,a=e.onChangeHandler,n=e.checked;return r.a.createElement("label",{className:"checkbox",style:{margin:"0.4em"}},r.a.createElement("input",{type:"checkbox",value:t,checked:n,onChange:a}),t)},U=function(e){var t=e.dispatch,a=Object(d.b)().isAuthenticated,l=Object(n.useContext)(m),c=l.excludeIngredients,i=l.excludeCuisine,s=l.intolerances,o=l.diet,u=function(e){e.target.checked?t({intolerances:[].concat(Object(g.a)(s),[e.target.value])}):t({intolerances:s.filter((function(t){return t!==e.target.value}))})},f=function(e){e.target.checked?t({diet:[].concat(Object(g.a)(o),[e.target.value])}):t({diet:o.filter((function(t){return t!==e.target.value}))})},h=function(e){e.target.checked?t({excludeCuisine:[].concat(Object(g.a)(i),[e.target.value])}):t({excludeCuisine:i.filter((function(t){return t!==e.target.value}))})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Select or enter the items below to either exclude any food intolerances, cuisines, or ingredients, and select a diet if you like. All information will be stored in your settings for future searches until you decide to change them."),r.a.createElement("label",{className:"label has-text-centered"},"Food Intolerances"),r.a.createElement(S,null,["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"].map((function(e){return r.a.createElement(J,{key:Object(C.a)(),text:e,onChangeHandler:u,checked:!!s.includes(e)})})))," ",r.a.createElement("label",{className:"label has-text-centered"},"Must Fit These Diets"),r.a.createElement(S,null,["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Whole30"].map((function(e){return r.a.createElement(J,{key:Object(C.a)(),text:e,onChangeHandler:f,checked:!!o.includes(e)})})))," ",r.a.createElement("label",{className:"label has-text-centered"},"exclude Cuisine"),r.a.createElement(S,null,["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"].map((function(e){return r.a.createElement(J,{key:Object(C.a)(),text:e,onChangeHandler:h,checked:!!i.includes(e)})}))),r.a.createElement("label",{className:"label has-text-centered"},"exclude Ingredients"),r.a.createElement(I,{submitHandler:function(e){e.preventDefault(),t({excludeIngredients:Object(g.a)(new Set([].concat(Object(g.a)(c),Object(g.a)(e.target.firstChild.value.split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e}))))))}),e.target.firstChild.value=""}}),r.a.createElement(w,{items:c,onClickHandler:function(e){t({excludeIngredients:c.filter((function(t){return t!==e.target.innerText}))})}})):r.a.createElement(A,null))},V=function(){var e=Object(n.useContext)(m),t=e.recipes,a=e.savedRecipes,l=e.activeRecipe,c=[].concat(Object(g.a)(t),Object(g.a)(a)).filter((function(e){return e.information.id===l}))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"REcipe Details"),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-vertical is-8"},r.a.createElement("div",{className:"tile"},r.a.createElement("div",{className:"tile is-parent is-vertical"},r.a.createElement("article",{className:"tile is-child notification tileStyles"},r.a.createElement("p",{className:"title"},"Nutrition Facts:",c.nutrients.map((function(e){return r.a.createElement("span",{key:Object(C.a)(),class:"tags has-addons"},r.a.createElement("span",{class:"tag is-dark"},e.name),r.a.createElement("span",{class:"tag is-info"},e.amount," ",e.unit))})))),r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("div",{class:"title field is-grouped is-grouped-multiline"},"Missing Ingredients:",r.a.createElement("div",{class:"control"},c.usedIngredients.map((function(e){return r.a.createElement("span",{key:Object(C.a)(),class:"tags has-addons"},r.a.createElement("span",{class:"tag is-dark"},e.name),r.a.createElement("span",{class:"tag is-info"},e.amount," ",e.unit))})))))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("p",{className:"title"},"Middle tile"),r.a.createElement("p",{className:"subtitle"},"With an image"),r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:"https://bulma.io/images/placeholders/640x480.png"}))))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("p",{className:"title"},"Wide tile"),r.a.createElement("p",{className:"subtitle"},"Aligned with the right tile"),r.a.createElement("div",{className:"content"})))),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child notification"},r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"title"},"Tall tile"),r.a.createElement("p",{className:"subtitle"},"With even more content"),r.a.createElement("div",{className:"content"}))))),r.a.createElement("br",null),c.usedIngredients.length>0?r.a.createElement(S,null,r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},r.a.createElement("thead",{className:"is-12 is-fullwidth "},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2",className:"is-12"},"Included Ingredients"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Amount")),r.a.createElement("div",{class:"field is-grouped is-grouped-multiline"},r.a.createElement("div",{class:"control"},c.usedIngredients.map((function(e){return r.a.createElement("div",{key:Object(C.a)(),class:"tags has-addons"},r.a.createElement("span",{class:"tag is-dark"},e.name),r.a.createElement("span",{class:"tag is-info"},e.amount," ",e.unit))}))))))):null,r.a.createElement("br",null),c.missedIngredients.length>0?r.a.createElement(S,null,r.a.createElement("table",{className:"table is-fullwidth is-striped is-hoverable"},r.a.createElement("thead",{className:"is-12 is-fullwidth "},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"2",className:"is-12"},"Missing Ingredients"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Amount")),c.missedIngredients.map((function(e){return r.a.createElement("tr",{key:Object(C.a)()},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.amount," ",e.unit))}))))):null,r.a.createElement("br",null),c.instructions.length>0?r.a.createElement(S,null,r.a.createElement("div",{className:"card-details card-instructions is-fullwidth"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"card-header-title card.details"},"Instructions")),r.a.createElement("div",{className:"card-content-details has-text-left"},r.a.createElement("ol",null,c.instructions.map((function(e){return r.a.createElement("li",{className:"instructions",key:Object(C.a)()}," ",r.a.createElement("strong",null,r.a.createElement("input",{className:"is-large",type:"checkbox"}))," ",e)})))))):null)},z=function(){var e=Object(n.useState)({id:"",cuisine:[],excludeCuisine:[],diet:[],intolerances:[],includeIngredients:[],excludeIngredients:[],recipes:[],savedRecipes:[],activeRecipe:0,activePage:""}),t=Object(s.a)(e,2),a=t[0],l=t[1],c=function(e){return l(Object(i.a)(Object(i.a)({},a),e))},f=Object(d.b)(),g=f.isAuthenticated,p=f.user;return Object(n.useEffect)((function(){g?(c({id:p.email}),fetch("/db/get",{id:p.email}).then((function(e){return c(e)})).then((function(){return console.log("data loaded from server storage")})).catch((function(e){return console.log(e)}))):h.a.getItem("local").then((function(e){return c(e)})).then((function(){return console.log("data loaded from local storage")})).catch((function(e){return console.log(e)}))}),[g]),Object(n.useEffect)((function(){console.log(a),g&&(fetch("/db/set",{method:"POST",headers:{"Content-Type":"application.json"},body:JSON.stringify(a)}).then((function(){return console.log("data saved to server storage")})).catch((function(e){return console.log(e)})),h.a.setItem("local",a).then((function(){return console.log("data saved to local storage")})).catch((function(e){return console.log(e)})))}),[a]),r.a.createElement(m.Provider,{value:a},r.a.createElement(o.a,null,r.a.createElement(E,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{exact:!0,path:["/","/search"],render:function(){return r.a.createElement(B,{dispatch:c})}}),r.a.createElement(u.a,{exact:!0,path:"/library",render:function(){return r.a.createElement(M,{dispatch:c})}}),r.a.createElement(u.a,{exact:!0,path:"/settings",render:function(){return r.a.createElement(U,{dispatch:c})}}),r.a.createElement(u.a,{exact:!0,path:"/details",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(H,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d.a,{domain:"dev-t7jawcee.us.auth0.com",clientId:"4Sj3xSG8lGxCi51BzJhhsY88dG0QNAis",redirectUri:"https://saveeatrepeat.vercel.app/"},r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.5a8abfcf.chunk.js.map