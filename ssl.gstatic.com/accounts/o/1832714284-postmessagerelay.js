/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k = this || self,
    w = function(a, b) {
        a = a.split(".");
        var c = k;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? c = c[e] && c[e] !== Object.prototype[e] ? c[e] : c[e] = {} : c[e] = b
    },
    x = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.A = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.v = function(e, d, h) {
            for (var p = Array(arguments.length - 2), m = 2; m < arguments.length; m++) p[m - 2] = arguments[m];
            return b.prototype[d].apply(e, p)
        }
    };

function y(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, y);
    else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
x(y, Error);
y.prototype.name = "CustomError";

function z(a, b) {
    a = a.split("%s");
    for (var c = "", e = a.length - 1, d = 0; d < e; d++) c += a[d] + (d < b.length ? b[d] : "%s");
    y.call(this, c + a[e])
}
x(z, y);
z.prototype.name = "AssertionError";
var B = function(a, b, c) {
    if (!a) {
        var e = "Assertion failed";
        if (b) {
            e += ": " + b;
            var d = Array.prototype.slice.call(arguments, 2)
        }
        throw new z("" + e, d || []);
    }
    return a
};
var C = Array.prototype.forEach ? function(a, b) {
    B(null != a.length);
    Array.prototype.forEach.call(a, b, void 0)
} : function(a, b) {
    for (var c = a.length, e = "string" === typeof a ? a.split("") : a, d = 0; d < c; d++) d in e && b.call(void 0, e[d], d, a)
};

function E() {
    var a = k.navigator;
    return a && (a = a.userAgent) ? a : ""
}

function F(a) {
    return -1 != E().indexOf(a)
};

function G() {
    return (F("Chrome") || F("CriOS")) && !F("Edge") || F("Silk")
};
var aa = -1 != E().toLowerCase().indexOf("webkit") && !F("Edge") && F("Mobile");
try {
    (new self.OffscreenCanvas(0, 0)).getContext("2d")
} catch (a) {};
!F("Android") || G();
G();
var ba = F("Safari") && !(G() || F("Coast") || F("Opera") || F("Edge") || F("Edg/") || F("OPR") || F("Firefox") || F("FxiOS") || F("Silk") || F("Android")) && !(F("iPhone") && !F("iPod") && !F("iPad") || F("iPad") || F("iPod"));
var K = function(a) {
        var b = window;
        aa && ba && b ? (b.focus(), H(b, a, 0)) : (a.close(), I(a))
    },
    H = function(a, b, c) {
        a.setTimeout(function() {
            b.closed || 5 == c ? I(b) : (b.close(), c++, H(a, b, c))
        }, 1E3)
    },
    I = function(a) {
        if (!a.closed && a.document && a.document.body)
            if (a = a.document.body, B(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in a) a.textContent = "Please close this window.";
            else if (3 == a.nodeType) a.data = "Please close this window.";
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild !=
                a.firstChild;) a.removeChild(B(a.lastChild));
            a.firstChild.data = "Please close this window."
        } else {
            for (var b; b = a.firstChild;) a.removeChild(b);
            B(a, "Node cannot be null or undefined.");
            a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode("Please close this window."))
        }
    };
var ca = function(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
        c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var e = b.indexOf(":");
    if (-1 != e) {
        var d = b.substring(e + 1);
        b = b.substring(0, e);
        if ("http" === c && "80" !== d || "https" === c && "443" !== d) a = ":" + d
    }
    return c + "://" + b + a
};

