(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{436:function(a,e,o){"use strict";o.r(e);var _=o(42),i=Object(_.a)({},(function(){var a=this.$createElement,e=this._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"incorporacao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#incorporacao"}},[this._v("#")]),this._v(" Incorporação")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[this._v("Ao extrair os dados paa calcular a incorporação, observe que deve pegar a normalização no período compreendido entre o mês anterior ao início e um mÊs antes do término.\nPara extrr os dados de 2018:\n            select id_cdc, id_classe, id_localidade,                id_regional, id_tipo_instalacao, id_tipo_ligacao,                cod_nota, lote, acao,                mes_base, data_normalizacao, data_referencia,                nome_selecao, sist_origem, mercado,                desc_tipo_resultado, consumo_faturado, cn_1,                cmed_i, cmed_n_1, c_12,                ien_c, ien_m, ien_c12,                taxa_m, m200a, med,                smc, smi, smlc          from prj_cicop.ri_incorporacao         where data_normalizacao between '01/12/2017' and  '30/11/2018';\n            select trunc(data_referencia,'year'), sum(ien_c), sum(ien_m), sum(ien_c12)          from prj_cicop.ri_incorporacao         where data_normalizacao between '01/12/2017' and  '30/11/2018'         group by trunc(data_referencia,'year');\n        -- Gerar o TXT         select id_cdc||';'||id_classe||';'||id_localidade||';'||id_regional||';'||id_tipo_instalacao||';'||id_tipo_ligacao||';'||cod_nota||';'||                  lote||';'||acao||';'||mes_base||';'||data_normalizacao||';'||data_referencia||';'||nome_selecao||';'||sist_origem||';'||mercado||';'||                  desc_tipo_resultado||';'||consumo_faturado||';'||cn_1||';'||cmed_i||';'||cmed_n_1||';'||c_12||';'||ien_c||';'||ien_m||';'||ien_c12||';'||                  taxa_m||';'||m200a||';'||med||';'||smc||';'||smi||';'||smlc data          from prj_cicop.ri_incorporacao         where data_normalizacao between '01/12/2017' and  '30/11/2018';                UTL_File.Put_Line(arquivo_saida, 'ID_CDC;ID_CLASSE;ID_LOCALIDADE;ID_REGIONAL;ID_TIPO_INSTALACAO;ID_TIPO_LIGACAO;COD_NOTA;LOTE;ACAO;MES_BASE;DATA_NORMALIZACAO;DATA_REFERENCIA;NOME_SELECAO;SIST_ORIGEM;MERCADO;DESC_TIPO_RESULTADO;CONSUMO_FATURADO;CN_1;CMED_I;CMED_N_1;C_12;IEN_C;IEN_M;IEN_C12;TAXA_M;M200A;MED;SMC;SMI;SMLC');\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);