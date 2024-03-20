import{j as e}from"./jsx-runtime-BvQt3H_A.js";import{u as t}from"./index-yyz2nB1I.js";import{M as c,d as i}from"./index-BqEpa6nj.js";import"./iframe-Cu5xGk-R.js";import"../sb-preview/runtime.js";import"./index-Wf5wFW88.js";import"./index-Bw8VTzHM.js";import"./index-DrFu-skq.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Руководство/Развернут проект на сайте"}),`
`,e.jsx(n.h1,{id:"развернут-проект-на-сайте",children:"Развернут проект на сайте"}),`
`,e.jsx(i,{children:e.jsx(n.p,{children:"Рекомендуется, если нужно разрабатывать полноценную страницу или компонент."})}),`
`,e.jsx(n.h2,{id:"обзор",children:"Обзор"}),`
`,e.jsx(n.p,{children:`Можно развернуть полноценный проект Vite + Vue3 для разработки как простого компонента, так и полноценной страницы.
Такие проекты собираются без модулей Vue и UI, и подключаются к глобальным модулям.
Это удобно в том, что при обновлении UI не надо будет пересобирать все проекты.
В таких проектах можно подключать любые пакеты, плагины.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Если подключить проект как компонент"}),`, есть ограничения в том, что нельзя использовать дополнительные
плагины, как vue-router, vuex или любые другие пакеты, где нужен доступ к app Vue.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"руководство",children:"Руководство"}),`
`,e.jsxs(n.p,{children:["Для развертывания проекта надо скачать файл ",e.jsx(n.code,{children:"create-vue.js"})," и поместить его в папку, в которую хотим разместить проект."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Ссылка на файл: ",e.jsx(n.a,{href:"https://ru.coral.club/",title:"create-vue.js",rel:"nofollow",children:"create-vue.js"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Если хотим реализовать компонент, предлагаю разместить в папке ui-components/[название компонента]/."}),`
`,e.jsxs(n.li,{children:[`Если это страница, её нужно разместить там, где она будет доступна по URL.
Например, если наш проект будет доступен по URL `,e.jsx(n.code,{children:"https://ru.coral.club/page1/page2/"}),`,
то и проект будет находиться в папке `,e.jsx(n.code,{children:"/page1/page2/"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"create-vuejs",children:"create-vue.js"}),`
`,e.jsx(n.p,{children:"Это скриптовый файл, который генерирует нам все нужные файлы для работы."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["В ",e.jsx(n.strong,{children:"PHPStorm"})," можно выполнить, нажав правую кнопку мыши на файле -> Run 'create-vue.js'."]}),`
`,e.jsxs(n.li,{children:["В ",e.jsx(n.strong,{children:"VS Code"})," нужно через терминал выполнить команду ",e.jsx(n.code,{children:"node [путь к файлу]/create-vue.js"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"После успешного выполнения скрипта появятся файлы для работы, а сам create-vue.js удалится. Нам интересны только следующие файлы:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`| vue/
---| src/
------| App.vue
------| init.ts
------| request.ts
------| router.ts
------| store.ts
------| style.scss
------| translate.ts
---| vite.config.ts
| index.php
`})})]})}function a(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{a as default};
