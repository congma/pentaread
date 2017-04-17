/* pentaread -- Pentadactyl plugin interfacing Firefox's reader view.  See
 * embedded documentation.
 *
 * Installation:
 * 	Copy the .js and .penta (optional) files to ~/.pentadactyl/plugins/
 * 	The JavaScript file implements the :reader and :unreader commands,
 * 	and the command :togglereader to swith between the modes.
 * 	The .penta file creates key mappings in normal mode.
 *
 * Copyright:
 * 	Copyright (c) 2017, Cong Ma <cma@pmo.ac.cn>
 * 	All rights reserved.
 *
 * License:
 * 	BSD license <http://opensource.org/licenses/BSD-2-Clause>
 */

"use strict";


var readerhead = "about:reader?url=";


/* Return boolean: are we in reader mode? */
var reader_mode_p = function ()
{
    return buffer.documentURI.spec.startsWith(readerhead);
};

/* Go to reader view of current buffer (web page) */
var to_reader = function ()
{
    if ( buffer.documentURI.schemeIs("http") || 
	 buffer.documentURI.schemeIs("https") )
    {
	return dactyl.open("".concat(readerhead,
	    encodeURIComponent(buffer.documentURI.spec)));
    } else {
	return dactyl.echoerr("pentaread: error: URI scheme not applicable.");
    };
};

/* Go from reader view to normal web page view */
var from_reader = function ()
{
    if ( reader_mode_p() )
    {
	return dactyl.open(decodeURIComponent(
	    buffer.documentURI.spec.replace(readerhead, "")));
    } else {
	return dactyl.echoerr("pentaread: error: buffer not in reader mode.");
    };
};

/* Toggle reader mode */
var toggle_reader = function ()
{
    if ( reader_mode_p() )
	return from_reader();
    else
	return to_reader();
};


/* Pentadactyl commands */
group.commands.add(["reader"],
    "Go to reader view of current page.",
    to_reader,
    {"argcount": 0},
    true)

group.commands.add(["unreader"],
    "Go from reader view to web page.",
    from_reader,
    {"argcount": 0},
    true)

group.commands.add(["togglereader", "tr"],
    "Toggle reader view.",
    toggle_reader,
    {"argcount": 0},
    true)

/* Plugin manifest */
var INFO =
["plugin", {
    name:    "pentaread",
    version: "0.1",
    href:    "https://github.com/congma/pentaread/",
    summary: "pentaread - access Firefox reader mode from Pentadactyl",
    xmlns:   "dactyl"},

    ["author", {
	email:  "cma@pmo.ac.cn",
	href:   "https://cma.lamost.org/"}, "Cong Ma"],

    ["license", {href: "http://opensource.org/licenses/BSD-2-Clause"},
	"BSD License"],

    ["project", {name: "Pentadactyl", "min-version": "1.0" }],

    ["p", {},
	"The plugin ", ["str", {}, "pentaread"], " interfaes Firefox's ",
	" Reader View feature."],

    ["item", {},
	["tags", {}, ":reader"],
	["strut", {}],
	["spec", {}, ":reader"],
	["description", {},
	    ["p", {}, "Go to reader view of current web page."]]],

    ["item", {},
	["tags", {}, ":unreader"],
	["strut", {}],
	["spec", {}, ":unreader"],
	["description", {},
	    ["p", {}, "Go from reader view to web page."]]],

    ["item", {},
	["tags", {}, ":tr :togglereader"],
	["strut", {}],
	["spec", {}, ":togglereader"],
	["description", {},
	    ["p", {}, "Toggle reader view."],
	    ["p", {},
		"By default, this command is mapped to",
		" the key combo ", ["str", {}, ["k", {name: "Leader"}], "r"],
		":"],
	    ["code", {},
		["ex", {}, ":nmap"], " ", ["k", {name: "Leader"}],
		"r ", ["ex", {}, ":togglereader"], ["k", {name: "CR"}]]]]];
