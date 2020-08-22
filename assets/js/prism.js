/* PrismJS 1.20.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+css-extras+json+markup-templating+php+sass+scss+twig&plugins=line-numbers+inline-color */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function (u) { var c = /\blang(?:uage)?-([\w-]+)\b/i, n = 0, C = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function e(n) { return n instanceof _ ? new _(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id }, clone: function t(e, r) { var a, n, l = C.util.type(e); switch (r = r || {}, l) { case "Object": if (n = C.util.objId(e), r[n]) return r[n]; for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r)); return a; case "Array": return n = C.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) { a[n] = t(e, r) }), a); default: return e } }, getLanguage: function (e) { for (; e && !c.test(e.className);)e = e.parentElement; return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none" }, currentScript: function () { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (e) { var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1]; if (n) { var t = document.getElementsByTagName("script"); for (var r in t) if (t[r].src == n) return t[r] } return null } } }, languages: { extend: function (e, n) { var t = C.util.clone(C.languages[e]); for (var r in n) t[r] = n[r]; return t }, insertBefore: function (t, e, n, r) { var a = (r = r || C.languages)[t], l = {}; for (var i in a) if (a.hasOwnProperty(i)) { if (i == e) for (var o in n) n.hasOwnProperty(o) && (l[o] = n[o]); n.hasOwnProperty(i) || (l[i] = a[i]) } var s = r[t]; return r[t] = l, C.languages.DFS(C.languages, function (e, n) { n === s && e != t && (this[e] = l) }), l }, DFS: function e(n, t, r, a) { a = a || {}; var l = C.util.objId; for (var i in n) if (n.hasOwnProperty(i)) { t.call(n, i, n[i], r || i); var o = n[i], s = C.util.type(o); "Object" !== s || a[l(o)] ? "Array" !== s || a[l(o)] || (a[l(o)] = !0, e(o, t, i, a)) : (a[l(o)] = !0, e(o, t, null, a)) } } }, plugins: {}, highlightAll: function (e, n) { C.highlightAllUnder(document, e, n) }, highlightAllUnder: function (e, n, t) { var r = { callback: t, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; C.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), C.hooks.run("before-all-elements-highlight", r); for (var a, l = 0; a = r.elements[l++];)C.highlightElement(a, !0 === n, r.callback) }, highlightElement: function (e, n, t) { var r = C.util.getLanguage(e), a = C.languages[r]; e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r; var l = e.parentNode; l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r); var i = { element: e, language: r, grammar: a, code: e.textContent }; function o(e) { i.highlightedCode = e, C.hooks.run("before-insert", i), i.element.innerHTML = i.highlightedCode, C.hooks.run("after-highlight", i), C.hooks.run("complete", i), t && t.call(i.element) } if (C.hooks.run("before-sanity-check", i), !i.code) return C.hooks.run("complete", i), void (t && t.call(i.element)); if (C.hooks.run("before-highlight", i), i.grammar) if (n && u.Worker) { var s = new Worker(C.filename); s.onmessage = function (e) { o(e.data) }, s.postMessage(JSON.stringify({ language: i.language, code: i.code, immediateClose: !0 })) } else o(C.highlight(i.code, i.grammar, i.language)); else o(C.util.encode(i.code)) }, highlight: function (e, n, t) { var r = { code: e, grammar: n, language: t }; return C.hooks.run("before-tokenize", r), r.tokens = C.tokenize(r.code, r.grammar), C.hooks.run("after-tokenize", r), _.stringify(C.util.encode(r.tokens), r.language) }, tokenize: function (e, n) { var t = n.rest; if (t) { for (var r in t) n[r] = t[r]; delete n.rest } var a = new l; return M(a, a.head, e), function e(n, t, r, a, l, i, o) { for (var s in r) if (r.hasOwnProperty(s) && r[s]) { var u = r[s]; u = Array.isArray(u) ? u : [u]; for (var c = 0; c < u.length; ++c) { if (o && o == s + "," + c) return; var g = u[c], f = g.inside, h = !!g.lookbehind, d = !!g.greedy, v = 0, p = g.alias; if (d && !g.pattern.global) { var m = g.pattern.toString().match(/[imsuy]*$/)[0]; g.pattern = RegExp(g.pattern.source, m + "g") } g = g.pattern || g; for (var y = a.next, k = l; y !== t.tail; k += y.value.length, y = y.next) { var b = y.value; if (t.length > n.length) return; if (!(b instanceof _)) { var x = 1; if (d && y != t.tail.prev) { g.lastIndex = k; var w = g.exec(n); if (!w) break; var A = w.index + (h && w[1] ? w[1].length : 0), P = w.index + w[0].length, S = k; for (S += y.value.length; S <= A;)y = y.next, S += y.value.length; if (S -= y.value.length, k = S, y.value instanceof _) continue; for (var O = y; O !== t.tail && (S < P || "string" == typeof O.value && !O.prev.value.greedy); O = O.next)x++, S += O.value.length; x--, b = n.slice(k, S), w.index -= k } else { g.lastIndex = 0; var w = g.exec(b) } if (w) { h && (v = w[1] ? w[1].length : 0); var A = w.index + v, w = w[0].slice(v), P = A + w.length, E = b.slice(0, A), N = b.slice(P), j = y.prev; E && (j = M(t, j, E), k += E.length), W(t, j, x); var L = new _(s, f ? C.tokenize(w, f) : w, p, w, d); if (y = M(t, j, L), N && M(t, y, N), 1 < x && e(n, t, r, y.prev, k, !0, s + "," + c), i) break } else if (i) break } } } } }(e, a, n, a.head, 0), function (e) { var n = [], t = e.head.next; for (; t !== e.tail;)n.push(t.value), t = t.next; return n }(a) }, hooks: { all: {}, add: function (e, n) { var t = C.hooks.all; t[e] = t[e] || [], t[e].push(n) }, run: function (e, n) { var t = C.hooks.all[e]; if (t && t.length) for (var r, a = 0; r = t[a++];)r(n) } }, Token: _ }; function _(e, n, t, r, a) { this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length, this.greedy = !!a } function l() { var e = { value: null, prev: null, next: null }, n = { value: null, prev: e, next: null }; e.next = n, this.head = e, this.tail = n, this.length = 0 } function M(e, n, t) { var r = n.next, a = { value: t, prev: n, next: r }; return n.next = a, r.prev = a, e.length++, a } function W(e, n, t) { for (var r = n.next, a = 0; a < t && r !== e.tail; a++)r = r.next; (n.next = r).prev = n, e.length -= a } if (u.Prism = C, _.stringify = function n(e, t) { if ("string" == typeof e) return e; if (Array.isArray(e)) { var r = ""; return e.forEach(function (e) { r += n(e, t) }), r } var a = { type: e.type, content: n(e.content, t), tag: "span", classes: ["token", e.type], attributes: {}, language: t }, l = e.alias; l && (Array.isArray(l) ? Array.prototype.push.apply(a.classes, l) : a.classes.push(l)), C.hooks.run("wrap", a); var i = ""; for (var o in a.attributes) i += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"'; return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + i + ">" + a.content + "</" + a.tag + ">" }, !u.document) return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener("message", function (e) { var n = JSON.parse(e.data), t = n.language, r = n.code, a = n.immediateClose; u.postMessage(C.highlight(r, C.languages[t], t)), a && u.close() }, !1)), C; var e = C.util.currentScript(); function t() { C.manual || C.highlightAll() } if (e && (C.filename = e.src, e.hasAttribute("data-manual") && (C.manual = !0)), !C.manual) { var r = document.readyState; "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16) } return C }(_self); "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0 }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) { "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&")) }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function (a, e) { var s = {}; s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; var t = {}; t[a] = { pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () { return a }), "i"), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore("markup", "cdata", t) } }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml;
!function (s) { var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: !0, alias: "selector" } } }, url: { pattern: RegExp("url\\((?:" + e.source + "|[^\n\r()]*)\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/ } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"), string: { pattern: e, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css; var t = s.languages.markup; t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: t.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: s.languages.css } }, alias: "language-css" } }, t.tag)) }(Prism);
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
!function (e) { var a, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; e.languages.css.selector = { pattern: e.languages.css.selector, inside: a = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-:.\w]+/, id: /#[-:.\w]+/, attribute: { pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"), greedy: !0, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword" }, namespace: { pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)[-\w\xA0-\uFFFF]+/, lookbehind: !0 }, "attr-value": [n, { pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i, lookbehind: !0 } }); var r = { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 }, i = { pattern: /(^|[^\w.-])-?\d*\.?\d+/, lookbehind: !0 }; e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: { pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i, alias: "color" }, color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, { pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: r, number: i, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: r, number: i }) }(Prism);
Prism.languages.json = { property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 }, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 }, comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } };
!function (h) { function v(e, n) { return "___" + e.toUpperCase() + n + "___" } Object.defineProperties(h.languages["markup-templating"] = {}, { buildPlaceholders: { value: function (a, r, e, o) { if (a.language === r) { var c = a.tokenStack = []; a.code = a.code.replace(e, function (e) { if ("function" == typeof o && !o(e)) return e; for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));)++t; return c[t] = e, n }), a.grammar = h.languages.markup } } }, tokenizePlaceholders: { value: function (p, k) { if (p.language === k && p.tokenStack) { p.grammar = h.languages[k]; var m = 0, d = Object.keys(p.tokenStack); !function e(n) { for (var t = 0; t < n.length && !(m >= d.length); t++) { var a = n[t]; if ("string" == typeof a || a.content && "string" == typeof a.content) { var r = d[m], o = p.tokenStack[r], c = "string" == typeof a ? a : a.content, i = v(k, r), u = c.indexOf(i); if (-1 < u) { ++m; var g = c.substring(0, u), l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o), s = c.substring(u + i.length), f = []; g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f } } else a.content && e(a.content) } return n }(p.tokens) } } } }) }(Prism);
!function (n) { n.languages.php = n.languages.extend("clike", { keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i, boolean: { pattern: /\b(?:false|true)\b/i, alias: "constant" }, constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i], comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 } }), n.languages.insertBefore("php", "string", { "shell-comment": { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: "comment" } }), n.languages.insertBefore("php", "comment", { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important" } }), n.languages.insertBefore("php", "keyword", { variable: /\$+(?:\w+\b|(?={))/i, package: { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), n.languages.insertBefore("php", "operator", { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }); var e = { pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/, lookbehind: !0, inside: n.languages.php }; n.languages.insertBefore("php", "string", { "nowdoc-string": { pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/, greedy: !0, alias: "string", inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<'?|[';]$/ } } } }, "heredoc-string": { pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i, greedy: !0, alias: "string", inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: "symbol", inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: e } }, "single-quoted-string": { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: "string" }, "double-quoted-string": { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, alias: "string", inside: { interpolation: e } } }), delete n.languages.php.string, n.hooks.add("before-tokenize", function (e) { if (/<\?/.test(e.code)) { n.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi) } }), n.hooks.add("after-tokenize", function (e) { n.languages["markup-templating"].tokenizePlaceholders(e, "php") }) }(Prism);
!function (e) { e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 } }), e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }), delete e.languages.sass.atrule; var t = /\$[-\w]+|#\{\$[-\w]+\}/, a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }]; e.languages.insertBefore("sass", "property", { "variable-line": { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: a } }, "property-line": { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: a, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", { selector: { pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/, lookbehind: !0 } }) }(Prism);
Prism.languages.scss = Prism.languages.extend("css", { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)?url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: "important" }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, property: { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore("scss", "atrule", { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.insertBefore("scss", "important", { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore("scss", "function", { placeholder: { pattern: /%[-\w]+/, alias: "selector" }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: "keyword" }, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" }, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
Prism.languages.twig = { comment: /\{#[\s\S]*?#\}/, tag: { pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/, inside: { ld: { pattern: /^(?:\{\{-?|\{%-?\s*\w+)/, inside: { punctuation: /^(?:\{\{|\{%)-?/, keyword: /\w+/ } }, rd: { pattern: /-?(?:%\}|\}\})$/, inside: { punctuation: /.+/ } }, string: { pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/, inside: { punctuation: /^['"]|['"]$/ } }, keyword: /\b(?:even|if|odd)\b/, boolean: /\b(?:true|false|null)\b/, number: /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/, operator: [{ pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/, lookbehind: !0 }, /[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/], property: /\b[a-zA-Z_]\w*\b/, punctuation: /[()\[\]{}:.,]/ } }, other: { pattern: /\S(?:[\s\S]*\S)?/, inside: Prism.languages.markup } };
!function () { if ("undefined" != typeof self && self.Prism && self.document) { var l = "line-numbers", c = /\n(?!$)/g, m = function (e) { var t = a(e)["white-space"]; if ("pre-wrap" === t || "pre-line" === t) { var n = e.querySelector("code"), r = e.querySelector(".line-numbers-rows"); if (!n || !r) return; var s = e.querySelector(".line-numbers-sizer"), i = n.textContent.split(c); s || ((s = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(s)), s.style.display = "block", i.forEach(function (e, t) { s.textContent = e || "\n"; var n = s.getBoundingClientRect().height; r.children[t].style.height = n + "px" }), s.textContent = "", s.style.display = "none" } }, a = function (e) { return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null }; window.addEventListener("resize", function () { Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m) }), Prism.hooks.add("complete", function (e) { if (e.code) { var t = e.element, n = t.parentNode; if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) { for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode)if (s.test(i.className)) { r = !0; break } if (r) { t.className = t.className.replace(s, " "), s.test(n.className) || (n.className += " line-numbers"); var l, a = e.code.match(c), o = a ? a.length + 1 : 1, u = new Array(o + 1).join("<span></span>"); (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), m(n), Prism.hooks.run("line-numbers", e) } } } }), Prism.hooks.add("line-numbers", function (e) { e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0 }), Prism.plugins.lineNumbers = { getLine: function (e, t) { if ("PRE" === e.tagName && e.classList.contains(l)) { var n = e.querySelector(".line-numbers-rows"), r = parseInt(e.getAttribute("data-start"), 10) || 1, s = r + (n.children.length - 1); t < r && (t = r), s < t && (t = s); var i = t - r; return n.children[i] } }, resize: function (e) { m(e) } } } }();
!function () { if ("undefined" != typeof self && "undefined" != typeof Prism && "undefined" != typeof document) { var a = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g, c = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i, f = [function (n) { var r = c.exec(n); if (r) { for (var o = 6 <= (n = r[1]).length ? 2 : 1, e = n.length / o, s = 1 == o ? 1 / 15 : 1 / 255, t = [], i = 0; i < e; i++) { var a = parseInt(n.substr(i * o, o), 16); t.push(a * s) } return 3 == e && t.push(1), "rgba(" + t.slice(0, 3).map(function (n) { return String(Math.round(255 * n)) }).join(",") + "," + String(Number(t[3].toFixed(3))) + ")" } }, function (n) { var r = (new Option).style; return r.color = n, r.color ? n : void 0 }]; Prism.hooks.add("wrap", function (n) { if ("color" === n.type || 0 <= n.classes.indexOf("color")) { for (var r, o = n.content, e = o.split(a).join(""), s = 0, t = f.length; s < t && !r; s++)r = f[s](e); if (!r) return; var i = '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' + r + ';"></span></span>'; n.content = i + o } }) } }();
