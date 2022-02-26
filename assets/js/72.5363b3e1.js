(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{462:function(e,t,o){"use strict";o.r(t);var a=o(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"iis-asp-vb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iis-asp-vb"}},[e._v("#")]),e._v(" IIS, ASP, VB")]),e._v(" "),o("h2",{attrs:{id:"iniciando-parando-o-iis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iniciando-parando-o-iis"}},[e._v("#")]),e._v(" Iniciando / Parando o IIS")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('    * At the command prompt, type net stop WAS and press ENTER; type Y  and then press ENTER to also stop W3SVC.\n    net stop WAS\n    * To restart the Web server, type net start W3SVC and press ENTER to start both WAS and W3SVC.\n    net start W3SVC\n    Abrindo o IIS inetmgr.exe\nresponse.write\n    response.write "form_id_selecao_1=" & str("id_selecao")\n    Seu conteúdo...\n    response.write "form_id_selecao=" & cint(formatnumero(str("id_selecao"),0))\n    response.end\n')])])]),o("h2",{attrs:{id:"debug"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[e._v("#")]),e._v(" DEBUG")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("    using FUSLOGVW.EXE on a machine with no Visual Studio installed\n        One of those sticky production problems is when you are faced with a ‘Could not load file or assembly’ type problem and you do not have the .net SDK installed…so no fuslogvw.exe. Today I shown the following extract from StackOverflow\n        HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Fusion Add: DWORD ForceLog set value to 1 (DWORD ) LogFailures set value to 1 (DWORD) LogResourceBinds set value to 1 LogPath (String) set value to folder for logs ie) C:\\FusionLog\\\n        One thing to add is that after making those changes you’ll probably want to reset your process e.g. for a web sever (IISRESET), COM – shutdown application, etc. Then you can restart and look into the folder you entered for the LogPath.\n        Retorne os parametros para 0 (ZERO) no final\n")])])]),o("h2",{attrs:{id:"problema-de-conexao-do-ri"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#problema-de-conexao-do-ri"}},[e._v("#")]),e._v(" Problema de Conexão do RI")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("    o arquivo nao pode conter duas conexoes, mesmo comentada... ao que parece por favor, registrem isto em algum lugar --- http://stackoverflow.com/questions/2640526/detailed-500-error-message-asp-iis-7-5 --- https://support.microsoft.com/en-us/kb/296853\n")])])]),o("h2",{attrs:{id:"erros"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#erros"}},[e._v("#")]),e._v(" Erros")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("    The directory specified for caching compressed...\n        Erro: The directory specified for caching compressed content is invalid. Static compression is being disabled\n        http://technet.microsoft.com/en-us/library/cc735199(v=ws.10).aspx\n    The Web server is configured to not list the contents of this directory.\n        https://support.microsoft.com/pt-br/help/942062/-http-error-403.14---forbidden-error-when-you-open-an-iis-7.0-webpage\n")])])]),o("h3",{attrs:{id:"method-1-enable-the-directory-browsing-feature-in-iis-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method-1-enable-the-directory-browsing-feature-in-iis-recommended"}},[e._v("#")]),e._v(" Method 1: Enable the Directory Browsing feature in IIS (Recommended)")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("            To resolve this problem, follow these steps: Start IIS Manager. To do this, click Start, click Run, type inetmgr.exe, and then click OK. In IIS Manager, expand server name, expand Web sites, and then click the website that you want to modify. In the Features view, double-click Directory Browsing. In the Actions pane, click Enable.\n")])])]),o("h3",{attrs:{id:"method-2-add-a-default-document"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method-2-add-a-default-document"}},[e._v("#")]),e._v(" Method 2: Add a default document")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("            To resolve this problem, follow these steps: Start IIS Manager. To do this, click Start, click Run, type inetmgr.exe, and then click OK. In IIS Manager, expand server name, expand Web sites, and then click the website that you want to modify. In the Features view, double-click Default Document. In the Actions pane, click Enable. In the File Name box, type the name of the default document, and then click OK.\n")])])]),o("h3",{attrs:{id:"method-3-enable-the-directory-browsing-feature-in-iis-express"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#method-3-enable-the-directory-browsing-feature-in-iis-express"}},[e._v("#")]),e._v(" Method 3: Enable the Directory Browsing feature in IIS Express")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("            To do this, follow these steps: Open a command prompt, and then go to the IIS Express folder on your computer. For example, go to the following folder in a command prompt: C:\\Program Files\\IIS Express Type the following command, and then press Enter: appcmd set config /section:directoryBrowse /enabled:true For more information about the appcmd command, view How to use AppCmd.exe.\n                http://www.iis.net/learn/get-started/getting-started-with-iis/getting-started-with-appcmdexe\n")])])]),o("h3",{attrs:{id:"the-provider-is-not-compatible-with-the-version-of-oracle-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-provider-is-not-compatible-with-the-version-of-oracle-client"}},[e._v("#")]),e._v(" The provider is not compatible with the version of Oracle client")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("        Grab these dll's that were just unzipped: oci.dll (renamed from 'oci.dll.dbl') Oracle.DataAccess.dll oraociicus11.dll OraOps11w.dll orannzsbb11.dll oraocci11.dll ociw32.dll (renamed from 'ociw32.dll.dbl') Put all the DLLs in the same folder as your C# Executable\n        http://stackoverflow.com/questions/659341/the-provider-is-not-compatible-with-the-version-of-oracle-client\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);