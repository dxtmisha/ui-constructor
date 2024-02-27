import { defineNuxtModule as e, addImports as i, addComponent as t } from "@nuxt/kit";
const u = e({
  meta: {
    name: "ui",
    version: "0.0.0-dev.3"
  },
  async setup(o, a) {
    a.options.css.push("ui/style.css"), a.options.build.transpile = [
      /ui\/dist\/(m2|m3|c1|c2)/i
    ], i({
      name: "uiPluginBasic",
      from: "ui/plugin-basic",
      type: !0
    }), await t({
      name: "M2Button",
      export: "M2Button",
      filePath: "ui/M2Button"
    }), await t({
      name: "M2Icon",
      export: "M2Icon",
      filePath: "ui/M2Icon"
    }), await t({
      name: "M2Image",
      export: "M2Image",
      filePath: "ui/M2Image"
    }), await t({
      name: "M2Progress",
      export: "M2Progress",
      filePath: "ui/M2Progress"
    }), await t({
      name: "M2Ripple",
      export: "M2Ripple",
      filePath: "ui/M2Ripple"
    }), await t({
      name: "M3Button",
      export: "M3Button",
      filePath: "ui/M3Button"
    }), await t({
      name: "M3Icon",
      export: "M3Icon",
      filePath: "ui/M3Icon"
    }), await t({
      name: "M3Image",
      export: "M3Image",
      filePath: "ui/M3Image"
    }), await t({
      name: "M3Mutation",
      export: "M3Mutation",
      filePath: "ui/M3Mutation"
    }), await t({
      name: "M3MutationItem",
      export: "M3MutationItem",
      filePath: "ui/M3MutationItem"
    }), await t({
      name: "M3Progress",
      export: "M3Progress",
      filePath: "ui/M3Progress"
    }), await t({
      name: "M3Ripple",
      export: "M3Ripple",
      filePath: "ui/M3Ripple"
    }), await t({
      name: "C1Button",
      export: "C1Button",
      filePath: "ui/C1Button"
    }), await t({
      name: "C1Icon",
      export: "C1Icon",
      filePath: "ui/C1Icon"
    }), await t({
      name: "C1Image",
      export: "C1Image",
      filePath: "ui/C1Image"
    }), await t({
      name: "C1Progress",
      export: "C1Progress",
      filePath: "ui/C1Progress"
    }), await t({
      name: "C1Ripple",
      export: "C1Ripple",
      filePath: "ui/C1Ripple"
    }), await t({
      name: "C2Button",
      export: "C2Button",
      filePath: "ui/C2Button"
    }), await t({
      name: "C2Icon",
      export: "C2Icon",
      filePath: "ui/C2Icon"
    }), await t({
      name: "C2Image",
      export: "C2Image",
      filePath: "ui/C2Image"
    }), await t({
      name: "C2Mutation",
      export: "C2Mutation",
      filePath: "ui/C2Mutation"
    }), await t({
      name: "C2MutationItem",
      export: "C2MutationItem",
      filePath: "ui/C2MutationItem"
    }), await t({
      name: "C2Progress",
      export: "C2Progress",
      filePath: "ui/C2Progress"
    }), await t({
      name: "C2Ripple",
      export: "C2Ripple",
      filePath: "ui/C2Ripple"
    });
  }
});
export {
  u as default
};
