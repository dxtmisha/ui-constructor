import { defineNuxtModule as t, addImports as e, addComponent as i } from "@nuxt/kit";
const s = t({
  meta: {
    name: "ui",
    version: "0.0.0-dev.3"
  },
  async setup(u, a) {
    a.options.css.push("ui/style.css"), a.options.build.transpile = [
      /ui\/dist\/(m2|m3|c1|c2)/i
    ], e({
      name: "uiPluginBasic",
      from: "ui/plugin-basic"
    }), await i({
      name: "M2Button",
      filePath: "ui/dist/M2Button.vue"
    }), await i({
      name: "M2Icon",
      filePath: "ui/dist/M2Icon.vue"
    }), await i({
      name: "M2Image",
      filePath: "ui/dist/M2Image.vue"
    }), await i({
      name: "M2Progress",
      filePath: "ui/dist/M2Progress.vue"
    }), await i({
      name: "M2Ripple",
      filePath: "ui/dist/M2Ripple.vue"
    }), await i({
      name: "M3Button",
      filePath: "ui/dist/M3Button.vue"
    }), await i({
      name: "M3Icon",
      filePath: "ui/dist/M3Icon.vue"
    }), await i({
      name: "M3Image",
      filePath: "ui/dist/M3Image.vue"
    }), await i({
      name: "M3Input",
      filePath: "ui/dist/M3Input.vue"
    }), await i({
      name: "M3Mask",
      filePath: "ui/dist/M3Mask.vue"
    }), await i({
      name: "M3Mutation",
      filePath: "ui/dist/M3Mutation.vue"
    }), await i({
      name: "M3MutationItem",
      filePath: "ui/dist/M3MutationItem.vue"
    }), await i({
      name: "M3Progress",
      filePath: "ui/dist/M3Progress.vue"
    }), await i({
      name: "M3Ripple",
      filePath: "ui/dist/M3Ripple.vue"
    }), await i({
      name: "M3Scrollbar",
      filePath: "ui/dist/M3Scrollbar.vue"
    }), await i({
      name: "M3Window",
      filePath: "ui/dist/M3Window.vue"
    }), await i({
      name: "C1Button",
      filePath: "ui/dist/C1Button.vue"
    }), await i({
      name: "C1Icon",
      filePath: "ui/dist/C1Icon.vue"
    }), await i({
      name: "C1Image",
      filePath: "ui/dist/C1Image.vue"
    }), await i({
      name: "C1Progress",
      filePath: "ui/dist/C1Progress.vue"
    }), await i({
      name: "C1Ripple",
      filePath: "ui/dist/C1Ripple.vue"
    }), await i({
      name: "C2Button",
      filePath: "ui/dist/C2Button.vue"
    }), await i({
      name: "C2Icon",
      filePath: "ui/dist/C2Icon.vue"
    }), await i({
      name: "C2Image",
      filePath: "ui/dist/C2Image.vue"
    }), await i({
      name: "C2Mutation",
      filePath: "ui/dist/C2Mutation.vue"
    }), await i({
      name: "C2MutationItem",
      filePath: "ui/dist/C2MutationItem.vue"
    }), await i({
      name: "C2Progress",
      filePath: "ui/dist/C2Progress.vue"
    }), await i({
      name: "C2Ripple",
      filePath: "ui/dist/C2Ripple.vue"
    });
  }
});
export {
  s as default
};
