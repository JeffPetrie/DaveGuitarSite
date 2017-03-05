var guitar = {},
    alert = {};
'use strict';

//** Build out sets of string arrays here so you can use .map and jquery to set the values.
//** Notice I add a # to the front of each value so jquery can use it to find the Id in the DOM.
var CamiStraps = [];
var RemiStraps = [];
var RoccoStraps = [];
CamiStraps.push("#strap_l_chrome_c1","#strap_l_black_c1","#strap_l_gold_c1","#strap_l_chrome_c2","#strap_l_black_c2","#strap_l_gold_c2",
    "#strap_b_chrome_c1","#strap_b_black_c1","#strap_b_gold_c1","#strap_b_chrome_c2","#strap_b_black_c2","#strap_b_gold_c2");

RemiStraps.push("#strap_l_chrome_re1","#strap_l_black_re1","#strap_l_gold_re1","#strap_l_chrome_re2","#strap_l_black_re2","#strap_l_gold_re2",
    "#strap_b_chrome_re1","#strap_b_black_re1","#strap_b_gold_re1","#strap_b_chrome_re2","#strap_b_black_re2","#strap_b_gold_re2");

RoccoStraps.push("#strap_l_chrome_ro1","#strap_l_black_ro1","#strap_l_gold_ro1","#strap_l_chrome_ro2","#strap_l_black_ro2","#strap_l_gold_ro2",
    "#strap_b_chrome_ro1","#strap_b_black_ro1","#strap_b_gold_ro1","#strap_b_chrome_ro2","#strap_b_black_ro2","#strap_b_gold_ro2");

//FUNCTION IF GUITAR IS NOT COMPLETE
function fixGuitar() {
    var a,b,c,d,e,f,g,h,i,j,k,l,m = "";

    if (guitar.template === undefined) {
        a = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="0" class="btn btn-outline-danger btn-sm">Template</button>';
    }
    if (guitar.profile === undefined) {
        b = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="1" class="btn btn-outline-danger btn-sm">Profile</button>';
    }
    if (guitar.bodyWood === undefined) {
        c = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="2" class="btn btn-outline-danger btn-sm">Body Wood</button>';
    }
    if (guitar.neckWood === undefined) {
        d = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="3" class="btn btn-outline-danger btn-sm">Neck Wood</button>';
    }
    if (guitar.fretboardWood === undefined) {
        e = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="4" class="btn btn-outline-danger btn-sm">Fretboard</button>';
    }
    if (guitar.frets === undefined) {
        f = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="5" class="btn btn-outline-danger btn-sm">Frets</button>';
    }
    if (guitar.inlays === undefined) {
        g = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="6" class="btn btn-outline-danger btn-sm">Inlays</button>';
    }
    if (guitar.tuners === undefined) {
        h = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="7" class="btn btn-outline-danger btn-sm">Tuners</button>';
    }
    if (guitar.bridge === undefined) {
        i = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="8" class="btn btn-outline-danger btn-sm">Bridge</button>';
    }
    if (guitar.bridgePickupRing === undefined) {
        j = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="9" class="btn btn-outline-danger btn-sm">Bridge Pickup</button>';
    }
    if (guitar.neckPickupRing === undefined) {
        k = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="10" class="btn btn-outline-danger btn-sm">Neck Pickup</button>';
    }
    if (guitar.knobSwitchStyle === undefined) {
        l = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="11" class="btn btn-outline-danger btn-sm">Guitar Controls</button>';
    }
    if (guitar.strapButtonStyle === undefined) {
        m = '<button type="button" href="#" data-target="#carouselExampleIndicators" data-slide-to="13" class="btn btn-outline-danger btn-sm">Strap Buttons</button>';
    }
    document.getElementById("toComplete").innerHTML = a + b + c + d + e + f + g + h + i + j + k + l + m;
}

// CLEAR ALERTS
function clearAlerts() {
    document.getElementById("bodyProfileAlert").style.visibility = "hidden";
    document.getElementById("bodyWoodAlert").style.visibility = "hidden";
    document.getElementById("successWoodAlert").style.visibility = "hidden";
    document.getElementById("successProfileAlert").style.visibility = "hidden";
    document.getElementById("successNeckAlert").style.visibility = "hidden";
    document.getElementById("neckAlert").style.visibility = "hidden";
    document.getElementById("successFretboardAlert").style.visibility = "hidden";
    document.getElementById("fretboardAlert").style.visibility = "hidden";
    document.getElementById("controlsAlert").style.visibility = "hidden";
    document.getElementById("lowProfileAlert").style.visibility = "hidden";
    document.getElementById("bodyWoodPageAlert").style.visibility = "hidden";
    document.getElementById("textureAlert").style.visibility = "hidden";
    document.getElementById("curveAccentsAlert").style.visibility = "hidden";
    fixGuitar();
    document.getElementById("r_logo").className = "moveLogo";
}

// ADD NATURAL FINISH
function addNaturalFinish() {
    delete guitar.stainedColor;
    delete guitar.solidColor;
    delete guitar.texturedColor;
    clearAlerts();
    document.getElementById("f_overlay_camila").style.opacity = "0";
    document.getElementById("c_overlay_camila").style.opacity = "0";
    document.getElementById("color_camila").style.opacity = "0";
    document.getElementById("f_overlay_remi").style.opacity = "0";
    document.getElementById("c_overlay_remi").style.opacity = "0";
    document.getElementById("color_remi").style.opacity = "0";
    document.getElementById("f_overlay_rocco").style.opacity = "0";
    document.getElementById("c_overlay_rocco").style.opacity = "0";
    document.getElementById("color_rocco").style.opacity = "0";
    document.getElementById("color_curve_camila").style.opacity = "0";
    document.getElementById("color_curve_remi").style.opacity = "0";
    document.getElementById("color_curve_rocco").style.opacity = "0";
    document.getElementById("c_texture_wood").style.opacity = "0";
    document.getElementById("c_texture_metal").style.opacity = "0";
    document.getElementById("re_texture_m1").style.opacity = "0";
    document.getElementById("re_texture_m2").style.opacity = "0";
    document.getElementById("ro_texture_m1").style.opacity = "0";
    document.getElementById("ro_texture_m2").style.opacity = "0";
    guitar.bodyFinish = "natural";
}

//** GUITAR STRAP BUTTONS SELECTION -- JCP: This function uses arrays and jquery to clear straps.
function clearNewStrap(template) {
    if (template == 'camila') {
        CamiStraps.map(function (str) { $(str).css('opacity', '0') });
    } else if (template == 'remi') {
        RemiStraps.map(function (str) { $(str).css('opacity', '0') });
    } else if (template == 'rocco') {
        RoccoStraps.map(function (str) { $(str).css('opacity', '0') });
    }
}

// GUITAR STRAP BUTTONS SELECTION   JCP: Pass a parameter to this function for a single function not 3.
//** Use your GUITAR object to pass values to functions. Or just access them from the object.
function clearStrap(template) {
    if (template == 'camila') {
        document.getElementById("strap_l_chrome_c1").style.opacity = "0";
        document.getElementById("strap_l_black_c1").style.opacity = "0";
        document.getElementById("strap_l_gold_c1").style.opacity = "0";
        document.getElementById("strap_l_chrome_c2").style.opacity = "0";
        document.getElementById("strap_l_black_c2").style.opacity = "0";
        document.getElementById("strap_l_gold_c2").style.opacity = "0";
        document.getElementById("strap_b_chrome_c1").style.opacity = "0";
        document.getElementById("strap_b_black_c1").style.opacity = "0";
        document.getElementById("strap_b_gold_c1").style.opacity = "0";
        document.getElementById("strap_b_chrome_c2").style.opacity = "0";
        document.getElementById("strap_b_black_c2").style.opacity = "0";
        document.getElementById("strap_b_gold_c2").style.opacity = "0";
    } else if (template == 'remi') {
        document.getElementById("strap_l_chrome_re1").style.opacity = "0";
        document.getElementById("strap_l_black_re1").style.opacity = "0";
        document.getElementById("strap_l_gold_re1").style.opacity = "0";
        document.getElementById("strap_l_chrome_re2").style.opacity = "0";
        document.getElementById("strap_l_black_re2").style.opacity = "0";
        document.getElementById("strap_l_gold_re2").style.opacity = "0";
        document.getElementById("strap_b_chrome_re1").style.opacity = "0";
        document.getElementById("strap_b_black_re1").style.opacity = "0";
        document.getElementById("strap_b_gold_re1").style.opacity = "0";
        document.getElementById("strap_b_chrome_re2").style.opacity = "0";
        document.getElementById("strap_b_black_re2").style.opacity = "0";
        document.getElementById("strap_b_gold_re2").style.opacity = "0";
    } else if (template == 'rocco') {
        document.getElementById("strap_l_chrome_ro1").style.opacity = "0";
        document.getElementById("strap_l_black_ro1").style.opacity = "0";
        document.getElementById("strap_l_gold_ro1").style.opacity = "0";
        document.getElementById("strap_l_chrome_ro2").style.opacity = "0";
        document.getElementById("strap_l_black_ro2").style.opacity = "0";
        document.getElementById("strap_l_gold_ro2").style.opacity = "0";
        document.getElementById("strap_b_chrome_ro1").style.opacity = "0";
        document.getElementById("strap_b_black_ro1").style.opacity = "0";
        document.getElementById("strap_b_gold_ro1").style.opacity = "0";
        document.getElementById("strap_b_chrome_ro2").style.opacity = "0";
        document.getElementById("strap_b_black_ro2").style.opacity = "0";
        document.getElementById("strap_b_gold_ro2").style.opacity = "0";
    }
}

function clearAllStrap() {
    CamiStraps.map( function(str) { $(str).css('opacity', '0')});
    CamiStraps.map( function(str) { $(str).css('opacity', '0')});
    CamiStraps.map( function(str) { $(str).css('opacity', '0')});
}

