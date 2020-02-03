!(function(t, e) {
    for (var r in e) t[r] = e[r]
})(
    this,
    (function(t) {
        var e = {}
        function r(n) {
            if (e[n]) return e[n].exports
            var o = (e[n] = { i: n, l: !1, exports: {} })
            return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
        }
        return (
            (r.m = t),
            (r.c = e),
            (r.d = function(t, e, n) {
                r.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: n })
            }),
            (r.r = function(t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 })
            }),
            (r.t = function(t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t
                var n = Object.create(null)
                if (
                    (r.r(n),
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: t
                    }),
                    2 & e && 'string' != typeof t)
                )
                    for (var o in t)
                        r.d(
                            n,
                            o,
                            function(e) {
                                return t[e]
                            }.bind(null, o)
                        )
                return n
            }),
            (r.n = function(t) {
                var e =
                    t && t.__esModule
                        ? function() {
                              return t.default
                          }
                        : function() {
                              return t
                          }
                return r.d(e, 'a', e), e
            }),
            (r.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (r.p = ''),
            r((r.s = 2))
        )
    })([
        function(t, e, r) {
            'use strict'
            function n(t, e) {
                var r = this
                ;(this.location = o(t)),
                    (this.label = o(e)),
                    (this.updateLocation = function(t) {
                        var e = t.filter(function(t) {
                            return t.label() == r.label()
                        })
                        e.length > 0 &&
                            r.location(
                                (function(t) {
                                    var e = t[0].location().map(function() {
                                        return 0
                                    })
                                    return t
                                        .map(function(t) {
                                            return t.location()
                                        })
                                        .reduce(function(t, e) {
                                            return (function(t, e) {
                                                return t.map(function(t, r) {
                                                    return t + e[r]
                                                })
                                            })(t, e)
                                        }, e)
                                        .map(function(e) {
                                            return e / t.length
                                        })
                                })(e)
                            )
                    })
            }
            function o(t, e) {
                var r = t,
                    n =
                        e ||
                        function(t) {
                            return !0
                        }
                return function(t) {
                    if (void 0 === t) return r
                    n(t) && (r = t)
                }
            }
            t.exports = {
                data: o([], function(t) {
                    var e = t[0].length
                    return t
                        .map(function(t) {
                            return t.length == e
                        })
                        .reduce(function(t, e) {
                            return t & e
                        }, !0)
                }),
                clusters: function() {
                    var t = (function(t, e) {
                            for (
                                var r =
                                        e.k ||
                                        Math.round(Math.sqrt(t.length / 2)),
                                    i = e.iterations,
                                    a = t.map(function(t) {
                                        return new (function(t) {
                                            var e = this
                                            ;(this.location = o(t)),
                                                (this.label = o()),
                                                (this.updateLabel = function(
                                                    t
                                                ) {
                                                    var r = t.map(function(t) {
                                                        return (function(t, e) {
                                                            return t
                                                                .map(function(
                                                                    t,
                                                                    r
                                                                ) {
                                                                    return Math.pow(
                                                                        t -
                                                                            e[
                                                                                r
                                                                            ],
                                                                        2
                                                                    )
                                                                })
                                                                .reduce(
                                                                    function(
                                                                        t,
                                                                        e
                                                                    ) {
                                                                        return (
                                                                            t +
                                                                            e
                                                                        )
                                                                    },
                                                                    0
                                                                )
                                                        })(
                                                            e.location(),
                                                            t.location()
                                                        )
                                                    })
                                                    e.label(
                                                        (function(t) {
                                                            var e = t.reduce(
                                                                function(t, e) {
                                                                    return Math.min(
                                                                        t,
                                                                        e
                                                                    )
                                                                }
                                                            )
                                                            return t.indexOf(e)
                                                        })(r)
                                                    )
                                                })
                                        })(t)
                                    }),
                                    s = [],
                                    l = 0;
                                l < r;
                                l++
                            )
                                s.push(new n(a[l % a.length].location(), l))
                            for (var c = 0; c < i; c++)
                                a.forEach(function(t) {
                                    t.updateLabel(s)
                                }),
                                    s.forEach(function(t) {
                                        t.updateLocation(a)
                                    })
                            return { points: a, centroids: s }
                        })(this.data(), {
                            k: this.k(),
                            iterations: this.iterations()
                        }),
                        e = t.points
                    return t.centroids.map(function(t) {
                        return {
                            centroid: t.location(),
                            points: e
                                .filter(function(e) {
                                    return e.label() == t.label()
                                })
                                .map(function(t) {
                                    return t.location()
                                })
                        }
                    })
                },
                k: o(void 0, function(t) {
                    return (t % 1 == 0) & (t > 0)
                }),
                iterations: o(Math.pow(10, 3), function(t) {
                    return (t % 1 == 0) & (t > 0)
                })
            }
        },
        function(t, e, r) {
            'use strict'
            const n = Object.freeze({
                topRight: (t, e) =>
                    e[0] < t[0]
                        ? -1
                        : e[0] > t[0]
                        ? 1
                        : e[1] < t[1]
                        ? -1
                        : e[1] > t[1]
                        ? 1
                        : 0,
                topLeft: (t, e) =>
                    t[0] < e[0]
                        ? -1
                        : t[0] > e[0]
                        ? 1
                        : t[1] < e[1]
                        ? 1
                        : t[1] > e[1]
                        ? -1
                        : 0,
                bottomRight: (t, e) =>
                    e[0] < t[0]
                        ? -1
                        : e[0] > t[0]
                        ? 1
                        : e[1] < t[1]
                        ? 1
                        : e[1] > t[1]
                        ? -1
                        : 0,
                bottomLeft: (t, e) =>
                    t[0] < e[0]
                        ? -1
                        : t[0] > e[0]
                        ? 1
                        : t[1] < e[1]
                        ? -1
                        : t[1] > e[1]
                        ? 1
                        : 0
            })
            e.getParetoFrontier = (t, e) => {
                if (
                    !Array.isArray(t) ||
                    !t.every(t => Array.isArray(t) && t.length >= 2)
                )
                    throw new TypeError('Require array of points as input')
                const r = (e && n[e.optimize]) || n.topRight,
                    o = r([0, 1], [0, 0]) < 0
                let i
                return Array.from(t)
                    .sort(r)
                    .filter(
                        (t, e) =>
                            !!(
                                0 === e ||
                                (o && t[1] > i) ||
                                (!o && t[1] < i)
                            ) && ((i = t[1]), !0)
                    )
            }
        },
        function(t, e, r) {
            'use strict'
            r.r(e)
            r(8), r(3)
            var n =
                Object.assign ||
                function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var o in (e = arguments[r]))
                            Object.prototype.hasOwnProperty.call(e, o) &&
                                (t[o] = e[o])
                    return t
                }
            function o(t, e, r) {
                var n = this,
                    o = function() {
                        if (t.length > 0) {
                            var i = t.shift()
                            i && i.apply(n, [e, o])
                        } else r(e)
                    }
                o()
            }
            function i(t, e) {
                var r
                try {
                    r = JSON.stringify(t)
                } catch (t) {
                    throw new Error(
                        'Network request failed. Payload is not serializable: ' +
                            t.message
                    )
                }
                return n({ body: r, method: 'POST' }, e, {
                    headers: n(
                        { Accept: '*/*', 'Content-Type': 'application/json' },
                        e.headers || []
                    )
                })
            }
            function a(t) {
                void 0 === t && (t = {})
                var e = t.constructOptions,
                    r = t.customFetch,
                    a = t.uri || '/graphql',
                    s = [],
                    l = [],
                    c = [],
                    u = [],
                    d = function(t) {
                        var d,
                            p = {},
                            f = Array.isArray(t)
                        return (function(t, e) {
                            return new Promise(function(r, n) {
                                o(e ? l.slice() : s.slice(), t, r)
                            })
                        })(
                            f
                                ? { requests: t, options: p }
                                : { request: t, options: p },
                            f
                        )
                            .then(function(t) {
                                return (
                                    e || i
                                )(t.request || t.requests, t.options)
                            })
                            .then(function(t) {
                                return (p = n({}, t)), (r || fetch)(a, p)
                            })
                            .then(function(t) {
                                return t.text().then(function(e) {
                                    try {
                                        var r = JSON.parse(e)
                                        return (t.raw = e), (t.parsed = r), t
                                    } catch (r) {
                                        return (d = r), (t.raw = e), t
                                    }
                                })
                            })
                            .then(function(t) {
                                return (function(t, e) {
                                    return new Promise(function(r, n) {
                                        o(e ? u.slice() : c.slice(), t, r)
                                    })
                                })({ response: t, options: p }, f)
                            })
                            .then(function(t) {
                                var e = t.response
                                if (e.parsed) {
                                    if (!f) return n({}, e.parsed)
                                    if (Array.isArray(e.parsed)) return e.parsed
                                    !(function(t) {
                                        var e = new Error(
                                            'A batched Operation of responses for '
                                        )
                                        throw ((e.response = t), e)
                                    })(e)
                                } else
                                    !(function(t, e) {
                                        var r
                                        throw (((r =
                                            t && t.status >= 300
                                                ? new Error(
                                                      'Network request failed with status ' +
                                                          t.status +
                                                          ' - "' +
                                                          t.statusText +
                                                          '"'
                                                  )
                                                : new Error(
                                                      'Network request failed to return valid JSON'
                                                  )).response = t),
                                        (r.parseError = e),
                                        r)
                                    })(e, d)
                            })
                    }
                return (
                    (d.use = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Middleware must be a function')
                        return s.push(t), d
                    }),
                    (d.useAfter = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Afterware must be a function')
                        return c.push(t), d
                    }),
                    (d.batchUse = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Middleware must be a function')
                        return l.push(t), d
                    }),
                    (d.batchUseAfter = function(t) {
                        if ('function' != typeof t)
                            throw new Error('Afterware must be a function')
                        return u.push(t), d
                    }),
                    d
                )
            }
            function s(t) {
                let e = t + '__none',
                    r = t + '__squares',
                    n = t + '__diagonals',
                    o = t + '__clusters'
                d3.select('#' + t)
                    .append('div')
                    .attr('id', 'tooltip_container')
                let i = d3
                    .select('#' + t)
                    .append('form')
                    .append('select')
                    .attr('class', 'classificators_list')
                    .attr('id', t + '_dropdown_list')
                    .on('change', function(t) {
                        let e = document.getElementById(
                                this.options[this.selectedIndex].id.split(
                                    '__'
                                )[0]
                            ),
                            r = e.getAttribute('metric_x'),
                            n = e.getAttribute('metric_y')
                        S(this.options[this.selectedIndex].id, r, n, B)
                    })
                    .append('optgroup')
                    .attr('label', 'Select a classification method:')
                i
                    .append('option')
                    .attr('class', 'selection_option')
                    .attr('id', e)
                    .attr('title', 'Show only raw data')
                    .attr('selected', 'disabled')
                    .attr('data-toggle', 'list_tooltip')
                    .attr('data-container', '#tooltip_container')
                    .text('NO CLASSIFICATION'),
                    i
                        .append('option')
                        .attr('class', 'selection_option')
                        .attr('id', r)
                        .attr(
                            'title',
                            'Apply square quartiles classification method (based on the 0.5 quartile of the X and Y metrics)'
                        )
                        .attr('data-toggle', 'list_tooltip')
                        .attr('data-container', '#tooltip_container')
                        .text('SQUARE QUARTILES'),
                    i
                        .append('option')
                        .attr('class', 'selection_option')
                        .attr('id', n)
                        .attr(
                            'title',
                            "Apply diagonal quartiles classifcation method (based on the assignment of a score to each participant proceeding from its distance to the 'optimal performance' corner)"
                        )
                        .attr('data-toggle', 'list_tooltip')
                        .attr('data-container', '#tooltip_container')
                        .text('DIAGONAL QUARTILES'),
                    i
                        .append('option')
                        .attr('class', 'selection_option')
                        .attr('id', o)
                        .attr(
                            'title',
                            'Apply K-Means clustering method (group the participants using the K-means clustering algorithm and sort the clusters according to the performance)'
                        )
                        .attr('data-toggle', 'list_tooltip')
                        .attr('data-container', '#tooltip_container')
                        .text('K-MEANS CLUSTERING')
            }
            function l(t, e) {
                let r = []
                return (
                    t.forEach(t => {
                        ;-1 ==
                            $.inArray(
                                t.toolname.replace(/[\. ()/_]/g, '-'),
                                e
                            ) && r.push(t)
                    }),
                    r
                )
            }
            var c = r(1)
            function u(t, e, r, n) {
                var o = document.getElementById(t + '_table'),
                    i = o.insertRow(-1)
                ;(i.insertCell(0).innerHTML = '<b>TOOL</b>'),
                    (i.insertCell(1).innerHTML = '<b>QUARTILE</b>'),
                    r.forEach(function(r) {
                        var i = o.insertRow(-1)
                        if (
                            ((i.insertCell(0).innerHTML = r.toolname),
                            -1 ==
                                $.inArray(
                                    r.toolname.replace(/[\. ()/_]/g, '-'),
                                    n
                                ))
                        ) {
                            let t = e.find(
                                t =>
                                    t.toolname.replace(/[\. ()/_]/g, '-') ===
                                    r.toolname.replace(/[\. ()/_]/g, '-')
                            )
                            i.insertCell(1).innerHTML = t.quartile
                        } else i.insertCell(1).innerHTML = '--'
                        var a = i.cells[0]
                        ;(a.id =
                            t +
                            '___cell' +
                            r.toolname.replace(/[\. ()/-]/g, '_')),
                            a.addEventListener('click', function(e) {
                                let r = this.id,
                                    n =
                                        t +
                                        '___leg_rect' +
                                        r.split('___cell')[1]
                                document
                                    .getElementById(n)
                                    .dispatchEvent(new Event('click'))
                            }),
                            a.addEventListener('mouseover', function(t) {
                                let e = this.id
                                d3.select(this).style('cursor', 'pointer')
                                e.split('___cell')[1]
                                1 == d3.select(this).style('opacity') ||
                                0.5 == d3.select(this).style('opacity')
                                    ? ($(this).css('opacity', 0.7),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 0.7))
                                    : ($(this).css('opacity', 1),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 1))
                            }),
                            a.addEventListener('mouseout', function(e) {
                                let r = this.id
                                d3.select(this).style('cursor', 'default')
                                let n =
                                    t + '___leg_rect' + r.split('___cell')[1]
                                0.2 == d3.select('#' + n).style('opacity') ||
                                0.5 == d3.select('#' + n).style('opacity')
                                    ? ($(this).css('opacity', 0.5),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 0.5))
                                    : ($(this).css('opacity', 1),
                                      $(this)
                                          .closest('tr')
                                          .css('opacity', 1))
                            })
                    })
            }
            function d(t, e, r) {
                var n = Object.keys(e)
                $('#' + t + '_table td').each(function() {
                    var t = $(this).html()
                    1 == t
                        ? $(this).css({ background: '#238b45' })
                        : 2 == t
                        ? $(this).css({ background: '#74c476' })
                        : 3 == t
                        ? $(this).css({ background: '#bae4b3' })
                        : 4 == t
                        ? $(this).css({ background: '#edf8e9' })
                        : '--' == t
                        ? $(this).css({ background: '#f0f0f5' })
                        : $.inArray(t, n) > -1 &&
                          -1 == $.inArray(t.replace(/[\. ()/_]/g, '-'), r)
                        ? $(this).css({
                              background:
                                  'linear-gradient(to left, white 92%, ' +
                                  e[t] +
                                  ' 8%)'
                          })
                        : $.inArray(t.replace(/[\. ()/_]/g, '-'), r) > -1
                        ? ($(this).css({
                              background:
                                  'linear-gradient(to left, white 92%, ' +
                                  e[t] +
                                  ' 8%)',
                              opacity: 0.5
                          }),
                          $(this)
                              .closest('tr')
                              .css('opacity', 0.5))
                        : $(this).css({ background: '#FFFFFF' })
                })
            }
            function p(t, e, r, n, o, i, a, s, c, p) {
                let f = l(t, i),
                    h = f
                        .map(t => t.x)
                        .sort(function(t, e) {
                            return t - e
                        }),
                    y = f
                        .map(t => t.y)
                        .sort(function(t, e) {
                            return t - e
                        }),
                    _ = d3.quantile(h, 0.5),
                    m = d3.quantile(y, 0.5),
                    g = r.domain(),
                    b = n.domain(),
                    v = d3.format(',')
                e
                    .append('line')
                    .attr('x1', r(_))
                    .attr('y1', n(b[0]))
                    .attr('x2', r(_))
                    .attr('y2', n(b[1]))
                    .attr('id', function(t) {
                        return s + '___x_quartile'
                    })
                    .attr('stroke', '#0A58A2')
                    .attr('stroke-width', 2)
                    .style('stroke-dasharray', '20, 5')
                    .style('opacity', 0.4)
                    .on('mouseover', function(t) {
                        o
                            .transition()
                            .duration(100)
                            .style('opacity', 0.9),
                            o
                                .html('X quartile = ' + v(_))
                                .style('left', d3.event.pageX + 'px')
                                .style('top', d3.event.pageY + 'px')
                    })
                    .on('mouseout', function(t) {
                        o.transition()
                            .duration(1e3)
                            .style('opacity', 0)
                    }),
                    e
                        .append('line')
                        .attr('x1', r(g[0]))
                        .attr('y1', n(m))
                        .attr('x2', r(g[1]))
                        .attr('y2', n(m))
                        .attr('id', function(t) {
                            return s + '___y_quartile'
                        })
                        .attr('stroke', '#0A58A2')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '20, 5')
                        .style('opacity', 0.4)
                        .on('mouseover', function(t) {
                            o
                                .transition()
                                .duration(100)
                                .style('opacity', 0.9),
                                o
                                    .html('Y quartile = ' + v(m))
                                    .style('left', d3.event.pageX + 'px')
                                    .style('top', d3.event.pageY + 'px')
                        })
                        .on('mouseout', function(t) {
                            o.transition()
                                .duration(1500)
                                .style('opacity', 0)
                        }),
                    1 == c &&
                        (function(t, e, r, n, o, i, a, s) {
                            'bottom-right' == t
                                ? e.forEach(function(t) {
                                      t.x >= r && t.y <= n
                                          ? (t.quartile = 1)
                                          : t.x >= r && t.y > n
                                          ? (t.quartile = 3)
                                          : t.x < r && t.y > n
                                          ? (t.quartile = 4)
                                          : t.x < r &&
                                            t.y <= n &&
                                            (t.quartile = 2)
                                  })
                                : 'top-right' == t &&
                                  e.forEach(function(t) {
                                      t.x >= r && t.y < n
                                          ? (t.quartile = 3)
                                          : t.x >= r && t.y >= n
                                          ? (t.quartile = 1)
                                          : t.x < r && t.y >= n
                                          ? (t.quartile = 2)
                                          : t.x < r &&
                                            t.y < n &&
                                            (t.quartile = 4)
                                  })
                            u(o, e, a, s), d(o, i, s)
                        })(a, f, _, m, s, p, t, i)
            }
            function f(t, e, r, n, o, i, a, s, c, p, f, y) {
                let _ = l(t, s),
                    m = _.map(t => t.x),
                    g = _.map(t => t.y),
                    b = (function(t, e) {
                        let r = Math.max.apply(null, t),
                            n = Math.max.apply(null, e),
                            o = t.map(function(t) {
                                return t / r
                            }),
                            i = e.map(function(t) {
                                return t / n
                            })
                        return [o, i]
                    })(m, g),
                    [v, x] = [b[0], b[1]],
                    w = Math.max.apply(null, m),
                    A = Math.max.apply(null, g),
                    k = [],
                    E = {}
                for (let t = 0; t < v.length; t++)
                    'bottom-right' == c
                        ? (k.push(v[t] + (1 - x[t])),
                          (E[v[t] + (1 - x[t])] = [m[t], g[t]]),
                          (_[t].score = v[t] + (1 - x[t])))
                        : 'top-right' == c &&
                          (k.push(v[t] + x[t]),
                          (E[v[t] + x[t]] = [m[t], g[t]]),
                          (_[t].score = v[t] + x[t]))
                k.sort(function(t, e) {
                    return e - t
                })
                let T = d3.quantile(k, 0.25),
                    M = d3.quantile(k, 0.5),
                    B = d3.quantile(k, 0.75),
                    O = 0
                ;[
                    h(k, E, T, c, w, A, e, r, n),
                    h(k, E, M, c, w, A, e, r, n),
                    h(k, E, B, c, w, A, e, r, n)
                ].forEach(t => {
                    let [o, s] = [t[0], t[1]]
                    e
                        .append('line')
                        .attr('clip-path', 'url(#clip)')
                        .attr('x1', r(o[0]))
                        .attr('y1', n(s[0]))
                        .attr('x2', r(o[1]))
                        .attr('y2', n(s[1]))
                        .attr('id', function(t) {
                            return p + '___diag_quartile_' + O
                        })
                        .attr('stroke', '#0A58A2')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '20, 5')
                        .style('opacity', 0.4),
                        e
                            .append('clipPath')
                            .attr('id', 'clip')
                            .append('rect')
                            .attr('width', i)
                            .attr('height', a),
                        (O += 1)
                }),
                    1 == f &&
                        (function(t, e, r, n, o, i, a, s, l, c, p) {
                            let f = [[], [], [], []]
                            t.forEach(function(t) {
                                t.score > e
                                    ? ((t.quartile = 1), f[0].push([t.x, t.y]))
                                    : t.score > r && t.score <= e
                                    ? ((t.quartile = 2), f[1].push([t.x, t.y]))
                                    : t.score > n && t.score <= r
                                    ? ((t.quartile = 3), f[2].push([t.x, t.y]))
                                    : t.score <= n &&
                                      ((t.quartile = 4), f[3].push([t.x, t.y]))
                            })
                            let h = 1
                            f.forEach(function(t) {
                                var e = (function(t) {
                                    return t.reduce(
                                        function(e, r) {
                                            return [
                                                e[0] + r[0] / t.length,
                                                e[1] + r[1] / t.length
                                            ]
                                        },
                                        [0, 0]
                                    )
                                })(t)
                                i
                                    .append('text')
                                    .attr('class', function(t) {
                                        return o + '___diag_num'
                                    })
                                    .attr('x', a(e[0]))
                                    .attr('y', s(e[1]))
                                    .style('opacity', 0.4)
                                    .style('font-size', '2vw')
                                    .style('fill', '#0A58A2')
                                    .text(h),
                                    h++
                            }),
                                u(o, t, c, p),
                                d(o, l, p)
                        })(_, T, M, B, p, e, r, n, y, t, s)
            }
            function h(t, e, r, n, o, i, a, s, l) {
                let c
                for (let n = 0; n < t.length; n++)
                    if (t[n] <= r) {
                        c = [
                            [e[t[n - 1]][0], e[t[n - 1]][1]],
                            [e[t[n]][0], e[t[n]][1]]
                        ]
                        break
                    }
                let u,
                    d,
                    p = [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[1][1]) / 2]
                return (
                    'bottom-right' == n
                        ? ((u = [p[0] - 2 * o, p[0] + 2 * o]),
                          (d = [p[1] - 2 * i, p[1] + 2 * i]))
                        : 'top-right' == n &&
                          ((u = [p[0] + 2 * o, p[0] - 2 * o]),
                          (d = [p[1] - 2 * i, p[1] + 2 * i])),
                    [u, d]
                )
            }
            var y = r(0),
                _ = function(t, e, r) {
                    return (
                        (e[0] - t[0]) * (r[1] - t[1]) -
                        (e[1] - t[1]) * (r[0] - t[0])
                    )
                }
            function m(t, e) {
                return t[0] - e[0] || t[1] - e[1]
            }
            function g(t) {
                for (var e = t.length, r = [0, 1], n = 2, o = 2; o < e; ++o) {
                    for (; n > 1 && _(t[r[n - 2]], t[r[n - 1]], t[o]) <= 0; )
                        --n
                    r[n++] = o
                }
                return r.slice(0, n)
            }
            var b = function(t) {
                if ((r = t.length) < 3) return null
                var e,
                    r,
                    n = new Array(r),
                    o = new Array(r)
                for (e = 0; e < r; ++e) n[e] = [+t[e][0], +t[e][1], e]
                for (n.sort(m), e = 0; e < r; ++e) o[e] = [n[e][0], -n[e][1]]
                var i = g(n),
                    a = g(o),
                    s = a[0] === i[0],
                    l = a[a.length - 1] === i[i.length - 1],
                    c = []
                for (e = i.length - 1; e >= 0; --e) c.push(t[n[i[e]][2]])
                for (e = +s; e < a.length - l; ++e) c.push(t[n[a[e]][2]])
                return c
            }
            function v(t, e, r, n, o, i, a, s, c, p, f, h) {
                let _ = l(t, s),
                    m = _.map(t => t.x),
                    g = _.map(t => t.y),
                    v = []
                for (let t = 0; t < m.length; t++) v.push([m[t], g[t]])
                y.k(4), y.iterations(500), y.data(v)
                let x = y.clusters(),
                    w = [],
                    A = []
                x.forEach(function(t) {
                    w.push(t.centroid[0]), A.push(t.centroid[1])
                })
                let [k, E] = (function(t, e) {
                        let r = Math.max.apply(null, t),
                            n = Math.max.apply(null, e),
                            o = t.map(function(t) {
                                return t / r
                            }),
                            i = e.map(function(t) {
                                return t / n
                            })
                        return [o, i]
                    })(w, A),
                    T = []
                if ('top-right' == c)
                    for (let t = 0; t < k.length; t++) {
                        let e = k[t] + E[t]
                        T.push(e), (x[t].score = e)
                    }
                else if ('bottom-right' == c)
                    for (let t = 0; t < k.length; t++) {
                        let e = k[t] + (1 - E[t])
                        T.push(e), (x[t].score = e)
                    }
                let M = (function(t, e) {
                    return t.sort(function(t, r) {
                        var n = t[e],
                            o = r[e]
                        return -1 * (n < o ? -1 : n > o ? 1 : 0)
                    })
                })(x, 'score')
                ;(M = (function(t, e, r, n, o) {
                    let i = 1
                    var a = []
                    return (
                        o.forEach(function(o) {
                            var s = []
                            ;(o.cluster = i),
                                t
                                    .append('text')
                                    .attr('class', function(t) {
                                        return e + '___cluster_num'
                                    })
                                    .attr('x', r(o.centroid[0]))
                                    .attr('y', n(o.centroid[1]))
                                    .style('opacity', 0.9)
                                    .style('font-size', '2vw')
                                    .style('fill', '#0A58A2')
                                    .text(i),
                                o.points.forEach(function(i) {
                                    s.push([i[0], i[1]]),
                                        t
                                            .append('line')
                                            .attr('x1', r(o.centroid[0]))
                                            .attr('y1', n(o.centroid[1]))
                                            .attr('x2', r(i[0]))
                                            .attr('y2', n(i[1]))
                                            .attr('class', function(t) {
                                                return e + '___clust_lines'
                                            })
                                            .attr('stroke', '#0A58A2')
                                            .attr('stroke-width', 2)
                                            .style('stroke-dasharray', '20, 5')
                                            .style('opacity', 0.4)
                                })
                            var l = b(s)
                            a.push({ points: l }), i++
                        }),
                        t
                            .selectAll('polygon')
                            .data(a)
                            .enter()
                            .append('polygon')
                            .attr('points', function(t) {
                                if (null != t.points)
                                    return t.points
                                        .map(function(t) {
                                            return [r(t[0]), n(t[1])].join(',')
                                        })
                                        .join(' ')
                            })
                            .attr('class', function(t) {
                                return e + '___clust_polygons'
                            })
                            .attr('fill', '#0A58A2')
                            .style('opacity', 0.1),
                        o
                    )
                })(e, p, r, n, M)),
                    1 == f &&
                        (function(t, e, r, n, o, i) {
                            t.forEach(function(t) {
                                let r = [t.x, t.y]
                                e.forEach(function(e) {
                                    1 ==
                                        (function(t, e) {
                                            var r = JSON.stringify(e)
                                            return t.some(function(t) {
                                                return JSON.stringify(t) === r
                                            })
                                        })(e.points, r) &&
                                        (t.quartile = e.cluster)
                                })
                            }),
                                u(r, t, o, i),
                                d(r, n, i)
                        })(_, M, p, h, t, s)
            }
            function x(t, e, r, n, o, i, a, s, l, c, u, d) {
                let h
                null != document.getElementById(l + '_table') &&
                    ((document.getElementById(l + '_table').innerHTML = ''),
                    (h = !0)),
                    (function(t, e, r, n, o) {
                        e.append('svg:defs')
                            .append('svg:marker')
                            .attr('id', 'opt_triangle')
                            .attr('class', function(e) {
                                return t + '___better_annotation'
                            })
                            .attr('refX', 6)
                            .attr('refY', 6)
                            .attr('markerWidth', 30)
                            .attr('markerHeight', 30)
                            .attr('markerUnits', 'userSpaceOnUse')
                            .attr('orient', 'auto')
                            .append('path')
                            .attr('d', 'M 0 0 12 6 0 12 3 6')
                            .style('fill', 'black')
                            .style('opacity', 0.7)
                        let i,
                            a,
                            s,
                            l,
                            c,
                            u = r.domain(),
                            d = n.domain()
                        'bottom-right' == o
                            ? ((i = u[1] - 0.05 * (u[1] - u[0])),
                              (a = d[1] - 0.9 * (d[1] - d[0])),
                              (s = u[1] - 0.009 * (u[1] - u[0])),
                              (l = d[1] - 0.97 * (d[1] - d[0])),
                              (c = 0))
                            : 'top-right' == o &&
                              ((i = u[1] - 0.05 * (u[1] - u[0])),
                              (a = d[1] - 0.1 * (d[1] - d[0])),
                              (s = u[1] - 0.009 * (u[1] - u[0])),
                              (l = d[1] - 0.03 * (d[1] - d[0])),
                              (c = 1))
                        e.append('line')
                            .attr('class', function(e) {
                                return t + '___better_annotation'
                            })
                            .attr('x1', r(i))
                            .attr('y1', n(a))
                            .attr('x2', r(s))
                            .attr('y2', n(l))
                            .attr('stroke', 'black')
                            .attr('stroke-width', 2)
                            .attr('marker-end', 'url(#opt_triangle)')
                            .style('opacity', 0.4)
                        e.append('text')
                            .attr('class', function(e) {
                                return t + '___better_annotation'
                            })
                            .attr('x', r(u[1]))
                            .attr('y', n(d[c]))
                            .style('opacity', 0.4)
                            .style('font-size', '.7vw')
                            .text('better')
                    })(l, e, r, n, d),
                    c == l + '__squares'
                        ? (w(t, e, r, n, s, l, d),
                          p(t, e, r, n, o, s, d, l, h, u),
                          (function(t, e, r, n, o) {
                              let i,
                                  a,
                                  s,
                                  l,
                                  c = e.domain(),
                                  u = r.domain()
                              'bottom-right' == n
                                  ? ((i = '1'), (a = '2'), (s = '3'), (l = '4'))
                                  : 'top-right' == n &&
                                    ((i = '3'),
                                    (a = '4'),
                                    (s = '1'),
                                    (l = '2')),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_bottom_right'
                                      })
                                      .attr('x', e(c[1] - 0.05 * (c[1] - c[0])))
                                      .attr('y', r(u[1] - 0.97 * (u[1] - u[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(i),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_bottom_left'
                                      })
                                      .attr('x', e(c[1] - 0.98 * (c[1] - c[0])))
                                      .attr('y', r(u[1] - 0.97 * (u[1] - u[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(a),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_top_right'
                                      })
                                      .attr('x', e(c[1] - 0.05 * (c[1] - c[0])))
                                      .attr('y', r(u[1] - 0.1 * (u[1] - u[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(s),
                                  t
                                      .append('text')
                                      .attr('id', function(t) {
                                          return o + '___num_top_left'
                                      })
                                      .attr('x', e(c[1] - 0.98 * (c[1] - c[0])))
                                      .attr('y', r(u[1] - 0.1 * (u[1] - u[0])))
                                      .style('opacity', 0.4)
                                      .style('font-size', '2vw')
                                      .style('fill', '#0A58A2')
                                      .text(l)
                          })(e, r, n, d, l))
                        : c == l + '__diagonals'
                        ? (w(t, e, r, n, s, l, d),
                          f(t, e, r, n, 0, i, a, s, d, l, h, u))
                        : c == l + '__clusters'
                        ? (w(t, e, r, n, s, l, d),
                          v(t, e, r, n, 0, 0, 0, s, d, l, h, u))
                        : w(t, e, r, n, s, l, d)
            }
            function w(t, e, r, n, o, i, a) {
                const s = []
                let u
                l(t, o).forEach(function(t) {
                    s.push([t.x, t.y])
                })
                let d = r.domain(),
                    p = n.domain()
                'bottom-right' == a
                    ? ((u = c.getParetoFrontier(s, {
                          optimize: 'bottomRight'
                      })).unshift([u[0][0], p[1]]),
                      u.push([d[0], u[u.length - 1][1]]))
                    : 'top-right' == a &&
                      ((u = c.getParetoFrontier(s, {
                          optimize: 'topRight'
                      })).unshift([u[0][0], p[0]]),
                      u.push([d[0], u[u.length - 1][1]]))
                for (var f = 0; f < u.length - 1; f++)
                    e.append('line')
                        .attr('clip-path', 'url(#clip)')
                        .attr('x1', r(u[f][0]))
                        .attr('y1', n(u[f][1]))
                        .attr('x2', r(u[f + 1][0]))
                        .attr('y2', n(u[f + 1][1]))
                        .attr('id', function(t) {
                            return i + '___pareto'
                        })
                        .attr('stroke', 'grey')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '20, 5')
                        .style('opacity', 0.4)
            }
            function A(t, e, r, n, o, i, a, s, l, c, u, d, p) {
                let f = t.split('___')[1]
                if (
                    (r.selectAll('#' + c + '___x_quartile').remove(),
                    r.selectAll('#' + c + '___y_quartile').remove(),
                    r.selectAll('#' + c + '___diag_quartile_0').remove(),
                    r.selectAll('#' + c + '___diag_quartile_1').remove(),
                    r.selectAll('#' + c + '___diag_quartile_2').remove(),
                    r.selectAll('#' + c + '___num_bottom_right').remove(),
                    r.selectAll('#' + c + '___num_top_right').remove(),
                    r.selectAll('#' + c + '___num_bottom_left').remove(),
                    r.selectAll('#' + c + '___num_top_left').remove(),
                    r.selectAll('#' + c + '___pareto').remove(),
                    r.selectAll('.' + c + '___diag_num').remove(),
                    r.selectAll('.' + c + '___cluster_num').remove(),
                    r.selectAll('.' + c + '___clust_lines').remove(),
                    r.selectAll('.' + c + '___clust_polygons').remove(),
                    r.selectAll('.' + c + '___better_annotation').remove(),
                    0 == d3.select('#' + t).style('opacity'))
                ) {
                    d3.select('#' + t).style('opacity', 1),
                        d3.select('#' + c + '___top' + f).style('opacity', 1),
                        d3
                            .select('#' + c + '___bottom' + f)
                            .style('opacity', 1),
                        d3.select('#' + c + '___line' + f).style('opacity', 1),
                        d3.select('#' + c + '___lineX' + f).style('opacity', 1),
                        d3.select('#' + c + '___right' + f).style('opacity', 1),
                        d3.select('#' + c + '___left' + f).style('opacity', 1)
                    let h = $.inArray(f.replace(/_/g, '-'), l)
                    l.splice(h, 1),
                        x(e, r, n, o, i, a, s, l, c, u, p, B[c]),
                        d3.select(d).style('opacity', 1),
                        d3.select('text#' + c + '___' + f).style('opacity', 1)
                } else
                    d3.select('#' + t).style('opacity', 0),
                        d3.select('#' + c + '___top' + f).style('opacity', 0),
                        d3
                            .select('#' + c + '___bottom' + f)
                            .style('opacity', 0),
                        d3.select('#' + c + '___line' + f).style('opacity', 0),
                        d3.select('#' + c + '___lineX' + f).style('opacity', 0),
                        d3.select('#' + c + '___right' + f).style('opacity', 0),
                        d3.select('#' + c + '___left' + f).style('opacity', 0),
                        l.push(f.replace(/_/g, '-')),
                        x(e, r, n, o, i, a, s, l, c, u, p, B[c]),
                        d3.select(d).style('opacity', 0.2),
                        d3.select('text#' + c + '___' + f).style('opacity', 0.2)
            }
            function k(t, e, r, n, o, i, a) {
                let s = 20,
                    l = 40,
                    c = (function(t) {
                        if (t.length % 5 == 0)
                            return 90 + 20 * Math.trunc(t.length / 5)
                        if (t.lenght % 5 != 0)
                            return 90 + 20 * (Math.trunc(t.length / 5) + 1)
                    })(t),
                    u = 60,
                    d = Math.round(0.6818 * $(window).width()) - u - l,
                    p = Math.round(0.5787037 * $(window).height()) - s - c,
                    f = d3.min(t, function(t) {
                        return t.x
                    }),
                    h = d3.max(t, function(t) {
                        return t.x
                    })
                var y = E(t, 'x') / (h - f)
                let _ = d3
                        .scaleLinear()
                        .range([0, d])
                        .domain([f - y * (h - f), h + y * (h - f)])
                        .nice(),
                    m = d3.min(t, function(t) {
                        return t.y
                    }),
                    g = d3.max(t, function(t) {
                        return t.y
                    })
                y = E(t, 'y') / (g - m)
                let b = d3
                        .scaleLinear()
                        .range([p, 0])
                        .domain([m - y * (g - m), g + y * (g - m)])
                        .nice(),
                    v = d3.axisBottom(_).ticks(12),
                    w = d3.axisLeft(b).ticks((12 * p) / d),
                    k =
                        (d3
                            .line()
                            .x(function(t) {
                                return _(t.x)
                            })
                            .y(function(t) {
                                return b(t.y)
                            }),
                        d3
                            .select('#' + e)
                            .append('div')
                            .attr('class', 'benchmark_tooltip')
                            .style('opacity', 0)),
                    T = d3
                        .select('#' + e)
                        .append('svg')
                        .attr('class', 'benchmarkingSVG')
                        .attr(
                            'viewBox',
                            '0 0 ' + (d + u + l) + ' ' + (p + s + c)
                        )
                        .attr('preserveAspectRatio', 'xMinYMin meet')
                        .attr('id', 'svg_' + e)
                        .attr('width', d + u + l)
                        .attr('height', p + s + c)
                        .append('g')
                        .attr('transform', 'translate(' + u + ',' + s + ')')
                if (
                    (T.append('g')
                        .append('rect')
                        .attr('width', d)
                        .attr('height', p)
                        .attr('class', 'plot-bg'),
                    T.append('g')
                        .attr('class', 'axis axis--x')
                        .attr('transform', 'translate(0,' + p + ')')
                        .call(v),
                    T.append('g')
                        .attr('class', 'axis axis--y')
                        .call(w),
                    1 == n.startsWith('OEBM'))
                )
                    var M = i[n]
                else M = n
                if (1 == o.startsWith('OEBM')) var B = i[o]
                else B = o
                T.append('text')
                    .attr(
                        'transform',
                        'translate(' +
                            d / 2 +
                            ' ,' +
                            (p + s + Math.round(0.0347 * $(window).height())) +
                            ')'
                    )
                    .style('text-anchor', 'middle')
                    .style('font-weight', 'bold')
                    .style('font-size', '.75vw')
                    .text(M),
                    T.append('text')
                        .attr('transform', 'rotate(-90)')
                        .attr('y', 0 - u)
                        .attr('x', 0 - p / 2)
                        .attr('dy', '1em')
                        .style('text-anchor', 'middle')
                        .style('font-weight', 'bold')
                        .style('font-size', '.75vw')
                        .text(B),
                    T.append('line')
                        .attr('x1', 0)
                        .attr(
                            'y1',
                            p + s + Math.round(0.0347 * $(window).height())
                        )
                        .attr('x2', Math.round(0.02083 * $(window).width()))
                        .attr(
                            'y2',
                            p + s + Math.round(0.0347 * $(window).height())
                        )
                        .attr('stroke', 'grey')
                        .attr('stroke-width', 2)
                        .style('stroke-dasharray', '15, 5')
                        .style('opacity', 0.7),
                    T.append('text')
                        .attr(
                            'transform',
                            'translate(' +
                                Math.round(0.05208 * $(window).width()) +
                                ' ,' +
                                (p +
                                    s +
                                    Math.round(0.0347 * $(window).height()) +
                                    5) +
                                ')'
                        )
                        .style('text-anchor', 'middle')
                        .style('font-size', '.75vw')
                        .text('Pareto frontier')
                var O = d3
                        .axisBottom()
                        .ticks(12)
                        .tickFormat('')
                        .tickSize(p)
                        .scale(_),
                    q = d3
                        .axisLeft()
                        .ticks((12 * p) / d)
                        .tickFormat('')
                        .tickSize(-d)
                        .scale(b)
                T.append('g')
                    .attr('class', 'bench_grid')
                    .call(O),
                    T.append('g')
                        .attr('class', 'bench_grid')
                        .call(q)
                let S = [],
                    U = d3.scaleOrdinal(
                        d3.schemeSet1
                            .concat(d3.schemeSet3)
                            .concat(d3.schemeSet2)
                    )
                var L = {}
                t.forEach(function(t) {
                    L[t.toolname] = U(t.toolname)
                }),
                    (function(t, e, r, n, o, i, a, s, l, c, u) {
                        t
                            .append('g')
                            .selectAll('line')
                            .data(e)
                            .enter()
                            .append('line')
                            .attr('class', 'error-line')
                            .attr('id', function(t) {
                                return (
                                    s +
                                    '___line' +
                                    t.toolname.replace(/[\. ()/-]/g, '_')
                                )
                            })
                            .attr('x1', function(t) {
                                return r(t.x)
                            })
                            .attr('y1', function(t) {
                                return n(t.y + t.e_y)
                            })
                            .attr('x2', function(t) {
                                return r(t.x)
                            })
                            .attr('y2', function(t) {
                                return n(t.y - t.e_y)
                            }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('class', 'error-line')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___lineX' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    )
                                })
                                .attr('x1', function(t) {
                                    return r(t.x - t.e_x)
                                })
                                .attr('y1', function(t) {
                                    return n(t.y)
                                })
                                .attr('x2', function(t) {
                                    return r(t.x + t.e_x)
                                })
                                .attr('y2', function(t) {
                                    return n(t.y)
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___top' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    )
                                })
                                .attr('class', 'error-cap')
                                .attr('x1', function(t) {
                                    return r(t.x) - 4
                                })
                                .attr('y1', function(t) {
                                    return n(t.y + t.e_y)
                                })
                                .attr('x2', function(t) {
                                    return r(t.x) + 4
                                })
                                .attr('y2', function(t) {
                                    return n(t.y + t.e_y)
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___bottom' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    )
                                })
                                .attr('class', 'error-cap')
                                .attr('x1', function(t) {
                                    return r(t.x) - 4
                                })
                                .attr('y1', function(t) {
                                    return n(t.y - t.e_y)
                                })
                                .attr('x2', function(t) {
                                    return r(t.x) + 4
                                })
                                .attr('y2', function(t) {
                                    return n(t.y - t.e_y)
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('class', 'error-cap')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___right' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    )
                                })
                                .attr('x1', function(t) {
                                    return r(t.x + t.e_x)
                                })
                                .attr('y1', function(t) {
                                    return n(t.y) - 4
                                })
                                .attr('x2', function(t) {
                                    return r(t.x + t.e_x)
                                })
                                .attr('y2', function(t) {
                                    return n(t.y) + 4
                                }),
                            t
                                .append('g')
                                .selectAll('line')
                                .data(e)
                                .enter()
                                .append('line')
                                .attr('class', 'error-cap')
                                .attr('id', function(t) {
                                    return (
                                        s +
                                        '___left' +
                                        t.toolname.replace(/[\. ()/-]/g, '_')
                                    )
                                })
                                .attr('x1', function(t) {
                                    return r(t.x - t.e_x)
                                })
                                .attr('y1', function(t) {
                                    return n(t.y) - 4
                                })
                                .attr('x2', function(t) {
                                    return r(t.x - t.e_x)
                                })
                                .attr('y2', function(t) {
                                    return n(t.y) + 4
                                })
                        let d = d3.symbol(),
                            p = d3.format(','),
                            f = d3.format('.4f')
                        t.selectAll('.dots')
                            .data(e)
                            .enter()
                            .append('path')
                            .attr('class', 'benchmark_path')
                            .attr(
                                'd',
                                d.type(function() {
                                    return d3.symbolSquare
                                })
                            )
                            .attr('id', function(t) {
                                return (
                                    s +
                                    '___' +
                                    t.toolname.replace(/[\. ()/-]/g, '_')
                                )
                            })
                            .attr('class', 'line')
                            .attr('transform', function(t) {
                                return (
                                    'translate(' + r(t.x) + ',' + n(t.y) + ')'
                                )
                            })
                            .attr('r', 6)
                            .style('fill', function(t) {
                                return a(i(t))
                            })
                            .on('mouseover', function(t) {
                                let e =
                                    s +
                                    '___' +
                                    t.toolname.replace(/[\. ()/-]/g, '_')
                                if (1 == l.startsWith('OEBM')) var r = u[l]
                                else r = l
                                if (1 == c.startsWith('OEBM')) var n = u[c]
                                else n = c
                                1 == d3.select('#' + e).style('opacity') &&
                                    (o
                                        .transition()
                                        .duration(100)
                                        .style('opacity', 0.9),
                                    o
                                        .html(
                                            '<b>' +
                                                t.toolname +
                                                '</b><br/>' +
                                                r +
                                                ': ' +
                                                p(t.x) +
                                                '<br/>' +
                                                n +
                                                ': ' +
                                                f(t.y)
                                        )
                                        .style('left', d3.event.pageX + 'px')
                                        .style('top', d3.event.pageY + 'px'))
                            })
                            .on('mouseout', function(t) {
                                o.transition()
                                    .duration(1500)
                                    .style('opacity', 0)
                            })
                    })(
                        T,
                        t,
                        _,
                        b,
                        k,
                        function(t) {
                            return t.toolname
                        },
                        U,
                        e,
                        n,
                        o,
                        i
                    ),
                    (function(t, e, r, n, o, i, a, s, l, c, u, d, p) {
                        let f = e
                            .selectAll('.legend')
                            .data(c)
                            .enter()
                            .append('g')
                            .attr('class', 'legend')
                            .attr('transform', function(t, e) {
                                return (
                                    'translate(' +
                                    (-i +
                                        (e % 5) *
                                            Math.round(
                                                0.113636 * $(window).width()
                                            )) +
                                    ',' +
                                    (a +
                                        Math.round(
                                            0.0862962 * $(window).height()
                                        ) +
                                        Math.floor(e / 5) *
                                            Math.round(
                                                0.0231481 * $(window).height()
                                            )) +
                                    ')'
                                )
                            })
                        f
                            .append('rect')
                            .attr(
                                'x',
                                i + Math.round(0.010227 * $(window).width())
                            )
                            .attr(
                                'width',
                                Math.round(0.010227 * $(window).width())
                            )
                            .attr(
                                'height',
                                Math.round(0.020833 * $(window).height())
                            )
                            .attr('id', function(t) {
                                return (
                                    u +
                                    '___leg_rect' +
                                    t.replace(/[\. ()/-]/g, '_')
                                )
                            })
                            .attr('class', 'benchmark_legend_rect')
                            .style('fill', l)
                            .on('click', function(l) {
                                let c = d3.select(
                                    'text#' +
                                        u +
                                        '___' +
                                        l.replace(/[\. ()/-]/g, '_')
                                )._groups[0][0].id
                                if (t.length - s.length - 1 >= 4)
                                    A(c, t, e, r, n, o, i, a, s, u, d, this, p)
                                else if (
                                    t.length - s.length - 1 < 4 &&
                                    0 == d3.select('#' + c).style('opacity')
                                )
                                    A(c, t, e, r, n, o, i, a, s, u, d, this, p)
                                else {
                                    $('.removal_alert').remove()
                                    var f = $(
                                        '<div class="removal_alert">                                  <span class="closebtn" onclick="(this.parentNode.remove());">&times;</span>                                  At least four participants are required for the benchmark!!                                </div>'
                                    )
                                    $('#' + u).append(f),
                                        setTimeout(function() {
                                            $('.removal_alert').length > 0 &&
                                                $('.removal_alert').remove()
                                        }, 5e3)
                                }
                            })
                            .on('mouseover', function(t) {
                                let e = d3.select(
                                        'text#' +
                                            u +
                                            '___' +
                                            t.replace(/[\. ()/-]/g, '_')
                                    )._groups[0][0].id,
                                    r = e.split('___')[1]
                                0 == d3.select('#' + e).style('opacity')
                                    ? (d3.select(this).style('opacity', 1),
                                      d3
                                          .select('text#' + u + '___' + r)
                                          .style('opacity', 1))
                                    : (d3.select(this).style('opacity', 0.2),
                                      d3
                                          .select('text#' + u + '___' + r)
                                          .style('opacity', 0.2))
                            })
                            .on('mouseout', function(t) {
                                let e = d3.select(
                                        'text#' +
                                            u +
                                            '___' +
                                            t.replace(/[\. ()/-]/g, '_')
                                    )._groups[0][0].id,
                                    r = e.split('___')[1]
                                0 == d3.select('#' + e).style('opacity')
                                    ? (d3.select(this).style('opacity', 0.2),
                                      d3
                                          .select('text#' + u + '___' + r)
                                          .style('opacity', 0.2))
                                    : (d3.select(this).style('opacity', 1),
                                      d3
                                          .select('text#' + u + '___' + r)
                                          .style('opacity', 1))
                            }),
                            f
                                .append('text')
                                .attr(
                                    'x',
                                    i + Math.round(0.022727 * $(window).width())
                                )
                                .attr(
                                    'y',
                                    Math.round(0.01041 * $(window).height())
                                )
                                .attr('id', function(t) {
                                    return (
                                        u + '___' + t.replace(/[\. ()/-]/g, '_')
                                    )
                                })
                                .attr('dy', '.35em')
                                .style('text-anchor', 'start')
                                .style('font-size', '.7vw')
                                .text(function(t) {
                                    return t
                                })
                    })(t, T, _, b, k, d, p, S, U, U.domain(), e, r, L),
                    x(t, T, _, b, k, d, p, S, e, r, L, a[e])
            }
            function E(t, e) {
                var r = 0
                return (
                    t.forEach(function(t) {
                        'y' == e ? (r += t.e_y) : 'x' == e && (r += t.e_x)
                    }),
                    r / t.length
                )
            }
            r.d(e, 'load_scatter_visualization', function() {
                return O
            }),
                r.d(e, 'onQuartileChange', function() {
                    return S
                }),
                r.d(e, 'better', function() {
                    return B
                })
            let T = {},
                M = {},
                B = {}
            function O() {
                let t,
                    e,
                    r,
                    n = document.getElementsByClassName(
                        'benchmarkingChart_scatter'
                    ),
                    o = 0
                for (r of ((o = 0), n)) {
                    let n =
                        'https://' +
                        ($(r).data('mode') ? 'dev-openebench' : 'openebench') +
                        '.bsc.es/'
                    if (
                        ((t = ((e = r.getAttribute('data-id')) + o).replace(
                            ':',
                            '_'
                        )),
                        (r.id = t),
                        s(t),
                        q(
                            n + 'sciapi/graphql',
                            'query getDatasets($dataset_id: String!){\n                          getDatasets(datasetFilters:{id: $dataset_id, type:"aggregation"}) {\n                              _id\n                              community_ids\n                              datalink{\n                                  inline_data\n                              }\n                          }\n                        }',
                            e,
                            t
                        ),
                        'true' == r.getAttribute('toTable'))
                    ) {
                        var i = $(
                            '<br><br><table id="' +
                                (t + '_table') +
                                '" data-id="' +
                                e +
                                '" class="benchmarkingTable_scatter"></table>'
                        )
                        $('#' + t).append(i)
                    }
                    o++
                }
            }
            function q(t, e, r, n) {
                try {
                    const o = a({ uri: t })
                    o({ query: e, variables: { dataset_id: r } }).then(t => {
                        let e = t.data.getDatasets
                        if (0 == e.length) {
                            document
                                .getElementById(n + '_dropdown_list')
                                .remove()
                            var i = document.createElement('td')
                            i.id = 'no_benchmark_data'
                            var a = document.createTextNode(
                                'No data available for the selected challenge: ' +
                                    r
                            )
                            i.appendChild(a),
                                document.getElementById(n).appendChild(i)
                        } else {
                            ;(() =>
                                o({
                                    query:
                                        'query getMetrics{\n                        getMetrics {\n                          _id\n                          title\n                          representation_hints\n                        }\n                    }'
                                }))().then(t => {
                                let r = {}
                                t.data.getMetrics.forEach(function(t) {
                                    r[t._id] = t.title
                                }),
                                    'bottom-right' ==
                                    e[0].datalink.inline_data.visualization
                                        .optimization
                                        ? (B[n] = 'bottom-right')
                                        : (B[n] = 'top-right')
                                let o =
                                        e[0].datalink.inline_data.visualization
                                            .x_axis,
                                    i =
                                        e[0].datalink.inline_data.visualization
                                            .y_axis
                                document
                                    .getElementById(n)
                                    .setAttribute('metric_x', o),
                                    document
                                        .getElementById(n)
                                        .setAttribute('metric_y', i),
                                    (function(t, e, r, n, o, i) {
                                        try {
                                            let s = []
                                            t[0].datalink.inline_data.challenge_participants.forEach(
                                                function(t) {
                                                    let e = t.tool_id
                                                    var r
                                                    r =
                                                        e.length > 22
                                                            ? e.substring(0, 22)
                                                            : e
                                                    let n = {}
                                                    ;(n.toolname = r),
                                                        (n.x = t.metric_x),
                                                        (n.y = t.metric_y),
                                                        (n.e_y = t.stderr_y
                                                            ? parseFloat(
                                                                  t.stderr_y
                                                              )
                                                            : 0),
                                                        (n.e_x = t.stderr_x
                                                            ? parseFloat(
                                                                  t.stderr_x
                                                              )
                                                            : 0),
                                                        s.push(n)
                                                }
                                            ),
                                                (T[e] = s),
                                                (M[e] = o)
                                            var a = document.getElementById(
                                                e + '_dropdown_list'
                                            )
                                            let l =
                                                a.options[a.selectedIndex].id
                                            k(s, e, l, r, n, o, i)
                                        } catch (t) {
                                            console.log(
                                                `Invalid Url Error: ${t.stack} `
                                            )
                                        }
                                    })(e, n, o, i, r, B)
                            })
                        }
                    })
                } catch (t) {
                    console.log(`Invalid Url Error: ${t.stack} `)
                }
            }
            function S(t, e, r, n) {
                var o = t.split('__')[0]
                d3.select('#svg_' + o).remove()
                let i = t
                k(T[o], o, i, e, r, M[o], n)
            }
            O()
        },
        function(t, e) {
            !(function(t) {
                'use strict'
                if (!t.fetch) {
                    var e = {
                        searchParams: 'URLSearchParams' in t,
                        iterable: 'Symbol' in t && 'iterator' in Symbol,
                        blob:
                            'FileReader' in t &&
                            'Blob' in t &&
                            (function() {
                                try {
                                    return new Blob(), !0
                                } catch (t) {
                                    return !1
                                }
                            })(),
                        formData: 'FormData' in t,
                        arrayBuffer: 'ArrayBuffer' in t
                    }
                    if (e.arrayBuffer)
                        var r = [
                                '[object Int8Array]',
                                '[object Uint8Array]',
                                '[object Uint8ClampedArray]',
                                '[object Int16Array]',
                                '[object Uint16Array]',
                                '[object Int32Array]',
                                '[object Uint32Array]',
                                '[object Float32Array]',
                                '[object Float64Array]'
                            ],
                            n = function(t) {
                                return t && DataView.prototype.isPrototypeOf(t)
                            },
                            o =
                                ArrayBuffer.isView ||
                                function(t) {
                                    return (
                                        t &&
                                        r.indexOf(
                                            Object.prototype.toString.call(t)
                                        ) > -1
                                    )
                                }
                    ;(u.prototype.append = function(t, e) {
                        ;(t = s(t)), (e = l(e))
                        var r = this.map[t]
                        this.map[t] = r ? r + ',' + e : e
                    }),
                        (u.prototype.delete = function(t) {
                            delete this.map[s(t)]
                        }),
                        (u.prototype.get = function(t) {
                            return (t = s(t)), this.has(t) ? this.map[t] : null
                        }),
                        (u.prototype.has = function(t) {
                            return this.map.hasOwnProperty(s(t))
                        }),
                        (u.prototype.set = function(t, e) {
                            this.map[s(t)] = l(e)
                        }),
                        (u.prototype.forEach = function(t, e) {
                            for (var r in this.map)
                                this.map.hasOwnProperty(r) &&
                                    t.call(e, this.map[r], r, this)
                        }),
                        (u.prototype.keys = function() {
                            var t = []
                            return (
                                this.forEach(function(e, r) {
                                    t.push(r)
                                }),
                                c(t)
                            )
                        }),
                        (u.prototype.values = function() {
                            var t = []
                            return (
                                this.forEach(function(e) {
                                    t.push(e)
                                }),
                                c(t)
                            )
                        }),
                        (u.prototype.entries = function() {
                            var t = []
                            return (
                                this.forEach(function(e, r) {
                                    t.push([r, e])
                                }),
                                c(t)
                            )
                        }),
                        e.iterable &&
                            (u.prototype[Symbol.iterator] = u.prototype.entries)
                    var i = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
                    ;(_.prototype.clone = function() {
                        return new _(this, { body: this._bodyInit })
                    }),
                        y.call(_.prototype),
                        y.call(g.prototype),
                        (g.prototype.clone = function() {
                            return new g(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new u(this.headers),
                                url: this.url
                            })
                        }),
                        (g.error = function() {
                            var t = new g(null, { status: 0, statusText: '' })
                            return (t.type = 'error'), t
                        })
                    var a = [301, 302, 303, 307, 308]
                    ;(g.redirect = function(t, e) {
                        if (-1 === a.indexOf(e))
                            throw new RangeError('Invalid status code')
                        return new g(null, {
                            status: e,
                            headers: { location: t }
                        })
                    }),
                        (t.Headers = u),
                        (t.Request = _),
                        (t.Response = g),
                        (t.fetch = function(t, r) {
                            return new Promise(function(n, o) {
                                var i = new _(t, r),
                                    a = new XMLHttpRequest()
                                ;(a.onload = function() {
                                    var t = {
                                        status: a.status,
                                        statusText: a.statusText,
                                        headers: (function(t) {
                                            var e = new u()
                                            return (
                                                t
                                                    .split(/\r?\n/)
                                                    .forEach(function(t) {
                                                        var r = t.split(':'),
                                                            n = r.shift().trim()
                                                        if (n) {
                                                            var o = r
                                                                .join(':')
                                                                .trim()
                                                            e.append(n, o)
                                                        }
                                                    }),
                                                e
                                            )
                                        })(a.getAllResponseHeaders() || '')
                                    }
                                    t.url =
                                        'responseURL' in a
                                            ? a.responseURL
                                            : t.headers.get('X-Request-URL')
                                    var e =
                                        'response' in a
                                            ? a.response
                                            : a.responseText
                                    n(new g(e, t))
                                }),
                                    (a.onerror = function() {
                                        o(
                                            new TypeError(
                                                'Network request failed'
                                            )
                                        )
                                    }),
                                    (a.ontimeout = function() {
                                        o(
                                            new TypeError(
                                                'Network request failed'
                                            )
                                        )
                                    }),
                                    a.open(i.method, i.url, !0),
                                    'include' === i.credentials &&
                                        (a.withCredentials = !0),
                                    'responseType' in a &&
                                        e.blob &&
                                        (a.responseType = 'blob'),
                                    i.headers.forEach(function(t, e) {
                                        a.setRequestHeader(e, t)
                                    }),
                                    a.send(
                                        void 0 === i._bodyInit
                                            ? null
                                            : i._bodyInit
                                    )
                            })
                        }),
                        (t.fetch.polyfill = !0)
                }
                function s(t) {
                    if (
                        ('string' != typeof t && (t = String(t)),
                        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                    )
                        throw new TypeError(
                            'Invalid character in header field name'
                        )
                    return t.toLowerCase()
                }
                function l(t) {
                    return 'string' != typeof t && (t = String(t)), t
                }
                function c(t) {
                    var r = {
                        next: function() {
                            var e = t.shift()
                            return { done: void 0 === e, value: e }
                        }
                    }
                    return (
                        e.iterable &&
                            (r[Symbol.iterator] = function() {
                                return r
                            }),
                        r
                    )
                }
                function u(t) {
                    ;(this.map = {}),
                        t instanceof u
                            ? t.forEach(function(t, e) {
                                  this.append(e, t)
                              }, this)
                            : Array.isArray(t)
                            ? t.forEach(function(t) {
                                  this.append(t[0], t[1])
                              }, this)
                            : t &&
                              Object.getOwnPropertyNames(t).forEach(function(
                                  e
                              ) {
                                  this.append(e, t[e])
                              },
                              this)
                }
                function d(t) {
                    if (t.bodyUsed)
                        return Promise.reject(new TypeError('Already read'))
                    t.bodyUsed = !0
                }
                function p(t) {
                    return new Promise(function(e, r) {
                        ;(t.onload = function() {
                            e(t.result)
                        }),
                            (t.onerror = function() {
                                r(t.error)
                            })
                    })
                }
                function f(t) {
                    var e = new FileReader(),
                        r = p(e)
                    return e.readAsArrayBuffer(t), r
                }
                function h(t) {
                    if (t.slice) return t.slice(0)
                    var e = new Uint8Array(t.byteLength)
                    return e.set(new Uint8Array(t)), e.buffer
                }
                function y() {
                    return (
                        (this.bodyUsed = !1),
                        (this._initBody = function(t) {
                            if (((this._bodyInit = t), t))
                                if ('string' == typeof t) this._bodyText = t
                                else if (
                                    e.blob &&
                                    Blob.prototype.isPrototypeOf(t)
                                )
                                    this._bodyBlob = t
                                else if (
                                    e.formData &&
                                    FormData.prototype.isPrototypeOf(t)
                                )
                                    this._bodyFormData = t
                                else if (
                                    e.searchParams &&
                                    URLSearchParams.prototype.isPrototypeOf(t)
                                )
                                    this._bodyText = t.toString()
                                else if (e.arrayBuffer && e.blob && n(t))
                                    (this._bodyArrayBuffer = h(t.buffer)),
                                        (this._bodyInit = new Blob([
                                            this._bodyArrayBuffer
                                        ]))
                                else {
                                    if (
                                        !e.arrayBuffer ||
                                        (!ArrayBuffer.prototype.isPrototypeOf(
                                            t
                                        ) &&
                                            !o(t))
                                    )
                                        throw new Error(
                                            'unsupported BodyInit type'
                                        )
                                    this._bodyArrayBuffer = h(t)
                                }
                            else this._bodyText = ''
                            this.headers.get('content-type') ||
                                ('string' == typeof t
                                    ? this.headers.set(
                                          'content-type',
                                          'text/plain;charset=UTF-8'
                                      )
                                    : this._bodyBlob && this._bodyBlob.type
                                    ? this.headers.set(
                                          'content-type',
                                          this._bodyBlob.type
                                      )
                                    : e.searchParams &&
                                      URLSearchParams.prototype.isPrototypeOf(
                                          t
                                      ) &&
                                      this.headers.set(
                                          'content-type',
                                          'application/x-www-form-urlencoded;charset=UTF-8'
                                      ))
                        }),
                        e.blob &&
                            ((this.blob = function() {
                                var t = d(this)
                                if (t) return t
                                if (this._bodyBlob)
                                    return Promise.resolve(this._bodyBlob)
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(
                                        new Blob([this._bodyArrayBuffer])
                                    )
                                if (this._bodyFormData)
                                    throw new Error(
                                        'could not read FormData body as blob'
                                    )
                                return Promise.resolve(
                                    new Blob([this._bodyText])
                                )
                            }),
                            (this.arrayBuffer = function() {
                                return this._bodyArrayBuffer
                                    ? d(this) ||
                                          Promise.resolve(this._bodyArrayBuffer)
                                    : this.blob().then(f)
                            })),
                        (this.text = function() {
                            var t = d(this)
                            if (t) return t
                            if (this._bodyBlob)
                                return (function(t) {
                                    var e = new FileReader(),
                                        r = p(e)
                                    return e.readAsText(t), r
                                })(this._bodyBlob)
                            if (this._bodyArrayBuffer)
                                return Promise.resolve(
                                    (function(t) {
                                        for (
                                            var e = new Uint8Array(t),
                                                r = new Array(e.length),
                                                n = 0;
                                            n < e.length;
                                            n++
                                        )
                                            r[n] = String.fromCharCode(e[n])
                                        return r.join('')
                                    })(this._bodyArrayBuffer)
                                )
                            if (this._bodyFormData)
                                throw new Error(
                                    'could not read FormData body as text'
                                )
                            return Promise.resolve(this._bodyText)
                        }),
                        e.formData &&
                            (this.formData = function() {
                                return this.text().then(m)
                            }),
                        (this.json = function() {
                            return this.text().then(JSON.parse)
                        }),
                        this
                    )
                }
                function _(t, e) {
                    var r = (e = e || {}).body
                    if (t instanceof _) {
                        if (t.bodyUsed) throw new TypeError('Already read')
                        ;(this.url = t.url),
                            (this.credentials = t.credentials),
                            e.headers || (this.headers = new u(t.headers)),
                            (this.method = t.method),
                            (this.mode = t.mode),
                            r ||
                                null == t._bodyInit ||
                                ((r = t._bodyInit), (t.bodyUsed = !0))
                    } else this.url = String(t)
                    if (
                        ((this.credentials =
                            e.credentials || this.credentials || 'omit'),
                        (!e.headers && this.headers) ||
                            (this.headers = new u(e.headers)),
                        (this.method = (function(t) {
                            var e = t.toUpperCase()
                            return i.indexOf(e) > -1 ? e : t
                        })(e.method || this.method || 'GET')),
                        (this.mode = e.mode || this.mode || null),
                        (this.referrer = null),
                        ('GET' === this.method || 'HEAD' === this.method) && r)
                    )
                        throw new TypeError(
                            'Body not allowed for GET or HEAD requests'
                        )
                    this._initBody(r)
                }
                function m(t) {
                    var e = new FormData()
                    return (
                        t
                            .trim()
                            .split('&')
                            .forEach(function(t) {
                                if (t) {
                                    var r = t.split('='),
                                        n = r.shift().replace(/\+/g, ' '),
                                        o = r.join('=').replace(/\+/g, ' ')
                                    e.append(
                                        decodeURIComponent(n),
                                        decodeURIComponent(o)
                                    )
                                }
                            }),
                        e
                    )
                }
                function g(t, e) {
                    e || (e = {}),
                        (this.type = 'default'),
                        (this.status = 'status' in e ? e.status : 200),
                        (this.ok = this.status >= 200 && this.status < 300),
                        (this.statusText =
                            'statusText' in e ? e.statusText : 'OK'),
                        (this.headers = new u(e.headers)),
                        (this.url = e.url || ''),
                        this._initBody(t)
                }
            })('undefined' != typeof self ? self : this)
        },
        function(t, e) {
            t.exports = function(t) {
                var e = 'undefined' != typeof window && window.location
                if (!e) throw new Error('fixUrls requires window.location')
                if (!t || 'string' != typeof t) return t
                var r = e.protocol + '//' + e.host,
                    n = r + e.pathname.replace(/\/[^\/]*$/, '/')
                return t.replace(
                    /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                    function(t, e) {
                        var o,
                            i = e
                                .trim()
                                .replace(/^"(.*)"$/, function(t, e) {
                                    return e
                                })
                                .replace(/^'(.*)'$/, function(t, e) {
                                    return e
                                })
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                            i
                        )
                            ? t
                            : ((o =
                                  0 === i.indexOf('//')
                                      ? i
                                      : 0 === i.indexOf('/')
                                      ? r + i
                                      : n + i.replace(/^\.\//, '')),
                              'url(' + JSON.stringify(o) + ')')
                    }
                )
            }
        },
        function(t, e, r) {
            var n = {},
                o = (function(t) {
                    var e
                    return function() {
                        return void 0 === e && (e = t.apply(this, arguments)), e
                    }
                })(function() {
                    return window && document && document.all && !window.atob
                }),
                i = (function(t) {
                    var e = {}
                    return function(t) {
                        if ('function' == typeof t) return t()
                        if (void 0 === e[t]) {
                            var r = function(t) {
                                return document.querySelector(t)
                            }.call(this, t)
                            if (
                                window.HTMLIFrameElement &&
                                r instanceof window.HTMLIFrameElement
                            )
                                try {
                                    r = r.contentDocument.head
                                } catch (t) {
                                    r = null
                                }
                            e[t] = r
                        }
                        return e[t]
                    }
                })(),
                a = null,
                s = 0,
                l = [],
                c = r(4)
            function u(t, e) {
                for (var r = 0; r < t.length; r++) {
                    var o = t[r],
                        i = n[o.id]
                    if (i) {
                        i.refs++
                        for (var a = 0; a < i.parts.length; a++)
                            i.parts[a](o.parts[a])
                        for (; a < o.parts.length; a++)
                            i.parts.push(_(o.parts[a], e))
                    } else {
                        var s = []
                        for (a = 0; a < o.parts.length; a++)
                            s.push(_(o.parts[a], e))
                        n[o.id] = { id: o.id, refs: 1, parts: s }
                    }
                }
            }
            function d(t, e) {
                for (var r = [], n = {}, o = 0; o < t.length; o++) {
                    var i = t[o],
                        a = e.base ? i[0] + e.base : i[0],
                        s = { css: i[1], media: i[2], sourceMap: i[3] }
                    n[a]
                        ? n[a].parts.push(s)
                        : r.push((n[a] = { id: a, parts: [s] }))
                }
                return r
            }
            function p(t, e) {
                var r = i(t.insertInto)
                if (!r)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                    )
                var n = l[l.length - 1]
                if ('top' === t.insertAt)
                    n
                        ? n.nextSibling
                            ? r.insertBefore(e, n.nextSibling)
                            : r.appendChild(e)
                        : r.insertBefore(e, r.firstChild),
                        l.push(e)
                else if ('bottom' === t.insertAt) r.appendChild(e)
                else {
                    if ('object' != typeof t.insertAt || !t.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                        )
                    var o = i(t.insertInto + ' ' + t.insertAt.before)
                    r.insertBefore(e, o)
                }
            }
            function f(t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
                var e = l.indexOf(t)
                e >= 0 && l.splice(e, 1)
            }
            function h(t) {
                var e = document.createElement('style')
                return (
                    void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                    y(e, t.attrs),
                    p(t, e),
                    e
                )
            }
            function y(t, e) {
                Object.keys(e).forEach(function(r) {
                    t.setAttribute(r, e[r])
                })
            }
            function _(t, e) {
                var r, n, o, i
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function() {}
                    t.css = i
                }
                if (e.singleton) {
                    var l = s++
                    ;(r = a || (a = h(e))),
                        (n = g.bind(null, r, l, !1)),
                        (o = g.bind(null, r, l, !0))
                } else
                    t.sourceMap &&
                    'function' == typeof URL &&
                    'function' == typeof URL.createObjectURL &&
                    'function' == typeof URL.revokeObjectURL &&
                    'function' == typeof Blob &&
                    'function' == typeof btoa
                        ? ((r = (function(t) {
                              var e = document.createElement('link')
                              return (
                                  void 0 === t.attrs.type &&
                                      (t.attrs.type = 'text/css'),
                                  (t.attrs.rel = 'stylesheet'),
                                  y(e, t.attrs),
                                  p(t, e),
                                  e
                              )
                          })(e)),
                          (n = function(t, e, r) {
                              var n = r.css,
                                  o = r.sourceMap,
                                  i = void 0 === e.convertToAbsoluteUrls && o
                              ;(e.convertToAbsoluteUrls || i) && (n = c(n))
                              o &&
                                  (n +=
                                      '\n/*# sourceMappingURL=data:application/json;base64,' +
                                      btoa(
                                          unescape(
                                              encodeURIComponent(
                                                  JSON.stringify(o)
                                              )
                                          )
                                      ) +
                                      ' */')
                              var a = new Blob([n], { type: 'text/css' }),
                                  s = t.href
                              ;(t.href = URL.createObjectURL(a)),
                                  s && URL.revokeObjectURL(s)
                          }.bind(null, r, e)),
                          (o = function() {
                              f(r), r.href && URL.revokeObjectURL(r.href)
                          }))
                        : ((r = h(e)),
                          (n = function(t, e) {
                              var r = e.css,
                                  n = e.media
                              n && t.setAttribute('media', n)
                              if (t.styleSheet) t.styleSheet.cssText = r
                              else {
                                  for (; t.firstChild; )
                                      t.removeChild(t.firstChild)
                                  t.appendChild(document.createTextNode(r))
                              }
                          }.bind(null, r)),
                          (o = function() {
                              f(r)
                          }))
                return (
                    n(t),
                    function(e) {
                        if (e) {
                            if (
                                e.css === t.css &&
                                e.media === t.media &&
                                e.sourceMap === t.sourceMap
                            )
                                return
                            n((t = e))
                        } else o()
                    }
                )
            }
            t.exports = function(t, e) {
                if (
                    'undefined' != typeof DEBUG &&
                    DEBUG &&
                    'object' != typeof document
                )
                    throw new Error(
                        'The style-loader cannot be used in a non-browser environment'
                    )
                ;((e = e || {}).attrs =
                    'object' == typeof e.attrs ? e.attrs : {}),
                    e.singleton ||
                        'boolean' == typeof e.singleton ||
                        (e.singleton = o()),
                    e.insertInto || (e.insertInto = 'head'),
                    e.insertAt || (e.insertAt = 'bottom')
                var r = d(t, e)
                return (
                    u(r, e),
                    function(t) {
                        for (var o = [], i = 0; i < r.length; i++) {
                            var a = r[i]
                            ;(s = n[a.id]).refs--, o.push(s)
                        }
                        t && u(d(t, e), e)
                        for (i = 0; i < o.length; i++) {
                            var s
                            if (0 === (s = o[i]).refs) {
                                for (var l = 0; l < s.parts.length; l++)
                                    s.parts[l]()
                                delete n[s.id]
                            }
                        }
                    }
                )
            }
            var m = (function() {
                var t = []
                return function(e, r) {
                    return (t[e] = r), t.filter(Boolean).join('\n')
                }
            })()
            function g(t, e, r, n) {
                var o = r ? '' : n.css
                if (t.styleSheet) t.styleSheet.cssText = m(e, o)
                else {
                    var i = document.createTextNode(o),
                        a = t.childNodes
                    a[e] && t.removeChild(a[e]),
                        a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                }
            }
        },
        function(t, e) {
            t.exports = function(t) {
                var e = []
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var r = (function(t, e) {
                                var r = t[1] || '',
                                    n = t[3]
                                if (!n) return r
                                if (e && 'function' == typeof btoa) {
                                    var o = (function(t) {
                                            return (
                                                '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(t)
                                                        )
                                                    )
                                                ) +
                                                ' */'
                                            )
                                        })(n),
                                        i = n.sources.map(function(t) {
                                            return (
                                                '/*# sourceURL=' +
                                                n.sourceRoot +
                                                t +
                                                ' */'
                                            )
                                        })
                                    return [r]
                                        .concat(i)
                                        .concat([o])
                                        .join('\n')
                                }
                                return [r].join('\n')
                            })(e, t)
                            return e[2] ? '@media ' + e[2] + '{' + r + '}' : r
                        }).join('')
                    }),
                    (e.i = function(t, r) {
                        'string' == typeof t && (t = [[null, t, '']])
                        for (var n = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0]
                            'number' == typeof i && (n[i] = !0)
                        }
                        for (o = 0; o < t.length; o++) {
                            var a = t[o]
                            ;('number' == typeof a[0] && n[a[0]]) ||
                                (r && !a[2]
                                    ? (a[2] = r)
                                    : r &&
                                      (a[2] = '(' + a[2] + ') and (' + r + ')'),
                                e.push(a))
                        }
                    }),
                    e
                )
            }
        },
        function(t, e, r) {
            ;(t.exports = r(6)(!1)).push([
                t.i,
                '\n  \n  .error-line {\n    stroke:black;\n    stroke-dasharray: 2,2;\n  }\n  \n  .error-cap {\n    stroke:black;\n    stroke-width: 1px;\n  }\n  \n    div.benchmark_tooltip {\n      background-color: #fff;\n      padding: 7px;\n      text-shadow: #f5f5f5 0 1px 0;\n      font: 15px Helvetica Neue;\n      border: 4.5px solid;\n      border-color: #0A58A2;\n      border-radius: 3px;\n      opacity: 0.95;\n      position: absolute;\n      box-shadow: rgba(0, 0, 0, 0.3) 0 10px 15px;\n    }\n  \n  .benchmark_tooltip:after {\n      content: " ";\n      position: absolute;\n      top: 50%;\n      right: 100%;\n      margin-top: -10px;\n      border-width: 10px;\n      border-style: solid;\n      border-color: transparent transparent transparent transparent;\n      \n  }\n  \n   .plot-bg {\n     fill:#F8F8F8;\n     stroke: black;\n   }\n      \n   .axis path,\n   .axis line {\n       fill: none;\n       stroke: grey;\n       stroke-width: 1;\n       shape-rendering: crispEdges;\n   }\n\n   .bench_grid {\n    stroke-opacity: 0.1;\n    stroke-dasharray: 7,5;\n  }\n\n    \n    .classificators_list{\n        background-color: #0A58A2; \n        border-radius: 8px;\n        color: #fff;\n        font-size: 1vw;\n        padding-left: 25px;\n        padding-right: 25px;\n        text-align: center;\n        width: 20vw;\n    \n        }\n    \n    .classificators_list:hover {\n        background-color: #b3cde0;\n    \n    }\n\n    .benchmarkingTable_scatter td {\n        border: 2px solid black;\n        border-collapse: collapse;\n        text-align: center;\n        font-size: .7vw;\n    }\n\n    .benchmarkingTable_scatter {\n        width: 17vw; \n        border-collapse: collapse; \n        background-color: #f0f0f0;\n        border: 5px solid black; \n        float: right;\n    }\n\n    .benchmark_legend_rect {\n        cursor: pointer;\n    }\n\n    .benchmarkingChart_scatter{\n        width: 90vw;\n    }\n\n    .benchmarkingSVG{\n        width: 68vw;\n    }\n      .axis--x {\n          font-size: 12px;\n      }\n\n      .axis--y {\n        font-size: 12px;\n    }\n\n    .removal_alert {\n        padding: 10px;\n        background-color: #ffcccc;\n        color: #D10000;\n    }\n    \n    .closebtn {\n        margin-left: 15px;\n        color: #D10000;\n        font-weight: bold;\n        float: right;\n        font-size: 22px;\n        line-height: 20px;\n        cursor: pointer;\n        transition: 0.3s;\n    }\n    \n    .closebtn:hover {\n        color: white;\n    }',
                ''
            ])
        },
        function(t, e, r) {
            var n = r(7)
            'string' == typeof n && (n = [[t.i, n, '']])
            var o = { hmr: !0, transform: void 0, insertInto: void 0 }
            r(5)(n, o)
            n.locals && (t.exports = n.locals)
        }
    ])
)
