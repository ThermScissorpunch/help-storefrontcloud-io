(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{212:function(e,o,t){"use strict";t.r(o);var r=t(28),n=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"deploy-code-to-pod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-code-to-pod"}},[e._v("#")]),e._v(" Deploy code to POD")]),e._v(" "),t("p",[e._v("Storefront Cloud PODs are configured to deploy the code during the initialization procedure.\n"),t("strong",[e._v("Note:")]),e._v(" Please note that your code is available under "),t("a",{attrs:{href:"https://code.storefrontcloud.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storefront Cloud Code Access (Web+Git)"),t("OutboundLink")],1),e._v(" via the credentials provided by the Cloud Team.")]),e._v(" "),t("p",[e._v("That being said, the deployment = restart the POD. Our Kubernetes configuration works with zero-downtime configuration.")]),e._v(" "),t("p",[e._v("You may find two repositories in there:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io"}},[t("strong",[e._v("demo-storefrontcloud-io")])]),e._v(" - where the "),t("strong",[e._v("master")]),e._v(" branch is used to deploy the production frontend and the "),t("strong",[e._v("develop")]),e._v(" branch is used to deploy the test frontend,")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api"}},[t("strong",[e._v("demo-storefrontcloud-io-api")])]),e._v(" - where the "),t("strong",[e._v("master")]),e._v(" branch is used to deploy the production API and the "),t("strong",[e._v("develop")]),e._v(" branch is used to deploy the test API.")])]),e._v(" "),t("p",[e._v("The namespaces are bound to the public URL addresses:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io"}},[t("strong",[e._v("demo-storefrontcloud-io")])]),e._v(" is deployed under "),t("a",{attrs:{href:"https://demo.storefrontcloud.io"}},[e._v("demo.storefrontcloud.io")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://code.storefrontcloud.io/Divante/demo-storefrontcloud-io-api"}},[t("strong",[e._v("demo-storefrontcloud-io-api")])]),e._v(" is deployed under "),t("a",{attrs:{href:"https://demo.storefrontcloud.io/api"}},[e._v("demo.storefrontcloud.io/api")])])]),e._v(" "),t("p",[e._v("To deploy the changes to "),t("strong",[e._v("demo.storefrontcloud.io")]),e._v(" you may run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node scripts/cli.js deploy --pod=front\n")])])]),t("p",[e._v("To deploy the changes to "),t("strong",[e._v("demo.storefrontcloud.io/api")]),e._v(" you may run:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("node scripts/cli.js deploy --pod=api\n")])])]),t("p",[e._v("This command will execute the following sequence of steps:")]),e._v(" "),t("ul",[t("li",[e._v("create new instance of the selected role's container,")]),e._v(" "),t("li",[e._v("run the initialization + deployment procedure,")]),e._v(" "),t("li",[e._v("kill the old container whenever the new one is up and running,")]),e._v(" "),t("li",[e._v("select the new container as the default one.")])]),e._v(" "),t("img",{attrs:{src:"/doc/deploy-command.png"}})])}),[],!1,null,null,null);o.default=n.exports}}]);