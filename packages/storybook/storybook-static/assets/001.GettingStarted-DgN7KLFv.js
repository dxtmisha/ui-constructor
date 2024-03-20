import{j as n}from"./jsx-runtime-BvQt3H_A.js";import{u as r}from"./index-yyz2nB1I.js";import{M as l,d as c}from"./index-BqEpa6nj.js";import"./iframe-Cu5xGk-R.js";import"../sb-preview/runtime.js";import"./index-Wf5wFW88.js";import"./index-Bw8VTzHM.js";import"./index-DrFu-skq.js";function e(s){const i={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Руководство/Начало работы"}),`
`,n.jsx(i.h1,{id:"начало-работы",children:"Начало работы"}),`
`,n.jsx(c,{children:n.jsxs(i.p,{children:[n.jsx("b",{children:"Design System"}),` - это UI-платформа для реализации компонентов с различными дизайнами,
синхронизирующихся с токенами.`]})}),`
`,n.jsx(i.h2,{id:"обзор",children:"Обзор"}),`
`,n.jsx(i.p,{children:"Принцип работы системы - это разделение компонента на две части."}),`
`,n.jsxs(i.p,{children:[n.jsx("b",{children:"Тело"}),`, оно же конструктор - это базовые возможности компонента.
В нем разрабатывается вся механика работы компонента: свойства, базовые стили, вся функциональность.
Тело может быть только одно.`]}),`
`,n.jsxs(i.p,{children:[n.jsx("b",{children:"Токины"}),` - это все, что связано с внешним видом. Это все данные, которые мы получаем от токенов,
преобразованные в стили. Это похоже на @layer в CSS, только на уровне всего компонента.`]}),`
`,n.jsx(i.p,{children:"Это нужно, чтобы одновременно можно было поддерживать множество дизайнов компонента:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"при исправлении бага в механике компонента, исправляются все другие однотипные компоненты;"}),`
`,n.jsx(i.li,{children:"ускоряет разработку новых дизайнов компонента, так как не приходится разрабатывать компонент с нуля;"}),`
`,n.jsx(i.li,{children:"у каждого компонента будут как свойства от конструктора, так и свои собственные токены."}),`
`]}),`
`,n.jsx(i.h2,{id:"требования-к-системе",children:"Требования к системе"}),`
`,n.jsxs(i.p,{children:["Ядро UI - это Vite, ",n.jsx("b",{children:"Vue3"})," и TypeScript:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[`Vite - это инструмент сборки, цель которого - обеспечить более быструю и
экономичную разработку современных веб-проектов.
Это аналог webpack, который работает в разы быстрее.
`,n.jsx(i.strong,{children:"Vite не обязательно для работы"}),". Можно использовать UI на проектах, собранных на webpack."]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Vue3"})," - фреймворк. ",n.jsx(i.strong,{children:"Обязательное требование"}),`.
Vue2 имеет совсем другую архитектуру разработки, поэтому невозможно его поддерживать параллельно.`]}),`
`]}),`
`,n.jsxs(i.li,{children:[`
`,n.jsxs(i.p,{children:[`TypeScript - это настройка над JavaScript, его главное преимущество - это типизация всех значений.
Благодаря этому редакторы понимают, что это за компонент и что он принимает.
Также TypeScript помогает разработчикам делать меньше ошибок, но кому это интересно.
`,n.jsx(i.strong,{children:"TypeScript тоже не обязателен, его можно не использовать"}),`.
UI прекрасно работает также на проектах без него. Но не рекомендую игнорировать TS, вы влюбитесь.`]}),`
`]}),`
`]}),`
`,n.jsx(i.h2,{id:"установка",children:"Установка"}),`
`,n.jsx(i.p,{children:"UI доступен в нескольких вариантах как в рамках сайта coral.club, так и за его пределами:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["использование как ",n.jsx(i.strong,{children:"HTML-элемент"})," на сайте;"]}),`
`,n.jsx(i.li,{children:"использование как отдельный проект внутри экосистемы сайта;"}),`
`,n.jsxs(i.li,{children:["подключение к проектам Vita/Webpack + ",n.jsx(i.strong,{children:"Vue3"})," + JavaScript/TypeScript как отдельный пакет;"]}),`
`,n.jsxs(i.li,{children:["подключение к проектам ",n.jsx(i.strong,{children:"Nuxt3"})," как модуль."]}),`
`]})]})}function u(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{u as default};
