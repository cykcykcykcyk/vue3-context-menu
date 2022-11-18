import { defineComponent as j, useSlots as ee, ref as x, inject as S, openBlock as a, createElementBlock as h, normalizeClass as $, unref as p, Fragment as z, createElementVNode as P, createBlock as T, resolveDynamicComponent as A, toDisplayString as te, createCommentVNode as L, renderSlot as ne, computed as oe, provide as B, onMounted as G, nextTick as se, resolveComponent as le, normalizeStyle as V, withModifiers as ie, renderList as ce, createVNode as _, createSlots as ae, withCtx as ue, withDirectives as D, vShow as U, onUnmounted as de, h as re, render as X } from "vue";
let E = null;
const me = (e) => {
  E == null || E.closeMenu(), E = e;
}, fe = (e) => {
  E = null;
}, he = { class: "icon" }, ve = {
  key: 0,
  class: "label"
}, xe = {
  name: "i-context-menu-item"
}, pe = /* @__PURE__ */ j({
  ...xe,
  props: {
    disabled: { type: Boolean, default: !1 },
    customComponent: null,
    customClass: { default: "" },
    label: { default: "" },
    icon: { default: "" },
    iconFontClass: { default: "iconfont" },
    showRightArrow: { type: Boolean, default: !1 },
    clickClose: { type: Boolean, default: !0 },
    clickableWhenHasChildren: { type: Boolean, default: !1 },
    clickHandler: { type: Function, default: () => {
    } }
  },
  setup(e) {
    const t = e, i = ee(), l = x(!1), c = S("menuContext"), u = S("globalNamespace"), d = S("globalCloseMenu"), y = S("globalOptions"), w = () => {
      t.disabled || (i.submenu ? t.clickableWhenHasChildren && typeof t.clickHandler == "function" && t.clickHandler() : (typeof t.clickHandler == "function" && t.clickHandler(), t.clickClose && d()));
    }, v = () => {
      c.checkCloseOtherSubMenuTimeOut() || c.closeOtherSubMenu(), c.addOpenedSubMenu(() => {
        l.value = !1;
      }), l.value = !0;
    }, g = {
      disabled: t.disabled,
      label: t.label,
      icon: t.icon,
      iconFontClass: t.iconFontClass,
      showRightArrow: t.showRightArrow,
      clickClose: t.clickClose,
      clickableWhenHasChildren: t.clickableWhenHasChildren
    };
    return (W, b) => (a(), h("div", {
      class: $([p(u) + "context-menu-item", e.disabled ? "disabled" : "", e.customClass]),
      onClick: w,
      onMouseenter: v
    }, [
      e.customComponent ? (a(), T(A(e.customComponent), {
        key: 1,
        data: g
      })) : (a(), h(z, { key: 0 }, [
        P("div", he, [
          typeof e.icon == "string" ? (a(), h("i", {
            key: 0,
            class: $([e.icon, e.iconFontClass])
          }, null, 2)) : (a(), T(A(e.icon), {
            key: 1,
            data: g
          }))
        ]),
        typeof e.label == "string" ? (a(), h("span", ve, te(e.label), 1)) : (a(), T(A(e.label), {
          key: 1,
          data: g
        })),
        e.showRightArrow ? (a(), h(z, { key: 2 }, [
          typeof (p(y).moreArrow || "") == "string" ? (a(), h("div", {
            key: 0,
            class: $(["right-arrow", "more", p(y).moreArrow])
          }, null, 2)) : (a(), T(A(p(y).moreArrow), {
            key: 1,
            data: { ...g, className: ["right-arrow", "more"] }
          }, null, 8, ["data"]))
        ], 64)) : L("", !0)
      ], 64)),
      l.value ? ne(W.$slots, "submenu", { key: 2 }) : L("", !0)
    ], 34));
  }
});
var be = /^\d+((px)|%)?$/;
function J(e) {
  let t = e.offsetTop;
  return e.offsetParent != null && (t -= e.offsetParent.scrollTop, t += J(e.offsetParent)), t;
}
function K(e) {
  let t = e.offsetLeft;
  return e.offsetParent != null && (t -= e.offsetParent.scrollLeft, t += K(e.offsetParent)), t;
}
const Y = (e) => be.test(String(e)), Ce = {
  key: 0,
  class: "divided"
}, ye = /* @__PURE__ */ P("div", { class: "double-arrow" }, null, -1), ge = [
  ye
], ke = /* @__PURE__ */ P("div", { class: "double-arrow" }, null, -1), we = [
  ke
], We = {
  name: "i-context-menu-sub"
}, Me = /* @__PURE__ */ j({
  ...We,
  props: {
    items: null,
    maxWidth: null,
    minWidth: null,
    adjustPosition: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, i = 3, l = document.body.clientHeight, c = document.body.clientWidth;
    let u = 0;
    const d = S("globalOptions"), y = S("menuContext"), w = S("globalNamespace"), { zIndex: v, getMyPosition: g, getParentWidth: W } = y, b = x(!1), k = x(0), r = x(0), N = [], C = x({ x: 0, y: 0 }), m = x(), M = x(), I = x(), Q = {
      zIndex: v + 1,
      getMyPosition: () => {
        const o = { x: 0, y: 0 };
        return m.value && (o.x = m.value.offsetWidth + (d.xOffset || 0)), d.yOffset && (o.y = d.yOffset), o;
      },
      getParentWidth: () => {
        var o;
        return (o = m.value) == null ? void 0 : o.offsetWidth;
      },
      addOpenedSubMenu(o) {
        N.push(o);
      },
      closeOtherSubMenu() {
        N.forEach((o) => o()), N.splice(0, N.length);
      },
      checkCloseOtherSubMenuTimeOut() {
        return u ? (clearTimeout(u), u = 0, !0) : !1;
      },
      closeOtherSubMenuWithTimeOut() {
        u = setTimeout(() => {
          u = 0, this.closeOtherSubMenu();
        }, 200);
      }
    }, R = (o) => {
      var f, H, s, O;
      let n = 0;
      o == "down" ? n = Math.max(k.value - 50, -r.value) : n = Math.min(k.value + 50, 0), n > 0 && (n = 0), n < Number((f = M.value) == null ? void 0 : f.offsetHeight) - Number((H = m.value) == null ? void 0 : H.offsetHeight) && (n = Number((s = M.value) == null ? void 0 : s.offsetHeight) - Number((O = m.value) == null ? void 0 : O.offsetHeight)), k.value = n;
    }, Z = oe(() => {
      const o = l * 0.95, n = l * 0.8, f = (d == null ? void 0 : d.maxHeight) || 0;
      return {
        maxWidth: t.maxWidth ? Y(t.maxWidth) ? t.maxWidth : t.maxWidth + "px" : "",
        minWidth: t.minWidth ? Y(t.minWidth) ? t.minWidth : t.minWidth + "px" : "",
        maxHeight: (n > f ? n : o > f && f != 0 ? f : o) + "px",
        zIndex: v,
        left: `${C.value.x}px`,
        top: `${C.value.y}px`
      };
    });
    return B("menuContext", Q), G(() => {
      C.value = g(), se(() => {
        const o = m.value, n = M.value;
        if (!o || !n)
          return !1;
        if (t.adjustPosition && m.value && I.value) {
          r.value = o.offsetHeight - (n == null ? void 0 : n.offsetHeight), b.value = o.offsetHeight > (n == null ? void 0 : n.offsetHeight);
          const f = K(o), H = J(n);
          f + o.offsetWidth - c > 0 ? C.value.x -= (W ? W() : 0) + o.offsetWidth - i : C.value.x -= i;
          const O = H + n.offsetHeight - l;
          O > 0 && (C.value.y -= O * 1.05);
        }
      });
    }), (o, n) => {
      var H;
      const f = le("i-context-menu-sub");
      return a(), h("div", {
        class: $([p(w) + "context-menu-sub", ((H = p(d)) == null ? void 0 : H.customClass) || ""]),
        style: V(p(Z)),
        onContextmenu: n[2] || (n[2] = ie(() => {
        }, ["stop", "prevent"])),
        ref_key: "sub",
        ref: M
      }, [
        P("div", {
          class: $([p(w) + "context-menu-sub-body"]),
          ref_key: "menu",
          ref: m,
          style: V({ top: `${k.value}px` })
        }, [
          e.items ? (a(!0), h(z, { key: 0 }, ce(e.items, (s, O) => (a(), h("div", { key: O }, [
            _(pe, {
              clickHandler: s.onClick,
              disabled: s.disabled,
              iconFontClass: p(d).iconFontClass,
              icon: s.icon,
              label: s.label,
              customComponent: s.customComponent,
              customClass: s.customClass,
              clickClose: s.clickClose,
              clickableWhenHasChildren: s.clickableWhenHasChildren,
              showRightArrow: s.children && s.children.length > 0
            }, ae({ _: 2 }, [
              s.children && s.children.length > 0 ? {
                name: "submenu",
                fn: ue(() => [
                  _(f, {
                    items: s.children,
                    maxWidth: s.maxWidth,
                    minWidth: s.minWidth,
                    adjustPosition: s.adjustSubMenuPosition
                  }, null, 8, ["items", "maxWidth", "minWidth", "adjustPosition"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["clickHandler", "disabled", "iconFontClass", "icon", "label", "customComponent", "customClass", "clickClose", "clickableWhenHasChildren", "showRightArrow"]),
            s.divided ? (a(), h("div", Ce)) : L("", !0)
          ]))), 128)) : L("", !0)
        ], 6),
        P("div", {
          class: $([p(w) + "context-menu-scroll"]),
          ref_key: "scroll",
          ref: I
        }, [
          D(P("div", {
            class: "updown up",
            onClick: n[0] || (n[0] = (s) => R("up"))
          }, ge, 512), [
            [U, b.value && k.value < 0]
          ]),
          D(P("div", {
            class: "updown down",
            onClick: n[1] || (n[1] = (s) => R("down"))
          }, we, 512), [
            [U, b.value && k.value > -r.value]
          ])
        ], 2)
      ], 38);
    };
  }
}), He = {
  name: "i-context-menu"
}, Oe = /* @__PURE__ */ j({
  ...He,
  props: {
    options: null,
    namespace: null
  },
  emits: ["close"],
  setup(e, { expose: t, emit: i }) {
    const l = e, c = x(!0), u = x("context-menu-host"), d = {
      zIndex: (l.options || {}).zIndex || 100,
      getMyPosition: () => ({
        x: l.options.x,
        y: l.options.y
      }),
      addOpenedSubMenu: () => {
      },
      closeOtherSubMenu: () => {
      }
    }, y = () => {
      document.removeEventListener("click", b, !0), document.removeEventListener("contextmenu", b, !0), document.removeEventListener("wheel", W, !0);
    }, w = () => {
      document.addEventListener("click", b, !0), document.addEventListener("contextmenu", b, !0), document.addEventListener("wheel", W, !0);
    }, v = () => {
      c.value = !1, i("close"), fe();
    }, g = (r) => {
      for (; r; ) {
        if (r.classList && r.classList.contains(u.value))
          return !1;
        r = r.parentNode;
      }
      y(), v();
    }, W = () => {
      l.options.closeWhenScroll !== !1 && v();
    };
    function b(r) {
      g(r.target);
    }
    const k = () => {
      me({ closeMenu: v });
    };
    return B("globalOptions", l.options), B("globalNamespace", l.namespace || ""), B("globalCloseMenu", v), B("menuContext", d), k(), G(() => {
      w();
    }), de(() => {
      y();
    }), t({
      closeMenu: v
    }), (r, N) => {
      var C, m, M;
      return c.value ? (a(), h("div", {
        key: 0,
        class: $([e.namespace + "context-menu", u.value, e.options.customClass])
      }, [
        _(Me, {
          items: (C = e.options) == null ? void 0 : C.items,
          "max-width": (m = e.options) == null ? void 0 : m.maxWidth,
          "min-width": (M = e.options) == null ? void 0 : M.minWidth
        }, null, 8, ["items", "max-width", "min-width"])
      ], 2)) : L("", !0);
    };
  }
});
const Se = {
  prefix: "",
  alias: "",
  namespace: ""
};
let F = {};
const Pe = ({ options: e, namespace: t }, i, l) => {
  const c = re(
    Oe,
    {
      options: e,
      namespace: t,
      onClose: () => {
        X(null, i);
      }
    },
    l
  );
  return X(c, i), document.body.appendChild(i.firstElementChild), c.component;
}, $e = (e) => e.replace(/[_-]+[a-zA-z]/g, (t) => t.substr(-1).toUpperCase()), q = (e, t) => {
  const { namespace: i } = F, l = document.createElement("div");
  return Pe({ options: e, namespace: i ? i + "-" : "" }, l, t);
}, Ne = (e, t) => {
  F = { ...Se, ...t };
  const { prefix: i, alias: l } = F, c = l || $e([i || "", "context", "menu"].filter((u) => u && u.trim()).join("-"));
  e.provide(c, q), e.config.globalProperties["$" + c] = q;
}, Ee = {
  install: Ne
};
export {
  Ee as default
};
