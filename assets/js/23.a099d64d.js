(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{207:function(a,o,e){"use strict";e.r(o);var s=e(0),r=Object(s.a)({},function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"dados-nao-estruturados"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dados-nao-estruturados","aria-hidden":"true"}},[a._v("#")]),a._v(" Dados Não Estruturados")]),a._v(" "),e("p",[a._v("Para se trabalhar com dados não estruturas é necessário carregá-los num formato estruturado. A forma mais simples é utilizando a procedure "),e("strong",[a._v("IMPORT")]),a._v(" para carregar os dados em uma tabela SAS. O comando possui a seguinte sintaxe:")]),a._v(" "),e("p",[a._v('PROC IMPORT DATAFILE="caminho/nome-arquivo" DBMS=tipo-arquivo OUT=tabela-destino;\nRUN;')]),a._v(" "),e("p",[a._v("Onde:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("DATAFILE")]),a._v(" - Nome e o caminho completo para o arquivo;")]),a._v(" "),e("li",[e("strong",[a._v("DBMS")]),a._v(" - Define o tipo de arquivo que será lido;")]),a._v(" "),e("li",[e("strong",[a._v("OUT")]),a._v(" - Biblioteca e nome da tabela de saída que receberá os dados.")])]),a._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[a._v("Com o IMPORT importamos dados de arquivos com "),e("strong",[a._v("qualquer caracter")]),a._v(" delimitador.")])]),a._v(" "),e("h2",{attrs:{id:"identificadores-dbms-do-base-sas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#identificadores-dbms-do-base-sas","aria-hidden":"true"}},[a._v("#")]),a._v(" Identificadores DBMS do Base SAS")]),a._v(" "),e("ul",[e("li",[a._v("CSV - valores separados por  vírgula;")]),a._v(" "),e("li",[a._v("TAB - valores delimitado por tabulação;")]),a._v(" "),e("li",[a._v("DLM - arquivos delimitados, sendo o espaço o delimitador padrão. Para usar um caracter diferemte use a opção "),e("em",[a._v("DELIMITER=")])]),a._v(" "),e("li",[a._v("JMP - formato de arquivo criado pelo programa "),e("a",{attrs:{href:"http://support.sas.com/documentation/cdl/en/acpcref/63181/HTML/default/viewer.htm#n0y75b1x6ffm26n1mf5jgknkmr4t.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("JMP"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("h2",{attrs:{id:"identificadores-dbms-adicionais"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#identificadores-dbms-adicionais","aria-hidden":"true"}},[a._v("#")]),a._v(" Identificadores DBMS Adicionais")]),a._v(" "),e("p",[a._v('Estes identificadores estão disponíveis no pacote "SAS/ACCESS Interface to PC":')]),a._v(" "),e("ul",[e("li",[a._v("XLSX - Microsoft Excel 2007, 2010 e superior; e")]),a._v(" "),e("li",[a._v("ACCESS - Microsoft Access 2000 e os mais recentes.")])]),a._v(" "),e("h2",{attrs:{id:"as-opcoes-replace-e-guessingrows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#as-opcoes-replace-e-guessingrows","aria-hidden":"true"}},[a._v("#")]),a._v(" As opções REPLACE e GUESSINGROWS")]),a._v(" "),e("p",[a._v("Por padrão, o SAS interpreta que a primeira linha do arquivo possui o nome das colunas, mas podemos modificar a forma como os dados são interpretados pelo SAS adicionando parametros ao comando inicial:")]),a._v(" "),e("ul",[e("li",[a._v("Com "),e("strong",[a._v("REPLACE")]),a._v(", instruimos o SAS a substituir os dados da tabela destino:")])]),a._v(" "),e("p",[e("code",[a._v('PROC IMPORT DATAFILE="caminho/nome-arquivo" DBMS=ipo-arquivo OUT=tabela-destino\\<REPLACE\\>;')])]),a._v(" "),e("p",[e("code",[a._v("RUN;")])]),a._v(" "),e("ul",[e("li",[a._v("O SAS lê as primeiras 20 linhas do arquivo para descobrir os tiposde dados e tamanhos. Com "),e("strong",[a._v("GUESSINGROWS")]),a._v(", o instruimos para ler um número "),e("em",[a._v("n")]),a._v(" ou todas as linhas do arquivo com "),e("em",[a._v("MAX")]),a._v(":")])]),a._v(" "),e("p",[e("code",[a._v('PROC IMPORT DATAFILE="caminho/nome-arquivo" DBMS=ipo-arquivo OUT=tabela-destino \\<GUESSINGROWS=n|MAX;\\>;')])]),a._v(" "),e("p",[e("code",[a._v("RUN;")])]),a._v(" "),e("p",[a._v("Exemplo:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('proc import datafile="e:/analise/faturamento/data/inadimplentes_fev_2015-2018.csv"\n dbms=tab\n out=inadimplentes\n replace;\n guessingrows=max;\nrun;\n')])])]),e("h2",{attrs:{id:"importando-dados-do-excel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#importando-dados-do-excel","aria-hidden":"true"}},[a._v("#")]),a._v(" Importando dados do Excel")]),a._v(" "),e("p",[a._v("Ao trabalhar com bibliotecas LIBNAME com o Excel os programas que acessam os dados da planilha estarão usando os dados atuais. Em várias situações é necessário ter acesso aos dados congelados. Para tal, podemos fazer uma cópia da planilha com o PROC IMPORT.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('PROC IMPORT DATAFILE="caminho/nome-arquivo" \n            DBMS=XLSX\n            OUT=tabela-destino;\n            SHEET=nome-planilha;\nRUN;\n')])])]),e("div",{staticClass:"tip custom-block"},[e("p",[a._v("PROC IMPORT lê somente uma planilha por vez e por padrão, a primeira planilha do arquivo será copiada. Para selecionar uma planilha diferente, informe o noma da mesma com a opção "),e("em",[a._v("SHEET")])])])])},[],!1,null,null,null);o.default=r.exports}}]);