(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{228:function(e,t,a){"use strict";a.r(t);var s=a(28),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"restore-elasticsearch-data-dump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-elasticsearch-data-dump"}},[e._v("#")]),e._v(" Restore ElasticSearch data dump")]),e._v(" "),a("p",[e._v("To restore the data dumped with the "),a("code",[e._v("dump")]),e._v(" command please run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node scripts/cli.js restore --input=catalog.json\n")])])]),a("p",[e._v("By executing the ElasticSearch data restore, Storefront Cloud CLI will execute the following sequence of commands:")]),e._v(" "),a("ul",[a("li",[e._v("transfer the file using "),a("code",[e._v("kubectl cp")]),e._v(" to localhost,")]),e._v(" "),a("li",[e._v("use elasticdump to restore the data to the "),a("code",[e._v("var/catalog.json")]),e._v(" on the server,")])]),e._v(" "),a("img",{attrs:{src:"/doc/restore-command.png"}})])}),[],!1,null,null,null);t.default=r.exports}}]);