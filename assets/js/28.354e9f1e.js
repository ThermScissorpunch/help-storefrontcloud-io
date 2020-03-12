(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{224:function(t,e,o){"use strict";o.r(e);var s=o(28),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"command-line-access"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-line-access"}},[t._v("#")]),t._v(" Command Line Access")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/StorefrontCloud/storefrontcloud-cli",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[t._v("The Storefront Cloud CLI")]),o("OutboundLink")],1),t._v(" tool is designed to let you manage your Storefront Cloud namespaces. Most of the operations are available for the user as a self service. In case of any problems or custom needs, "),o("a",{attrs:{href:"mailto:support@storefrontcloud.io"}},[t._v("please contact the Helpdesk")])]),t._v(" "),o("p",[t._v("Shortly after you register your account on the "),o("a",{attrs:{href:"https://storefrontcloud.io"}},[t._v("storefrontcloud.io")]),t._v(" site, you should receive a contact request from the Cloud Team. Then after agreeing on the service terms and conditions, the Cloud Team will provide you with:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("kube.config")]),t._v(" file that you can paste or import to this tool for getting access to your Kubernetes cluster,")]),t._v(" "),o("li",[o("strong",[t._v("login and password")]),t._v(" to the "),o("a",{attrs:{href:"https://code.storefrontcloud.io"}},[t._v("Storefront Cloud Code Access")]),t._v(" portal.")])]),t._v(" "),o("p",[t._v("Here are the setup steps for getting access to your cloud:")]),t._v(" "),o("h4",{attrs:{id:"install-storefrontcloud-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-storefrontcloud-cli"}},[t._v("#")]),t._v(" Install storefrontcloud-cli")]),t._v(" "),o("p",[t._v("First, install "),o("code",[t._v("storefrontcloud-cli")]),t._v(" (requirements: "),o("code",[t._v("node 8.x+, yarn")]),t._v("):")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/StorefrontCloud/storefrontcloud-cli.git`\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" storefrontcloud-cli\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),o("h4",{attrs:{id:"setup-your-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-your-account"}},[t._v("#")]),t._v(" Setup your account:")]),t._v(" "),o("p",[t._v("Please do run:\n"),o("code",[t._v("node scripts/cli.js setup")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("The setup wizard will ask you first about the "),o("strong",[t._v("kube.config")]),t._v(" file. You can save the file received from the Cloud Team to your local file system (for example: "),o("strong",[t._v("~/.kube/config")]),t._v(" which is the default path) OR you can use your default system editor to paste the config content directly during the setup.")])]),t._v(" "),o("li",[o("p",[t._v("Then you have the option to use your existing "),o("a",{attrs:{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"}},[t._v("kubectl")]),t._v(" tool. If you haven't used it before the setup will download and install the tool to the current working directory.")])]),t._v(" "),o("li",[o("p",[t._v("The last question is about the default namespace. Please check the architecture diagram above. In our case, we provide the "),o("strong",[t._v("demo-storefrontcloud-io")]),t._v(" default namespace. That means that all subsequent calls will be made to the public instance of "),o("strong",[t._v("demo.storefrontcloud.io")]),t._v(" PODs. You can switch the default namespace by using the "),o("code",[t._v("node scripts/cli.js namespace")]),t._v(" command OR using the "),o("code",[t._v("--ns command")]),t._v(" which is supported by all cli commands.")])])]),t._v(" "),o("img",{attrs:{src:"/doc/setup.jpg"}})])}),[],!1,null,null,null);e.default=a.exports}}]);