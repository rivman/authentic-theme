/*!
 * Authentic Theme 18.31 (https://github.com/qooob/authentic-theme)
 * Copyright 2014-2017 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */
;
var b = window,
    f = b.parent,
    a = f.document.getElementById("iframe"),
    with_frame = !(typeof f.NProgress == "object" ? 0 : 1),
    html = $("html"),
    r = $('link[href*="configserver"]'),
    empty = $("style");
html.attr("data-background-style", f.$("html").attr("data-background-style")).attr("data-module", "csf");
empty.empty();
r.remove();
$(function() {});

function csf_init() {
    function q(d) {
        return $("<div></div>").html(d).text()
    }(function(d) {
        d.fn.replaceTagName = function(T) {
            var S = [],
                R = this.length;
            while (R--) {
                var P = document.createElement(T),
                    O = this[R],
                    U = O.attributes;
                for (var V = U.length - 1; V >= 0; V--) {
                    var Q = U[V];
                    P.setAttribute(Q.name, Q.value)
                }
                P.innerHTML = O.innerHTML;
                d(O).after(P).remove();
                S[R - 1] = P
            }
            return d(S)
        }
    })(jQuery);
    (function(d) {
        d.fn.replaceText = function(g, O, P) {
            return this.each(function() {
                var R = this.firstChild,
                    Q, S, T = [];
                if (R) {
                    do {
                        if (R.nodeType === 3) {
                            Q = R.nodeValue;
                            S = Q.replace(g, O);
                            if (S !== Q) {
                                if (!P && /</.test(S)) {
                                    d(R).before(S);
                                    T.push(R)
                                } else {
                                    R.nodeValue = S
                                }
                            }
                        }
                    } while (R = R.nextSibling)
                }
                T.length && d(T).remove()
            })
        }
    })(jQuery);

    function v(d, O, g) {
        t.animate({
            opacity: 1
        }, O.$settings_animation_left_slide_time, function() {
            t.css("pointer-events", "auto").css("overflow", "auto")
        });
        g && O.__lre()
    }

    function w(X, V) {
        var Q = (((X.attr("onclick") && X.attr("onclick").indexOf("blank") !== -1) || (X.parents("form").attr("target") && X.parents("form").attr("target").indexOf("blank") !== -1)) ? true : false),
            g = X.hasClass("heighter-28"),
            O = X.css("height") == "28px",
            S = X.hasClass("btn-lg"),
            R = 0,
            W = X.find(".fa").hasClass("fa-1_25x"),
            P = X.find(".fa"),
            T = ((typeof V == "undefined" || V == false) ? false : V),
            U = '<span class="cspinner_container" style="position: absolute; width: 18px; height: 14px; display: inline-block;"><span class="cspinner" style="margin-top: ' + (T ? T[0] + "px" : (((g || O) && (!W && !S)) ? (-0.5 + R) + "px" : W ? "1.6px" : S ? "1.5px" : "0")) + " !important; margin-left: " + (T ? T[1] + "px" : (((g || O) && (!W && !S)) ? "-23.5px" : S ? "-28px" : (!g && !O && W) ? "-27.5px" : "-25.5px")) + ' !important;"><span class="cspinner-icon white ' + (T ? (T[2] ? T[2] : "") : (g || O ? "smaller" : "small")) + '"></span></span></span>',
            d = '<span class="cspinner_container" style="position: absolute; width: 18px; height: 14px; display: inline-block;"><span class="cspinner" style="margin-top: ' + (T ? T[0] + "px" : (((g || O) && (!W && !S)) ? (-0.5 + R) + "px" : W ? "1.6px" : S ? "1.5px" : "0")) + " !important; margin-left: " + (T ? T[1] + "px" : (((g || O) && (!W && !S)) ? "-23.5px" : S ? "-28px" : (!g && !O && W) ? "-27.5px" : "-25.5px")) + '  !important;"><span class="cspinner-icon dark ' + (T ? (T[2] ? T[2] : "") : (g || O ? "smaller" : "small")) + '"></span></span></span>';
        !Q && X.addClass("disabled");
        if (P.length && !Q) {
            if (X.hasClass("btn-default")) {
                P.addClass("invisible").after(d)
            } else {
                P.addClass("invisible").after(U)
            }
        }
        if (T[3]) {
            setTimeout(function() {
                X.removeClass("disabled");
                P.removeClass("invisible");
                X.find(".cspinner_container").remove()
            }, T[3])
        }
    }

    function l() {
        if ($('html[data-post="viewlogs"]').length) {
            setTimeout(function() {
                $.each($(".table.table-striped.table-condensed tbody tr"), function() {
                    var d = $(this);
                    targ = d.find('td[style*="nowrap"] button[type="button"]').attr("onclick");
                    __id = (targ ? parseInt(targ.match(/\d+/)[0]) : -1);
                    $.grep($__submenus__, function(g) {
                        if ($(g).attr("id") == ("s" + __id)) {
                            d.after($(g))
                        }
                    })
                })
            }, 100)
        }
    }
    typeof f.lang == "function" ? $is_lang = 1 : $is_lang = 0;
    if ($is_lang) {
        var M = {
            order: [],
            aaSorting: [],
            bDestroy: true,
            bPaginate: false,
            bInfo: false,
            destroy: true,
            oLanguage: {
                sEmptyTable: f.lang("theme_xhred_datatable_semptytable"),
                sInfo: f.lang("theme_xhred_datatable_sinfo"),
                sInfoEmpty: f.lang("theme_xhred_datatable_sinfoempty"),
                sLengthMenu: f.lang("theme_xhred_datatable_slengthmenu"),
                sLoadingRecords: f.lang("theme_xhred_datatable_sloadingrecords"),
                sProcessing: f.lang("theme_xhred_datatable_sprocessing"),
                sSearch: " ",
                sZeroRecords: f.lang("theme_xhred_datatable_szerorecords")
            },
            drawCallback: function(d) {
                l()
            }
        }
    } else {
        var M = {
            order: [],
            aaSorting: [],
            bDestroy: true,
            bPaginate: false,
            bInfo: false,
            destroy: true,
            drawCallback: function(d) {
                l()
            }
        }
    }

    function e(d, O) {
        if (u.find('textarea[name="formdata"]').length || !$("html[data-post]").attr("data-post")) {
            return
        }
        if (u.find('pre:not(:contains("<---"))').length) {
            var g = "log";
            setTimeout(function() {
                d && u.find("pre").css({
                    position: "initial",
                    left: "initial",
                    opacity: "0"
                });
                u.find("pre").each(function(R, Q) {
                    var S = $(this),
                        P = q(S.html());
                    S.empty();
                    window[g + "_" + R] = window.CodeMirror(this, {
                        value: P,
                        lineNumbers: O,
                        mode: null,
                        theme: (with_frame ? f.settings_cm_view_palette : "monokai"),
                        readOnly: true,
                        viewportMargin: Infinity
                    });
                    d && window[g + "_" + R].setSize(null, ($(window).outerHeight() / 1.7))
                }).promise().done(function() {
                    if (d) {
                        u.find("pre").css({
                            position: "initial",
                            left: "initial"
                        });
                        setTimeout(function() {
                            u.find("pre").animate({
                                opacity: 1
                            }, f.$settings_animation_left_slide_time)
                        }, 10)
                    }
                    if (!d) {
                        var P = ($("pre[style]").length == 1 ? 1.4 : 1.8);
                        $.each($("pre[style]"), function(R, Q) {
                            var S = ($(window).outerHeight() / (P * $("pre[style]").length)),
                                T = ($(this).find(".CodeMirror-code").find("pre").length * 17);
                            if (T > S) {
                                window[g + "_" + R].setSize(null, S)
                            } else {
                                window[g + "_" + R].setSize(null, T - 10)
                            }
                        })
                    }
                })
            }, 10)
        } else {
            u.find("pre").css({
                position: "initial",
                left: "initial"
            });
            u.find("pre").replaceText(/<---- /gi, "");
            u.find("pre").replaceText(/ ---->/gi, "")
        }
    }

    function p() {
        setTimeout(function() {
            u.find(".panel-heading").prepend('			<div class="btn-group pull-right" style="position: absolute; right: 15px; top: 17px;">			<a class="btn btn-link text-lighter btn-filter-top-right text-decoration-none pull-left" data-toggle="tooltip" data-title="' + ($is_lang ? f.lang("theme_xhred_datatable_filter_visible_tables") : "") + '" data-container="body">				<label style="font-weight: 400">					<input type="text" class="dataTable-mirror" placeholder="' + ($is_lang ? f.lang("theme_xhred_datatable_filter") : "") + '">				</label>				<i class="fa fa-filter"></i>			</a>			</div>		');
            var d = u.find(".dataTables_filter");
            d.hide();
            u.find(".btn-filter-top-right").click(function(g) {
                !$(g.target).is("input") && $(this).find("label").slideToggle(300, function() {
                    $(this).find("input").focus()
                })
            });
            u.find(".dataTable-mirror").keyup(function(g) {
                u.find(".dataTables_filter input").val($(this).val()).trigger("keyup");
                if ($.trim($(this).val()).length > 0) {
                    u.find(".btn-filter-top-right i").addClass("text-danger")
                } else {
                    u.find(".btn-filter-top-right i").removeClass("text-danger")
                }
            });
            u.find(".btn-filter-top-right input").blur(function(g) {
                $(this).parent("label").slideToggle(0)
            });
            u.on("keydown", function(P) {
                if (f.$('aside input[name="search"]').is(":focus")) {
                    return
                }
                var O = P.keyCode ? P.keyCode : P.which;
                if (!u.find("input").is(":focus") && !u.find("select").is(":focus") && !u.find("textarea").is(":focus") && !u.find(".modal.in").length) {
                    var g = String.fromCharCode(O).toLowerCase();
                    if (g && /[a-zA-Z0-9]/.test(g) && !P.ctrlKey && !P.altKey && !P.metaKey && O !== 106 && O !== 107 && O !== 109 && O !== 112 && O !== 113 && O !== 114 && O !== 115 && O !== 116 && O !== 117 && O !== 118 && O !== 119 && O !== 120 && O !== 121 && O !== 122 && O !== 123) {
                        if (u.find(".dataTables_filter label input").length) {
                            u.find(".btn-filter-top-right").trigger("click");
                            u.find(".btn-filter-top-right .dataTable-mirror").focus().trigger("keyup")
                        }
                    }
                }
            })
        }, 0)
    }
    r = $('link[href*="configserver"], style, a#toplink, a#botlink, div#loader, a#webmintr2');
    r.remove();
    var m = (a !== null ? a.contentWindow : window);
    if (with_frame) {
        m.onbeforeunload = function(d) {
            f.__lrs()
        };
        $('body:not(".mobile-menu-toggler")').on("click", function(d) {
            if ($(d.target).is('a[data-toggle="tab"]')) {
                return
            }
            f.hide_mobile_menu()
        });
        $("#iframe").contents().find("body").on("keydown", function(d) {
            f.search_control(d);
            f.shortcut_control(d)
        });
        if (f.$("#open_webmin").length > 0 && f.$(".switch-toggle input:checked").attr("id") != "open_webmin" && f.$("body").data("dashboard") == "1") {
            f.t__s("open_webmin")
        }
        f.__cms();
        f.$('a[href="csf/"]').parent("li").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().prev("li").addClass("active")
    }
    var u = $("html"),
        t = $("body"),
        i = $("body .container-fluid"),
        D = $("html").attr("data-post"),
        z = $('pre:contains("csf:")').text().match(/((?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+))$/)[0] || "9.xx";
    t.addClass("csf");
    i.addClass("col-lg-10 col-lg-offset-1").wrapInner('<div class="panel panel-default">');
    u.find(".panel-default").wrapInner('<div class="panel-body">');
    u.find(".panel-default:first").css("border-top-width", "4px").prepend('<div class="panel-heading" style="text-align:center"><font size="+2">Firewall</font><span style="font-size:14px;display:block">ConfigServer Security & Firewall version ' + z + "</span></div>");
    u.find(".panel-heading + .panel-body > .panel:first").remove();
    u.find(".nav.nav-tabs").addClass("hidden");
    u.find('a[data-toggle="tab"][href="#other"]').parent("li").remove();
    u.find(".csf .nav.nav-tabs:hidden + .tab-content").attr("style", "margin-top: -10px !important");
    if (u.find('button[value="upgrade"]').length === 0) {
        $("#upgradetable").remove()
    }
    u.find('a[href$="/csf/changelog.txt"]').addClass("btn btn-xxs btn-default _btn-changelog").html('<i class="fa fa-info-circle"></i>Changelog');
    u.find("body table.table.table-bordered.table-striped").each(function() {
        $(this).addClass("table-condensed").removeClass("table-bordered").removeAttr("style")
    });
    u.find("a#MobileView").parent(".panel-body").parent(".panel-body").parent(".panel").remove();
    var E = 0;
    if (u.find(".mobilecontainer").length) {
        E = 1
    }
    u.find(".mobilecontainer").remove();
    typeof settings_allowed_hostname == "undefined" ? settings_allowed_hostname = true : false;
    var j = E ? u.find('.panel-heading:contains("Development Contribution")').parent().parent() : u.find('.panel-heading:contains("Development Contribution")').parent(),
        I = ($('link[rel="shortcut icon"]').data("hostname") == settings_allowed_hostname ? 1 : 0);
    if (D) {
        var N = u.find('br + pre:contains("csf:")');
        if (I) {
            N.prev("br").remove();
            N.next("p").remove();
            N.remove()
        } else {
            var s = N.next("p");
            N.remove();
            N.prev("br").remove();
            s.addClass("text-right footer-string")
        }
    } else {
        if (I) {
            if (E) {
                j.remove()
            } else {
                j.parent().find('br, br + pre:contains("csf:")').remove();
                j.parent().find("p").remove();
                j.remove()
            }
        } else {
            if (E) {
                j.find('br, br + pre:contains("csf:")').remove();
                j.find(".panel-info").removeClass("panel-info").addClass("panel-default text-center margined-top-10 _devcon");
                j.find("p").addClass("text-right footer-string")
            } else {
                j.parent().find('br, br + pre:contains("csf:")').remove();
                j.parent().find(".panel-info").removeClass("panel-info").addClass("panel-default text-center margined-top-10 _devcon");
                j.parent().find("p").addClass("text-right footer-string")
            }
        }
    }
    u.find('.csf select:not([name="backup"], [name="profile1"], [name="profile2"], [name="do"], [name="dur"]), .csf input:not([name="comment"], [name="ip"], [name="ports"], [name="timeout"], [aria-controls*="DataTables_Table_"])').addClass("heighter-34");
    var B = u.find('h4:contains("iptables logs*")');
    if (B.length) {
        $(".panel-body .pull-right").addClass("hidden");
        var y = B.next().next(".table.table-striped.table-condensed");
        B.addClass("col_header_custom big_big").attr("style", "border-bottom-color: transparent !important; background-color: #fafafa !important; line-height: 25px !important;");
        B.find("b").css("margin-left", "4px");
        y.attr("style", "margin-top: -8px !important");
        y.find("tbody tr:nth-child(2) td:first-child").css("min-width", "200px");
        $__submenus__ = $(".submenu").detach();
        setTimeout(function() {
            u.find(".panel-heading").prepend('			<div class="btn-group pull-right" style="position: absolute; right: 15px; top: 17px;">			<a class="btn btn-link text-lighter btn-toggle-top-right text-decoration-none pull-left" data-toggle="tooltip" data-container="body">				<i class="fa fa-toggle-switch-off fa-1_25x"></i>			</a>			</div>		');
            u.find("body").on("click", ".btn-toggle-top-right", function(d) {
                d.preventDefault();
                if ($(this).find(".fa-toggle-switch-off").length) {
                    u.find('button[onclick*=".show()"]')[0].click();
                    u.find(".btn.btn-xxs.fa-1_25x").removeClass("fa-toggle-switch-off").addClass("fa-toggle-switch");
                    $(this).find(".fa-toggle-switch-off").removeClass("fa-toggle-switch-off").addClass("fa-toggle-switch")
                } else {
                    u.find('button[onclick*=".hide()"]')[0].click();
                    u.find(".btn.btn-xxs.fa-1_25x").removeClass("fa-toggle-switch").addClass("fa-toggle-switch-off");
                    $(this).find(".fa-toggle-switch").addClass("fa-toggle-switch-off").removeClass("fa-toggle-switch")
                }
            })
        }, 0);
        $('html[data-post="viewlogs"] button.glyphicon.glyphicon-resize-vertical').addClass("btn-xxs").removeClass("glyphicon glyphicon-resize-vertical").addClass("fa fa-toggle-switch-off fa-1_25x").removeAttr("data-tooltip").removeAttr("data-title").removeAttr("data-original-title");
        $("body").on("click", ".table.table-striped.table-condensed tbody tr", function(d) {
            $(this).find("button").trigger("click")
        });
        $("body").on("click love", ".btn.btn-xxs.fa-1_25x", function(d) {
            d.preventDefault();
            d.stopImmediatePropagation();
            if ($(this).hasClass("fa-toggle-switch-off")) {
                $(this).removeClass("fa-toggle-switch-off").addClass("fa-toggle-switch")
            } else {
                $(this).removeClass("fa-toggle-switch").addClass("fa-toggle-switch-off")
            }
        });
        $(".table.table-striped.table-condensed").dataTable(M);
        p();
        setTimeout(function() {
            $(".btn-filter-top-right").parent().css("right", "58px")
        }, 100)
    }
    if (u.find('.csf select[name="dur"]')[0]) {
        var H = u.find('.csf select[name="dur"]')[0].nextSibling;
        if (H.nodeValue == ".") {
            $(H).remove()
        }
    }
    var L = $('html[data-post="conf"] .csf form .comment > br:first-child').map(function() {
        this.previousSibling.nodeValue && $(this.previousSibling).wrap('<span class="fst-ln-c">')
    });
    u.find(".csf #paginatediv2.paginationstyle > select").each(function() {
        $(this).attr("style", "vertical-align: top !important")
    });
    u.find(".csf #paginatediv2 > a").each(function() {
        $(this).attr("style", "vertical-align: baseline !important")
    });
    u.find(".csf p > select").each(function() {
        $(this).attr("style", "vertical-align: baseline !important")
    });
    u.find('img[src="csfimages/loader.gif"]').each(function() {
        $(this).attr("src", "" + (with_frame ? f.$_____link_full : "") + "/images/loader-horizontal.gif").css("margin-left", "10px")
    });
    u.find(".paginationstyle a").each(function() {
        $(this).addClass("btn btn-default")
    });
    u.find('img[src^="lfd_"], img[src^="/csf/lfd_"]').each(function() {
        $(this).parents("table").removeClass("table-striped")
    });
    u.find('img[src^="csfimages/delete.png"]').each(function() {
        $(this).replaceWith('<i class="fa fa-unlock text-success" style="font-size: 1.1em; vertical-align: middle;"></i>')
    });
    u.find('img[src^="csfimages/perm.png"]').each(function() {
        $(this).replaceWith('<i class="fa fa-lock text-danger" style="font-size: 1.1em; vertical-align: middle;"></i>')
    });
    u.find('img[src^="csfimages/plus.png"]').each(function() {
        $(this).addClass("hidden");
        b;
        $(this).after('<i class="fa fa-plus-circle text-success margined-right-2" style="font-size: 1.1em;"></i>')
    });
    u.find('img[src^="csfimages/minus.png"]').each(function() {
        $(this).addClass("hidden");
        $(this).after('<i class="fa fa-minus-circle text-danger margined-right-2" style="font-size: 1.1em;"></i>')
    });
    u.find(".csf fieldset legend b").each(function() {
        if ($(this).text().indexOf("Edit ConfigServer Firewall") >= 0) {
            $submit_changes = u.find('input[value="Change"]');
            $submit_changes.addClass("csf-submit_changes");
            $submit_changes.on("click", function() {
                u.find('input[value="saveconf"]').parent("form").submit()
            })
        }
    });
    typeof __csf__listen_log_grep != "undefined" && clearInterval(__csf__listen_log_grep);
    if (u.find("#CSFgrep_D").length && u.find("#CSFgrep_E").length && u.find("#CSFgrep_i").length) {
        u.find('select, input[type="text"], button[onclick="CSFgrep()"]').removeClass("heighter-34").addClass("heighter-28");
        u.find("#CSFgrep_i, #CSFgrep_E, #CSFgrep_D").attr("style", "vertical-align: middle; margin-right: 4px;");
        u.find("#CSFajax").css("margin-bottom", "4px")
    }
    u.find("#CSFajax.csf-box").addClass("csf_force_log_size");
    setTimeout(function() {
        if (typeof window.CodeMirror == "function") {
            e(false, false)
        } else {
            setTimeout(function() {
                if (typeof window.CodeMirror == "function") {
                    e(false, false)
                } else {
                    setTimeout(function() {
                        e(false, false)
                    }, 100)
                }
            }, 100)
        }
    }, 100);

    function K() {
        if (!$("html[data-post]").attr("data-post")) {
            return
        }
        u.find('textarea[name="formdata"]').each(function(O, P) {
            var d = $(this);
            $parent_width = d.parent("td").width();
            var g = window.CodeMirror.fromTextArea(P, {
                mode: {
                    name: "rpm-spec"
                },
                matchBrackets: true,
                lineNumbers: true,
                keyMap: "sublime",
                highlightSelectionMatches: {
                    showToken: /\w/,
                    annotateScrollbar: true
                },
                indentUnit: 0,
                autofocus: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                extraKeys: {
                    "Ctrl-Space": "autocomplete"
                },
                styleActiveLine: true,
                lineWrapping: true,
                theme: (with_frame ? f.settings_cm_editor_palette : "monokai")
            });
            $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
            g.setSize($parent_width, $window_height);
            $(window).resize(function() {
                $parent_width = d.parent("td").width();
                $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                g.setSize($parent_width, $window_height)
            })
        })
    }
    setTimeout(function() {
        if (typeof window.CodeMirror == "function") {
            K()
        } else {
            setTimeout(function() {
                if (typeof window.CodeMirror == "function") {
                    K()
                } else {
                    setTimeout(function() {
                        K()
                    }, 60)
                }
            }, 150)
        }
    }, 60);
    if (u.find("h4").text().indexOf("Ports listening for external connections and the executables running behind them") !== -1) {
        u.find(".container-fluid .panel .panel-body table.table-striped").each(function() {
            u.find("h4").addClass("col_header_custom").attr("style", "margin-bottom: -5px !important; margin-top: 2px !important");
            u.find("h4").replaceText(/:/gi, "");
            $(this).dataTable(M)
        });
        p()
    }
    if (u.find(".csf .table.table-striped.table-condensed tbody th:eq(1)").text().indexOf("A/D") !== -1 && u.find(".csf .table.table-striped.table-condensed tbody th:eq(2)").text().indexOf("IP address") !== -1) {
        u.find('table:not(:contains("©2006-"))').each(function() {
            $('html[data-post="temp"] tr td .btn').attr("data-placement", "right");
            $('html[data-post="temp"] tr td .btn').addClass("btn-xxs").find("span.glyphicon.glyphicon-ban-circle").removeClass("glyphicon glyphicon-ban-circle").addClass("fa fa-ban");
            $('html[data-post="temp"] tr td .btn').find("span.glyphicon.glyphicon-ok-circle").removeClass("glyphicon glyphicon-ok-circle").addClass("fa fa-unlock");
            if (!$(this).find("thead").length) {
                var g = $(this),
                    d = $(this).find("tbody tr:first-child");
                g.prepend("<thead>" + d.html() + "</thead>");
                d.remove();
                $(this).dataTable(M);
                setTimeout(function() {
                    u.find(".csf .dataTable thead tr th:eq(0)").css("opacity", "0").css("pointer-events", "none")
                }, 10)
            }
        });
        p();
        $('.dataTables_wrapper + div:contains("There are no temporary IP entries")').remove();
        $('html[data-post="temp"] .dataTables_wrapper + div').find("a").addClass("btn-xxs btn-inverse").removeClass("btn-success").prepend('<i class="fa fa-fw fa-unlock">&nbsp;</i>')
    }
    if ($("html").attr("data-post") === "") {
        u.find('button[value="conf"]').prepend('<i class="fa fa-cog margined-right-5"></i>');
        u.find('button[value="enable"]').addClass("page_footer_submit btn-success").removeClass("btn-default").prepend('<i class="fa fa-toggle-switch fa-1_25x margined-right-5"></i>');
        u.find('button[value="disable"]').addClass("page_footer_submit btn-danger").removeClass("btn-default").prepend('<i class="fa fa-toggle-switch-off fa-1_25x margined-right-5"></i>');
        u.find('button[value="restart"]').addClass("page_footer_submit btn-info").removeClass("btn-default").prepend('<i class="fa fa-circle-o-notch margined-right-5"></i>');
        u.find('button[value="denyf"]').addClass("page_footer_submit btn-warning").removeClass("btn-default").prepend('<i class="fa fa-unlock margined-right-5"></i>')
    }
    $.each(u.find('input[type="radio"]:not(.iawobject), input[type="checkbox"]:not(.iawobject)'), function() {
        if ($("html").attr("data-post") == "conf") {
            return
        }
        if ($(this).is(":checkbox")) {
            if ($(this)[0]) {
                $___text = $(this)[0].nextSibling
            }
            var Q = $(this).next('input:not([type="radio"], [type="checkbox"], [type="hidden"]), select, textarea'),
                O = ($___text && $___text.nodeValue && $.trim($___text.nodeValue).length > 1),
                P = (O ? $___text.nodeValue : "&nbsp;");
            $(this).addClass("iawobject");
            var d = $(this).attr("id") ? 'for="' + $(this).attr("id") + '"' : false;
            if (d === false && $(this).attr("name") && $(this).val()) {
                var g = "__replaced_" + $(this).attr("name") + "_" + $(this).val() + "";
                var d = 'for="' + g + '"';
                $(this).attr("id", g)
            }
            if ($(this).is(":checkbox")) {
                if ($($___text).length) {
                    $($___text).wrap('<label style="font-weight: 400" class="lawobject" ' + d + ">" + $.trim(P) + " </label>");
                    $($___text).remove()
                } else {
                    $(this).after('<label class="lawobject" for="' + ($(this).attr("id") ? $(this).attr("id") : $(this).attr("name")) + '">&nbsp;</label>')
                }
            }
            $(this).next("label").addBack().wrapAll('<span class="aw' + $(this).attr("type") + ' awobject awobjectm"></span>')
        } else {
            if ($(this).is(":radio")) {
                $(this).addClass("iawobject vertical-align-middle");
                $(this).after('<label class="lawobject" for="' + $(this).attr("name") + '">&nbsp;</label>');
                $(this).next("label").addBack().wrapAll('<span class="aw' + $(this).attr("type") + ' awobject awobjectm"></span>')
            }
        }
    });
    var A = $('p:contains("..."):contains("Done")');
    if (A.length || $('html[data-post="logtail"], 									html[data-post="allow"],									html[data-post="deny"],									html[data-post="redirect"],									html[data-post="ignorefiles"],									html[data-post="dirwatch"],									html[data-post="dyndns"],									html[data-post="templates"],									html[data-post="logfiles"],									html[data-post="blocklists"],									html[data-post="syslogusers"]').length) {
        $("#csfreturn").parent("form").parent("div").prev("hr").replaceTagName("br");
        A.remove()
    } else {
        if ($('html[data-post="servercheck"], html[data-post="readme"], html[data-post="viewlogs"], html[data-post="chart"], html[data-post="loggrep"], html[data-post="viewports"], html[data-post="profiles"], html[data-post="status"], html[data-post="sips"], html[data-post="temp"]').length) {
            if ($('html[data-post="temp"]') && $('a[href="index.cgi?action=temprm&ip=all"]').length) {} else {
                $("#csfreturn").parent("form").parent("div").prev("hr").replaceTagName("br")
            }
        }
    }
    var c = $("#csfreturn").length;
    $('#csfreturn, 		   html[data-post="rblcheckedit"] input[value="rblcheck"] + input,		   html[data-post="serverchecksave"] input[value="servercheck"] + input,		   html[data-post="temprm"] input[value="temp"] + input,		   html[data-post="temptoperm"] input[value="temp"] + input		').replaceWith('<button type="submit" class="btn btn-' + (c ? "primary" : "default margined-top-10") + ' page_footer_submit"><i class="fa fa-fw fa-arrow-left">&nbsp;</i> Return' + (c ? " to module index" : "") + "</button>");
    var k = $('html input[value="lfdrestart"] + input, html input[value="restart"] + input, html input[value="restartboth"] + input'),
        x = "Save",
        J = "fa-circle-check";
    if (k.length) {
        x = k.val();
        J = "fa-circle-o-notch"
    }
    $('input[value="Change"],		html:not([data-post=""]) input[value="restartboth"] + input,		html:not([data-post=""]) input[value="lfdrestart"] + input,		html:not([data-post=""]) input[value="restart"] + input		').replaceWith('<button type="submit" class="btn btn-default page_footer_submit' + (k.length ? " __restart" : "") + '"><i class="fa fa-fw ' + J + '">&nbsp;</i> ' + x + "</button>");
    $("body").on("click", ".page_footer_submit:not(.disabled)", function(d) {
        w($(this), [2, -27, "small", 600])
    });
    var C = ".panel-heading font",
        o = "bs-callout",
        n = "" + C + " + .circles",
        h = $("." + o + ":visible");
    if (h.length && !$(n).length) {
        $(C).after('<span class="circles"></span>')
    }
    $.each(h, function() {
        var g = $.trim($(this).attr("class").replace(o, "").replace(o + "-", "").replace("text-center", "").replace("collapse", "")),
            d = $(this).text();
        if (!d) {
            return
        }
        $(n).prepend('<span data-tooltip="tooltip" data-container="body" data-html="true" data-placement="bottom" data-title="' + d + '" class="circle ' + g + '"><i class="fa fa-' + ((g == "warning" || g == "danger") ? "exclamation-circle" : (g == "info" ? "info-circle" : "check-circle")) + '"></i></span>');
        $(this).remove()
    });
    if ($("html").attr("data-post") !== "") {
        var G = u.find(".btn-primary.page_footer_submit");
        if (G.length) {
            u.find(".panel-heading font").before('<a href="/csf" class="btn btn-link footer_module_index_top"><i class="fa fa-arrow-left"></i></a>');
            $("body").on("click", ".footer_module_index_top", function(d) {
                d.preventDefault();
                $("body").find(".btn.btn-primary.page_footer_submit").before('<input type="submit" class="submit_tmp_index hidden">');
                $(".submit_tmp_index").trigger("click")
            })
        }
    } else {
        var F = u.find('button[value="conf"]');
        F.parent("form").parent("td").parent("tr").addClass("hidden");
        u.find(".panel-heading font").before('<a href="/" class="btn btn-link footer_module_index_top"><i class="fa fa-cog"></i></a>');
        $("body").on("click", 'a[href="/"].footer_module_index_top', function(d) {
            d.preventDefault();
            F.trigger("click")
        })
    }
    setTimeout(function() {
        v(i, f, with_frame)
    }, 100)
};