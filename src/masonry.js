/*!
 * angular-masonry 0.11.1
 * Pascal Hartig, weluse GmbH, http://weluse.de/
 * License: MIT
 */
! function() { "use strict";
    angular.module("wu.masonry", []).controller("MasonryCtrl", ["$scope", "$element", "$timeout", function(a, b, c) {
        function d(a) { a.addClass("loaded") } var e = {},
            f = [],
            g = !1,
            h = this,
            i = null;
        this.preserveOrder = !1, this.loadImages = !0, this.scheduleMasonryOnce = function() { var a = arguments,
                b = f.filter(function(b) { return b[0] === a[0] }).length > 0;
            b || this.scheduleMasonry.apply(null, arguments) }, this.scheduleMasonry = function() { i && c.cancel(i), f.push([].slice.call(arguments)), i = c(function() { g || (f.forEach(function(a) { b.masonry.apply(b, a) }), f = []) }, 30) }, this.appendBrick = function(a, c) {
            function f() { 0 === Object.keys(e).length && b.masonry("resize"), void 0 === e[c] && (e[c] = !0, d(a), b.masonry("appended", a, !0)) }

            function i() { h.scheduleMasonryOnce("layout") }
            g || (h.loadImages ? h.preserveOrder ? (f(), a.imagesLoaded(i)) : a.imagesLoaded(function() { f(), i() }) : (f(), i())) }, this.removeBrick = function(a, c) { g || (delete e[a], b.masonry("remove", c), this.scheduleMasonryOnce("layout")) }, this.destroy = function() { g = !0, b.data("masonry") && b.masonry("destroy"), a.$emit("masonry.destroyed"), e = {} }, this.reload = function() { b.masonry(), a.$emit("masonry.reloaded") } }]).directive("masonry", function() { return { restrict: "AE", controller: "MasonryCtrl", link: { pre: function(a, b, c, d) { var e = a.$eval(c.masonry || c.masonryOptions),
                        f = angular.extend({ itemSelector: c.itemSelector || ".masonry-brick", columnWidth: parseInt(c.columnWidth, 10) || c.columnWidth }, e || {});
                    b.masonry(f), a.masonryContainer = b[0]; var g = a.$eval(c.loadImages);
                    d.loadImages = g !== !1; var h = a.$eval(c.preserveOrder);
                    d.preserveOrder = h !== !1 && void 0 !== c.preserveOrder; var i = a.$eval(c.reloadOnShow);
                    i !== !1 && void 0 !== c.reloadOnShow && a.$watch(function() { return b.prop("offsetParent") }, function(a, b) { a && !b && d.reload() }); var j = a.$eval(c.reloadOnResize);
                    j !== !1 && void 0 !== c.reloadOnResize && a.$watch("masonryContainer.offsetWidth", function(a, b) { a != b && d.reload() }), a.$emit("masonry.created", b), a.$on("$destroy", d.destroy) } } } }).directive("masonryBrick", function() { return { restrict: "AC", require: "^masonry", scope: !0, link: { pre: function(a, b, c, d) { var e, f = a.$id;
                    d.appendBrick(b, f), b.on("$destroy", function() { d.removeBrick(f, b) }), a.$on("masonry.reload", function() { d.scheduleMasonryOnce("reloadItems"), d.scheduleMasonryOnce("layout") }), a.$watch("$index", function() { void 0 !== e && e !== a.$index && (d.scheduleMasonryOnce("reloadItems"), d.scheduleMasonryOnce("layout")), e = a.$index }) } } } }) }();