(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{455:function(e,t,a){"use strict";a.r(t);var n=a(42),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"winsxs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#winsxs"}},[e._v("#")]),e._v(" WINSXS")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("    Windows 8.1, Windows Server 2012 R2\n        Deployment Image Servicing and Management (DISM.exe) is a command-line tool that allows you to install, uninstall, configure, and update Windows features, packages, drivers, and international settings. The /Cleanup-Image parameter of Dism.exe provides advanced users more options to further reduce the size of the WinSxS folder\n        dism.exe /Cleanup-Image\n")])])]),a("h2",{attrs:{id:"windows-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-8"}},[e._v("#")]),e._v(" Windows 8")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("        DISM/online/Cleanup-Image/SpSuperseded\n")])])]),a("h2",{attrs:{id:"windows-7-or-windows-server-2008-r2-service-pack-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-or-windows-server-2008-r2-service-pack-1"}},[e._v("#")]),e._v(" Windows 7 or Windows Server 2008 R2 Service Pack 1:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("DISM /online /Cleanup-Image /SpSuperseded\nDisk Cleanup Wizard (cleanmgr.exe)\n")])])]),a("p",[e._v('bat file to disable ethernet adaptor and then reenable it after windows log in\nnetsh interface set interface "Local Area Connection" DISABLED netsh interface set interface "Local Area Connection" ENABLED\nVisualizar arquivos no Explorer\nDescrição\nFor this article I\'m going to add .nfo files open up your registry editor by typing regedit in the start menu\'s run dialog and hit enter navigate your registry key tree to computer\\HKEY_CLASSES_ROOT.nfo You should see a string value named default, with a type of REG_SZ, and containing the data MSInfoFile.\nnow follow either the manual process or used the automated tool from the How-To Geek article above to add your custom file types to the preview pane. You only have to create two new string values and fill in their data in addition to that to get preview working for custom file types in Windows 7. Since I\'m trying to add a plain text file type to the preview pane I can take a file type that I know previews correctly say .txt files in my case, and make identical copies of the two string values which are missing from my computer\\HKEY_CLASSES_ROOT.nfo key. Those values being named "Content Type" and "PerceivedType" respectively. The Content Type string value should have the data of "text/plain", and the PerceivedType string value should have the data of "text"\ncomputer\\HKEY_CLASSES_ROOT.nfo\nValor da Cadeia de Carecteres\nContent Type\ntext/plain\nPerceivedType\ntext')])])}),[],!1,null,null,null);t.default=i.exports}}]);