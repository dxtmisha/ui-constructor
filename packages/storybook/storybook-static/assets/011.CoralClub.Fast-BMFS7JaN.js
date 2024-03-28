import{j as n}from"./jsx-runtime-DBttOdHj.js";import{u as t}from"./index-CTL_JGqU.js";import{M as c,d as s}from"./index-CPwG5Hj5.js";import"./iframe-BLJvSpoy.js";import"../sb-preview/runtime.js";import"./index-Wf5wFW88.js";import"./index-Bw8VTzHM.js";import"./index-DrFu-skq.js";function i(d){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...t(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Руководство/Быстрое использование на сайте"}),`
`,n.jsx(e.h1,{id:"быстрое-использование-на-сайте",children:"Быстрое использование на сайте"}),`
`,n.jsx(s,{children:n.jsx(e.p,{children:"Рекомендуется, если нужно добавить в существующую страницу какой-то компонент."})}),`
`,n.jsx(e.h2,{id:"обзор",children:"Обзор"}),`
`,n.jsxs(e.p,{children:[`На сайте развернут глобальный проект.
Благодаря этому, мы можем получить доступ к любому компоненту UI через HTML-код.
Также есть доступ ко всем функциям и классам системы через глобальные переменные JS: `,n.jsx(e.code,{children:"CC"})," или ",n.jsx(e.code,{children:"window.CC"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-php",children:`// *.php
use CCI\\Ui\\Ui;

// Активизируются скрипты по дизайну системы
Ui::active();
?>

<div
  data-ui="[string]"
  data-[string]="[string]"
  data-[string]="[string]"
  data-[string]="[string]"
  ...
></div>

<?php
`})}),`
`,n.jsx(e.h2,{id:"руководство",children:"Руководство"}),`
`,n.jsxs(e.p,{children:["По умолчанию скрипты UI не будут подключаться. Для подключения надо вызвать класс в PHP ",n.jsx(e.code,{children:"Ui::active()"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-php",children:`// *.php
use CCI\\Ui\\Ui;
Ui::active();
`})}),`
`,n.jsxs(e.p,{children:["Скрипты также можно включить в ",n.jsx(e.strong,{children:"тестовый режим"}),". Для этого надо добавить в URL GET-параметр ",n.jsx(e.code,{children:"UI_ACTIVE=active"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`https://ru.coral.club/?UI_ACTIVE=active
`})}),`
`,n.jsx(e.p,{children:`В тестовом режиме можно открыть Инспектор и редактировать HTML-код, добавляя код подключения компонентов.
Это также нужно для проверки, не слетел ли сайт после подключения UI.`}),`
`,n.jsx(e.h3,{id:"добавление-компонента-на-сайт",children:"Добавление компонента на сайт"}),`
`,n.jsxs(e.p,{children:["Добавление компонента можно в любом месте через атрибут ",n.jsx(e.code,{children:"data-ui"}),` у любого элемента.
После этого внутри элемента создается новый элемент компонента.
Доступ к атрибутам `,n.jsx(e.code,{children:"class"})," и ",n.jsx(e.code,{children:"style"})," компонента можно получить через ",n.jsx(e.code,{children:"data-class"})," и ",n.jsx(e.code,{children:"data-style"}),`.
Для взаимодействия с компонентом используем глобальную переменную JS `,n.jsx(e.code,{children:"UI.comp"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Все свойства передаются как data-атрибуты. Сделано через data-атрибуты, чтобы редактор не ругался на неизвестные атрибуты."}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Любое содержимое внутри элемента изначально будет считаться как ",n.jsx(e.strong,{children:"слот по умолчанию"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div
  data-ui="c2-button"
  data-icon="bank"
  data-label="Label"
  data-class="c2-palette--carmine"
  data-style="height: 52px"
></div>
`})}),`
`,n.jsxs(e.p,{children:[`Компоненты можно добавлять в DOM или удалять в любое время.
Для удаления надо просто убрать элемент с атрибутом `,n.jsx(e.code,{children:"data-ui"})," из DOM."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div
  id="ui-test-1"
  data-ui="c2-button"
  data-label="Label"
></div>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#ui-test-1').remove()
  })
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"изменение-данных",children:"Изменение данных"}),`
`,n.jsxs(e.p,{children:["Изменить данные можно через глобальную функцию ",n.jsx("code",{children:"UI.comp"}),`.
Вызывать можно только после полной загрузки документа, используя событие `,n.jsx("code",{children:"DOMContentLoaded"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`UI.comp(id: string, props: Record<string, any>)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx("code",{children:"UI.comp"})," принимает 2 параметра, первый - это id элемента, второй - объект со списком props, который надо изменить."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div
  id="ui-test-2"
  data-ui="c2-button"
  data-label="Счетчик: 1"
></div>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    let number = 1

    setInterval(() => {
      // Используем UI.comp для изменения данных
      UI.comp(
        'ui-test-2',
        { label: \`Счетчик: \${++number}\` }
      )
    }, 1000)
  })
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"работа-с-событиями",children:"Работа с событиями"}),`
`,n.jsxs(e.p,{children:["Если второй параметр метода ",n.jsx(e.code,{children:"UI.comp"}),` передать значения с ключами,
начинающимися с `,n.jsx(e.code,{children:"on"}),`, он будет регистрироваться как события или emit.
Также можно удалить события, передав значение равное `,n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<script>
  UI.comp(
    id: string,
    props: {
      onEventName1: (event: Event) => void,
      onEventName2: (event: Event) => void
    }
  )
<\/script>
`})}),`
`,n.jsx(e.h4,{id:"пример",children:"Пример:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div
  id="ui-test-3"
  data-ui="c2-button"
  data-label="Нажми"
></div>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    UI.comp(
      'ui-test-3',
      // Регистрирует событие click на элемент
      { onClick: () => alert('click') }
    )
  })
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"работа-со-слотами",children:"Работа со слотами"}),`
`,n.jsxs(e.p,{children:[`Для работы со слотами есть 2 способа.
Через под-элемент и атрибут `,n.jsx(e.code,{children:"data-slot"})," или функцию ",n.jsx(e.code,{children:"UI.comp"}),", через свойство ",n.jsx(e.code,{children:"slots"}),`.
Если у под-элемента не будет атрибута `,n.jsx(e.code,{children:"data-slot"}),", то эти элементы будут приниматься как элементы слота с названием ",n.jsx(e.code,{children:"default"}),"."]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Предпочтительнее через атрибут ",n.jsx(e.code,{children:"data-slot"}),". Это делает код более читабельным. А для редактирования слота через ",n.jsx(e.code,{children:"UI.comp"}),"."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Под элемент без data-slot будет считаться как элемент слота default -->
<div data-ui="c2-button">Label</div>

<div data-ui="m3-window">
  <!-- Тут создаем элемент для слота control -->
  <div data-slot="control" style="display: none">
    <div
      data-ui="c2-button"
      data-label="Открыть меню"
    ></div>
  </div>
  <!-- Тут создаем элемент для слота default -->
  <div data-slot="default" style="display: none">
    <div class="px-4 py-6">
      ...
    </div>
  </div>
</div>

<div
  id="ui-test-6"
  data-ui="c2-button"
></div>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    // Добавление слота default через метод UI.comp
    UI.comp('ui-test-6', { slots: { default: 'Label' } })
  })
<\/script>
`})})]})}function u(d={}){const{wrapper:e}={...t(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{u as default};
