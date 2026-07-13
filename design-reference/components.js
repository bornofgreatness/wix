const cs = () => Promise.resolve().then(() => ss), Bn = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: Ce, jsx: n, jsxs: b } = Bn;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Sr(e) {
  const t = e?.props?._fgT, a = typeof t == "function" || typeof t == "string" || typeof t == "object" && t !== null && "$$typeof" in t;
  return globalThis.__GLOBALS__.React.isValidElement(e) && a;
}
function bt(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function Tr(e) {
  const { _fgT: t, _fgS: a, _fgB: i, _fgD: o, ...l } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...l,
    key: e.key
  }, l.children);
}
function Mt(e) {
  return Sr(e) ? Tr(e) : bt(e) ? e.props.children : e;
}
const yt = globalThis.__GLOBALS__.React.Children, Br = {
  map(e, t, a) {
    return yt.map(e, (i, o) => {
      const l = Mt(i);
      return bt(i) ? null : t.call(a, l, o);
    });
  },
  forEach(e, t, a) {
    yt.forEach(e, (i, o) => {
      if (bt(i))
        return;
      const l = Mt(i);
      t.call(a, l, o);
    });
  },
  count(e) {
    let t = 0;
    return yt.forEach(e, (a) => {
      bt(a) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return yt.forEach(e, (a) => {
      bt(a) || t.push(Mt(a));
    }), t;
  },
  only(e) {
    const t = yt.only(e);
    return Mt(t);
  }
}, ra = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function wn(e) {
  if (e == null || typeof e != "object") return e;
  const t = Object.keys(e);
  let a = !1;
  for (let o = 0; o < ra.length; o++)
    if (ra[o] in e) {
      a = !0;
      break;
    }
  if (!a) return e;
  const i = {};
  for (let o = 0; o < t.length; o++) {
    const l = t[o];
    ra.indexOf(l) === -1 && (i[l] = e[l]);
  }
  return i;
}
const $a = globalThis.__GLOBALS__.React.cloneElement, wr = (e, ...t) => {
  if (Sr(e)) {
    const a = Tr(e), i = t[0];
    return i != null && typeof i == "object" && (t = [
      wn(i),
      ...t.slice(1)
    ]), $a(a, ...t);
  }
  return $a(e, ...t);
}, Vt = {
  ...globalThis.__GLOBALS__.React,
  Children: Br,
  cloneElement: wr
}, { Component: zr, createContext: Te, createElement: O, createFactory: zn, createRef: An, forwardRef: gt, Fragment: dt, isValidElement: In, lazy: kn, memo: Ar, Profiler: Rn, PureComponent: Cn, startTransition: wt, StrictMode: En, Suspense: Fn, use: Ln, useCallback: pt, useContext: N, useDebugValue: qn, useDeferredValue: Pn, useEffect: $e, useId: Dn, useImperativeHandle: On, useInsertionEffect: Hn, useLayoutEffect: ya, useMemo: ke, useReducer: Wn, useRef: kt, useState: _e, useSyncExternalStore: jn, useTransition: Mn, version: Nn, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $n } = globalThis.__GLOBALS__.React, Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Br,
  Component: zr,
  Fragment: dt,
  Profiler: Rn,
  PureComponent: Cn,
  StrictMode: En,
  Suspense: Fn,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $n,
  cloneElement: wr,
  createContext: Te,
  createElement: O,
  createFactory: zn,
  createRef: An,
  default: Vt,
  forwardRef: gt,
  isValidElement: In,
  lazy: kn,
  memo: Ar,
  startTransition: wt,
  use: Ln,
  useCallback: pt,
  useContext: N,
  useDebugValue: qn,
  useDeferredValue: Pn,
  useEffect: $e,
  useId: Dn,
  useImperativeHandle: On,
  useInsertionEffect: Hn,
  useLayoutEffect: ya,
  useMemo: ke,
  useReducer: Wn,
  useRef: kt,
  useState: _e,
  useSyncExternalStore: jn,
  useTransition: Mn,
  version: Nn
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Ir = (e) => {
  throw TypeError(e);
}, Vn = (e, t, a) => t.has(e) || Ir("Cannot " + a), na = (e, t, a) => (Vn(e, t, "read from private field"), a ? a.call(e) : t.get(e)), Gn = (e, t, a) => t.has(e) ? Ir("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), Ua = "popstate";
function Yn(e = {}) {
  function t(i, o) {
    let { pathname: l, search: s, hash: c } = i.location;
    return zt(
      "",
      { pathname: l, search: s, hash: c },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function a(i, o) {
    return typeof o == "string" ? o : Oe(o);
  }
  return Jn(
    t,
    a,
    null,
    e
  );
}
function j(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function le(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Kn() {
  return Math.random().toString(36).substring(2, 10);
}
function Va(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function zt(e, t, a = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? Ke(t) : t,
    state: a,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || i || Kn()
  };
}
function Oe({
  pathname: e = "/",
  search: t = "",
  hash: a = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), a && a !== "#" && (e += a.charAt(0) === "#" ? a : "#" + a), e;
}
function Ke(e) {
  let t = {};
  if (e) {
    let a = e.indexOf("#");
    a >= 0 && (t.hash = e.substring(a), e = e.substring(0, a));
    let i = e.indexOf("?");
    i >= 0 && (t.search = e.substring(i), e = e.substring(0, i)), e && (t.pathname = e);
  }
  return t;
}
function Jn(e, t, a, i = {}) {
  let { window: o = document.defaultView, v5Compat: l = !1 } = i, s = o.history, c = "POP", g = null, p = y();
  p == null && (p = 0, s.replaceState({ ...s.state, idx: p }, ""));
  function y() {
    return (s.state || { idx: null }).idx;
  }
  function h() {
    c = "POP";
    let I = y(), C = I == null ? null : I - p;
    p = I, g && g({ action: c, location: A.location, delta: C });
  }
  function v(I, C) {
    c = "PUSH";
    let w = zt(A.location, I, C);
    p = y() + 1;
    let P = Va(w, p), ae = A.createHref(w);
    try {
      s.pushState(P, "", ae);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError")
        throw K;
      o.location.assign(ae);
    }
    l && g && g({ action: c, location: A.location, delta: 1 });
  }
  function _(I, C) {
    c = "REPLACE";
    let w = zt(A.location, I, C);
    p = y();
    let P = Va(w, p), ae = A.createHref(w);
    s.replaceState(P, "", ae), l && g && g({ action: c, location: A.location, delta: 0 });
  }
  function B(I) {
    return kr(I);
  }
  let A = {
    get action() {
      return c;
    },
    get location() {
      return e(o, s);
    },
    listen(I) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(Ua, h), g = I, () => {
        o.removeEventListener(Ua, h), g = null;
      };
    },
    createHref(I) {
      return t(o, I);
    },
    createURL: B,
    encodeLocation(I) {
      let C = B(I);
      return {
        pathname: C.pathname,
        search: C.search,
        hash: C.hash
      };
    },
    push: v,
    replace: _,
    go(I) {
      return s.go(I);
    }
  };
  return A;
}
function kr(e, t = !1) {
  let a = "http://localhost";
  typeof window < "u" && (a = window.location.origin !== "null" ? window.location.origin : window.location.href), j(a, "No window.location.(origin|href) available to create URL");
  let i = typeof e == "string" ? e : Oe(e);
  return i = i.replace(/ $/, "%20"), !t && i.startsWith("//") && (i = a + i), new URL(i, a);
}
var St, Ga = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if (Gn(this, St, /* @__PURE__ */ new Map()), e)
      for (let [t, a] of e)
        this.set(t, a);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (na(this, St).has(e))
      return na(this, St).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, t) {
    na(this, St).set(e, t);
  }
};
St = /* @__PURE__ */ new WeakMap();
var Zn = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Xn(e) {
  return Zn.has(
    e
  );
}
var Qn = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function ei(e) {
  return Qn.has(
    e
  );
}
function ti(e) {
  return e.index === !0;
}
function At(e, t, a = [], i = {}, o = !1) {
  return e.map((l, s) => {
    let c = [...a, String(s)], g = typeof l.id == "string" ? l.id : c.join("-");
    if (j(
      l.index !== !0 || !l.children,
      "Cannot specify children on an index route"
    ), j(
      o || !i[g],
      `Found a route id collision on id "${g}".  Route id's must be globally unique within Data Router usages`
    ), ti(l)) {
      let p = {
        ...l,
        id: g
      };
      return i[g] = Ya(
        p,
        t(p)
      ), p;
    } else {
      let p = {
        ...l,
        id: g,
        children: void 0
      };
      return i[g] = Ya(
        p,
        t(p)
      ), l.children && (p.children = At(
        l.children,
        t,
        c,
        i,
        o
      )), p;
    }
  });
}
function Ya(e, t) {
  return Object.assign(e, {
    ...t,
    ...typeof t.lazy == "object" && t.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...t.lazy
      }
    } : {}
  });
}
function Ve(e, t, a = "/") {
  return Tt(e, t, a, !1);
}
function Tt(e, t, a, i) {
  let o = typeof t == "string" ? Ke(t) : t, l = Re(o.pathname || "/", a);
  if (l == null)
    return null;
  let s = Rr(e);
  ri(s);
  let c = null;
  for (let g = 0; c == null && g < s.length; ++g) {
    let p = ui(l);
    c = pi(
      s[g],
      p,
      i
    );
  }
  return c;
}
function ai(e, t) {
  let { route: a, pathname: i, params: o } = e;
  return {
    id: a.id,
    pathname: i,
    params: o,
    data: t[a.id],
    loaderData: t[a.id],
    handle: a.handle
  };
}
function Rr(e, t = [], a = [], i = "", o = !1) {
  let l = (s, c, g = o, p) => {
    let y = {
      relativePath: p === void 0 ? s.path || "" : p,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: c,
      route: s
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(i) && g)
        return;
      j(
        y.relativePath.startsWith(i),
        `Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), y.relativePath = y.relativePath.slice(i.length);
    }
    let h = De([i, y.relativePath]), v = a.concat(y);
    s.children && s.children.length > 0 && (j(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
    ), Rr(
      s.children,
      t,
      v,
      h,
      g
    )), !(s.path == null && !s.index) && t.push({
      path: h,
      score: di(h, s.index),
      routesMeta: v
    });
  };
  return e.forEach((s, c) => {
    if (s.path === "" || !s.path?.includes("?"))
      l(s, c);
    else
      for (let g of Cr(s.path))
        l(s, c, !0, g);
  }), t;
}
function Cr(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [a, ...i] = t, o = a.endsWith("?"), l = a.replace(/\?$/, "");
  if (i.length === 0)
    return o ? [l, ""] : [l];
  let s = Cr(i.join("/")), c = [];
  return c.push(
    ...s.map(
      (g) => g === "" ? l : [l, g].join("/")
    )
  ), o && c.push(...s), c.map(
    (g) => e.startsWith("/") && g === "" ? "/" : g
  );
}
function ri(e) {
  e.sort(
    (t, a) => t.score !== a.score ? a.score - t.score : gi(
      t.routesMeta.map((i) => i.childrenIndex),
      a.routesMeta.map((i) => i.childrenIndex)
    )
  );
}
var ni = /^:[\w-]+$/, ii = 3, oi = 2, li = 1, si = 10, ci = -2, Ka = (e) => e === "*";
function di(e, t) {
  let a = e.split("/"), i = a.length;
  return a.some(Ka) && (i += ci), t && (i += oi), a.filter((o) => !Ka(o)).reduce(
    (o, l) => o + (ni.test(l) ? ii : l === "" ? li : si),
    i
  );
}
function gi(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, o) => i === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function pi(e, t, a = !1) {
  let { routesMeta: i } = e, o = {}, l = "/", s = [];
  for (let c = 0; c < i.length; ++c) {
    let g = i[c], p = c === i.length - 1, y = l === "/" ? t : t.slice(l.length) || "/", h = Jt(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: p },
      y
    ), v = g.route;
    if (!h && p && a && !i[i.length - 1].route.index && (h = Jt(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      y
    )), !h)
      return null;
    Object.assign(o, h.params), s.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: De([l, h.pathname]),
      pathnameBase: yi(
        De([l, h.pathnameBase])
      ),
      route: v
    }), h.pathnameBase !== "/" && (l = De([l, h.pathnameBase]));
  }
  return s;
}
function Jt(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, i] = fi(
    e.path,
    e.caseSensitive,
    e.end
  ), o = t.match(a);
  if (!o) return null;
  let l = o[0], s = l.replace(/(.)\/+$/, "$1"), c = o.slice(1);
  return {
    params: i.reduce(
      (p, { paramName: y, isOptional: h }, v) => {
        if (y === "*") {
          let B = c[v] || "";
          s = l.slice(0, l.length - B.length).replace(/(.)\/+$/, "$1");
        }
        const _ = c[v];
        return h && !_ ? p[y] = void 0 : p[y] = (_ || "").replace(/%2F/g, "/"), p;
      },
      {}
    ),
    pathname: l,
    pathnameBase: s,
    pattern: e
  };
}
function fi(e, t = !1, a = !0) {
  le(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let i = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, c, g) => (i.push({ paramName: c, isOptional: g != null }), g ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (i.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), i];
}
function ui(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return le(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function Re(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let a = t.endsWith("/") ? t.length - 1 : t.length, i = e.charAt(a);
  return i && i !== "/" ? null : e.slice(a) || "/";
}
function hi({
  basename: e,
  pathname: t
}) {
  return t === "/" ? e : De([e, t]);
}
var Er = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, xa = (e) => Er.test(e);
function mi(e, t = "/") {
  let {
    pathname: a,
    search: i = "",
    hash: o = ""
  } = typeof e == "string" ? Ke(e) : e, l;
  return a ? (a = a.replace(/\/\/+/g, "/"), a.startsWith("/") ? l = Ja(a.substring(1), "/") : l = Ja(a, t)) : l = t, {
    pathname: l,
    search: xi(i),
    hash: _i(o)
  };
}
function Ja(e, t) {
  let a = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
  }), a.length > 1 ? a.join("/") : "/";
}
function ia(e, t, a, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Fr(e) {
  return e.filter(
    (t, a) => a === 0 || t.route.path && t.route.path.length > 0
  );
}
function _a(e) {
  let t = Fr(e);
  return t.map(
    (a, i) => i === t.length - 1 ? a.pathname : a.pathnameBase
  );
}
function va(e, t, a, i = !1) {
  let o;
  typeof e == "string" ? o = Ke(e) : (o = { ...e }, j(
    !o.pathname || !o.pathname.includes("?"),
    ia("?", "pathname", "search", o)
  ), j(
    !o.pathname || !o.pathname.includes("#"),
    ia("#", "pathname", "hash", o)
  ), j(
    !o.search || !o.search.includes("#"),
    ia("#", "search", "hash", o)
  ));
  let l = e === "" || o.pathname === "", s = l ? "/" : o.pathname, c;
  if (s == null)
    c = a;
  else {
    let h = t.length - 1;
    if (!i && s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; )
        v.shift(), h -= 1;
      o.pathname = v.join("/");
    }
    c = h >= 0 ? t[h] : "/";
  }
  let g = mi(o, c), p = s && s !== "/" && s.endsWith("/"), y = (l || s === ".") && a.endsWith("/");
  return !g.pathname.endsWith("/") && (p || y) && (g.pathname += "/"), g;
}
var De = (e) => e.join("/").replace(/\/\/+/g, "/"), yi = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), xi = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, _i = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Rt = class {
  constructor(e, t, a, i = !1) {
    this.status = e, this.statusText = t || "", this.internal = i, a instanceof Error ? (this.data = a.toString(), this.error = a) : this.data = a;
  }
};
function It(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Ct(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Lr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function qr(e, t) {
  let a = e;
  if (typeof a != "string" || !Er.test(a))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: a
    };
  let i = a, o = !1;
  if (Lr)
    try {
      let l = new URL(window.location.href), s = a.startsWith("//") ? new URL(l.protocol + a) : new URL(a), c = Re(s.pathname, t);
      s.origin === l.origin && c != null ? a = c + s.search + s.hash : o = !0;
    } catch {
      le(
        !1,
        `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: i,
    isExternal: o,
    to: a
  };
}
var Ye = Symbol("Uninstrumented");
function vi(e, t) {
  let a = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (o) => o({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(l) {
        let s = Object.keys(a);
        for (let c of s)
          l[c] && a[c].push(l[c]);
      }
    })
  );
  let i = {};
  if (typeof t.lazy == "function" && a.lazy.length > 0) {
    let o = st(a.lazy, t.lazy, () => {
    });
    o && (i.lazy = o);
  }
  if (typeof t.lazy == "object") {
    let o = t.lazy;
    ["middleware", "loader", "action"].forEach((l) => {
      let s = o[l], c = a[`lazy.${l}`];
      if (typeof s == "function" && c.length > 0) {
        let g = st(c, s, () => {
        });
        g && (i.lazy = Object.assign(i.lazy || {}, {
          [l]: g
        }));
      }
    });
  }
  return ["loader", "action"].forEach((o) => {
    let l = t[o];
    if (typeof l == "function" && a[o].length > 0) {
      let s = l[Ye] ?? l, c = st(
        a[o],
        s,
        (...g) => Za(g[0])
      );
      c && (o === "loader" && s.hydrate === !0 && (c.hydrate = !0), c[Ye] = s, i[o] = c);
    }
  }), t.middleware && t.middleware.length > 0 && a.middleware.length > 0 && (i.middleware = t.middleware.map((o) => {
    let l = o[Ye] ?? o, s = st(
      a.middleware,
      l,
      (...c) => Za(c[0])
    );
    return s ? (s[Ye] = l, s) : o;
  })), i;
}
function bi(e, t) {
  let a = {
    navigate: [],
    fetch: []
  };
  if (t.forEach(
    (i) => i({
      instrument(o) {
        let l = Object.keys(o);
        for (let s of l)
          o[s] && a[s].push(o[s]);
      }
    })
  ), a.navigate.length > 0) {
    let i = e.navigate[Ye] ?? e.navigate, o = st(
      a.navigate,
      i,
      (...l) => {
        let [s, c] = l;
        return {
          to: typeof s == "number" || typeof s == "string" ? s : s ? Oe(s) : ".",
          ...Xa(e, c ?? {})
        };
      }
    );
    o && (o[Ye] = i, e.navigate = o);
  }
  if (a.fetch.length > 0) {
    let i = e.fetch[Ye] ?? e.fetch, o = st(a.fetch, i, (...l) => {
      let [s, , c, g] = l;
      return {
        href: c ?? ".",
        fetcherKey: s,
        ...Xa(e, g ?? {})
      };
    });
    o && (o[Ye] = i, e.fetch = o);
  }
  return e;
}
function st(e, t, a) {
  return e.length === 0 ? null : async (...i) => {
    let o = await Pr(
      e,
      a(...i),
      () => t(...i),
      e.length - 1
    );
    if (o.type === "error")
      throw o.value;
    return o.value;
  };
}
async function Pr(e, t, a, i) {
  let o = e[i], l;
  if (o) {
    let s, c = async () => (s ? console.error("You cannot call instrumented handlers more than once") : s = Pr(e, t, a, i - 1), l = await s, j(l, "Expected a result"), l.type === "error" && l.value instanceof Error ? { status: "error", error: l.value } : { status: "success", error: void 0 });
    try {
      await o(c, t);
    } catch (g) {
      console.error("An instrumentation function threw an error:", g);
    }
    s || await c(), await s;
  } else
    try {
      l = { type: "success", value: await a() };
    } catch (s) {
      l = { type: "error", value: s };
    }
  return l || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function Za(e) {
  let { request: t, context: a, params: i, unstable_pattern: o } = e;
  return {
    request: Si(t),
    params: { ...i },
    unstable_pattern: o,
    context: Ti(a)
  };
}
function Xa(e, t) {
  return {
    currentUrl: Oe(e.state.location),
    ..."formMethod" in t ? { formMethod: t.formMethod } : {},
    ..."formEncType" in t ? { formEncType: t.formEncType } : {},
    ..."formData" in t ? { formData: t.formData } : {},
    ..."body" in t ? { body: t.body } : {}
  };
}
function Si(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...t) => e.headers.get(...t)
    }
  };
}
function Ti(e) {
  if (wi(e)) {
    let t = { ...e };
    return Object.freeze(t), t;
  } else
    return {
      get: (t) => e.get(t)
    };
}
var Bi = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function wi(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Bi;
}
var Dr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], zi = new Set(
  Dr
), Ai = [
  "GET",
  ...Dr
], Ii = new Set(Ai), Or = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), ki = /* @__PURE__ */ new Set([307, 308]), oa = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Ri = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, xt = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Ci = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), Hr = "remix-router-transitions", Wr = Symbol("ResetLoaderData");
function Ei(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, a = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  j(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i = e.hydrationRouteProperties || [], o = e.mapRouteProperties || Ci, l = o;
  if (e.unstable_instrumentations) {
    let d = e.unstable_instrumentations;
    l = (u) => ({
      ...o(u),
      ...vi(
        d.map((m) => m.route).filter(Boolean),
        u
      )
    });
  }
  let s = {}, c = At(
    e.routes,
    l,
    void 0,
    s
  ), g, p = e.basename || "/";
  p.startsWith("/") || (p = `/${p}`);
  let y = e.dataStrategy || Di, h = {
    ...e.future
  }, v = null, _ = /* @__PURE__ */ new Set(), B = null, A = null, I = null, C = e.hydrationData != null, w = Ve(c, e.history.location, p), P = !1, ae = null, K;
  if (w == null && !e.patchRoutesOnNavigation) {
    let d = Ie(404, {
      pathname: e.history.location.pathname
    }), { matches: u, route: m } = Nt(c);
    K = !0, w = u, ae = { [m.id]: d };
  } else if (w && !e.hydrationData && Dt(
    w,
    c,
    e.history.location.pathname
  ).active && (w = null), w)
    if (w.some((d) => d.route.lazy))
      K = !1;
    else if (!w.some((d) => ba(d.route)))
      K = !0;
    else {
      let d = e.hydrationData ? e.hydrationData.loaderData : null, u = e.hydrationData ? e.hydrationData.errors : null;
      if (u) {
        let m = w.findIndex(
          (S) => u[S.route.id] !== void 0
        );
        K = w.slice(0, m + 1).every(
          (S) => !pa(S.route, d, u)
        );
      } else
        K = w.every(
          (m) => !pa(m.route, d, u)
        );
    }
  else {
    K = !1, w = [];
    let d = Dt(
      null,
      c,
      e.history.location.pathname
    );
    d.active && d.matches && (P = !0, w = d.matches);
  }
  let ne, x = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: w,
    initialized: K,
    navigation: oa,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || ae,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, H = "POP", G = null, te = !1, ee, ce = !1, Fe = /* @__PURE__ */ new Map(), se = null, X = !1, re = !1, Be = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map(), de = 0, ye = -1, Le = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Set(), Ze = /* @__PURE__ */ new Map(), qt, ft = null;
  function on() {
    if (v = e.history.listen(
      ({ action: d, location: u, delta: m }) => {
        if (qt) {
          qt(), qt = void 0;
          return;
        }
        le(
          Ze.size === 0 || m != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let S = Ha({
          currentLocation: x.location,
          nextLocation: u,
          historyAction: d
        });
        if (S && m != null) {
          let T = new Promise((E) => {
            qt = E;
          });
          e.history.go(m * -1), Pt(S, {
            state: "blocked",
            location: u,
            proceed() {
              Pt(S, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: u
              }), T.then(() => e.history.go(m));
            },
            reset() {
              let E = new Map(x.blockers);
              E.set(S, xt), fe({ blockers: E });
            }
          }), G?.resolve(), G = null;
          return;
        }
        return Xe(d, u);
      }
    ), a) {
      to(t, Fe);
      let d = () => ao(t, Fe);
      t.addEventListener("pagehide", d), se = () => t.removeEventListener("pagehide", d);
    }
    return x.initialized || Xe("POP", x.location, {
      initialHydration: !0
    }), ne;
  }
  function ln() {
    v && v(), se && se(), _.clear(), ee && ee.abort(), x.fetchers.forEach((d, u) => ea(u)), x.blockers.forEach((d, u) => Oa(u));
  }
  function sn(d) {
    return _.add(d), () => _.delete(d);
  }
  function fe(d, u = {}) {
    d.matches && (d.matches = d.matches.map((T) => {
      let E = s[T.route.id], k = T.route;
      return k.element !== E.element || k.errorElement !== E.errorElement || k.hydrateFallbackElement !== E.hydrateFallbackElement ? {
        ...T,
        route: E
      } : T;
    })), x = {
      ...x,
      ...d
    };
    let m = [], S = [];
    x.fetchers.forEach((T, E) => {
      T.state === "idle" && (ve.has(E) ? m.push(E) : S.push(E));
    }), ve.forEach((T) => {
      !x.fetchers.has(T) && !J.has(T) && m.push(T);
    }), [..._].forEach(
      (T) => T(x, {
        deletedFetchers: m,
        newErrors: d.errors ?? null,
        viewTransitionOpts: u.viewTransitionOpts,
        flushSync: u.flushSync === !0
      })
    ), m.forEach((T) => ea(T)), S.forEach((T) => x.fetchers.delete(T));
  }
  function it(d, u, { flushSync: m } = {}) {
    let S = x.actionData != null && x.navigation.formMethod != null && he(x.navigation.formMethod) && x.navigation.state === "loading" && d.state?._isRedirect !== !0, T;
    u.actionData ? Object.keys(u.actionData).length > 0 ? T = u.actionData : T = null : S ? T = x.actionData : T = null;
    let E = u.loaderData ? sr(
      x.loaderData,
      u.loaderData,
      u.matches || [],
      u.errors
    ) : x.loaderData, k = x.blockers;
    k.size > 0 && (k = new Map(k), k.forEach((D, L) => k.set(L, xt)));
    let R = X ? !1 : ja(d, u.matches || x.matches), F = te === !0 || x.navigation.formMethod != null && he(x.navigation.formMethod) && d.state?._isRedirect !== !0;
    g && (c = g, g = void 0), X || H === "POP" || (H === "PUSH" ? e.history.push(d, d.state) : H === "REPLACE" && e.history.replace(d, d.state));
    let q;
    if (H === "POP") {
      let D = Fe.get(x.location.pathname);
      D && D.has(d.pathname) ? q = {
        currentLocation: x.location,
        nextLocation: d
      } : Fe.has(d.pathname) && (q = {
        currentLocation: d,
        nextLocation: x.location
      });
    } else if (ce) {
      let D = Fe.get(x.location.pathname);
      D ? D.add(d.pathname) : (D = /* @__PURE__ */ new Set([d.pathname]), Fe.set(x.location.pathname, D)), q = {
        currentLocation: x.location,
        nextLocation: d
      };
    }
    fe(
      {
        ...u,
        // matches, errors, fetchers go through as-is
        actionData: T,
        loaderData: E,
        historyAction: H,
        location: d,
        initialized: !0,
        navigation: oa,
        revalidation: "idle",
        restoreScrollPosition: R,
        preventScrollReset: F,
        blockers: k
      },
      {
        viewTransitionOpts: q,
        flushSync: m === !0
      }
    ), H = "POP", te = !1, ce = !1, X = !1, re = !1, G?.resolve(), G = null, ft?.resolve(), ft = null;
  }
  async function Ca(d, u) {
    if (G?.resolve(), G = null, typeof d == "number") {
      G || (G = pr());
      let U = G.promise;
      return e.history.go(d), U;
    }
    let m = ga(
      x.location,
      x.matches,
      p,
      d,
      u?.fromRouteId,
      u?.relative
    ), { path: S, submission: T, error: E } = Qa(
      !1,
      m,
      u
    ), k = x.location, R = zt(x.location, S, u && u.state);
    R = {
      ...R,
      ...e.history.encodeLocation(R)
    };
    let F = u && u.replace != null ? u.replace : void 0, q = "PUSH";
    F === !0 ? q = "REPLACE" : F === !1 || T != null && he(T.formMethod) && T.formAction === x.location.pathname + x.location.search && (q = "REPLACE");
    let D = u && "preventScrollReset" in u ? u.preventScrollReset === !0 : void 0, L = (u && u.flushSync) === !0, $ = Ha({
      currentLocation: k,
      nextLocation: R,
      historyAction: q
    });
    if ($) {
      Pt($, {
        state: "blocked",
        location: R,
        proceed() {
          Pt($, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: R
          }), Ca(d, u);
        },
        reset() {
          let U = new Map(x.blockers);
          U.set($, xt), fe({ blockers: U });
        }
      });
      return;
    }
    await Xe(q, R, {
      submission: T,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: E,
      preventScrollReset: D,
      replace: u && u.replace,
      enableViewTransition: u && u.viewTransition,
      flushSync: L,
      callSiteDefaultShouldRevalidate: u && u.unstable_defaultShouldRevalidate
    });
  }
  function cn() {
    ft || (ft = pr()), Qt(), fe({ revalidation: "loading" });
    let d = ft.promise;
    return x.navigation.state === "submitting" ? d : x.navigation.state === "idle" ? (Xe(x.historyAction, x.location, {
      startUninterruptedRevalidation: !0
    }), d) : (Xe(
      H || x.historyAction,
      x.navigation.location,
      {
        overrideNavigation: x.navigation,
        // Proxy through any rending view transition
        enableViewTransition: ce === !0
      }
    ), d);
  }
  async function Xe(d, u, m) {
    ee && ee.abort(), ee = null, H = d, X = (m && m.startUninterruptedRevalidation) === !0, vn(x.location, x.matches), te = (m && m.preventScrollReset) === !0, ce = (m && m.enableViewTransition) === !0;
    let S = g || c, T = m && m.overrideNavigation, E = m?.initialHydration && x.matches && x.matches.length > 0 && !P ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      x.matches
    ) : Ve(S, u, p), k = (m && m.flushSync) === !0;
    if (E && x.initialized && !re && Ui(x.location, u) && !(m && m.submission && he(m.submission.formMethod))) {
      it(u, { matches: E }, { flushSync: k });
      return;
    }
    let R = Dt(E, S, u.pathname);
    if (R.active && R.matches && (E = R.matches), !E) {
      let { error: ge, notFoundMatches: me, route: Z } = ta(
        u.pathname
      );
      it(
        u,
        {
          matches: me,
          loaderData: {},
          errors: {
            [Z.id]: ge
          }
        },
        { flushSync: k }
      );
      return;
    }
    ee = new AbortController();
    let F = lt(
      e.history,
      u,
      ee.signal,
      m && m.submission
    ), q = e.getContext ? await e.getContext() : new Ga(), D;
    if (m && m.pendingError)
      D = [
        Ge(E).route.id,
        { type: "error", error: m.pendingError }
      ];
    else if (m && m.submission && he(m.submission.formMethod)) {
      let ge = await dn(
        F,
        u,
        m.submission,
        E,
        q,
        R.active,
        m && m.initialHydration === !0,
        { replace: m.replace, flushSync: k }
      );
      if (ge.shortCircuited)
        return;
      if (ge.pendingActionResult) {
        let [me, Z] = ge.pendingActionResult;
        if (be(Z) && It(Z.error) && Z.error.status === 404) {
          ee = null, it(u, {
            matches: ge.matches,
            loaderData: {},
            errors: {
              [me]: Z.error
            }
          });
          return;
        }
      }
      E = ge.matches || E, D = ge.pendingActionResult, T = la(u, m.submission), k = !1, R.active = !1, F = lt(
        e.history,
        F.url,
        F.signal
      );
    }
    let {
      shortCircuited: L,
      matches: $,
      loaderData: U,
      errors: pe
    } = await gn(
      F,
      u,
      E,
      q,
      R.active,
      T,
      m && m.submission,
      m && m.fetcherSubmission,
      m && m.replace,
      m && m.initialHydration === !0,
      k,
      D,
      m && m.callSiteDefaultShouldRevalidate
    );
    L || (ee = null, it(u, {
      matches: $ || E,
      ...cr(D),
      loaderData: U,
      errors: pe
    }));
  }
  async function dn(d, u, m, S, T, E, k, R = {}) {
    Qt();
    let F = Qi(u, m);
    if (fe({ navigation: F }, { flushSync: R.flushSync === !0 }), E) {
      let L = await Ot(
        S,
        u.pathname,
        d.signal
      );
      if (L.type === "aborted")
        return { shortCircuited: !0 };
      if (L.type === "error") {
        if (L.partialMatches.length === 0) {
          let { matches: U, route: pe } = Nt(c);
          return {
            matches: U,
            pendingActionResult: [
              pe.id,
              {
                type: "error",
                error: L.error
              }
            ]
          };
        }
        let $ = Ge(L.partialMatches).route.id;
        return {
          matches: L.partialMatches,
          pendingActionResult: [
            $,
            {
              type: "error",
              error: L.error
            }
          ]
        };
      } else if (L.matches)
        S = L.matches;
      else {
        let { notFoundMatches: $, error: U, route: pe } = ta(
          u.pathname
        );
        return {
          matches: $,
          pendingActionResult: [
            pe.id,
            {
              type: "error",
              error: U
            }
          ]
        };
      }
    }
    let q, D = Gt(S, u);
    if (!D.route.action && !D.route.lazy)
      q = {
        type: "error",
        error: Ie(405, {
          method: d.method,
          pathname: u.pathname,
          routeId: D.route.id
        })
      };
    else {
      let L = ct(
        l,
        s,
        d,
        S,
        D,
        k ? [] : i,
        T
      ), $ = await ut(
        d,
        L,
        T,
        null
      );
      if (q = $[D.route.id], !q) {
        for (let U of S)
          if ($[U.route.id]) {
            q = $[U.route.id];
            break;
          }
      }
      if (d.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (rt(q)) {
      let L;
      return R && R.replace != null ? L = R.replace : L = ir(
        q.response.headers.get("Location"),
        new URL(d.url),
        p,
        e.history
      ) === x.location.pathname + x.location.search, await Qe(d, q, !0, {
        submission: m,
        replace: L
      }), { shortCircuited: !0 };
    }
    if (be(q)) {
      let L = Ge(S, D.route.id);
      return (R && R.replace) !== !0 && (H = "PUSH"), {
        matches: S,
        pendingActionResult: [
          L.route.id,
          q,
          D.route.id
        ]
      };
    }
    return {
      matches: S,
      pendingActionResult: [D.route.id, q]
    };
  }
  async function gn(d, u, m, S, T, E, k, R, F, q, D, L, $) {
    let U = E || la(u, k), pe = k || R || gr(U), ge = !X && !q;
    if (T) {
      if (ge) {
        let ue = Ea(L);
        fe(
          {
            navigation: U,
            ...ue !== void 0 ? { actionData: ue } : {}
          },
          {
            flushSync: D
          }
        );
      }
      let M = await Ot(
        m,
        u.pathname,
        d.signal
      );
      if (M.type === "aborted")
        return { shortCircuited: !0 };
      if (M.type === "error") {
        if (M.partialMatches.length === 0) {
          let { matches: ot, route: at } = Nt(c);
          return {
            matches: ot,
            loaderData: {},
            errors: {
              [at.id]: M.error
            }
          };
        }
        let ue = Ge(M.partialMatches).route.id;
        return {
          matches: M.partialMatches,
          loaderData: {},
          errors: {
            [ue]: M.error
          }
        };
      } else if (M.matches)
        m = M.matches;
      else {
        let { error: ue, notFoundMatches: ot, route: at } = ta(
          u.pathname
        );
        return {
          matches: ot,
          loaderData: {},
          errors: {
            [at.id]: ue
          }
        };
      }
    }
    let me = g || c, { dsMatches: Z, revalidatingFetchers: Ae } = er(
      d,
      S,
      l,
      s,
      e.history,
      x,
      m,
      pe,
      u,
      q ? [] : i,
      q === !0,
      re,
      Be,
      ve,
      we,
      xe,
      me,
      p,
      e.patchRoutesOnNavigation != null,
      L,
      $
    );
    if (ye = ++de, !e.dataStrategy && !Z.some((M) => M.shouldLoad) && !Z.some(
      (M) => M.route.middleware && M.route.middleware.length > 0
    ) && Ae.length === 0) {
      let M = Pa();
      return it(
        u,
        {
          matches: m,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: L && be(L[1]) ? { [L[0]]: L[1].error } : null,
          ...cr(L),
          ...M ? { fetchers: new Map(x.fetchers) } : {}
        },
        { flushSync: D }
      ), { shortCircuited: !0 };
    }
    if (ge) {
      let M = {};
      if (!T) {
        M.navigation = U;
        let ue = Ea(L);
        ue !== void 0 && (M.actionData = ue);
      }
      Ae.length > 0 && (M.fetchers = pn(Ae)), fe(M, { flushSync: D });
    }
    Ae.forEach((M) => {
      Me(M.key), M.controller && J.set(M.key, M.controller);
    });
    let et = () => Ae.forEach((M) => Me(M.key));
    ee && ee.signal.addEventListener(
      "abort",
      et
    );
    let { loaderResults: ht, fetcherResults: Ue } = await Fa(
      Z,
      Ae,
      d,
      S
    );
    if (d.signal.aborted)
      return { shortCircuited: !0 };
    ee && ee.signal.removeEventListener(
      "abort",
      et
    ), Ae.forEach((M) => J.delete(M.key));
    let Pe = $t(ht);
    if (Pe)
      return await Qe(d, Pe.result, !0, {
        replace: F
      }), { shortCircuited: !0 };
    if (Pe = $t(Ue), Pe)
      return xe.add(Pe.key), await Qe(d, Pe.result, !0, {
        replace: F
      }), { shortCircuited: !0 };
    let { loaderData: aa, errors: mt } = lr(
      x,
      m,
      ht,
      L,
      Ae,
      Ue
    );
    q && x.errors && (mt = { ...x.errors, ...mt });
    let tt = Pa(), Ht = Da(ye), Wt = tt || Ht || Ae.length > 0;
    return {
      matches: m,
      loaderData: aa,
      errors: mt,
      ...Wt ? { fetchers: new Map(x.fetchers) } : {}
    };
  }
  function Ea(d) {
    if (d && !be(d[1]))
      return {
        [d[0]]: d[1].data
      };
    if (x.actionData)
      return Object.keys(x.actionData).length === 0 ? null : x.actionData;
  }
  function pn(d) {
    return d.forEach((u) => {
      let m = x.fetchers.get(u.key), S = _t(
        void 0,
        m ? m.data : void 0
      );
      x.fetchers.set(u.key, S);
    }), new Map(x.fetchers);
  }
  async function fn(d, u, m, S) {
    Me(d);
    let T = (S && S.flushSync) === !0, E = g || c, k = ga(
      x.location,
      x.matches,
      p,
      m,
      u,
      S?.relative
    ), R = Ve(E, k, p), F = Dt(R, E, k);
    if (F.active && F.matches && (R = F.matches), !R) {
      je(
        d,
        u,
        Ie(404, { pathname: k }),
        { flushSync: T }
      );
      return;
    }
    let { path: q, submission: D, error: L } = Qa(
      !0,
      k,
      S
    );
    if (L) {
      je(d, u, L, { flushSync: T });
      return;
    }
    let $ = e.getContext ? await e.getContext() : new Ga(), U = (S && S.preventScrollReset) === !0;
    if (D && he(D.formMethod)) {
      await un(
        d,
        u,
        q,
        R,
        $,
        F.active,
        T,
        U,
        D,
        S && S.unstable_defaultShouldRevalidate
      );
      return;
    }
    we.set(d, { routeId: u, path: q }), await hn(
      d,
      u,
      q,
      R,
      $,
      F.active,
      T,
      U,
      D
    );
  }
  async function un(d, u, m, S, T, E, k, R, F, q) {
    Qt(), we.delete(d);
    let D = x.fetchers.get(d);
    We(d, eo(F, D), {
      flushSync: k
    });
    let L = new AbortController(), $ = lt(
      e.history,
      m,
      L.signal,
      F
    );
    if (E) {
      let ie = await Ot(
        S,
        new URL($.url).pathname,
        $.signal,
        d
      );
      if (ie.type === "aborted")
        return;
      if (ie.type === "error") {
        je(d, u, ie.error, { flushSync: k });
        return;
      } else if (ie.matches)
        S = ie.matches;
      else {
        je(
          d,
          u,
          Ie(404, { pathname: m }),
          { flushSync: k }
        );
        return;
      }
    }
    let U = Gt(S, m);
    if (!U.route.action && !U.route.lazy) {
      let ie = Ie(405, {
        method: F.formMethod,
        pathname: m,
        routeId: u
      });
      je(d, u, ie, { flushSync: k });
      return;
    }
    J.set(d, L);
    let pe = de, ge = ct(
      l,
      s,
      $,
      S,
      U,
      i,
      T
    ), me = await ut(
      $,
      ge,
      T,
      d
    ), Z = me[U.route.id];
    if (!Z) {
      for (let ie of ge)
        if (me[ie.route.id]) {
          Z = me[ie.route.id];
          break;
        }
    }
    if ($.signal.aborted) {
      J.get(d) === L && J.delete(d);
      return;
    }
    if (ve.has(d)) {
      if (rt(Z) || be(Z)) {
        We(d, Ne(void 0));
        return;
      }
    } else {
      if (rt(Z))
        if (J.delete(d), ye > pe) {
          We(d, Ne(void 0));
          return;
        } else
          return xe.add(d), We(d, _t(F)), Qe($, Z, !1, {
            fetcherSubmission: F,
            preventScrollReset: R
          });
      if (be(Z)) {
        je(d, u, Z.error);
        return;
      }
    }
    let Ae = x.navigation.location || x.location, et = lt(
      e.history,
      Ae,
      L.signal
    ), ht = g || c, Ue = x.navigation.state !== "idle" ? Ve(ht, x.navigation.location, p) : x.matches;
    j(Ue, "Didn't find any matches after fetcher action");
    let Pe = ++de;
    Le.set(d, Pe);
    let aa = _t(F, Z.data);
    x.fetchers.set(d, aa);
    let { dsMatches: mt, revalidatingFetchers: tt } = er(
      et,
      T,
      l,
      s,
      e.history,
      x,
      Ue,
      F,
      Ae,
      i,
      !1,
      re,
      Be,
      ve,
      we,
      xe,
      ht,
      p,
      e.patchRoutesOnNavigation != null,
      [U.route.id, Z],
      q
    );
    tt.filter((ie) => ie.key !== d).forEach((ie) => {
      let jt = ie.key, Na = x.fetchers.get(jt), Tn = _t(
        void 0,
        Na ? Na.data : void 0
      );
      x.fetchers.set(jt, Tn), Me(jt), ie.controller && J.set(jt, ie.controller);
    }), fe({ fetchers: new Map(x.fetchers) });
    let Ht = () => tt.forEach((ie) => Me(ie.key));
    L.signal.addEventListener(
      "abort",
      Ht
    );
    let { loaderResults: Wt, fetcherResults: M } = await Fa(
      mt,
      tt,
      et,
      T
    );
    if (L.signal.aborted)
      return;
    if (L.signal.removeEventListener(
      "abort",
      Ht
    ), Le.delete(d), J.delete(d), tt.forEach((ie) => J.delete(ie.key)), x.fetchers.has(d)) {
      let ie = Ne(Z.data);
      x.fetchers.set(d, ie);
    }
    let ue = $t(Wt);
    if (ue)
      return Qe(
        et,
        ue.result,
        !1,
        { preventScrollReset: R }
      );
    if (ue = $t(M), ue)
      return xe.add(ue.key), Qe(
        et,
        ue.result,
        !1,
        { preventScrollReset: R }
      );
    let { loaderData: ot, errors: at } = lr(
      x,
      Ue,
      Wt,
      void 0,
      tt,
      M
    );
    Da(Pe), x.navigation.state === "loading" && Pe > ye ? (j(H, "Expected pending action"), ee && ee.abort(), it(x.navigation.location, {
      matches: Ue,
      loaderData: ot,
      errors: at,
      fetchers: new Map(x.fetchers)
    })) : (fe({
      errors: at,
      loaderData: sr(
        x.loaderData,
        ot,
        Ue,
        at
      ),
      fetchers: new Map(x.fetchers)
    }), re = !1);
  }
  async function hn(d, u, m, S, T, E, k, R, F) {
    let q = x.fetchers.get(d);
    We(
      d,
      _t(
        F,
        q ? q.data : void 0
      ),
      { flushSync: k }
    );
    let D = new AbortController(), L = lt(
      e.history,
      m,
      D.signal
    );
    if (E) {
      let Z = await Ot(
        S,
        new URL(L.url).pathname,
        L.signal,
        d
      );
      if (Z.type === "aborted")
        return;
      if (Z.type === "error") {
        je(d, u, Z.error, { flushSync: k });
        return;
      } else if (Z.matches)
        S = Z.matches;
      else {
        je(
          d,
          u,
          Ie(404, { pathname: m }),
          { flushSync: k }
        );
        return;
      }
    }
    let $ = Gt(S, m);
    J.set(d, D);
    let U = de, pe = ct(
      l,
      s,
      L,
      S,
      $,
      i,
      T
    ), me = (await ut(
      L,
      pe,
      T,
      d
    ))[$.route.id];
    if (J.get(d) === D && J.delete(d), !L.signal.aborted) {
      if (ve.has(d)) {
        We(d, Ne(void 0));
        return;
      }
      if (rt(me))
        if (ye > U) {
          We(d, Ne(void 0));
          return;
        } else {
          xe.add(d), await Qe(L, me, !1, {
            preventScrollReset: R
          });
          return;
        }
      if (be(me)) {
        je(d, u, me.error);
        return;
      }
      We(d, Ne(me.data));
    }
  }
  async function Qe(d, u, m, {
    submission: S,
    fetcherSubmission: T,
    preventScrollReset: E,
    replace: k
  } = {}) {
    m || (G?.resolve(), G = null), u.response.headers.has("X-Remix-Revalidate") && (re = !0);
    let R = u.response.headers.get("Location");
    j(R, "Expected a Location header on the redirect Response"), R = ir(
      R,
      new URL(d.url),
      p,
      e.history
    );
    let F = zt(x.location, R, {
      _isRedirect: !0
    });
    if (a) {
      let pe = !1;
      if (u.response.headers.has("X-Remix-Reload-Document"))
        pe = !0;
      else if (xa(R)) {
        const ge = kr(R, !0);
        pe = // Hard reload if it's an absolute URL to a new origin
        ge.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        Re(ge.pathname, p) == null;
      }
      if (pe) {
        k ? t.location.replace(R) : t.location.assign(R);
        return;
      }
    }
    ee = null;
    let q = k === !0 || u.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: D, formAction: L, formEncType: $ } = x.navigation;
    !S && !T && D && L && $ && (S = gr(x.navigation));
    let U = S || T;
    if (ki.has(u.response.status) && U && he(U.formMethod))
      await Xe(q, F, {
        submission: {
          ...U,
          formAction: R
        },
        // Preserve these flags across redirects
        preventScrollReset: E || te,
        enableViewTransition: m ? ce : void 0
      });
    else {
      let pe = la(
        F,
        S
      );
      await Xe(q, F, {
        overrideNavigation: pe,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: T,
        // Preserve these flags across redirects
        preventScrollReset: E || te,
        enableViewTransition: m ? ce : void 0
      });
    }
  }
  async function ut(d, u, m, S) {
    let T, E = {};
    try {
      T = await Hi(
        y,
        d,
        u,
        S,
        m,
        !1
      );
    } catch (k) {
      return u.filter((R) => R.shouldLoad).forEach((R) => {
        E[R.route.id] = {
          type: "error",
          error: k
        };
      }), E;
    }
    if (d.signal.aborted)
      return E;
    if (!he(d.method))
      for (let k of u) {
        if (T[k.route.id]?.type === "error")
          break;
        !T.hasOwnProperty(k.route.id) && !x.loaderData.hasOwnProperty(k.route.id) && (!x.errors || !x.errors.hasOwnProperty(k.route.id)) && k.shouldCallHandler() && (T[k.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${k.route.id}`
          )
        });
      }
    for (let [k, R] of Object.entries(T))
      if (Ki(R)) {
        let F = R.result;
        E[k] = {
          type: "redirect",
          response: Ni(
            F,
            d,
            k,
            u,
            p
          )
        };
      } else
        E[k] = await Mi(R);
    return E;
  }
  async function Fa(d, u, m, S) {
    let T = ut(
      m,
      d,
      S,
      null
    ), E = Promise.all(
      u.map(async (F) => {
        if (F.matches && F.match && F.request && F.controller) {
          let D = (await ut(
            F.request,
            F.matches,
            S,
            F.key
          ))[F.match.route.id];
          return { [F.key]: D };
        } else
          return Promise.resolve({
            [F.key]: {
              type: "error",
              error: Ie(404, {
                pathname: F.path
              })
            }
          });
      })
    ), k = await T, R = (await E).reduce(
      (F, q) => Object.assign(F, q),
      {}
    );
    return {
      loaderResults: k,
      fetcherResults: R
    };
  }
  function Qt() {
    re = !0, we.forEach((d, u) => {
      J.has(u) && Be.add(u), Me(u);
    });
  }
  function We(d, u, m = {}) {
    x.fetchers.set(d, u), fe(
      { fetchers: new Map(x.fetchers) },
      { flushSync: (m && m.flushSync) === !0 }
    );
  }
  function je(d, u, m, S = {}) {
    let T = Ge(x.matches, u);
    ea(d), fe(
      {
        errors: {
          [T.route.id]: m
        },
        fetchers: new Map(x.fetchers)
      },
      { flushSync: (S && S.flushSync) === !0 }
    );
  }
  function La(d) {
    return ze.set(d, (ze.get(d) || 0) + 1), ve.has(d) && ve.delete(d), x.fetchers.get(d) || Ri;
  }
  function mn(d, u) {
    Me(d, u?.reason), We(d, Ne(null));
  }
  function ea(d) {
    let u = x.fetchers.get(d);
    J.has(d) && !(u && u.state === "loading" && Le.has(d)) && Me(d), we.delete(d), Le.delete(d), xe.delete(d), ve.delete(d), Be.delete(d), x.fetchers.delete(d);
  }
  function yn(d) {
    let u = (ze.get(d) || 0) - 1;
    u <= 0 ? (ze.delete(d), ve.add(d)) : ze.set(d, u), fe({ fetchers: new Map(x.fetchers) });
  }
  function Me(d, u) {
    let m = J.get(d);
    m && (m.abort(u), J.delete(d));
  }
  function qa(d) {
    for (let u of d) {
      let m = La(u), S = Ne(m.data);
      x.fetchers.set(u, S);
    }
  }
  function Pa() {
    let d = [], u = !1;
    for (let m of xe) {
      let S = x.fetchers.get(m);
      j(S, `Expected fetcher: ${m}`), S.state === "loading" && (xe.delete(m), d.push(m), u = !0);
    }
    return qa(d), u;
  }
  function Da(d) {
    let u = [];
    for (let [m, S] of Le)
      if (S < d) {
        let T = x.fetchers.get(m);
        j(T, `Expected fetcher: ${m}`), T.state === "loading" && (Me(m), Le.delete(m), u.push(m));
      }
    return qa(u), u.length > 0;
  }
  function xn(d, u) {
    let m = x.blockers.get(d) || xt;
    return Ze.get(d) !== u && Ze.set(d, u), m;
  }
  function Oa(d) {
    x.blockers.delete(d), Ze.delete(d);
  }
  function Pt(d, u) {
    let m = x.blockers.get(d) || xt;
    j(
      m.state === "unblocked" && u.state === "blocked" || m.state === "blocked" && u.state === "blocked" || m.state === "blocked" && u.state === "proceeding" || m.state === "blocked" && u.state === "unblocked" || m.state === "proceeding" && u.state === "unblocked",
      `Invalid blocker state transition: ${m.state} -> ${u.state}`
    );
    let S = new Map(x.blockers);
    S.set(d, u), fe({ blockers: S });
  }
  function Ha({
    currentLocation: d,
    nextLocation: u,
    historyAction: m
  }) {
    if (Ze.size === 0)
      return;
    Ze.size > 1 && le(!1, "A router only supports one blocker at a time");
    let S = Array.from(Ze.entries()), [T, E] = S[S.length - 1], k = x.blockers.get(T);
    if (!(k && k.state === "proceeding") && E({ currentLocation: d, nextLocation: u, historyAction: m }))
      return T;
  }
  function ta(d) {
    let u = Ie(404, { pathname: d }), m = g || c, { matches: S, route: T } = Nt(m);
    return { notFoundMatches: S, route: T, error: u };
  }
  function _n(d, u, m) {
    if (B = d, I = u, A = m || null, !C && x.navigation === oa) {
      C = !0;
      let S = ja(x.location, x.matches);
      S != null && fe({ restoreScrollPosition: S });
    }
    return () => {
      B = null, I = null, A = null;
    };
  }
  function Wa(d, u) {
    return A && A(
      d,
      u.map((S) => ai(S, x.loaderData))
    ) || d.key;
  }
  function vn(d, u) {
    if (B && I) {
      let m = Wa(d, u);
      B[m] = I();
    }
  }
  function ja(d, u) {
    if (B) {
      let m = Wa(d, u), S = B[m];
      if (typeof S == "number")
        return S;
    }
    return null;
  }
  function Dt(d, u, m) {
    if (e.patchRoutesOnNavigation)
      if (d) {
        if (Object.keys(d[0].params).length > 0)
          return { active: !0, matches: Tt(
            u,
            m,
            p,
            !0
          ) };
      } else
        return { active: !0, matches: Tt(
          u,
          m,
          p,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function Ot(d, u, m, S) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: d };
    let T = d;
    for (; ; ) {
      let E = g == null, k = g || c, R = s;
      try {
        await e.patchRoutesOnNavigation({
          signal: m,
          path: u,
          matches: T,
          fetcherKey: S,
          patch: (D, L) => {
            m.aborted || tr(
              D,
              L,
              k,
              R,
              l,
              !1
            );
          }
        });
      } catch (D) {
        return { type: "error", error: D, partialMatches: T };
      } finally {
        E && !m.aborted && (c = [...c]);
      }
      if (m.aborted)
        return { type: "aborted" };
      let F = Ve(k, u, p), q = null;
      if (F) {
        if (Object.keys(F[0].params).length === 0)
          return { type: "success", matches: F };
        if (q = Tt(
          k,
          u,
          p,
          !0
        ), !(q && T.length < q.length && Ma(
          T,
          q.slice(0, T.length)
        )))
          return { type: "success", matches: F };
      }
      if (q || (q = Tt(
        k,
        u,
        p,
        !0
      )), !q || Ma(T, q))
        return { type: "success", matches: null };
      T = q;
    }
  }
  function Ma(d, u) {
    return d.length === u.length && d.every((m, S) => m.route.id === u[S].route.id);
  }
  function bn(d) {
    s = {}, g = At(
      d,
      l,
      void 0,
      s
    );
  }
  function Sn(d, u, m = !1) {
    let S = g == null;
    tr(
      d,
      u,
      g || c,
      s,
      l,
      m
    ), S && (c = [...c], fe({}));
  }
  return ne = {
    get basename() {
      return p;
    },
    get future() {
      return h;
    },
    get state() {
      return x;
    },
    get routes() {
      return c;
    },
    get window() {
      return t;
    },
    initialize: on,
    subscribe: sn,
    enableScrollRestoration: _n,
    navigate: Ca,
    fetch: fn,
    revalidate: cn,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (d) => e.history.createHref(d),
    encodeLocation: (d) => e.history.encodeLocation(d),
    getFetcher: La,
    resetFetcher: mn,
    deleteFetcher: yn,
    dispose: ln,
    getBlocker: xn,
    deleteBlocker: Oa,
    patchRoutes: Sn,
    _internalFetchControllers: J,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: bn,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(d) {
      fe(d);
    }
  }, e.unstable_instrumentations && (ne = bi(
    ne,
    e.unstable_instrumentations.map((d) => d.router).filter(Boolean)
  )), ne;
}
function Fi(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function ga(e, t, a, i, o, l) {
  let s, c;
  if (o) {
    s = [];
    for (let p of t)
      if (s.push(p), p.route.id === o) {
        c = p;
        break;
      }
  } else
    s = t, c = t[t.length - 1];
  let g = va(
    i || ".",
    _a(s),
    Re(e.pathname, a) || e.pathname,
    l === "path"
  );
  if (i == null && (g.search = e.search, g.hash = e.hash), (i == null || i === "" || i === ".") && c) {
    let p = Ta(g.search);
    if (c.route.index && !p)
      g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index";
    else if (!c.route.index && p) {
      let y = new URLSearchParams(g.search), h = y.getAll("index");
      y.delete("index"), h.filter((_) => _).forEach((_) => y.append("index", _));
      let v = y.toString();
      g.search = v ? `?${v}` : "";
    }
  }
  return a !== "/" && (g.pathname = hi({ basename: a, pathname: g.pathname })), Oe(g);
}
function Qa(e, t, a) {
  if (!a || !Fi(a))
    return { path: t };
  if (a.formMethod && !Xi(a.formMethod))
    return {
      path: t,
      error: Ie(405, { method: a.formMethod })
    };
  let i = () => ({
    path: t,
    error: Ie(400, { type: "invalid-body" })
  }), l = (a.formMethod || "get").toUpperCase(), s = Vr(t);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!he(l))
        return i();
      let h = typeof a.body == "string" ? a.body : a.body instanceof FormData || a.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(a.body.entries()).reduce(
          (v, [_, B]) => `${v}${_}=${B}
`,
          ""
        )
      ) : String(a.body);
      return {
        path: t,
        submission: {
          formMethod: l,
          formAction: s,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: h
        }
      };
    } else if (a.formEncType === "application/json") {
      if (!he(l))
        return i();
      try {
        let h = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: t,
          submission: {
            formMethod: l,
            formAction: s,
            formEncType: a.formEncType,
            formData: void 0,
            json: h,
            text: void 0
          }
        };
      } catch {
        return i();
      }
    }
  }
  j(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let c, g;
  if (a.formData)
    c = ua(a.formData), g = a.formData;
  else if (a.body instanceof FormData)
    c = ua(a.body), g = a.body;
  else if (a.body instanceof URLSearchParams)
    c = a.body, g = or(c);
  else if (a.body == null)
    c = new URLSearchParams(), g = new FormData();
  else
    try {
      c = new URLSearchParams(a.body), g = or(c);
    } catch {
      return i();
    }
  let p = {
    formMethod: l,
    formAction: s,
    formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
    formData: g,
    json: void 0,
    text: void 0
  };
  if (he(p.formMethod))
    return { path: t, submission: p };
  let y = Ke(t);
  return e && y.search && Ta(y.search) && c.append("index", ""), y.search = `?${c}`, { path: Oe(y), submission: p };
}
function er(e, t, a, i, o, l, s, c, g, p, y, h, v, _, B, A, I, C, w, P, ae) {
  let K = P ? be(P[1]) ? P[1].error : P[1].data : void 0, ne = o.createURL(l.location), x = o.createURL(g), H;
  if (y && l.errors) {
    let X = Object.keys(l.errors)[0];
    H = s.findIndex((re) => re.route.id === X);
  } else if (P && be(P[1])) {
    let X = P[0];
    H = s.findIndex((re) => re.route.id === X) - 1;
  }
  let G = P ? P[1].statusCode : void 0, te = G && G >= 400, ee = {
    currentUrl: ne,
    currentParams: l.matches[0]?.params || {},
    nextUrl: x,
    nextParams: s[0].params,
    ...c,
    actionResult: K,
    actionStatus: G
  }, ce = Ct(s), Fe = s.map((X, re) => {
    let { route: Be } = X, J = null;
    if (H != null && re > H ? J = !1 : Be.lazy ? J = !0 : ba(Be) ? y ? J = pa(
      Be,
      l.loaderData,
      l.errors
    ) : Li(l.loaderData, l.matches[re], X) && (J = !0) : J = !1, J !== null)
      return fa(
        a,
        i,
        e,
        ce,
        X,
        p,
        t,
        J
      );
    let de = !1;
    typeof ae == "boolean" ? de = ae : te ? de = !1 : (h || ne.pathname + ne.search === x.pathname + x.search || ne.search !== x.search || qi(l.matches[re], X)) && (de = !0);
    let ye = {
      ...ee,
      defaultShouldRevalidate: de
    }, Le = Bt(X, ye);
    return fa(
      a,
      i,
      e,
      ce,
      X,
      p,
      t,
      Le,
      ye,
      ae
    );
  }), se = [];
  return B.forEach((X, re) => {
    if (y || !s.some((ze) => ze.route.id === X.routeId) || _.has(re))
      return;
    let Be = l.fetchers.get(re), J = Be && Be.state !== "idle" && Be.data === void 0, de = Ve(I, X.path, C);
    if (!de) {
      if (w && J)
        return;
      se.push({
        key: re,
        routeId: X.routeId,
        path: X.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (A.has(re))
      return;
    let ye = Gt(de, X.path), Le = new AbortController(), xe = lt(
      o,
      X.path,
      Le.signal
    ), we = null;
    if (v.has(re))
      v.delete(re), we = ct(
        a,
        i,
        xe,
        de,
        ye,
        p,
        t
      );
    else if (J)
      h && (we = ct(
        a,
        i,
        xe,
        de,
        ye,
        p,
        t
      ));
    else {
      let ze;
      typeof ae == "boolean" ? ze = ae : te ? ze = !1 : ze = h;
      let ve = {
        ...ee,
        defaultShouldRevalidate: ze
      };
      Bt(ye, ve) && (we = ct(
        a,
        i,
        xe,
        de,
        ye,
        p,
        t,
        ve
      ));
    }
    we && se.push({
      key: re,
      routeId: X.routeId,
      path: X.path,
      matches: we,
      match: ye,
      request: xe,
      controller: Le
    });
  }), { dsMatches: Fe, revalidatingFetchers: se };
}
function ba(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function pa(e, t, a) {
  if (e.lazy)
    return !0;
  if (!ba(e))
    return !1;
  let i = t != null && e.id in t, o = a != null && a[e.id] !== void 0;
  return !i && o ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !i && !o;
}
function Li(e, t, a) {
  let i = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    a.route.id !== t.route.id
  ), o = !e.hasOwnProperty(a.route.id);
  return i || o;
}
function qi(e, t) {
  let a = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    a != null && a.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function Bt(e, t) {
  if (e.route.shouldRevalidate) {
    let a = e.route.shouldRevalidate(t);
    if (typeof a == "boolean")
      return a;
  }
  return t.defaultShouldRevalidate;
}
function tr(e, t, a, i, o, l) {
  let s;
  if (e) {
    let p = i[e];
    j(
      p,
      `No route found to patch children into: routeId = ${e}`
    ), p.children || (p.children = []), s = p.children;
  } else
    s = a;
  let c = [], g = [];
  if (t.forEach((p) => {
    let y = s.find(
      (h) => jr(p, h)
    );
    y ? g.push({ existingRoute: y, newRoute: p }) : c.push(p);
  }), c.length > 0) {
    let p = At(
      c,
      o,
      [e || "_", "patch", String(s?.length || "0")],
      i
    );
    s.push(...p);
  }
  if (l && g.length > 0)
    for (let p = 0; p < g.length; p++) {
      let { existingRoute: y, newRoute: h } = g[p], v = y, [_] = At(
        [h],
        o,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(v, {
        element: _.element ? _.element : v.element,
        errorElement: _.errorElement ? _.errorElement : v.errorElement,
        hydrateFallbackElement: _.hydrateFallbackElement ? _.hydrateFallbackElement : v.hydrateFallbackElement
      });
    }
}
function jr(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (a, i) => t.children?.some((o) => jr(a, o))
  ) : !1;
}
var ar = /* @__PURE__ */ new WeakMap(), Mr = ({
  key: e,
  route: t,
  manifest: a,
  mapRouteProperties: i
}) => {
  let o = a[t.id];
  if (j(o, "No route found in manifest"), !o.lazy || typeof o.lazy != "object")
    return;
  let l = o.lazy[e];
  if (!l)
    return;
  let s = ar.get(o);
  s || (s = {}, ar.set(o, s));
  let c = s[e];
  if (c)
    return c;
  let g = (async () => {
    let p = Xn(e), h = o[e] !== void 0 && e !== "hasErrorBoundary";
    if (p)
      le(
        !p,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), s[e] = Promise.resolve();
    else if (h)
      le(
        !1,
        `Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let v = await l();
      v != null && (Object.assign(o, { [e]: v }), Object.assign(o, i(o)));
    }
    typeof o.lazy == "object" && (o.lazy[e] = void 0, Object.values(o.lazy).every((v) => v === void 0) && (o.lazy = void 0));
  })();
  return s[e] = g, g;
}, rr = /* @__PURE__ */ new WeakMap();
function Pi(e, t, a, i, o) {
  let l = a[e.id];
  if (j(l, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let y = rr.get(l);
    if (y)
      return {
        lazyRoutePromise: y,
        lazyHandlerPromise: y
      };
    let h = (async () => {
      j(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let v = await e.lazy(), _ = {};
      for (let B in v) {
        let A = v[B];
        if (A === void 0)
          continue;
        let I = ei(B), w = l[B] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        B !== "hasErrorBoundary";
        I ? le(
          !I,
          "Route property " + B + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : w ? le(
          !w,
          `Route "${l.id}" has a static property "${B}" defined but its lazy function is also returning a value for this property. The lazy route property "${B}" will be ignored.`
        ) : _[B] = A;
      }
      Object.assign(l, _), Object.assign(l, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...i(l),
        lazy: void 0
      });
    })();
    return rr.set(l, h), h.catch(() => {
    }), {
      lazyRoutePromise: h,
      lazyHandlerPromise: h
    };
  }
  let s = Object.keys(e.lazy), c = [], g;
  for (let y of s) {
    if (o && o.includes(y))
      continue;
    let h = Mr({
      key: y,
      route: e,
      manifest: a,
      mapRouteProperties: i
    });
    h && (c.push(h), y === t && (g = h));
  }
  let p = c.length > 0 ? Promise.all(c).then(() => {
  }) : void 0;
  return p?.catch(() => {
  }), g?.catch(() => {
  }), {
    lazyRoutePromise: p,
    lazyHandlerPromise: g
  };
}
async function nr(e) {
  let t = e.matches.filter((o) => o.shouldLoad), a = {};
  return (await Promise.all(t.map((o) => o.resolve()))).forEach((o, l) => {
    a[t[l].route.id] = o;
  }), a;
}
async function Di(e) {
  return e.matches.some((t) => t.route.middleware) ? Nr(e, () => nr(e)) : nr(e);
}
function Nr(e, t) {
  return Oi(
    e,
    t,
    (i) => {
      if (Zi(i))
        throw i;
      return i;
    },
    Gi,
    a
  );
  function a(i, o, l) {
    if (l)
      return Promise.resolve(
        Object.assign(l.value, {
          [o]: { type: "error", result: i }
        })
      );
    {
      let { matches: s } = e, c = Math.min(
        // Throwing route
        Math.max(
          s.findIndex((p) => p.route.id === o),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          s.findIndex((p) => p.shouldCallHandler()),
          0
        )
      ), g = Ge(
        s,
        s[c].route.id
      ).route.id;
      return Promise.resolve({
        [g]: { type: "error", result: i }
      });
    }
  }
}
async function Oi(e, t, a, i, o) {
  let { matches: l, request: s, params: c, context: g, unstable_pattern: p } = e, y = l.flatMap(
    (v) => v.route.middleware ? v.route.middleware.map((_) => [v.route.id, _]) : []
  );
  return await $r(
    {
      request: s,
      params: c,
      context: g,
      unstable_pattern: p
    },
    y,
    t,
    a,
    i,
    o
  );
}
async function $r(e, t, a, i, o, l, s = 0) {
  let { request: c } = e;
  if (c.signal.aborted)
    throw c.signal.reason ?? new Error(`Request aborted: ${c.method} ${c.url}`);
  let g = t[s];
  if (!g)
    return await a();
  let [p, y] = g, h, v = async () => {
    if (h)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return h = { value: await $r(
        e,
        t,
        a,
        i,
        o,
        l,
        s + 1
      ) }, h.value;
    } catch (_) {
      return h = { value: await l(_, p, h) }, h.value;
    }
  };
  try {
    let _ = await y(e, v), B = _ != null ? i(_) : void 0;
    return o(B) ? B : h ? B ?? h.value : (h = { value: await v() }, h.value);
  } catch (_) {
    return await l(_, p, h);
  }
}
function Ur(e, t, a, i, o) {
  let l = Mr({
    key: "middleware",
    route: i.route,
    manifest: t,
    mapRouteProperties: e
  }), s = Pi(
    i.route,
    he(a.method) ? "action" : "loader",
    t,
    e,
    o
  );
  return {
    middleware: l,
    route: s.lazyRoutePromise,
    handler: s.lazyHandlerPromise
  };
}
function fa(e, t, a, i, o, l, s, c, g = null, p) {
  let y = !1, h = Ur(
    e,
    t,
    a,
    o,
    l
  );
  return {
    ...o,
    _lazyPromises: h,
    shouldLoad: c,
    shouldRevalidateArgs: g,
    shouldCallHandler(v) {
      return y = !0, g ? typeof p == "boolean" ? Bt(o, {
        ...g,
        defaultShouldRevalidate: p
      }) : typeof v == "boolean" ? Bt(o, {
        ...g,
        defaultShouldRevalidate: v
      }) : Bt(o, g) : c;
    },
    resolve(v) {
      let { lazy: _, loader: B, middleware: A } = o.route, I = y || c || v && !he(a.method) && (_ || B), C = A && A.length > 0 && !B && !_;
      return I && (he(a.method) || !C) ? Wi({
        request: a,
        unstable_pattern: i,
        match: o,
        lazyHandlerPromise: h?.handler,
        lazyRoutePromise: h?.route,
        handlerOverride: v,
        scopedContext: s
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function ct(e, t, a, i, o, l, s, c = null) {
  return i.map((g) => g.route.id !== o.route.id ? {
    ...g,
    shouldLoad: !1,
    shouldRevalidateArgs: c,
    shouldCallHandler: () => !1,
    _lazyPromises: Ur(
      e,
      t,
      a,
      g,
      l
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : fa(
    e,
    t,
    a,
    Ct(i),
    g,
    l,
    s,
    !0,
    c
  ));
}
async function Hi(e, t, a, i, o, l) {
  a.some((p) => p._lazyPromises?.middleware) && await Promise.all(a.map((p) => p._lazyPromises?.middleware));
  let s = {
    request: t,
    unstable_pattern: Ct(a),
    params: a[0].params,
    context: o,
    matches: a
  }, g = await e({
    ...s,
    fetcherKey: i,
    runClientMiddleware: (p) => {
      let y = s;
      return Nr(y, () => p({
        ...y,
        fetcherKey: i,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      a.flatMap((p) => [
        p._lazyPromises?.handler,
        p._lazyPromises?.route
      ])
    );
  } catch {
  }
  return g;
}
async function Wi({
  request: e,
  unstable_pattern: t,
  match: a,
  lazyHandlerPromise: i,
  lazyRoutePromise: o,
  handlerOverride: l,
  scopedContext: s
}) {
  let c, g, p = he(e.method), y = p ? "action" : "loader", h = (v) => {
    let _, B = new Promise((C, w) => _ = w);
    g = () => _(), e.signal.addEventListener("abort", g);
    let A = (C) => typeof v != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${y}" [routeId: ${a.route.id}]`
      )
    ) : v(
      {
        request: e,
        unstable_pattern: t,
        params: a.params,
        context: s
      },
      ...C !== void 0 ? [C] : []
    ), I = (async () => {
      try {
        return { type: "data", result: await (l ? l((w) => A(w)) : A()) };
      } catch (C) {
        return { type: "error", result: C };
      }
    })();
    return Promise.race([I, B]);
  };
  try {
    let v = p ? a.route.action : a.route.loader;
    if (i || o)
      if (v) {
        let _, [B] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          h(v).catch((A) => {
            _ = A;
          }),
          // Ensure all lazy route promises are resolved before continuing
          i,
          o
        ]);
        if (_ !== void 0)
          throw _;
        c = B;
      } else {
        await i;
        let _ = p ? a.route.action : a.route.loader;
        if (_)
          [c] = await Promise.all([h(_), o]);
        else if (y === "action") {
          let B = new URL(e.url), A = B.pathname + B.search;
          throw Ie(405, {
            method: e.method,
            pathname: A,
            routeId: a.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (v)
      c = await h(v);
    else {
      let _ = new URL(e.url), B = _.pathname + _.search;
      throw Ie(404, {
        pathname: B
      });
    }
  } catch (v) {
    return { type: "error", result: v };
  } finally {
    g && e.signal.removeEventListener("abort", g);
  }
  return c;
}
async function ji(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function Mi(e) {
  let { result: t, type: a } = e;
  if (Sa(t)) {
    let i;
    try {
      i = await ji(t);
    } catch (o) {
      return { type: "error", error: o };
    }
    return a === "error" ? {
      type: "error",
      error: new Rt(t.status, t.statusText, i),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: i,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return a === "error" ? dr(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: Vi(t),
    statusCode: It(t) ? t.status : void 0,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: It(t) ? t.status : void 0
  } : dr(t) ? {
    type: "data",
    data: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function Ni(e, t, a, i, o) {
  let l = e.headers.get("Location");
  if (j(
    l,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !xa(l)) {
    let s = i.slice(
      0,
      i.findIndex((c) => c.route.id === a) + 1
    );
    l = ga(
      new URL(t.url),
      s,
      o,
      l
    ), e.headers.set("Location", l);
  }
  return e;
}
function ir(e, t, a, i) {
  let o = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (xa(e)) {
    let l = e, s = l.startsWith("//") ? new URL(t.protocol + l) : new URL(l);
    if (o.includes(s.protocol))
      throw new Error("Invalid redirect location");
    let c = Re(s.pathname, a) != null;
    if (s.origin === t.origin && c)
      return s.pathname + s.search + s.hash;
  }
  try {
    let l = i.createURL(e);
    if (o.includes(l.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function lt(e, t, a, i) {
  let o = e.createURL(Vr(t)).toString(), l = { signal: a };
  if (i && he(i.formMethod)) {
    let { formMethod: s, formEncType: c } = i;
    l.method = s.toUpperCase(), c === "application/json" ? (l.headers = new Headers({ "Content-Type": c }), l.body = JSON.stringify(i.json)) : c === "text/plain" ? l.body = i.text : c === "application/x-www-form-urlencoded" && i.formData ? l.body = ua(i.formData) : l.body = i.formData;
  }
  return new Request(o, l);
}
function ua(e) {
  let t = new URLSearchParams();
  for (let [a, i] of e.entries())
    t.append(a, typeof i == "string" ? i : i.name);
  return t;
}
function or(e) {
  let t = new FormData();
  for (let [a, i] of e.entries())
    t.append(a, i);
  return t;
}
function $i(e, t, a, i = !1, o = !1) {
  let l = {}, s = null, c, g = !1, p = {}, y = a && be(a[1]) ? a[1].error : void 0;
  return e.forEach((h) => {
    if (!(h.route.id in t))
      return;
    let v = h.route.id, _ = t[v];
    if (j(
      !rt(_),
      "Cannot handle redirect results in processLoaderData"
    ), be(_)) {
      let B = _.error;
      if (y !== void 0 && (B = y, y = void 0), s = s || {}, o)
        s[v] = B;
      else {
        let A = Ge(e, v);
        s[A.route.id] == null && (s[A.route.id] = B);
      }
      i || (l[v] = Wr), g || (g = !0, c = It(_.error) ? _.error.status : 500), _.headers && (p[v] = _.headers);
    } else
      l[v] = _.data, _.statusCode && _.statusCode !== 200 && !g && (c = _.statusCode), _.headers && (p[v] = _.headers);
  }), y !== void 0 && a && (s = { [a[0]]: y }, a[2] && (l[a[2]] = void 0)), {
    loaderData: l,
    errors: s,
    statusCode: c || 200,
    loaderHeaders: p
  };
}
function lr(e, t, a, i, o, l) {
  let { loaderData: s, errors: c } = $i(
    t,
    a,
    i
  );
  return o.filter((g) => !g.matches || g.matches.some((p) => p.shouldLoad)).forEach((g) => {
    let { key: p, match: y, controller: h } = g;
    if (h && h.signal.aborted)
      return;
    let v = l[p];
    if (j(v, "Did not find corresponding fetcher result"), be(v)) {
      let _ = Ge(e.matches, y?.route.id);
      c && c[_.route.id] || (c = {
        ...c,
        [_.route.id]: v.error
      }), e.fetchers.delete(p);
    } else if (rt(v))
      j(!1, "Unhandled fetcher revalidation redirect");
    else {
      let _ = Ne(v.data);
      e.fetchers.set(p, _);
    }
  }), { loaderData: s, errors: c };
}
function sr(e, t, a, i) {
  let o = Object.entries(t).filter(([, l]) => l !== Wr).reduce((l, [s, c]) => (l[s] = c, l), {});
  for (let l of a) {
    let s = l.route.id;
    if (!t.hasOwnProperty(s) && e.hasOwnProperty(s) && l.route.loader && (o[s] = e[s]), i && i.hasOwnProperty(s))
      break;
  }
  return o;
}
function cr(e) {
  return e ? be(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function Ge(e, t) {
  return (t ? e.slice(0, e.findIndex((i) => i.route.id === t) + 1) : [...e]).reverse().find((i) => i.route.hasErrorBoundary === !0) || e[0];
}
function Nt(e) {
  let t = e.length === 1 ? e[0] : e.find((a) => a.index || !a.path || a.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function Ie(e, {
  pathname: t,
  routeId: a,
  method: i,
  type: o,
  message: l
} = {}) {
  let s = "Unknown Server Error", c = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request", i && t && a ? c = `You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.` : o === "invalid-body" && (c = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden", c = `Route "${a}" does not match URL "${t}"`) : e === 404 ? (s = "Not Found", c = `No route matches URL "${t}"`) : e === 405 && (s = "Method Not Allowed", i && t && a ? c = `You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.` : i && (c = `Invalid request method "${i.toUpperCase()}"`)), new Rt(
    e || 500,
    s,
    new Error(c),
    !0
  );
}
function $t(e) {
  let t = Object.entries(e);
  for (let a = t.length - 1; a >= 0; a--) {
    let [i, o] = t[a];
    if (rt(o))
      return { key: i, result: o };
  }
}
function Vr(e) {
  let t = typeof e == "string" ? Ke(e) : e;
  return Oe({ ...t, hash: "" });
}
function Ui(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function Vi(e) {
  return new Rt(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function Gi(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, a]) => typeof t == "string" && Yi(a)
  );
}
function Yi(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function Ki(e) {
  return Sa(e.result) && Or.has(e.result.status);
}
function be(e) {
  return e.type === "error";
}
function rt(e) {
  return (e && e.type) === "redirect";
}
function dr(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Sa(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Ji(e) {
  return Or.has(e);
}
function Zi(e) {
  return Sa(e) && Ji(e.status) && e.headers.has("Location");
}
function Xi(e) {
  return Ii.has(e.toUpperCase());
}
function he(e) {
  return zi.has(e.toUpperCase());
}
function Ta(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Gt(e, t) {
  let a = typeof t == "string" ? Ke(t).search : t.search;
  if (e[e.length - 1].route.index && Ta(a || ""))
    return e[e.length - 1];
  let i = Fr(e);
  return i[i.length - 1];
}
function gr(e) {
  let { formMethod: t, formAction: a, formEncType: i, text: o, formData: l, json: s } = e;
  if (!(!t || !a || !i)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: void 0,
        json: void 0,
        text: o
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: l,
        json: void 0,
        text: void 0
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: a,
        formEncType: i,
        formData: void 0,
        json: s,
        text: void 0
      };
  }
}
function la(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Qi(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function _t(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function eo(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function Ne(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function to(e, t) {
  try {
    let a = e.sessionStorage.getItem(
      Hr
    );
    if (a) {
      let i = JSON.parse(a);
      for (let [o, l] of Object.entries(i || {}))
        l && Array.isArray(l) && t.set(o, new Set(l || []));
    }
  } catch {
  }
}
function ao(e, t) {
  if (t.size > 0) {
    let a = {};
    for (let [i, o] of t)
      a[i] = [...o];
    try {
      e.sessionStorage.setItem(
        Hr,
        JSON.stringify(a)
      );
    } catch (i) {
      le(
        !1,
        `Failed to save applied view transitions in sessionStorage (${i}).`
      );
    }
  }
}
function pr() {
  let e, t, a = new Promise((i, o) => {
    e = async (l) => {
      i(l);
      try {
        await a;
      } catch {
      }
    }, t = async (l) => {
      o(l);
      try {
        await a;
      } catch {
      }
    };
  });
  return {
    promise: a,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var nt = Te(null);
nt.displayName = "DataRouter";
var Et = Te(null);
Et.displayName = "DataRouterState";
var Gr = Te(!1);
function ro() {
  return N(Gr);
}
var Ba = Te({
  isTransitioning: !1
});
Ba.displayName = "ViewTransition";
var Yr = Te(
  /* @__PURE__ */ new Map()
);
Yr.displayName = "Fetchers";
var no = Te(null);
no.displayName = "Await";
var Ee = Te(
  null
);
Ee.displayName = "Navigation";
var Zt = Te(
  null
);
Zt.displayName = "Location";
var He = Te({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
He.displayName = "Route";
var wa = Te(null);
wa.displayName = "RouteError";
var Kr = "REACT_ROUTER_ERROR", io = "REDIRECT", oo = "ROUTE_ERROR_RESPONSE";
function lo(e) {
  if (e.startsWith(`${Kr}:${io}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function so(e) {
  if (e.startsWith(
    `${Kr}:${oo}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new Rt(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function co(e, { relative: t } = {}) {
  j(
    Ft(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: i } = N(Ee), { hash: o, pathname: l, search: s } = Lt(e, { relative: t }), c = l;
  return a !== "/" && (c = l === "/" ? a : De([a, l])), i.createHref({ pathname: c, search: s, hash: o });
}
function Ft() {
  return N(Zt) != null;
}
function Je() {
  return j(
    Ft(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), N(Zt).location;
}
var Jr = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zr(e) {
  N(Ee).static || ya(e);
}
function go() {
  let { isDataRoute: e } = N(He);
  return e ? zo() : po();
}
function po() {
  j(
    Ft(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = N(nt), { basename: t, navigator: a } = N(Ee), { matches: i } = N(He), { pathname: o } = Je(), l = JSON.stringify(_a(i)), s = kt(!1);
  return Zr(() => {
    s.current = !0;
  }), pt(
    (g, p = {}) => {
      if (le(s.current, Jr), !s.current) return;
      if (typeof g == "number") {
        a.go(g);
        return;
      }
      let y = va(
        g,
        JSON.parse(l),
        o,
        p.relative === "path"
      );
      e == null && t !== "/" && (y.pathname = y.pathname === "/" ? t : De([t, y.pathname])), (p.replace ? a.replace : a.push)(
        y,
        p.state,
        p
      );
    },
    [
      t,
      a,
      l,
      o,
      e
    ]
  );
}
var fo = Te(null);
function uo(e) {
  let t = N(He).outlet;
  return ke(
    () => t && /* @__PURE__ */ O(fo.Provider, { value: e }, t),
    [t, e]
  );
}
function Lt(e, { relative: t } = {}) {
  let { matches: a } = N(He), { pathname: i } = Je(), o = JSON.stringify(_a(a));
  return ke(
    () => va(
      e,
      JSON.parse(o),
      i,
      t === "path"
    ),
    [e, o, i, t]
  );
}
function ho(e, t, a, i, o) {
  j(
    Ft(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = N(Ee), { matches: s } = N(He), c = s[s.length - 1], g = c ? c.params : {}, p = c ? c.pathname : "/", y = c ? c.pathnameBase : "/", h = c && c.route;
  {
    let w = h && h.path || "";
    Qr(
      p,
      !h || w.endsWith("*") || w.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w === "/" ? "*" : `${w}/*`}">.`
    );
  }
  let v = Je(), _;
  _ = v;
  let B = _.pathname || "/", A = B;
  if (y !== "/") {
    let w = y.replace(/^\//, "").split("/");
    A = "/" + B.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let I = Ve(e, { pathname: A });
  return le(
    h || I != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), le(
    I == null || I[I.length - 1].route.element !== void 0 || I[I.length - 1].route.Component !== void 0 || I[I.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), vo(
    I && I.map(
      (w) => Object.assign({}, w, {
        params: Object.assign({}, g, w.params),
        pathname: De([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          l.encodeLocation ? l.encodeLocation(
            w.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathname
        ]),
        pathnameBase: w.pathnameBase === "/" ? y : De([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          l.encodeLocation ? l.encodeLocation(
            w.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathnameBase
        ])
      })
    ),
    s,
    a,
    i,
    o
  );
}
function mo() {
  let e = wo(), t = It(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), a = e instanceof Error ? e.stack : null, i = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: i }, l = { padding: "2px 4px", backgroundColor: i }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), s = /* @__PURE__ */ O(dt, null, /* @__PURE__ */ O("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ O("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ O("code", { style: l }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ O("code", { style: l }, "errorElement"), " prop on your route.")), /* @__PURE__ */ O(dt, null, /* @__PURE__ */ O("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ O("h3", { style: { fontStyle: "italic" } }, t), a ? /* @__PURE__ */ O("pre", { style: o }, a) : null, s);
}
var yo = /* @__PURE__ */ O(mo, null), Xr = class extends zr {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const a = so(e.digest);
      a && (e = a);
    }
    let t = e !== void 0 ? /* @__PURE__ */ O(He.Provider, { value: this.props.routeContext }, /* @__PURE__ */ O(
      wa.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ O(xo, { error: e }, t) : t;
  }
};
Xr.contextType = Gr;
var sa = /* @__PURE__ */ new WeakMap();
function xo({
  children: e,
  error: t
}) {
  let { basename: a } = N(Ee);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let i = lo(t.digest);
    if (i) {
      let o = sa.get(t);
      if (o) throw o;
      let l = qr(i.location, a);
      if (Lr && !sa.get(t))
        if (l.isExternal || i.reloadDocument)
          window.location.href = l.absoluteURL || l.to;
        else {
          const s = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(l.to, {
              replace: i.replace
            })
          );
          throw sa.set(t, s), s;
        }
      return /* @__PURE__ */ O(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${l.absoluteURL || l.to}`
        }
      );
    }
  }
  return e;
}
function _o({ routeContext: e, match: t, children: a }) {
  let i = N(nt);
  return i && i.static && i.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ O(He.Provider, { value: e }, a);
}
function vo(e, t = [], a = null, i = null, o = null) {
  if (e == null) {
    if (!a)
      return null;
    if (a.errors)
      e = a.matches;
    else if (t.length === 0 && !a.initialized && a.matches.length > 0)
      e = a.matches;
    else
      return null;
  }
  let l = e, s = a?.errors;
  if (s != null) {
    let y = l.findIndex(
      (h) => h.route.id && s?.[h.route.id] !== void 0
    );
    j(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        s
      ).join(",")}`
    ), l = l.slice(
      0,
      Math.min(l.length, y + 1)
    );
  }
  let c = !1, g = -1;
  if (a)
    for (let y = 0; y < l.length; y++) {
      let h = l[y];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (g = y), h.route.id) {
        let { loaderData: v, errors: _ } = a, B = h.route.loader && !v.hasOwnProperty(h.route.id) && (!_ || _[h.route.id] === void 0);
        if (h.route.lazy || B) {
          c = !0, g >= 0 ? l = l.slice(0, g + 1) : l = [l[0]];
          break;
        }
      }
    }
  let p = a && i ? (y, h) => {
    i(y, {
      location: a.location,
      params: a.matches?.[0]?.params ?? {},
      unstable_pattern: Ct(a.matches),
      errorInfo: h
    });
  } : void 0;
  return l.reduceRight(
    (y, h, v) => {
      let _, B = !1, A = null, I = null;
      a && (_ = s && h.route.id ? s[h.route.id] : void 0, A = h.route.errorElement || yo, c && (g < 0 && v === 0 ? (Qr(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), B = !0, I = null) : g === v && (B = !0, I = h.route.hydrateFallbackElement || null)));
      let C = t.concat(l.slice(0, v + 1)), w = () => {
        let P;
        return _ ? P = A : B ? P = I : h.route.Component ? P = /* @__PURE__ */ O(h.route.Component, null) : h.route.element ? P = h.route.element : P = y, /* @__PURE__ */ O(
          _o,
          {
            match: h,
            routeContext: {
              outlet: y,
              matches: C,
              isDataRoute: a != null
            },
            children: P
          }
        );
      };
      return a && (h.route.ErrorBoundary || h.route.errorElement || v === 0) ? /* @__PURE__ */ O(
        Xr,
        {
          location: a.location,
          revalidation: a.revalidation,
          component: A,
          error: _,
          children: w(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
          onError: p
        }
      ) : w();
    },
    null
  );
}
function za(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function bo(e) {
  let t = N(nt);
  return j(t, za(e)), t;
}
function So(e) {
  let t = N(Et);
  return j(t, za(e)), t;
}
function To(e) {
  let t = N(He);
  return j(t, za(e)), t;
}
function Aa(e) {
  let t = To(e), a = t.matches[t.matches.length - 1];
  return j(
    a.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), a.route.id;
}
function Bo() {
  return Aa(
    "useRouteId"
    /* UseRouteId */
  );
}
function wo() {
  let e = N(wa), t = So(
    "useRouteError"
    /* UseRouteError */
  ), a = Aa(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[a];
}
function zo() {
  let { router: e } = bo(
    "useNavigate"
    /* UseNavigateStable */
  ), t = Aa(
    "useNavigate"
    /* UseNavigateStable */
  ), a = kt(!1);
  return Zr(() => {
    a.current = !0;
  }), pt(
    async (o, l = {}) => {
      le(a.current, Jr), a.current && (typeof o == "number" ? await e.navigate(o) : await e.navigate(o, { fromRouteId: t, ...l }));
    },
    [e, t]
  );
}
var fr = {};
function Qr(e, t, a) {
  !t && !fr[e] && (fr[e] = !0, le(!1, a));
}
var ur = {};
function hr(e, t) {
  !e && !ur[t] && (ur[t] = !0, console.warn(t));
}
var Ao = "useOptimistic", mr = Un[Ao], Io = () => {
};
function ko(e) {
  return mr ? mr(e) : [e, Io];
}
function Ro(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && le(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: O(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && le(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: O(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && le(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: O(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var Co = [
  "HydrateFallback",
  "hydrateFallbackElement"
], Eo = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (a) => {
        this.status === "pending" && (this.status = "resolved", e(a));
      }, this.reject = (a) => {
        this.status === "pending" && (this.status = "rejected", t(a));
      };
    });
  }
};
function Fo({
  router: e,
  flushSync: t,
  onError: a,
  unstable_useTransitions: i
}) {
  i = ro() || i;
  let [l, s] = _e(e.state), [c, g] = ko(l), [p, y] = _e(), [h, v] = _e({
    isTransitioning: !1
  }), [_, B] = _e(), [A, I] = _e(), [C, w] = _e(), P = kt(/* @__PURE__ */ new Map()), ae = pt(
    (H, { deletedFetchers: G, newErrors: te, flushSync: ee, viewTransitionOpts: ce }) => {
      te && a && Object.values(te).forEach(
        (se) => a(se, {
          location: H.location,
          params: H.matches[0]?.params ?? {},
          unstable_pattern: Ct(H.matches)
        })
      ), H.fetchers.forEach((se, X) => {
        se.data !== void 0 && P.current.set(X, se.data);
      }), G.forEach((se) => P.current.delete(se)), hr(
        ee === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let Fe = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (hr(
        ce == null || Fe,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !ce || !Fe) {
        t && ee ? t(() => s(H)) : i === !1 ? s(H) : wt(() => {
          i === !0 && g((se) => yr(se, H)), s(H);
        });
        return;
      }
      if (t && ee) {
        t(() => {
          A && (_?.resolve(), A.skipTransition()), v({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: ce.currentLocation,
            nextLocation: ce.nextLocation
          });
        });
        let se = e.window.document.startViewTransition(() => {
          t(() => s(H));
        });
        se.finished.finally(() => {
          t(() => {
            B(void 0), I(void 0), y(void 0), v({ isTransitioning: !1 });
          });
        }), t(() => I(se));
        return;
      }
      A ? (_?.resolve(), A.skipTransition(), w({
        state: H,
        currentLocation: ce.currentLocation,
        nextLocation: ce.nextLocation
      })) : (y(H), v({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: ce.currentLocation,
        nextLocation: ce.nextLocation
      }));
    },
    [
      e.window,
      t,
      A,
      _,
      i,
      g,
      a
    ]
  );
  ya(() => e.subscribe(ae), [e, ae]), $e(() => {
    h.isTransitioning && !h.flushSync && B(new Eo());
  }, [h]), $e(() => {
    if (_ && p && e.window) {
      let H = p, G = _.promise, te = e.window.document.startViewTransition(async () => {
        i === !1 ? s(H) : wt(() => {
          i === !0 && g((ee) => yr(ee, H)), s(H);
        }), await G;
      });
      te.finished.finally(() => {
        B(void 0), I(void 0), y(void 0), v({ isTransitioning: !1 });
      }), I(te);
    }
  }, [
    p,
    _,
    e.window,
    i,
    g
  ]), $e(() => {
    _ && p && c.location.key === p.location.key && _.resolve();
  }, [_, A, c.location, p]), $e(() => {
    !h.isTransitioning && C && (y(C.state), v({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: C.currentLocation,
      nextLocation: C.nextLocation
    }), w(void 0));
  }, [h.isTransitioning, C]);
  let K = ke(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (H) => e.navigate(H),
    push: (H, G, te) => e.navigate(H, {
      state: G,
      preventScrollReset: te?.preventScrollReset
    }),
    replace: (H, G, te) => e.navigate(H, {
      replace: !0,
      state: G,
      preventScrollReset: te?.preventScrollReset
    })
  }), [e]), ne = e.basename || "/", x = ke(
    () => ({
      router: e,
      navigator: K,
      static: !1,
      basename: ne,
      onError: a
    }),
    [e, K, ne, a]
  );
  return /* @__PURE__ */ O(dt, null, /* @__PURE__ */ O(nt.Provider, { value: x }, /* @__PURE__ */ O(Et.Provider, { value: c }, /* @__PURE__ */ O(Yr.Provider, { value: P.current }, /* @__PURE__ */ O(Ba.Provider, { value: h }, /* @__PURE__ */ O(
    Do,
    {
      basename: ne,
      location: c.location,
      navigationType: c.historyAction,
      navigator: K,
      unstable_useTransitions: i
    },
    /* @__PURE__ */ O(
      Lo,
      {
        routes: e.routes,
        future: e.future,
        state: c,
        onError: a
      }
    )
  ))))), null);
}
function yr(e, t) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers
  };
}
var Lo = Ar(qo);
function qo({
  routes: e,
  future: t,
  state: a,
  onError: i
}) {
  return ho(e, void 0, a, i, t);
}
function Po(e) {
  return uo(e.context);
}
function Do({
  basename: e = "/",
  children: t = null,
  location: a,
  navigationType: i = "POP",
  navigator: o,
  static: l = !1,
  unstable_useTransitions: s
}) {
  j(
    !Ft(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let c = e.replace(/^\/*/, "/"), g = ke(
    () => ({
      basename: c,
      navigator: o,
      static: l,
      unstable_useTransitions: s,
      future: {}
    }),
    [c, o, l, s]
  );
  typeof a == "string" && (a = Ke(a));
  let {
    pathname: p = "/",
    search: y = "",
    hash: h = "",
    state: v = null,
    key: _ = "default"
  } = a, B = ke(() => {
    let A = Re(p, c);
    return A == null ? null : {
      location: {
        pathname: A,
        search: y,
        hash: h,
        state: v,
        key: _
      },
      navigationType: i
    };
  }, [c, p, y, h, v, _, i]);
  return le(
    B != null,
    `<Router basename="${c}"> is not able to match the URL "${p}${y}${h}" because it does not start with the basename, so the <Router> won't render anything.`
  ), B == null ? null : /* @__PURE__ */ O(Ee.Provider, { value: g }, /* @__PURE__ */ O(Zt.Provider, { children: t, value: B }));
}
var Yt = "get", Kt = "application/x-www-form-urlencoded";
function Xt(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Oo(e) {
  return Xt(e) && e.tagName.toLowerCase() === "button";
}
function Ho(e) {
  return Xt(e) && e.tagName.toLowerCase() === "form";
}
function Wo(e) {
  return Xt(e) && e.tagName.toLowerCase() === "input";
}
function jo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Mo(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !jo(e);
}
var Ut = null;
function No() {
  if (Ut === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ut = !1;
    } catch {
      Ut = !0;
    }
  return Ut;
}
var $o = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ca(e) {
  return e != null && !$o.has(e) ? (le(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kt}"`
  ), null) : e;
}
function Uo(e, t) {
  let a, i, o, l, s;
  if (Ho(e)) {
    let c = e.getAttribute("action");
    i = c ? Re(c, t) : null, a = e.getAttribute("method") || Yt, o = ca(e.getAttribute("enctype")) || Kt, l = new FormData(e);
  } else if (Oo(e) || Wo(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = e.getAttribute("formaction") || c.getAttribute("action");
    if (i = g ? Re(g, t) : null, a = e.getAttribute("formmethod") || c.getAttribute("method") || Yt, o = ca(e.getAttribute("formenctype")) || ca(c.getAttribute("enctype")) || Kt, l = new FormData(c, e), !No()) {
      let { name: p, type: y, value: h } = e;
      if (y === "image") {
        let v = p ? `${p}.` : "";
        l.append(`${v}x`, "0"), l.append(`${v}y`, "0");
      } else p && l.append(p, h);
    }
  } else {
    if (Xt(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    a = Yt, i = null, o = Kt, s = e;
  }
  return l && o === "text/plain" && (s = l, l = void 0), { action: i, method: a.toLowerCase(), encType: o, formData: l, body: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ia(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Vo(e, t, a, i) {
  let o = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return a ? o.pathname.endsWith("/") ? o.pathname = `${o.pathname}_.${i}` : o.pathname = `${o.pathname}.${i}` : o.pathname === "/" ? o.pathname = `_root.${i}` : t && Re(o.pathname, t) === "/" ? o.pathname = `${t.replace(/\/$/, "")}/_root.${i}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${i}`, o;
}
async function Go(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let a = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = a, a;
  } catch (a) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Yo(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Ko(e, t, a) {
  let i = await Promise.all(
    e.map(async (o) => {
      let l = t.routes[o.route.id];
      if (l) {
        let s = await Go(l, a);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return Qo(
    i.flat(1).filter(Yo).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function xr(e, t, a, i, o, l) {
  let s = (g, p) => a[p] ? g.route.id !== a[p].route.id : !0, c = (g, p) => (
    // param change, /users/123 -> /users/456
    a[p].pathname !== g.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    a[p].route.path?.endsWith("*") && a[p].params["*"] !== g.params["*"]
  );
  return l === "assets" ? t.filter(
    (g, p) => s(g, p) || c(g, p)
  ) : l === "data" ? t.filter((g, p) => {
    let y = i.routes[g.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (s(g, p) || c(g, p))
      return !0;
    if (g.route.shouldRevalidate) {
      let h = g.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: a[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: g.params,
        defaultShouldRevalidate: !0
      });
      if (typeof h == "boolean")
        return h;
    }
    return !0;
  }) : [];
}
function Jo(e, t, { includeHydrateFallback: a } = {}) {
  return Zo(
    e.map((i) => {
      let o = t.routes[i.route.id];
      if (!o) return [];
      let l = [o.module];
      return o.clientActionModule && (l = l.concat(o.clientActionModule)), o.clientLoaderModule && (l = l.concat(o.clientLoaderModule)), a && o.hydrateFallbackModule && (l = l.concat(o.hydrateFallbackModule)), o.imports && (l = l.concat(o.imports)), l;
    }).flat(1)
  );
}
function Zo(e) {
  return [...new Set(e)];
}
function Xo(e) {
  let t = {}, a = Object.keys(e).sort();
  for (let i of a)
    t[i] = e[i];
  return t;
}
function Qo(e, t) {
  let a = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((i, o) => {
    let l = JSON.stringify(Xo(o));
    return a.has(l) || (a.add(l), i.push({ key: l, link: o })), i;
  }, []);
}
function en() {
  let e = N(nt);
  return Ia(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function el() {
  let e = N(Et);
  return Ia(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var ka = Te(void 0);
ka.displayName = "FrameworkContext";
function tn() {
  let e = N(ka);
  return Ia(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function tl(e, t) {
  let a = N(ka), [i, o] = _e(!1), [l, s] = _e(!1), { onFocus: c, onBlur: g, onMouseEnter: p, onMouseLeave: y, onTouchStart: h } = t, v = kt(null);
  $e(() => {
    if (e === "render" && s(!0), e === "viewport") {
      let A = (C) => {
        C.forEach((w) => {
          s(w.isIntersecting);
        });
      }, I = new IntersectionObserver(A, { threshold: 0.5 });
      return v.current && I.observe(v.current), () => {
        I.disconnect();
      };
    }
  }, [e]), $e(() => {
    if (i) {
      let A = setTimeout(() => {
        s(!0);
      }, 100);
      return () => {
        clearTimeout(A);
      };
    }
  }, [i]);
  let _ = () => {
    o(!0);
  }, B = () => {
    o(!1), s(!1);
  };
  return a ? e !== "intent" ? [l, v, {}] : [
    l,
    v,
    {
      onFocus: vt(c, _),
      onBlur: vt(g, B),
      onMouseEnter: vt(p, _),
      onMouseLeave: vt(y, B),
      onTouchStart: vt(h, _)
    }
  ] : [!1, v, {}];
}
function vt(e, t) {
  return (a) => {
    e && e(a), a.defaultPrevented || t(a);
  };
}
function al({ page: e, ...t }) {
  let { router: a } = en(), i = ke(
    () => Ve(a.routes, e, a.basename),
    [a.routes, e, a.basename]
  );
  return i ? /* @__PURE__ */ O(nl, { page: e, matches: i, ...t }) : null;
}
function rl(e) {
  let { manifest: t, routeModules: a } = tn(), [i, o] = _e([]);
  return $e(() => {
    let l = !1;
    return Ko(e, t, a).then(
      (s) => {
        l || o(s);
      }
    ), () => {
      l = !0;
    };
  }, [e, t, a]), i;
}
function nl({
  page: e,
  matches: t,
  ...a
}) {
  let i = Je(), { future: o, manifest: l, routeModules: s } = tn(), { basename: c } = en(), { loaderData: g, matches: p } = el(), y = ke(
    () => xr(
      e,
      t,
      p,
      l,
      i,
      "data"
    ),
    [e, t, p, l, i]
  ), h = ke(
    () => xr(
      e,
      t,
      p,
      l,
      i,
      "assets"
    ),
    [e, t, p, l, i]
  ), v = ke(() => {
    if (e === i.pathname + i.search + i.hash)
      return [];
    let A = /* @__PURE__ */ new Set(), I = !1;
    if (t.forEach((w) => {
      let P = l.routes[w.route.id];
      !P || !P.hasLoader || (!y.some((ae) => ae.route.id === w.route.id) && w.route.id in g && s[w.route.id]?.shouldRevalidate || P.hasClientLoader ? I = !0 : A.add(w.route.id));
    }), A.size === 0)
      return [];
    let C = Vo(
      e,
      c,
      o.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return I && A.size > 0 && C.searchParams.set(
      "_routes",
      t.filter((w) => A.has(w.route.id)).map((w) => w.route.id).join(",")
    ), [C.pathname + C.search];
  }, [
    c,
    o.unstable_trailingSlashAwareDataRequests,
    g,
    i,
    l,
    y,
    t,
    e,
    s
  ]), _ = ke(
    () => Jo(h, l),
    [h, l]
  ), B = rl(h);
  return /* @__PURE__ */ O(dt, null, v.map((A) => /* @__PURE__ */ O("link", { key: A, rel: "prefetch", as: "fetch", href: A, ...a })), _.map((A) => /* @__PURE__ */ O("link", { key: A, rel: "modulepreload", href: A, ...a })), B.map(({ key: A, link: I }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ O(
      "link",
      {
        key: A,
        nonce: a.nonce,
        ...I,
        crossOrigin: I.crossOrigin ?? a.crossOrigin
      }
    )
  )));
}
function il(...e) {
  return (t) => {
    e.forEach((a) => {
      typeof a == "function" ? a(t) : a != null && (a.current = t);
    });
  };
}
var ol = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ol && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function ll(e, t) {
  return Ei({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: Yn({ window: t?.window }),
    hydrationData: sl(),
    routes: e,
    mapRouteProperties: Ro,
    hydrationRouteProperties: Co,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
    unstable_instrumentations: t?.unstable_instrumentations
  }).initialize();
}
function sl() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: cl(e.errors)
  }), e;
}
function cl(e) {
  if (!e) return null;
  let t = Object.entries(e), a = {};
  for (let [i, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      a[i] = new Rt(
        o.status,
        o.statusText,
        o.data,
        o.internal === !0
      );
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == "function")
          try {
            let s = new l(o.message);
            s.stack = "", a[i] = s;
          } catch {
          }
      }
      if (a[i] == null) {
        let l = new Error(o.message);
        l.stack = "", a[i] = l;
      }
    } else
      a[i] = o;
  return a;
}
var an = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Se = gt(
  function({
    onClick: t,
    discover: a = "render",
    prefetch: i = "none",
    relative: o,
    reloadDocument: l,
    replace: s,
    state: c,
    target: g,
    to: p,
    preventScrollReset: y,
    viewTransition: h,
    unstable_defaultShouldRevalidate: v,
    ..._
  }, B) {
    let { basename: A, unstable_useTransitions: I } = N(Ee), C = typeof p == "string" && an.test(p), w = qr(p, A);
    p = w.to;
    let P = co(p, { relative: o }), [ae, K, ne] = tl(
      i,
      _
    ), x = pl(p, {
      replace: s,
      state: c,
      target: g,
      preventScrollReset: y,
      relative: o,
      viewTransition: h,
      unstable_defaultShouldRevalidate: v,
      unstable_useTransitions: I
    });
    function H(te) {
      t && t(te), te.defaultPrevented || x(te);
    }
    let G = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ O(
        "a",
        {
          ..._,
          ...ne,
          href: w.absoluteURL || P,
          onClick: w.isExternal || l ? t : H,
          ref: il(B, K),
          target: g,
          "data-discover": !C && a === "render" ? "true" : void 0
        }
      )
    );
    return ae && !C ? /* @__PURE__ */ O(dt, null, G, /* @__PURE__ */ O(al, { page: P })) : G;
  }
);
Se.displayName = "Link";
var ha = gt(
  function({
    "aria-current": t = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: o = !1,
    style: l,
    to: s,
    viewTransition: c,
    children: g,
    ...p
  }, y) {
    let h = Lt(s, { relative: p.relative }), v = Je(), _ = N(Et), { navigator: B, basename: A } = N(Ee), I = _ != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    yl(h) && c === !0, C = B.encodeLocation ? B.encodeLocation(h).pathname : h.pathname, w = v.pathname, P = _ && _.navigation && _.navigation.location ? _.navigation.location.pathname : null;
    a || (w = w.toLowerCase(), P = P ? P.toLowerCase() : null, C = C.toLowerCase()), P && A && (P = Re(P, A) || P);
    const ae = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
    let K = w === C || !o && w.startsWith(C) && w.charAt(ae) === "/", ne = P != null && (P === C || !o && P.startsWith(C) && P.charAt(C.length) === "/"), x = {
      isActive: K,
      isPending: ne,
      isTransitioning: I
    }, H = K ? t : void 0, G;
    typeof i == "function" ? G = i(x) : G = [
      i,
      K ? "active" : null,
      ne ? "pending" : null,
      I ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let te = typeof l == "function" ? l(x) : l;
    return /* @__PURE__ */ O(
      Se,
      {
        ...p,
        "aria-current": H,
        className: G,
        ref: y,
        style: te,
        to: s,
        viewTransition: c
      },
      typeof g == "function" ? g(x) : g
    );
  }
);
ha.displayName = "NavLink";
var dl = gt(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: a,
    reloadDocument: i,
    replace: o,
    state: l,
    method: s = Yt,
    action: c,
    onSubmit: g,
    relative: p,
    preventScrollReset: y,
    viewTransition: h,
    unstable_defaultShouldRevalidate: v,
    ..._
  }, B) => {
    let { unstable_useTransitions: A } = N(Ee), I = hl(), C = ml(c, { relative: p }), w = s.toLowerCase() === "get" ? "get" : "post", P = typeof c == "string" && an.test(c);
    return /* @__PURE__ */ O(
      "form",
      {
        ref: B,
        method: w,
        action: C,
        onSubmit: i ? g : (K) => {
          if (g && g(K), K.defaultPrevented) return;
          K.preventDefault();
          let ne = K.nativeEvent.submitter, x = ne?.getAttribute("formmethod") || s, H = () => I(ne || K.currentTarget, {
            fetcherKey: t,
            method: x,
            navigate: a,
            replace: o,
            state: l,
            relative: p,
            preventScrollReset: y,
            viewTransition: h,
            unstable_defaultShouldRevalidate: v
          });
          A && a !== !1 ? wt(() => H()) : H();
        },
        ..._,
        "data-discover": !P && e === "render" ? "true" : void 0
      }
    );
  }
);
dl.displayName = "Form";
function gl(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function rn(e) {
  let t = N(nt);
  return j(t, gl(e)), t;
}
function pl(e, {
  target: t,
  replace: a,
  state: i,
  preventScrollReset: o,
  relative: l,
  viewTransition: s,
  unstable_defaultShouldRevalidate: c,
  unstable_useTransitions: g
} = {}) {
  let p = go(), y = Je(), h = Lt(e, { relative: l });
  return pt(
    (v) => {
      if (Mo(v, t)) {
        v.preventDefault();
        let _ = a !== void 0 ? a : Oe(y) === Oe(h), B = () => p(e, {
          replace: _,
          state: i,
          preventScrollReset: o,
          relative: l,
          viewTransition: s,
          unstable_defaultShouldRevalidate: c
        });
        g ? wt(() => B()) : B();
      }
    },
    [
      y,
      p,
      h,
      a,
      i,
      t,
      e,
      o,
      l,
      s,
      c,
      g
    ]
  );
}
var fl = 0, ul = () => `__${String(++fl)}__`;
function hl() {
  let { router: e } = rn(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = N(Ee), a = Bo(), i = e.fetch, o = e.navigate;
  return pt(
    async (l, s = {}) => {
      let { action: c, method: g, encType: p, formData: y, body: h } = Uo(
        l,
        t
      );
      if (s.navigate === !1) {
        let v = s.fetcherKey || ul();
        await i(v, a, s.action || c, {
          unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: y,
          body: h,
          formMethod: s.method || g,
          formEncType: s.encType || p,
          flushSync: s.flushSync
        });
      } else
        await o(s.action || c, {
          unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: y,
          body: h,
          formMethod: s.method || g,
          formEncType: s.encType || p,
          replace: s.replace,
          state: s.state,
          fromRouteId: a,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [i, o, t, a]
  );
}
function ml(e, { relative: t } = {}) {
  let { basename: a } = N(Ee), i = N(He);
  j(i, "useFormAction must be used inside a RouteContext");
  let [o] = i.matches.slice(-1), l = { ...Lt(e || ".", { relative: t }) }, s = Je();
  if (e == null) {
    l.search = s.search;
    let c = new URLSearchParams(l.search), g = c.getAll("index");
    if (g.some((y) => y === "")) {
      c.delete("index"), g.filter((h) => h).forEach((h) => c.append("index", h));
      let y = c.toString();
      l.search = y ? `?${y}` : "";
    }
  }
  return (!e || e === ".") && o.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (l.pathname = l.pathname === "/" ? a : De([a, l.pathname])), Oe(l);
}
function yl(e, { relative: t } = {}) {
  let a = N(Ba);
  j(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = rn(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = Lt(e, { relative: t });
  if (!a.isTransitioning)
    return !1;
  let l = Re(a.currentLocation.pathname, i) || a.currentLocation.pathname, s = Re(a.nextLocation.pathname, i) || a.nextLocation.pathname;
  return Jt(o.pathname, s) != null || Jt(o.pathname, l) != null;
}
const r = Vt.forwardRef(function({ _fgT: t, _fgS: a, _fgB: i, ...o }, l) {
  const s = l ? { ...o, ref: l } : o;
  return typeof window < "u" && window.__FGInspectorCmp ? Vt.createElement(window.__FGInspectorCmp, { _fgT: t, _fgS: a, _fgB: i, ...s }) : Vt.createElement(t, s);
});
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _l = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, i) => i ? i.toUpperCase() : a.toLowerCase()
), _r = (e) => {
  const t = _l(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, nn = (...e) => e.filter((t, a, i) => !!t && t.trim() !== "" && i.indexOf(t) === a).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = gt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: i,
    className: o = "",
    children: l,
    iconNode: s,
    ...c
  }, g) => O(
    "svg",
    {
      ref: g,
      ...vl,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: i ? Number(a) * 24 / Number(t) : a,
      className: nn("lucide", o),
      ...c
    },
    [
      ...s.map(([p, y]) => O(p, y)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = (e, t) => {
  const a = gt(
    ({ className: i, ...o }, l) => O(bl, {
      ref: l,
      iconNode: t,
      className: nn(
        `lucide-${xl(_r(e))}`,
        `lucide-${e}`,
        i
      ),
      ...o
    })
  );
  return a.displayName = _r(e), a;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Tl = Ra("arrow-right", Sl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], wl = Ra("menu", Bl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Al = Ra("x", zl), Il = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function ma(e) {
  const [t, a] = _e(!1), i = () => {
    a(!0);
  }, { src: o, alt: l, style: s, className: c, ...g } = e;
  return t ? /* @__PURE__ */ n(
    r,
    {
      _fgT: "div",
      _fgS: "csfh0",
      _fgB: 1783946043558,
      className: `inline-block bg-gray-100 text-center align-middle ${c ?? ""}`,
      style: s,
      "data-fg-csfh0": ":0:/src/app/components/figma/ImageWithFallback.tsx:16:5:728:310:e:div:e",
      children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "csfh1", _fgB: 1783946043558, className: "flex items-center justify-center w-full h-full", "data-fg-csfh1": ":0:/src/app/components/figma/ImageWithFallback.tsx:20:7:854:173:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "img", _fgS: "csfh2", _fgB: 1783946043558, src: Il, alt: "Error loading image", ...g, "data-original-url": o, "data-fg-csfh2": ":0:/src/app/components/figma/ImageWithFallback.tsx:21:9:927:87:e:img" }) })
    }
  ) : /* @__PURE__ */ n(r, { _fgT: "img", _fgS: "csfh3", _fgB: 1783946043558, src: o, alt: l, className: c, style: s, ...g, onError: i, "data-fg-csfh3": ":0:/src/app/components/figma/ImageWithFallback.tsx:25:5:1051:95:e:img" });
}
const V = "#0D1B2A", Y = "#D4B483", z = "#3AAFA9", oe = "#F7F7F7", W = "#ffffff", f = "'Inter', sans-serif", Q = "'Playfair Display', serif", vr = "https://static.wixstatic.com/media/cf5d54_9efb6f4a64bc4b0e96da44642b046523~mv2.png", da = [
  { label: "Home", to: "/" },
  { label: "The Learning Experience", to: "/the-learning-experience" },
  { label: "What TBI Really Is", to: "/the-truth-about-tbi" },
  { label: "Who We Serve", to: "/who-we-serve" },
  { label: "Our Story", to: "/our-story" },
  { label: "Our Impact", to: "/our-impact" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" }
];
function kl() {
  const [e, t] = _e(!1), a = Je();
  return $e(() => {
    t(!1), window.scrollTo(0, 0);
  }, [a.pathname]), /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ccit0", _fgB: 1783946043254, _fgD: !0, style: { backgroundColor: oe, color: "#1A1A1A", fontFamily: f }, "data-fg-ccit0": ":0:/src/app/components/Layout.tsx:28:5:974:7836:e:div:xtetxtetxte:1", children: [
    /* @__PURE__ */ b(
      r,
      {
        _fgT: "header",
        _fgS: "ccit2",
        _fgB: 1783946043254,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: W,
          borderBottom: "1px solid rgba(13,27,42,0.08)"
        },
        "data-fg-ccit2": ":0:/src/app/components/Layout.tsx:30:7:1085:4231:e:header:etxtx",
        children: [
          /* @__PURE__ */ b(
            r,
            {
              _fgT: "div",
              _fgS: "ccit3",
              _fgB: 1783946043254,
              style: {
                maxWidth: "1440px",
                margin: "0 auto",
                padding: "0 48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "68px"
              },
              "data-fg-ccit3": ":0:/src/app/components/Layout.tsx:41:9:1336:2499:e:div:etxtetxte",
              children: [
                /* @__PURE__ */ n(r, { _fgT: Se, _fgS: "ccit4", _fgB: 1783946043254, to: "/", style: { textDecoration: "none", display: "flex", alignItems: "center" }, "data-fg-ccit4": ":0:node_modules/react-router:52:11:1622:292:e:Link:e:::::B0gV", children: /* @__PURE__ */ n(
                  r,
                  {
                    _fgT: ma,
                    _fgS: "ccit5",
                    _fgB: 1783946043254,
                    src: vr,
                    alt: "TBI Redefined",
                    style: { height: "44px", width: "auto", objectFit: "contain" },
                    "data-fg-ccit5": ":0:/src/app/components/Layout.tsx:53:13:1722:174:e:ImageWithFallback::::::DGky"
                  }
                ) }),
                /* @__PURE__ */ b(
                  r,
                  {
                    _fgT: "nav",
                    _fgS: "ccit7",
                    _fgB: 1783946043254,
                    className: "hidden xl:flex",
                    style: { alignItems: "center", gap: "32px", display: "flex" },
                    "data-fg-ccit7": ":0:/src/app/components/Layout.tsx:61:11:1956:1487:e:nav:xte",
                    children: [
                      da.filter((i) => i.label !== "Home").map(({ label: i, to: o }) => /* @__PURE__ */ n(
                        r,
                        {
                          _fgT: ha,
                          _fgS: "ccit9",
                          _fgB: 1783946043254,
                          to: o,
                          style: ({ isActive: l }) => ({
                            fontFamily: f,
                            fontSize: "13px",
                            fontWeight: 400,
                            color: l ? z : "rgba(13,27,42,0.60)",
                            textDecoration: "none",
                            letterSpacing: "0.01em",
                            borderBottom: l ? `1px solid ${z}` : "1px solid transparent",
                            paddingBottom: "2px",
                            transition: "color 0.2s",
                            whiteSpace: "nowrap"
                          }),
                          "data-fg-ccit9": ":0:node_modules/react-router:66:15:2183:659:e:NavLink:x:::::rcG",
                          children: i
                        },
                        o
                      )),
                      /* @__PURE__ */ n(
                        r,
                        {
                          _fgT: Se,
                          _fgS: "ccit11",
                          _fgB: 1783946043254,
                          to: "/partnership-support",
                          style: {
                            fontFamily: f,
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: W,
                            backgroundColor: z,
                            textDecoration: "none",
                            padding: "10px 22px",
                            borderRadius: "4px",
                            whiteSpace: "nowrap"
                          },
                          "data-fg-ccit11": ":0:node_modules/react-router:85:13:2871:555:e:Link:t:::::B0gV",
                          children: "Get Involved"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ n(
                  r,
                  {
                    _fgT: "button",
                    _fgS: "ccit14",
                    _fgB: 1783946043254,
                    onClick: () => t(!e),
                    "aria-label": "Toggle menu",
                    className: "xl:hidden",
                    style: { background: "none", border: "none", cursor: "pointer", color: V, padding: "4px" },
                    "data-fg-ccit14": ":0:/src/app/components/Layout.tsx:106:11:3490:330:e:button:x",
                    children: e ? /* @__PURE__ */ n(r, { _fgT: Al, _fgS: "ccit16", _fgB: 1783946043254, size: 22, "data-fg-ccit16": ":0:node_modules/lucide-react:112:25:3763:15:e:X::::::TvS" }) : /* @__PURE__ */ n(r, { _fgT: wl, _fgS: "ccit17", _fgB: 1783946043254, size: 22, "data-fg-ccit17": ":0:node_modules/lucide-react:112:43:3781:18:e:Menu::::::D5X5" })
                  }
                )
              ]
            }
          ),
          e && /* @__PURE__ */ b(
            r,
            {
              _fgT: "div",
              _fgS: "ccit20",
              _fgB: 1783946043254,
              style: {
                backgroundColor: W,
                borderTop: "1px solid rgba(13,27,42,0.08)",
                padding: "24px 28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "18px"
              },
              "data-fg-ccit20": ":0:/src/app/components/Layout.tsx:118:11:3900:1389:e:div:xte",
              children: [
                da.map(({ label: i, to: o }) => /* @__PURE__ */ n(
                  r,
                  {
                    _fgT: ha,
                    _fgS: "ccit22",
                    _fgB: 1783946043254,
                    to: o,
                    style: ({ isActive: l }) => ({
                      fontFamily: f,
                      fontSize: "15px",
                      color: l ? z : V,
                      textDecoration: "none",
                      fontWeight: l ? 600 : 400
                    }),
                    "data-fg-ccit22": ":0:node_modules/react-router:129:15:4249:402:e:NavLink:x:::::rcG",
                    children: i
                  },
                  o
                )),
                /* @__PURE__ */ n(
                  r,
                  {
                    _fgT: Se,
                    _fgS: "ccit24",
                    _fgB: 1783946043254,
                    to: "/partnership-support",
                    style: {
                      marginTop: "8px",
                      alignSelf: "flex-start",
                      fontFamily: f,
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: W,
                      backgroundColor: z,
                      textDecoration: "none",
                      padding: "12px 28px",
                      borderRadius: "4px"
                    },
                    "data-fg-ccit24": ":0:node_modules/react-router:143:13:4680:592:e:Link:t:::::B0gV",
                    children: "Get Involved"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "main", _fgS: "ccit27", _fgB: 1783946043254, style: { paddingTop: "68px" }, "data-fg-ccit27": ":0:/src/app/components/Layout.tsx:167:7:5351:70:e:main:e", children: /* @__PURE__ */ n(Po, { "data-fg-ccit28": ":0:node_modules/react-router:168:9:5397:10:e:Outlet::::::1VG" }) }),
    /* @__PURE__ */ b(r, { _fgT: "footer", _fgS: "ccit30", _fgB: 1783946043254, style: { backgroundColor: V, padding: "64px 0 48px" }, "data-fg-ccit30": ":0:/src/app/components/Layout.tsx:172:7:5456:3343:e:footer:ete", children: [
      /* @__PURE__ */ b(
        r,
        {
          _fgT: "div",
          _fgS: "ccit31",
          _fgB: 1783946043254,
          style: {
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "48px"
          },
          "data-fg-ccit31": ":0:/src/app/components/Layout.tsx:173:9:5531:2489:e:div:xtetxte",
          children: [
            /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ccit33", _fgB: 1783946043254, style: { maxWidth: "300px" }, "data-fg-ccit33": ":0:/src/app/components/Layout.tsx:185:11:5834:1044:e:div:etetete", children: [
              /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "ccit34", _fgB: 1783946043254, style: { marginBottom: "20px" }, "data-fg-ccit34": ":0:/src/app/components/Layout.tsx:186:13:5882:289:e:div:e", children: /* @__PURE__ */ n(
                r,
                {
                  _fgT: ma,
                  _fgS: "ccit35",
                  _fgB: 1783946043254,
                  src: vr,
                  alt: "TBI Redefined",
                  style: { height: "40px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" },
                  "data-fg-ccit35": ":0:/src/app/components/Layout.tsx:187:15:5935:217:e:ImageWithFallback::::::DGky"
                }
              ) }),
              /* @__PURE__ */ n(
                r,
                {
                  _fgT: "p",
                  _fgS: "ccit36",
                  _fgB: 1783946043254,
                  style: {
                    fontFamily: f,
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                    marginBottom: "20px"
                  },
                  "data-fg-ccit36": ":0:/src/app/components/Layout.tsx:193:13:6184:361:e:p:t",
                  children: "Empowering Communities through Comprehensive TBI Education and School Partnerships."
                }
              ),
              /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ccit38", _fgB: 1783946043254, style: { fontFamily: f, fontSize: "13px", color: "rgba(255,255,255,0.45)", marginBottom: "4px" }, "data-fg-ccit38": ":0:/src/app/components/Layout.tsx:204:13:6558:161:e:p:t", children: "contact@tbiredefined.org" }),
              /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ccit40", _fgB: 1783946043254, style: { fontFamily: f, fontSize: "13px", color: "rgba(255,255,255,0.45)" }, "data-fg-ccit40": ":0:/src/app/components/Layout.tsx:207:13:6732:129:e:p:t", children: "United States" })
            ] }),
            /* @__PURE__ */ b(
              r,
              {
                _fgT: "nav",
                _fgS: "ccit43",
                _fgB: 1783946043254,
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px 40px",
                  alignContent: "flex-start"
                },
                "data-fg-ccit43": ":0:/src/app/components/Layout.tsx:213:11:6918:1087:e:nav:xte",
                children: [
                  da.map(({ label: i, to: o }) => /* @__PURE__ */ n(
                    r,
                    {
                      _fgT: Se,
                      _fgS: "ccit45",
                      _fgB: 1783946043254,
                      to: o,
                      style: {
                        fontFamily: f,
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        whiteSpace: "nowrap"
                      },
                      "data-fg-ccit45": ":0:node_modules/react-router:222:15:7170:401:e:Link:x:::::B0gV",
                      children: i
                    },
                    o
                  )),
                  /* @__PURE__ */ n(
                    r,
                    {
                      _fgT: Se,
                      _fgS: "ccit47",
                      _fgB: 1783946043254,
                      to: "/partnership-support",
                      style: {
                        fontFamily: f,
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        whiteSpace: "nowrap"
                      },
                      "data-fg-ccit47": ":0:node_modules/react-router:237:13:7600:388:e:Link:t:::::B0gV",
                      children: "Partnership & Support"
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ b(
        r,
        {
          _fgT: "div",
          _fgS: "ccit49",
          _fgB: 1783946043254,
          style: {
            maxWidth: "1440px",
            margin: "48px auto 0",
            padding: "24px 48px 0",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px"
          },
          "data-fg-ccit49": ":0:/src/app/components/Layout.tsx:253:9:8030:753:e:div:ete",
          children: [
            /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ccit50", _fgB: 1783946043254, style: { fontFamily: f, fontSize: "12px", color: "rgba(255,255,255,0.25)" }, "data-fg-ccit50": ":0:/src/app/components/Layout.tsx:266:11:8412:148:e:p:t", children: "© 2026 TBI Redefined. United States." }),
            /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ccit52", _fgB: 1783946043254, style: { fontFamily: f, fontSize: "12px", fontStyle: "italic", color: "rgba(255,255,255,0.2)" }, "data-fg-ccit52": ":0:/src/app/components/Layout.tsx:269:11:8571:197:e:p:t", children: "Where compassion meets curiosity — and true understanding begins." })
          ]
        }
      )
    ] })
  ] });
}
function qe({ label: e, title: t, subtitle: a }) {
  return /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "ccit54", _fgB: 1783946043254, _fgD: !0, style: { backgroundColor: V, padding: "80px 0 72px" }, "data-fg-ccit54": ":0:/src/app/components/Layout.tsx:287:5:9056:1214:e:section:e:1", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ccit55", _fgB: 1783946043254, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-ccit55": ":0:/src/app/components/Layout.tsx:288:7:9130:1125:e:div:etetxte", children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: "p",
        _fgS: "ccit56",
        _fgB: 1783946043254,
        style: {
          fontFamily: f,
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: z,
          marginBottom: "20px"
        },
        "data-fg-ccit56": ":0:/src/app/components/Layout.tsx:289:9:9211:301:e:p:x",
        children: e
      }
    ),
    /* @__PURE__ */ n(
      r,
      {
        _fgT: "h1",
        _fgS: "ccit58",
        _fgB: 1783946043254,
        style: {
          fontFamily: Q,
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 700,
          color: W,
          lineHeight: 1.18,
          marginBottom: a ? "24px" : 0
        },
        "data-fg-ccit58": ":0:/src/app/components/Layout.tsx:302:9:9521:293:e:h1:x",
        children: t
      }
    ),
    a && /* @__PURE__ */ n(
      r,
      {
        _fgT: "p",
        _fgS: "ccit61",
        _fgB: 1783946043254,
        style: {
          fontFamily: f,
          fontSize: "clamp(16px, 1.6vw, 19px)",
          color: "rgba(255,255,255,0.68)",
          lineHeight: 1.75,
          marginTop: "8px"
        },
        "data-fg-ccit61": ":0:/src/app/components/Layout.tsx:315:11:9848:284:e:p:x",
        children: a
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "ccit63", _fgB: 1783946043254, style: { width: "36px", height: "2px", backgroundColor: Y, marginTop: "32px" }, "data-fg-ccit63": ":0:/src/app/components/Layout.tsx:327:9:10152:90:e:div" })
  ] }) });
}
const Rl = "/_components/v2/19ec451349b246ec2f5d9222a065bee5efff30b4/StockCake-Mystical_Neural_Network-1098885-standard.020ad741.jpg";
function Cl() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ b(r, { _fgT: "section", _fgS: "dag2", _fgB: 1783946043268, style: { position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }, "data-fg-dag2": ":0:/src/app/pages/Home.tsx:10:7:340:1916:e:section:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dag3", _fgB: 1783946043268, style: { position: "absolute", inset: 0, backgroundImage: `url(${Rl})`, backgroundSize: "cover", backgroundPosition: "center 30%" }, "data-fg-dag3": ":0:/src/app/pages/Home.tsx:11:9:496:147:e:div" }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dag4", _fgB: 1783946043268, style: { position: "absolute", inset: 0, backgroundColor: "rgba(13,27,42,0.80)" }, "data-fg-dag4": ":0:/src/app/pages/Home.tsx:12:9:652:90:e:div" }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dag5", _fgB: 1783946043268, style: { position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to bottom, transparent, rgba(13,27,42,0.55))" }, "data-fg-dag5": ":0:/src/app/pages/Home.tsx:13:9:751:163:e:div" }),
      /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dag6", _fgB: 1783946043268, style: { position: "relative", zIndex: 10, maxWidth: "860px", margin: "0 auto", padding: "120px 48px 100px", textAlign: "center" }, "data-fg-dag6": ":0:/src/app/pages/Home.tsx:15:9:924:1315:e:div:etetetete", children: [
        /* @__PURE__ */ n(r, { _fgT: "h1", _fgS: "dag7", _fgB: 1783946043268, style: { fontFamily: Q, fontSize: "clamp(52px, 6.5vw, 72px)", fontWeight: 700, color: W, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.1, marginBottom: "32px" }, "data-fg-dag7": ":0:/src/app/pages/Home.tsx:16:11:1072:240:e:h1:t", children: "TBI Redefined" }),
        /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dag9", _fgB: 1783946043268, style: { width: "48px", height: "2px", backgroundColor: Y, margin: "0 auto 32px" }, "data-fg-dag9": ":0:/src/app/pages/Home.tsx:19:11:1323:94:e:div" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag10", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "clamp(18px, 2.2vw, 24px)", fontWeight: 400, color: "rgba(255,255,255,0.82)", lineHeight: 1.55, marginBottom: "28px" }, "data-fg-dag10": ":0:/src/app/pages/Home.tsx:20:11:1428:240:e:p:t", children: "A dynamic bridge between awareness and empowerment." }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag12", _fgB: 1783946043268, style: { fontFamily: Q, fontStyle: "italic", fontSize: "clamp(22px, 2.8vw, 30px)", fontWeight: 400, color: W, lineHeight: 1.5, marginBottom: "36px" }, "data-fg-dag12": ":0:/src/app/pages/Home.tsx:23:11:1679:258:e:p:t", children: "Where compassion meets curiosity — and true understanding begins." }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag14", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 400, color: "rgba(255,255,255,0.68)", lineHeight: 1.75, marginBottom: 0 }, "data-fg-dag14": ":0:/src/app/pages/Home.tsx:26:11:1948:276:e:p:s", children: "You're in the right place. This movement sees you, understands you, and stands with you." })
      ] })
    ] }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "dag17", _fgB: 1783946043268, style: { backgroundColor: W, padding: "120px 0 100px" }, "data-fg-dag17": ":0:/src/app/pages/Home.tsx:33:7:2292:870:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dag18", _fgB: 1783946043268, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-dag18": ":0:/src/app/pages/Home.tsx:34:9:2371:774:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag19", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-dag19": ":0:/src/app/pages/Home.tsx:35:11:2454:171:e:p:t", children: "The Problem" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "dag21", _fgB: 1783946043268, style: { fontFamily: Q, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: V, lineHeight: 1.18, marginBottom: "36px" }, "data-fg-dag21": ":0:/src/app/pages/Home.tsx:36:11:2636:213:e:h2:t", children: "The world has never truly understood TBI." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag23", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-dag23": ":0:/src/app/pages/Home.tsx:39:11:2860:270:e:p:t", children: "For generations, survivors have lived without the awareness, clarity, guidance, or recognition they deserved — often navigating invisible challenges alone." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "dag26", _fgB: 1783946043268, style: { backgroundColor: oe, padding: "100px 0" }, "data-fg-dag26": ":0:/src/app/pages/Home.tsx:46:7:3199:1131:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dag27", _fgB: 1783946043268, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-dag27": ":0:/src/app/pages/Home.tsx:47:9:3275:1038:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag28", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-dag28": ":0:/src/app/pages/Home.tsx:48:11:3358:172:e:p:t", children: "The Solution" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "dag30", _fgB: 1783946043268, style: { fontFamily: Q, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: V, lineHeight: 1.18, marginBottom: "36px" }, "data-fg-dag30": ":0:/src/app/pages/Home.tsx:49:11:3541:221:e:h2:t", children: "This movement exists to change that — decisively." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag32", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-dag32": ":0:/src/app/pages/Home.tsx:52:11:3773:275:e:p:t", children: "TBI Redefined brings emotional intelligence, cognitive clarity, and trauma-informed understanding to survivors, families, and communities." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag34", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-dag34": ":0:/src/app/pages/Home.tsx:55:11:4059:239:e:p:t", children: "We create the learning experiences, tools, and awareness needed to help people rebuild confidence, connection, and identity." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "dag37", _fgB: 1783946043268, style: { backgroundColor: W, padding: "100px 0 90px" }, "data-fg-dag37": ":0:/src/app/pages/Home.tsx:62:7:4365:892:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dag38", _fgB: 1783946043268, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-dag38": ":0:/src/app/pages/Home.tsx:63:9:4443:797:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag39", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-dag39": ":0:/src/app/pages/Home.tsx:64:11:4526:170:e:p:t", children: "The Impact" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "dag41", _fgB: 1783946043268, style: { fontFamily: Q, fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: V, lineHeight: 1.18, marginBottom: "36px" }, "data-fg-dag41": ":0:/src/app/pages/Home.tsx:65:11:4707:205:e:h2:t", children: "Impact begins with understanding." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag43", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-dag43": ":0:/src/app/pages/Home.tsx:68:11:4923:302:e:p:t", children: "When people learn what TBI truly is — and how it affects thinking, emotion, and daily life — families become steadier, communities become more supportive, and survivors finally feel seen." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "dag46", _fgB: 1783946043268, style: { backgroundColor: oe, padding: "110px 0" }, "data-fg-dag46": ":0:/src/app/pages/Home.tsx:75:7:5289:1249:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dag47", _fgB: 1783946043268, style: { maxWidth: "640px", margin: "0 auto", padding: "0 48px", textAlign: "center" }, "data-fg-dag47": ":0:/src/app/pages/Home.tsx:76:9:5365:1156:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag48", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-dag48": ":0:/src/app/pages/Home.tsx:77:11:5469:171:e:p:t", children: "Take Action" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "dag50", _fgB: 1783946043268, style: { fontFamily: Q, fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, color: V, lineHeight: 1.22, marginBottom: "24px" }, "data-fg-dag50": ":0:/src/app/pages/Home.tsx:78:11:5651:213:e:h2:t", children: "Help Prevent the Next Avoidable Tragedy" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag52", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "clamp(17px, 1.8vw, 20px)", color: "rgba(26,26,26,0.72)", lineHeight: 1.8, marginBottom: "52px" }, "data-fg-dag52": ":0:/src/app/pages/Home.tsx:81:11:5875:252:e:p:t", children: "Your support brings clarity, compassion, and empowerment to people who need it most." }),
      /* @__PURE__ */ b(
        r,
        {
          _fgT: Se,
          _fgS: "dag54",
          _fgB: 1783946043268,
          to: "/partnership-support",
          style: { display: "inline-flex", alignItems: "center", gap: "12px", fontFamily: f, fontSize: "20px", fontWeight: 700, color: W, backgroundColor: z, textDecoration: "none", padding: "18px 48px", borderRadius: "8px" },
          "data-fg-dag54": ":0:node_modules/react-router:84:11:6138:368:e:Link:te:::::B0gV",
          children: [
            "Join the Movement ",
            /* @__PURE__ */ n(r, { _fgT: Tl, _fgS: "dag56", _fgB: 1783946043268, size: 18, "data-fg-dag56": ":0:node_modules/lucide-react:88:31:6464:24:e:ArrowRight::::::s5N" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "dag58", _fgB: 1783946043268, style: { backgroundColor: W, padding: "100px 0 120px" }, "data-fg-dag58": ":0:/src/app/pages/Home.tsx:94:7:6574:889:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dag59", _fgB: 1783946043268, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-dag59": ":0:/src/app/pages/Home.tsx:95:9:6653:793:e:div:ete", children: [
      /* @__PURE__ */ n(r, { _fgT: "h3", _fgS: "dag60", _fgB: 1783946043268, style: { fontFamily: f, fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 600, color: V, lineHeight: 1.35, marginBottom: "36px" }, "data-fg-dag60": ":0:/src/app/pages/Home.tsx:96:11:6736:197:e:h3:t", children: "A message from our founder" }),
      /* @__PURE__ */ n(r, { _fgT: "blockquote", _fgS: "dag62", _fgB: 1783946043268, style: { margin: 0, paddingLeft: "28px", borderLeft: `3px solid ${Y}` }, "data-fg-dag62": ":0:/src/app/pages/Home.tsx:99:11:6944:487:e:blockquote:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dag63", _fgB: 1783946043268, style: { fontFamily: Q, fontStyle: "italic", fontSize: "clamp(18px, 2vw, 24px)", color: "#1A1A1A", lineHeight: 1.9 }, "data-fg-dag63": ":0:/src/app/pages/Home.tsx:100:13:7045:362:e:p:t", children: "TBI Redefined was created to bring humanity, clarity, and emotional intelligence to a space that has been misunderstood for far too long. This movement is built for survivors — and shaped by compassion." }) })
    ] }) })
  ] });
}
const El = [
  "Why the brain becomes overwhelmed",
  "Why sensory overload is the core lived experience",
  "Why everyday tasks suddenly feel impossible",
  'Why the world feels "too much"',
  "How to support someone living with these challenges",
  "How to communicate with clarity, empathy, and precision"
], Fl = [
  "Emotional intelligence",
  "Cognitive accessibility",
  "Modern scientific understanding",
  "Real-world lived experience",
  "Dignity, clarity, and compassion"
], Ll = [
  "human",
  "modern",
  "emotionally intelligent",
  "cognitively accessible",
  "scientifically grounded",
  "designed for real life"
];
function ql() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "bvjv1",
        _fgB: 1783946043304,
        label: "The Learning Experience",
        title: "A guided, human-centered journey into the lived reality of TBI.",
        subtitle: "Across the arc of human history, TBI survivors have lived in a world that never understood their reality — a world without the recognized awareness, clarity, guidance, or recognition they needed.",
        "data-fg-bvjv1": ":0:/src/app/pages/LearningExperience.tsx:33:7:904:355:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "bvjv3", _fgB: 1783946043304, style: { backgroundColor: W, padding: "80px 0 72px" }, "data-fg-bvjv3": ":0:/src/app/pages/LearningExperience.tsx:40:7:1293:722:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "bvjv4", _fgB: 1783946043304, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-bvjv4": ":0:/src/app/pages/LearningExperience.tsx:41:9:1370:628:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv5", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "12px" }, "data-fg-bvjv5": ":0:/src/app/pages/LearningExperience.tsx:42:11:1453:198:e:p:s", children: "You're in the right place. This movement understands you." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv7", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-bvjv7": ":0:/src/app/pages/LearningExperience.tsx:45:11:1662:220:e:p:t", children: "And we're here to change all of this with clarity that brings acknowledgment, understanding, and support." }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "bvjv9", _fgB: 1783946043304, style: { width: "36px", height: "2px", backgroundColor: Y, marginTop: "40px" }, "data-fg-bvjv9": ":0:/src/app/pages/LearningExperience.tsx:48:11:1893:90:e:div" })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "bvjv11", _fgB: 1783946043304, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-bvjv11": ":0:/src/app/pages/LearningExperience.tsx:53:7:2054:1584:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "bvjv12", _fgB: 1783946043304, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-bvjv12": ":0:/src/app/pages/LearningExperience.tsx:54:9:2129:1492:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv13", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-bvjv13": ":0:/src/app/pages/LearningExperience.tsx:55:11:2212:171:e:p:t", children: "The Problem" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv15", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-bvjv15": ":0:/src/app/pages/LearningExperience.tsx:56:11:2394:226:e:p:t", children: "For decades, the world has been taught an incomplete story about traumatic brain injury —" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "bvjv17", _fgB: 1783946043304, style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "18px" }, "data-fg-bvjv17": ":0:/src/app/pages/LearningExperience.tsx:59:11:2631:874:e:ul:x", children: [
        "a story that looks like it ends in the ER, even though the real story is only beginning.",
        "a story that ignores the long-term neurological reality.",
        "a story that leaves survivors and families without clarity, guidance, acknowledgement, or recognition."
      ].map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "bvjv19", _fgB: 1783946043304, style: { display: "flex", gap: "16px", alignItems: "flex-start" }, "data-fg-bvjv19": ":0:/src/app/pages/LearningExperience.tsx:65:15:3106:367:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "bvjv20", _fgB: 1783946043304, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0, marginTop: "10px" }, "data-fg-bvjv20": ":0:/src/app/pages/LearningExperience.tsx:66:17:3202:126:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv21", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-bvjv21": ":0:/src/app/pages/LearningExperience.tsx:67:17:3345:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "bvjv23", _fgB: 1783946043304, style: { width: "36px", height: "2px", backgroundColor: Y, marginTop: "40px" }, "data-fg-bvjv23": ":0:/src/app/pages/LearningExperience.tsx:71:11:3516:90:e:div" })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "bvjv25", _fgB: 1783946043304, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-bvjv25": ":0:/src/app/pages/LearningExperience.tsx:76:7:3668:1403:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "bvjv26", _fgB: 1783946043304, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-bvjv26": ":0:/src/app/pages/LearningExperience.tsx:77:9:3740:1314:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv27", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "32px" }, "data-fg-bvjv27": ":0:/src/app/pages/LearningExperience.tsx:78:11:3823:245:e:p:t", children: "This Learning Experience exists to rewrite that story with acknowledgement, dignity, accuracy, and humanity." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv29", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "32px" }, "data-fg-bvjv29": ":0:/src/app/pages/LearningExperience.tsx:81:11:4079:287:e:p:t", children: "It is designed for survivors, families, educators, clinicians, and anyone who wants to understand TBI in a way that is clear, compassionate, and true." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv31", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-bvjv31": ":0:/src/app/pages/LearningExperience.tsx:84:11:4377:342:e:p:t", children: "Most people think TBI is about memory, headaches, or mood. But the central lived experience is something deeper: A neurological bottleneck that makes the world feel too fast, too loud, too bright, too demanding, too everything." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv33", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginTop: "28px" }, "data-fg-bvjv33": ":0:/src/app/pages/LearningExperience.tsx:87:11:4730:309:e:p:t", children: "This Learning Experience exists to translate that reality into human language — so survivors feel seen, and supporters finally understand what's happening beneath the surface." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "bvjv36", _fgB: 1783946043304, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-bvjv36": ":0:/src/app/pages/LearningExperience.tsx:94:7:5107:1653:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "bvjv37", _fgB: 1783946043304, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-bvjv37": ":0:/src/app/pages/LearningExperience.tsx:95:9:5182:1561:e:div:etetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv38", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-bvjv38": ":0:/src/app/pages/LearningExperience.tsx:96:11:5265:195:e:p:t", children: "Why This Learning Experience Exists" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "bvjv40", _fgB: 1783946043304, style: { fontFamily: Q, fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, color: V, lineHeight: 1.2, marginBottom: "40px" }, "data-fg-bvjv40": ":0:/src/app/pages/LearningExperience.tsx:97:11:5471:192:e:h2:t", children: "What You Will Learn" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv42", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "36px" }, "data-fg-bvjv42": ":0:/src/app/pages/LearningExperience.tsx:100:11:5674:185:e:p:t", children: "This journey gives you a clear understanding of:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "bvjv44", _fgB: 1783946043304, style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }, "data-fg-bvjv44": ":0:/src/app/pages/LearningExperience.tsx:103:11:5870:575:e:ul:x", children: El.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "bvjv46", _fgB: 1783946043304, style: { display: "flex", gap: "16px", alignItems: "flex-start" }, "data-fg-bvjv46": ":0:/src/app/pages/LearningExperience.tsx:105:15:6046:367:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "bvjv47", _fgB: 1783946043304, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0, marginTop: "10px" }, "data-fg-bvjv47": ":0:/src/app/pages/LearningExperience.tsx:106:17:6142:126:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv48", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-bvjv48": ":0:/src/app/pages/LearningExperience.tsx:107:17:6285:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv50", _fgB: 1783946043304, style: { fontFamily: Q, fontStyle: "italic", fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginTop: "40px" }, "data-fg-bvjv50": ":0:/src/app/pages/LearningExperience.tsx:111:11:6456:272:e:p:t", children: "This is not medical advice. This is human understanding — accessible, dignified, and grounded in lived experience." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "bvjv53", _fgB: 1783946043304, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-bvjv53": ":0:/src/app/pages/LearningExperience.tsx:118:7:6806:2572:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "bvjv54", _fgB: 1783946043304, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-bvjv54": ":0:/src/app/pages/LearningExperience.tsx:119:9:6877:2484:e:div:etetetetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv55", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-bvjv55": ":0:/src/app/pages/LearningExperience.tsx:120:11:6960:205:e:p:t", children: "What Makes This Learning Experience Different" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv57", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "16px" }, "data-fg-bvjv57": ":0:/src/app/pages/LearningExperience.tsx:121:11:7176:158:e:p:t", children: "This is not a clinical lecture." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv59", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "16px" }, "data-fg-bvjv59": ":0:/src/app/pages/LearningExperience.tsx:122:11:7345:154:e:p:t", children: "This is not a symptom list." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv61", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "36px" }, "data-fg-bvjv61": ":0:/src/app/pages/LearningExperience.tsx:123:11:7510:158:e:p:t", children: "This is not a medical document." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv63", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "32px" }, "data-fg-bvjv63": ":0:/src/app/pages/LearningExperience.tsx:124:11:7679:216:e:p:t", children: "This is a human translation of the lived experience — built with:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "bvjv65", _fgB: 1783946043304, style: { listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "14px" }, "data-fg-bvjv65": ":0:/src/app/pages/LearningExperience.tsx:127:11:7906:579:e:ul:x", children: Fl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "bvjv67", _fgB: 1783946043304, style: { display: "flex", gap: "16px", alignItems: "center" }, "data-fg-bvjv67": ":0:/src/app/pages/LearningExperience.tsx:129:15:8095:358:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "bvjv68", _fgB: 1783946043304, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: Y, flexShrink: 0 }, "data-fg-bvjv68": ":0:/src/app/pages/LearningExperience.tsx:130:17:8187:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv69", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, margin: 0 }, "data-fg-bvjv69": ":0:/src/app/pages/LearningExperience.tsx:131:17:8311:122:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv71", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "36px" }, "data-fg-bvjv71": ":0:/src/app/pages/LearningExperience.tsx:135:11:8496:253:e:p:t", children: "It is designed to help people finally understand what survivors have been trying to explain for years." }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "bvjv73", _fgB: 1783946043304, style: { display: "flex", flexWrap: "wrap", gap: "12px" }, "data-fg-bvjv73": ":0:/src/app/pages/LearningExperience.tsx:138:11:8760:586:e:div:x", children: Ll.map((e) => /* @__PURE__ */ n(
        r,
        {
          _fgT: "span",
          _fgS: "bvjv75",
          _fgB: 1783946043304,
          style: {
            fontFamily: f,
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: z,
            border: `1px solid ${z}`,
            padding: "6px 14px",
            borderRadius: "2px"
          },
          "data-fg-bvjv75": ":0:/src/app/pages/LearningExperience.tsx:140:15:8875:438:e:span:x",
          children: e
        },
        e
      )) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "bvjv78", _fgB: 1783946043304, style: { backgroundColor: W, padding: "56px 0" }, "data-fg-bvjv78": ":0:/src/app/pages/LearningExperience.tsx:161:7:9411:629:e:section:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "bvjv79", _fgB: 1783946043304, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-bvjv79": ":0:/src/app/pages/LearningExperience.tsx:162:9:9483:540:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bvjv80", _fgB: 1783946043304, style: { fontFamily: f, fontSize: "13px", color: "rgba(26,26,26,0.5)", lineHeight: 1.75, borderLeft: `3px solid ${Y}`, paddingLeft: "20px" }, "data-fg-bvjv80": ":0:/src/app/pages/LearningExperience.tsx:163:11:9566:442:e:p:t", children: "All educational content on this site is grounded in current scientific understanding of brain function, cognitive load, and sensory processing. This information is provided for awareness and learning purposes only and should not be interpreted as medical advice." }) }) })
  ] });
}
const Pl = [
  "cognitive processing",
  "emotional regulation",
  "sensory integration",
  "communication",
  "memory",
  "executive function",
  "identity and self-perception"
], Dl = [
  "Brain fog in the best-case scenario",
  "Brain on fire in the worst-case scenario",
  "Difficulty processing information properly",
  "Memory lapses",
  "Sensory overload",
  "Emotional volatility"
], Ol = [
  "irritability",
  "confusion",
  "emotional flooding",
  "shutdown",
  "withdrawal",
  '"brain on fire" episodes',
  "exhaustion"
], Hl = [
  "unmotivated",
  "inconsistent",
  "emotional",
  "forgetful",
  "withdrawn",
  '"not trying hard enough"'
], Wl = [
  "how survivors see themselves",
  "how they relate to others",
  "how they manage emotions",
  "how they interpret the world",
  "how they navigate daily life"
], jl = [
  "conflict",
  "misinterpretation",
  "emotional distance",
  "unnecessary suffering"
];
function Ml() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "cdaq1",
        _fgB: 1783946043286,
        label: "What TBI Really Is",
        title: "Traumatic Brain Injury is one of the most misunderstood conditions in healthcare and society.",
        subtitle: "It is not a momentary event — it is a long-term neurological condition that reshapes how a person experiences themselves and the world.",
        "data-fg-cdaq1": ":0:/src/app/pages/TruthAboutTBI.tsx:60:7:1262:320:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq3", _fgB: 1783946043286, style: { backgroundColor: W, padding: "80px 0 72px" }, "data-fg-cdaq3": ":0:/src/app/pages/TruthAboutTBI.tsx:67:7:1625:468:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq4", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq4": ":0:/src/app/pages/TruthAboutTBI.tsx:68:9:1702:374:e:div:ete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq5", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-cdaq5": ":0:/src/app/pages/TruthAboutTBI.tsx:69:11:1785:175:e:p:t", children: "Understanding TBI begins with understanding its true nature." }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "cdaq7", _fgB: 1783946043286, style: { width: "36px", height: "2px", backgroundColor: Y, marginTop: "40px" }, "data-fg-cdaq7": ":0:/src/app/pages/TruthAboutTBI.tsx:72:11:1971:90:e:div" })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq9", _fgB: 1783946043286, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-cdaq9": ":0:/src/app/pages/TruthAboutTBI.tsx:77:7:2137:1430:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq10", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq10": ":0:/src/app/pages/TruthAboutTBI.tsx:78:9:2212:1338:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq11", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq11": ":0:/src/app/pages/TruthAboutTBI.tsx:79:11:2295:183:e:p:t", children: "A Whole-Brain Condition" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq13", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "36px" }, "data-fg-cdaq13": ":0:/src/app/pages/TruthAboutTBI.tsx:80:11:2489:259:e:p:t", children: "TBI affects the entire brain, not just the area of impact. Because the brain is an interconnected system, injury disrupts:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "cdaq15", _fgB: 1783946043286, style: { listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "14px" }, "data-fg-cdaq15": ":0:/src/app/pages/TruthAboutTBI.tsx:83:11:2759:560:e:ul:x", children: Pl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "cdaq17", _fgB: 1783946043286, style: { display: "flex", gap: "16px", alignItems: "center" }, "data-fg-cdaq17": ":0:/src/app/pages/TruthAboutTBI.tsx:85:15:2943:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "cdaq18", _fgB: 1783946043286, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-cdaq18": ":0:/src/app/pages/TruthAboutTBI.tsx:86:17:3035:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq19", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-cdaq19": ":0:/src/app/pages/TruthAboutTBI.tsx:87:17:3159:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq21", _fgB: 1783946043286, style: { fontFamily: Q, fontStyle: "italic", fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-cdaq21": ":0:/src/app/pages/TruthAboutTBI.tsx:91:11:3330:205:e:p:t", children: "These changes are real, measurable, and often invisible to others." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq24", _fgB: 1783946043286, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-cdaq24": ":0:/src/app/pages/TruthAboutTBI.tsx:98:7:3606:1717:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq25", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq25": ":0:/src/app/pages/TruthAboutTBI.tsx:99:9:3678:1628:e:div:etetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq26", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq26": ":0:/src/app/pages/TruthAboutTBI.tsx:100:11:3761:180:e:p:t", children: "The Symptom Spectrum" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq28", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "36px" }, "data-fg-cdaq28": ":0:/src/app/pages/TruthAboutTBI.tsx:101:11:3952:221:e:p:t", children: "Symptoms can echo for years — sometimes quietly, sometimes intensely — ranging from:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "cdaq30", _fgB: 1783946043286, style: { listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "14px" }, "data-fg-cdaq30": ":0:/src/app/pages/TruthAboutTBI.tsx:104:11:4184:557:e:ul:x", children: Dl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "cdaq32", _fgB: 1783946043286, style: { display: "flex", gap: "16px", alignItems: "center" }, "data-fg-cdaq32": ":0:/src/app/pages/TruthAboutTBI.tsx:106:15:4365:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "cdaq33", _fgB: 1783946043286, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-cdaq33": ":0:/src/app/pages/TruthAboutTBI.tsx:107:17:4457:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq34", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-cdaq34": ":0:/src/app/pages/TruthAboutTBI.tsx:108:17:4581:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq36", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-cdaq36": ":0:/src/app/pages/TruthAboutTBI.tsx:112:11:4752:266:e:p:t", children: "This spectrum helps people understand that TBI is not one fixed state — it fluctuates depending on stress, fatigue, environment, and neurological load." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq38", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginTop: "28px" }, "data-fg-cdaq38": ":0:/src/app/pages/TruthAboutTBI.tsx:115:11:5029:262:e:p:t", children: "NINDS research confirms that these symptoms can persist long after the initial injury — sometimes quietly, sometimes profoundly." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq41", _fgB: 1783946043286, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-cdaq41": ":0:/src/app/pages/TruthAboutTBI.tsx:122:7:5362:3450:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq42", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq42": ":0:/src/app/pages/TruthAboutTBI.tsx:123:9:5433:3362:e:div:etetetetetetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq43", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq43": ":0:/src/app/pages/TruthAboutTBI.tsx:124:11:5516:205:e:p:t", children: "Sensory Overload: The Neurological Bottleneck" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "cdaq45", _fgB: 1783946043286, style: { fontFamily: Q, fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, color: W, lineHeight: 1.2, marginBottom: "36px" }, "data-fg-cdaq45": ":0:/src/app/pages/TruthAboutTBI.tsx:125:11:5732:268:e:h2:t", children: "Sensory overload is one of the most overwhelming — and least understood — consequences of TBI." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq47", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq47": ":0:/src/app/pages/TruthAboutTBI.tsx:128:11:6011:415:e:p:s", children: "It's what happens when the brain is hit with more information than it can possibly handle, all at once, with no way to filter or slow it down. It's the neurological equivalent of a traffic jam at rush hour — everything rushing in, nothing able to move through." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq49", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq49": ":0:/src/app/pages/TruthAboutTBI.tsx:131:11:6437:241:e:p:s", children: "A healthy brain automatically prioritizes sensory input. A post-TBI brain often can't." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq51", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq51": ":0:/src/app/pages/TruthAboutTBI.tsx:134:11:6689:259:e:p:t", children: "Everything comes in at full volume: sounds, lights, movement, conversations, visual clutter, emotional cues." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq53", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq53": ":0:/src/app/pages/TruthAboutTBI.tsx:137:11:6959:283:e:p:t", children: "The result is a neurological bottleneck — too much information trying to move through a system that can no longer regulate the flow." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq55", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq55": ":0:/src/app/pages/TruthAboutTBI.tsx:140:11:7253:195:e:p:t", children: "When this happens, survivors may experience:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "cdaq57", _fgB: 1783946043286, style: { listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-cdaq57": ":0:/src/app/pages/TruthAboutTBI.tsx:143:11:7459:577:e:ul:x", children: Ol.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "cdaq59", _fgB: 1783946043286, style: { display: "flex", gap: "16px", alignItems: "center" }, "data-fg-cdaq59": ":0:/src/app/pages/TruthAboutTBI.tsx:145:15:7646:358:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "cdaq60", _fgB: 1783946043286, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: Y, flexShrink: 0 }, "data-fg-cdaq60": ":0:/src/app/pages/TruthAboutTBI.tsx:146:17:7738:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq61", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, margin: 0 }, "data-fg-cdaq61": ":0:/src/app/pages/TruthAboutTBI.tsx:147:17:7862:122:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "blockquote", _fgS: "cdaq63", _fgB: 1783946043286, style: { margin: 0, paddingLeft: "24px", borderLeft: `3px solid ${Y}` }, "data-fg-cdaq63": ":0:/src/app/pages/TruthAboutTBI.tsx:151:11:8047:420:e:blockquote:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq64", _fgB: 1783946043286, style: { fontFamily: Q, fontStyle: "italic", fontSize: "clamp(18px, 2vw, 22px)", color: W, lineHeight: 1.85 }, "data-fg-cdaq64": ":0:/src/app/pages/TruthAboutTBI.tsx:152:13:8148:295:e:p:s", children: "This isn't an overreaction. It isn't sensitivity. It isn't a personality trait. It's the brain trying to protect itself from overload." }) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq66", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginTop: "36px" }, "data-fg-cdaq66": ":0:/src/app/pages/TruthAboutTBI.tsx:156:11:8478:302:e:p:t", children: "Understanding sensory overload changes how people interpret survivor behavior — and opens the door to compassion, pacing, and support that actually helps." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq69", _fgB: 1783946043286, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-cdaq69": ":0:/src/app/pages/TruthAboutTBI.tsx:163:7:8856:1581:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq70", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq70": ":0:/src/app/pages/TruthAboutTBI.tsx:164:9:8931:1489:e:div:etetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq71", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq71": ":0:/src/app/pages/TruthAboutTBI.tsx:165:11:9014:204:e:p:t", children: "Not a Character Issue — A Neurological Shift" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq73", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq73": ":0:/src/app/pages/TruthAboutTBI.tsx:166:11:9229:175:e:p:t", children: "Survivors are often misinterpreted as:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "cdaq75", _fgB: 1783946043286, style: { listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-cdaq75": ":0:/src/app/pages/TruthAboutTBI.tsx:169:11:9415:564:e:ul:x", children: Hl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "cdaq77", _fgB: 1783946043286, style: { display: "flex", gap: "16px", alignItems: "center" }, "data-fg-cdaq77": ":0:/src/app/pages/TruthAboutTBI.tsx:171:15:9603:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "cdaq78", _fgB: 1783946043286, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-cdaq78": ":0:/src/app/pages/TruthAboutTBI.tsx:172:17:9695:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq79", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-cdaq79": ":0:/src/app/pages/TruthAboutTBI.tsx:173:17:9819:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq81", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq81": ":0:/src/app/pages/TruthAboutTBI.tsx:177:11:9990:220:e:p:t", children: "In reality, they are navigating a brain that now processes information differently." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq83", _fgB: 1783946043286, style: { fontFamily: Q, fontStyle: "italic", fontSize: "22px", color: V, lineHeight: 1.7 }, "data-fg-cdaq83": ":0:/src/app/pages/TruthAboutTBI.tsx:180:11:10221:184:e:p:t", children: "TBI is a neurological shift, not a behavioral flaw." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq86", _fgB: 1783946043286, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-cdaq86": ":0:/src/app/pages/TruthAboutTBI.tsx:187:7:10479:2433:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq87", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq87": ":0:/src/app/pages/TruthAboutTBI.tsx:188:9:10551:2344:e:div:etetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq88", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq88": ":0:/src/app/pages/TruthAboutTBI.tsx:189:11:10634:209:e:p:t", children: "A Long-Term Condition, Not a Temporary Disruption" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq90", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "16px" }, "data-fg-cdaq90": ":0:/src/app/pages/TruthAboutTBI.tsx:190:11:10854:197:e:p:t", children: "Many people assume TBI heals like a broken bone. It doesn't." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq92", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq92": ":0:/src/app/pages/TruthAboutTBI.tsx:193:11:11062:320:e:p:s", children: 'While improvement is absolutely possible, the brain does not "reset" to its pre-injury state. Survivors learn, adapt, and rebuild — but they do so with a brain that has changed.' }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq94", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "36px" }, "data-fg-cdaq94": ":0:/src/app/pages/TruthAboutTBI.tsx:196:11:11393:219:e:p:t", children: "Understanding this truth reduces frustration, blame, and unrealistic expectations." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq96", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq96": ":0:/src/app/pages/TruthAboutTBI.tsx:199:11:11623:161:e:p:t", children: "Many survivors describe:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "cdaq98", _fgB: 1783946043286, style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }, "data-fg-cdaq98": ":0:/src/app/pages/TruthAboutTBI.tsx:202:11:11795:1085:e:ul:x", children: [
        "feeling frustrated by attention and focus challenges they can't explain",
        "feeling mentally foggy, as if their thoughts lose fluidity — often worsened by sinus congestion or internal pressure",
        'feeling slowed inside, even when they look "fine" on the outside',
        "feeling on the verge of disconnecting from themselves and from others",
        "feeling quietly marginalized because the world cannot see the invisible injury they carry every day"
      ].map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "cdaq100", _fgB: 1783946043286, style: { display: "flex", gap: "16px", alignItems: "flex-start" }, "data-fg-cdaq100": ":0:/src/app/pages/TruthAboutTBI.tsx:210:15:12481:367:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "cdaq101", _fgB: 1783946043286, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0, marginTop: "10px" }, "data-fg-cdaq101": ":0:/src/app/pages/TruthAboutTBI.tsx:211:17:12577:126:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq102", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-cdaq102": ":0:/src/app/pages/TruthAboutTBI.tsx:212:17:12720:108:e:p:x", children: e })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq105", _fgB: 1783946043286, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-cdaq105": ":0:/src/app/pages/TruthAboutTBI.tsx:220:7:12973:1648:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq106", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq106": ":0:/src/app/pages/TruthAboutTBI.tsx:221:9:13048:1556:e:div:etetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq107", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq107": ":0:/src/app/pages/TruthAboutTBI.tsx:222:11:13131:201:e:p:t", children: "A Lived Experience That Requires Language" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq109", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "16px" }, "data-fg-cdaq109": ":0:/src/app/pages/TruthAboutTBI.tsx:223:11:13343:261:e:p:s", children: "Most survivors struggle to explain what's happening inside their mind. Most supporters don't know what questions to ask." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq111", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq111": ":0:/src/app/pages/TruthAboutTBI.tsx:226:11:13615:184:e:p:t", children: "This creates a communication gap that leads to:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "cdaq113", _fgB: 1783946043286, style: { listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-cdaq113": ":0:/src/app/pages/TruthAboutTBI.tsx:229:11:13810:566:e:ul:x", children: jl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "cdaq115", _fgB: 1783946043286, style: { display: "flex", gap: "16px", alignItems: "center" }, "data-fg-cdaq115": ":0:/src/app/pages/TruthAboutTBI.tsx:231:15:14000:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "cdaq116", _fgB: 1783946043286, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-cdaq116": ":0:/src/app/pages/TruthAboutTBI.tsx:232:17:14092:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq117", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-cdaq117": ":0:/src/app/pages/TruthAboutTBI.tsx:233:17:14216:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq119", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-cdaq119": ":0:/src/app/pages/TruthAboutTBI.tsx:237:11:14387:202:e:p:t", children: "TBI Redefined provides the language, frameworks, and clarity needed to bridge that gap." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq122", _fgB: 1783946043286, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-cdaq122": ":0:/src/app/pages/TruthAboutTBI.tsx:244:7:14677:1320:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq123", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq123": ":0:/src/app/pages/TruthAboutTBI.tsx:245:9:14749:1231:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq124", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq124": ":0:/src/app/pages/TruthAboutTBI.tsx:246:11:14832:193:e:p:t", children: "A Condition That Affects Identity" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq126", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq126": ":0:/src/app/pages/TruthAboutTBI.tsx:247:11:15036:149:e:p:t", children: "TBI impacts:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "cdaq128", _fgB: 1783946043286, style: { listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-cdaq128": ":0:/src/app/pages/TruthAboutTBI.tsx:250:11:15196:558:e:ul:x", children: Wl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "cdaq130", _fgB: 1783946043286, style: { display: "flex", gap: "16px", alignItems: "center" }, "data-fg-cdaq130": ":0:/src/app/pages/TruthAboutTBI.tsx:252:15:15378:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "cdaq131", _fgB: 1783946043286, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-cdaq131": ":0:/src/app/pages/TruthAboutTBI.tsx:253:17:15470:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq132", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-cdaq132": ":0:/src/app/pages/TruthAboutTBI.tsx:254:17:15594:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq134", _fgB: 1783946043286, style: { fontFamily: Q, fontStyle: "italic", fontSize: "22px", color: V, lineHeight: 1.7 }, "data-fg-cdaq134": ":0:/src/app/pages/TruthAboutTBI.tsx:258:11:15765:200:e:p:t", children: "It is not just a medical condition — it is an identity-level shift." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq137", _fgB: 1783946043286, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-cdaq137": ":0:/src/app/pages/TruthAboutTBI.tsx:265:7:16031:1254:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cdaq138", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq138": ":0:/src/app/pages/TruthAboutTBI.tsx:266:9:16102:1166:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq139", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-cdaq139": ":0:/src/app/pages/TruthAboutTBI.tsx:267:11:16185:250:e:p:s", children: 'A Path Forward Through Understanding — and the "Ahhh Moment"' }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq141", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-cdaq141": ":0:/src/app/pages/TruthAboutTBI.tsx:270:11:16446:304:e:p:s", children: 'When people understand TBI, everything changes — it creates that "Ahhh, now I get it" moment that dissolves confusion and replaces it with clarity.' }),
      /* @__PURE__ */ n(r, { _fgT: "blockquote", _fgS: "cdaq143", _fgB: 1783946043286, style: { margin: "0 0 36px", paddingLeft: "24px", borderLeft: `3px solid ${Y}` }, "data-fg-cdaq143": ":0:/src/app/pages/TruthAboutTBI.tsx:273:11:16761:492:e:blockquote:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq144", _fgB: 1783946043286, style: { fontFamily: Q, fontStyle: "italic", fontSize: "clamp(18px, 2vw, 22px)", color: W, lineHeight: 1.85 }, "data-fg-cdaq144": ":0:/src/app/pages/TruthAboutTBI.tsx:274:13:16871:358:e:p:t", children: "This page — and this movement — exists with a resolute commitment to our mission: to bring meaningful, compassionate, and neurologically accurate understanding of the lived TBI experience to the world." }) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cdaq147", _fgB: 1783946043286, style: { backgroundColor: oe, padding: "56px 0" }, "data-fg-cdaq147": ":0:/src/app/pages/TruthAboutTBI.tsx:282:7:17318:632:e:section:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "cdaq148", _fgB: 1783946043286, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cdaq148": ":0:/src/app/pages/TruthAboutTBI.tsx:283:9:17393:540:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cdaq149", _fgB: 1783946043286, style: { fontFamily: f, fontSize: "13px", color: "rgba(26,26,26,0.5)", lineHeight: 1.75, borderLeft: `3px solid ${Y}`, paddingLeft: "20px" }, "data-fg-cdaq149": ":0:/src/app/pages/TruthAboutTBI.tsx:284:11:17476:442:e:p:t", children: "All educational content on this site is grounded in current scientific understanding of brain function, cognitive load, and sensory processing. This information is provided for awareness and learning purposes only and should not be interpreted as medical advice." }) }) })
  ] });
}
const Nl = [
  {
    title: "Survivors",
    body: "People living with the long-term effects of TBI often face confusion, isolation, and a world that doesn't see what they're carrying. We serve survivors by offering clarity, validation, and a modern understanding of what TBI truly is — beyond the ER, beyond the moment of injury, and beyond outdated assumptions."
  },
  {
    title: "Families & Care Partners",
    body: "Supporting someone with TBI can be overwhelming, especially when symptoms are invisible or misunderstood. We help families make sense of what they're seeing, communicate more effectively, and build compassion-based strategies for daily life."
  },
  {
    title: "Educators",
    body: "Teachers, school staff, and administrators often encounter students with TBI without ever receiving training on how brain injuries affect learning, behavior, and emotional regulation. We provide frameworks that help educators respond with clarity, patience, and informed support."
  },
  {
    title: "Clinicians & Health Professionals",
    body: "Medical and mental-health professionals are essential partners in long-term recovery. We offer a human-centered lens that complements clinical knowledge, helping professionals better understand the lived experience behind the symptoms."
  },
  {
    title: "Employers & Community Leaders",
    body: "Workplaces and community spaces often struggle to recognize or accommodate the cognitive and emotional realities of TBI. We help leaders create environments that are supportive, flexible, and grounded in real-world understanding."
  }
];
function $l() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "d0q1",
        _fgB: 1783946043299,
        label: "Who We Serve",
        title: "TBI Redefined exists for anyone whose life has been touched by traumatic brain injury — directly or indirectly.",
        subtitle: "Our work is grounded in the belief that understanding TBI is not just a medical need, but a humane responsibility.",
        "data-fg-d0q1": ":0:/src/app/pages/WhoWeServe.tsx:31:7:1855:311:e:PageHeader::::::BwET"
      }
    ),
    Nl.map(({ title: e, body: t }, a) => /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "d0q4", _fgB: 1783946043299, style: { backgroundColor: a % 2 === 0 ? W : oe, padding: "72px 0" }, "data-fg-d0q4": ":0:/src/app/pages/WhoWeServe.tsx:39:9:2255:658:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "d0q5", _fgB: 1783946043299, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-d0q5": ":0:/src/app/pages/WhoWeServe.tsx:40:11:2366:528:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "d0q6", _fgB: 1783946043299, style: { width: "36px", height: "2px", backgroundColor: Y, marginBottom: "24px" }, "data-fg-d0q6": ":0:/src/app/pages/WhoWeServe.tsx:41:13:2451:93:e:div" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "d0q7", _fgB: 1783946043299, style: { fontFamily: Q, fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: V, lineHeight: 1.2, marginBottom: "28px" }, "data-fg-d0q7": ":0:/src/app/pages/WhoWeServe.tsx:42:13:2557:182:e:h2:x", children: e }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "d0q9", _fgB: 1783946043299, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-d0q9": ":0:/src/app/pages/WhoWeServe.tsx:45:13:2752:125:e:p:x", children: t })
    ] }) }, e)),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "d0q12", _fgB: 1783946043299, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-d0q12": ":0:/src/app/pages/WhoWeServe.tsx:53:7:2974:1427:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "d0q13", _fgB: 1783946043299, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-d0q13": ":0:/src/app/pages/WhoWeServe.tsx:54:9:3045:1339:e:div:etetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "d0q14", _fgB: 1783946043299, style: { width: "36px", height: "2px", backgroundColor: Y, marginBottom: "24px" }, "data-fg-d0q14": ":0:/src/app/pages/WhoWeServe.tsx:55:11:3128:93:e:div" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "d0q15", _fgB: 1783946043299, style: { fontFamily: Q, fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: W, lineHeight: 1.2, marginBottom: "28px" }, "data-fg-d0q15": ":0:/src/app/pages/WhoWeServe.tsx:56:11:3232:216:e:h2:t", children: "Anyone Seeking to Understand TBI More Deeply" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "d0q17", _fgB: 1783946043299, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-d0q17": ":0:/src/app/pages/WhoWeServe.tsx:59:11:3459:264:e:p:t", children: "Whether you're a student, policymaker, advocate, or simply someone who wants to learn — this movement is for you." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "d0q19", _fgB: 1783946043299, style: { fontFamily: Q, fontStyle: "italic", fontSize: "22px", color: W, lineHeight: 1.7 }, "data-fg-d0q19": ":0:/src/app/pages/WhoWeServe.tsx:62:11:3734:247:e:p:t", children: "Understanding TBI is not just about injury. It's about humanity, dignity, and the way we show up for one another." }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "d0q21", _fgB: 1783946043299, style: { marginTop: "48px" }, "data-fg-d0q21": ":0:/src/app/pages/WhoWeServe.tsx:65:11:3992:377:e:div:e", children: /* @__PURE__ */ n(
        r,
        {
          _fgT: Se,
          _fgS: "d0q22",
          _fgB: 1783946043299,
          to: "/",
          style: { fontFamily: f, fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: z, textDecoration: "none", borderBottom: `1px solid ${z}`, paddingBottom: "2px" },
          "data-fg-d0q22": ":0:node_modules/react-router:66:13:4040:312:e:Link:t:::::B0gV",
          children: "← Home Page"
        }
      ) })
    ] }) })
  ] });
}
const Ul = "https://static.wixstatic.com/media/cf5d54_13d384f5063b4097b95a03f94a182a0b~mv2.jpg", Vl = [
  "survivors deserve to be understood",
  "families deserve guidance",
  "educators deserve training",
  "clinicians deserve a human-centered lens",
  "society deserves accurate, modern knowledge"
], Gl = [
  "identity",
  "relationships",
  "learning",
  "work",
  "communication",
  "and the way a person experiences the world"
], Yl = [
  "lived experience",
  "scientific understanding",
  "compassion",
  "curiosity",
  "a commitment to truth",
  "and the belief that understanding TBI is not just a medical need, but a humane responsibility"
];
function Kl() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "ekuq1",
        _fgB: 1783946043318,
        label: "Our Story",
        title: "This movement was born from lived experience — and from the urgent need for clarity in a world that has never been taught what traumatic brain injury truly is.",
        "data-fg-ekuq1": ":0:/src/app/pages/OurStory.tsx:35:7:920:222:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "ekuq3", _fgB: 1783946043318, style: { backgroundColor: W, padding: "80px 0 72px" }, "data-fg-ekuq3": ":0:/src/app/pages/OurStory.tsx:41:7:1172:1349:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ekuq4", _fgB: 1783946043318, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-ekuq4": ":0:/src/app/pages/OurStory.tsx:42:9:1249:1255:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq5", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-ekuq5": ":0:/src/app/pages/OurStory.tsx:43:11:1332:356:e:p:t", children: "For decades, survivors have carried an invisible reality. Not because people didn't care — but because people were never educated, never prepared, never given the language to understand what TBI looks like in real life." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq7", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-ekuq7": ":0:/src/app/pages/OurStory.tsx:46:11:1699:266:e:p:t", children: `In a world where no one is taught about TBI in school, at home, or in society, people assume you're "fine" because you look fine.` }),
      /* @__PURE__ */ n(r, { _fgT: "blockquote", _fgS: "ekuq9", _fgB: 1783946043318, style: { margin: "0 0 28px", paddingLeft: "24px", borderLeft: `3px solid ${Y}` }, "data-fg-ekuq9": ":0:/src/app/pages/OurStory.tsx:49:11:1976:351:e:blockquote:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq10", _fgB: 1783946043318, style: { fontFamily: Q, fontStyle: "italic", fontSize: "22px", color: V, lineHeight: 1.75 }, "data-fg-ekuq10": ":0:/src/app/pages/OurStory.tsx:50:13:2086:217:e:p:t", children: "Awareness protects survivors. Ignorance leaves them unprotected in plain sight." }) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq12", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-ekuq12": ":0:/src/app/pages/OurStory.tsx:54:11:2338:151:e:p:t", children: "This movement exists to change that." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "ekuq15", _fgB: 1783946043318, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-ekuq15": ":0:/src/app/pages/OurStory.tsx:61:7:2579:2019:e:section:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "ekuq16", _fgB: 1783946043318, style: { maxWidth: "960px", margin: "0 auto", padding: "0 48px" }, "data-fg-ekuq16": ":0:/src/app/pages/OurStory.tsx:62:9:2654:1927:e:div:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ekuq17", _fgB: 1783946043318, style: { display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-start" }, "data-fg-ekuq17": ":0:/src/app/pages/OurStory.tsx:63:11:2737:1829:e:div:xtetxte", children: [
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "ekuq19", _fgB: 1783946043318, style: { flexShrink: 0 }, "data-fg-ekuq19": ":0:/src/app/pages/OurStory.tsx:65:13:2869:284:e:div:e", children: /* @__PURE__ */ n(
        r,
        {
          _fgT: "img",
          _fgS: "ekuq20",
          _fgB: 1783946043318,
          src: Ul,
          alt: "TBI Redefined founder",
          style: { width: "240px", height: "300px", objectFit: "cover", borderRadius: "2px", display: "block" },
          "data-fg-ekuq20": ":0:/src/app/pages/OurStory.tsx:66:15:2915:219:e:img"
        }
      ) }),
      /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ekuq22", _fgB: 1783946043318, style: { flex: 1, minWidth: "280px" }, "data-fg-ekuq22": ":0:/src/app/pages/OurStory.tsx:73:13:3191:1358:e:div:etetete", children: [
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq23", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-ekuq23": ":0:/src/app/pages/OurStory.tsx:74:15:3250:234:e:p:t", children: "From Personal Experience to Public Mission" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq25", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-ekuq25": ":0:/src/app/pages/OurStory.tsx:77:15:3499:201:e:p:t", children: "As the lived reality became clearer, so did the mission:" }),
        /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "ekuq27", _fgB: 1783946043318, style: { listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-ekuq27": ":0:/src/app/pages/OurStory.tsx:80:15:3715:584:e:ul:x", children: Vl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "ekuq29", _fgB: 1783946043318, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-ekuq29": ":0:/src/app/pages/OurStory.tsx:82:19:3904:355:e:li:ete", children: [
          /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "ekuq30", _fgB: 1783946043318, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-ekuq30": ":0:/src/app/pages/OurStory.tsx:83:21:4000:107:e:span" }),
          /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq31", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "18px", color: "#1A1A1A", lineHeight: 1.8, margin: 0 }, "data-fg-ekuq31": ":0:/src/app/pages/OurStory.tsx:84:21:4128:107:e:p:x", children: e })
        ] }, t)) }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq33", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-ekuq33": ":0:/src/app/pages/OurStory.tsx:88:15:4314:216:e:p:t", children: "TBI Redefined emerged to bridge these gaps with clarity, dignity, and emotional intelligence." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "ekuq36", _fgB: 1783946043318, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-ekuq36": ":0:/src/app/pages/OurStory.tsx:97:7:4645:2216:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ekuq37", _fgB: 1783946043318, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-ekuq37": ":0:/src/app/pages/OurStory.tsx:98:9:4716:2128:e:div:etetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq38", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-ekuq38": ":0:/src/app/pages/OurStory.tsx:99:11:4799:184:e:p:t", children: "Why This Movement Exists" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq40", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "16px" }, "data-fg-ekuq40": ":0:/src/app/pages/OurStory.tsx:100:11:4994:192:e:p:t", children: "This is more than an educational project." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq42", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-ekuq42": ":0:/src/app/pages/OurStory.tsx:103:11:5197:272:e:p:t", children: "It is a reframing of how we see brain injury — not as a short-term medical event, but as a lifelong journey that affects:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "ekuq44", _fgB: 1783946043318, style: { listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-ekuq44": ":0:/src/app/pages/OurStory.tsx:106:11:5480:567:e:ul:x", children: Gl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "ekuq46", _fgB: 1783946043318, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-ekuq46": ":0:/src/app/pages/OurStory.tsx:108:15:5657:358:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "ekuq47", _fgB: 1783946043318, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: Y, flexShrink: 0 }, "data-fg-ekuq47": ":0:/src/app/pages/OurStory.tsx:109:17:5749:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq48", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, margin: 0 }, "data-fg-ekuq48": ":0:/src/app/pages/OurStory.tsx:110:17:5873:122:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq50", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-ekuq50": ":0:/src/app/pages/OurStory.tsx:114:11:6058:174:e:p:t", children: "Our story is rooted in:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "ekuq52", _fgB: 1783946043318, style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-ekuq52": ":0:/src/app/pages/OurStory.tsx:117:11:6243:586:e:ul:x", children: Yl.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "ekuq54", _fgB: 1783946043318, style: { display: "flex", gap: "14px", alignItems: "flex-start" }, "data-fg-ekuq54": ":0:/src/app/pages/OurStory.tsx:119:15:6416:381:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "ekuq55", _fgB: 1783946043318, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: Y, flexShrink: 0, marginTop: "10px" }, "data-fg-ekuq55": ":0:/src/app/pages/OurStory.tsx:120:17:6512:126:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq56", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, margin: 0 }, "data-fg-ekuq56": ":0:/src/app/pages/OurStory.tsx:121:17:6655:122:e:p:x", children: e })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "ekuq59", _fgB: 1783946043318, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-ekuq59": ":0:/src/app/pages/OurStory.tsx:129:7:6901:1114:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ekuq60", _fgB: 1783946043318, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-ekuq60": ":0:/src/app/pages/OurStory.tsx:130:9:6973:1025:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq61", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-ekuq61": ":0:/src/app/pages/OurStory.tsx:131:11:7056:177:e:p:t", children: "Where We're Going" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq63", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-ekuq63": ":0:/src/app/pages/OurStory.tsx:132:11:7244:310:e:p:t", children: "TBI Redefined is building a global movement — one that unites survivors, families, educators, clinicians, and communities around a shared understanding of what TBI truly is." }),
      /* @__PURE__ */ n(r, { _fgT: "blockquote", _fgS: "ekuq65", _fgB: 1783946043318, style: { margin: "0 0 36px", paddingLeft: "24px", borderLeft: `3px solid ${Y}` }, "data-fg-ekuq65": ":0:/src/app/pages/OurStory.tsx:135:11:7565:418:e:blockquote:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq66", _fgB: 1783946043318, style: { fontFamily: Q, fontStyle: "italic", fontSize: "22px", color: V, lineHeight: 1.75 }, "data-fg-ekuq66": ":0:/src/app/pages/OurStory.tsx:136:13:7675:284:e:p:t", children: "This is the beginning of a new narrative. One that honors the complexity of the brain, the resilience of survivors, and the humanity we all share." }) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "ekuq69", _fgB: 1783946043318, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-ekuq69": ":0:/src/app/pages/OurStory.tsx:144:7:8052:1034:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "ekuq70", _fgB: 1783946043318, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-ekuq70": ":0:/src/app/pages/OurStory.tsx:145:9:8127:942:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq71", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-ekuq71": ":0:/src/app/pages/OurStory.tsx:146:11:8210:174:e:p:t", children: "Our Commitment" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq73", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-ekuq73": ":0:/src/app/pages/OurStory.tsx:147:11:8395:306:e:p:t", children: "We are committed to supporting every dimension of a survivor's life — identity, relationships, learning, work, communication, and the way a person experiences the world." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "ekuq75", _fgB: 1783946043318, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-ekuq75": ":0:/src/app/pages/OurStory.tsx:150:11:8712:342:e:p:t", children: "Our work exists to bring acknowledgment, clarity, dignity, and understanding to each of these areas — allowing survivors to move through life with confidence instead of the confusion that comes from being overlooked or misread." })
    ] }) })
  ] });
}
function Jl() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "xyz1",
        _fgB: 1783946043312,
        label: "Our Impact",
        title: "Our Local & Global Impact",
        subtitle: "Driving systemic change through research, education, and direct advocacy for survivors and their families.",
        "data-fg-xyz1": ":0:/src/app/pages/OurImpact.tsx:7:7:204:215:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz3", _fgB: 1783946043312, style: { backgroundColor: W, padding: "80px 0 72px" }, "data-fg-xyz3": ":0:/src/app/pages/OurImpact.tsx:14:7:447:719:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "xyz4", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz4": ":0:/src/app/pages/OurImpact.tsx:15:9:524:625:e:div:ete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz5", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz5": ":0:/src/app/pages/OurImpact.tsx:16:11:607:302:e:p:t", children: "TBI Redefined is reshaping how the world understands traumatic brain injury — not through fear, not through medical jargon, but through clarity, humanity, and truth." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz7", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-xyz7": ":0:/src/app/pages/OurImpact.tsx:19:11:920:214:e:p:t", children: "Our impact is measured in the lives we reach, the minds we open, and the systems we help transform." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz10", _fgB: 1783946043312, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-xyz10": ":0:/src/app/pages/OurImpact.tsx:26:7:1214:1633:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "xyz11", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz11": ":0:/src/app/pages/OurImpact.tsx:27:9:1289:1541:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz12", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-xyz12": ":0:/src/app/pages/OurImpact.tsx:28:11:1372:185:e:p:t", children: "Changing the Conversation" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz14", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz14": ":0:/src/app/pages/OurImpact.tsx:29:11:1568:358:e:p:t", children: "For decades, TBI has been misunderstood, minimized, or treated as a short-term event. Our work reframes TBI as a long-term neurological condition that affects how a person thinks, feels, learns, and experiences the world." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz16", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz16": ":0:/src/app/pages/OurImpact.tsx:32:11:1937:196:e:p:t", children: "By giving people a modern, accurate understanding, we help:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "xyz18", _fgB: 1783946043312, style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-xyz18": ":0:/src/app/pages/OurImpact.tsx:35:11:2144:671:e:ul:x", children: ["survivors feel seen", "families feel equipped", "educators feel confident", "clinicians feel informed", "communities feel connected"].map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "xyz20", _fgB: 1783946043312, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-xyz20": ":0:/src/app/pages/OurImpact.tsx:37:15:2439:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "xyz21", _fgB: 1783946043312, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-xyz21": ":0:/src/app/pages/OurImpact.tsx:38:17:2531:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz22", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-xyz22": ":0:/src/app/pages/OurImpact.tsx:39:17:2655:108:e:p:x", children: e })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz25", _fgB: 1783946043312, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-xyz25": ":0:/src/app/pages/OurImpact.tsx:47:7:2890:1733:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "xyz26", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz26": ":0:/src/app/pages/OurImpact.tsx:48:9:2962:1644:e:div:etetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz27", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-xyz27": ":0:/src/app/pages/OurImpact.tsx:49:11:3045:180:e:p:t", children: "Empowering Survivors" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz29", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz29": ":0:/src/app/pages/OurImpact.tsx:50:11:3236:249:e:p:t", children: "Survivors often struggle in silence — not because they lack strength, but because the world lacks understanding." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz31", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz31": ":0:/src/app/pages/OurImpact.tsx:53:11:3496:264:e:p:t", children: "Our frameworks give survivors the language to explain their experience and the validation they've been denied for far too long." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz33", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz33": ":0:/src/app/pages/OurImpact.tsx:56:11:3771:131:e:p:t", children: "We help survivors:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "xyz35", _fgB: 1783946043312, style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-xyz35": ":0:/src/app/pages/OurImpact.tsx:57:11:3913:678:e:ul:x", children: ["understand their symptoms", "communicate their needs", "rebuild identity", "reduce shame and confusion", "find a path forward with dignity"].map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "xyz37", _fgB: 1783946043312, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-xyz37": ":0:/src/app/pages/OurImpact.tsx:59:15:4215:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "xyz38", _fgB: 1783946043312, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-xyz38": ":0:/src/app/pages/OurImpact.tsx:60:17:4307:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz39", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-xyz39": ":0:/src/app/pages/OurImpact.tsx:61:17:4431:108:e:p:x", children: e })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz42", _fgB: 1783946043312, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-xyz42": ":0:/src/app/pages/OurImpact.tsx:69:7:4665:713:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "xyz43", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz43": ":0:/src/app/pages/OurImpact.tsx:70:9:4740:621:e:div:ete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz44", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-xyz44": ":0:/src/app/pages/OurImpact.tsx:71:11:4823:195:e:p:t", children: "Supporting Families & Care Partners" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz46", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-xyz46": ":0:/src/app/pages/OurImpact.tsx:72:11:5029:317:e:p:t", children: "Families are often the first to notice changes — and the last to receive guidance. We provide tools that help them interpret behaviors, respond with compassion, and support recovery without burning out." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz49", _fgB: 1783946043312, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-xyz49": ":0:/src/app/pages/OurImpact.tsx:79:7:5423:2060:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "xyz50", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz50": ":0:/src/app/pages/OurImpact.tsx:80:9:5494:1972:e:div:etetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz51", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-xyz51": ":0:/src/app/pages/OurImpact.tsx:81:11:5577:182:e:p:t", children: "Transforming Education" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz53", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz53": ":0:/src/app/pages/OurImpact.tsx:82:11:5770:516:e:p:s", children: `Teachers regularly encounter students with TBI — but without education or preparation, how can they possibly recognize them? Most survivors blend into the classroom until their challenges show up as "non-performance," "inattention," or "needs improvement." These aren't behavior issues. They're neurological realities the system was never designed to see.` }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz55", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz55": ":0:/src/app/pages/OurImpact.tsx:85:11:6297:237:e:p:t", children: "Our work brings cognitive accessibility into classrooms, helping educators understand:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "xyz57", _fgB: 1783946043312, style: { listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-xyz57": ":0:/src/app/pages/OurImpact.tsx:88:11:6545:670:e:ul:x", children: ["processing fatigue", "sensory overload", "emotional regulation challenges", "executive function differences"].map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "xyz59", _fgB: 1783946043312, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-xyz59": ":0:/src/app/pages/OurImpact.tsx:90:15:6825:358:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "xyz60", _fgB: 1783946043312, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: Y, flexShrink: 0 }, "data-fg-xyz60": ":0:/src/app/pages/OurImpact.tsx:91:17:6917:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz61", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, margin: 0 }, "data-fg-xyz61": ":0:/src/app/pages/OurImpact.tsx:92:17:7041:122:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz63", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85 }, "data-fg-xyz63": ":0:/src/app/pages/OurImpact.tsx:96:11:7226:225:e:p:t", children: "This leads to better support, fewer misunderstandings, and more equitable learning environments." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz66", _fgB: 1783946043312, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-xyz66": ":0:/src/app/pages/OurImpact.tsx:103:7:7526:2186:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "xyz67", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz67": ":0:/src/app/pages/OurImpact.tsx:104:9:7598:2097:e:div:etetetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz68", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-xyz68": ":0:/src/app/pages/OurImpact.tsx:105:11:7681:192:e:p:t", children: "Enhancing Clinical Understanding" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz70", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "48px" }, "data-fg-xyz70": ":0:/src/app/pages/OurImpact.tsx:106:11:7884:341:e:p:t", children: "Clinicians see symptoms. We help them see the person behind the symptoms. Our human-centered lens complements medical knowledge, giving professionals a deeper understanding of the lived experience of TBI." }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "xyz72", _fgB: 1783946043312, style: { width: "36px", height: "2px", backgroundColor: Y, marginBottom: "40px" }, "data-fg-xyz72": ":0:/src/app/pages/OurImpact.tsx:109:11:8236:93:e:div" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz73", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-xyz73": ":0:/src/app/pages/OurImpact.tsx:110:11:8340:187:e:p:t", children: "Shaping Community Awareness" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz75", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz75": ":0:/src/app/pages/OurImpact.tsx:111:11:8538:274:e:p:t", children: "TBI Redefined is building a movement — one that reaches beyond hospitals and clinics into workplaces, schools, families, and communities." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz77", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz77": ":0:/src/app/pages/OurImpact.tsx:114:11:8823:154:e:p:t", children: "Our impact grows every time someone says:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "xyz79", _fgB: 1783946043312, style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-xyz79": ":0:/src/app/pages/OurImpact.tsx:115:11:8988:692:e:ul:x", children: ['"I finally understand."', '"This explains everything."', '"I feel seen for the first time."', '"Now I know how to support them."'].map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "xyz81", _fgB: 1783946043312, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-xyz81": ":0:/src/app/pages/OurImpact.tsx:117:15:9280:368:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "xyz82", _fgB: 1783946043312, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-xyz82": ":0:/src/app/pages/OurImpact.tsx:118:17:9372:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz83", _fgB: 1783946043312, style: { fontFamily: Q, fontStyle: "italic", fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-xyz83": ":0:/src/app/pages/OurImpact.tsx:119:17:9496:132:e:p:x", children: e })
      ] }, t)) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz86", _fgB: 1783946043312, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-xyz86": ":0:/src/app/pages/OurImpact.tsx:127:7:9759:1430:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "xyz87", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz87": ":0:/src/app/pages/OurImpact.tsx:128:9:9834:1338:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz88", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-xyz88": ":0:/src/app/pages/OurImpact.tsx:129:11:9917:184:e:p:t", children: "A Movement With Momentum" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz90", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz90": ":0:/src/app/pages/OurImpact.tsx:130:11:10112:367:e:p:t", children: "We are creating a world where TBI is no longer treated as an abstract perception or something guessed from the outside, but as a human reality that demands acknowledgment first — and then compassion, clarity, and informed support." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz92", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-xyz92": ":0:/src/app/pages/OurImpact.tsx:133:11:10490:327:e:p:t", children: "Our impact is not measured in numbers. It's measured in hearts touched, lives changed, lives saved, and the collective shift toward a more practical and humane understanding of brain injury." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz94", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-xyz94": ":0:/src/app/pages/OurImpact.tsx:136:11:10828:329:e:p:t", children: "Millions of people survive TBI each year. Over decades, this becomes a massive survivor population — one that deserves to be recognized, understood, and protected through awareness, not left to struggle in silence." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "xyz97", _fgB: 1783946043312, style: { backgroundColor: W, padding: "56px 0" }, "data-fg-xyz97": ":0:/src/app/pages/OurImpact.tsx:143:7:11222:629:e:section:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "xyz98", _fgB: 1783946043312, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-xyz98": ":0:/src/app/pages/OurImpact.tsx:144:9:11294:540:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "xyz99", _fgB: 1783946043312, style: { fontFamily: f, fontSize: "13px", color: "rgba(26,26,26,0.5)", lineHeight: 1.75, borderLeft: `3px solid ${Y}`, paddingLeft: "20px" }, "data-fg-xyz99": ":0:/src/app/pages/OurImpact.tsx:145:11:11377:442:e:p:t", children: "All educational content on this site is grounded in current scientific understanding of brain function, cognitive load, and sensory processing. This information is provided for awareness and learning purposes only and should not be interpreted as medical advice." }) }) })
  ] });
}
function Zl() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "cgot1",
        _fgB: 1783946043321,
        label: "Testimonials",
        title: "Share Your Story",
        "data-fg-cgot1": ":0:/src/app/pages/Testimonials.tsx:8:7:244:82:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "cgot2", _fgB: 1783946043321, style: { backgroundColor: W, padding: "100px 0 120px" }, "data-fg-cgot2": ":0:/src/app/pages/Testimonials.tsx:13:7:334:1151:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "cgot3", _fgB: 1783946043321, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-cgot3": ":0:/src/app/pages/Testimonials.tsx:14:9:413:1055:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "cgot4", _fgB: 1783946043321, style: { width: "36px", height: "2px", backgroundColor: Y, marginBottom: "40px" }, "data-fg-cgot4": ":0:/src/app/pages/Testimonials.tsx:15:11:496:93:e:div" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "cgot5", _fgB: 1783946043321, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "48px" }, "data-fg-cgot5": ":0:/src/app/pages/Testimonials.tsx:16:11:600:413:e:p:t", children: "This page is under construction and will grow as we receive your stories. As your experiences come in, this space will become a home for the voices, truths, and lived realities that shape our movement. Thank you for helping others feel acknowledged, understood, and supported." }),
      /* @__PURE__ */ n(
        r,
        {
          _fgT: Se,
          _fgS: "cgot7",
          _fgB: 1783946043321,
          to: "/contact",
          style: {
            display: "inline-block",
            fontFamily: f,
            fontSize: "20px",
            fontWeight: 700,
            color: W,
            backgroundColor: z,
            textDecoration: "none",
            padding: "18px 48px",
            borderRadius: "8px"
          },
          "data-fg-cgot7": ":0:node_modules/react-router:19:11:1024:429:e:Link:t:::::B0gV",
          children: "Contact Us"
        }
      )
    ] }) })
  ] });
}
const Xl = [
  {
    title: "Educational Partnerships",
    body: "For schools, universities, and training programs seeking to bring cognitive accessibility and TBI literacy into their classrooms."
  },
  {
    title: "Clinical & Professional Collaboration",
    body: "For clinicians, therapists, and healthcare teams who want a deeper understanding of the lived experience behind the symptoms."
  },
  {
    title: "Community & Nonprofit Alliances",
    body: "For organizations supporting survivors, families, or vulnerable populations who benefit from clearer frameworks and shared language."
  },
  {
    title: "Philanthropic & Funding Support",
    body: "For donors and foundations who want to accelerate a movement that fills a global educational gap and improves lives at scale."
  },
  {
    title: "Corporate & Workplace Engagement",
    body: "For employers seeking to support employees with TBI, improve accommodations, and build more inclusive environments."
  }
], Ql = [
  "survivor-centered education",
  "accessible learning tools",
  "community awareness campaigns",
  "school and workplace training",
  "statewide and national initiatives",
  "long-term systemic change"
];
function es() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "obc1",
        _fgB: 1783946043323,
        label: "Partnership & Support",
        title: "TBI Redefined is building a movement — and movements grow through collaboration.",
        subtitle: "We partner with people, organizations, and institutions who believe that understanding brain injury is a shared responsibility and a path to a more humane world.",
        "data-fg-obc1": ":0:/src/app/pages/PartnershipSupport.tsx:40:7:1472:336:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "obc3", _fgB: 1783946043323, style: { backgroundColor: W, padding: "80px 0 72px" }, "data-fg-obc3": ":0:/src/app/pages/PartnershipSupport.tsx:47:7:1836:470:e:section:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "obc4", _fgB: 1783946043323, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-obc4": ":0:/src/app/pages/PartnershipSupport.tsx:48:9:1913:376:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc5", _fgB: 1783946043323, style: { fontFamily: Q, fontStyle: "italic", fontSize: "22px", color: V, lineHeight: 1.75 }, "data-fg-obc5": ":0:/src/app/pages/PartnershipSupport.tsx:49:11:1996:278:e:p:t", children: "Partnership isn't transactional here. It's relational, mission-aligned, and grounded in the belief that clarity and compassion can change lives." }) }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "obc8", _fgB: 1783946043323, style: { backgroundColor: oe, padding: "80px 0" }, "data-fg-obc8": ":0:/src/app/pages/PartnershipSupport.tsx:56:7:2340:2400:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc9", _fgB: 1783946043323, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-obc9": ":0:/src/app/pages/PartnershipSupport.tsx:57:9:2415:2308:e:div:etetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc10", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-obc10": ":0:/src/app/pages/PartnershipSupport.tsx:58:11:2498:179:e:p:t", children: "Why Partner With Us" }),
      /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc12", _fgB: 1783946043323, style: { marginBottom: "48px" }, "data-fg-obc12": ":0:/src/app/pages/PartnershipSupport.tsx:60:11:2689:552:e:div:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "h3", _fgS: "obc13", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "22px", fontWeight: 600, color: V, marginBottom: "16px" }, "data-fg-obc13": ":0:/src/app/pages/PartnershipSupport.tsx:61:13:2740:140:e:h3:t", children: "A New Lens for a Global Problem" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc15", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-obc15": ":0:/src/app/pages/PartnershipSupport.tsx:62:13:2893:331:e:p:t", children: "TBI affects millions, yet remains widely misunderstood. Our work brings a modern, human-centered framework that helps communities, educators, clinicians, and families finally understand what survivors experience." })
      ] }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "obc17", _fgB: 1783946043323, style: { width: "36px", height: "2px", backgroundColor: Y, marginBottom: "40px" }, "data-fg-obc17": ":0:/src/app/pages/PartnershipSupport.tsx:67:11:3253:93:e:div" }),
      /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc18", _fgB: 1783946043323, style: { marginBottom: "48px" }, "data-fg-obc18": ":0:/src/app/pages/PartnershipSupport.tsx:69:11:3358:556:e:div:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "h3", _fgS: "obc19", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "22px", fontWeight: 600, color: V, marginBottom: "16px" }, "data-fg-obc19": ":0:/src/app/pages/PartnershipSupport.tsx:70:13:3409:138:e:h3:t", children: "Tools That Create Real Change" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc21", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-obc21": ":0:/src/app/pages/PartnershipSupport.tsx:71:13:3560:337:e:p:t", children: "We provide language, models, and educational resources that make TBI understandable — not overwhelming. Partners use our materials to improve communication, reduce misinterpretation, and support survivors with dignity." })
      ] }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "obc23", _fgB: 1783946043323, style: { width: "36px", height: "2px", backgroundColor: Y, marginBottom: "40px" }, "data-fg-obc23": ":0:/src/app/pages/PartnershipSupport.tsx:76:11:3926:93:e:div" }),
      /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc24", _fgB: 1783946043323, "data-fg-obc24": ":0:/src/app/pages/PartnershipSupport.tsx:78:11:4031:677:e:div:etete", children: [
        /* @__PURE__ */ n(r, { _fgT: "h3", _fgS: "obc25", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "22px", fontWeight: 600, color: V, marginBottom: "16px" }, "data-fg-obc25": ":0:/src/app/pages/PartnershipSupport.tsx:79:13:4049:134:e:h3:t", children: "A Movement With Integrity" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc27", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "16px" }, "data-fg-obc27": ":0:/src/app/pages/PartnershipSupport.tsx:80:13:4196:275:e:p:t", children: "We don't sensationalize. We don't oversimplify. We build trust through accuracy, emotional intelligence, and lived-experience insight." }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc29", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-obc29": ":0:/src/app/pages/PartnershipSupport.tsx:83:13:4484:207:e:p:t", children: "We partner with intention — choosing depth, alignment, and long-term impact over volume." })
      ] })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "obc32", _fgB: 1783946043323, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-obc32": ":0:/src/app/pages/PartnershipSupport.tsx:91:7:4778:1161:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc33", _fgB: 1783946043323, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-obc33": ":0:/src/app/pages/PartnershipSupport.tsx:92:9:4849:1073:e:div:ete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc34", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "40px" }, "data-fg-obc34": ":0:/src/app/pages/PartnershipSupport.tsx:93:11:4932:175:e:p:t", children: "Ways to Partner" }),
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "obc36", _fgB: 1783946043323, style: { display: "flex", flexDirection: "column", gap: "40px" }, "data-fg-obc36": ":0:/src/app/pages/PartnershipSupport.tsx:94:11:5118:789:e:div:x", children: Xl.map(({ title: e, body: t }, a) => /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "obc38", _fgB: 1783946043323, "data-fg-obc38": ":0:/src/app/pages/PartnershipSupport.tsx:96:15:5252:622:e:div:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc39", _fgB: 1783946043323, style: { display: "flex", gap: "20px", alignItems: "flex-start" }, "data-fg-obc39": ":0:/src/app/pages/PartnershipSupport.tsx:97:17:5282:571:e:div:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "obc40", _fgB: 1783946043323, style: { width: "2px", height: "100%", backgroundColor: Y, flexShrink: 0, alignSelf: "stretch", minHeight: "40px" }, "data-fg-obc40": ":0:/src/app/pages/PartnershipSupport.tsx:98:19:5373:127:e:div" }),
        /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc41", _fgB: 1783946043323, "data-fg-obc41": ":0:/src/app/pages/PartnershipSupport.tsx:99:19:5519:311:e:div:ete", children: [
          /* @__PURE__ */ n(r, { _fgT: "h3", _fgS: "obc42", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "22px", fontWeight: 600, color: W, marginBottom: "12px" }, "data-fg-obc42": ":0:/src/app/pages/PartnershipSupport.tsx:100:21:5545:117:e:h3:x", children: e }),
          /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc44", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.8, margin: 0 }, "data-fg-obc44": ":0:/src/app/pages/PartnershipSupport.tsx:101:21:5683:122:e:p:x", children: t })
        ] })
      ] }) }, a)) })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "obc47", _fgB: 1783946043323, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-obc47": ":0:/src/app/pages/PartnershipSupport.tsx:111:7:5984:2050:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "obc48", _fgB: 1783946043323, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-obc48": ":0:/src/app/pages/PartnershipSupport.tsx:112:9:6056:1961:e:div:etetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc49", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-obc49": ":0:/src/app/pages/PartnershipSupport.tsx:113:11:6139:182:e:p:t", children: "How Your Support Helps" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc51", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-obc51": ":0:/src/app/pages/PartnershipSupport.tsx:114:11:6332:160:e:p:t", children: "Your partnership fuels:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "obc53", _fgB: 1783946043323, style: { listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-obc53": ":0:/src/app/pages/PartnershipSupport.tsx:117:11:6503:557:e:ul:x", children: Ql.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "obc55", _fgB: 1783946043323, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-obc55": ":0:/src/app/pages/PartnershipSupport.tsx:119:15:6684:344:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "obc56", _fgB: 1783946043323, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0 }, "data-fg-obc56": ":0:/src/app/pages/PartnershipSupport.tsx:120:17:6776:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc57", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-obc57": ":0:/src/app/pages/PartnershipSupport.tsx:121:17:6900:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc59", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-obc59": ":0:/src/app/pages/PartnershipSupport.tsx:125:11:7071:234:e:p:t", children: "Every contribution — financial, collaborative, or strategic — expands the reach of this movement." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc61", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "52px" }, "data-fg-obc61": ":0:/src/app/pages/PartnershipSupport.tsx:128:11:7316:388:e:p:t", children: "Whether you're an individual, an institution, or a community leader, your support helps build a world where TBI is understood with clarity, compassion, and truth. Together, we can redefine what's possible for survivors and the people who support them." }),
      /* @__PURE__ */ n(
        r,
        {
          _fgT: Se,
          _fgS: "obc63",
          _fgB: 1783946043323,
          to: "/contact",
          style: { display: "inline-block", fontFamily: f, fontSize: "20px", fontWeight: 700, color: W, backgroundColor: z, textDecoration: "none", padding: "18px 48px", borderRadius: "8px" },
          "data-fg-obc63": ":0:node_modules/react-router:131:11:7715:287:e:Link:t:::::B0gV",
          children: "Join Us"
        }
      )
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "obc66", _fgB: 1783946043323, style: { backgroundColor: oe, padding: "56px 0" }, "data-fg-obc66": ":0:/src/app/pages/PartnershipSupport.tsx:141:7:8067:632:e:section:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "obc67", _fgB: 1783946043323, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-obc67": ":0:/src/app/pages/PartnershipSupport.tsx:142:9:8142:540:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "obc68", _fgB: 1783946043323, style: { fontFamily: f, fontSize: "13px", color: "rgba(26,26,26,0.5)", lineHeight: 1.75, borderLeft: `3px solid ${Y}`, paddingLeft: "20px" }, "data-fg-obc68": ":0:/src/app/pages/PartnershipSupport.tsx:143:11:8225:442:e:p:t", children: "All educational content on this site is grounded in current scientific understanding of brain function, cognitive load, and sensory processing. This information is provided for awareness and learning purposes only and should not be interpreted as medical advice." }) }) })
  ] });
}
function ts() {
  const [e, t] = _e({ firstName: "", lastName: "", email: "", institution: "", message: "" }), [a, i] = _e(!1);
  function o(g) {
    t((p) => ({ ...p, [g.target.name]: g.target.value }));
  }
  function l(g) {
    g.preventDefault(), i(!0);
  }
  const s = {
    fontFamily: f,
    fontSize: "16px",
    color: "#1A1A1A",
    backgroundColor: W,
    border: "1px solid rgba(13,27,42,0.18)",
    borderRadius: "4px",
    padding: "14px 16px",
    width: "100%",
    outline: "none",
    boxSizing: "border-box"
  }, c = {
    fontFamily: f,
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: V,
    display: "block",
    marginBottom: "8px"
  };
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "c0gz1",
        _fgB: 1783946043328,
        label: "Contact",
        title: "If you have questions, want to collaborate, or are exploring ways to support this movement, we'd love to hear from you.",
        subtitle: "Every conversation helps expand understanding and brings us closer to a world where TBI is met with clarity and compassion.",
        "data-fg-c0gz1": ":0:/src/app/pages/Contact.tsx:44:7:1207:323:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "c0gz3", _fgB: 1783946043328, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-c0gz3": ":0:/src/app/pages/Contact.tsx:51:7:1575:4112:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz4", _fgB: 1783946043328, style: { maxWidth: "960px", margin: "0 auto", padding: "0 48px", display: "flex", flexWrap: "wrap", gap: "72px" }, "data-fg-c0gz4": ":0:/src/app/pages/Contact.tsx:52:9:1647:4023:e:div:xtetxte", children: [
      /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz6", _fgB: 1783946043328, style: { minWidth: "220px", flex: "0 0 220px" }, "data-fg-c0gz6": ":0:/src/app/pages/Contact.tsx:55:11:1812:763:e:div:etetete", children: [
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz7", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "20px" }, "data-fg-c0gz7": ":0:/src/app/pages/Contact.tsx:56:13:1879:177:e:p:t", children: "General Inquiries" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz9", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "16px", color: "#1A1A1A", lineHeight: 1.7, marginBottom: "32px" }, "data-fg-c0gz9": ":0:/src/app/pages/Contact.tsx:57:13:2069:164:e:p:t", children: "contact@tbiredefined.org" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz11", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "20px" }, "data-fg-c0gz11": ":0:/src/app/pages/Contact.tsx:60:13:2246:168:e:p:t", children: "Location" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz13", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "16px", color: "#1A1A1A", lineHeight: 1.7 }, "data-fg-c0gz13": ":0:/src/app/pages/Contact.tsx:61:13:2427:131:e:p:t", children: "United States" })
      ] }),
      /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz16", _fgB: 1783946043328, style: { flex: 1, minWidth: "300px" }, "data-fg-c0gz16": ":0:/src/app/pages/Contact.tsx:67:11:2617:3038:e:div:etetx", children: [
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz17", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "24px" }, "data-fg-c0gz17": ":0:/src/app/pages/Contact.tsx:68:13:2674:188:e:p:t", children: "Contact Our Educational Team" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz19", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "16px", color: "rgba(26,26,26,0.65)", lineHeight: 1.75, marginBottom: "36px" }, "data-fg-c0gz19": ":0:/src/app/pages/Contact.tsx:69:13:2875:290:e:p:t", children: "We are here to support your institution's needs with professional and compassionate care. Please fill out the form below to get in touch." }),
        a ? /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "c0gz22", _fgB: 1783946043328, style: { padding: "32px", backgroundColor: oe, borderRadius: "4px", borderLeft: `3px solid ${z}` }, "data-fg-c0gz22": ":0:/src/app/pages/Contact.tsx:74:15:3208:310:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz23", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "18px", color: V, lineHeight: 1.75 }, "data-fg-c0gz23": ":0:/src/app/pages/Contact.tsx:75:17:3339:158:e:p:t", children: "Thanks, we received your submission." }) }) : /* @__PURE__ */ b(r, { _fgT: "form", _fgS: "c0gz25", _fgB: 1783946043328, onSubmit: l, style: { display: "flex", flexDirection: "column", gap: "24px" }, "data-fg-c0gz25": ":0:/src/app/pages/Contact.tsx:80:15:3551:2072:e:form:etetetete", children: [
          /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz26", _fgB: 1783946043328, style: { display: "flex", gap: "20px", flexWrap: "wrap" }, "data-fg-c0gz26": ":0:/src/app/pages/Contact.tsx:81:17:3664:638:e:div:ete", children: [
            /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz27", _fgB: 1783946043328, style: { flex: 1, minWidth: "140px" }, "data-fg-c0gz27": ":0:/src/app/pages/Contact.tsx:82:19:3747:258:e:div:ete", children: [
              /* @__PURE__ */ n(r, { _fgT: "label", _fgS: "c0gz28", _fgB: 1783946043328, style: c, "data-fg-c0gz28": ":0:/src/app/pages/Contact.tsx:83:21:3812:46:e:label:t", children: "First Name *" }),
              /* @__PURE__ */ n(r, { _fgT: "input", _fgS: "c0gz30", _fgB: 1783946043328, required: !0, name: "firstName", value: e.firstName, onChange: o, style: s, "data-fg-c0gz30": ":0:/src/app/pages/Contact.tsx:84:21:3879:101:e:input" })
            ] }),
            /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz31", _fgB: 1783946043328, style: { flex: 1, minWidth: "140px" }, "data-fg-c0gz31": ":0:/src/app/pages/Contact.tsx:86:19:4024:255:e:div:ete", children: [
              /* @__PURE__ */ n(r, { _fgT: "label", _fgS: "c0gz32", _fgB: 1783946043328, style: c, "data-fg-c0gz32": ":0:/src/app/pages/Contact.tsx:87:21:4089:45:e:label:t", children: "Last Name *" }),
              /* @__PURE__ */ n(r, { _fgT: "input", _fgS: "c0gz34", _fgB: 1783946043328, required: !0, name: "lastName", value: e.lastName, onChange: o, style: s, "data-fg-c0gz34": ":0:/src/app/pages/Contact.tsx:88:21:4155:99:e:input" })
            ] })
          ] }),
          /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz35", _fgB: 1783946043328, "data-fg-c0gz35": ":0:/src/app/pages/Contact.tsx:91:17:4319:221:e:div:ete", children: [
            /* @__PURE__ */ n(r, { _fgT: "label", _fgS: "c0gz36", _fgB: 1783946043328, style: c, "data-fg-c0gz36": ":0:/src/app/pages/Contact.tsx:92:19:4343:49:e:label:t", children: "Email Address *" }),
            /* @__PURE__ */ n(r, { _fgT: "input", _fgS: "c0gz38", _fgB: 1783946043328, required: !0, type: "email", name: "email", value: e.email, onChange: o, style: s, "data-fg-c0gz38": ":0:/src/app/pages/Contact.tsx:93:19:4411:106:e:input" })
          ] }),
          /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz39", _fgB: 1783946043328, "data-fg-c0gz39": ":0:/src/app/pages/Contact.tsx:95:17:4557:233:e:div:ete", children: [
            /* @__PURE__ */ n(r, { _fgT: "label", _fgS: "c0gz40", _fgB: 1783946043328, style: c, "data-fg-c0gz40": ":0:/src/app/pages/Contact.tsx:96:19:4581:62:e:label:t", children: "School or Institution Name *" }),
            /* @__PURE__ */ n(r, { _fgT: "input", _fgS: "c0gz42", _fgB: 1783946043328, required: !0, name: "institution", value: e.institution, onChange: o, style: s, "data-fg-c0gz42": ":0:/src/app/pages/Contact.tsx:97:19:4662:105:e:input" })
          ] }),
          /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz43", _fgB: 1783946043328, "data-fg-c0gz43": ":0:/src/app/pages/Contact.tsx:99:17:4807:383:e:div:ete", children: [
            /* @__PURE__ */ n(r, { _fgT: "label", _fgS: "c0gz44", _fgB: 1783946043328, style: c, "data-fg-c0gz44": ":0:/src/app/pages/Contact.tsx:100:19:4831:43:e:label:t", children: "Message *" }),
            /* @__PURE__ */ n(
              r,
              {
                _fgT: "textarea",
                _fgS: "c0gz46",
                _fgB: 1783946043328,
                required: !0,
                name: "message",
                value: e.message,
                onChange: o,
                rows: 6,
                style: { ...s, resize: "vertical" },
                "data-fg-c0gz46": ":0:/src/app/pages/Contact.tsx:101:19:4893:274:e:textarea"
              }
            )
          ] }),
          /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "c0gz47", _fgB: 1783946043328, "data-fg-c0gz47": ":0:/src/app/pages/Contact.tsx:110:17:5207:394:e:div:e", children: /* @__PURE__ */ n(
            r,
            {
              _fgT: "button",
              _fgS: "c0gz48",
              _fgB: 1783946043328,
              type: "submit",
              style: { fontFamily: f, fontSize: "16px", fontWeight: 700, letterSpacing: "0.08em", color: W, backgroundColor: z, border: "none", padding: "16px 40px", borderRadius: "8px", cursor: "pointer" },
              "data-fg-c0gz48": ":0:/src/app/pages/Contact.tsx:111:19:5231:347:e:button:t",
              children: "Send Message"
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "c0gz51", _fgB: 1783946043328, style: { backgroundColor: oe, padding: "72px 0" }, "data-fg-c0gz51": ":0:/src/app/pages/Contact.tsx:125:7:5726:1531:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz52", _fgB: 1783946043328, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-c0gz52": ":0:/src/app/pages/Contact.tsx:126:9:5801:1439:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz53", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "24px" }, "data-fg-c0gz53": ":0:/src/app/pages/Contact.tsx:127:11:5884:192:e:p:t", children: "For Partnerships & Collaboration" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz55", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "24px" }, "data-fg-c0gz55": ":0:/src/app/pages/Contact.tsx:128:11:6087:246:e:p:s", children: "If you're an educator, clinician, organization, or funder interested in working together, please include:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "c0gz57", _fgB: 1783946043328, style: { listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }, "data-fg-c0gz57": ":0:/src/app/pages/Contact.tsx:131:11:6344:695:e:ul:x", children: ["your name & your organization (if applicable)", "the type of partnership you're exploring", "any specific questions or needs"].map((g, p) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "c0gz59", _fgB: 1783946043328, style: { display: "flex", gap: "14px", alignItems: "flex-start" }, "data-fg-c0gz59": ":0:/src/app/pages/Contact.tsx:133:15:6641:366:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "c0gz60", _fgB: 1783946043328, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0, marginTop: "10px" }, "data-fg-c0gz60": ":0:/src/app/pages/Contact.tsx:134:17:6737:126:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz61", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "18px", color: "#1A1A1A", lineHeight: 1.8, margin: 0 }, "data-fg-c0gz61": ":0:/src/app/pages/Contact.tsx:135:17:6880:107:e:p:x", children: g })
      ] }, p)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz63", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "18px", color: "rgba(26,26,26,0.65)", lineHeight: 1.8 }, "data-fg-c0gz63": ":0:/src/app/pages/Contact.tsx:139:11:7050:175:e:p:t", children: "This helps us understand how to best support you." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "c0gz66", _fgB: 1783946043328, style: { backgroundColor: W, padding: "72px 0" }, "data-fg-c0gz66": ":0:/src/app/pages/Contact.tsx:146:7:7293:689:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz67", _fgB: 1783946043328, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-c0gz67": ":0:/src/app/pages/Contact.tsx:147:9:7365:600:e:div:ete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz68", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "24px" }, "data-fg-c0gz68": ":0:/src/app/pages/Contact.tsx:148:11:7448:184:e:p:t", children: "For Survivors & Families" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz70", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-c0gz70": ":0:/src/app/pages/Contact.tsx:149:11:7643:307:e:p:s", children: "If you're reaching out for guidance, clarity, or resources, you're welcome here. You can share as much or as little as you'd like — your story will be met with respect and confidentiality." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "c0gz73", _fgB: 1783946043328, style: { backgroundColor: oe, padding: "72px 0" }, "data-fg-c0gz73": ":0:/src/app/pages/Contact.tsx:156:7:8019:637:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz74", _fgB: 1783946043328, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-c0gz74": ":0:/src/app/pages/Contact.tsx:157:9:8094:545:e:div:ete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz75", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "24px" }, "data-fg-c0gz75": ":0:/src/app/pages/Contact.tsx:158:11:8177:174:e:p:t", children: "Stay Connected" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz77", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85 }, "data-fg-c0gz77": ":0:/src/app/pages/Contact.tsx:159:11:8362:262:e:p:t", children: "If you'd like updates on new resources, educational tools, or movement-wide initiatives, let us know in your message and we'll add you to the list." })
    ] }) }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "c0gz80", _fgB: 1783946043328, style: { backgroundColor: V, padding: "80px 0" }, "data-fg-c0gz80": ":0:/src/app/pages/Contact.tsx:166:7:8695:3052:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "c0gz81", _fgB: 1783946043328, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-c0gz81": ":0:/src/app/pages/Contact.tsx:167:9:8766:2964:e:div:etetetetetetetetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz82", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-c0gz82": ":0:/src/app/pages/Contact.tsx:168:11:8849:176:e:p:t", children: "Share Your Story" }),
      /* @__PURE__ */ n(r, { _fgT: "h2", _fgS: "c0gz84", _fgB: 1783946043328, style: { fontFamily: Q, fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: W, lineHeight: 1.2, marginBottom: "28px" }, "data-fg-c0gz84": ":0:/src/app/pages/Contact.tsx:169:11:9036:277:e:h2:s", children: "If you're a TBI survivor — or someone who loves, supports, or advocates for one — your story matters." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz86", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "28px" }, "data-fg-c0gz86": ":0:/src/app/pages/Contact.tsx:172:11:9324:227:e:p:t", children: "Your lived experience can help others feel seen, understood, and less alone." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz88", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "20px" }, "data-fg-c0gz88": ":0:/src/app/pages/Contact.tsx:175:11:9562:162:e:p:t", children: "We welcome:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "c0gz90", _fgB: 1783946043328, style: { listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: "12px" }, "data-fg-c0gz90": ":0:/src/app/pages/Contact.tsx:178:11:9735:761:e:ul:x", children: ["survivor stories", "family and care-partner reflections", "educator or clinician insights", "moments of clarity, struggle, or breakthrough", "anything that helps illuminate the real experience of TBI"].map((g, p) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "c0gz92", _fgB: 1783946043328, style: { display: "flex", gap: "14px", alignItems: "center" }, "data-fg-c0gz92": ":0:/src/app/pages/Contact.tsx:180:15:10107:357:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "c0gz93", _fgB: 1783946043328, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: Y, flexShrink: 0 }, "data-fg-c0gz93": ":0:/src/app/pages/Contact.tsx:181:17:10199:107:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz94", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "18px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: 0 }, "data-fg-c0gz94": ":0:/src/app/pages/Contact.tsx:182:17:10323:121:e:p:x", children: g })
      ] }, p)) }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz96", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "12px" }, "data-fg-c0gz96": ":0:/src/app/pages/Contact.tsx:186:11:10507:256:e:p:t", children: "Every testimonial helps build a world where TBI is understood with acknowledgment, compassion, and truth." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz98", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", color: "rgba(255,255,255,0.8)", lineHeight: 1.85, marginBottom: "8px" }, "data-fg-c0gz98": ":0:/src/app/pages/Contact.tsx:189:11:10774:212:e:p:t", children: "If you'd like to share your story, please email your story to:" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz100", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "20px", fontWeight: 600, color: Y, lineHeight: 1.85, marginBottom: "28px" }, "data-fg-c0gz100": ":0:/src/app/pages/Contact.tsx:192:11:10997:172:e:p:t", children: "Hello@TBI-Redifined.org" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz102", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "18px", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "12px" }, "data-fg-c0gz102": ":0:/src/app/pages/Contact.tsx:195:11:11180:197:e:p:t", children: "We read every message with care and gratitude." }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "c0gz104", _fgB: 1783946043328, style: { fontFamily: f, fontSize: "18px", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }, "data-fg-c0gz104": ":0:/src/app/pages/Contact.tsx:198:11:11388:327:e:p:t", children: "Your story may be featured (with your permission, of course!) on our upcoming Testimonials page, offering others the acknowledgment, understanding, and support they've been missing for far too long." })
    ] }) })
  ] });
}
function as() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "dgw21",
        _fgB: 1783946043331,
        label: "Quick Digest (Cognitive-Friendly)",
        title: "Quick Digest",
        "data-fg-dgw21": ":0:/src/app/pages/QuickDigest.tsx:8:7:243:99:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "dgw22", _fgB: 1783946043331, style: { backgroundColor: W, padding: "80px 0 100px" }, "data-fg-dgw22": ":0:/src/app/pages/QuickDigest.tsx:13:7:350:973:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dgw23", _fgB: 1783946043331, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-dgw23": ":0:/src/app/pages/QuickDigest.tsx:14:9:428:878:e:div:etete", children: [
      /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dgw24", _fgB: 1783946043331, style: { width: "36px", height: "2px", backgroundColor: Y, marginBottom: "40px" }, "data-fg-dgw24": ":0:/src/app/pages/QuickDigest.tsx:15:11:511:93:e:div" }),
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dgw25", _fgB: 1783946043331, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, marginBottom: "56px" }, "data-fg-dgw25": ":0:/src/app/pages/QuickDigest.tsx:16:11:615:317:e:p:s", children: "You'll learn what TBI really is, how the brain changes after injury, why symptoms differ, how to recognize signs early, and how to support someone living with TBI in real life." }),
      /* @__PURE__ */ n(
        r,
        {
          _fgT: Se,
          _fgS: "dgw27",
          _fgB: 1783946043331,
          to: "/deep-dive-full-educational-journey",
          style: { fontFamily: f, fontSize: "16px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: z, textDecoration: "none", borderBottom: `1px solid ${z}`, paddingBottom: "2px" },
          "data-fg-dgw27": ":0:node_modules/react-router:19:11:943:348:e:Link:t:::::B0gV",
          children: "Explore the Deep Dive →"
        }
      )
    ] }) })
  ] });
}
const rs = [
  "A clear understanding of what TBI actually is",
  "How the brain changes after injury — and why symptoms differ from person to person",
  "How to recognize signs early, even when they're invisible",
  "How TBI shows up in daily life, not just medical charts",
  "Why survivors struggle in ways the world doesn't see",
  "How to support someone living with TBI with clarity and confidence",
  "How to navigate the long-term journey with realistic expectations and compassion"
];
function ns() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(
      r,
      {
        _fgT: qe,
        _fgS: "bchn1",
        _fgB: 1783946043332,
        label: "Deep Dive (Full Educational Journey)",
        title: "Deep Dive",
        "data-fg-bchn1": ":0:/src/app/pages/DeepDive.tsx:18:7:747:99:e:PageHeader::::::BwET"
      }
    ),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "bchn2", _fgB: 1783946043332, style: { backgroundColor: W, padding: "80px 0" }, "data-fg-bchn2": ":0:/src/app/pages/DeepDive.tsx:23:7:854:1700:e:section:e", children: /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "bchn3", _fgB: 1783946043332, style: { maxWidth: "760px", margin: "0 auto", padding: "0 48px" }, "data-fg-bchn3": ":0:/src/app/pages/DeepDive.tsx:24:9:926:1611:e:div:etetete", children: [
      /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bchn4", _fgB: 1783946043332, style: { fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: z, marginBottom: "28px" }, "data-fg-bchn4": ":0:/src/app/pages/DeepDive.tsx:25:11:1009:195:e:p:t", children: "This Learning Experience gives you:" }),
      /* @__PURE__ */ n(r, { _fgT: "ul", _fgS: "bchn6", _fgB: 1783946043332, style: { listStyle: "none", padding: 0, margin: "0 0 48px", display: "flex", flexDirection: "column", gap: "20px" }, "data-fg-bchn6": ":0:/src/app/pages/DeepDive.tsx:26:11:1215:581:e:ul:x", children: rs.map((e, t) => /* @__PURE__ */ b(r, { _fgT: "li", _fgS: "bchn8", _fgB: 1783946043332, style: { display: "flex", gap: "20px", alignItems: "flex-start" }, "data-fg-bchn8": ":0:/src/app/pages/DeepDive.tsx:28:15:1397:367:e:li:ete", children: [
        /* @__PURE__ */ n(r, { _fgT: "span", _fgS: "bchn9", _fgB: 1783946043332, style: { width: "6px", height: "6px", borderRadius: "50%", backgroundColor: z, flexShrink: 0, marginTop: "12px" }, "data-fg-bchn9": ":0:/src/app/pages/DeepDive.tsx:29:17:1493:126:e:span" }),
        /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bchn10", _fgB: 1783946043332, style: { fontFamily: f, fontSize: "20px", color: "#1A1A1A", lineHeight: 1.85, margin: 0 }, "data-fg-bchn10": ":0:/src/app/pages/DeepDive.tsx:30:17:1636:108:e:p:x", children: e })
      ] }, t)) }),
      /* @__PURE__ */ n(r, { _fgT: "blockquote", _fgS: "bchn12", _fgB: 1783946043332, style: { margin: "0 0 48px", paddingLeft: "24px", borderLeft: `3px solid ${Y}` }, "data-fg-bchn12": ":0:/src/app/pages/DeepDive.tsx:34:11:1807:402:e:blockquote:e", children: /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "bchn13", _fgB: 1783946043332, style: { fontFamily: Q, fontStyle: "italic", fontSize: "22px", color: V, lineHeight: 1.75 }, "data-fg-bchn13": ":0:/src/app/pages/DeepDive.tsx:35:13:1917:268:e:p:t", children: "It blends science, lived experience, and modern educational design to create understanding that is both accurate and deeply human." }) }),
      /* @__PURE__ */ n(
        r,
        {
          _fgT: Se,
          _fgS: "bchn15",
          _fgB: 1783946043332,
          to: "/",
          style: { fontFamily: f, fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: z, textDecoration: "none", borderBottom: `1px solid ${z}`, paddingBottom: "2px" },
          "data-fg-bchn15": ":0:node_modules/react-router:39:11:2220:302:e:Link:t:::::B0gV",
          children: "← Home Page"
        }
      )
    ] }) })
  ] });
}
const br = [
  {
    title: "Understanding Traumatic Brain Injury: Key Insights",
    author: "Russell Zaimi",
    date: "Apr 8",
    readTime: "4 min read",
    excerpt: "Traumatic Brain Injury (TBI) is a serious health concern that affects millions of people worldwide. It can result from various incidents, including falls, vehicle accidents, and sports injuries. Understanding TBI is crucial for prevention, treatment, and rehabilitation.",
    img: "https://static.wixstatic.com/media/cf5d54_75961113da9d4e88816e5befe069103f~mv2.png"
  },
  {
    title: "TBI Awareness: Impact on Education and Community",
    author: "Russell Zaimi",
    date: "Apr 8",
    readTime: "4 min read",
    excerpt: "Traumatic Brain Injury (TBI) affects millions of individuals each year, leading to significant challenges in various aspects of life, including education and community engagement. Understanding TBI and its implications is crucial for fostering a supportive environment for those affected.",
    img: "https://static.wixstatic.com/media/cf5d54_fcfbeb512b724ece8b5467ba0985e5b8~mv2.png"
  },
  {
    title: "Connecting Schools to TBI Education Resources",
    author: "Russell Zaimi",
    date: "Apr 8",
    readTime: "4 min read",
    excerpt: "Traumatic Brain Injury (TBI) is a significant public health issue that affects millions of individuals each year. For students, the impact of TBI can be profound, influencing their academic performance, social interactions, and overall well-being.",
    img: "https://static.wixstatic.com/media/cf5d54_8e640357426f48eaab60c8ec1558d77a~mv2.png"
  }
];
function is() {
  return /* @__PURE__ */ b(Ce, { children: [
    /* @__PURE__ */ n(r, { _fgT: qe, _fgS: "dd4p1", _fgB: 1783946043335, label: "Blog", title: "Insights & Resources", "data-fg-dd4p1": ":0:/src/app/pages/Blog.tsx:38:7:1899:56:e:PageHeader::::::BwET" }),
    /* @__PURE__ */ n(r, { _fgT: "section", _fgS: "dd4p2", _fgB: 1783946043335, style: { backgroundColor: W, padding: "80px 0 100px" }, "data-fg-dd4p2": ":0:/src/app/pages/Blog.tsx:40:7:1963:2675:e:section:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dd4p3", _fgB: 1783946043335, style: { maxWidth: "960px", margin: "0 auto", padding: "0 48px" }, "data-fg-dd4p3": ":0:/src/app/pages/Blog.tsx:41:9:2041:2580:e:div:e", children: /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dd4p4", _fgB: 1783946043335, style: { display: "flex", flexDirection: "column", gap: "56px" }, "data-fg-dd4p4": ":0:/src/app/pages/Blog.tsx:42:11:2124:2482:e:div:x", children: br.map(({ title: e, author: t, date: a, readTime: i, excerpt: o, img: l }, s) => /* @__PURE__ */ b(
      r,
      {
        _fgT: "article",
        _fgS: "dd4p6",
        _fgB: 1783946043335,
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          alignItems: "flex-start",
          paddingBottom: "56px",
          borderBottom: s < br.length - 1 ? "1px solid rgba(13,27,42,0.1)" : "none"
        },
        "data-fg-dd4p6": ":0:/src/app/pages/Blog.tsx:44:15:2291:2282:e:article:xtetxte",
        children: [
          /* @__PURE__ */ n(r, { _fgT: "div", _fgS: "dd4p8", _fgB: 1783946043335, style: { flexShrink: 0, width: "260px" }, "data-fg-dd4p8": ":0:/src/app/pages/Blog.tsx:56:17:2713:313:e:div:e", children: /* @__PURE__ */ n(
            r,
            {
              _fgT: ma,
              _fgS: "dd4p9",
              _fgB: 1783946043335,
              src: l,
              alt: e,
              style: { width: "260px", height: "174px", objectFit: "cover", borderRadius: "2px", display: "block" },
              "data-fg-dd4p9": ":0:/src/app/pages/Blog.tsx:57:19:2779:224:e:ImageWithFallback::::::BkmQ"
            }
          ) }),
          /* @__PURE__ */ b(r, { _fgT: "div", _fgS: "dd4p11", _fgB: 1783946043335, style: { flex: 1, minWidth: "240px" }, "data-fg-dd4p11": ":0:/src/app/pages/Blog.tsx:65:17:3073:1475:e:div:etetete", children: [
            /* @__PURE__ */ b(r, { _fgT: "p", _fgS: "dd4p12", _fgB: 1783946043335, style: { fontFamily: f, fontSize: "12px", color: "rgba(26,26,26,0.45)", letterSpacing: "0.05em", marginBottom: "14px" }, "data-fg-dd4p12": ":0:/src/app/pages/Blog.tsx:66:19:3136:202:e:p:xtxtx", children: [
              t,
              " · ",
              a,
              " · ",
              i
            ] }),
            /* @__PURE__ */ n(
              r,
              {
                _fgT: "h2",
                _fgS: "dd4p18",
                _fgB: 1783946043335,
                style: {
                  fontFamily: Q,
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: V,
                  lineHeight: 1.25,
                  marginBottom: "16px",
                  cursor: "pointer"
                },
                "data-fg-dd4p18": ":0:/src/app/pages/Blog.tsx:69:19:3357:430:e:h2:x",
                children: e
              }
            ),
            /* @__PURE__ */ n(r, { _fgT: "p", _fgS: "dd4p20", _fgB: 1783946043335, style: { fontFamily: f, fontSize: "17px", color: "rgba(26,26,26,0.7)", lineHeight: 1.8, marginBottom: "24px" }, "data-fg-dd4p20": ":0:/src/app/pages/Blog.tsx:82:19:3806:172:e:p:x", children: o }),
            /* @__PURE__ */ n(
              r,
              {
                _fgT: "span",
                _fgS: "dd4p22",
                _fgB: 1783946043335,
                style: {
                  fontFamily: f,
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: z,
                  borderBottom: `1px solid ${z}`,
                  paddingBottom: "2px",
                  cursor: "pointer"
                },
                "data-fg-dd4p22": ":0:/src/app/pages/Blog.tsx:85:19:3997:528:e:span:t",
                children: "Read more →"
              }
            )
          ] })
        ]
      },
      s
    )) }) }) })
  ] });
}
const os = ll([
  {
    path: "/",
    Component: kl,
    children: [
      { index: !0, Component: Cl },
      { path: "the-learning-experience", Component: ql },
      { path: "the-truth-about-tbi", Component: Ml },
      { path: "who-we-serve", Component: $l },
      { path: "our-story", Component: Kl },
      { path: "our-impact", Component: Jl },
      { path: "testimonials", Component: Zl },
      { path: "partnership-support", Component: es },
      { path: "contact", Component: ts },
      { path: "quick-digest-cognitive-friendly", Component: as },
      { path: "deep-dive-full-educational-journey", Component: ns },
      { path: "blog", Component: is }
    ]
  }
]);
function ls() {
  return /* @__PURE__ */ n(Fo, { router: os, "data-fg-d3bl0": ":0:node_modules/react-router:5:10:124:34:e:RouterProvider::1::::CE1n" });
}
const ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ls
}, Symbol.toStringTag, { value: "Module" }));
export {
  cs as Code0_8
};
