import{$ as a}from"./C2Icon-script-Di4Ef8br.js";import{j as o,A as r}from"./vue.esm-bundler-C0PuLcVh.js";import{a as x}from"./values-B4iSBSEf.js";const p=(u,d)=>{const i=u.__vccOpts||u;for(const[l,c]of d)i[l]=c;return i},n={},b={class:"ss-none"};function f(u,d){return o(),r("div",b)}const m=p(n,[["render",f]]);n.__docgenInfo={displayName:"SsNone",description:"",tags:{},sourceFiles:["/Volumes/T7/Git/ui-constructor/packages/storybook/src/components/SsNone.vue"]};const w={title:"CC-V3/Структура сайта",component:m,parameters:{design:"c2"},argTypes:{},args:{}},s={name:"Структура",render:()=>({components:{C2Icon:a},setup(){return{icons:x}},template:`
      <div>
        <div class="text-sm font text-center">* Каждый квадрат - это микрофронтенд</div>
        <div class="flex gap-4 pt-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Первый уровень</div>
            <div class="pt-1 text-xs">
              Это глобальный библиотека, который всегда будет подключено
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="p-2 border">
              <div class="w-48 h-32 bg-red-200">
                <div class="p-2">
                  <div class="text-sm font-bold">API</div>
                </div>
              </div>
            </div>
            <div class="w-8">
              <C2Icon icon="arrow-sorting-h"/>
            </div>
            <div class="p-2 border">
              <div class="w-48 h-32 bg-purple-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Главная библиотека</div>
                  <div class="pt-1 text-xs">
                    Система дизайна, работа с запросами к API, получение текста, ядро Vue и все глобальные пакеты
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex justify-center w-48">
                <C2Icon icon="arrow-sorting-v"/>
                <span class="pl-2 opacity-0">POST</span>
              </div>
            </div>
            <div class="w-8"/>
            <div class="p-2 border border-white">
              <div class="w-48">
                <div class="flex justify-center p-2">
                  <C2Icon icon="arrow-up-lg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Второй уровень</div>
            <div class="pt-1 text-xs">
              Это независимые друг от друга библиотека. Подключаются только при использовании
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex items-center justify-center w-48 h-32">
                <div class="flex items-center p-2">
                  <C2Icon icon="arrow-sorting-v"/>
                  <span class="pl-2">POST</span>
                </div>
              </div>
            </div>
            <div class="w-8"></div>
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Пользователь</div>
                  <div class="pt-1 text-xs">
                    Работа с пользователями
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Продукт</div>
                  <div class="pt-1 text-xs">
                    Работа с продуктами
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex justify-center w-48">
                <C2Icon icon="arrow-sorting-v"/>
                <span class="pl-2 opacity-0">POST</span>
              </div>
            </div>
            <div class="w-8"/>
            <div class="p-2 border border-white">
              <div class="w-48">
                <div class="flex justify-center p-2">
                  <C2Icon icon="arrow-up-lg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Третий уровень</div>
            <div class="pt-1 text-xs">
              Это конечные проект. Они могут быть на чистом Vue, Nuxt и Nuxt/ Рендеринг на стороне сервера (SSR)
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">header/footer</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Статические страницы</div>
                  <div class="pt-1 text-xs">
                    Nuxt
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Продукты</div>
                  <div class="pt-1 text-xs">
                    Vue, Nuxt или Nuxt/ SSR
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Регистрация</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    Vue, Nuxt или Nuxt/ SSR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">header/footer</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">Профиль</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">Статистика</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">ДОУ</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    Vue или Nuxt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `})};var v,t,e;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Структура',
  render: () => ({
    components: {
      C2Icon
    },
    setup() {
      return {
        icons
      };
    },
    template: \`
      <div>
        <div class="text-sm font text-center">* Каждый квадрат - это микрофронтенд</div>
        <div class="flex gap-4 pt-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Первый уровень</div>
            <div class="pt-1 text-xs">
              Это глобальный библиотека, который всегда будет подключено
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="p-2 border">
              <div class="w-48 h-32 bg-red-200">
                <div class="p-2">
                  <div class="text-sm font-bold">API</div>
                </div>
              </div>
            </div>
            <div class="w-8">
              <C2Icon icon="arrow-sorting-h"/>
            </div>
            <div class="p-2 border">
              <div class="w-48 h-32 bg-purple-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Главная библиотека</div>
                  <div class="pt-1 text-xs">
                    Система дизайна, работа с запросами к API, получение текста, ядро Vue и все глобальные пакеты
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex justify-center w-48">
                <C2Icon icon="arrow-sorting-v"/>
                <span class="pl-2 opacity-0">POST</span>
              </div>
            </div>
            <div class="w-8"/>
            <div class="p-2 border border-white">
              <div class="w-48">
                <div class="flex justify-center p-2">
                  <C2Icon icon="arrow-up-lg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Второй уровень</div>
            <div class="pt-1 text-xs">
              Это независимые друг от друга библиотека. Подключаются только при использовании
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex items-center justify-center w-48 h-32">
                <div class="flex items-center p-2">
                  <C2Icon icon="arrow-sorting-v"/>
                  <span class="pl-2">POST</span>
                </div>
              </div>
            </div>
            <div class="w-8"></div>
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Пользователь</div>
                  <div class="pt-1 text-xs">
                    Работа с пользователями
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Продукт</div>
                  <div class="pt-1 text-xs">
                    Работа с продуктами
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-lime-200">
                <div class="p-2">
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="p-2 border border-white">
              <div class="flex justify-center w-48">
                <C2Icon icon="arrow-sorting-v"/>
                <span class="pl-2 opacity-0">POST</span>
              </div>
            </div>
            <div class="w-8"/>
            <div class="p-2 border border-white">
              <div class="w-48">
                <div class="flex justify-center p-2">
                  <C2Icon icon="arrow-up-lg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40">
            <div class="text-sm font-bold">Третий уровень</div>
            <div class="pt-1 text-xs">
              Это конечные проект. Они могут быть на чистом Vue, Nuxt и Nuxt/ Рендеринг на стороне сервера (SSR)
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">header/footer</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Статические страницы</div>
                  <div class="pt-1 text-xs">
                    Nuxt
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Продукты</div>
                  <div class="pt-1 text-xs">
                    Vue, Nuxt или Nuxt/ SSR
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">Регистрация</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    Vue, Nuxt или Nuxt/ SSR
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="p-4 border border-white text-sm w-40"/>
          <div class="flex gap-4 items-center">
            <div class="flex gap-2 p-2 border">
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">header/footer</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">Профиль</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">Статистика</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">ДОУ</div>
                  <div class="pt-1 text-xs">
                    Vue
                  </div>
                </div>
              </div>
              <div class="w-32 h-32 bg-blue-200">
                <div class="p-2">
                  <div class="text-xs">Личный кабинет</div>
                  <div class="text-sm font-bold">...</div>
                  <div class="pt-1 text-xs">
                    Vue или Nuxt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(e=(t=s.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const g=["Cc3Structure"],C=Object.freeze(Object.defineProperty({__proto__:null,Cc3Structure:s,__namedExportsOrder:g,default:w},Symbol.toStringTag,{value:"Module"}));export{s as C,C as S};
