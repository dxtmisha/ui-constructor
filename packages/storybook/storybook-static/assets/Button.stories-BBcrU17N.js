import{h as e}from"./vue.esm-bundler-C0PuLcVh.js";import{w as r}from"./C2Button-script-D-5Ka75c.js";import{S as g,a as b}from"./category-CNhBE4DO.js";import{d as $,b as q,c as J,e as K,j as L,g as M,h as Q,i as R}from"./props-BLYgcrZZ.js";import"./inArray-BLmbg9f_-Da-N6vMw.js";import"./props-CpUbgiGH-Dwc9uvwy.js";import"./DesignConstructorAbstract-pm1V7i1G-AwalHq2u.js";import"./useEnabled-BTR3ciPG-D572bbZq.js";import"./getBind-CgHMfjrB-D9Fn5VDR.js";import"./eventStopPropagation-fHm2p5BF-D53V-aZD.js";import"./C2Icon-script-Di4Ef8br.js";import"./props-5ohlAg-W-nclBsaZA.js";import"./C2Image-script-BXBHuJTE.js";import"./props-CpiO6YEk-BvInzHmp.js";import"./GeoIntl-DH3GBVnO-Ba8p-fOD.js";import"./isNull-CjWwlQS3-GxMmF9sj.js";import"./toNumber-eA5ODeva-B35HWKKW.js";import"./DataStorage-BS0mwKb9-CnrN-7_f.js";import"./getElement-uQ-JTFk--VVvc7s1q.js";import"./DesignAsyncAbstract-Bi5cMulT-_fSgJIaJ.js";import"./isArray-QlWcxgml-TsNjkBGN.js";import"./GeoFlag-DfvLx1lW-BCKykf8X.js";import"./isFilled-ClO-1E4U-BUdjZhTW.js";import"./EventItem-CNRiCeQO-Z63F0Mu0.js";import"./C2Progress-script-D32IRNn7.js";import"./props-CpvvQJ8b-C-ux5dyN.js";import"./icon-JKHqKBwu.js";import"./image-psPrCwtn.js";import"./values-B4iSBSEf.js";function y(t,o){return s=>()=>e("div",{style:{display:"flex",gap:"16px"}},[e(t,{...s,label:o,icon:"home"}),e(t,{...s,label:o}),e(t,{...s,label:void 0,icon:"home"})])}const a={adaptive:["icon"],size:["x","xs","sm","md","lg","xl"],palette:["carmine","iris","redfish","goldenrod","asparagus","slate","gray","alpha","pistachio","mint","jade","teal","celestial","indigo","orchid","cerise","informative","positive","negative","neutral"]},h={...$,primary:!0,size:"md"},U="Иерархия",W="Размеры кнопок и радиус угла",X=Q,Y="Иерархия кнопок подчеркивает, какая кнопка более важна в данном контексте, чтобы пользователь мог немедленно принимать меры.<br>Кнопки используют цвет и контраст для создания акцентов и иерархии. Кнопки с наибольшим акцентом имеют максимальный приоритет. Кнопки с пониженным и низким акцентом имеют пониженный и низкий приоритет соответственно.",Z="Используйте одну основную кнопку в каждом контексте, чтобы позволить пользователям выполнить конкретное действие, продвигаться в процессе, подтверждать и отклонять или завершать задачу.<br>*<b>Исключения</b>: В веб-приложениях можно использовать более одной Primary кнопки, если на экране размещено несколько панелей. В этом случае стремитесь к тому, чтобы в каждой панели было по одной кнопке.",ee="Secondary кнопки - основа интерфейса. Отдавайте им предпочтение всякий раз, когда это возможно. Серый фон обеспечивает лучшую видимость и делает их более доступными по сравнению с Ghost кнопками.",te="Outline кнопки менее приоритетны, чем Secondary кнопки. Они используются для обозначения дополнительных действий, таких, как открытие фильтров, либо в тех случаях, когда Primary кнопка уже есть на странице, а между двумя другими действиями все еще необходимо обозначить приоритет. Также Outline кнопки должны использоваться для обозначения действия с пониженным приоритетом на цветном, или сером фоне.",re="Ghost кнопки имеют наименьший приоритет. Они используются для обозначения действий отмены, действий позволяющих пользователю пропустить, отказаться, или игнорировать. Так же они могут быть использованы в качестве акцентированных ссылок для скачивания файлов, оформления элементов управления (слайдеров, элементов пагинации и т. д.).",ne={...q(a,h),primary:{control:g.boolean,table:{category:b.token,defaultValue:{summary:"true"},type:{summary:"boolean"}},description:"Основная кнопка"},secondary:{control:g.boolean,table:{category:b.token,type:{summary:"boolean"}},description:"Вторичная кнопка"},outline:J,ghost:K,size:L(a,h),palette:M(a,h)},n=R,oe=[{name:"Primary",props:{}},{name:"Secondary",props:{secondary:!0}},{name:"Secondary Outline",props:{outline:!0}},{name:"Ghost",props:{ghost:!0}}],He={title:"C2/Button",component:r,tags:["autodocs"],parameters:{design:"c2",docs:{description:{component:X}}},argTypes:ne,args:n},i={},u={name:U,parameters:{docs:{description:{story:Y}}},render(){const t=[],o={display:"flex",flexBasis:"1px",flexGrow:"1",flexDirection:"column",alignItems:"center",gap:"24px"};return oe.forEach(s=>{const B=[];a.size.forEach(_=>B.push(e(r,{...s.props,label:n.label,size:_}))),t.push(e("div",{style:o},[e("div",{class:"c2-font--body--lg"},s.name),...B]))}),()=>e("div",{style:{display:"flex",gap:"16px",width:"100%"}},t)}},c={name:"Primary",parameters:{docs:{description:{story:Z}}},args:{primary:!0},render:y(r,n.label)},p={name:"Secondary",parameters:{docs:{description:{story:ee}}},args:{secondary:!0},render:y(r,n.label)},l={name:"Outline",parameters:{docs:{description:{story:te}}},args:{outline:!0},render:y(r,n.label)},m={name:"Ghost",parameters:{docs:{description:{story:re}}},args:{ghost:!0},render:y(r,n.label)},d={name:W,parameters:{docs:{description:{story:`<p>У кнопки есть ${a.size.length} размеров, от которых зависят размеры используемых в них иконок и шрифта</p>`}}},render(){const t=[];return a.size.forEach(o=>t.push(e(r,{label:n.label,icon:"home",size:o}))),()=>e("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},t)}};var f,S,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,D,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: c2ButtonNameHierarchy,
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionHierarchy
      }
    }
  },
  render() {
    const children: VNode[] = [];
    const styleItem = {
      display: 'flex',
      flexBasis: '1px',
      flexGrow: '1',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px'
    };
    c2ButtonStyles.forEach(item => {
      const sizes: VNode[] = [];
      propsValues.size.forEach(size => sizes.push(h(C2Button, {
        ...item.props,
        label: c2ButtonValues.label,
        size
      })));
      children.push(h('div', {
        style: styleItem
      }, [h('div', {
        class: 'c2-font--body--lg'
      }, item.name), ...sizes]));
    });
    return () => h('div', {
      style: {
        display: 'flex',
        gap: '16px',
        width: '100%'
      }
    }, children);
  }
}`,...(V=(D=u.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var E,v,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Primary',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionPrimary
      }
    }
  },
  args: {
    primary: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var A,G,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Secondary',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionSecondary
      }
    }
  },
  args: {
    secondary: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}`,...(O=(G=p.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var P,I,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Outline',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionOutline
      }
    }
  },
  args: {
    outline: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var H,w,k;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Ghost',
  parameters: {
    docs: {
      description: {
        story: c2ButtonDescriptionGhost
      }
    }
  },
  args: {
    ghost: true
  },
  render: renderButtonStyle(C2Button, c2ButtonValues.label)
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var F,j,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: c2ButtonNameSize,
  parameters: {
    docs: {
      description: {
        story: \`<p>У кнопки есть \${propsValues.size.length} размеров, от которых зависят размеры используемых в них иконок и шрифта</p>\`
      }
    }
  },
  render() {
    const children: VNode[] = [];
    propsValues.size.forEach(size => children.push(h(C2Button, {
      label: c2ButtonValues.label,
      icon: 'home',
      size
    })));
    return () => h('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }
    }, children);
  }
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const we=["Button","ButtonHierarchy","ButtonPrimary","ButtonSecondary","ButtonOutline","ButtonGhost","ButtonSize"];export{i as Button,m as ButtonGhost,u as ButtonHierarchy,l as ButtonOutline,c as ButtonPrimary,p as ButtonSecondary,d as ButtonSize,we as __namedExportsOrder,He as default};