function da() {
    function a() {
        d[0] = 1732584193;
        d[1] = 4023233417;
        d[2] = 2562383102;
        d[3] = 271733878;
        d[4] = 3285377520;
        u = q = 0
    }

    function b(g) {
        for (var l = p, f = 0; 64 > f; f += 4) l[f / 4] = g[f] << 24 | g[f + 1] << 16 | g[f + 2] << 8 | g[f + 3];
        for (f = 16; 80 > f; f++) g = l[f - 3] ^ l[f - 8] ^ l[f - 14] ^ l[f - 16], l[f] = (g << 1 | g >>> 31) & 4294967295;
        g = d[0];
        var n = d[1],
            r = d[2],
            t = d[3],
            J = d[4];
        for (f = 0; 80 > f; f++) {
            if (40 > f)
                if (20 > f) {
                    var v = t ^ n & (r ^ t);
                    var D = 1518500249
                } else v = n ^ r ^ t, D = 1859775393;
            else 60 > f ? (v = n & r | t & (n | r), D = 2400959708) : (v = n ^ r ^ t, D = 3395469782);
            v = ((g << 5 | g >>> 27) & 4294967295) + v +
                J + D + l[f] & 4294967295;
            J = t;
            t = r;
            r = (n << 30 | n >>> 2) & 4294967295;
            n = g;
            g = v
        }
        d[0] = d[0] + g & 4294967295;
        d[1] = d[1] + n & 4294967295;
        d[2] = d[2] + r & 4294967295;
        d[3] = d[3] + t & 4294967295;
        d[4] = d[4] + J & 4294967295
    }

    function c(g, l) {
        if ("string" === typeof g) {
            g = unescape(encodeURIComponent(g));
            for (var f = [], n = 0, r = g.length; n < r; ++n) f.push(g.charCodeAt(n));
            g = f
        }
        l || (l = g.length);
        f = 0;
        if (0 == q)
            for (; f + 64 < l;) b(g.slice(f, f + 64)), f += 64, u += 64;
        for (; f < l;)
            if (h[q++] = g[f++], u++, 64 == q)
                for (q = 0, b(h); f + 64 < l;) b(g.slice(f, f + 64)), f += 64, u += 64
    }

    function e() {
        var g = [],
            l =
            8 * u;
        56 > q ? c(m, 56 - q) : c(m, 64 - (q - 56));
        for (var f = 63; 56 <= f; f--) h[f] = l & 255, l >>>= 8;
        b(h);
        for (f = l = 0; 5 > f; f++)
            for (var n = 24; 0 <= n; n -= 8) g[l++] = d[f] >> n & 255;
        return g
    }
    for (var d = [], h = [], p = [], m = [128], A = 1; 64 > A; ++A) m[A] = 0;
    var q, u;
    a();
    return {
        reset: a,
        update: c,
        digest: e,
        digestString: function() {
            for (var g = e(), l = "", f = 0; f < g.length; f++) l += "0123456789ABCDEF".charAt(Math.floor(g[f] / 16)) + "0123456789ABCDEF".charAt(g[f] % 16);
            return l
        }
    }
};
var ea = function(a, b, c) {
        var e = [];
        if (1 == (Array.isArray(null) ? 2 : 1)) return e = [b, a], C(c, function(m) {
            e.push(m)
        }), L(e.join(" "));
        var d = [],
            h = [];
        C(null, function(m) {
            h.push(m.key);
            d.push(m.value)
        });
        var p = Math.floor((new Date).getTime() / 1E3);
        e = 0 == d.length ? [p, b, a] : [d.join(":"), p, b, a];
        C(c, function(m) {
            e.push(m)
        });
        a = L(e.join(" "));
        p = [p, a];
        0 == h.length || p.push(h.join(""));
        return p.join("_")
    },
    L = function(a) {
        var b = da();
        b.update(a);
        return b.digestString().toLowerCase()
    };
var M = function(a) {
        var b = a || [];
        a = [];
        for (var c = 0, e = b.length; c < e; ++c) {
            var d = String(b[c] || "");
            d && a.push(d)
        }
        if (2 > a.length) return null;
        b = a[0];
        c = gadgets.rpc.getOrigin(a[1]);
        if (c !== a[1]) return null;
        a = a.slice(2);
        return (a = (c && b ? ["session_state", ea(ca(c), b, a || [])].join(" ") : null) || "") && a.substr(14) || null
    },
    N = function(a, b, c) {
        this.o = String(a || "");
        this.j = String(b || "");
        this.h = String(c || "");
        this.g = {};
        this.s = this.u = this.l = this.m = "";
        this.i = null
    };
N.prototype.evaluate = function() {
    var a = {},
        b = "";
    try {
        b = String(document.cookie || "")
    } catch (p) {}
    b = b.split("; ").join(";").split(";");
    for (var c = 0, e = b.length; c < e; ++c) {
        var d = b[c],
            h = d.indexOf("="); - 1 != h ? a[d.substr(0, h)] = d.substr(h + 1) : a[d] = null
    }
    this.g = a;
    if (this.g.SAPISID || this.g.APISID || this.g["__Secure-3PAPISID"] || this.g.SID)
        if (this.j = this.j.split(".")[0].split("@")[0], this.l = O(this, this.o))
            if (a = gadgets.rpc.getOrigin(String(window.location.href)), this.m = O(this, a)) {
                b = String(this.g.LSOLH || "").split(":");
                c = b.length;
                if (1 == c || 4 == c) this.u = b[0];
                if (3 == c || 4 == c) a = String(b[c - 3] || ""), b = String(b[c - 1] || ""), c = this.m, a ? (e = [a], c && e.push(c), c = L(e.join(" ")).substr(0, 4)) : c = null, c === b && (this.s = a);
                this.h && (a = this.h.indexOf("."), -1 != a && (a = this.h.substr(0, a) || "", this.h = a + "." + M([this.l, this.o, this.j, this.u, this.s, a]).substr(0, 4)));
                a = M([this.l, this.o, this.j, this.h]);
                this.h && (a = a + "." + this.h);
                this.i = a
            } else this.i = "";
    else this.i = ""
};
var O = function(a, b) {
    (b = String(a.g[0 == b.indexOf("https://") ? "SAPISID" : "APISID"] || "")) || (b = String(a.g["__Secure-3PAPISID"] || ""));
    return b
};
N.prototype.getVersionInfo = function(a) {
    var b = parseInt(a, 10);
    if (String(b) != a || !(0 <= b)) return null;
    a = this.s;
    if (!a) return null;
    a = a.split("|");
    return a.length <= b ? null : a[b] || null
};
var P = function(a, b, c) {
        a = new N(a, b, c);
        a.evaluate();
        return a
    },
    R = function(a, b, c) {
        c = c || Q(this);
        var e = null;
        if (a) {
            a = String(a);
            var d = a.indexOf("."); - 1 != d && (e = a.substr(d + 1))
        }
        b = P(c, b, e).i;
        if (null == a || "" == a) a = b == a;
        else if (null == b || b.length != a.length) a = !1;
        else {
            e = c = 0;
            for (d = a.length; e < d; ++e) c |= a.charCodeAt(e) ^ b.charCodeAt(e);
            a = 0 == c
        }
        return a
    },
    S = function(a, b, c) {
        c = c || Q(this);
        c = P(c);
        if (String(a) != c.i) throw Error("Unauthorized request");
        return c.getVersionInfo(String(b))
    },
    Q = function(a) {
        a = String(a.origin || "");
        if (!a) throw Error("RPC has no origin.");
        return a
    };
