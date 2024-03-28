import{j as n}from"./jsx-runtime-DBttOdHj.js";import{u as i}from"./index-CTL_JGqU.js";import{M as s,d as o,C as l}from"./index-CPwG5Hj5.js";import{S as c,C as d}from"./010.Structure.stories-yOLN_pMN.js";import"./iframe-BLJvSpoy.js";import"../sb-preview/runtime.js";import"./index-Wf5wFW88.js";import"./index-Bw8VTzHM.js";import"./index-DrFu-skq.js";import"./C2Icon-script-Di4Ef8br.js";import"./vue.esm-bundler-C0PuLcVh.js";import"./inArray-BLmbg9f_-Da-N6vMw.js";import"./props-5ohlAg-W-nclBsaZA.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./getBind-CgHMfjrB-D9Fn5VDR.js";import"./C2Image-script-BXBHuJTE.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./values-B4iSBSEf.js";function t(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c}),`
`,n.jsx(r.h1,{id:"структура-сайта",children:"Структура сайта"}),`
`,n.jsx(o,{children:n.jsx(r.p,{children:"Сайт реализуется по схеме микросервис/микрофронтенд."})}),`
`,n.jsx(r.h3,{id:"что-учитывать-при-создании",children:"Что учитывать при создании"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:`Каждая независимая функциональная страница (каталог, регистрация, корзина, новости и т.д.) - это
отдельный независимый проект со своей командой разработчиков.`}),`
`,n.jsx(r.li,{children:"Каждый функционал, который можно использовать в нескольких проектах, должен реализовываться как отдельная библиотека."}),`
`,n.jsx(r.li,{children:"Возможности работать с vue, nuxt и рендеринг на стороне сервера (SSR)"}),`
`,n.jsx(r.li,{children:`При первом открытии страницы для полного формирования страницы не должно быть никаких запросов на стороне сервера.
Все данные должны быть заранее подгружены в index файле. Это для лучшей работы поисковиков и опыта использования пользователей.`}),`
`]}),`
`,n.jsx(r.h3,{id:"что-нужно",children:"Что нужно"}),`
`,n.jsx(r.p,{children:`Нам нужен простой сервер, который бы объединял все наши микрофронтенды в одну страницу,
а также выполнял запросы, чтобы передать клиенту все данные.`}),`
`,n.jsx(r.h3,{id:"какие-есть-готовые-решения",children:"Какие есть готовые решения"}),`
`,n.jsxs(r.p,{children:["Решения, которые работают на стороне клиента, такие как ",n.jsx(r.strong,{children:"Module Federation"})," и ",n.jsx(r.strong,{children:"Single-SPA"}),`, нам не подходят.
Так как нам нужно не просто подготовить готовый файл, но и добавлять данные из запросов.
Самое близкое решение - это `,n.jsx(r.strong,{children:"Podium"}),", но он старый и не популярный, к тому же там много настроек, много лишнего из коробки."]}),`
`,n.jsx(r.p,{children:`В итоге будем пилить свой, так как это не так уж и трудно, и наше решение будет простым,
но полностью под нашими требованиями.`}),`
`,n.jsx(r.h2,{id:"реализация",children:"Реализация"}),`
`,n.jsxs(r.p,{children:["Серверная часть будет работать на ",n.jsx(r.strong,{children:"Nitro"}),"."]}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Nitro"}),` - это самое новое решение для серверной части на движке Node.js.
Из коробки он уже поддерживает роутер, кэш, и инструменты для запросов локального характера.`]}),`
`]}),`
`,n.jsx(r.h3,{id:"как-работает",children:"Как работает"}),`
`,n.jsx(r.p,{children:"Для каждого Route прописывается вручную и выполняет два действия:"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"выполняет запрос для получения данных;"}),`
`,n.jsx(r.li,{children:"подключение нужного проекта для вывода."}),`
`]}),`
`,n.jsx(r.h4,{id:"пример-для-страницы-продукта",children:"Пример для страницы продукта"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-js",children:`// server/routes/product.ts
export default eventHandler(async (event) => {
  const data = await $fetch(\`api.coral.club/product/\${getQuery(event)?.item}/\`)

  if (data) {
    return content({
      title: 'title',
      project: 'product',
      data
    })
  } else {
    return content({ project: '404' })
  }
})
`})}),`
`,n.jsx(r.h3,{id:"структура-проектов-и-библиотек",children:"Структура проектов и библиотек"}),`
`,n.jsx(r.p,{children:"Можно разделить на 3 уровень"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"1 уровень"}),`. Это самый важный, в нем хранится код ядра Vue, все зависимые пакеты, а также сама система дизайна.
`,n.jsx(r.strong,{children:"Если он сломается, весь сайт упадет."})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"2 уровень"}),`. Это библиотеки, которые автоматически подключаются при использовании.
Каждая библиотека будет выполнять лишь набор функций для конкретного проекта.
В ней могут быть функции, классы, API, компоненты.
Например, библиотека продукта будет хранить API для получения информации о продукте,
компоненты для отображения карты продуктов.
`,n.jsx(r.strong,{children:"Если он сломается, упадет только та часть компонента, которая его использует, а не весь проект."})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"3 уровень"}),`. Это сами проекты. Это конечный продукт, который видит клиент.
Это может быть часть страницы (header/footer) или полноценный функционал (регистрация, страница заказа).
На одной странице может быть любое количество проектов, но я против этого.
Предпочитаю разделение на уровень страницы/функционала.
То есть, например, на странице будет проект для отображения header/footer, отображения информации о продукте и образный связь.`]}),`
`]}),`
`,n.jsx(l,{of:d}),`
`,n.jsxs(r.blockquote,{children:[`
`,n.jsx(r.p,{children:`Разделение на библиотеки и проекты нужно для переиспользования.
Такой подход позволяет разработчику легче ориентироваться в коде и использовать функционал
из любой библиотеки на любом проекте. Например, на проекте новостей нужно подключить карту продукта,
я захожу в библиотеку продуктов, и вижу только те компоненты, которые доступны для подключения.`}),`
`]}),`
`,n.jsx(r.h3,{id:"как-с-этим-работать",children:"Как с этим работать"}),`
`,n.jsx(r.p,{children:`Структура у библиотеки и проектов будет одинакова. Разница только в настройке конфигурации Vite.
Но библиотека может быть только на чистом Vue, а проекты могут быть и на чистом Vue и на Nuxt.`}),`
`,n.jsx(r.p,{children:"Подключение функционала библиотеки будет происходить просто через import, то есть стандартно."}),`
`,n.jsx(r.h4,{id:"пример",children:"Пример"}),`
`,n.jsx(r.p,{children:"Подключения API для получения информации о продукте из библиотеки продуктов"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-js",children:`// components.vue
<script setup>
import { useProductItem } from 'cc3/product'

const item = useProductItem(123456)
<\/script>
`})}),`
`,n.jsx(r.h3,{id:"технический-демо",children:"Технический демо"}),`
`,n.jsx(r.p,{children:"Я собрал из говна и палки пример того, как все будет выглядеть"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["сайт: ",n.jsx(r.a,{href:"http://171.244.62.50:3500/",title:"171.244.62.50:3500",rel:"nofollow",children:"171.244.62.50:3500"})]}),`
`,n.jsxs(r.li,{children:["git: ",n.jsx(r.a,{href:"https://github.com/dxtmisha/ssr-nitro",title:"ssr-nitro",rel:"nofollow",children:"ssr-nitro"})]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.a,{href:"http://171.244.62.50:3500/project-nuxt-server/",rel:"nofollow",children:"http://171.244.62.50:3500/project-nuxt-server/"})," - это рендеринг на стороне сервера"]})]})}function $(e={}){const{wrapper:r}={...i(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{$ as default};
