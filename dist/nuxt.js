import { defineNuxtModule as e, addImports as i, addComponent as a } from "@nuxt/kit";
const o = e({
  meta: {
    name: "ui",
    version: "0.0.0-dev.3"
  },
  async setup(l, t) {
    t.options.css.push("ui/style.css"), t.options.build.transpile = [
      /ui\/dist\/(m2|m3|c1|c2)/i
    ], i({
      name: "uiPluginBasic",
      from: "ui/plugin-basic"
    }), await a({
      name: "M2Button",
      filePath: "ui/M2Button",
      global: !0
    }), await a({
      name: "M2Icon",
      filePath: "ui/M2Icon",
      global: !0
    }), await a({
      name: "M2Image",
      filePath: "ui/M2Image",
      global: !0
    }), await a({
      name: "M2Progress",
      filePath: "ui/M2Progress",
      global: !0
    }), await a({
      name: "M2Ripple",
      filePath: "ui/M2Ripple",
      global: !0
    }), await a({
      name: "M3Button",
      filePath: "ui/M3Button",
      global: !0
    }), await a({
      name: "M3Icon",
      filePath: "ui/M3Icon",
      global: !0
    }), await a({
      name: "M3Image",
      filePath: "ui/M3Image",
      global: !0
    }), await a({
      name: "M3Mutation",
      filePath: "ui/M3Mutation",
      global: !0
    }), await a({
      name: "M3MutationItem",
      filePath: "ui/M3MutationItem",
      global: !0
    }), await a({
      name: "M3Progress",
      filePath: "ui/M3Progress",
      global: !0
    }), await a({
      name: "M3Ripple",
      filePath: "ui/M3Ripple",
      global: !0
    }), await a({
      name: "C1Button",
      filePath: "ui/C1Button",
      global: !0
    }), await a({
      name: "C1Icon",
      filePath: "ui/C1Icon",
      global: !0
    }), await a({
      name: "C1Image",
      filePath: "ui/C1Image",
      global: !0
    }), await a({
      name: "C1Progress",
      filePath: "ui/C1Progress",
      global: !0
    }), await a({
      name: "C1Ripple",
      filePath: "ui/C1Ripple",
      global: !0
    }), await a({
      name: "C2Button",
      filePath: "ui/C2Button",
      global: !0
    }), await a({
      name: "C2Icon",
      filePath: "ui/C2Icon",
      global: !0
    }), await a({
      name: "C2Image",
      filePath: "ui/C2Image",
      global: !0
    }), await a({
      name: "C2Mutation",
      filePath: "ui/C2Mutation",
      global: !0
    }), await a({
      name: "C2MutationItem",
      filePath: "ui/C2MutationItem",
      global: !0
    }), await a({
      name: "C2Progress",
      filePath: "ui/C2Progress",
      global: !0
    }), await a({
      name: "C2Ripple",
      filePath: "ui/C2Ripple",
      global: !0
    });
  }
});
export {
  o as default
};