w("checkSessionState", R);
w("getVersionInfo", S);
var T, U, V, W, X, Y, fa = window,
    Z = (window.location.href || fa.location.href).match(RegExp(".*(\\?|#|&)usegapi=([^&#]+)")) || [];
"1" === decodeURIComponent(Z[Z.length - 1] || "") ? (V = function(a, b, c, e, d, h) {
    T.send(b, d, e, h || gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, W = function(a, b) {
    T.register(a, b, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
}, X = function(a) {
    var b = /^(?:https?:\/\/)?[0-9.\-A-Za-z]+(?::\d+)?/.exec(a);
    b = gapi.iframes.makeWhiteListIframesFilter([b ? b[0] : null]);
    V("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a, b)
}, U = function() {
    ha()
}, Y = function() {
    V("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    W("check_session_state",
        ia);
    W("get_versioninfo", ja)
}) : (V = function(a, b, c, e, d) {
    gadgets.rpc.call(a, b + ":" + c, e, d)
}, W = function(a, b) {
    gadgets.rpc.register(a, b)
}, X = function(a) {
    gadgets.rpc.getTargetOrigin("..") == gadgets.rpc.getOrigin(a) && V("..", "oauth2callback", gadgets.rpc.getAuthToken(".."), void 0, a)
}, U = function() {
    Y()
}, Y = function() {
    V("..", "oauth2relayReady", gadgets.rpc.getAuthToken(".."));
    W("check_session_state", R);
    W("get_versioninfo", S)
});
var ha = function() {
        var a = Y;
        window.gapi.load("gapi.iframes", function() {
            T = gapi.iframes.getContext().getParentIframe();
            a()
        })
    },
    ka = function(a) {
        window.setTimeout(function() {
            X(a)
        }, 1)
    },
    ia = function(a) {
        if (a) {
            var b = a.session_state;
            var c = a.client_id
        }
        return R(b, c, T.getOrigin())
    },
    ja = function(a) {
        return S(a.xapisidHash, a.sessionIndex, T.getOrigin())
    },
    la = !1,
    ma = !1,
    na = function() {
        ma = !0;
        la && U()
    };
w("oauth2callback", ka);
w("oauth2verify", function(a, b) {
    var c = window.open("about:blank", a),
        e;
    if (c && !c.closed && (e = c.oauth2callbackUrl)) return window.timeoutMap = window.timeoutMap || {}, window.realSetTimeout = window.realSetTimeout || window.setTimeout, window.setTimeout = function(d, h) {
        try {
            var p = d,
                m = !1;
            d = function() {
                if (!m) {
                    m = !0;
                    try {
                        window.timeoutMap[String(q)] = void 0, delete window.timeoutMap[String(q)]
                    } catch (u) {}
                    return p.call(this)
                }
            };
            var A = c.setTimeout(d, h);
            var q = window.realSetTimeout(d, h);
            window.timeoutMap[String(q)] = A;
            return q
        } catch (u) {}
        return window.realSetTimeout(d,
            h)
    }, window.realClearTimeout = window.realClearTimeout || window.clearTimeout, window.clearTimeout = function(d) {
        try {
            var h = window.timeoutMap[String(d)];
            h && c.clearTimeout(h)
        } catch (p) {}
        try {
            window.timeoutMap[String(d)] = void 0, delete window.timeoutMap[String(d)]
        } catch (p) {}
        window.realClearTimeout(d)
    }, ka(String(e)), "keep_open" != b && K(c), !0;
    c && !c.closed && K(c);
    return !1
});
w("init", function() {
    la = !0;
    ma && U()
});
window.addEventListener ? window.addEventListener("load", na, !1) : window.attachEvent("onload", na);