//** Now this add strap will do any combination from a single function.
//** Look for anything you do in all the ifs and put them up top.
function addStrap(strapColor, strapStype) {
    if (guitar.template !== undefined) {
        clearStrap(guitar.template);
        clearAlerts();
        //** First set the defaults if empty.
        if (strapColor === undefined) {
            guitar.strapButtonStyle = "chrome";
        } else {
            guitar.strapButtonStyle = strapColor;
        }
        if (strapStype === undefined) {
            guitar.strapButtons = "standard";
        } else {
            guitar.strapButtons = strapStype;
        }
        if (guitar.strapButtons === "locking") {
            if (guitar.template === "camila") {
                if (guitar.strapButtonStyle === "chrome") {
                    $('#strap_l_chrome_c1').css('opacity', '1');
                    $('#strap_l_chrome_c2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "black") {
                    $('#strap_l_black_c1').css('opacity', '1');
                    $('#strap_l_black_c2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "gold") {
                    $('#strap_l_gold_c1').css('opacity', '1');
                    $('#strap_l_gold_c2').css('opacity', '1');
                }
            } else if (guitar.template === "remi") {
                if (guitar.strapButtonStyle === "chrome") {
                    $('#strap_l_chrome_re1').css('opacity', '1');
                    $('#strap_l_chrome_re2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "black") {
                    $('#strap_l_black_re1').css('opacity', '1');
                    $('#strap_l_black_re2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "gold") {
                    $('#strap_l_gold_re1').css('opacity', '1');
                    $('#strap_l_gold_re2').css('opacity', '1');
                }
            } else if (guitar.template === "rocco") {
                if (guitar.strapButtonStyle === "chrome") {
                    $('#strap_l_chrome_ro1').css('opacity', '1');
                    $('#strap_l_chrome_ro2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "black") {
                    $('#strap_l_black_ro1').css('opacity', '1');
                    $('#strap_l_black_ro2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "gold") {
                    $('#strap_l_gold_ro1').css('opacity', '1');
                    $('#strap_l_gold_ro2').css('opacity', '1');
                }
            }
        } else {
            if (guitar.template === "camila") {
                if (guitar.strapButtonStyle === "chrome") {
                    $('#strap_b_chrome_c1').css('opacity', '1');
                    $('#strap_b_chrome_c2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "black") {
                    $('#strap_b_black_c1').css('opacity', '1');
                    $('#strap_b_black_c2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "gold") {
                    $('#strap_b_gold_c1').css('opacity', '1');
                    $('#strap_b_gold_c2').css('opacity', '1');
                }
            } else if (guitar.template === "remi") {
                if (guitar.strapButtonStyle === "chrome") {
                    $('#strap_b_chrome_re1').css('opacity', '1');
                    $('#strap_b_chrome_re2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "black") {
                    $('#strap_b_black_re1').css('opacity', '1');
                    $('#strap_b_black_re2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "gold") {
                    $('#strap_b_gold_re1').css('opacity', '1');
                    $('#strap_b_gold_re2').css('opacity', '1');
                }
            } else if (guitar.template === "rocco") {
                if (guitar.strapButtonStyle === "chrome") {
                    $('#strap_b_chrome_ro1').css('opacity', '1');
                    $('#strap_b_chrome_ro2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "black") {
                    $('#strap_b_black_ro1').css('opacity', '1');
                    $('#strap_b_black_ro2').css('opacity', '1');
                } else if (guitar.strapButtonStyle === "gold") {
                    $('#strap_b_gold_ro1').css('opacity', '1');
                    $('#strap_b_gold_ro2').css('opacity', '1');
                }
            }
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addChromeStrap() {
    if (guitar.template !== undefined) {
        clearAlerts();
        clearStrap(guitar.template);
        if (guitar.strapButtons === "locking" && guitar.template === "camila") {
            document.getElementById("strap_l_chrome_c1").style.opacity = "1";
            document.getElementById("strap_l_chrome_c2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtons === "locking" && guitar.template === "remi") {
            document.getElementById("strap_l_chrome_re1").style.opacity = "1";
            document.getElementById("strap_l_chrome_re2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtons === "locking" && guitar.template === "rocco") {
            document.getElementById("strap_l_chrome_ro1").style.opacity = "1";
            document.getElementById("strap_l_chrome_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtons === "standard" && guitar.template === "camila") {
            document.getElementById("strap_b_chrome_c1").style.opacity = "1";
            document.getElementById("strap_b_chrome_c2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtons === "standard" && guitar.template === "remi") {
            document.getElementById("strap_b_chrome_re1").style.opacity = "1";
            document.getElementById("strap_b_chrome_re2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtons === "standard" && guitar.template === "rocco") {
            document.getElementById("strap_b_chrome_ro1").style.opacity = "1";
            document.getElementById("strap_b_chrome_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtons === undefined && guitar.template === "camila") {
            document.getElementById("strap_b_chrome_c1").style.opacity = "1";
            document.getElementById("strap_b_chrome_c2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtons === undefined && guitar.template === "remi") {
            document.getElementById("strap_b_chrome_re1").style.opacity = "1";
            document.getElementById("strap_b_chrome_re2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtons === undefined && guitar.template === "rocco") {
            document.getElementById("strap_b_chrome_ro1").style.opacity = "1";
            document.getElementById("strap_b_chrome_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "chrome";
            guitar.strapButtons = "standard";
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addBlackStrap() {
    if (guitar.template !== undefined) {
        if (guitar.strapButtons === "locking" && guitar.template === "camila") {
            clearCamilaStrap();
            document.getElementById("strap_l_black_c1").style.opacity = "1";
            document.getElementById("strap_l_black_c2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            clearAlerts();
        } else if (guitar.strapButtons === "locking" && guitar.template === "remi") {
            clearRemiStrap();
            document.getElementById("strap_l_black_re1").style.opacity = "1";
            document.getElementById("strap_l_black_re2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            clearAlerts();
        } else if (guitar.strapButtons === "locking" && guitar.template === "rocco") {
            clearRoccoStrap();
            document.getElementById("strap_l_black_ro1").style.opacity = "1";
            document.getElementById("strap_l_black_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            clearAlerts();
        } else if (guitar.strapButtons === "standard" && guitar.template === "camila") {
            clearCamilaStrap();
            document.getElementById("strap_b_black_c1").style.opacity = "1";
            document.getElementById("strap_b_black_c2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            clearAlerts();
        } else if (guitar.strapButtons === "standard" && guitar.template === "remi") {
            clearRemiStrap();
            document.getElementById("strap_b_black_re1").style.opacity = "1";
            document.getElementById("strap_b_black_re2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            clearAlerts();
        } else if (guitar.strapButtons === "standard" && guitar.template === "rocco") {
            clearRoccoStrap();
            document.getElementById("strap_b_black_ro1").style.opacity = "1";
            document.getElementById("strap_b_black_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            clearAlerts();
        } else if (guitar.strapButtons === undefined && guitar.template === "camila") {
            clearCamilaStrap();
            document.getElementById("strap_b_black_c1").style.opacity = "1";
            document.getElementById("strap_b_black_c2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            guitar.strapButtons = "standard";
            clearAlerts();
        } else if (guitar.strapButtons === undefined && guitar.template === "remi") {
            clearRemiStrap();
            document.getElementById("strap_b_black_re1").style.opacity = "1";
            document.getElementById("strap_b_black_re2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            guitar.strapButtons = "standard";
            clearAlerts();
        } else if (guitar.strapButtons === undefined && guitar.template === "rocco") {
            clearRoccoStrap();
            document.getElementById("strap_b_black_ro1").style.opacity = "1";
            document.getElementById("strap_b_black_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "black";
            guitar.strapButtons = "standard";
            clearAlerts();
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addGoldStrap() {
    if (guitar.template !== undefined) {
        if (guitar.strapButtons === "locking" && guitar.template === "camila") {
            clearCamilaStrap();
            document.getElementById("strap_l_gold_c1").style.opacity = "1";
            document.getElementById("strap_l_gold_c2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            clearAlerts();
        } else if (guitar.strapButtons === "locking" && guitar.template === "remi") {
            clearRemiStrap();
            document.getElementById("strap_l_gold_re1").style.opacity = "1";
            document.getElementById("strap_l_gold_re2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            clearAlerts();
        } else if (guitar.strapButtons === "locking" && guitar.template === "rocco") {
            clearRoccoStrap();
            document.getElementById("strap_l_gold_ro1").style.opacity = "1";
            document.getElementById("strap_l_gold_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            clearAlerts();
        } else if (guitar.strapButtons === "standard" && guitar.template === "camila") {
            clearCamilaStrap();
            document.getElementById("strap_b_gold_c1").style.opacity = "1";
            document.getElementById("strap_b_gold_c2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            clearAlerts();
        } else if (guitar.strapButtons === "standard" && guitar.template === "remi") {
            clearRemiStrap();
            document.getElementById("strap_b_gold_re1").style.opacity = "1";
            document.getElementById("strap_b_gold_re2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            clearAlerts();
        } else if (guitar.strapButtons === "standard" && guitar.template === "rocco") {
            clearRoccoStrap();
            document.getElementById("strap_b_gold_ro1").style.opacity = "1";
            document.getElementById("strap_b_gold_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            clearAlerts();
        } else if (guitar.strapButtons === undefined && guitar.template === "camila") {
            clearCamilaStrap();
            document.getElementById("strap_b_gold_c1").style.opacity = "1";
            document.getElementById("strap_b_gold_c2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            guitar.strapButtons = "standard";
            clearAlerts();
        } else if (guitar.strapButtons === undefined && guitar.template === "remi") {
            clearRemiStrap();
            document.getElementById("strap_b_gold_re1").style.opacity = "1";
            document.getElementById("strap_b_gold_re2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            guitar.strapButtons = "standard";
            clearAlerts();
        } else if (guitar.strapButtons === undefined && guitar.template === "rocco") {
            clearRoccoStrap();
            document.getElementById("strap_b_gold_ro1").style.opacity = "1";
            document.getElementById("strap_b_gold_ro2").style.opacity = "1";
            guitar.strapButtonStyle = "gold";
            guitar.strapButtons = "standard";
            clearAlerts();
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addStandardStrap() {
    if (guitar.template !== undefined) {
        clearAllStrap();
        if (guitar.strapButtonStyle === "chrome" && guitar.template === "camila") {
            document.getElementById("strap_b_chrome_c1").style.opacity = "1";
            document.getElementById("strap_b_chrome_c2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "black" && guitar.template === "camila") {
            document.getElementById("strap_b_black_c1").style.opacity = "1";
            document.getElementById("strap_b_black_c2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "gold" && guitar.template === "camila") {
            document.getElementById("strap_b_gold_c1").style.opacity = "1";
            document.getElementById("strap_b_gold_c2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "chrome" && guitar.template === "remi") {
            document.getElementById("strap_b_chrome_re1").style.opacity = "1";
            document.getElementById("strap_b_chrome_re2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "black" && guitar.template === "remi") {
            document.getElementById("strap_b_black_re1").style.opacity = "1";
            document.getElementById("strap_b_black_re2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "gold" && guitar.template === "remi") {
            document.getElementById("strap_b_gold_re1").style.opacity = "1";
            document.getElementById("strap_b_gold_re2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "chrome" && guitar.template === "rocco") {
            document.getElementById("strap_b_chrome_ro1").style.opacity = "1";
            document.getElementById("strap_b_chrome_ro2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "black" && guitar.template === "rocco") {
            document.getElementById("strap_b_black_ro1").style.opacity = "1";
            document.getElementById("strap_b_black_ro2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === "gold" && guitar.template === "rocco") {
            document.getElementById("strap_b_gold_ro1").style.opacity = "1";
            document.getElementById("strap_b_gold_ro2").style.opacity = "1";
            guitar.strapButtons = "standard";
        } else if (guitar.strapButtonStyle === undefined && guitar.template === "camila") {
            document.getElementById("strap_b_chrome_c1").style.opacity = "1";
            document.getElementById("strap_b_chrome_c2").style.opacity = "1";
            guitar.strapButtons = "standard";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtonStyle === undefined && guitar.template === "remi") {
            document.getElementById("strap_b_chrome_re1").style.opacity = "1";
            document.getElementById("strap_b_chrome_re2").style.opacity = "1";
            guitar.strapButtons = "standard";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtonStyle === undefined && guitar.template === "rocco") {
            document.getElementById("strap_b_chrome_ro1").style.opacity = "1";
            document.getElementById("strap_b_chrome_ro2").style.opacity = "1";
            guitar.strapButtons = "standard";
            guitar.strapButtonStyle = "chrome";
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
    clearAlerts();
}

function addLockingStrap() {
    if (guitar.template !== undefined) {
        clearAllStrap();

        if (guitar.strapButtonStyle === "chrome" && guitar.template === "camila") {
            document.getElementById("strap_l_chrome_c1").style.opacity = "1";
            document.getElementById("strap_l_chrome_c2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "black" && guitar.template === "camila") {
            document.getElementById("strap_l_black_c1").style.opacity = "1";
            document.getElementById("strap_l_black_c2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "gold" && guitar.template === "camila") {
            document.getElementById("strap_l_gold_c1").style.opacity = "1";
            document.getElementById("strap_l_gold_c2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "chrome" && guitar.template === "remi") {
            document.getElementById("strap_l_chrome_re1").style.opacity = "1";
            document.getElementById("strap_l_chrome_re2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "black" && guitar.template === "remi") {
            document.getElementById("strap_l_black_re1").style.opacity = "1";
            document.getElementById("strap_l_black_re2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "gold" && guitar.template === "remi") {
            document.getElementById("strap_l_gold_re1").style.opacity = "1";
            document.getElementById("strap_l_gold_re2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "chrome" && guitar.template === "rocco") {
            document.getElementById("strap_l_chrome_ro1").style.opacity = "1";
            document.getElementById("strap_l_chrome_ro2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "black" && guitar.template === "rocco") {
            document.getElementById("strap_l_black_ro1").style.opacity = "1";
            document.getElementById("strap_l_black_ro2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === "gold" && guitar.template === "rocco") {
            document.getElementById("strap_l_gold_ro1").style.opacity = "1";
            document.getElementById("strap_l_gold_ro2").style.opacity = "1";
            guitar.strapButtons = "locking";
        } else if (guitar.strapButtonStyle === undefined && guitar.template === "camila") {
            document.getElementById("strap_l_chrome_c1").style.opacity = "1";
            document.getElementById("strap_l_chrome_c2").style.opacity = "1";
            guitar.strapButtons = "locking";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtonStyle === undefined && guitar.template === "remi") {
            document.getElementById("strap_l_chrome_re1").style.opacity = "1";
            document.getElementById("strap_l_chrome_re2").style.opacity = "1";
            guitar.strapButtons = "locking";
            guitar.strapButtonStyle = "chrome";
        } else if (guitar.strapButtonStyle === undefined && guitar.template === "rocco") {
            document.getElementById("strap_l_chrome_ro1").style.opacity = "1";
            document.getElementById("strap_l_chrome_ro2").style.opacity = "1";
            guitar.strapButtons = "locking";
            guitar.strapButtonStyle = "chrome";
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
    clearAlerts();
}

var strapButtonStyle = ["chrome", "black", "gold"];
var strapButtons = ["standard", "locking"];

// GUITAR MODEL SELECTION
function addCamila() {
    //clears any body finish from different model
    addNaturalFinish();

    //sets custom guitar template to camila and hides others
    document.getElementById("remi_template_svg").style.opacity = "0";
    document.getElementById("rocco_template_svg").style.opacity = "0";
    document.getElementById("camila_template_svg").style.opacity = ".4";

    //sets the object's template property to camila
    guitar.template = "camila";

    //hides any guitar body profiles
    document.getElementById("re_f_p").style.opacity = "0";
    document.getElementById("re_c_p").style.opacity = "0";
    document.getElementById("ro_f_p").style.opacity = "0";
    document.getElementById("ro_c_p").style.opacity = "0";

    //deletes the guitar object's profile if defined so it can be redefined
    delete guitar.profile;

    //deletes any guitar body not related to camila
    document.getElementById("re_mahog_f").style.opacity = "0";
    document.getElementById("re_mahog_c").style.opacity = "0";
    document.getElementById("ro_mahog_f").style.opacity = "0";
    document.getElementById("ro_mahog_c").style.opacity = "0";
    document.getElementById("re_prima_f").style.opacity = "0";
    document.getElementById("re_prima_c").style.opacity = "0";
    document.getElementById("ro_prima_f").style.opacity = "0";
    document.getElementById("ro_prima_c").style.opacity = "0";
    document.getElementById("re_swamp_f").style.opacity = "0";
    document.getElementById("re_swamp_c").style.opacity = "0";
    document.getElementById("ro_swamp_f").style.opacity = "0";
    document.getElementById("ro_swamp_c").style.opacity = "0";
    delete guitar.bodyWood;

    //shows buttons relating to camila's profile on 2nd slide
    document.getElementById("camila-profile").style.position = "inherit";
    document.getElementById("remi-profile").style.position = "absolute";
    document.getElementById("rocco-profile").style.position = "absolute";
    document.getElementById("no-profile").style.position = "absolute";

    document.getElementById("camila-profile").style.visibility = "visible";
    document.getElementById("remi-profile").style.visibility = "hidden";
    document.getElementById("rocco-profile").style.visibility = "hidden";
    document.getElementById("no-profile").style.visibility = "hidden";

    if (guitar.strapButtons === "standard") {
        addStandardStrap();
    } else if (guitar.strapButtons === "locking") {
        addLockingStrap();
    }

    if (alert.bodyWood === "true") {
        clearAlerts();
        document.getElementById("successWoodAlert").style.visibility = "visible";
        delete alert.bodyWood;
    }
}


function addRemi() {
    //clears any body finish from different model
    addNaturalFinish();

    //sets custom guitar template to remi and hides others
    document.getElementById("remi_template_svg").style.opacity = ".4";
    document.getElementById("rocco_template_svg").style.opacity = "0";
    document.getElementById("camila_template_svg").style.opacity = "0";

    //sets the object's template property to remi
    guitar.template = "remi";

    //hides any guitar body profiles
    document.getElementById("c_f_p").style.opacity = "0";
    document.getElementById("c_c_p").style.opacity = "0";
    document.getElementById("ro_f_p").style.opacity = "0";
    document.getElementById("ro_c_p").style.opacity = "0";

    //deletes the guitar object's profile if defined so it can be redefined
    delete guitar.profile;

    //deletes any guitar body not related to remi
    document.getElementById("c_mahog_f").style.opacity = "0";
    document.getElementById("c_mahog_c").style.opacity = "0";
    document.getElementById("ro_mahog_f").style.opacity = "0";
    document.getElementById("ro_mahog_c").style.opacity = "0";
    document.getElementById("c_prima_f").style.opacity = "0";
    document.getElementById("c_prima_c").style.opacity = "0";
    document.getElementById("ro_prima_f").style.opacity = "0";
    document.getElementById("ro_prima_c").style.opacity = "0";
    document.getElementById("c_swamp_f").style.opacity = "0";
    document.getElementById("c_swamp_c").style.opacity = "0";
    document.getElementById("ro_swamp_f").style.opacity = "0";
    document.getElementById("ro_swamp_c").style.opacity = "0";
    delete guitar.bodyWood;

    //shows buttons relating to remi's profile on 2nd slide
    document.getElementById("camila-profile").style.position = "absolute";
    document.getElementById("remi-profile").style.position = "inherit";
    document.getElementById("rocco-profile").style.position = "absolute";
    document.getElementById("no-profile").style.position = "absolute";

    document.getElementById("camila-profile").style.visibility = "hidden";
    document.getElementById("remi-profile").style.visibility = "visible";
    document.getElementById("rocco-profile").style.visibility = "hidden";
    document.getElementById("no-profile").style.visibility = "hidden";

    if (guitar.strapButtons === "standard") {
        addStandardStrap();
    } else if (guitar.strapButtons === "locking") {
        addLockingStrap();
    }

    if (alert.bodyWood === "true") {
        clearAlerts();
        document.getElementById("successWoodAlert").style.visibility = "visible";
        delete alert.bodyWood;
    }
}


function addRocco() {
    //clears any body finish from different model
    addNaturalFinish();

    //sets custom guitar template to rocco and hides others
    document.getElementById("remi_template_svg").style.opacity = "0";
    document.getElementById("rocco_template_svg").style.opacity = ".4";
    document.getElementById("camila_template_svg").style.opacity = "0";

    //sets the object's template property to rocco
    guitar.template = "rocco";

    //hides any guitar body profiles
    document.getElementById("c_f_p").style.opacity = "0";
    document.getElementById("c_c_p").style.opacity = "0";
    document.getElementById("re_f_p").style.opacity = "0";
    document.getElementById("re_c_p").style.opacity = "0";

    //deletes the guitar object's profile if defined so it can be redefined
    delete guitar.profile;

    //deletes any guitar body not related to rocco
    document.getElementById("c_mahog_f").style.opacity = "0";
    document.getElementById("c_mahog_c").style.opacity = "0";
    document.getElementById("re_mahog_f").style.opacity = "0";
    document.getElementById("re_mahog_c").style.opacity = "0";
    document.getElementById("c_prima_f").style.opacity = "0";
    document.getElementById("c_prima_c").style.opacity = "0";
    document.getElementById("re_prima_f").style.opacity = "0";
    document.getElementById("re_prima_c").style.opacity = "0";
    document.getElementById("c_swamp_f").style.opacity = "0";
    document.getElementById("c_swamp_c").style.opacity = "0";
    document.getElementById("re_swamp_f").style.opacity = "0";
    document.getElementById("re_swamp_c").style.opacity = "0";
    delete guitar.bodyWood;


    //shows buttons relating to rocco's profile on 2nd slide
    document.getElementById("camila-profile").style.position = "absolute";
    document.getElementById("remi-profile").style.position = "absolute";
    document.getElementById("rocco-profile").style.position = "inherit";
    document.getElementById("no-profile").style.position = "absolute";

    document.getElementById("camila-profile").style.visibility = "hidden";
    document.getElementById("remi-profile").style.visibility = "hidden";
    document.getElementById("rocco-profile").style.visibility = "visible";
    document.getElementById("no-profile").style.visibility = "hidden";

    if (guitar.strapButtons === "standard") {
        addStandardStrap();
    } else if (guitar.strapButtons === "locking") {
        addLockingStrap();
    }

    if (alert.bodyWood === "true") {
        clearAlerts();
        document.getElementById("successWoodAlert").style.visibility = "visible";
        delete alert.bodyWood;
    }
}
var template = ["camila", "remi", "rocco"];

// GUITAR PROFILE SELECTION
function addFlatCamila() {
    if (guitar.bodyWood === "primavera") {
        document.getElementById("c_prima_c").style.opacity = "0";
        document.getElementById("c_prima_f").style.opacity = "1";
        clearAlerts();
    } else if (guitar.bodyWood === "mahogany") {
        document.getElementById("c_mahog_c").style.opacity = "0";
        document.getElementById("c_mahog_f").style.opacity = "1";
        clearAlerts();
    } else if (guitar.bodyWood === "swamp ash") {
        document.getElementById("c_swamp_c").style.opacity = "0";
        document.getElementById("c_swamp_f").style.opacity = "1";
        clearAlerts();
    } else {
        document.getElementById("c_f_p").style.opacity = "1";
        document.getElementById("c_c_p").style.opacity = "0";
        clearAlerts();
    }


    /*hides any guitar bodies defined by wood
     document.getElementById("c_prima_f").style.opacity = "0";
     document.getElementById("c_prima_c").style.opacity = "0";
     document.getElementById("c_swamp_f").style.opacity = "0";
     document.getElementById("c_swamp_c").style.opacity = "0";
     document.getElementById("c_mahog_f").style.opacity = "0";
     document.getElementById("c_mahog_c").style.opacity = "0";
     document.getElementById("re_prima_f").style.opacity = "0";
     document.getElementById("re_prima_c").style.opacity = "0";
     document.getElementById("re_swamp_f").style.opacity = "0";
     document.getElementById("re_swamp_c").style.opacity = "0";
     document.getElementById("re_mahog_f").style.opacity = "0";
     document.getElementById("re_mahog_c").style.opacity = "0";
     document.getElementById("ro_prima_f").style.opacity = "0";
     document.getElementById("ro_prima_c").style.opacity = "0";
     document.getElementById("ro_swamp_f").style.opacity = "0";
     document.getElementById("ro_swamp_c").style.opacity = "0";
     document.getElementById("ro_mahog_f").style.opacity = "0";
     document.getElementById("ro_mahog_c").style.opacity = "0";
     delete guitar.bodyWood;*/



    if (guitar.profile === "curved" && guitar.template === "camila") {
        document.getElementById("c_c_p").style.opacity = "0";
        clearAlerts();
    }

    guitar.profile = "flat";

    if (alert.bodyProfile === "true") {
        clearAlerts();
        document.getElementById("successProfileAlert").style.visibility = "visible";
        delete alert.bodyProfile;
    }

}

function addCurveCamila() {
    clearAlerts();
    if (guitar.bodyWood === "primavera") {
        document.getElementById("c_prima_c").style.opacity = "1";
        document.getElementById("c_prima_f").style.opacity = "0";
        clearAlerts();
    } else if (guitar.bodyWood === "mahogany") {
        document.getElementById("c_mahog_c").style.opacity = "1";
        document.getElementById("c_mahog_f").style.opacity = "0";
        clearAlerts();
    } else if (guitar.bodyWood === "swamp ash") {
        document.getElementById("c_swamp_c").style.opacity = "1";
        document.getElementById("c_swamp_f").style.opacity = "0";
        clearAlerts();
    } else {
        document.getElementById("c_f_p").style.opacity = "0";
        document.getElementById("c_c_p").style.opacity = "1";
        clearAlerts();
    }

    if (guitar.profile === "flat" && guitar.template === "camila") {
        document.getElementById("c_f_p").style.opacity = "0";
        clearAlerts();
    }

    guitar.profile = "curved";

    if (alert.bodyProfile === "true") {
        clearAlerts();
        document.getElementById("successProfileAlert").style.visibility = "visible";
        delete alert.bodyProfile;
    }
}

function addFlatRemi() {

    if (guitar.bodyWood === "primavera") {
        document.getElementById("re_prima_c").style.opacity = "0";
        document.getElementById("re_prima_f").style.opacity = "1";
        clearAlerts();
    } else if (guitar.bodyWood === "mahogany") {
        document.getElementById("re_mahog_c").style.opacity = "0";
        document.getElementById("re_mahog_f").style.opacity = "1";
        clearAlerts();
    } else if (guitar.bodyWood === "swamp ash") {
        document.getElementById("re_swamp_c").style.opacity = "0";
        document.getElementById("re_swamp_f").style.opacity = "1";
        clearAlerts();
    } else {
        document.getElementById("re_f_p").style.opacity = "1";
        document.getElementById("re_c_p").style.opacity = "0";
        clearAlerts();
    }

    if (guitar.profile === "curved" && guitar.template === "remi") {
        document.getElementById("re_c_p").style.opacity = "0";
        clearAlerts();
    }

    guitar.profile = "flat";

    if (alert.bodyProfile === "true") {
        clearAlerts();
        document.getElementById("successProfileAlert").style.visibility = "visible";
        delete alert.bodyProfile;
    }
}

function addCurveRemi() {
    if (guitar.bodyWood === "primavera") {
        document.getElementById("re_prima_c").style.opacity = "1";
        document.getElementById("re_prima_f").style.opacity = "0";
        clearAlerts();
    } else if (guitar.bodyWood === "mahogany") {
        document.getElementById("re_mahog_c").style.opacity = "1";
        document.getElementById("re_mahog_f").style.opacity = "0";
        clearAlerts();
    } else if (guitar.bodyWood === "swamp ash") {
        document.getElementById("re_swamp_c").style.opacity = "1";
        document.getElementById("re_swamp_f").style.opacity = "0";
        clearAlerts();
    } else {
        document.getElementById("re_f_p").style.opacity = "0";
        document.getElementById("re_c_p").style.opacity = "1";
        clearAlerts();
    }

    if (guitar.profile === "flat" && guitar.template === "remi") {
        document.getElementById("re_f_p").style.opacity = "0";
    }

    guitar.profile = "curved";
    if (alert.bodyProfile === "true") {
        clearAlerts();
        document.getElementById("successProfileAlert").style.visibility = "visible";
        delete alert.bodyProfile;
    }
}

function addFlatRocco() {
    if (guitar.bodyWood === "primavera") {
        document.getElementById("ro_prima_c").style.opacity = "0";
        document.getElementById("ro_prima_f").style.opacity = "1";
        clearAlerts();
    } else if (guitar.bodyWood === "mahogany") {
        document.getElementById("ro_mahog_c").style.opacity = "0";
        document.getElementById("ro_mahog_f").style.opacity = "1";
        clearAlerts();
    } else if (guitar.bodyWood === "swamp ash") {
        document.getElementById("ro_swamp_c").style.opacity = "0";
        document.getElementById("ro_swamp_f").style.opacity = "1";
        clearAlerts();
    } else {document.getElementById("ro_f_p").style.opacity = "1";
        document.getElementById("ro_c_p").style.opacity = "0";
        clearAlerts();
    }

    if (guitar.profile === "curved" && guitar.template === "rocco") {
        document.getElementById("ro_c_p").style.opacity = "0";
        clearAlerts();
    }

    guitar.profile = "flat";

    if (alert.bodyProfile === "true") {
        clearAlerts();
        document.getElementById("successProfileAlert").style.visibility = "visible";
        delete alert.bodyProfile;
    }
}

function addCurveRocco() {
    if (guitar.bodyWood === "primavera") {
        document.getElementById("ro_prima_c").style.opacity = "1";
        document.getElementById("ro_prima_f").style.opacity = "0";
        clearAlerts();
    } else if (guitar.bodyWood === "mahogany") {
        document.getElementById("ro_mahog_c").style.opacity = "1";
        document.getElementById("ro_mahog_f").style.opacity = "0";
        clearAlerts();
    } else if (guitar.bodyWood === "swamp ash") {
        document.getElementById("ro_swamp_c").style.opacity = "1";
        document.getElementById("ro_swamp_f").style.opacity = "0";
        clearAlerts();
    } else {document.getElementById("ro_f_p").style.opacity = "0";
        document.getElementById("ro_c_p").style.opacity = "1";
        clearAlerts();
    }

    if (guitar.profile === "flat" && guitar.template === "rocco") {
        document.getElementById("ro_f_p").style.opacity = "0";
        clearAlerts();
    }

    guitar.profile = "curved";

    if (alert.bodyProfile === "true") {
        clearAlerts();
        document.getElementById("successProfileAlert").style.visibility = "visible";
        delete alert.bodyProfile;
    }
}

function clearBody() {

    //deletes every guitar body
    document.getElementById("c_mahog_f").style.opacity = "0";
    document.getElementById("c_mahog_c").style.opacity = "0";
    document.getElementById("re_mahog_f").style.opacity = "0";
    document.getElementById("re_mahog_c").style.opacity = "0";
    document.getElementById("c_prima_f").style.opacity = "0";
    document.getElementById("c_prima_c").style.opacity = "0";
    document.getElementById("re_prima_f").style.opacity = "0";
    document.getElementById("re_prima_c").style.opacity = "0";
    document.getElementById("c_swamp_f").style.opacity = "0";
    document.getElementById("c_swamp_c").style.opacity = "0";
    document.getElementById("re_swamp_f").style.opacity = "0";
    document.getElementById("re_swamp_c").style.opacity = "0";
    document.getElementById("ro_mahog_f").style.opacity = "0";
    document.getElementById("ro_mahog_c").style.opacity = "0";
    document.getElementById("ro_prima_f").style.opacity = "0";
    document.getElementById("ro_prima_c").style.opacity = "0";
    document.getElementById("ro_swamp_f").style.opacity = "0";
    document.getElementById("ro_swamp_c").style.opacity = "0";

    delete guitar.bodyWood;

    document.getElementById("remi_template_svg").style.opacity = "0";
    document.getElementById("rocco_template_svg").style.opacity = "0";
    document.getElementById("camila_template_svg").style.opacity = "0";

    /*
     document.getElementById("camila_curve").style.opacity = "0";
     document.getElementById("camila_flat").style.opacity = "0";
     document.getElementById("remi_curve").style.opacity = "0";
     document.getElementById("remi_flat").style.opacity = "0";
     document.getElementById("rocco_curve").style.opacity = "0";
     document.getElementById("rocco_flat").style.opacity = "0";
     */
    delete guitar.template;

    //shows buttons relating to none on 2nd slide
    document.getElementById("camila-profile").style.position = "absolute";
    document.getElementById("remi-profile").style.position = "absolute";
    document.getElementById("rocco-profile").style.position = "absolute";
    document.getElementById("no-profile").style.position = "inherit";

    document.getElementById("camila-profile").style.visibility = "hidden";
    document.getElementById("remi-profile").style.visibility = "hidden";
    document.getElementById("rocco-profile").style.visibility = "hidden";
    document.getElementById("no-profile").style.visibility = "visible";

    delete guitar.profile;
}

var profile = ["flat", "curved"];


// GUITAR WOOD SELECTION
function addMahogany() {
    if (guitar.profile === "flat" && guitar.template === "camila") {
        document.getElementById("c_f_p").style.opacity = "0";
        document.getElementById("c_mahog_f").style.opacity = "1";
        document.getElementById("c_prima_f").style.opacity = "0";
        document.getElementById("c_prima_c").style.opacity = "0";
        document.getElementById("c_swamp_f").style.opacity = "0";
        document.getElementById("c_swamp_c").style.opacity = "0";
        guitar.bodyWood = "mahogany";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "camila") {
        document.getElementById("c_c_p").style.opacity = "0";
        document.getElementById("c_mahog_c").style.opacity = "1";
        document.getElementById("c_prima_f").style.opacity = "0";
        document.getElementById("c_prima_c").style.opacity = "0";
        document.getElementById("c_swamp_f").style.opacity = "0";
        document.getElementById("c_swamp_c").style.opacity = "0";
        guitar.bodyWood = "mahogany";
        clearAlerts();
    } else if (guitar.profile === "flat" && guitar.template === "remi") {
        document.getElementById("re_f_p").style.opacity = "0";
        document.getElementById("re_mahog_f").style.opacity = "1";
        document.getElementById("re_prima_f").style.opacity = "0";
        document.getElementById("re_prima_c").style.opacity = "0";
        document.getElementById("re_swamp_f").style.opacity = "0";
        document.getElementById("re_swamp_c").style.opacity = "0";
        guitar.bodyWood = "mahogany";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "remi") {
        document.getElementById("re_c_p").style.opacity = "0";
        document.getElementById("re_mahog_c").style.opacity = "1";
        document.getElementById("re_prima_f").style.opacity = "0";
        document.getElementById("re_prima_c").style.opacity = "0";
        document.getElementById("re_swamp_f").style.opacity = "0";
        document.getElementById("re_swamp_c").style.opacity = "0";
        guitar.bodyWood = "mahogany";
        clearAlerts();
    } else if (guitar.profile === "flat" && guitar.template === "rocco") {
        document.getElementById("ro_f_p").style.opacity = "0";
        document.getElementById("ro_mahog_f").style.opacity = "1";

        document.getElementById("ro_prima_f").style.opacity = "0";
        document.getElementById("ro_prima_c").style.opacity = "0";
        document.getElementById("ro_swamp_f").style.opacity = "0";
        document.getElementById("ro_swamp_c").style.opacity = "0";
        guitar.bodyWood = "mahogany";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "rocco") {
        document.getElementById("ro_c_p").style.opacity = "0";
        document.getElementById("ro_mahog_c").style.opacity = "1";
        document.getElementById("ro_prima_f").style.opacity = "0";
        document.getElementById("ro_prima_c").style.opacity = "0";
        document.getElementById("ro_swamp_f").style.opacity = "0";
        document.getElementById("ro_swamp_c").style.opacity = "0";

        guitar.bodyWood = "mahogany";
        clearAlerts();
    } else if (guitar.template !== undefined && guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.template === undefined && guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
    /*
     if (alert.bodyProfile === "true") {
     clearAlerts();
     document.getElementById("successProfileAlert").style.visibility = "visible";
     delete alert.bodyProfile;
     } */
}

function addPrimavera() {
    if (guitar.profile === "flat" && guitar.template === "camila") {
        document.getElementById("c_f_p").style.opacity = "0";
        document.getElementById("c_prima_f").style.opacity = "1";
        document.getElementById("c_mahog_f").style.opacity = "0";
        document.getElementById("c_mahog_c").style.opacity = "0";
        document.getElementById("c_swamp_f").style.opacity = "0";
        document.getElementById("c_swamp_c").style.opacity = "0";
        guitar.bodyWood = "primavera";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "camila") {
        document.getElementById("c_c_p").style.opacity = "0";
        document.getElementById("c_prima_c").style.opacity = "1";
        document.getElementById("c_mahog_f").style.opacity = "0";
        document.getElementById("c_mahog_c").style.opacity = "0";
        document.getElementById("c_swamp_f").style.opacity = "0";
        document.getElementById("c_swamp_c").style.opacity = "0";
        guitar.bodyWood = "primavera";
        clearAlerts();
    } else if (guitar.profile === "flat" && guitar.template === "remi") {
        document.getElementById("re_f_p").style.opacity = "0";
        document.getElementById("re_prima_f").style.opacity = "1";
        document.getElementById("re_mahog_f").style.opacity = "0";
        document.getElementById("re_mahog_c").style.opacity = "0";
        document.getElementById("re_swamp_f").style.opacity = "0";
        document.getElementById("re_swamp_c").style.opacity = "0";
        guitar.bodyWood = "primavera";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "remi") {
        document.getElementById("re_c_p").style.opacity = "0";
        document.getElementById("re_prima_c").style.opacity = "1";
        document.getElementById("re_mahog_f").style.opacity = "0";
        document.getElementById("re_mahog_c").style.opacity = "0";
        document.getElementById("re_swamp_f").style.opacity = "0";
        document.getElementById("re_swamp_c").style.opacity = "0";
        guitar.bodyWood = "primavera";
        clearAlerts();
    } else if (guitar.profile === "flat" && guitar.template === "rocco") {
        document.getElementById("ro_f_p").style.opacity = "0";
        document.getElementById("ro_prima_f").style.opacity = "1";
        document.getElementById("ro_mahog_f").style.opacity = "0";
        document.getElementById("ro_mahog_c").style.opacity = "0";
        document.getElementById("ro_swamp_f").style.opacity = "0";
        document.getElementById("ro_swamp_c").style.opacity = "0";
        guitar.bodyWood = "primavera";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "rocco") {
        document.getElementById("ro_c_p").style.opacity = "0";
        document.getElementById("ro_prima_c").style.opacity = "1";
        document.getElementById("ro_mahog_f").style.opacity = "0";
        document.getElementById("ro_mahog_c").style.opacity = "0";
        document.getElementById("ro_swamp_f").style.opacity = "0";
        document.getElementById("ro_swamp_c").style.opacity = "0";
        guitar.bodyWood = "primavera";
        clearAlerts();
    } else if (guitar.template !== undefined && guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.template === undefined && guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addSwampAsh() {
    if (guitar.profile === "flat" && guitar.template === "camila") {
        document.getElementById("c_f_p").style.opacity = "0";
        document.getElementById("c_swamp_f").style.opacity = "1";

        document.getElementById("c_mahog_f").style.opacity = "0";
        document.getElementById("c_mahog_c").style.opacity = "0";
        document.getElementById("c_prima_f").style.opacity = "0";
        document.getElementById("c_prima_c").style.opacity = "0";

        guitar.bodyWood = "swamp ash";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "camila") {
        document.getElementById("c_c_p").style.opacity = "0";
        document.getElementById("c_swamp_c").style.opacity = "1";

        document.getElementById("c_mahog_f").style.opacity = "0";
        document.getElementById("c_mahog_c").style.opacity = "0";
        document.getElementById("c_prima_f").style.opacity = "0";
        document.getElementById("c_prima_c").style.opacity = "0";

        guitar.bodyWood = "swamp ash";
        clearAlerts();
    } else if (guitar.profile === "flat" && guitar.template === "remi") {
        document.getElementById("re_f_p").style.opacity = "0";
        document.getElementById("re_swamp_f").style.opacity = "1";

        document.getElementById("re_mahog_f").style.opacity = "0";
        document.getElementById("re_mahog_c").style.opacity = "0";
        document.getElementById("re_prima_f").style.opacity = "0";
        document.getElementById("re_prima_c").style.opacity = "0";

        guitar.bodyWood = "swamp ash";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "remi") {
        document.getElementById("re_c_p").style.opacity = "0";
        document.getElementById("re_swamp_c").style.opacity = "1";

        document.getElementById("re_mahog_f").style.opacity = "0";
        document.getElementById("re_mahog_c").style.opacity = "0";
        document.getElementById("re_prima_f").style.opacity = "0";
        document.getElementById("re_prima_c").style.opacity = "0";

        guitar.bodyWood = "swamp ash";
        clearAlerts();
    } else if (guitar.profile === "flat" && guitar.template === "rocco") {
        document.getElementById("ro_f_p").style.opacity = "0";
        document.getElementById("ro_swamp_f").style.opacity = "1";

        document.getElementById("ro_mahog_f").style.opacity = "0";
        document.getElementById("ro_mahog_c").style.opacity = "0";
        document.getElementById("ro_prima_f").style.opacity = "0";
        document.getElementById("ro_prima_c").style.opacity = "0";

        guitar.bodyWood = "swamp ash";
        clearAlerts();
    } else if (guitar.profile === "curved" && guitar.template === "rocco") {
        document.getElementById("ro_c_p").style.opacity = "0";
        document.getElementById("ro_swamp_c").style.opacity = "1";

        document.getElementById("ro_mahog_f").style.opacity = "0";
        document.getElementById("ro_mahog_c").style.opacity = "0";
        document.getElementById("ro_prima_f").style.opacity = "0";
        document.getElementById("ro_prima_c").style.opacity = "0";

        guitar.bodyWood = "swamp ash";
        clearAlerts();
    } else if (guitar.template !== undefined && guitar.profile === undefined) {

        clearAlerts();

        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.template === undefined && guitar.profile === undefined) {

        clearAlerts();

        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodywood = "true";
    }
}

var bodyWood = ["mahogany", "primavera", "swamp ash"];



// GUITAR NECK WOOD SELECTION
function addMaple() {
    if (alert.neck === undefined) {
        document.getElementById("neck_maple").style.opacity = "1";
        document.getElementById("neck_curlymaple").style.opacity = "0";
        guitar.neckWood = "maple";
        clearAlerts();
    } else if (alert.neck === "true") {
        document.getElementById("neck_maple").style.opacity = "1";
        document.getElementById("neck_curlymaple").style.opacity = "0";
        guitar.neckWood = "maple";
        clearAlerts();
        delete alert.neck;
        document.getElementById("successNeckAlert").style.visibility = "visible";
    }
}

function addCurlyMaple() {
    if (alert.neck === undefined) {
        document.getElementById("neck_curlymaple").style.opacity = "1";
        document.getElementById("neck_maple").style.opacity = "0";
        guitar.neckWood = "curly maple";
        clearAlerts();
    } else if (alert.neck === "true") {
        document.getElementById("neck_maple").style.opacity = "0";
        document.getElementById("neck_curlymaple").style.opacity = "1";
        guitar.neckWood = "curly maple";
        clearAlerts();
        delete alert.neck;
        document.getElementById("successNeckAlert").style.visibility = "visible";
    }
}

var neckWood = ["maple", "curly maple"];

// GUITAR FRETBOARD WOOD SELECTION
function addFretRosewood() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("neck_fret_rosewood").style.opacity = "1";
        document.getElementById("neck_fret_maple").style.opacity = "0";
        document.getElementById("neck_fret_ebony").style.opacity = "0";
        guitar.fretboardWood = "rosewood";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined && alert.neck === true) {
        document.getElementById("neck_fret_rosewood").style.opacity = "1";
        document.getElementById("neck_fret_maple").style.opacity = "0";
        document.getElementById("neck_fret_ebony").style.opacity = "0";
        guitar.fretboardWood = "rosewood";
        clearAlerts();
        delete alert.fretboard;
        document.getElementById("successFretboardAlert").style.visibility = "visible";
    } else {
        document.getElementById("neck_fret_rosewood").style.opacity = "1";
        document.getElementById("neck_fret_maple").style.opacity = "0";
        document.getElementById("neck_fret_ebony").style.opacity = "0";
        guitar.fretboardWood = "rosewood";
        clearAlerts();
    }
}

function addFretMaple() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("neck_fret_rosewood").style.opacity = "0";
        document.getElementById("neck_fret_maple").style.opacity = "1";
        document.getElementById("neck_fret_ebony").style.opacity = "0";
        guitar.fretboardWood = "maple";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined && alert.neck === true) {
        document.getElementById("neck_fret_rosewood").style.opacity = "0";
        document.getElementById("neck_fret_maple").style.opacity = "1";
        document.getElementById("neck_fret_ebony").style.opacity = "0";
        clearAlerts();
        guitar.fretboardWood = "maple";
        delete alert.fretboard;
        document.getElementById("successFretboardAlert").style.visibility = "visible";
    } else {
        document.getElementById("neck_fret_rosewood").style.opacity = "0";
        document.getElementById("neck_fret_maple").style.opacity = "1";
        document.getElementById("neck_fret_ebony").style.opacity = "0";
        clearAlerts();
        guitar.fretboardWood = "maple";
    }
}

function addFretEbony() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("neck_fret_rosewood").style.opacity = "0";
        document.getElementById("neck_fret_maple").style.opacity = "0";
        document.getElementById("neck_fret_ebony").style.opacity = "1";

        guitar.fretboardWood = "ebony";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {

        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined && alert.neck === true) {
        document.getElementById("neck_fret_rosewood").style.opacity = "0";
        document.getElementById("neck_fret_maple").style.opacity = "0";
        document.getElementById("neck_fret_ebony").style.opacity = "1";
        guitar.fretboardWood = "ebony";
        clearAlerts();
        delete alert.fretboard;
        document.getElementById("successFretboardAlert").style.visibility = "visible";
    } else {
        document.getElementById("neck_fret_rosewood").style.opacity = "0";
        document.getElementById("neck_fret_maple").style.opacity = "0";
        document.getElementById("neck_fret_ebony").style.opacity = "1";
        guitar.fretboardWood = "ebony";
        clearAlerts();
    }
}

var fretboardWood = ["rosewood", "maple", "ebony"];

// GUITAR FRETS SELECTION
function addChromeFrets() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("neck_fret_chrome").style.opacity = "1";
        document.getElementById("neck_fret_gold").style.opacity = "0";
        guitar.frets = "chrome";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }
}

function addGoldFrets() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("neck_fret_chrome").style.opacity = "0";
        document.getElementById("neck_fret_gold").style.opacity = "1";
        guitar.frets = "gold";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }

}

var frets = ["chrome", "gold"];

// GUITAR NECK INLAYS SELECTION
function addBoxMotherInlay() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("inlay_box_mop").style.opacity = "1";
        document.getElementById("inlay_box_aba").style.opacity = "0";
        document.getElementById("inlay_box_lap").style.opacity = "0";
        document.getElementById("inlay_tri_aba").style.opacity = "0";
        document.getElementById("inlay_tri_lap").style.opacity = "0";
        document.getElementById("inlay_tri_mop").style.opacity = "0";
        guitar.inlays = "box mother of pearl";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }
}

function addBoxLapisInlay() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("inlay_box_mop").style.opacity = "0";
        document.getElementById("inlay_box_aba").style.opacity = "0";
        document.getElementById("inlay_box_lap").style.opacity = "1";
        document.getElementById("inlay_tri_aba").style.opacity = "0";
        document.getElementById("inlay_tri_lap").style.opacity = "0";
        document.getElementById("inlay_tri_mop").style.opacity = "0";
        guitar.inlays = "box lapis";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }

}

function addBoxAbaloneInlay() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("inlay_box_mop").style.opacity = "0";
        document.getElementById("inlay_box_aba").style.opacity = "1";
        document.getElementById("inlay_box_lap").style.opacity = "0";
        document.getElementById("inlay_tri_aba").style.opacity = "0";
        document.getElementById("inlay_tri_lap").style.opacity = "0";
        document.getElementById("inlay_tri_mop").style.opacity = "0";
        guitar.inlays = "box abalone";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }
}

function addTriMotherInlay() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("inlay_box_mop").style.opacity = "0";
        document.getElementById("inlay_box_aba").style.opacity = "0";
        document.getElementById("inlay_box_lap").style.opacity = "0";
        document.getElementById("inlay_tri_aba").style.opacity = "0";
        document.getElementById("inlay_tri_lap").style.opacity = "0";
        document.getElementById("inlay_tri_mop").style.opacity = "1";
        guitar.inlays = "triangle mother of pearl";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }
}

function addTriLapisInlay() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("inlay_box_mop").style.opacity = "0";
        document.getElementById("inlay_box_aba").style.opacity = "0";
        document.getElementById("inlay_box_lap").style.opacity = "0";
        document.getElementById("inlay_tri_aba").style.opacity = "0";
        document.getElementById("inlay_tri_lap").style.opacity = "1";
        document.getElementById("inlay_tri_mop").style.opacity = "0";
        guitar.inlays = "triangle lapis";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }
}

function addTriAbaloneInlay() {
    if (guitar.neckWood !== undefined && guitar.fretboardWood !== undefined) {
        document.getElementById("inlay_box_mop").style.opacity = "0";
        document.getElementById("inlay_box_aba").style.opacity = "0";
        document.getElementById("inlay_box_lap").style.opacity = "0";
        document.getElementById("inlay_tri_aba").style.opacity = "1";
        document.getElementById("inlay_tri_lap").style.opacity = "0";
        document.getElementById("inlay_tri_mop").style.opacity = "0";
        guitar.inlays = "triangle abalone";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    } else if (guitar.fretboardWood === undefined) {
        clearAlerts();
        document.getElementById("fretboardAlert").style.visibility = "visible";
        alert.fretboard = "true";
    }
}

var inlays = ["box mother of pearl", "box lapis", "box abalone", "triangle mother of pearl", "triangle lapis", "triangle abalone"];

// GUITAR TUNERS SELECTION
function addChromeTuners() {
    if (guitar.neckWood !== undefined) {
        document.getElementById("tuner_chrome").style.opacity = "1";
        document.getElementById("tuner_black").style.opacity = "0";
        document.getElementById("tuner_gold").style.opacity = "0";
        guitar.tuners = "chrome";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    }
}

function addBlackTuners() {
    if (guitar.neckWood !== undefined) {
        document.getElementById("tuner_chrome").style.opacity = "0";
        document.getElementById("tuner_black").style.opacity = "1";
        document.getElementById("tuner_gold").style.opacity = "0";
        guitar.tuners = "black";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    }
}

function addGoldTuners() {
    if (guitar.neckWood !== undefined) {
        document.getElementById("tuner_chrome").style.opacity = "0";
        document.getElementById("tuner_black").style.opacity = "0";
        document.getElementById("tuner_gold").style.opacity = "1";
        guitar.tuners = "gold";
        clearAlerts();
    } else if (guitar.neckWood === undefined) {
        clearAlerts();
        document.getElementById("neckAlert").style.visibility = "visible";
        alert.neck = "true";
    }
}

// CLEAR NECK
function clearNeck() {
    document.getElementById("neck_maple").style.opacity = "0";
    document.getElementById("neck_curlymaple").style.opacity = "0";
    delete guitar.neckWood;

    document.getElementById("neck_fret_rosewood").style.opacity = "0";
    document.getElementById("neck_fret_maple").style.opacity = "0";
    document.getElementById("neck_fret_ebony").style.opacity = "0";
    delete guitar.fretboardWood;

    document.getElementById("neck_fret_chrome").style.opacity = "0";
    document.getElementById("neck_fret_gold").style.opacity = "0";
    delete guitar.frets;

    document.getElementById("inlay_box_mop").style.opacity = "0";
    document.getElementById("inlay_box_aba").style.opacity = "0";
    document.getElementById("inlay_box_lap").style.opacity = "0";
    document.getElementById("inlay_tri_aba").style.opacity = "0";
    document.getElementById("inlay_tri_lap").style.opacity = "0";
    document.getElementById("inlay_tri_mop").style.opacity = "0";
    delete guitar.inlays;

    document.getElementById("tuner_chrome").style.opacity = "0";
    document.getElementById("tuner_black").style.opacity = "0";
    document.getElementById("tuner_gold").style.opacity = "0";
    delete guitar.tuners;
}

var tuners = ["chrome", "black", "gold"];

// GUITAR BRIDGE SELECTION
function addChromeBridge() {
    if (guitar.template !== undefined) {
        document.getElementById("bridge_chrome").style.opacity = "1";
        document.getElementById("bridge_black").style.opacity = "0";
        document.getElementById("bridge_gold").style.opacity = "0";
        guitar.bridge = "chrome";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addBlackBridge() {
    if (guitar.template !== undefined) {
        document.getElementById("bridge_chrome").style.opacity = "0";
        document.getElementById("bridge_black").style.opacity = "1";
        document.getElementById("bridge_gold").style.opacity = "0";
        guitar.bridge = "black";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addGoldBridge() {
    if (guitar.template !== undefined) {
        document.getElementById("bridge_chrome").style.opacity = "0";
        document.getElementById("bridge_black").style.opacity = "0";
        document.getElementById("bridge_gold").style.opacity = "1";
        guitar.bridge = "gold";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

var bridge = ["chrome", "black", "gold"];

// BRIDGE PICKUP SELECTION

// RINGS - REQUIRED
function addChromeBRing() {
    if (guitar.template !== undefined) {
        document.getElementById("prings_b_chrome").style.opacity = "1";
        document.getElementById("prings_b_gold").style.opacity = "0";
        document.getElementById("prings_b_black").style.opacity = "0";
        document.getElementById("bridgehumbucker").style.opacity = "1";
        guitar.bridgePickupRing = "chrome";
        clearAlerts();

    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addBlackBRing() {
    if (guitar.template !== undefined) {
        document.getElementById("prings_b_chrome").style.opacity = "0";
        document.getElementById("prings_b_gold").style.opacity = "0";
        document.getElementById("prings_b_black").style.opacity = "1";
        document.getElementById("bridgehumbucker").style.opacity = "1";
        guitar.bridgePickupRing = "black";
        clearAlerts();

    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addGoldBRing() {
    if (guitar.template !== undefined) {
        document.getElementById("prings_b_chrome").style.opacity = "0";
        document.getElementById("prings_b_gold").style.opacity = "1";
        document.getElementById("prings_b_black").style.opacity = "0";
        document.getElementById("bridgehumbucker").style.opacity = "1";
        guitar.bridgePickupRing = "gold";
        clearAlerts();

    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

var bridgePickupRing = ["chrome", "black", "gold"];

// COVERS - OPTIONAL
function addChromeBCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_b_chrome").style.opacity = "1";
        document.getElementById("pcovers_b_gold").style.opacity = "0";
        document.getElementById("pcovers_b_black").style.opacity = "0";
        guitar.bridgePickupCover = "chrome";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addBlackBCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_b_chrome").style.opacity = "0";
        document.getElementById("pcovers_b_gold").style.opacity = "0";
        document.getElementById("pcovers_b_black").style.opacity = "1";
        guitar.bridgePickupCover = "black";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addGoldBCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_b_chrome").style.opacity = "0";
        document.getElementById("pcovers_b_gold").style.opacity = "1";
        document.getElementById("pcovers_b_black").style.opacity = "0";
        guitar.bridgePickupCover = "gold";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function removeBCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_b_chrome").style.opacity = "0";
        document.getElementById("pcovers_b_gold").style.opacity = "0";
        document.getElementById("pcovers_b_black").style.opacity = "0";
        guitar.bridgePickupCover = "none";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

var bridgePickupCovers = ["chrome", "black", "gold"];

// NECK PICKUP SELECTION

// COVERS - OPTIONAL

function addChromeNCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_n_chrome").style.opacity = "1";
        document.getElementById("pcovers_n_gold").style.opacity = "0";
        document.getElementById("pcovers_n_black").style.opacity = "0";
        guitar.neckPickupCover = "chrome";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addBlackNCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_n_chrome").style.opacity = "0";
        document.getElementById("pcovers_n_gold").style.opacity = "0";
        document.getElementById("pcovers_n_black").style.opacity = "1";
        guitar.neckPickupCover = "black";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addGoldNCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_n_chrome").style.opacity = "0";
        document.getElementById("pcovers_n_gold").style.opacity = "1";
        document.getElementById("pcovers_n_black").style.opacity = "0";
        guitar.neckPickupCover = "gold";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function removeNCover() {
    if (guitar.template !== undefined) {
        document.getElementById("pcovers_n_chrome").style.opacity = "0";
        document.getElementById("pcovers_n_gold").style.opacity = "0";
        document.getElementById("pcovers_n_black").style.opacity = "0";
        delete guitar.neckPickupCover;
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

var neckPickupCovers = ["chrome", "black", "gold"];

// RINGS - REQUIRED
function addChromeNRing() {
    if (guitar.template !== undefined) {
        document.getElementById("prings_n_chrome").style.opacity = "1";
        document.getElementById("prings_n_gold").style.opacity = "0";
        document.getElementById("prings_n_black").style.opacity = "0";
        document.getElementById("neckhumbucker").style.opacity = "1";
        guitar.neckPickupRing = "chrome";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addBlackNRing() {
    if (guitar.template !== undefined) {
        document.getElementById("prings_n_chrome").style.opacity = "0";
        document.getElementById("prings_n_gold").style.opacity = "0";
        document.getElementById("prings_n_black").style.opacity = "1";
        document.getElementById("neckhumbucker").style.opacity = "1";
        guitar.neckPickupRing = "black";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addGoldNRing() {

    if (guitar.template !== undefined) {
        document.getElementById("prings_n_chrome").style.opacity = "0";
        document.getElementById("prings_n_gold").style.opacity = "1";
        document.getElementById("prings_n_black").style.opacity = "0";
        document.getElementById("neckhumbucker").style.opacity = "1";
        guitar.neckPickupRing = "gold";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addFromBridgePickup() {
    if (guitar.bridgePickupRing === "chrome" && guitar.bridgePickupCover === "chrome") {
        addChromeNRing();
        guitar.neckPickupRing = "chrome";
        addChromeNCover();
        guitar.neckPickupCover = "chrome";
    } else if (guitar.bridgePickupRing === "chrome"
        && guitar.bridgePickupCover === "black") {
        addChromeNRing();
        guitar.neckPickupRing = "chrome";
        addBlackNCover();
        guitar.neckPickupCover = "black";
    } else if (guitar.bridgePickupRing === "chrome"
        && guitar.bridgePickupCover === "gold") {
        addChromeNRing();
        guitar.neckPickupRing = "chrome";
        addGoldNCover();
        guitar.neckPickupCover = "gold";
    } else if (guitar.bridgePickupRing === "black"
        && guitar.bridgePickupCover === "black") {
        addBlackNRing();
        guitar.neckPickupRing = "black";
        addBlackNCover();
        guitar.neckPickupCover = "black";
    } else if (guitar.bridgePickupRing === "black"
        && guitar.bridgePickupCover === "chrome") {
        addBlackNRing();
        guitar.neckPickupRing = "black";
        addChromeNCover();
        guitar.neckPickupCover = "chrome";
    } else if (guitar.bridgePickupRing === "black"
        && guitar.bridgePickupCover === "gold") {
        addBlackNRing();
        guitar.neckPickupRing = "black";
        addGoldNCover();
        guitar.neckPickupCover = "gold";
    } else if (guitar.bridgePickupRing === "gold"
        && guitar.bridgePickupCover === "gold") {
        addGoldNRing();
        guitar.neckPickupRing = "gold";
        addGoldNCover();
        guitar.neckPickupCover = "gold";
    } else if (guitar.bridgePickupRing === "gold"
        && guitar.bridgePickupCover === "chrome") {
        addGoldNRing();
        guitar.neckPickupRing = "gold";
        addChromeNCover();
        guitar.neckPickupCover = "chrome";
    } else if (guitar.bridgePickupRing === "gold"
        && guitar.bridgePickupCover === "black") {
        addGoldNRing();
        guitar.neckPickupRing = "gold";
        addBlackNCover();
        guitar.neckPickupCover = "black";
    } else if (guitar.bridgePickupRing === "gold"
        && guitar.bridgePickupCover === "none") {
        addGoldNRing();
        guitar.neckPickupRing = "gold";
        removeNCover();
        guitar.neckPickupCover = "none";
    } else if (guitar.bridgePickupRing === "black"
        && guitar.bridgePickupCover === "none") {
        addBlackNRing();
        guitar.neckPickupRing = "black";
        removeNCover();
        guitar.neckPickupCover = "none";
    } else if (guitar.bridgePickupRing === "chrome"
        && guitar.bridgePickupCover === "none") {
        addChromeNRing();
        guitar.neckPickupRing = "chrome";
        removeNCover();
        guitar.neckPickupCover = "none";
    }
}

var neckPickupRing = ["chrome", "black", "gold"];

// CLEAR GUITAR KNOBS
function clearKnobs() {
    document.getElementById("knob_s_gold1").style.opacity = "0";
    document.getElementById("knob_s_gold2").style.opacity = "0";
    document.getElementById("knob_s_gold3").style.opacity = "0";
    document.getElementById("knob_s_silver1").style.opacity = "0";
    document.getElementById("knob_s_silver2").style.opacity = "0";
    document.getElementById("knob_s_silver3").style.opacity = "0";
    document.getElementById("knob_s_black1").style.opacity = "0";
    document.getElementById("knob_s_black2").style.opacity = "0";
    document.getElementById("knob_s_black3").style.opacity = "0";

    document.getElementById("knob_d_gold1").style.opacity = "0";
    document.getElementById("knob_d_gold2").style.opacity = "0";
    document.getElementById("knob_d_gold3").style.opacity = "0";
    document.getElementById("knob_d_chrome1").style.opacity = "0";
    document.getElementById("knob_d_chrome2").style.opacity = "0";
    document.getElementById("knob_d_chrome3").style.opacity = "0";
    document.getElementById("knob_d_black1").style.opacity = "0";
    document.getElementById("knob_d_black2").style.opacity = "0";
    document.getElementById("knob_d_black3").style.opacity = "0";
}

// CLEAR SWITCHES
function clearSwitch() {
    document.getElementById("s_slide_chrome").style.opacity = "0";
    document.getElementById("s_slide_black").style.opacity = "0";
    document.getElementById("s_slide_gold").style.opacity = "0";
    document.getElementById("s_toggle_chrome").style.opacity = "0";
    document.getElementById("s_toggle_black").style.opacity = "0";
    document.getElementById("s_toggle_gold").style.opacity = "0";
}

// GUITAR KNOBS/SWITCHES SELECTION
function addConfigOne() {
    if (guitar.knobSwitchStyle === "chrome" && guitar.knob === "speed") {
        clearKnobs();
        document.getElementById("knob_s_silver1").style.opacity = "1";
        document.getElementById("knob_s_silver2").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "chrome" && guitar.knob === "dome") {
        clearKnobs();
        document.getElementById("knob_d_chrome1").style.opacity = "1";
        document.getElementById("knob_d_chrome2").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "black" && guitar.knob === "speed") {
        clearKnobs();
        document.getElementById("knob_s_black1").style.opacity = "1";
        document.getElementById("knob_s_black2").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "black" && guitar.knob === "dome") {
        clearKnobs();
        document.getElementById("knob_d_black1").style.opacity = "1";
        document.getElementById("knob_d_black2").style.opacity = "1";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "gold" && guitar.knob === "speed") {
        clearKnobs();
        document.getElementById("knob_s_gold1").style.opacity = "1";
        document.getElementById("knob_s_gold2").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "gold" && guitar.knob === "dome") {
        clearKnobs();
        document.getElementById("knob_d_gold1").style.opacity = "1";
        document.getElementById("knob_d_gold2").style.opacity = "1";
        guitar.wiringConfig = "one";
    }
}

function addChromeControl() {
    if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.knob === "speed" && guitar.switchType === "toggle") {
        clearKnobs();
        document.getElementById("knob_s_silver1").style.opacity = "1";
        document.getElementById("knob_s_silver2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_toggle_chrome").style.opacity = "1";
        guitar.knobSwitchStyle = "chrome";
        clearAlerts();
    } else if (guitar.knob === "dome" && guitar.switchType === "slide") {
        clearKnobs();
        document.getElementById("knob_d_chrome1").style.opacity = "1";
        document.getElementById("knob_d_chrome2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_slide_chrome").style.opacity = "1";
        guitar.knobSwitchStyle = "chrome";
        clearAlerts();
    } else if (guitar.knob === "dome" && guitar.switchType === "toggle") {
        clearKnobs();
        document.getElementById("knob_d_chrome1").style.opacity = "1";
        document.getElementById("knob_d_chrome2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_toggle_chrome").style.opacity = "1";
        guitar.knobSwitchStyle = "chrome";
        clearAlerts();
    } else {
        clearKnobs();
        document.getElementById("knob_s_silver1").style.opacity = "1";
        document.getElementById("knob_s_silver2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_slide_chrome").style.opacity = "1";
        guitar.switchType = "slide";
        guitar.knobSwitchStyle = "chrome";
        guitar.knob = "speed";
        clearAlerts();
    }
    addConfigOne();
}

function addBlackControl() {
    if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.knob === "speed" && guitar.switchType === "toggle") {
        clearKnobs();
        document.getElementById("knob_s_black1").style.opacity = "1";
        document.getElementById("knob_s_black2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_toggle_black").style.opacity = "1";
        guitar.knobSwitchStyle = "black";
        clearAlerts();
    } else if (guitar.knob === "dome" && guitar.switchType === "slide") {
        clearKnobs();
        document.getElementById("knob_d_black1").style.opacity = "1";
        document.getElementById("knob_d_black2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_slide_black").style.opacity = "1";
        guitar.knobSwitchStyle = "black";
        clearAlerts();
    } else if (guitar.knob === "dome" && guitar.switchType === "toggle") {
        clearKnobs();
        document.getElementById("knob_d_black1").style.opacity = "1";
        document.getElementById("knob_d_black2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_toggle_black").style.opacity = "1";
        guitar.knobSwitchStyle = "black";
        clearAlerts();
    } else {
        clearKnobs();
        document.getElementById("knob_s_black1").style.opacity = "1";
        document.getElementById("knob_s_black2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_slide_black").style.opacity = "1";
        guitar.switchType = "slide";
        guitar.knobSwitchStyle = "black";
        guitar.knob = "speed";
        clearAlerts();
    }
    addConfigOne();
}

function addGoldControl() {
    if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.knob === "speed" && guitar.switchType === "toggle") {
        clearKnobs();
        document.getElementById("knob_s_gold1").style.opacity = "1";
        document.getElementById("knob_s_gold2").style.opacity = "1";


        clearSwitch();
        document.getElementById("s_toggle_gold").style.opacity = "1";
        guitar.knobSwitchStyle = "gold";
        clearAlerts();
    } else if (guitar.knob === "dome" && guitar.switchType === "slide") {
        clearKnobs();
        document.getElementById("knob_d_gold1").style.opacity = "1";
        document.getElementById("knob_d_gold2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_slide_gold").style.opacity = "1";
        guitar.knobSwitchStyle = "gold";
        clearAlerts();
    } else if (guitar.knob === "dome" && guitar.switchType === "toggle") {
        clearKnobs();
        document.getElementById("knob_d_gold1").style.opacity = "1";
        document.getElementById("knob_d_gold2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_toggle_gold").style.opacity = "1";
        guitar.knobSwitchStyle = "gold";
        clearAlerts();
    } else {
        clearKnobs();
        document.getElementById("knob_s_gold1").style.opacity = "1";
        document.getElementById("knob_s_gold2").style.opacity = "1";

        clearSwitch();
        document.getElementById("s_slide_gold").style.opacity = "1";
        guitar.switchType = "slide";
        guitar.knobSwitchStyle = "gold";
        guitar.knob = "speed";
        clearAlerts();
    }
    addConfigOne();
}

function addDome() {
    if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.knobSwitchStyle === "chrome") {
        clearKnobs();
        document.getElementById("knob_d_chrome1").style.opacity = "1";
        document.getElementById("knob_d_chrome2").style.opacity = "1";
        guitar.knob = "dome";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "black") {
        clearKnobs();
        document.getElementById("knob_d_black1").style.opacity = "1";
        document.getElementById("knob_d_black2").style.opacity = "1";
        guitar.knob = "dome";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "gold") {
        clearKnobs();
        document.getElementById("knob_d_gold1").style.opacity = "1";
        document.getElementById("knob_d_gold2").style.opacity = "1";
        guitar.knob = "dome";
        clearAlerts();
    }
}

function addSpeed() {
    if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.knobSwitchStyle === "chrome") {
        clearKnobs();
        document.getElementById("knob_s_silver1").style.opacity = "1";
        document.getElementById("knob_s_silver2").style.opacity = "1";
        guitar.knob = "speed";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "black") {
        clearKnobs();
        document.getElementById("knob_s_black1").style.opacity = "1";
        document.getElementById("knob_s_black2").style.opacity = "1";
        guitar.knob = "speed";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "gold") {
        clearKnobs();
        document.getElementById("knob_s_gold1").style.opacity = "1";
        document.getElementById("knob_s_gold2").style.opacity = "1";
        guitar.knob = "speed";
        clearAlerts();
    }
    addConfigOne();
}

function addSlide() {
    if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.knobSwitchStyle === "chrome") {
        clearSwitch();
        document.getElementById("s_slide_chrome").style.opacity = "1";
        guitar.switchType = "slide";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "black") {
        clearSwitch();
        document.getElementById("s_slide_black").style.opacity = "1";
        guitar.switchType = "slide";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "gold") {
        clearSwitch();
        document.getElementById("s_slide_gold").style.opacity = "1";
        guitar.switchType = "slide";
        clearAlerts();
    } else if (guitar.bridge === "chrome") {
        clearSwitch();
        document.getElementById("s_slide_chrome").style.opacity = "1";
        guitar.switchType = "slide";
        guitar.knobSwitchStyle = "chrome";
        clearAlerts();
    } else if (guitar.bridge === "black") {
        clearSwitch();
        document.getElementById("s_slide_black").style.opacity = "1";
        guitar.switchType = "slide";
        guitar.knobSwitchStyle = "black";
        clearAlerts();
    } else if (guitar.bridge === "gold") {
        clearSwitch();
        document.getElementById("s_slide_gold").style.opacity = "1";
        guitar.switchType = "slide";
        guitar.knobSwitchStyle = "gold";
        clearAlerts();
    } else {
        clearSwitch();
        document.getElementById("s_slide_chrome").style.opacity = "1";
        guitar.switchType = "slide";
        guitar.knobSwitchStyle = "chrome";
        clearAlerts();
    }
    addConfigOne();
}

function addToggle() {
    if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.knobSwitchStyle === "chrome") {
        clearSwitch();
        document.getElementById("s_toggle_chrome").style.opacity = "1";
        guitar.switchType = "toggle";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "black") {
        clearSwitch();
        document.getElementById("s_toggle_black").style.opacity = "1";
        guitar.switchType = "toggle";
        clearAlerts();
    } else if (guitar.knobSwitchStyle === "gold") {
        clearSwitch();
        document.getElementById("s_toggle_gold").style.opacity = "1";
        guitar.switchType = "toggle";
        clearAlerts();
    } else if (guitar.bridge === "chrome") {
        clearSwitch();
        document.getElementById("s_toggle_chrome").style.opacity = "1";
        guitar.switchType = "toggle";
        clearAlerts();
        guitar.knobSwitchStyle = "chrome";
    } else if (guitar.bridge === "black") {
        clearSwitch();
        document.getElementById("s_toggle_black").style.opacity = "1";
        guitar.switchType = "toggle";
        clearAlerts();
        guitar.knobSwitchStyle = "black";
    } else if (guitar.bridge === "gold") {
        clearSwitch();
        document.getElementById("s_toggle_gold").style.opacity = "1";
        guitar.switchType = "toggle";
        clearAlerts();
        guitar.knobSwitchStyle = "gold";
    } else {
        clearSwitch();
        document.getElementById("s_toggle_chrome").style.opacity = "1";
        guitar.switchType = "toggle";
        clearAlerts();
        guitar.knobSwitchStyle = "chrome";
    }
    addConfigOne();
}

addConfigOne();
var knob = ["dome", "speed"];
var switchType = ["slide", "toggle"];
var knobSwitchStyle = ["chrome", "black", "gold"];

// WIRING ORIENTATION SELECTION
guitar.wiringConfig = "one";

function addConfigTwo() {
    if (guitar.knobSwitchStyle === "chrome" && guitar.knob === "speed") {
        clearKnobs();
        document.getElementById("knob_s_silver1").style.opacity = "1";
        document.getElementById("knob_s_silver2").style.opacity = "1";
        document.getElementById("knob_s_silver3").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "chrome" && guitar.knob === "dome") {
        clearKnobs();
        document.getElementById("knob_d_chrome1").style.opacity = "1";
        document.getElementById("knob_d_chrome2").style.opacity = "1";
        document.getElementById("knob_d_chrome3").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "black" && guitar.knob === "speed") {
        clearKnobs();
        document.getElementById("knob_s_black1").style.opacity = "1";
        document.getElementById("knob_s_black2").style.opacity = "1";
        document.getElementById("knob_s_black3").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "black" && guitar.knob === "dome") {
        clearKnobs();
        document.getElementById("knob_d_black1").style.opacity = "1";
        document.getElementById("knob_d_black2").style.opacity = "1";
        document.getElementById("knob_d_black3").style.opacity = "1";

    } else if (guitar.knobSwitchStyle === "gold" && guitar.knob === "speed") {
        clearKnobs();
        document.getElementById("knob_s_gold1").style.opacity = "1";
        document.getElementById("knob_s_gold2").style.opacity = "1";
        document.getElementById("knob_s_gold3").style.opacity = "1";
    } else if (guitar.knobSwitchStyle === "gold" && guitar.knob === "dome") {
        clearKnobs();
        document.getElementById("knob_d_gold1").style.opacity = "1";
        document.getElementById("knob_d_gold2").style.opacity = "1";
        document.getElementById("knob_d_gold3").style.opacity = "1";
    }
    guitar.wiringConfig = "two";
}

var wiringConfig = ["one", "two"];


// GUITAR JACKPLATE SELECTION
function addChromeJack() {
    if (guitar.template !== undefined) {
        document.getElementById("jack_chrome").style.opacity = "0";
        document.getElementById("jack_gold").style.opacity = "0";
        document.getElementById("jack_black").style.opacity = "0";
        clearAlerts();

        if (guitar.jack === undefined) {
            document.getElementById("jack_chrome").style.opacity = "1";
            guitar.jack = "front";
            guitar.jackStyle = "chrome";
        } else if (guitar.jack === "low profile") {
            guitar.jackStyle = "chrome";
            document.getElementById("lowProfileAlert").style.visibility = "visible";
        } else {
            document.getElementById("jack_chrome").style.opacity = "1";
            guitar.jack = "front";
            guitar.jackStyle = "chrome";
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addBlackJack() {
    if (guitar.template !== undefined) {
        document.getElementById("jack_chrome").style.opacity = "0";
        document.getElementById("jack_gold").style.opacity = "0";
        document.getElementById("jack_black").style.opacity = "0";
        clearAlerts();

        if (guitar.jack === undefined) {
            document.getElementById("jack_black").style.opacity = "1";
            guitar.jack = "front";
            guitar.jackStyle = "black";
        } else if (guitar.jack === "low profile") {
            guitar.jackStyle = "black";
            document.getElementById("lowProfileAlert").style.visibility = "visible";
        } else {
            document.getElementById("jack_black").style.opacity = "1";
            guitar.jack = "front";
            guitar.jackStyle = "black";
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addGoldJack() {
    if (guitar.template !== undefined) {
        document.getElementById("jack_chrome").style.opacity = "0";
        document.getElementById("jack_gold").style.opacity = "0";
        document.getElementById("jack_black").style.opacity = "0";
        clearAlerts();

        if (guitar.jack === undefined) {
            document.getElementById("jack_gold").style.opacity = "1";
            guitar.jack = "front";
            guitar.jackStyle = "gold";
        } else if (guitar.jack === "low profile") {
            guitar.jackStyle = "gold";
            document.getElementById("lowProfileAlert").style.visibility = "visible";
        } else {
            document.getElementById("jack_gold").style.opacity = "1";
            guitar.jack = "front";
            guitar.jackStyle = "gold";
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addFrontJack() {
    if (guitar.template !== undefined) {
        document.getElementById("jack_chrome").style.opacity = "0";
        document.getElementById("jack_gold").style.opacity = "0";
        document.getElementById("jack_black").style.opacity = "0";
        clearAlerts();

        if (guitar.jack === undefined && guitar.jackStyle === "chrome") {
            document.getElementById("jack_chrome").style.opacity = "1";
            guitar.jack = "front";
        } else if (guitar.jack === "low profile" && guitar.jackStyle === "chrome") {
            document.getElementById("jack_chrome").style.opacity = "1";
            guitar.jack = "front";
        } else if (guitar.jack === "front" && guitar.jackStyle === "chrome") {
            document.getElementById("jack_chrome").style.opacity = "1";
        } else if (guitar.jack === undefined && guitar.jackStyle === "gold") {
            document.getElementById("jack_gold").style.opacity = "1";
            guitar.jack = "front";
        } else if (guitar.jack === "low profile" && guitar.jackStyle === "gold") {
            document.getElementById("jack_gold").style.opacity = "1";
            guitar.jack = "front";
        } else if (guitar.jack === "front" && guitar.jackStyle === "gold") {
            document.getElementById("jack_chrome").style.opacity = "1";
        } else if (guitar.jack === undefined && guitar.jackStyle === "black") {
            document.getElementById("jack_black").style.opacity = "1";
            guitar.jack = "front";
        } else if (guitar.jack === "low profile" && guitar.jackStyle === "black") {
            document.getElementById("jack_black").style.opacity = "1";
            guitar.jack = "front";
        } else if (guitar.jack === "front" && guitar.jackStyle === "black") {
            document.getElementById("jack_black").style.opacity = "1";
        }
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addSideJack() {
    if (guitar.template !== undefined) {
        document.getElementById("jack_chrome").style.opacity = "0";
        document.getElementById("jack_gold").style.opacity = "0";
        document.getElementById("jack_black").style.opacity = "0";
        clearAlerts();
        document.getElementById("lowProfileAlert").style.visibility = "visible";
        guitar.jack = "low profile";
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

// CLEAR BODY HARDWARE
function clearBodyHarware() {
    document.getElementById("bridge_chrome").style.opacity = "0";
    document.getElementById("bridge_black").style.opacity = "0";
    document.getElementById("bridge_gold").style.opacity = "0";
    delete guitar.bridge;

    document.getElementById("prings_b_chrome").style.opacity = "0";
    document.getElementById("prings_b_gold").style.opacity = "0";
    document.getElementById("prings_b_black").style.opacity = "0";
    document.getElementById("bridgehumbucker").style.opacity = "0";
    delete guitar.bridgePickupRing;

    document.getElementById("pcovers_b_chrome").style.opacity = "0";
    document.getElementById("pcovers_b_gold").style.opacity = "0";
    document.getElementById("pcovers_b_black").style.opacity = "0";
    delete guitar.bridgePickupCover;

    document.getElementById("prings_n_chrome").style.opacity = "0";
    document.getElementById("prings_n_gold").style.opacity = "0";
    document.getElementById("prings_n_black").style.opacity = "0";
    document.getElementById("neckhumbucker").style.opacity = "0";
    delete guitar.neckPickupRing;

    document.getElementById("pcovers_n_chrome").style.opacity = "0";
    document.getElementById("pcovers_n_gold").style.opacity = "0";
    document.getElementById("pcovers_n_black").style.opacity = "0";
    delete guitar.neckPickupCover;

    clearKnobs();
    delete guitar.knob;
    delete guitar.knobSwitchStyle;

    clearSwitch();
    delete guitar.switchType;
    delete guitar.knobSwitchStyle;

    document.getElementById("jack_chrome").style.opacity = "0";
    document.getElementById("jack_gold").style.opacity = "0";
    document.getElementById("jack_black").style.opacity = "0";
    delete guitar.jack;
    delete guitar.jackStyle;

    clearAllStrap();
    delete guitar.strapButtons;
    delete guitar.strapButtonStyle;
}

var jack = ["front", "low profile"];
var jackStyle = ["chrome", "black", "gold"];

// GUITAR FINISH SELECTION

/*
 FINISH:
 0 = natural
 1 = stained
 2 = solid

 3 = textured

 SOLID COLOR:
 0 = Science Blue #0066CC
 1 = Burning Orange #ff7034
 2 = Roman Coffee #795D4C
 3 = Faded Jade #427977
 4 = Jungle Green #29AB87
 5 = Torch Red #F90B1C
 6 = Lemon #FDE910
 7 = Grape #421C5A
 8 = Sherpa Blue #004950
 9 = Black
 10 = White

 STAINED COLOR:
 0 = Honey Amber
 1 = Black
 2 = Dark Walnut
 3 = Lemon Yellow
 4 = Green
 5 = Purple
 6 = Red Mahogany

 */

// CLEAR BODY FINISH
function clearBodyFinish() {
    delete guitar.stainedColor;
    delete guitar.solidColor;
    delete guitar.texturedColor;

    document.getElementById("f_overlay_camila").style.opacity = "0";
    document.getElementById("c_overlay_camila").style.opacity = "0";
    document.getElementById("color_camila").style.opacity = "0";
    document.getElementById("f_overlay_remi").style.opacity = "0";
    document.getElementById("c_overlay_remi").style.opacity = "0";
    document.getElementById("color_remi").style.opacity = "0";
    document.getElementById("f_overlay_rocco").style.opacity = "0";
    document.getElementById("c_overlay_rocco").style.opacity = "0";
    document.getElementById("color_rocco").style.opacity = "0";

    document.getElementById("color_curve_camila").style.opacity = "0";
    document.getElementById("color_curve_remi").style.opacity = "0";
    document.getElementById("color_curve_rocco").style.opacity = "0";

    document.getElementById("c_texture_wood").style.opacity = "0";
    document.getElementById("c_texture_metal").style.opacity = "0";
    document.getElementById("re_texture_m1").style.opacity = "0";
    document.getElementById("re_texture_m2").style.opacity = "0";
    document.getElementById("ro_texture_m1").style.opacity = "0";
    document.getElementById("ro_texture_m2").style.opacity = "0";
}

// CLEAR GUITAR FINISH
function clearGuitarFinish() {
    clearBodyFinish();
    document.getElementById("neck_color_fill").style.opacity = "0";
    delete guitar.neckAccentColor;
}

// Function to Add Neck Color
function addNeckColor() {
    document.getElementById("neck_color_fill").style.opacity = "0";

    if (guitar.solidColor === "science blue") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#0066CC";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "burning orange") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#ff7034";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "roman coffee") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#795D4C";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "faded jade") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#427977";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "jungle green") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#29AB87";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "torch red") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#F90B1C";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "lemon") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#FDE910";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "grape") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#421C5A";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "sherpa blue") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#004950";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "black" || guitar.stainedColor === "black") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#000";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.solidColor === "white") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#fff";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.stainedColor === "honey amber") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#7F5400";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.stainedColor === "dark walnut") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#42201E";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.stainedColor === "lemon yellow") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#FFDE53";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.stainedColor === "green") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#00A63E";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.stainedColor === "purple") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#692BC2";
        guitar.neckAccentColor = "same as body color";
    } else if (guitar.stainedColor === "red mahogany") {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#DB1300";
        guitar.neckAccentColor = "same as body color";
    }
}

// Function to Match Neck Color
function matchNeckColor() {
    if (guitar.neckAccentColor === "same as body color") {
        addNeckColor();
    }
}

// ADD Science Blue #0066CC --------------
function addSolid0() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#0066CC";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#0066CC";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#0066CC";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#0066CC";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#0066CC";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#0066CC";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#0066CC";
        document.getElementById("svg_color1ab").style.fill = "#0066CC";
        document.getElementById("svg_color1abc").style.fill = "#0066CC";
        addCurveCamila();
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#0066CC";
        document.getElementById("svg_color1ab").style.fill = "#0066CC";
        document.getElementById("svg_color1abc").style.fill = "#0066CC";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#0066CC";
        document.getElementById("svg_color2ab").style.fill = "#0066CC";
        document.getElementById("svg_color2abc").style.fill = "#0066CC";
        guitar.solidColor = "science blue";
        matchNeckColor();
        addCurveRemi();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#0066CC";
        document.getElementById("svg_color2ab").style.fill = "#0066CC";
        document.getElementById("svg_color2abc").style.fill = "#0066CC";
        guitar.solidColor = "science blue";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#0066CC";
        document.getElementById("svg_color3ab").style.fill = "#0066CC";
        document.getElementById("svg_color3abc").style.fill = "#0066CC";
        guitar.solidColor = "science blue";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#0066CC";
        document.getElementById("svg_color3ab").style.fill = "#0066CC";
        document.getElementById("svg_color3abc").style.fill = "#0066CC";
        guitar.solidColor = "science blue";
        matchNeckColor();
    }
}

// ADD Burning Orange #ff7034 --------------
function addSolid1() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#ff7034";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#ff7034";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#ff7034";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#ff7034";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#ff7034";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#ff7034";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#ff7034";
        document.getElementById("svg_color1ab").style.fill = "#ff7034";
        document.getElementById("svg_color1abc").style.fill = "#ff7034";
        addCurveCamila();
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#ff7034";
        document.getElementById("svg_color1ab").style.fill = "#ff7034";
        document.getElementById("svg_color1abc").style.fill = "#ff7034";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#ff7034";
        document.getElementById("svg_color2ab").style.fill = "#ff7034";
        document.getElementById("svg_color2abc").style.fill = "#ff7034";
        guitar.solidColor = "burning orange";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#ff7034";
        document.getElementById("svg_color2ab").style.fill = "#ff7034";
        document.getElementById("svg_color2abc").style.fill = "#ff7034";
        guitar.solidColor = "burning orange";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#ff7034";
        document.getElementById("svg_color3ab").style.fill = "#ff7034";
        document.getElementById("svg_color3abc").style.fill = "#ff7034";
        guitar.solidColor = "burning orange";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#ff7034";
        document.getElementById("svg_color3ab").style.fill = "#ff7034";
        document.getElementById("svg_color3abc").style.fill = "#ff7034";
        guitar.solidColor = "burning orange";
    }
}



// ADD Roman Coffee #795D4C -------------- CURVES
function addSolid2() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#795D4C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#795D4C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#795D4C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#795D4C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#795D4C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#795D4C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#795D4C";
        document.getElementById("svg_color1ab").style.fill = "#795D4C";
        document.getElementById("svg_color1abc").style.fill = "#795D4C";
        addCurveCamila();
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#795D4C";
        document.getElementById("svg_color1ab").style.fill = "#795D4C";
        document.getElementById("svg_color1abc").style.fill = "#795D4C";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#795D4C";
        document.getElementById("svg_color2ab").style.fill = "#795D4C";
        document.getElementById("svg_color2abc").style.fill = "#795D4C";
        guitar.solidColor = "roman coffee";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#795D4C";
        document.getElementById("svg_color2ab").style.fill = "#795D4C";
        document.getElementById("svg_color2abc").style.fill = "#795D4C";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#795D4C";
        document.getElementById("svg_color3ab").style.fill = "#795D4C";
        document.getElementById("svg_color3abc").style.fill = "#795D4C";
        guitar.solidColor = "roman coffee";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#795D4C";
        document.getElementById("svg_color3ab").style.fill = "#795D4C";
        document.getElementById("svg_color3abc").style.fill = "#795D4C";
        guitar.solidColor = "roman coffee";
        matchNeckColor();
    }
}


// ADD 3 = Faded Jade #427977 -------------- CURVES

function addSolid3() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#427977";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#427977";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#427977";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#427977";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#427977";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#427977";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#427977";
        document.getElementById("svg_color1ab").style.fill = "#427977";
        document.getElementById("svg_color1abc").style.fill = "#427977";
        addCurveCamila();
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#427977";
        document.getElementById("svg_color1ab").style.fill = "#427977";
        document.getElementById("svg_color1abc").style.fill = "#427977";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#427977";
        document.getElementById("svg_color2ab").style.fill = "#427977";
        document.getElementById("svg_color2abc").style.fill = "#427977";
        guitar.solidColor = "faded jade";
        matchNeckColor();
        addCurveRemi();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#427977";
        document.getElementById("svg_color2ab").style.fill = "#427977";
        document.getElementById("svg_color2abc").style.fill = "#427977";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#427977";
        document.getElementById("svg_color3ab").style.fill = "#427977";
        document.getElementById("svg_color3abc").style.fill = "#427977";
        guitar.solidColor = "faded jade";
        matchNeckColor();
        addCurveRocco();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#427977";
        document.getElementById("svg_color3ab").style.fill = "#427977";
        document.getElementById("svg_color3abc").style.fill = "#427977";
        guitar.solidColor = "faded jade";
        matchNeckColor();
    }
}



// ADD 4 = Jungle Green #29AB87 -------------- CURVES
function addSolid4() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#29AB87";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#29AB87";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#29AB87";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#29AB87";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#29AB87";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#29AB87";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#29AB87";
        document.getElementById("svg_color1ab").style.fill = "#29AB87";
        document.getElementById("svg_color1abc").style.fill = "#29AB87";
        addCurveCamila();
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#29AB87";
        document.getElementById("svg_color1ab").style.fill = "#29AB87";
        document.getElementById("svg_color1abc").style.fill = "#29AB87";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#29AB87";
        document.getElementById("svg_color2ab").style.fill = "#29AB87";
        document.getElementById("svg_color2abc").style.fill = "#29AB87";
        guitar.solidColor = "jungle green";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#29AB87";
        document.getElementById("svg_color2ab").style.fill = "#29AB87";
        document.getElementById("svg_color2abc").style.fill = "#29AB87";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#29AB87";
        document.getElementById("svg_color3ab").style.fill = "#29AB87";
        document.getElementById("svg_color3abc").style.fill = "#29AB87";
        guitar.solidColor = "jungle green";
        matchNeckColor();
        addCurveRocco();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#29AB87";
        document.getElementById("svg_color3ab").style.fill = "#29AB87";
        document.getElementById("svg_color3abc").style.fill = "#29AB87";
        guitar.solidColor = "jungle green";
        matchNeckColor();
    }
}


// ADD 5 = Torch Red #F90B1C -------------- CURVES

function addSolid5() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#F90B1C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#F90B1C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#F90B1C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#F90B1C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#F90B1C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#F90B1C";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#F90B1C";
        document.getElementById("svg_color1ab").style.fill = "#F90B1C";
        document.getElementById("svg_color1abc").style.fill = "#F90B1C";
        addCurveCamila();
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#F90B1C";
        document.getElementById("svg_color1ab").style.fill = "#F90B1C";
        document.getElementById("svg_color1abc").style.fill = "#F90B1C";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#F90B1C";
        document.getElementById("svg_color2ab").style.fill = "#F90B1C";
        document.getElementById("svg_color2abc").style.fill = "#F90B1C";
        guitar.solidColor = "torch red";
        matchNeckColor();
        addCurveRemi();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#F90B1C";
        document.getElementById("svg_color2ab").style.fill = "#F90B1C";
        document.getElementById("svg_color2abc").style.fill = "#F90B1C";
        guitar.solidColor = "torch red";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#F90B1C";
        document.getElementById("svg_color3ab").style.fill = "#F90B1C";
        document.getElementById("svg_color3abc").style.fill = "#F90B1C";
        guitar.solidColor = "torch red";
        matchNeckColor();
        addCurveRocco();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#F90B1C";
        document.getElementById("svg_color3ab").style.fill = "#F90B1C";
        document.getElementById("svg_color3abc").style.fill = "#F90B1C";
        guitar.solidColor = "torch red";
        matchNeckColor();
    }
}


// ADD 6 = Lemon #FDE910 -------------- CURVES

function addSolid6() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#FDE910";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#FDE910";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#FDE910";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#FDE910";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#FDE910";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#FDE910";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#FDE910";
        document.getElementById("svg_color1ab").style.fill = "#FDE910";
        document.getElementById("svg_color1abc").style.fill = "#FDE910";
        addCurveCamila();
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#FDE910";
        document.getElementById("svg_color1ab").style.fill = "#FDE910";
        document.getElementById("svg_color1abc").style.fill = "#FDE910";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#FDE910";
        document.getElementById("svg_color2ab").style.fill = "#FDE910";
        document.getElementById("svg_color2abc").style.fill = "#FDE910";
        guitar.solidColor = "lemon";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#FDE910";
        document.getElementById("svg_color2ab").style.fill = "#FDE910";
        document.getElementById("svg_color2abc").style.fill = "#FDE910";
        guitar.solidColor = "lemon";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#FDE910";
        document.getElementById("svg_color3ab").style.fill = "#FDE910";
        document.getElementById("svg_color3abc").style.fill = "#FDE910";
        guitar.solidColor = "lemon";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#FDE910";
        document.getElementById("svg_color3ab").style.fill = "#FDE910";
        document.getElementById("svg_color3abc").style.fill = "#FDE910";
        guitar.solidColor = "lemon";
        matchNeckColor();
    }
}

// ADD 7 = Grape #421C5A -------------- CURVES
function addSolid7() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#421C5A";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#421C5A";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#421C5A";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#421C5A";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#421C5A";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#421C5A";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#421C5A";
        document.getElementById("svg_color1ab").style.fill = "#421C5A";
        document.getElementById("svg_color1abc").style.fill = "#421C5A";
        addCurveCamila();
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#421C5A";
        document.getElementById("svg_color1ab").style.fill = "#421C5A";
        document.getElementById("svg_color1abc").style.fill = "#421C5A";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#421C5A";
        document.getElementById("svg_color2ab").style.fill = "#421C5A";
        document.getElementById("svg_color2abc").style.fill = "#421C5A";
        guitar.solidColor = "grape";
        matchNeckColor();
        addCurveRemi();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#421C5A";
        document.getElementById("svg_color2ab").style.fill = "#421C5A";
        document.getElementById("svg_color2abc").style.fill = "#421C5A";
        guitar.solidColor = "grape";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#421C5A";
        document.getElementById("svg_color3ab").style.fill = "#421C5A";
        document.getElementById("svg_color3abc").style.fill = "#421C5A";
        guitar.solidColor = "grape";
        matchNeckColor();
        addCurveRocco();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#421C5A";
        document.getElementById("svg_color3ab").style.fill = "#421C5A";
        document.getElementById("svg_color3abc").style.fill = "#421C5A";
        guitar.solidColor = "grape";
        matchNeckColor();
    }
}

// ADD 8 = Sherpa Blue #004950 -------------- CURVES
function addSolid8() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#004950";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = "1";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#004950";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#004950";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = "1";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#004950";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#004950";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = "1";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#004950";
        guitar.bodyFinish = "solid";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#004950";
        document.getElementById("svg_color1ab").style.fill = "#004950";
        document.getElementById("svg_color1abc").style.fill = "#004950";
        addCurveCamila();
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#004950";
        document.getElementById("svg_color1ab").style.fill = "#004950";
        document.getElementById("svg_color1abc").style.fill = "#004950";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#004950";
        document.getElementById("svg_color2ab").style.fill = "#004950";
        document.getElementById("svg_color2abc").style.fill = "#004950";
        guitar.solidColor = "sherpa blue";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#004950";
        document.getElementById("svg_color2ab").style.fill = "#004950";
        document.getElementById("svg_color2abc").style.fill = "#004950";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#004950";
        document.getElementById("svg_color3ab").style.fill = "#004950";
        document.getElementById("svg_color3abc").style.fill = "#004950";
        guitar.solidColor = "sherpa blue";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#004950";
        document.getElementById("svg_color3ab").style.fill = "#004950";
        document.getElementById("svg_color3abc").style.fill = "#004950";
        guitar.solidColor = "sherpa blue";
        matchNeckColor();
    }
}

// ADD 9 = Black -------------- CURVES
function addSolid9() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = ".5";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#000000";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = ".5";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#000000";
        document.getElementById("svg_color1ab").style.fill = "#000000";
        document.getElementById("svg_color1abc").style.fill = "#000000";
        addCurveCamila();
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#000000";
        document.getElementById("svg_color1ab").style.fill = "#000000";
        document.getElementById("svg_color1abc").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#000000";
        document.getElementById("svg_color2ab").style.fill = "#000000";
        document.getElementById("svg_color2abc").style.fill = "#000000";
        guitar.solidColor = "black";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#000000";
        document.getElementById("svg_color2ab").style.fill = "#000000";
        document.getElementById("svg_color2abc").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#000000";
        document.getElementById("svg_color3ab").style.fill = "#000000";
        document.getElementById("svg_color3abc").style.fill = "#000000";
        guitar.solidColor = "black";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#000000";
        document.getElementById("svg_color3ab").style.fill = "#000000";
        document.getElementById("svg_color3abc").style.fill = "#000000";
        guitar.solidColor = "black";
        matchNeckColor();
    }
}

// ADD 10 = White -------------- CURVES
function addSolid10() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_camila").style.opacity = ".5";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_camila").style.opacity = "1";
        document.getElementById("svg_color1").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_remi").style.opacity = ".5";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_remi").style.opacity = "1";
        document.getElementById("svg_color2").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid") {
        document.getElementById("f_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_rocco").style.opacity = "1";
        document.getElementById("svg_color3").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#ffffff";
        document.getElementById("svg_color1ab").style.fill = "#ffffff";
        document.getElementById("svg_color1abc").style.fill = "#ffffff";
        addCurveCamila();
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = "1";
        document.getElementById("svg_color1a").style.fill = "#ffffff";
        document.getElementById("svg_color1ab").style.fill = "#ffffff";
        document.getElementById("svg_color1abc").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#ffffff";
        document.getElementById("svg_color2ab").style.fill = "#ffffff";
        document.getElementById("svg_color2abc").style.fill = "#ffffff";
        guitar.solidColor = "white";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".5";
        document.getElementById("color_curve_remi").style.opacity = "1";
        document.getElementById("svg_color2a").style.fill = "#ffffff";
        document.getElementById("svg_color2ab").style.fill = "#ffffff";
        document.getElementById("svg_color2abc").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "solid curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#ffffff";
        document.getElementById("svg_color3ab").style.fill = "#ffffff";
        document.getElementById("svg_color3abc").style.fill = "#ffffff";
        guitar.solidColor = "white";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "solid curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".5";
        document.getElementById("color_curve_rocco").style.opacity = "1";
        document.getElementById("svg_color3a").style.fill = "#ffffff";
        document.getElementById("svg_color3ab").style.fill = "#ffffff";
        document.getElementById("svg_color3abc").style.fill = "#ffffff";
        guitar.solidColor = "white";
        matchNeckColor();
    }
}

var bodyFinish = ["natural", "stained", "stained curves", "solid", "solid curves", "textured"];
var solidColor = ["science blue", "burning orange", "roman coffee", "faded jade", "jungle green", "torch red", "lemon", "grape", "sherpa blue", "black", "white"];
var stainedColor = ["honey amber", "black", "dark walnut", "lemon yellow", "green", "purple", "red mahogany"];

/*
 FINISH:
 0 = natural
 1 = stained
 2 = solid

 3 = textured

 SOLID COLOR:
 0 = Science Blue #0066CC
 1 = Burning Orange #ff7034
 2 = Roman Coffee #795D4C
 3 = Faded Jade #427977
 4 = Jungle Green #29AB87
 5 = Torch Red #F90B1C
 6 = Lemon #FDE910
 7 = Grape #421C5A
 8 = Sherpa Blue #004950
 9 = Black
 10 = White

 STAINED COLOR:
 0 = Honey Amber
 1 = Black
 2 = Dark Walnut
 3 = Lemon Yellow
 4 = Green
 5 = Purple
 6 = Red Mahogany
 */

// ADD 0 = Honey Amber
function addStained0() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#7F5400";
        document.getElementById("svg_color1ab").style.fill = "#7F5400";
        document.getElementById("svg_color1abc").style.fill = "#7F5400";
        addCurveCamila();
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#7F5400";
        document.getElementById("svg_color1ab").style.fill = "#7F5400";
        document.getElementById("svg_color1abc").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#7F5400";
        document.getElementById("svg_color2ab").style.fill = "#7F5400";
        document.getElementById("svg_color2abc").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#7F5400";
        document.getElementById("svg_color2ab").style.fill = "#7F5400";
        document.getElementById("svg_color2abc").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#7F5400";
        document.getElementById("svg_color3ab").style.fill = "#7F5400";
        document.getElementById("svg_color3abc").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#7F5400";
        document.getElementById("svg_color3ab").style.fill = "#7F5400";
        document.getElementById("svg_color3abc").style.fill = "#7F5400";
        guitar.stainedColor = "honey amber";
        matchNeckColor();
    }
}

// ADD 1 = Black
function addStained1() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#000000";
        document.getElementById("svg_color1ab").style.fill = "#000000";
        document.getElementById("svg_color1abc").style.fill = "#000000";
        addCurveCamila();
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#000000";
        document.getElementById("svg_color1ab").style.fill = "#000000";
        document.getElementById("svg_color1abc").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#000000";
        document.getElementById("svg_color2ab").style.fill = "#000000";
        document.getElementById("svg_color2abc").style.fill = "#000000";
        guitar.stainedColor = "black";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#000000";
        document.getElementById("svg_color2ab").style.fill = "#000000";
        document.getElementById("svg_color2abc").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#000000";
        document.getElementById("svg_color3ab").style.fill = "#000000";
        document.getElementById("svg_color3abc").style.fill = "#000000";
        guitar.stainedColor = "black";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#000000";
        document.getElementById("svg_color3ab").style.fill = "#000000";
        document.getElementById("svg_color3abc").style.fill = "#000000";
        guitar.stainedColor = "black";
        matchNeckColor();
    }
}

// ADD 2 = Dark Walnut
function addStained2() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#42201E";
        document.getElementById("svg_color1ab").style.fill = "#42201E";
        document.getElementById("svg_color1abc").style.fill = "#42201E";
        addCurveCamila();
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#42201E";
        document.getElementById("svg_color1ab").style.fill = "#42201E";
        document.getElementById("svg_color1abc").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#42201E";
        document.getElementById("svg_color2ab").style.fill = "#42201E";
        document.getElementById("svg_color2abc").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#42201E";
        document.getElementById("svg_color2ab").style.fill = "#42201E";
        document.getElementById("svg_color2abc").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#42201E";
        document.getElementById("svg_color3ab").style.fill = "#42201E";
        document.getElementById("svg_color3abc").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#42201E";
        document.getElementById("svg_color3ab").style.fill = "#42201E";
        document.getElementById("svg_color3abc").style.fill = "#42201E";
        guitar.stainedColor = "dark walnut";
        matchNeckColor();
    }
}

// ADD 3 = Lemon Yellow
function addStained3() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".4";
        document.getElementById("svg_color1").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".4";
        document.getElementById("svg_color1").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".4";
        document.getElementById("svg_color2").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".4";
        document.getElementById("svg_color2").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".4";
        document.getElementById("svg_color3").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".4";
        document.getElementById("svg_color3").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#FFDE53";
        document.getElementById("svg_color1ab").style.fill = "#FFDE53";
        document.getElementById("svg_color1abc").style.fill = "#FFDE53";
        addCurveCamila();
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#FFDE53";
        document.getElementById("svg_color1ab").style.fill = "#FFDE53";
        document.getElementById("svg_color1abc").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#FFDE53";
        document.getElementById("svg_color2ab").style.fill = "#FFDE53";
        document.getElementById("svg_color2abc").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#FFDE53";
        document.getElementById("svg_color2ab").style.fill = "#FFDE53";
        document.getElementById("svg_color2abc").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#FFDE53";
        document.getElementById("svg_color3ab").style.fill = "#FFDE53";
        document.getElementById("svg_color3abc").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#FFDE53";
        document.getElementById("svg_color3ab").style.fill = "#FFDE53";
        document.getElementById("svg_color3abc").style.fill = "#FFDE53";
        guitar.stainedColor = "lemon yellow";
        matchNeckColor();
    }
}


// ADD 4 = Green
function addStained4() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = ".2";
        document.getElementById("svg_color1a").style.fill = "#00A63E";
        document.getElementById("svg_color1ab").style.fill = "#00A63E";
        document.getElementById("svg_color1abc").style.fill = "#00A63E";
        addCurveCamila();
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#00A63E";
        document.getElementById("svg_color1ab").style.fill = "#00A63E";
        document.getElementById("svg_color1abc").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#00A63E";
        document.getElementById("svg_color2ab").style.fill = "#00A63E";
        document.getElementById("svg_color2abc").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#00A63E";
        document.getElementById("svg_color2ab").style.fill = "#00A63E";
        document.getElementById("svg_color2abc").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#00A63E";
        document.getElementById("svg_color3ab").style.fill = "#00A63E";
        document.getElementById("svg_color3abc").style.fill = "#00A63E";
        guitar.stainedColor = "black";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#00A63E";
        document.getElementById("svg_color3ab").style.fill = "#00A63E";
        document.getElementById("svg_color3abc").style.fill = "#00A63E";
        guitar.stainedColor = "green";
        matchNeckColor();
    }
}

// ADD 5 = Purple
function addStained5() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = ".2";
        document.getElementById("svg_color1a").style.fill = "#692BC2";
        document.getElementById("svg_color1ab").style.fill = "#692BC2";
        document.getElementById("svg_color1abc").style.fill = "#692BC2";
        addCurveCamila();
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".5";
        document.getElementById("svg_color1a").style.fill = "#692BC2";
        document.getElementById("svg_color1ab").style.fill = "#692BC2";
        document.getElementById("svg_color1abc").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".5";
        document.getElementById("svg_color2a").style.fill = "#692BC2";
        document.getElementById("svg_color2ab").style.fill = "#692BC2";
        document.getElementById("svg_color2abc").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".5";
        document.getElementById("svg_color2a").style.fill = "#692BC2";
        document.getElementById("svg_color2ab").style.fill = "#692BC2";
        document.getElementById("svg_color2abc").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#692BC2";
        document.getElementById("svg_color3ab").style.fill = "#692BC2";
        document.getElementById("svg_color3abc").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".5";
        document.getElementById("svg_color3a").style.fill = "#692BC2";
        document.getElementById("svg_color3ab").style.fill = "#692BC2";
        document.getElementById("svg_color3abc").style.fill = "#692BC2";
        guitar.stainedColor = "purple";
        matchNeckColor();
    }
}

// ADD 6 = Red Mahogany
function addStained6() {
    clearBodyFinish();
    if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_camila").style.opacity = ".2";
        document.getElementById("color_camila").style.opacity = ".5";
        document.getElementById("svg_color1").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_remi").style.opacity = ".2";
        document.getElementById("color_remi").style.opacity = ".5";
        document.getElementById("svg_color2").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained") {
        document.getElementById("f_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained") {
        document.getElementById("c_overlay_rocco").style.opacity = ".2";
        document.getElementById("color_rocco").style.opacity = ".5";
        document.getElementById("svg_color3").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") {  //changes body profile to curved below
        document.getElementById("c_overlay_camila").style.opacity = ".5";
        document.getElementById("color_curve_camila").style.opacity = ".2";
        document.getElementById("svg_color1a").style.fill = "#DB1300";
        document.getElementById("svg_color1ab").style.fill = "#DB1300";
        document.getElementById("svg_color1abc").style.fill = "#DB1300";
        addCurveCamila();
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "camila" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_camila").style.opacity = ".4";
        document.getElementById("color_curve_camila").style.opacity = ".4";
        document.getElementById("svg_color1a").style.fill = "#DB1300";
        document.getElementById("svg_color1ab").style.fill = "#DB1300";
        document.getElementById("svg_color1abc").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#DB1300";
        document.getElementById("svg_color2ab").style.fill = "#DB1300";
        document.getElementById("svg_color2abc").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        addCurveRemi();
        matchNeckColor();
    } else if (guitar.template === "remi" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_remi").style.opacity = ".4";
        document.getElementById("color_curve_remi").style.opacity = ".4";
        document.getElementById("svg_color2a").style.fill = "#DB1300";
        document.getElementById("svg_color2ab").style.fill = "#DB1300";
        document.getElementById("svg_color2abc").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "flat" && guitar.bodyFinish === "stained curves") { //changes body profile to curved below
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#DB1300";
        document.getElementById("svg_color3ab").style.fill = "#DB1300";
        document.getElementById("svg_color3abc").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        addCurveRocco();
        matchNeckColor();
    } else if (guitar.template === "rocco" && guitar.profile === "curved" && guitar.bodyFinish === "stained curves") {
        document.getElementById("c_overlay_rocco").style.opacity = ".4";
        document.getElementById("color_curve_rocco").style.opacity = ".4";
        document.getElementById("svg_color3a").style.fill = "#DB1300";
        document.getElementById("svg_color3ab").style.fill = "#DB1300";
        document.getElementById("svg_color3abc").style.fill = "#DB1300";
        guitar.stainedColor = "red mahogany";
        matchNeckColor();
    }
}

function addSolidBodyFinish() {
    if (guitar.template !== undefined && guitar.profile !== undefined && guitar.bodyWood !== undefined) {
        guitar.bodyFinish = "solid";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.bodyWood === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodPageAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    }
}


function addSolidCurvesBodyFinish() {
    if (guitar.template !== undefined && guitar.profile !== undefined && guitar.bodyWood !== undefined) {
        guitar.bodyFinish = "solid curves";
        clearAlerts();
        document.getElementById("curveAccentsAlert").style.visibility = "visible";
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.bodyWood === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodPageAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    }
}

function addStainedBodyFinish() {
    if (guitar.template !== undefined && guitar.profile !== undefined && guitar.bodyWood !== undefined) {
        guitar.bodyFinish = "stained";
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        alert.bodyWood = "true";
    } else if (guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.bodyWood === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodPageAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    }
}

function addStainedCurvesBodyFinish() {
    if (guitar.template !== undefined && guitar.profile !== undefined && guitar.bodyWood !== undefined) {
        guitar.bodyFinish = "stained curves";
        clearAlerts();
        document.getElementById("curveAccentsAlert").style.visibility = "visible";
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.bodyWood === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodPageAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    }
}

/*
 FINISH:
 0 = natural
 1 = stained
 2 = solid

 3 = textured

 SOLID COLOR:
 0 = Science Blue #0066CC
 1 = Burning Orange #ff7034
 2 = Roman Coffee #795D4C
 3 = Faded Jade #427977
 4 = Jungle Green #29AB87
 5 = Torch Red #F90B1C
 6 = Lemon #FDE910
 7 = Grape #421C5A
 8 = Sherpa Blue #004950
 9 = Black
 10 = White

 STAINED COLOR:
 0 = Honey Amber #7F5400
 1 = Black
 2 = Dark Walnut #42201E
 3 = Lemon Yellow #FFDE53
 4 = Green #00A63E
 5 = Purple #692BC2
 6 = Red Mahogany #DB1300
 */

var texturedColor = ["camila one", "camila two", "remi one", "remi two", "rocco one", "rocco two"];

function addTextureTwo() {
    if (guitar.template !== undefined && guitar.profile !== undefined && guitar.bodyWood !== undefined) {
        delete guitar.stainedColor;
        delete guitar.solidColor;
        delete guitar.texturedColor;

        document.getElementById("f_overlay_camila").style.opacity = "0";
        document.getElementById("c_overlay_camila").style.opacity = "0";
        document.getElementById("color_camila").style.opacity = "0";
        document.getElementById("f_overlay_remi").style.opacity = "0";
        document.getElementById("c_overlay_remi").style.opacity = "0";
        document.getElementById("color_remi").style.opacity = "0";
        document.getElementById("f_overlay_rocco").style.opacity = "0";
        document.getElementById("c_overlay_rocco").style.opacity = "0";
        document.getElementById("color_rocco").style.opacity = "0";

        document.getElementById("color_curve_camila").style.opacity = "0";
        document.getElementById("color_curve_remi").style.opacity = "0";
        document.getElementById("color_curve_rocco").style.opacity = "0";

        document.getElementById("c_texture_wood").style.opacity = "0";
        document.getElementById("c_texture_metal").style.opacity = "0";
        document.getElementById("re_texture_m1").style.opacity = "0";
        document.getElementById("re_texture_m2").style.opacity = "0";
        document.getElementById("ro_texture_m1").style.opacity = "0";
        document.getElementById("ro_texture_m2").style.opacity = "0";

        if (guitar.template === "camila") {
            document.getElementById("f_overlay_camila").style.opacity = "1";
            document.getElementById("c_texture_metal").style.opacity = "1";

            guitar.texturedColor = "camila two";

            addFlatCamila();
        } else if (guitar.template === "remi") {
            document.getElementById("f_overlay_remi").style.opacity = "1";
            document.getElementById("re_texture_m2").style.opacity = "1";

            guitar.texturedColor = "remi two";

            addFlatRemi();
        } else if (guitar.template === "rocco") {
            document.getElementById("f_overlay_rocco").style.opacity = "1";
            document.getElementById("ro_texture_m2").style.opacity = "1";

            guitar.texturedColor = "rocco two";

            addFlatRocco();
        }

        clearAlerts();
        document.getElementById("textureAlert").style.visibility = "visible";
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.bodyWood === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodPageAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    }
}

function addTextureOne() {
    if (guitar.template !== undefined && guitar.profile !== undefined && guitar.bodyWood !== undefined) {
        delete guitar.stainedColor;
        delete guitar.solidColor;
        delete guitar.texturedColor;

        document.getElementById("f_overlay_camila").style.opacity = "0";
        document.getElementById("c_overlay_camila").style.opacity = "0";
        document.getElementById("color_camila").style.opacity = "0";
        document.getElementById("f_overlay_remi").style.opacity = "0";
        document.getElementById("c_overlay_remi").style.opacity = "0";
        document.getElementById("color_remi").style.opacity = "0";
        document.getElementById("f_overlay_rocco").style.opacity = "0";
        document.getElementById("c_overlay_rocco").style.opacity = "0";
        document.getElementById("color_rocco").style.opacity = "0";

        document.getElementById("color_curve_camila").style.opacity = "0";
        document.getElementById("color_curve_remi").style.opacity = "0";
        document.getElementById("color_curve_rocco").style.opacity = "0";

        document.getElementById("c_texture_wood").style.opacity = "0";
        document.getElementById("c_texture_metal").style.opacity = "0";
        document.getElementById("re_texture_m1").style.opacity = "0";
        document.getElementById("re_texture_m2").style.opacity = "0";
        document.getElementById("ro_texture_m1").style.opacity = "0";
        document.getElementById("ro_texture_m2").style.opacity = "0";

        if (guitar.template === "camila") {
            document.getElementById("f_overlay_camila").style.opacity = "1";
            document.getElementById("c_texture_wood").style.opacity = "1";

            guitar.texturedColor = "camila one";

            addFlatCamila();
        } else if (guitar.template === "remi") {
            document.getElementById("f_overlay_remi").style.opacity = "1";
            document.getElementById("re_texture_m1").style.opacity = "1";

            guitar.texturedColor = "remi one";

            addFlatRemi();
        } else if (guitar.template === "rocco") {
            document.getElementById("f_overlay_rocco").style.opacity = "1";
            document.getElementById("ro_texture_m1").style.opacity = "1";

            guitar.texturedColor = "rocco one";

            addFlatRocco();
        }
        clearAlerts();
        document.getElementById("textureAlert").style.visibility = "visible";
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    } else if (guitar.profile === undefined) {
        clearAlerts();
        document.getElementById("bodyProfileAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    } else if (guitar.bodyWood === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodPageAlert").style.visibility = "visible";
        alert.bodyProfile = "true";
    }
}

// ADD COLOR TO HEADSTOCK
var neckAccentColor = ["same as body color", "black", "white", "ebony clay"];

function addBlackNeckColor() {
    if (guitar.template !== undefined) {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#000";
        guitar.neckAccentColor = "black";
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addWhiteNeckColor() {
    if (guitar.template !== undefined) {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#fff";
        guitar.neckAccentColor = "white";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function addEbonyClayNeckColor() {
    if (guitar.template !== undefined) {
        document.getElementById("neck_color_fill").style.opacity = "1";
        document.getElementById("neck_color_fill").style.fill = "#2D3543";
        guitar.neckAccentColor = "ebony clay";
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

function removeNeckColor() {
    if (guitar.template !== undefined) {
        document.getElementById("neck_color_fill").style.opacity = "0";
        delete guitar.neckAccentColor;
        clearAlerts();
    } else if (guitar.template === undefined) {
        clearAlerts();
        document.getElementById("bodyWoodAlert").style.visibility = "visible";
        alert.bodyWood = "true";
    }
}

//FUNCTION TO TEST IF GUITAR IS FIXED
function testComplete() {
    if (
        guitar.template !== undefined && guitar.profile !== undefined && guitar.bodyWood !== undefined && guitar.neckWood !== undefined && guitar.fretboardWood !== undefined &&
        guitar.frets !== undefined && guitar.inlays !== undefined && guitar.tuners !== undefined && guitar.bridge !== undefined && guitar.bridgePickupRing !== undefined &&
        guitar.neckPickupRing !== undefined && guitar.knobSwitchStyle !== undefined &&
        guitar.strapButtonStyle !== undefined
    ) {
        guitar.complete = true;
        document.getElementById("toCompleteAlert").style.visibility = "hidden";
    } else {
        guitar.complete = false;
        fixGuitar();
        document.getElementById("toCompleteAlert").style.visibility = "visible";
    }
}

//FUNCTION TO ADD STRINGS & BRANDING IF COMPLETE
function finalTouch() {
    if (guitar.complete === true) {
        document.getElementById("guitar_strings").style.opacity = "1";

        if (guitar.template === "camila") {
            document.getElementById("branding_camila").style.opacity = "1";
            document.getElementById("branding_remi").style.opacity = "0";
            document.getElementById("branding_rocco").style.opacity = "0";
        } else if (guitar.template === "remi") {
            document.getElementById("branding_remi").style.opacity = "1";
            document.getElementById("branding_rocco").style.opacity = "0";
            document.getElementById("branding_camila").style.opacity = "0";
        } else if (guitar.template === "rocco") {
            document.getElementById("branding_rocco").style.opacity = "1";
            document.getElementById("branding_remi").style.opacity = "0";
            document.getElementById("branding_camila").style.opacity = "0";
        }
        document.getElementById("dave").style.visibility = "visible";
        document.getElementById("dave").style.position = "relative";
        document.getElementById("completeAlert").style.visibility = "visible";
    } else if (guitar.complete === false) {
        return;
    }
}

//FUNCTION TO COMPLETE GUITAR OR SHOW HOW TO COMPLETE IT
function completeOrFix() {
    clearAlerts();
    testComplete();
    finalTouch();
}


//RANDOM NUMBER FUNCTION

function numberSelect(n) {
    var choices = n,
        randomNumber = Math.floor(Math.random() * choices) + 1;
}

//RANDOM GUITAR
function randomTemplate() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addCamila();
    } else if (x === 2) {
        addRemi();
    } else if (x === 3) {
        addRocco();
    }
}

function randomProfile() {
    var choices = 2,
        x = Math.floor(Math.random() * choices) + 1;

    if (guitar.template === "camila") {
        if (x === 1) {
            addFlatCamila();
        } else if (x === 2) {
            addCurveCamila();
        }
    } else if (guitar.template === "remi") {
        if (x === 1) {
            addFlatRemi();
        } else if (x === 2) {
            addCurveRemi();
        }
    } else if (guitar.template === "rocco") {
        if (x === 1) {
            addFlatRocco();
        } else if (x === 2) {
            addCurveRocco();
        }
    }
}

function randomBodyWood() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;
    if (x === 1) {
        addMahogany();
    } else if (x === 2) {
        addPrimavera();
    } else if (x === 3) {
        addSwampAsh();
    }
}

function randomNeckWood() {
    var choices = 2,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addMaple();
    } else if (x === 2) {
        addCurlyMaple();
    }
}

function randomFretWood() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;
    if (x === 1) {
        addFretRosewood();
    } else if (x === 2) {
        addFretMaple();
    } else if (x === 3) {
        addFretEbony();
    }
}

function randomFrets() {
    var choices = 2,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addChromeFrets();
    } else if (x === 2) {
        addGoldFrets();
    }
}

function randomInlays() {
    var choices = 6,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addBoxMotherInlay();
    } else if (x === 2) {
        addBoxLapisInlay();
    } else if (x === 3) {
        addBoxAbaloneInlay();
    } else if (x === 4) {
        addTriMotherInlay();
    } else if (x === 5) {
        addTriLapisInlay();
    } else if (x === 6) {
        addTriAbaloneInlay();
    }
}

function randomTuners() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addChromeTuners();
    } else if (x === 2) {
        addGoldTuners();
    } else if (x === 3) {
        addBlackTuners();
    }
}

function randomBridge() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addChromeBridge();
    } else if (x === 2) {
        addGoldBridge();
    } else if (x === 3) {
        addBlackBridge();
    }
}

function randomPickup() {
    var choices = 12,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addChromeBRing();
        addChromeBCover();
        addFromBridgePickup();
    } else if (x === 2) {
        addChromeBRing();
        addBlackBCover();
        addFromBridgePickup();
    } else if (x === 3) {
        addChromeBRing();
        addGoldBCover();
        addFromBridgePickup();
    } else if (x === 4) {
        addChromeBRing();
        removeBCover();
        addFromBridgePickup();
    } else if (x === 5) {
        addBlackBRing();
        addChromeBCover();
        addFromBridgePickup();
    } else if (x === 6) {
        addBlackBRing();
        addBlackBCover();
        addFromBridgePickup();
    } else if (x === 7) {
        addBlackBRing();
        addGoldBCover();
        addFromBridgePickup();
    } else if (x === 8) {
        addBlackBRing();
        removeBCover();
        addFromBridgePickup();
    } else if (x === 9) {
        addGoldBRing();
        addChromeBCover();
        addFromBridgePickup();
    } else if (x === 10) {
        addGoldBRing();
        addBlackBCover();
        addFromBridgePickup();
    } else if (x === 11) {
        addGoldBRing();
        addGoldBCover();
        addFromBridgePickup();
    } else if (x === 12) {
        addGoldBRing();
        removeBCover();
        addFromBridgePickup();
    }
}

function randomControlStyle() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addChromeControl();
    } else if (x === 2) {
        addGoldControl();
    } else if (x === 3) {
        addBlackControl();
    }
}

function randomKnob() {
    var choices = 2,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addSpeed();
    } else if (x === 2) {
        addDome();
    }
}

function randomSwitch() {
    var choices = 2,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addSlide();
    } else if (x === 2) {
        addToggle();
    }
}

function randomOrientation() {
    var choices = 2,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addConfigOne();
    } else if (x === 2) {
        addConfigTwo();
    }
}

function randomStrapStyle() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addChromeStrap();
    } else if (x === 2) {
        addGoldStrap();
    } else if (x === 3) {
        addBlackStrap();
    }
}

function randomStrapType() {
    var choices = 2,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addStandardStrap();
    } else if (x === 2) {
        addLockingStrap();
    }
}

function randomJackStyle() {
    var choices = 3,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addChromeJack();
    } else if (x === 2) {
        addGoldJack();
    } else if (x === 3) {
        addBlackJack();
    }
}

function randomJackType() {
    var choices = 4,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addFrontJack();
    } else if (x === 2) {
        addSideJack();
        document.getElementById("lowProfileAlert").style.visibility = "hidden";
    } else if (x === 3) {
        addSideJack();
        document.getElementById("lowProfileAlert").style.visibility = "hidden";
    } else if (x === 4) {
        addSideJack();
        document.getElementById("lowProfileAlert").style.visibility = "hidden";
    }
}

function randomJackType() {
    var choices = 4,
        x = Math.floor(Math.random() * choices) + 1;

    if (x === 1) {
        addFrontJack();
    } else if (x === 2) {
        addSideJack();
        document.getElementById("lowProfileAlert").style.visibility = "hidden";
    } else if (x === 3) {
        addSideJack();
        document.getElementById("lowProfileAlert").style.visibility = "hidden";
    } else if (x === 4) {
        addSideJack();
        document.getElementById("lowProfileAlert").style.visibility = "hidden";
    }
}

function randomBodyFinish() {
    var choices = 100,
        x = Math.floor(Math.random() * choices) + 1,
        select = 14,
        s;

    if (x <= 40) {
        addNaturalFinish();
    } else if (x >= 41 && x <= 55) {

        s = Math.floor(Math.random() * select) + 1;

        if (s === 1) {
            addStainedBodyFinish();
            addStained0();
        } else if (s === 2) {
            addStainedBodyFinish();
            addStained1();
        } else if (s === 3) {
            addStainedBodyFinish();
            addStained2();
        } else if (s === 4) {
            addStainedBodyFinish();
            addStained3();
        } else if (s === 5) {
            addStainedBodyFinish();
            addStained4();
        } else if (s === 6) {
            addStainedBodyFinish();
            addStained5();
        } else if (s === 7) {
            addStainedBodyFinish();
            addStained6();
        } else if (s === 8) {
            addStainedCurvesBodyFinish();
            addStained0();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 9) {
            addStainedCurvesBodyFinish();
            addStained1();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 10) {
            addStainedCurvesBodyFinish();
            addStained2();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 11) {
            addStainedCurvesBodyFinish();
            addStained3();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 12) {
            addStainedCurvesBodyFinish();
            addStained4();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 13) {
            addStainedCurvesBodyFinish();
            addStained5();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 14) {
            addStainedCurvesBodyFinish();
            addStained6();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        }
    } else if (x >= 56 && x <= 90) {
        select = 22;
        s = Math.floor(Math.random() * select) + 1;
        if (s === 1) {
            addSolidBodyFinish();
            addSolid0();
        } else if (s === 2) {
            addSolidBodyFinish();
            addSolid1();
        } else if (s === 3) {
            addSolidBodyFinish();
            addSolid2();
        } else if (s === 4) {
            addSolidBodyFinish();
            addSolid3();
        } else if (s === 5) {
            addSolidBodyFinish();
            addSolid4();
        } else if (s === 6) {
            addSolidBodyFinish();
            addSolid5();
        } else if (s === 7) {
            addSolidBodyFinish();
            addSolid6();
        } else if (s === 8) {
            addSolidBodyFinish();
            addSolid7();
        } else if (s === 9) {
            addSolidBodyFinish();
            addSolid8();
        } else if (s === 10) {
            addSolidBodyFinish();
            addSolid9();
        } else if (s === 11) {
            addSolidBodyFinish();
            addSolid10();
        } else if (s === 12) {
            addSolidCurvesBodyFinish();
            addSolid0();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 13) {
            addSolidCurvesBodyFinish();
            addSolid1();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 14) {
            addSolidCurvesBodyFinish();
            addSolid2();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 15) {
            addSolidCurvesBodyFinish();
            addSolid3();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 16) {
            addSolidCurvesBodyFinish();
            addSolid4();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 17) {
            addSolidCurvesBodyFinish();
            addSolid5();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 18) {
            addSolidCurvesBodyFinish();
            addSolid6();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 19) {
            addSolidCurvesBodyFinish();
            addSolid7();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 20) {
            addSolidCurvesBodyFinish();
            addSolid8();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 21) {
            addSolidCurvesBodyFinish();
            addSolid9();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        } else if (s === 22) {
            addSolidCurvesBodyFinish();
            addSolid10();
            document.getElementById("curveAccentsAlert").style.visibility = "hidden";
        }

    } else if (x >= 91 && x <= 100) {
        select = 2;
        s = Math.floor(Math.random() * select) + 1;
        if (s === 1) {
            addTextureOne();
            document.getElementById("textureAlert").style.visibility = "hidden";
        } else if (s === 2) {
            addTextureTwo();
            document.getElementById("textureAlert").style.visibility = "hidden";
        }
    }
}

function randomNeckCurve() {
    var choices = 100,
        x = Math.floor(Math.random() * choices) + 1;

    if (x <= 50) {
        addNeckColor();
    } else if (x >= 51 && x <= 65) {
        addBlackNeckColor();
    } else if (x >= 66 && x <= 80) {
        addWhiteNeckColor();
    } else if (x >= 81 && x <= 90) {
        addEbonyClayNeckColor();
    } else if (x >= 91 && x <= 100) {
        addEbonyClayNeckColor();
    }
}

function randomGuitar() {
    randomNeckWood();
    randomTemplate();
    randomProfile();
    randomBodyWood();
    randomFretWood();
    randomFrets();
    randomInlays();
    randomTuners();
    randomBridge();
    randomPickup();
    randomControlStyle();
    randomKnob();
    randomSwitch();
    randomStrapStyle();
    randomStrapType();
    randomJackStyle();
    randomJackType();
    randomBodyFinish();
    randomNeckCurve();
    completeOrFix();
}

//FUNCTION TO CLEAR COMPLETE ALERTS
function clearCompleteAlerts() {
    document.getElementById("dave").style.visibility = "hidden";
    document.getElementById("dave").style.position = "absolute";
    document.getElementById("completeAlert").style.visibility = "hidden";
}

//FUNCTION TO CLEAR STRINGS & BRANDING
function clearStringsBranding() {
    document.getElementById("branding_camila").style.opacity = "0";
    document.getElementById("branding_remi").style.opacity = "0";
    document.getElementById("branding_rocco").style.opacity = "0";
    document.getElementById("guitar_strings").style.opacity = "0";
}

//FUNCTION TO CLEAR ALL GUITAR PARTS
function clearGuitar() {
    randomGuitar();
    clearBody();
    clearNeck();
    clearBodyHarware();
    clearGuitarFinish();
    clearStringsBranding();
    clearCompleteAlerts();
    clearAlerts();
    delete guitar.complete;
    document.getElementById("r_logo").className = "logo_top";
}
