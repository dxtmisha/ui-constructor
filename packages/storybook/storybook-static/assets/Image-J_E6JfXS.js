import{j as n}from"./jsx-runtime-DBttOdHj.js";import{u as c}from"./index-CTL_JGqU.js";import{M as t,d,C as i,e as l}from"./index-CPwG5Hj5.js";import{I as m,c as o,a as s,V as p,b as h,d as j,C as x,A as u,e as g}from"./Image.stories-C0049ZrN.js";import"./iframe-BLJvSpoy.js";import"../sb-preview/runtime.js";import"./index-Wf5wFW88.js";import"./index-Bw8VTzHM.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-C0PuLcVh.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./index-BBzsnUaj-BTIJPPFS.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./C2Image-script-BXBHuJTE.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./image-psPrCwtn.js";import"./category-CNhBE4DO.js";import"./values-B4iSBSEf.js";function a(r){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:m}),`
`,n.jsx(e.h1,{id:"",children:o.main.title}),`
`,n.jsx(d,{children:o.main.description.main}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { C2Image } from 'ui/C2Image'
`})}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(l,{of:s}),`
`,n.jsxs(e.p,{children:["Компонент представляет собой ",n.jsx(e.code,{children:"span"}),` с абсолютным позиционированием.
Поэтому его нужно обернуть в элемент со стилем position, не равным static.`]}),`
`,n.jsx(e.h2,{id:"value",children:"Value"}),`
`,n.jsx(e.p,{children:"Компонент изображения может отображать встроенные иконки, картины, SVG-файлы и PDF."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c2-image value="[string | File]"/>
`})}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h3,{id:"свои-иконки",children:"Свои иконки"}),`
`,n.jsxs(e.p,{children:["Можно подключить дополнительные иконки через метод ",n.jsx(e.code,{children:"Icons.add"}),`.
Подключенная иконка может быть любым изображением или SVG-файлом.
При этом цвет изображения будет залит цветом шрифта.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// component.vue
<script setup lang="ts">
import { Icons } from 'ui'

Icons.add('name-icon', 'path')
<\/script>

<template>
  <c2-image value="name-icon"/>
</template>
`})}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h3,{id:"загружаемые-пользовательские-изображения",children:"Загружаемые пользовательские изображения"}),`
`,n.jsx(e.p,{children:`Компонент изображения может также принимать значения типа File, загружаемые изображения пользователя.
Все загружаемые файлы с размером больше 1280 будут сжиматься до 1280 для увеличения производительности.`}),`
`,n.jsx(i,{of:j}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Внимание!"}),` Браузер блокирует отображение файлов типа PDF. Поэтому, несмотря на то, что такие
файлы будут работать при локальном запуске проекта, они не будут отображаться на сайте.`]}),`
`]}),`
`,n.jsx(e.h2,{id:"coordinator",children:"Coordinator"}),`
`,n.jsx(e.p,{children:`Обычно изображения центрируются, из-за чего иногда они обрезаются неудачно.
Чтобы исправить это, можно использовать свойство coordinator для изменения центральной части изображения.
Оно выводит изображения так, чтобы всегда была видна та часть изображения, которая была указана.`}),`
`,n.jsxs(e.p,{children:["Свойство ",n.jsx(e.code,{children:"coordinator"}),` принимает массив из 4 значений, указанных в процентах.
Каждое значение отвечает за обрезку изображения `,n.jsx(e.code,{children:"[сверху, справа, снизу, слева]"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c2-image
  ...
  :coordinator="[Array<[number, number, number, number]>]"
  ...
/>
`})}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h2,{id:"adaptive",children:"Adaptive"}),`
`,n.jsx(e.p,{children:`Для изображения с продуктами можно выравнивать размеры элементов между собой,
чтобы продукты на изображении были в одном масштабе.
Для работы необходимо указать размер продукта, и у изображения не должно быть пустых отступов.
Сам размер изображения может быть любым и не равен другим.`}),`
`,n.jsxs(e.p,{children:["Для активации адаптивности необходимо включить свойство ",n.jsx(e.code,{children:"adaptive"})," и один из размеров (высота или ширина) ",n.jsx(e.code,{children:"object-width"}),"/ ",n.jsx(e.code,{children:"object-height"}),`.
После этого все компоненты с включенным `,n.jsx(e.code,{children:"adaptive"})," будут выравнивать размер изображения между собой."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c2-image
  adaptive
  :value="[string]"
  :object-width="[number]"
  :object-height="[number]"
/>
`})}),`
`,n.jsx(i,{of:u}),`
`,n.jsxs(e.p,{children:[`По умолчанию адаптив останавливается при выходе элемента за пределы экрана.
Для постоянного отслеживания размера используется свойство `,n.jsx(e.code,{children:"adaptive-always"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c2-image
  ...
  :adaptive-always="[boolean]"
  ...
/>
`})}),`
`,n.jsx(e.h3,{id:"разделение-на-группы",children:"Разделение на группы"}),`
`,n.jsxs(e.p,{children:["Адаптация можно разделить на группы черед свойство ",n.jsx(e.code,{children:"adaptive-group"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c2-image
  ...
  :adaptive-group="[string]"
  ...
/>
`})}),`
`,n.jsx(i,{of:g})]})}function B(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(a,{...r})}):a(r)}export{B as default};
