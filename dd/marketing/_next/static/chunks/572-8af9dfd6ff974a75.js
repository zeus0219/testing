"use strict";

(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([[572], {
  25414: function (e, n, t) {
    var a = t(19453);
    let i = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-0"
      })(["color:", ";"], e => e.theme.colors.ui.black),
      r = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-1"
      })(["color:#fff;"]),
      o = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-2"
      })(["color:", ";"], e => e.theme.colors.labels.highlight),
      s = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-3"
      })(["color:", ";"], e => e.theme.colors.states.warning),
      c = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-4"
      })(["color:", ";"], e => e.theme.colors.labels.negative),
      l = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-5"
      })(["color:", ";"], e => e.theme.colors.labels.positive),
      u = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-6"
      })(["color:", ";"], e => e.theme.colors.actions.cta),
      m = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-7"
      })(["color:", ";"], e => e.theme.colors.actions.delete),
      d = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-8"
      })(["color:", ";"], e => e.theme.colors.states.idea),
      h = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-9"
      })(["color:", ";"], e => e.theme.colors.states.volume),
      p = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-10"
      })(["color:", ";"], e => e.theme.colors.states.live),
      g = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-11"
      })(["color:", ";"], e => e.theme.colors.states.inactive),
      f = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-12"
      })(["color:", ";"], e => e.theme.colors.ui.light),
      A = a.ZP.span.withConfig({
        componentId: "sc-433f5d66-13"
      })(["color:", ";"], e => e.value >= 0 ? e.theme.colors.labels.positive : e.theme.colors.labels.negative);
    n.Z = {
      Black: i,
      White: r,
      Warning: s,
      Highlight: o,
      Negative: c,
      Positive: l,
      CTA: u,
      Delete: m,
      Idea: d,
      Volume: h,
      Live: p,
      Inactive: g,
      Grey: f,
      Return: A
    };
  },
  57306: function (e, n, t) {
    t.d(n, {
      Z: function () {
        return i;
      }
    });
    var a = t(52322);
    function i(e) {
      return (0, a.jsx)(r, {
        gradient: e.gradient,
        children: e.children
      });
    }
    t(2784);
    let r = t(19453).ZP.span.withConfig({
      componentId: "sc-44f07702-0"
    })(["display:inline-block;background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;"], e => e.gradient ? e.gradient : "linear-gradient(90deg, #B3AEF5 0.41%, #D7CBE7 40.68%, #E5C8C8 64.12%, #EAA879 97.82%), #D9D9D9");
  },
  74831: function (e, n, t) {
    var a, i, r, o, s, c, l, u;
    t.d(n, {
      V_: function () {
        return h;
      },
      tn: function () {
        return g;
      },
      ah: function () {
        return p;
      }
    }), new (t(38219).Y)("Currency");
    let m = {
      USD: {
        key: "USD",
        name: "U.S Dollar",
        symbol: "$",
        countryCode: "US"
      }
    };
    (s = a || (a = {})).NorthAmerica = "North America", s.SouthAmerica = "South America", s.Europe = "Europe", s.Asia = "Asia", s.Africa = "Africa", s.Australia = "Australia", s.Other = "Other", (c = i || (i = {})).AC = "AC", c.AD = "AD", c.AE = "AE", c.AF = "AF", c.AG = "AG", c.AI = "AI", c.AL = "AL", c.AM = "AM", c.AN = "AN", c.AO = "AO", c.AQ = "AQ", c.AR = "AR", c.AS = "AS", c.AT = "AT", c.AU = "AU", c.AW = "AW", c.AZ = "AZ", c.BA = "BA", c.BB = "BB", c.BD = "BD", c.BE = "BE", c.BF = "BF", c.BG = "BG", c.BH = "BH", c.BI = "BI", c.BJ = "BJ", c.BM = "BM", c.BN = "BN", c.BO = "BO", c.BR = "BR", c.BS = "BS", c.BT = "BT", c.BV = "BV", c.BW = "BW", c.BY = "BY", c.BZ = "BZ", c.CA = "CA", c.CC = "CC", c.CD = "CD", c.CF = "CF", c.CG = "CG", c.CH = "CH", c.CI = "CI", c.CK = "CK", c.CL = "CL", c.CM = "CM", c.CN = "CN", c.CO = "CO", c.CR = "CR", c.CS = "CS", c.CU = "CU", c.CV = "CV", c.CX = "CX", c.CY = "CY", c.CZ = "CZ", c.DE = "DE", c.DJ = "DJ", c.DK = "DK", c.DM = "DM", c.DO = "DO", c.DZ = "DZ", c.EC = "EC", c.EE = "EE", c.EG = "EG", c.EH = "EH", c.ER = "ER", c.ES = "ES", c.ET = "ET", c.EU = "EU", c.FI = "FI", c.FJ = "FJ", c.FK = "FK", c.FM = "FM", c.FO = "FO", c.FR = "FR", c.GA = "GA", c.GB = "GB", c.GD = "GD", c.GE = "GE", c.GF = "GF", c.GG = "GG", c.GH = "GH", c.GI = "GI", c.GL = "GL", c.GM = "GM", c.GN = "GN", c.GP = "GP", c.GQ = "GQ", c.GR = "GR", c.GS = "GS", c.GT = "GT", c.GU = "GU", c.GW = "GW", c.GY = "GY", c.HK = "HK", c.HM = "HM", c.HN = "HN", c.HR = "HR", c.HT = "HT", c.HU = "HU", c.ID = "ID", c.IE = "IE", c.IL = "IL", c.IM = "IM", c.IN = "IN", c.IO = "IO", c.IQ = "IQ", c.IR = "IR", c.IS = "IS", c.IT = "IT", c.JE = "JE", c.JM = "JM", c.JO = "JO", c.JP = "JP", c.KE = "KE", c.KG = "KG", c.KH = "KH", c.KI = "KI", c.KM = "KM", c.KN = "KN", c.KP = "KP", c.KR = "KR", c.KW = "KW", c.KY = "KY", c.KZ = "KZ", c.LA = "LA", c.LB = "LB", c.LC = "LC", c.LI = "LI", c.LK = "LK", c.LR = "LR", c.LS = "LS", c.LT = "LT", c.LU = "LU", c.LV = "LV", c.LY = "LY", c.MA = "MA", c.MC = "MC", c.MD = "MD", c.MG = "MG", c.MH = "MH", c.MK = "MK", c.ML = "ML", c.MM = "MM", c.MN = "MN", c.MO = "MO", c.MP = "MP", c.MQ = "MQ", c.MR = "MR", c.MS = "MS", c.MT = "MT", c.MU = "MU", c.MV = "MV", c.MW = "MW", c.MX = "MX", c.MY = "MY", c.MZ = "MZ", c.NA = "NA", c.NC = "NC", c.NE = "NE", c.NF = "NF", c.NG = "NG", c.NI = "NI", c.NL = "NL", c.NO = "NO", c.NP = "NP", c.NR = "NR", c.NU = "NU", c.NZ = "NZ", c.OM = "OM", c.PA = "PA", c.PE = "PE", c.PF = "PF", c.PG = "PG", c.PH = "PH", c.PK = "PK", c.PL = "PL", c.PM = "PM", c.PN = "PN", c.PR = "PR", c.PS = "PS", c.PT = "PT", c.PW = "PW", c.PY = "PY", c.QA = "QA", c.RE = "RE", c.RO = "RO", c.RU = "RU", c.RW = "RW", c.SA = "SA", c.SB = "SB", c.SC = "SC", c.SD = "SD", c.SE = "SE", c.SG = "SG", c.SH = "SH", c.SI = "SI", c.SJ = "SJ", c.SK = "SK", c.SL = "SL", c.SM = "SM", c.SN = "SN", c.SO = "SO", c.SR = "SR", c.ST = "ST", c.SV = "SV", c.SY = "SY", c.SZ = "SZ", c.TC = "TC", c.TD = "TD", c.TF = "TF", c.TG = "TG", c.TH = "TH", c.TJ = "TJ", c.TK = "TK", c.TM = "TM", c.TN = "TN", c.TO = "TO", c.TP = "TP", c.TR = "TR", c.TT = "TT", c.TV = "TV", c.TW = "TW", c.TZ = "TZ", c.UA = "UA", c.UG = "UG", c.UM = "UM", c.US = "US", c.UY = "UY", c.UZ = "UZ", c.VA = "VA", c.VC = "VC", c.VE = "VE", c.VG = "VG", c.VI = "VI", c.VN = "VN", c.VU = "VU", c.WF = "WF", c.WS = "WS", c.YE = "YE", c.YT = "YT", c.ZA = "ZA", c.ZM = "ZM", c.ZW = "ZW";
    let d = {
      AC: {
        name: "Ascension Island",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      AD: {
        name: "Andorra",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      AE: {
        name: "United Arab Emirates",
        continent: "Asia",
        currency: "AED",
        aliases: []
      },
      AF: {
        name: "Afghanistan",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      AG: {
        name: "Antigua and Barbuda",
        continent: "North America",
        currency: "XCD",
        aliases: []
      },
      AI: {
        name: "Anguilla",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      AL: {
        name: "Albania",
        continent: "Europe",
        currency: "USD",
        aliases: []
      },
      AM: {
        name: "Armenia",
        continent: "Europe",
        currency: "AMD",
        aliases: []
      },
      AN: {
        name: "Netherlands Antilles",
        continent: "North America",
        currency: "ANG",
        aliases: []
      },
      AO: {
        name: "Angola",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      AQ: {
        name: "Antarctica",
        continent: "Other",
        currency: "USD",
        aliases: []
      },
      AR: {
        name: "Argentina",
        continent: "South America",
        currency: "ARS",
        aliases: []
      },
      AS: {
        name: "American Samoa",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      AT: {
        name: "Austria",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      AU: {
        name: "Australia",
        continent: "Australia",
        currency: "AUD",
        aliases: [],
        logo: "Australia.svg"
      },
      AW: {
        name: "Aruba",
        continent: "North America",
        currency: "AWG",
        aliases: []
      },
      AZ: {
        name: "Azerbaijan",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      BA: {
        name: "Bosnia and Herzegovina",
        continent: "Europe",
        currency: "USD",
        aliases: ["Bosnia And Herzegowina"]
      },
      BB: {
        name: "Barbados",
        continent: "North America",
        currency: "BBD",
        aliases: []
      },
      BD: {
        name: "Bangladesh",
        continent: "Asia",
        currency: "BDT",
        aliases: []
      },
      BE: {
        name: "Belgium",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      BF: {
        name: "Burkina Faso",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      BG: {
        name: "Bulgaria",
        continent: "Europe",
        currency: "BGN",
        aliases: []
      },
      BH: {
        name: "Bahrain",
        continent: "Asia",
        currency: "BHD",
        aliases: []
      },
      BI: {
        name: "Burundi",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      BJ: {
        name: "Benin",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      BM: {
        name: "Bermuda",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      BN: {
        name: "Brunei",
        continent: "Asia",
        currency: "BND",
        aliases: ["Brunei Darussalam"]
      },
      BO: {
        name: "Bolivia",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      BR: {
        name: "Brazil",
        continent: "South America",
        currency: "BRL",
        aliases: [],
        logo: "Brazil.svg"
      },
      BS: {
        name: "Bahamas",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      BT: {
        name: "Bhutan",
        continent: "Asia",
        currency: "BTN",
        aliases: []
      },
      BV: {
        name: "Bouvet Island",
        continent: "Other",
        currency: "USD",
        aliases: []
      },
      BW: {
        name: "Botswana",
        continent: "Africa",
        currency: "BWP",
        aliases: []
      },
      BY: {
        name: "Belarus",
        continent: "Europe",
        currency: "USD",
        aliases: []
      },
      BZ: {
        name: "Belize",
        continent: "North America",
        currency: "BZD",
        aliases: []
      },
      CA: {
        name: "Canada",
        continent: "North America",
        currency: "CAD",
        aliases: [],
        logo: "Canada.svg"
      },
      CC: {
        name: "Cocos Islands",
        continent: "Asia",
        currency: "USD",
        aliases: ["Cocos (Keeling) Islands"]
      },
      CD: {
        name: "Democratic Republic of the Congo",
        continent: "Africa",
        currency: "USD",
        aliases: ["Congo, Democratic People's Republic"]
      },
      CF: {
        name: "Central African Republic",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      CG: {
        name: "Republic of the Congo",
        continent: "Africa",
        currency: "USD",
        aliases: ["Congo"]
      },
      CH: {
        name: "Switzerland",
        continent: "Europe",
        currency: "CHF",
        aliases: [],
        logo: "Switzerland.svg"
      },
      CI: {
        name: "Ivory Coast",
        continent: "Africa",
        currency: "XOF",
        aliases: ["Cote d'Ivoire"]
      },
      CK: {
        name: "Cook Islands",
        continent: "Australia",
        currency: "NZD",
        aliases: []
      },
      CL: {
        name: "Chile",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      CM: {
        name: "Cameroon",
        continent: "Africa",
        currency: "XAF",
        aliases: []
      },
      CN: {
        name: "China",
        continent: "Asia",
        currency: "CNY",
        aliases: []
      },
      CO: {
        name: "Colombia",
        continent: "South America",
        currency: "COP",
        aliases: []
      },
      CR: {
        name: "Costa Rica",
        continent: "North America",
        currency: "CRC",
        aliases: []
      },
      CS: {
        name: "Serbia and Montenegro",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      CU: {
        name: "Cuba",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      CV: {
        name: "Cape Verde",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      CX: {
        name: "Christmas Island",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      CY: {
        name: "Cyprus",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      CZ: {
        name: "Czech Republic",
        continent: "Europe",
        currency: "CZK",
        aliases: []
      },
      DE: {
        name: "Germany",
        continent: "Europe",
        currency: "EUR",
        aliases: [],
        logo: "Germany.svg"
      },
      DJ: {
        name: "Djibouti",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      DK: {
        name: "Denmark",
        continent: "Europe",
        currency: "DKK",
        aliases: []
      },
      DM: {
        name: "Dominica",
        continent: "North America",
        currency: "XCD",
        aliases: []
      },
      DO: {
        name: "Dominican Republic",
        continent: "North America",
        currency: "DOP",
        aliases: []
      },
      DZ: {
        name: "Algeria",
        continent: "Africa",
        currency: "DZD",
        aliases: []
      },
      EC: {
        name: "Ecuador",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      EE: {
        name: "Estonia",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      EG: {
        name: "Egypt",
        continent: "Africa",
        currency: "EGP",
        aliases: []
      },
      EH: {
        name: "Western Sahara",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      ER: {
        name: "Eritrea",
        continent: "Africa",
        currency: "ERN",
        aliases: []
      },
      ES: {
        name: "Spain",
        continent: "Europe",
        currency: "EUR",
        aliases: [],
        logo: "Spain.svg"
      },
      ET: {
        name: "Ethiopia",
        continent: "Africa",
        currency: "ETB",
        aliases: []
      },
      EU: {
        name: "European Union",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      FI: {
        name: "Finland",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      FJ: {
        name: "Fiji",
        continent: "Australia",
        currency: "FJD",
        aliases: []
      },
      FK: {
        name: "Falkland Islands",
        continent: "South America",
        currency: "FKP",
        aliases: ["Falkland Islands (Malvinas)"]
      },
      FM: {
        name: "Micronesia",
        continent: "Australia",
        currency: "USD",
        aliases: ["Micronesia, Federated States Of"]
      },
      FO: {
        name: "Faroe Islands",
        continent: "Europe",
        currency: "DKK",
        aliases: []
      },
      FR: {
        name: "France",
        continent: "Europe",
        currency: "EUR",
        aliases: [],
        logo: "France.svg"
      },
      GA: {
        name: "Gabon",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      GB: {
        name: "United Kingdom",
        continent: "Europe",
        currency: "GBP",
        aliases: [],
        logo: "United-Kingdom.svg"
      },
      GD: {
        name: "Grenada",
        continent: "North America",
        currency: "XCD",
        aliases: []
      },
      GE: {
        name: "Georgia",
        continent: "Europe",
        currency: "USD",
        aliases: ["Georgia (Sakartvelo)"]
      },
      GF: {
        name: "French Guiana",
        continent: "South America",
        currency: "EUR",
        aliases: []
      },
      GG: {
        name: "Guernsey",
        continent: "Europe",
        currency: "GBP",
        aliases: []
      },
      GH: {
        name: "Ghana",
        continent: "Africa",
        currency: "GHC",
        aliases: []
      },
      GI: {
        name: "Gibraltar",
        continent: "Europe",
        currency: "GBP",
        aliases: []
      },
      GL: {
        name: "Greenland",
        continent: "North America",
        currency: "DKK",
        aliases: []
      },
      GM: {
        name: "Gambia",
        continent: "Africa",
        currency: "GMD",
        aliases: []
      },
      GN: {
        name: "Guinea",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      GP: {
        name: "Guadeloupe",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      GQ: {
        name: "Equatorial Guinea",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      GR: {
        name: "Greece",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      GS: {
        name: "South Georgia and the South Sandwich Islands",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      GT: {
        name: "Guatemala",
        continent: "North America",
        currency: "GTQ",
        aliases: []
      },
      GU: {
        name: "Guam",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      GW: {
        name: "Guinea-Bissau",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      GY: {
        name: "Guyana",
        continent: "South America",
        currency: "GYD",
        aliases: []
      },
      HK: {
        name: "Hong Kong",
        continent: "Asia",
        currency: "HKD",
        aliases: [],
        logo: "Hong-Kong.svg"
      },
      HM: {
        name: "Heard Island and McDonald Islands",
        continent: "Other",
        currency: "USD",
        aliases: ["Heard And Mc Donald Islands"]
      },
      HN: {
        name: "Honduras",
        continent: "North America",
        currency: "HNL",
        aliases: []
      },
      HR: {
        name: "Croatia",
        continent: "Europe",
        currency: "HRK",
        aliases: ["Croatia (local name: Hrvatska)"]
      },
      HT: {
        name: "Haiti",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      HU: {
        name: "Hungary",
        continent: "Europe",
        currency: "HUF",
        aliases: []
      },
      ID: {
        name: "Indonesia",
        continent: "Asia",
        currency: "IDR",
        aliases: []
      },
      IE: {
        name: "Ireland",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      IL: {
        name: "Israel",
        continent: "Asia",
        currency: "ILS",
        aliases: []
      },
      IM: {
        name: "Isle of Man",
        continent: "Europe",
        currency: "GBP",
        aliases: []
      },
      IN: {
        name: "India",
        continent: "Asia",
        currency: "INR",
        aliases: []
      },
      IO: {
        name: "British Indian Ocean Territory",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      IQ: {
        name: "Iraq",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      IR: {
        name: "Iran",
        continent: "Asia",
        currency: "IRR",
        aliases: ["Iran (Islamic Republic Of)"]
      },
      IS: {
        name: "Iceland",
        continent: "Europe",
        currency: "ISK",
        aliases: []
      },
      IT: {
        name: "Italy",
        continent: "Europe",
        currency: "EUR",
        aliases: [],
        logo: "Italy.svg"
      },
      JE: {
        name: "Jersey",
        continent: "Europe",
        currency: "GBP",
        aliases: ["Jersey (Island)"]
      },
      JM: {
        name: "Jamaica",
        continent: "North America",
        currency: "JMD",
        aliases: []
      },
      JO: {
        name: "Jordan",
        continent: "Asia",
        currency: "JOD",
        aliases: []
      },
      JP: {
        name: "Japan",
        continent: "Asia",
        currency: "JPY",
        aliases: [],
        logo: "Japan.svg"
      },
      KE: {
        name: "Kenya",
        continent: "Africa",
        currency: "KES",
        aliases: []
      },
      KG: {
        name: "Kyrgyzstan",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      KH: {
        name: "Cambodia",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      KI: {
        name: "Kiribati",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      KM: {
        name: "Comoros",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      KN: {
        name: "Saint Kitts and Nevis",
        continent: "North America",
        currency: "XCD",
        aliases: []
      },
      KP: {
        name: "North Korea",
        continent: "Asia",
        currency: "USD",
        aliases: ["Korea, Democratic People's Republic Of"]
      },
      KR: {
        name: "South Korea",
        continent: "Asia",
        currency: "KRW",
        aliases: ["Korea, Republic Of"]
      },
      KW: {
        name: "Kuwait",
        continent: "Asia",
        currency: "KWD",
        aliases: []
      },
      KY: {
        name: "Cayman Islands",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      KZ: {
        name: "Kazakhstan",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      LA: {
        name: "Laos",
        continent: "Asia",
        currency: "USD",
        aliases: ["Lao People's Democratic Republic"]
      },
      LB: {
        name: "Lebanon",
        continent: "Asia",
        currency: "LBP",
        aliases: []
      },
      LC: {
        name: "Saint Lucia",
        continent: "North America",
        currency: "XCD",
        aliases: []
      },
      LI: {
        name: "Liechtenstein",
        continent: "Europe",
        currency: "CHF",
        aliases: []
      },
      LK: {
        name: "Sri Lanka",
        continent: "Asia",
        currency: "LKR",
        aliases: []
      },
      LR: {
        name: "Liberia",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      LS: {
        name: "Lesotho",
        continent: "Africa",
        currency: "ZAR",
        aliases: []
      },
      LT: {
        name: "Lithuania",
        continent: "Europe",
        currency: "USD",
        aliases: []
      },
      LU: {
        name: "Luxembourg",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      LV: {
        name: "Latvia",
        continent: "Europe",
        currency: "USD",
        aliases: []
      },
      LY: {
        name: "Libya",
        continent: "Africa",
        currency: "USD",
        aliases: ["Libyan Arab Jamahiriya"]
      },
      MA: {
        name: "Morocco",
        continent: "Africa",
        currency: "MAD",
        aliases: []
      },
      MC: {
        name: "Monaco",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      MD: {
        name: "Moldova",
        continent: "Europe",
        currency: "USD",
        aliases: ["Moldova, Republic Of"]
      },
      MG: {
        name: "Madagascar",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      MH: {
        name: "Marshall Islands",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      MK: {
        name: "Macedonia",
        continent: "Europe",
        currency: "MKD",
        aliases: ["Macedonia, The Former Yugoslav Republic Of"]
      },
      ML: {
        name: "Mali",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      MM: {
        name: "Myanmar",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      MN: {
        name: "Mongolia",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      MO: {
        name: "Macao",
        continent: "Asia",
        currency: "MOP",
        aliases: ["Macau"]
      },
      MP: {
        name: "Northern Mariana Islands",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      MQ: {
        name: "Martinique",
        continent: "North America",
        currency: "EUR",
        aliases: []
      },
      MR: {
        name: "Mauritania",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      MS: {
        name: "Montserrat",
        continent: "North America",
        currency: "XCD",
        aliases: []
      },
      MT: {
        name: "Malta",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      MU: {
        name: "Mauritius",
        continent: "Africa",
        currency: "MUR",
        aliases: []
      },
      MV: {
        name: "Maldives",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      MW: {
        name: "Malawi",
        continent: "Africa",
        currency: "MWK",
        aliases: []
      },
      MX: {
        name: "Mexico",
        continent: "North America",
        currency: "MXN",
        aliases: [],
        logo: "Mexico.svg"
      },
      MY: {
        name: "Malaysia",
        continent: "Asia",
        currency: "MYR",
        aliases: []
      },
      MZ: {
        name: "Mozambique",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      NA: {
        name: "Namibia",
        continent: "Africa",
        currency: "NAD",
        aliases: []
      },
      NC: {
        name: "New Caledonia",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      NE: {
        name: "Niger",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      NF: {
        name: "Norfolk Island",
        continent: "Australia",
        currency: "AUD",
        aliases: []
      },
      NG: {
        name: "Nigeria",
        continent: "Africa",
        currency: "NGN",
        aliases: []
      },
      NI: {
        name: "Nicaragua",
        continent: "North America",
        currency: "NIO",
        aliases: []
      },
      NL: {
        name: "Netherlands",
        continent: "Europe",
        currency: "EUR",
        aliases: [],
        logo: "Netherlands.svg"
      },
      NO: {
        name: "Norway",
        continent: "Europe",
        currency: "NOK",
        aliases: []
      },
      NP: {
        name: "Nepal",
        continent: "Asia",
        currency: "NPR",
        aliases: []
      },
      NR: {
        name: "Nauru",
        continent: "Australia",
        currency: "AUD",
        aliases: []
      },
      NU: {
        name: "Niue",
        continent: "Australia",
        currency: "NZD",
        aliases: []
      },
      NZ: {
        name: "New Zealand",
        continent: "Australia",
        currency: "NZD",
        aliases: []
      },
      OM: {
        name: "Oman",
        continent: "Asia",
        currency: "OMR",
        aliases: []
      },
      PA: {
        name: "Panama",
        continent: "North America",
        currency: "PAB",
        aliases: []
      },
      PE: {
        name: "Peru",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      PF: {
        name: "French Polynesia",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      PG: {
        name: "Papua New Guinea",
        continent: "Australia",
        currency: "PGK",
        aliases: []
      },
      PH: {
        name: "Philippines",
        continent: "Asia",
        currency: "PHP",
        aliases: []
      },
      PK: {
        name: "Pakistan",
        continent: "Asia",
        currency: "PKR",
        aliases: []
      },
      PL: {
        name: "Poland",
        continent: "Europe",
        currency: "PLN",
        aliases: []
      },
      PM: {
        name: "Saint Pierre and Miquelon",
        continent: "North America",
        currency: "USD",
        aliases: ["St. Pierre And Miquelon"]
      },
      PN: {
        name: "Pitcairn",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      PR: {
        name: "Puerto Rico",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      PS: {
        name: "Palestinian Territory",
        continent: "Asia",
        currency: "USD",
        aliases: ["Palestinian Territories"]
      },
      PT: {
        name: "Portugal",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      PW: {
        name: "Palau",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      PY: {
        name: "Paraguay",
        continent: "South America",
        currency: "PYG",
        aliases: []
      },
      QA: {
        name: "Qatar",
        continent: "Asia",
        currency: "QAR",
        aliases: []
      },
      RE: {
        name: "Reunion",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      RO: {
        name: "Romania",
        continent: "Europe",
        currency: "USD",
        aliases: []
      },
      RU: {
        name: "Russia",
        continent: "Europe",
        currency: "RUB",
        aliases: []
      },
      RW: {
        name: "Rwanda",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      SA: {
        name: "Saudi Arabia",
        continent: "Asia",
        currency: "SAR",
        aliases: []
      },
      SB: {
        name: "Solomon Islands",
        continent: "Australia",
        currency: "SBD",
        aliases: []
      },
      SC: {
        name: "Seychelles",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      SD: {
        name: "Sudan",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      SE: {
        name: "Sweden",
        continent: "Europe",
        currency: "SEK",
        aliases: [],
        logo: "Sweden.svg"
      },
      SG: {
        name: "Singapore",
        continent: "Asia",
        currency: "SGD",
        aliases: []
      },
      SH: {
        name: "Saint Helena",
        continent: "Africa",
        currency: "USD",
        aliases: ["St. Helena"]
      },
      SI: {
        name: "Slovenia",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      SJ: {
        name: "Svalbard and Jan Mayen",
        continent: "Europe",
        currency: "USD",
        aliases: ["Svalbard And Jan Mayen Islands"]
      },
      SK: {
        name: "Slovakia",
        continent: "Europe",
        currency: "USD",
        aliases: ["Slovakia (Slovak Republic)"]
      },
      SL: {
        name: "Sierra Leone",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      SM: {
        name: "San Marino",
        continent: "Europe",
        currency: "EUR",
        aliases: []
      },
      SN: {
        name: "Senegal",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      SO: {
        name: "Somalia",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      SR: {
        name: "Suriname",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      ST: {
        name: "Sao Tome and Principe",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      SV: {
        name: "El Salvador",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      SY: {
        name: "Syria",
        continent: "Asia",
        currency: "SYP",
        aliases: ["Syrian Arab Republic"]
      },
      SZ: {
        name: "Swaziland",
        continent: "Africa",
        currency: "SZL",
        aliases: []
      },
      TC: {
        name: "Turks and Caicos Islands",
        continent: "North America",
        currency: "USD",
        aliases: []
      },
      TD: {
        name: "Chad",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      TF: {
        name: "French Southern Territories",
        continent: "Other",
        currency: "EUR",
        aliases: []
      },
      TG: {
        name: "Togo",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      TH: {
        name: "Thailand",
        continent: "Asia",
        currency: "THB",
        aliases: []
      },
      TJ: {
        name: "Tajikistan",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      TK: {
        name: "Tokelau",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      TM: {
        name: "Turkmenistan",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      TN: {
        name: "Tunisia",
        continent: "Africa",
        currency: "TND",
        aliases: []
      },
      TO: {
        name: "Tonga",
        continent: "Australia",
        currency: "TOP",
        aliases: []
      },
      TP: {
        name: "East Timor",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      TR: {
        name: "Turkey",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      TT: {
        name: "Trinidad and Tobago",
        continent: "North America",
        currency: "TTD",
        aliases: []
      },
      TV: {
        name: "Tuvalu",
        continent: "Australia",
        currency: "USD",
        aliases: []
      },
      TW: {
        name: "Taiwan",
        continent: "Asia",
        currency: "TWD",
        aliases: []
      },
      TZ: {
        name: "Tanzania",
        continent: "Africa",
        currency: "TZS",
        aliases: ["Tanzania, United Republic Of"]
      },
      UA: {
        name: "Ukraine",
        continent: "Europe",
        currency: "UAH",
        aliases: []
      },
      UG: {
        name: "Uganda",
        continent: "Africa",
        currency: "UGX",
        aliases: []
      },
      UM: {
        name: "United States Minor Outlying Islands",
        continent: "North America",
        currency: "USD",
        aliases: ["U.S. Minor Outlying Islands"]
      },
      US: {
        name: "USA",
        continent: "North America",
        currency: "USD",
        aliases: [],
        logo: "USA.svg"
      },
      UY: {
        name: "Uruguay",
        continent: "South America",
        currency: "USD",
        aliases: []
      },
      UZ: {
        name: "Uzbekistan",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      VA: {
        name: "Vatican",
        continent: "Europe",
        currency: "USD",
        aliases: ["Vatican City State (Holy See)"]
      },
      VC: {
        name: "Saint Vincent and the Grenadines",
        continent: "North America",
        currency: "XCD",
        aliases: []
      },
      VE: {
        name: "Venezuela",
        continent: "South America",
        currency: "VEB",
        aliases: []
      },
      VG: {
        name: "British Virgin Islands",
        continent: "North America",
        currency: "USD",
        aliases: ["Virgin Islands (British)"]
      },
      VI: {
        name: "U.S. Virgin Islands",
        continent: "North America",
        currency: "USD",
        aliases: ["Virgin Islands (U.S.)"]
      },
      VN: {
        name: "Vietnam",
        continent: "Asia",
        currency: "VND",
        aliases: []
      },
      VU: {
        name: "Vanuatu",
        continent: "Australia",
        currency: "VUV",
        aliases: []
      },
      WF: {
        name: "Wallis and Futuna",
        continent: "Australia",
        currency: "USD",
        aliases: ["Wallis And Futuna Islands"]
      },
      WS: {
        name: "Samoa",
        continent: "Australia",
        currency: "WST",
        aliases: []
      },
      YE: {
        name: "Yemen",
        continent: "Asia",
        currency: "USD",
        aliases: []
      },
      YT: {
        name: "Mayotte",
        continent: "Africa",
        currency: "EUR",
        aliases: []
      },
      ZA: {
        name: "South Africa",
        continent: "Africa",
        currency: "ZAR",
        aliases: []
      },
      ZM: {
        name: "Zambia",
        continent: "Africa",
        currency: "USD",
        aliases: []
      },
      ZW: {
        name: "Zimbabwe",
        continent: "Africa",
        currency: "USD",
        aliases: []
      }
    };
    Object.entries(d).reduce((e, n) => {
      let [t, a] = n;
      return e[a.currency] = t, e;
    }, {}), Object.entries(d).reduce((e, n) => {
      let [t, a] = n;
      return e[t] = a.currency, e;
    }, {}), (l = r || (r = {})).NASDAQ = "NASDAQ", l.NYSE = "NYSE", l.NYSEARCA = "NYSEARCA", l.NYSEAM = "NYSEAM", l.BATS = "BATS", l.OTCM = "OTCM", l.UNKNOWN = "UNKNOWN", (u = o || (o = {})).XNAS = "XNAS", u.XNYS = "XNYS", u.ARCX = "ARCX", u.XASE = "XASE", u.BATS = "BATS", u.OTCM = "OTCM", u.UNKNWN = "UNKNWN";
    let h = {
      XNAS: {
        name: "Nasdaq Stock Exchange",
        shortName: "Nasdaq",
        mic: "XNAS",
        alias: "NASDAQ",
        country: d.US,
        currency: m.USD,
        timezone: "America/New_York"
      },
      XNYS: {
        name: "New York Stock Exchange",
        shortName: "NYSE",
        mic: "XNYS",
        alias: "NYSE",
        country: d.US,
        currency: m.USD,
        timezone: "America/New_York"
      },
      ARCX: {
        name: "New York Stock Exchange ARCA",
        shortName: "ARCA",
        mic: "ARCX",
        alias: "NYSEARCA",
        country: d.US,
        currency: m.USD,
        timezone: "America/New_York"
      },
      XASE: {
        name: "New York Stock Exchange Market Equities",
        shortName: "NYSE AM",
        mic: "XASE",
        alias: "NYSEAM",
        country: d.US,
        currency: m.USD,
        timezone: "America/New_York"
      },
      BATS: {
        name: "Better Alternative Trading System",
        shortName: "BATS",
        mic: "BATS",
        alias: "BATS",
        country: d.US,
        currency: m.USD,
        timezone: "America/New_York"
      },
      OTCM: {
        name: "Otc Markets",
        shortName: "OTCM",
        mic: "OTCM",
        alias: "OTCM",
        country: d.US,
        currency: m.USD,
        timezone: "America/New_York"
      },
      UNKNOWN: {
        name: "Unknown catch all",
        shortName: "Unknown",
        mic: "UNKNWN",
        alias: "UNKNOWN",
        country: d.US,
        currency: m.USD,
        timezone: "America/Los_Angeles"
      }
    };
    function p(e) {
      return g(null == e ? void 0 : e.split(":")[1]) === h.OTCM;
    }
    function g(e, n) {
      let t = Object.values(h).find(n => n.alias === e);
      if (!t && (null == n ? void 0 : n.throwIfUnknown)) throw Error("Alias=".concat(e, " is not a known Fey exchange. Add it to the JS code."));
      return t;
    }
    h.XNAS, h.XNYS, h.ARCX, h.XASE, h.BATS, h.OTCM, h.UNKNOWN;
  },
  38219: function (e, n, t) {
    t.d(n, {
      Y: function () {
        return o;
      }
    });
    var a = t(23789),
      i = t(43354);
    class r extends i.PU {
      log(e, n, t, a) {
        switch (e) {
          case i.in.error:
            console.error("ConsoleLogger (".concat(n, "): ").concat(t), a);
            break;
          case i.in.warn:
            console.warn("ConsoleLogger (".concat(n, "): ").concat(t), a);
            break;
          default:
            console.log("ConsoleLogger (".concat(n, "): ").concat(t), a);
        }
      }
    }
    class o extends i.PU {
      log(e, n, t, a) {
        this.ensureLogger(), this.logger.log(e, n, t, a);
      }
      ensureLogger() {
        var e, n, t;
        if (this.logger) return;
        let o = null === (t = globalThis) || void 0 === t ? void 0 : null === (n = t.fey) || void 0 === n ? void 0 : null === (e = n.logger) || void 0 === e ? void 0 : e.createLogger;
        if (!o) {
          if (a.KF === a.qA.test) {
            this.logger = (0, i.gq)();
            return;
          }
          this.logger = new r(this.moduleName), this.logger.warn("Could not find 'global.fey.logger.createLogger', did you forget to load the logger?");
          return;
        }
        this.logger = o(this.moduleName);
      }
      constructor(e, n) {
        super(e, n);
      }
    }
  },
  73572: function (e, n, t) {
    t.r(n), t.d(n, {
      __N_SSG: function () {
        return e1;
      },
      default: function () {
        return e6;
      },
      useIsClient: function () {
        return e2;
      }
    });
    var a,
      i,
      r,
      o,
      s,
      c,
      l,
      u,
      m,
      d,
      h,
      p,
      g,
      f,
      A,
      S,
      y = t(52322),
      x = t(28879),
      M = t.n(x),
      v = t(2784),
      C = t(19453),
      D = t(17374);
    let b = {
      isValid: () => !1,
      isInfinity: () => !1,
      isSameSign: () => !1,
      floor: () => b,
      ceil: () => b,
      round: () => b,
      inverse: () => b,
      absoluteValue: () => b,
      abs: () => b,
      comparedTo: () => 0,
      cmp: () => 0,
      decimalPlaces: () => null,
      dp: () => null,
      dividedBy: () => b,
      div: () => b,
      dividedToIntegerBy: () => b,
      idiv: () => b,
      equals: () => !1,
      eq: () => !1,
      exponent: () => null,
      greaterThan: () => !1,
      gt: () => !1,
      greaterThanOrEqualTo: () => !1,
      gte: () => !1,
      isInteger: () => !1,
      isint: () => !1,
      isNegative: () => !1,
      isneg: () => !1,
      isPositive: () => !1,
      ispos: () => !1,
      isZero: () => !1,
      lessThan: () => !1,
      lt: () => !1,
      lessThanOrEqualTo: () => !1,
      lte: () => !1,
      logarithm: () => b,
      log: () => b,
      minus: () => b,
      sub: () => b,
      modulo: () => b,
      mod: () => b,
      naturalExponetial: () => b,
      exp: () => b,
      naturalLogarithm: () => b,
      ln: () => b,
      negated: () => b,
      neg: () => b,
      plus: () => b,
      add: () => b,
      precision: () => null,
      sd: () => null,
      squareRoot: () => b,
      sqrt: () => b,
      times: () => b,
      mul: () => b,
      toDecimalPlaces: () => b,
      todp: () => b,
      toExponential: () => null,
      toFixed: () => null,
      toInteger: () => b,
      toint: () => b,
      toNumber: () => null,
      toPower: () => b,
      pow: () => b,
      toPrecision: () => null,
      toSignificantDigits: () => b,
      tosd: () => b,
      toString: () => null,
      valueOf: () => null,
      val: () => null,
      valueAsString: null,
      toJSON: () => null
    };
    class N extends D.Decimal {
      get valueAsString() {
        return this.toString();
      }
      static Create(e, n) {
        return e instanceof N ? e : N.decimalOrInvalid(() => null == e || Number.isNaN(e) ? N.Invalid : new N("string" == typeof e ? e.replace(/,/g, "") : e), n);
      }
      static toNumber(e) {
        switch (typeof e) {
          case "number":
            return e;
          case "string":
            return Number(e);
          default:
            if (e instanceof N) return e.toNumber();
            return NaN;
        }
      }
      static isValidNumber(e) {
        let n = N.toNumber(e);
        return null != n && !isNaN(n);
      }
      static decimalOrInvalid(e, n) {
        try {
          return e();
        } catch (e) {
          if (void 0 !== n) return new N(n);
          return N.Invalid;
        }
      }
      isValid() {
        return !0;
      }
      isInfinity() {
        return super.toNumber() === 1 / 0;
      }
      static max(e, n) {
        let t = N.Create(e),
          a = N.Create(n);
        return t.greaterThan(a) ? t : a;
      }
      floor() {
        return N.Create(Math.floor(this.toNumber()));
      }
      ceil() {
        return N.Create(Math.ceil(this.toNumber()));
      }
      round() {
        return N.Create(super.toInteger());
      }
      inverse() {
        return N.One.div(this);
      }
      static Inverse(e) {
        return N.One.div(e);
      }
      isSameSign(e) {
        let n = N.Create(e);
        return this.isZero() && n.isZero() || this.isPositive() && n.isPositive() || this.isNegative() && n.isNegative();
      }
      absoluteValue() {
        return N.Create(super.absoluteValue());
      }
      abs() {
        return N.Create(super.abs());
      }
      div(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
          t = arguments.length > 2 ? arguments[2] : void 0;
        return N.Create(e).isZero() && void 0 !== n ? N.Create(n) : N.decimalOrInvalid(() => N.Create(super.div(e), t), t);
      }
      dividedBy(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
          t = arguments.length > 2 ? arguments[2] : void 0;
        return this.div(e, n, t);
      }
      dividedToIntegerBy(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.dividedToIntegerBy(e), n), n);
      }
      idiv(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.idiv(e), n), n);
      }
      logarithm() {
        return N.Create(super.logarithm());
      }
      log(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.log(e), n), n);
      }
      minus(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.minus(e), n), n);
      }
      sub(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.sub(e), n), n);
      }
      modulo(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.modulo(e), n), n);
      }
      mod(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.mod(e), n), n);
      }
      naturalExponetial() {
        return N.Create(super.naturalExponetial());
      }
      exp() {
        return N.Create(super.exp());
      }
      naturalLogarithm() {
        return N.Create(super.naturalLogarithm());
      }
      ln() {
        return N.Create(super.ln());
      }
      negated() {
        return N.Create(super.negated());
      }
      neg() {
        return N.Create(super.neg());
      }
      plus(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.plus(e), n), n);
      }
      add(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.add(e), n), n);
      }
      squareRoot() {
        return N.Create(super.squareRoot());
      }
      sqrt() {
        return N.Create(super.sqrt());
      }
      mul(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.mul(e), n), n);
      }
      times(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.times(e), n), n);
      }
      toDecimalPlaces(e, n, t) {
        return N.decimalOrInvalid(() => N.Create(super.toDecimalPlaces(e, n), t), t);
      }
      todp(e, n, t) {
        return N.decimalOrInvalid(() => N.Create(super.todp(e, n), t), t);
      }
      toInteger() {
        return N.Create(super.toInteger());
      }
      toint() {
        return N.Create(super.toint());
      }
      toPower(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.toPower(e), n), n);
      }
      pow(e, n) {
        return N.decimalOrInvalid(() => N.Create(super.pow(e), n), n);
      }
      toSignificantDigits(e, n, t) {
        return N.decimalOrInvalid(() => N.Create(super.toSignificantDigits(e, n), t), t);
      }
      tosd(e, n, t) {
        return N.decimalOrInvalid(() => N.Create(super.tosd(e, n), t), t);
      }
      constructor(e) {
        super(e);
      }
    }
    N.Zero = N.Create(0), N.One = N.Create(1), N.MinusOne = N.Create(-1), N.Infinity = N.Create(1 / 0), N.Invalid = b;
    class E {
      static Create(e, n) {
        return null === e ? new E(null) : e instanceof E ? e : new E(N.Create(e, n));
      }
      static CreateAndTreatZeroAsInvalid(e, n) {
        let t = E.Create(e, n);
        return t.isValid() && t.value.isZero() ? E.Create(b) : t;
      }
      static toNumber(e) {
        return e instanceof E ? e.isNull() ? null : N.toNumber(e.value) : N.toNumber(e);
      }
      isNull() {
        return null === this.value;
      }
      isNullOrInvalid() {
        return this.isNull() || !this.value.isValid();
      }
      isValid() {
        return !this.isNullOrInvalid();
      }
      toString() {
        return this.isNull() ? null : this.value.toString();
      }
      isNullOrZero() {
        return this.isNull() || this.value.isZero();
      }
      get valueOrZero() {
        return this.isNullOrInvalid() ? N.Zero : this.value;
      }
      constructor(e) {
        this.value = e;
      }
    }
    E.null = E.Create(null);
    var U = t(66653),
      I = t.n(U),
      T = t(33134),
      w = t.n(T),
      P = t(19926);
    M().extend(w()), M().extend(I()), (a = m || (m = {})).FIVE_SECONDS = "FIVE_SECONDS", a.TEN_SECONDS = "TEN_SECONDS", a.FIFTEEN_SECONDS = "FIFTEEN_SECONDS", a.THIRTY_SECONDS = "THIRTY_SECONDS", a.MINUTE = "MINUTE", a.TWO_MINUTES = "TWO_MINUTES", a.FOUR_MINUTES = "FOUR_MINUTES", a.FIVE_MINUTES = "FIVE_MINUTES", a.TEN_MINUTES = "TEN_MINUTES", a.FIFTEEN_MINUTES = "FIFTEEN_MINUTES", a.THIRTY_MINUTES = "THIRTY_MINUTES", a.HOUR = "HOUR", a.TWO_HOURS = "TWO_HOURS", a.THREE_HOURS = "THREE_HOURS", a.FOUR_HOURS = "FOUR_HOURS", a.FIVE_HOURS = "FIVE_HOURS", a.SIX_HOURS = "SIX_HOURS", a.EIGHT_HOURS = "EIGHT_HOURS", a.TWELVE_HOURS = "TWELVE_HOURS", a.DAY = "DAY", a.WEEK = "WEEK", a.MONTH = "MONTH", (i = d || (d = {}))["1m"] = "1m", i["5m"] = "5m", i["10m"] = "10m", i["1h"] = "1h", i["6h"] = "6h", i["12h"] = "12h", i["1d"] = "1d", i["1w"] = "1w", (r = h || (h = {}))["1D"] = "1D", r["1W"] = "1W", r["1M"] = "1M", r["3M"] = "3M", r["6M"] = "6M", r["1Y"] = "1Y", r["2Y"] = "2Y", r["3Y"] = "3Y", r["5Y"] = "5Y", r["10Y"] = "10Y", r.WTD = "WTD", r.YTD = "YTD", r.All = "All", r.Custom = "Custom", (o = p || (p = {})).S5 = "S5", o.S10 = "S10", o.S15 = "S15", o.S30 = "S30", o.M1 = "M1", o.M2 = "M2", o.M4 = "M4", o.M5 = "M5", o.M10 = "M10", o.M15 = "M15", o.M30 = "M30", o.H1 = "H1", o.H2 = "H2", o.H3 = "H3", o.H4 = "H4", o.H6 = "H6", o.H8 = "H8", o.H12 = "H12", o.D = "D", o.W = "W", o.M = "M", t(50030), t(46824), t(67338), t(10264);
    var R = t(74831);
    (s = g || (g = {})).PrimaryTradingSession = "Primary Trading Session", s.PreTradingSession = "Pre-Trading Session", s.PostTradingSession = "Post-Trading Session", s.PreOpen = "Pre-Open", s.PreClose = "Pre-Close", s.CallAuction = "Call Auction", s.Intermission = "Intermission", s.TradingAtLast = "Trading-at-Last", s.Other = "Other", (c = f || (f = {})).PRE_OPEN = "PRE_OPEN", c.PRE_OPEN_ROBINHOOD = "PRE_OPEN_ROBINHOOD", c.OPEN = "OPEN", c.AFTER_HOURS = "AFTER_HOURS", c.CLOSED = "CLOSED";
    var O = t(76972),
      Y = t(30458);
    function B(e) {
      return {
        value: N.Zero,
        logs: [e || "Initial empty value"]
      };
    }
    function j(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "OK",
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (null == e) return {
        state: "DISABLED",
        data: {
          value: N.Zero,
          logs: t
        }
      };
      switch (typeof e) {
        case "string":
          return {
            state: n,
            data: {
              value: N.Create(e),
              logs: ["converted from string", ...t]
            }
          };
        case "number":
          return {
            state: n,
            data: {
              value: N.Create(e),
              logs: ["converted from number", ...t]
            }
          };
        default:
          if (e instanceof N) return {
            state: n,
            data: {
              value: e,
              logs: ["converted from Decimal", ...t]
            }
          };
          if (e.state) return e;
          return {
            state: n,
            data: e
          };
      }
    }
    (l = A || (A = {})).LOADING = "LOADING", l.DISABLED = "DISABLED", l.ERROR = "ERROR", l.NOT_AVAILABLE = "NOT_AVAILABLE", l.PARTIAL = "PARTIAL", l.OK = "OK", (u = S || (S = {})).AllTime = "AllTime", u.Daily = "Daily";
    var G = t(5632),
      Z = t(84687),
      L = function (e) {
        let {
            animationKey: n,
            value: t,
            decimals: a = 0,
            format: i
          } = e,
          [r, o] = (0, v.useState)(!1),
          s = (0, G.useRouter)(),
          c = null != n ? n : s.asPath;
        return ((0, v.useEffect)(() => {
          o(!0);
          let e = setTimeout(() => o(!1), 500);
          return () => clearTimeout(e);
        }, []), (0, v.useEffect)(() => {
          if (c) {
            o(!0);
            let e = setTimeout(() => o(!1), 500);
            return () => clearTimeout(e);
          }
        }, [c]), !t || r) ? (0, y.jsx)(y.Fragment, {
          children: i ? i(null == t ? void 0 : t.toString()) : null == t ? void 0 : t.toFixed(a)
        }) : (0, y.jsx)(H, {
          value: t,
          decimals: a,
          format: i
        });
      };
    function H(e) {
      let {
          value: n,
          decimals: t = 0,
          format: a
        } = e,
        [i, r] = (0, v.useState)(a ? a(n.toString()) : n.toString());
      return (0, Z.q_)({
        value: n.toString(),
        config: {
          tension: 360
        },
        onChange(e) {
          let {
            value: n
          } = e;
          r(a ? a(n.value) : n.value);
        }
      }), (0, y.jsx)(Z.q.span, {
        children: a ? (0, y.jsx)(y.Fragment, {
          children: i
        }) : Number(i).toFixed(t)
      });
    }
    var F = t(1242),
      k = t(25414),
      K = function (e) {
        return e.brackets ? (0, y.jsxs)(y.Fragment, {
          children: ["(", e.children, ")"]
        }) : (0, y.jsx)(y.Fragment, {
          children: e.children
        });
      },
      V = function (e) {
        var n;
        let {
            valueState: t,
            color: a,
            brackets: i,
            as: r,
            children: o
          } = e,
          s = t.state === A.DISABLED,
          c = s ? O.r.colors.ui.light : a;
        return t.state === A.ERROR || t.state === A.NOT_AVAILABLE ? (0, y.jsx)(_, {
          as: r,
          children: "not available"
        }) : c ? (0, y.jsx)(W, {
          customColor: c,
          as: r,
          children: (0, y.jsx)(K, {
            brackets: i,
            children: s ? "0" : o
          })
        }) : (0, y.jsx)(z, {
          value: null === (n = t.data.value) || void 0 === n ? void 0 : n.toNumber(),
          as: r,
          children: (0, y.jsx)(K, {
            brackets: i,
            children: o
          })
        });
      };
    let W = C.ZP.strong.withConfig({
        componentId: "sc-ff121fbb-0"
      })(["color:", ";", ""], e => e.customColor ? e.customColor : "inherit", F.lN),
      z = (0, C.ZP)(k.Z.Return).withConfig({
        componentId: "sc-ff121fbb-1"
      })(["", ""], F.lN),
      _ = C.ZP.strong.withConfig({
        componentId: "sc-ff121fbb-2"
      })(["color:", ";", ""], e => e.theme.colors.ui.light, F.lN),
      q = (e, n) => {
        let t = e.map(e => {
          let {
            type: t,
            value: a
          } = e;
          if ("fraction" !== t || !a || a.length < n) return a;
          let i = "";
          for (let e = 0, t = 0; e < a.length && t < n; e++) "0" !== a[e] && t++, i += a[e];
          return i;
        }).reduce((e, n) => e + n).split(".").map((e, t) => 0 === t ? e : e.padEnd(n, "0")).join(".");
        return 0 === n ? t.split(".").join("") : 1 === t.split(".").length ? t + ".00" : t;
      };
    function J(e, n) {
      let {
          decimals: t = 2,
          showSymbol: a = !0,
          showCurrency: i = !1,
          hideMinus: r = !1
        } = n,
        o = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: e || "USD",
          currencyDisplay: "symbol",
          minimumFractionDigits: 0,
          maximumFractionDigits: 20
        });
      return n => {
        if (void 0 === n) return "";
        let s = Number(n);
        r && (s = Math.abs(s)), s = function (e, n) {
          let t = ("string" == typeof (e = function (e) {
            if (1 > Math.abs(e)) {
              let n = parseInt(e.toString().split("e-")[1]);
              n && (e *= Math.pow(10, n - 1), e = "0." + Array(n).join("0") + e.toString().substring(2));
            } else {
              let n = parseInt(e.toString().split("+")[1]);
              n > 20 && (n -= 20, e /= Math.pow(10, n), e += Array(n + 1).join("0"));
            }
            return e;
          }(e)) ? e : e.toString()).split(".");
          if (n <= 0) return t[0];
          let a = t[1] || "";
          if (a.length > n) return "".concat(t[0], ".").concat(a.substr(0, n));
          for (; a.length < n;) a += "0";
          return "".concat(t[0], ".").concat(a);
        }(s, t);
        let c = q(o.formatToParts(s), t).replace(/[a-z]/gi, ""),
          l = q(new Intl.NumberFormat("en-US", {
            minimumFractionDigits: t,
            maximumFractionDigits: t
          }).formatToParts(s), t);
        return (0 === t && (c = c.split(".").join(""), l = l.split(".").join("")), a && i) ? "".concat(c, " ").concat(e) : !a && i ? "".concat(l, " ").concat(e) : a && !i ? c : l;
      };
    }
    var X = function (e) {
      var n;
      let {
          value: t,
          currency: a,
          hidePlus: i,
          hideMinus: r,
          showSymbol: o,
          showCurrency: s,
          showAbsolute: c,
          decimals: l,
          brackets: u,
          negativeBrackets: m,
          animate: d = !0,
          showLoader: h = !0,
          animationKey: p,
          as: g = "span",
          color: f
        } = e,
        A = j(t),
        S = c ? null === (n = N.Create(A.data.value)) || void 0 === n ? void 0 : n.abs() : A.data.value,
        x = i || N.Create(A.data.value).lessThan(0) ? "" : "+",
        M = J(a, {
          decimals: l,
          showSymbol: o,
          showCurrency: s,
          hideMinus: r
        });
      if (!S) return (0, y.jsx)("span", {
        style: {
          opacity: 0.32
        },
        children: "N/A"
      });
      let v = m && S.isneg() || u;
      return (0, y.jsxs)(V, {
        valueState: A,
        showLoader: h,
        brackets: v,
        color: f,
        as: g,
        children: [x, d ? (0, y.jsx)(L, {
          value: S,
          format: M,
          animationKey: p
        }) : (0, y.jsx)(y.Fragment, {
          children: M(S.toString())
        })]
      });
    };
    function Q(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = N.toNumber(e);
      if (!N.isValidNumber(a)) return "";
      let i = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: n,
        maximumFractionDigits: n
      }).format(a);
      if (t) {
        let [e, n] = i.split(".");
        if ("00%" === n) return e + "%";
      }
      return i;
    }
    var $ = function (e) {
        var n;
        let {
            value: t,
            hidePercent: a,
            hidePlus: i,
            hideMinus: r,
            brackets: o,
            negativeBrackets: s,
            animate: c = !0,
            showLoader: l = !0,
            animationKey: u,
            decimals: m,
            as: d = "span",
            color: h
          } = e,
          p = j(t),
          g = (0, v.useMemo)(() => N.Create(p.data.value).abs(), [p.data.value]),
          f = r ? g : p.data.value,
          S = i || (null === (n = p.data.value) || void 0 === n ? void 0 : n.lessThan(0)) ? "" : "+";
        if (!(null == f ? void 0 : f.isValid()) || null === t || p.state === A.DISABLED) return (0, y.jsx)("span", {
          style: {
            opacity: 0.32
          },
          children: "N/A"
        });
        let x = s && p.data.value.isneg() || o,
          M = Q(f, m).split("%")[0];
        return (0, y.jsxs)(V, {
          valueState: p,
          showLoader: l,
          brackets: x,
          color: h,
          as: d,
          children: [S, c ? (0, y.jsx)(L, {
            value: f,
            format: e => Q(e, m).split("%")[0],
            animationKey: u,
            decimals: m
          }) : (0, y.jsx)(y.Fragment, {
            children: M
          }), a ? "" : "%"]
        });
      },
      ee = t(57306),
      en = t(57449),
      et = t.n(en),
      ea = t(28387),
      ei = t.n(ea),
      er = t(13197);
    let eo = v.useLayoutEffect;
    var es = t(23880);
    M().extend(et()), M().extend(ei());
    var ec = function (e) {
        let {
            date: n,
            format: t = "default",
            useUTC: a = !1
          } = e,
          [i, r] = (0, v.useState)(""),
          [o, s] = (0, v.useState)("");
        return eo(() => {
          let e = a ? M()(er.Vo(n)).utc() : M()(er.Vo(n));
          function i() {
            let n = M()(),
              a = "minimal" === t,
              i = n.diff(e, "minutes"),
              o = n.diff(e, "hours"),
              s = e.isSame(n, "day"),
              c = e.isYesterday(),
              l = e.isSame(n, "year"),
              u = a ? "MMM D, YYYY" : "MMM D, YYYY, h:mmA",
              m = e.format(u);
            l && (m = e.format(u)), c && (m = a ? "Yesterday" : "Yesterday, ".concat(e.format("MMM D, YYYY"))), s && (m = "Today, ".concat(e.format("h:mmA"))), o < 12 && (m = a ? "".concat(e.format("h:mmA")) : "".concat(o, " ").concat((0, es._6)("hour", o), " ago")), i < 60 && (m = i < 1 ? "just now" : "".concat(i, " ").concat((0, es._6)("minute", i), " ago")), r(m);
          }
          s(e.format("dddd, MMMM Do YYYY, h:mm:ss A")), i();
          let o = setInterval(() => i(), P.EB);
          return () => clearInterval(o);
        }, [n, r, s, t, a]), (0, y.jsx)("span", {
          title: o,
          children: i
        });
      },
      el = t(874),
      eu = t(33178),
      em = t(9271),
      ed = t(6738),
      eh = t(36458),
      ep = t(10035);
    let eg = C.ZP.div.withConfig({
        componentId: "sc-72281046-0"
      })(["z-index:1;position:absolute;height:100%;width:1px;background:", ";pointer-events:none;"], e => e.theme.colors.ui.light),
      ef = C.ZP.div.withConfig({
        componentId: "sc-72281046-1"
      })(["z-index:1;position:absolute;top:-32px;font-size:14px;display:flex;align-items:center;background:rgba(0,0,0,0.9);backdrop-filter:blur(3px);box-shadow:0px 4px 25px rgba(0,0,0,0.25);border-radius:7px;padding:5px 12px;white-space:nowrap;pointer-events:none;span,strong{", "}"], F.lN),
      eA = C.ZP.div.withConfig({
        componentId: "sc-72281046-2"
      })(["z-index:1;text-align:center;background:rgba(0,0,0,0.9);backdrop-filter:blur(3px);box-shadow:0px 4px 25px rgba(0,0,0,0.25);border-radius:5px;padding:7px 12px;"]),
      eS = C.ZP.div.withConfig({
        componentId: "sc-72281046-3"
      })(["margin:0 3px;color:", ";"], e => e.theme.colors.ui.light),
      ey = C.ZP.div.withConfig({
        componentId: "sc-72281046-4"
      })(["color:", ";", ""], e => e.theme.colors.ui.light, F.lN);
    C.ZP.div.withConfig({
      componentId: "sc-72281046-5"
    })(["z-index:1;position:absolute;height:7px;width:7px;box-shadow:0 0 0 3px ", ";border-radius:50%;background:#fff;pointer-events:none;"], e => e.theme.colors.ui.dark), C.ZP.div.withConfig({
      componentId: "sc-72281046-6"
    })(["z-index:1;position:absolute;height:5px;width:5px;border-radius:50%;background:#fff;pointer-events:none;"]);
    var ex = {
      Line: eg,
      Tooltip: ef,
      TooltipComparison: eA,
      Dot: eS,
      Date: ey
    };
    function eM(e) {
      let {
        interval: n,
        yMin: t,
        yMax: a,
        previousClose: i,
        hideText: r
      } = e;
      return (0, y.jsx)(ev, {
        yMin: N.Create(t),
        yMax: N.Create(a),
        interval: n,
        previousClose: i,
        hideText: r
      });
    }
    let ev = e => {
        let {
          yMin: n,
          yMax: t,
          previousClose: a,
          interval: i,
          hideText: r
        } = e;
        if (!n || !t || !(null == a ? void 0 : a.isValid()) || i !== h["1D"]) return null;
        let o = t.minus(n),
          s = t.minus(a),
          c = t.equals(n) ? N.Create(50) : s.div(o).mul(100);
        return (0, y.jsx)(eC, {
          style: {
            transform: "translateY(".concat(c.toNumber(), "%)")
          },
          children: (0, y.jsx)(eD, {
            children: r ? null : (0, y.jsxs)(eb, {
              children: [(0, y.jsx)("div", {
                children: "Prev. close"
              }), (0, y.jsx)(X, {
                value: a,
                hideMinus: !0,
                hidePlus: !0,
                showSymbol: !1,
                color: "inherit"
              })]
            })
          })
        });
      },
      eC = C.ZP.foreignObject.withConfig({
        componentId: "sc-6c710d21-0"
      })(["position:absolute;height:100%;width:100%;overflow:visible;pointer-events:none;"]),
      eD = C.ZP.div.withConfig({
        componentId: "sc-6c710d21-1"
      })(["position:absolute;height:1px;width:100%;background:repeating-linear-gradient( to right,rgb(134 143 151 / 50%) 0px,rgb(134 143 151 / 50%) 3px,transparent 2px,transparent 5px );"]),
      eb = C.ZP.div.withConfig({
        componentId: "sc-6c710d21-2"
      })(["position:absolute;right:-56px;top:-7px;color:", ";font-size:12px;line-height:1.1;", "{display:none;}"], e => e.theme.colors.ui.light, eu.mq.phablet);
    var eN = function (e) {
      let {
        error: n
      } = e;
      return (0, y.jsxs)(eE, {
        children: [(0, y.jsxs)("svg", {
          width: "50%",
          height: "2",
          viewBox: "0 0 394 2",
          fill: "none",
          className: "no-data",
          children: [(0, y.jsx)("line", {
            x1: "393",
            y1: "1",
            x2: "1",
            y2: "0.999966",
            stroke: "url(#noDataLeft)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, y.jsx)("defs", {
            children: (0, y.jsxs)("linearGradient", {
              id: "noDataLeft",
              x1: "392.372",
              y1: "-0.563913",
              x2: "-5.46389",
              y2: "-0.566077",
              gradientUnits: "userSpaceOnUse",
              children: [(0, y.jsx)("stop", {
                stopColor: "#B3AEF5"
              }), (0, y.jsx)("stop", {
                offset: "0.413373",
                stopColor: "#D7CBE7"
              }), (0, y.jsx)("stop", {
                offset: "0.653973",
                stopColor: "#E5C8C8"
              }), (0, y.jsx)("stop", {
                offset: "1",
                stopColor: "#ECBDAA"
              })]
            })
          })]
        }), (0, y.jsx)(eU, {
          children: n ? "data error" : "no data"
        }), (0, y.jsxs)("svg", {
          width: "50%",
          height: "2",
          viewBox: "0 0 394 2",
          fill: "none",
          className: "no-data",
          children: [(0, y.jsx)("line", {
            x1: "393",
            y1: "1",
            x2: "1",
            y2: "0.999966",
            stroke: "url(#noDataRight)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, y.jsx)("defs", {
            children: (0, y.jsxs)("linearGradient", {
              id: "noDataRight",
              x1: "392.372",
              y1: "-0.563913",
              x2: "-5.46389",
              y2: "-0.566077",
              gradientUnits: "userSpaceOnUse",
              children: [(0, y.jsx)("stop", {
                stopColor: "#B3AEF5"
              }), (0, y.jsx)("stop", {
                offset: "0.413373",
                stopColor: "#D7CBE7"
              }), (0, y.jsx)("stop", {
                offset: "0.653973",
                stopColor: "#E5C8C8"
              }), (0, y.jsx)("stop", {
                offset: "1",
                stopColor: "#ECBDAA"
              })]
            })
          })]
        })]
      });
    };
    let eE = C.ZP.div.withConfig({
        componentId: "sc-db2d623f-0"
      })(["position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;min-width:70px;mask-image:radial-gradient(rgba(0,0,0,1),transparent 66%);opacity:0;animation:fadein 0.15s forwards;"]),
      eU = C.ZP.div.withConfig({
        componentId: "sc-db2d623f-1"
      })(["font-weight:600;font-size:16px;line-height:19px;color:#b4aff5;min-width:70px;text-align:center;margin-bottom:4px;"]),
      eI = {
        [p.S5]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "h:mm:ss A"
          }
        },
        [p.S10]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "h:mm:ss A"
          }
        },
        [p.S15]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "h:mm:ss A"
          }
        },
        [p.S30]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "h:mm:ss A"
          }
        },
        [p.M1]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "h:mm A"
          }
        },
        [p.M2]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.M4]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.M5]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.M10]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.M15]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.M30]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.H1]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.H2]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.H3]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.H4]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.H6]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.H8]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.H12]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [p.D]: {
          label: {
            split: "day",
            format: "ddd"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [p.W]: {
          label: {
            split: "day",
            format: "ddd"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [p.M]: {
          label: {
            split: "month",
            format: "MMM"
          },
          tooltip: {
            format: "MMM YYYY"
          }
        }
      },
      eT = {
        [h["1D"]]: {
          label: {
            split: "hour",
            format: "hh"
          },
          tooltip: {
            format: "h:mm A"
          }
        },
        [h["1W"]]: {
          label: {
            split: "day",
            format: "ddd"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [h.WTD]: {
          label: {
            split: "day",
            format: "ddd"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [h["1M"]]: {
          label: {
            split: "day",
            format: "D"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [h["3M"]]: {
          label: {
            split: "month",
            format: "MMM"
          },
          tooltip: {
            format: "MMM D, h:mm A"
          }
        },
        [h["6M"]]: {
          label: {
            split: "month",
            format: "MMM"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h["1Y"]]: {
          label: {
            split: "month",
            format: "MMM"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h["2Y"]]: {
          label: {
            split: "month",
            format: "MMM"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h["3Y"]]: {
          label: {
            split: "month",
            format: "MMM"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h["5Y"]]: {
          label: {
            split: "year",
            format: "YYYY"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h["10Y"]]: {
          label: {
            split: "year",
            format: "YYYY"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h.YTD]: {
          label: {
            split: "year",
            format: "YYYY"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h.All]: {
          label: {
            split: "year",
            format: "YYYY"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        },
        [h.Custom]: {
          label: {
            split: "year",
            format: "YYYY"
          },
          tooltip: {
            format: "MMM D, YYYY"
          }
        }
      },
      ew = "'FeyCalibre','-apple-system','BlinkMacSystemFont', 'San Francisco','Helvetica Neue','Helvetica','Ubuntu','Roboto', 'Noto','Segoe UI','Arial',sans-serif",
      eP = O.r.colors.ui.light,
      eR = O.r.colors.ui.light;
    var eO = t(93146);
    let eY = {
      data: [],
      animate: !1,
      enableGridX: !1,
      enableGridY: !1,
      axisLeft: null,
      axisBottom: null,
      enableSlices: !1,
      enableCrosshair: !1,
      enablePoints: !1,
      theme: {
        background: "transparent",
        axis: {
          domain: {
            line: {
              stroke: "transparent",
              strokeWidth: 1
            }
          },
          ticks: {
            line: {
              stroke: "transparent",
              strokeWidth: 0
            },
            text: {
              fill: eP,
              fontSize: 10,
              fontWeight: 500,
              fontFamily: ew,
              fillOpacity: 0.8
            }
          },
          legend: {
            text: {
              fill: eP,
              fontSize: 14,
              fontFamily: ew
            }
          }
        },
        grid: {
          line: {
            stroke: eR,
            strokeWidth: 1,
            strokeDasharray: "3 3",
            strokeOpacity: 0.3
          }
        },
        legends: {
          text: {
            fill: eP,
            fontSize: 14
          }
        },
        labels: {
          text: {
            fill: eP,
            fontSize: 14
          }
        },
        crosshair: {
          line: {
            stroke: "url(#crosshair)",
            strokeWidth: 1,
            strokeOpacity: 1,
            strokeDasharray: "3 3"
          }
        },
        dots: {
          text: {
            fill: eP,
            fontSize: 14
          }
        },
        tooltip: {
          container: {
            background: "#000",
            color: "#fff",
            fontSize: "inherit",
            borderRadius: "2px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
            padding: "5px 9px"
          },
          table: {},
          tableCell: {
            padding: "3px 5px"
          }
        }
      },
      colors: {
        datum: "color"
      },
      xScale: {
        type: "point"
      },
      lineWidth: 1.5
    };
    function eB(e) {
      let {
          interval: n,
          data: t,
          previousClose: a,
          previousDayEnd: i,
          exchangeHoursActive: r
        } = e,
        o = (0, v.useRef)(null),
        [s, c] = (0, v.useState)(!1),
        [l, u] = (0, v.useState)(void 0),
        [m, d] = (0, v.useState)(void 0),
        p = !t || (null == t ? void 0 : t.length) === 0,
        g = function (e) {
          let n = ((null == e ? void 0 : e.to) && (null == e ? void 0 : e.from) ? e.to.getTime() - e.from.getTime() : 0) / P.x4;
          switch (!0) {
            case n < 0.025:
              return "S30";
            case n <= 0.1:
              return "M1";
            case n <= 0.8:
              return "M2";
            case n <= 5:
              return "M5";
            case n <= 8:
              return "M10";
            case n <= 12:
              return "M15";
            case n <= 20:
              return "M30";
            case n <= 40:
              return "H1";
            case n <= 64:
              return "H3";
            case n <= 96:
              return "H4";
            case n <= 192:
            case n <= 576:
              return "D";
            case n < 3072:
              return "W";
            default:
              return "M";
          }
        }(),
        f = n === h.Custom ? eI[g] : eT[n];
      (0, v.useEffect)(() => l && m ? (null == l ? void 0 : l.x) !== (null == m ? void 0 : m.x) ? c(!0) : void 0 : c(!1), [m, l]);
      let A = (0, v.useMemo)(() => {
          let e = [];
          return t.forEach(n => {
            n.data.forEach((n, t) => {
              n.y && (e[t] = n);
            });
          }), e;
        }, [t]),
        S = (0, v.useMemo)(() => {
          if (0 === A.length) return;
          let e = null == A ? void 0 : A.map(e => e.y).filter(e => !isNaN(e));
          if (!e) return;
          n === h["1D"] && (null == a ? void 0 : a.isValid()) && e.push(a.toNumber());
          let t = N.Create(Math.max(...e)),
            i = N.Create(Math.min(...e)),
            r = t.minus(i).div(292).mul(30),
            o = i.minus(r),
            s = t.plus(r);
          return {
            type: "linear",
            min: o.toNumber(),
            max: s.toNumber()
          };
        }, [a, A, n]);
      return p ? (0, y.jsx)(ed.ZP, {
        children: e => {
          let {
            height: n,
            width: t
          } = e;
          return (0, y.jsx)(eG, {
            style: {
              width: t,
              height: n
            },
            children: (0, y.jsx)(eN, {})
          });
        }
      }) : (0, y.jsx)(ed.ZP, {
        children: e => {
          let {
            height: c,
            width: h
          } = e;
          return (0, y.jsxs)(eG, {
            style: {
              width: h,
              height: c
            },
            children: [(0, y.jsx)(eV, {
              point: l,
              comparisonPoint: m,
              comparing: s,
              tooltipSettings: f
            }), (0, y.jsxs)(eZ, {
              style: {
                opacity: s ? 0.2 : 1
              },
              ref: o,
              children: [!r && (0, y.jsx)(eM, {
                yMin: null == S ? void 0 : S.min,
                yMax: null == S ? void 0 : S.max,
                interval: n,
                previousClose: a,
                hideText: !0
              }), (0, y.jsx)(ep.Line, {
                ...eY,
                lineWidth: h > 568 ? 1.5 : 0.8,
                width: h,
                height: c,
                data: t,
                yScale: S,
                layers: [e => (0, y.jsx)(ej, {
                  ...e,
                  point: l
                }), e => (0, y.jsx)(eq, {
                  ...e,
                  yMax: null == S ? void 0 : S.max,
                  yMin: null == S ? void 0 : S.min,
                  interval: n,
                  previousClose: a,
                  previousDayEnd: i
                }), e => (0, y.jsx)(eW, {
                  ...e,
                  point: l,
                  setPoint: u,
                  chartWidth: h,
                  setComparisonPoint: d
                })]
              })]
            }), (0, y.jsx)(eL, {
              data: A,
              comparisonPoint: m,
              point: l,
              comparing: s,
              tooltipSettings: f,
              yScale: S,
              width: h,
              height: c
            })]
          });
        }
      });
    }
    let ej = e => {
        let {
          lineGenerator: n,
          series: t,
          point: a,
          lineWidth: i
        } = e;
        return (0, y.jsx)(y.Fragment, {
          children: t.map(e => {
            let t = a ? a.serieId === e.id ? 1 : 0.33 : 1;
            return (0, y.jsx)("path", {
              d: n(e.data.map(e => e.position)),
              id: e.id,
              fill: "none",
              stroke: e.color,
              strokeWidth: i,
              style: {
                transition: "opacity 0.1s",
                opacity: t,
                willChange: "opacity"
              }
            }, e.id);
          })
        });
      },
      eG = C.ZP.div.withConfig({
        componentId: "sc-91daf4-0"
      })(["position:relative;height:100%;svg:not(.no-data){overflow:visible;}"]),
      eZ = C.ZP.div.withConfig({
        componentId: "sc-91daf4-1"
      })(["width:100%;height:100%;", "{overflow:hidden;}"], eu.mq.tablet);
    function eL(e) {
      var n, t;
      let {
          data: a,
          point: i,
          comparisonPoint: r,
          comparing: o,
          tooltipSettings: s,
          yScale: c,
          width: l,
          height: u
        } = e,
        m = (0, v.useRef)(null),
        d = (0, v.useRef)(null),
        [h, p] = (0, v.useState)(!0),
        [g, f] = (0, v.useState)(0),
        [A, S] = (0, v.useState)(0),
        [x, C] = (0, v.useState)(200),
        [D, b] = (0, v.useState)(B()),
        [E, U] = (0, v.useState)(B()),
        I = D.value.greaterThanOrEqualTo(0) ? eO.r.colors.labels.positive : eO.r.colors.labels.negative;
      if (eo(() => {
        if (!o || !r || !i) return;
        let e = r.x > i.x,
          [n, t] = e ? [i.data.y, r.data.y] : [r.data.y, i.data.y],
          a = N.Create(t).sub(n),
          s = "".concat(t, " - ").concat(n),
          c = N.Create(t).sub(n).div(n, 0),
          l = "".concat(t, " - ").concat(n, " / ").concat(n),
          u = m.current.getBoundingClientRect().width;
        p(e), b({
          value: a,
          logs: ["diff:           ".concat("endPrice - startPrice"), "diff:           ".concat(s), "diff:           ".concat(a)]
        }), U({
          value: c,
          logs: ["percentage:     ".concat("(endPrice - startPrice) / startPrice"), "percentage:     ".concat(l), "percentage:     ".concat(c)]
        }), C(d.current.getBoundingClientRect().width), f(e ? i.x : r.x), S(e ? u - r.x : u - i.x);
      }, [i, r, o]), !(null == r ? void 0 : r.data) || !o) return null;
      let T = null == i ? void 0 : null === (n = i.data) || void 0 === n ? void 0 : n.x,
        w = null == r ? void 0 : null === (t = r.data) || void 0 === t ? void 0 : t.x;
      return (0, y.jsxs)(y.Fragment, {
        children: [(0, y.jsx)(eF, {
          ref: d,
          style: {
            left: "".concat(g - x / 2, "px"),
            right: "".concat(A - x / 2, "px")
          },
          children: (0, y.jsxs)(ex.TooltipComparison, {
            children: [(0, y.jsxs)(ek, {
              style: {
                color: I
              },
              children: [(0, y.jsx)(X, {
                value: D.value,
                animate: !1,
                hidePlus: !0,
                color: "inherit"
              }), " ", (0, y.jsx)($, {
                value: E,
                brackets: !0,
                animate: !1,
                hidePlus: !0
              })]
            }), (0, y.jsxs)(eK, {
              children: [(0, y.jsx)(ex.Date, {
                children: M()(h ? T : w).format(s.tooltip.format)
              }), " ", "to", " ", (0, y.jsx)(ex.Date, {
                children: M()(h ? w : T).format(s.tooltip.format)
              })]
            })]
          })
        }), (0, y.jsx)(eH, {
          ref: m,
          difference: D.value.toNumber(),
          style: {
            clipPath: "inset(-100px ".concat(A, "px -100px ").concat(g, "px)")
          },
          children: (0, y.jsx)(ep.Line, {
            ...eY,
            width: l,
            height: u,
            layers: ["lines", "areas"],
            data: [{
              id: "Comparison",
              data: a
            }],
            yScale: c,
            enableArea: !0,
            areaBaselineValue: c.min,
            defs: [(0, eh.c$)("gradientComparison", [{
              offset: 0,
              color: I
            }, {
              offset: 100,
              color: I,
              opacity: 0
            }])],
            fill: [{
              match: "*",
              id: "gradientComparison"
            }]
          })
        })]
      });
    }
    let eH = C.ZP.div.withConfig({
        componentId: "sc-91daf4-2"
      })(["position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;user-select:none;svg path{stroke:", ";}"], e => e.difference >= 0 ? e.theme.colors.labels.positive : e.theme.colors.labels.negative),
      eF = C.ZP.div.withConfig({
        componentId: "sc-91daf4-3"
      })(["user-select:none;position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:200px;top:-34px;left:0;right:0;margin:0 auto;pointer-events:none;font-size:14px;line-height:1.1;"]),
      ek = C.ZP.div.withConfig({
        componentId: "sc-91daf4-4"
      })(["font-weight:600;", ""], F.lN),
      eK = C.ZP.div.withConfig({
        componentId: "sc-91daf4-5"
      })(["display:flex;align-items:center;margin-top:2px;color:", ";& > div{margin:0 3px;}"], e => e.theme.colors.ui.light),
      eV = e => {
        var n;
        let {
            point: t,
            comparisonPoint: a,
            comparing: i,
            tooltipSettings: r
          } = e,
          o = (0, v.useRef)(null),
          [s, c] = (0, v.useState)(0),
          [l, u] = (0, v.useState)(0),
          m = 0 === l ? "#fff" : l >= 0 ? eO.r.colors.labels.positive : eO.r.colors.labels.negative;
        return ((0, v.useEffect)(() => {
          o.current && c(o.current.getBoundingClientRect().width);
        }, [o, c]), (0, v.useEffect)(() => {
          (null == a ? void 0 : a.data) && (null == t ? void 0 : t.data) && u(a.x > t.x ? a.data.y - t.data.y : t.data.y - a.data.y);
        }, [t, a]), null == t ? void 0 : t.data) ? (0, y.jsxs)(y.Fragment, {
          children: [i ? (0, y.jsx)(ex.Line, {
            style: {
              left: "".concat(null == a ? void 0 : a.x, "px"),
              background: m,
              WebkitMaskImage: "linear-gradient(transparent, black ".concat(100 * Math.abs((null == a ? void 0 : a.y) / 324), "%, transparent)")
            }
          }) : (0, y.jsxs)(ex.Tooltip, {
            ref: o,
            style: {
              left: "".concat((null == t ? void 0 : t.x) - s / 2, "px")
            },
            children: [(0, y.jsx)(X, {
              value: t.data.y,
              hideMinus: !0,
              hidePlus: !0,
              animate: !1,
              showSymbol: !1,
              as: "strong",
              color: "inherit"
            }), (0, y.jsx)(ex.Dot, {
              children: "\xb7"
            }), (0, y.jsx)(ex.Date, {
              children: M()(null == t ? void 0 : null === (n = t.data) || void 0 === n ? void 0 : n.x).format(r.tooltip.format)
            })]
          }), (0, y.jsx)(ex.Line, {
            style: {
              left: "".concat(null == t ? void 0 : t.x, "px"),
              WebkitMaskImage: "linear-gradient(transparent, black ".concat(100 * Math.abs((null == t ? void 0 : t.y) / 324), "%, transparent)"),
              background: i ? m : "#fff"
            }
          })]
        }) : null;
      },
      eW = e => {
        let {
            point: n,
            points: t,
            setPoint: a,
            setComparisonPoint: i,
            innerHeight: r,
            chartWidth: o
          } = e,
          s = (0, v.useRef)(null),
          [c, l] = (0, v.useState)(null);
        function u(e) {
          let n = e.clientX - (null == c ? void 0 : c.x) - 8;
          return t.reduce((e, t) => Math.abs(t.x - n) < Math.abs(e.x - n) ? t : e, null == t ? void 0 : t[0]);
        }
        return (0, v.useEffect)(() => {
          l(s.current.getBoundingClientRect());
        }, [s]), (0, v.useEffect)(() => {
          function e() {
            l(s.current.getBoundingClientRect());
          }
          return window.visualViewport.addEventListener("resize", e), () => {
            window.visualViewport.removeEventListener("resize", e);
          };
        }, [s]), (0, y.jsx)("g", {
          transform: "translate(-".concat(8, ",0)"),
          children: (0, y.jsx)("rect", {
            ref: s,
            onMouseDown: function (e) {
              n || a(u(e));
            },
            onPointerDown: function (e) {
              s.current.setPointerCapture(e.pointerId), null == i || i(u(e));
            },
            onPointerUp: function (e) {
              s.current.releasePointerCapture(e.pointerId), null == i || i(null);
            },
            onPointerMove: function (e) {
              return a(u(e));
            },
            onPointerLeave: function () {
              a(null), null == i || i(null);
            },
            width: o + 16,
            height: r,
            fillOpacity: 0
          })
        });
      },
      ez = C.ZP.div.withConfig({
        componentId: "sc-91daf4-6"
      })(["width:1px;height:100%;position:absolute;"]),
      e_ = () => (0, y.jsx)("svg", {
        width: "1px",
        viewBox: "0 0 1 297",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, y.jsx)("line", {
          opacity: "0.5",
          x1: "0.5",
          y1: "0",
          x2: "0.5",
          y2: "82%",
          stroke: "#868F97",
          strokeMiterlimit: "11.4737",
          strokeDasharray: "3 3"
        })
      }),
      eq = e => {
        let {
          points: n,
          interval: t,
          previousClose: a,
          yMin: i,
          yMax: r,
          previousDayEnd: o
        } = e;
        if (t !== h["1D"]) return null;
        let s = n.findIndex(e => e.data.x >= o),
          c = n[s - 1],
          l = s < n.length / 2;
        return s <= 0 || !c ? (0, y.jsx)(eM, {
          yMin: i,
          yMax: r,
          interval: t,
          previousClose: a,
          hideText: !0
        }) : (0, y.jsx)("foreignObject", {
          style: {
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible"
          },
          children: (0, y.jsxs)(ez, {
            style: {
              left: c.x
            },
            children: [(0, y.jsx)(e_, {}), (0, y.jsx)(eJ, {
              justifyRight: l,
              children: a ? (0, y.jsxs)(y.Fragment, {
                children: [(0, y.jsx)("div", {
                  children: "Previous close"
                }), (0, y.jsx)(X, {
                  value: a,
                  color: eO.r.colors.ui.light,
                  showSymbol: !1,
                  hideMinus: !0,
                  hidePlus: !0
                })]
              }) : (0, y.jsx)(y.Fragment, {
                children: "Previous day"
              })
            })]
          })
        });
      },
      eJ = C.ZP.div.withConfig({
        componentId: "sc-91daf4-7"
      })(["position:absolute;top:-5px;color:", ";font-size:12px;white-space:nowrap;", ";text-align:", ";& > div{opacity:0.5;}", "{display:none;}"], e => e.theme.colors.ui.light, e => e.justifyRight ? "left: 8px;" : "right: 8px;", e => e.justifyRight ? "left" : "right", eu.mq.phablet);
    var eX = t(37373),
      eQ = t(24152),
      e$ = t(1470),
      e0 = {
        src: "/dd/marketing/_next/static/media/share-background.4c1dbd70.png",
        height: 900,
        width: 1440,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUCAgMSFBiiutxXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAE0lEQVR4nGNgwAIYGRkZ4UwkCQAAoAAHYv6POgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5
      },
      e1 = !0;
    function e2() {
      let [e, n] = (0, v.useState)(!1);
      return (0, v.useEffect)(() => {
        n(!0);
      }, []), e;
    }
    function e6(e) {
      var n, t, a;
      let i = null === (n = e.displayCode) || void 0 === n ? void 0 : n.split(":")[0],
        r = null === (t = e.displayCode) || void 0 === t ? void 0 : t.split(":")[1],
        o = (0, R.tn)(r),
        s = e2(),
        c = "/share/".concat(i, "/").concat(e.interval, "/").concat(e.id),
        l = null === (a = new Date().toLocaleTimeString("en-us", {
          timeZoneName: "short"
        })) || void 0 === a ? void 0 : a.split(" ")[2];
      return (0, y.jsxs)(y.Fragment, {
        children: [(0, y.jsx)(e$.Z, {
          title: "".concat(i, " ").concat(J("USD", {})(e.price)),
          pathname: c,
          description: "",
          image: decodeURIComponent(e.metaImage).replace(/&amp;/g, "&")
        }), (0, y.jsx)(eQ.Z, {}), (0, y.jsxs)(e9, {
          children: [(0, y.jsx)(e5, {
            src: e0,
            alt: ""
          }), (0, y.jsxs)(em.Z, {
            style: {
              overflow: "hidden"
            },
            children: [(0, y.jsxs)(nn, {
              children: [(0, y.jsx)(nt, {}), (0, y.jsx)(na, {
                children: (0, y.jsxs)(nc, {
                  style: {
                    background: e.change >= 0 ? "rgba(78, 190, 150, 0.16)" : "rgba(216, 79, 104, 0.1)"
                  },
                  children: [(0, y.jsx)("strong", {
                    children: e.interval
                  }), (0, y.jsx)(e3, {
                    children: "\xb7"
                  }), s && (0, y.jsxs)(Y.Z, {
                    duration: "0.1s",
                    children: [M()(e.dateCreated).format("MMM D, h:mm A"), " ", l]
                  })]
                })
              }), (0, y.jsx)(ni, {
                children: (0, y.jsx)(eB, {
                  data: e.chart,
                  interval: e.interval,
                  previousClose: N.Create(e.previousClose),
                  previousDayEnd: e.previousDayEnd,
                  exchangeHoursActive: e.exchangeHoursActive
                })
              }), (0, y.jsxs)(nr, {
                children: [(0, y.jsxs)("div", {
                  children: [(0, y.jsxs)(ne, {
                    children: [(0, y.jsx)("strong", {
                      children: i
                    }), " ", (0, y.jsx)("span", {
                      children: o.shortName
                    }), " \xb7", " ", (0, y.jsx)("span", {
                      children: e.name
                    })]
                  }), (0, y.jsxs)("div", {
                    children: [(0, y.jsxs)(no, {
                      children: [(0, y.jsx)(X, {
                        value: e.price,
                        color: "#fff",
                        hideMinus: !0,
                        hidePlus: !0
                      }), " "]
                    }), (0, y.jsxs)(ns, {
                      children: [(0, y.jsx)(X, {
                        value: e.change,
                        showSymbol: !1
                      }), " ", (0, y.jsx)($, {
                        value: e.changePercent,
                        brackets: !0
                      }), (0, y.jsx)(nl, {
                        ...e
                      })]
                    })]
                  })]
                }), (0, y.jsx)("div", {
                  children: (0, y.jsx)(nu, {
                    ticker: i,
                    image: e.image
                  })
                })]
              })]
            }), e.wiim && function (e, n) {
              let t = new Date(),
                a = new Date(e),
                i = (t.getTime() - a.getTime()) / 36e5 / 24;
              return n === h["1D"] && i < 7 || n === h["1W"] && i < 9 || n === h["1M"] && i < 45 || n === h["3M"] && i < 100 || n === h["6M"] && i < 180 || n === h["1Y"] && i < 365 || n === h.MAX;
            }(new Date(e.wiimDate), e.interval) && (0, y.jsxs)(e4, {
              children: [(0, y.jsxs)(e7, {
                children: ["Why ", i, " is moving \xb7", " ", (0, y.jsx)(ec, {
                  date: new Date(e.wiimDate),
                  format: "minimal"
                })]
              }), (0, y.jsx)(e8, {
                children: e.wiim
              })]
            })]
          })]
        })]
      });
    }
    let e3 = C.ZP.span.withConfig({
        componentId: "sc-72dd6620-0"
      })(["margin:0 2px;", "{margin:0;}"], eu.mq.phablet),
      e5 = (0, C.ZP)(eX.Z).withConfig({
        componentId: "sc-72dd6620-1"
      })(["position:absolute;filter:blur(50px);left:0;top:0;width:100%;transform:scale(1.15);", "{top:0;filter:blur(40px);transform:translateY(-20%) scale(1.7,1.25);}", "{top:0;transform:translateY(-30%) scale(2.5,1);}"], eu.mq.tablet, eu.mq.phablet),
      e4 = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-2"
      })(["position:relative;text-align:center;max-width:640px;margin:0 auto;"]),
      e7 = C.ZP.h3.withConfig({
        componentId: "sc-72dd6620-3"
      })(["font-weight:600;font-size:12px;line-height:140%;text-align:center;color:", ";margin-bottom:8px;"], e => e.theme.colors.ui.light),
      e8 = C.ZP.p.withConfig({
        componentId: "sc-72dd6620-4"
      })(["font-size:18px;line-height:125%;color:#fff;text-wrap:balance;-webkit-text-wrap:balance;"]),
      e9 = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-5"
      })(["position:relative;padding:188px 0 120px;background:#000;min-height:100vh;display:flex;align-items:flex-start;justify-content:center;overflow:hidden;", "{padding:140px 0 60px;}", "{padding:124px 0 40px;}"], eu.mq.tablet, eu.mq.phablet),
      ne = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-6"
      })(["color:", ";margin-bottom:2px;", "{font-size:11px;margin-bottom:0;}", "{font-size:9px;margin-bottom:-2px;}"], e => e.theme.colors.ui.light, eu.mq.tablet, eu.mq.phablet),
      nn = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-7"
      })(["position:relative;max-width:810px;width:100%;height:464px;border:1px solid rgba(255,255,255,0.09);border-radius:12px;padding:46px 48px 49px;margin:0 auto 48px;z-index:1;background:#000;", "{padding:23px;height:274.41px;max-width:487px;}", "{padding:16px;height:200px;}"], eu.mq.tablet, eu.mq.phablet),
      nt = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-8"
      })(["mask-image:radial-gradient(ellipse at center,rgba(0,0,0,0.6),transparent 100%);position:absolute;width:100%;height:96%;top:0;left:0;background:transparent;background-image:radial-gradient(#323339 0.5px,transparent 0);background-size:6px 6px;background-position:-7.5px -7.5px;pointer-events:none;"]),
      na = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-9"
      })(["display:flex;align-items:center;margin-bottom:34px;", "{margin-bottom:8px;}", "{margin-bottom:12px;}"], eu.mq.tablet, eu.mq.phablet),
      ni = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-10"
      })(["position:relative;width:100%;height:226.31px;margin-bottom:24px;", "{height:152px;margin-bottom:16px;}", "{max-height:100px;margin-bottom:14px;}"], eu.mq.tablet, eu.mq.phablet),
      nr = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-11"
      })(["display:flex;justify-content:space-between;align-items:center;img{box-shadow:0px 98.039px 164.705px rgba(0,0,0,0.2),0px 63.5438px 96.4595px rgba(0,0,0,0.151852),0px 37.7632px 52.4618px rgba(0,0,0,0.121481),0px 19.6078px 26.7646px rgba(0,0,0,0.1);}"]),
      no = C.ZP.span.withConfig({
        componentId: "sc-72dd6620-12"
      })(["font-weight:600;font-size:32px;line-height:1;color:#fff;", "{font-size:20px;}", "{font-size:14px;}"], eu.mq.tablet, eu.mq.phablet),
      ns = C.ZP.span.withConfig({
        componentId: "sc-72dd6620-13"
      })(["font-weight:600;font-size:21px;line-height:25px;", "{font-size:14px;}", "{font-size:10px;}"], eu.mq.tablet, eu.mq.phablet),
      nc = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-14"
      })(["display:flex;flex-direction:row;align-items:center;gap:4px;background:rgba(216,79,104,0.1);border-radius:24px;height:32px;color:", ";", " padding:0 18px;min-width:171.54px;strong{color:#fff;}", "{height:15px;font-size:8px;padding:0 12px;min-width:96px;padding:0 8px;}", "{height:11px;font-size:6px;padding:0 5px;min-width:60px;}"], e => e.theme.colors.ui.light, F.lN, eu.mq.tablet, eu.mq.phablet);
    function nl(e) {
      let {
        displayCode: n,
        closePrice: t,
        afterHoursChange: a,
        afterHoursChangePercent: i,
        interval: r,
        exchangeHoursPhase: o
      } = e;
      return (0, R.ah)(n) ? null : r === h["1D"] && (o === f.AFTER_HOURS || o === f.CLOSED) ? (0, y.jsxs)("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          paddingBottom: "4px",
          color: O.r.colors.ui.light,
          position: "relative",
          top: "-3px",
          gap: "4px",
          fontWeight: "400"
        },
        children: [(0, y.jsx)("svg", {
          width: "6",
          height: "6",
          viewBox: "0 0 6 6",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            margin: "0 2px 0 6px"
          },
          children: (0, y.jsx)("circle", {
            cx: "3",
            cy: "3",
            r: "1",
            color: O.r.colors.ui.light,
            stroke: "rgba(255, 255, 255, 0.36)"
          })
        }), (0, y.jsx)(X, {
          value: t,
          color: O.r.colors.ui.light,
          hidePlus: !0,
          hideMinus: !0,
          showSymbol: !1
        }), (0, y.jsx)(X, {
          value: a,
          color: O.r.colors.ui.light,
          showSymbol: !1
        }), (0, y.jsx)($, {
          value: i,
          color: O.r.colors.ui.light,
          brackets: !0
        })]
      }) : null;
    }
    function nu(e) {
      let {
          ticker: n,
          image: t,
          outline: a = !0,
          shadow: i = !0
        } = e,
        r = n[0] || "?",
        o = "";
      return r <= "Z" && (o = "linear-gradient(180deg, #FF96D5 0%, #EA4DE4 100%)"), r <= "Q" && (o = "linear-gradient(180deg, #EE867E 0%, #EA5B4D 100%)"), r < "J" && (o = "linear-gradient(180deg, #EF9EB2 0%, #EB7993 100%)"), r < "D" && (o = "linear-gradient(180deg, #FDC75E 0%, #E99560 100%)"), r <= "A" && (o = "linear-gradient(180deg, #C3B6F5 0%, #B09FF5 100%)"), (0, y.jsx)(nm, {
        outline: a,
        shadow: i,
        children: (0, y.jsx)(nd, {
          children: t ? (0, y.jsx)("img", {
            alt: "",
            style: {
              width: "100%"
            },
            src: "".concat(el.Z.get("url"), "/logos/").concat(t)
          }) : (0, y.jsx)(ee.Z, {
            gradient: o,
            children: r
          })
        })
      });
    }
    let nm = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-15"
      })(["position:relative;display:flex;align-items:center;border-radius:50%;min-width:", "px;min-height:", "px;width:", "px;height:", "px;font-size:", "px;overflow:hidden;border-radius:7.45px;", " ", " ", "{border-radius:5px;}", "{border-radius:3px;}"], e => e.size, e => e.size, e => e.size, e => e.size, e => e.size / 1.67, e => e.shadow && "\n  box-shadow: ".concat(e.outline ? "0 0 0 ".concat(e.size > 40 ? 1.8 : 1, "px rgb(255 255 255 / 12%),") : "", " 0px 14px 24px rgba(0, 0, 0, 0.28);"), e => e.outline && !e.shadow && "box-shadow: 0 0 0 ".concat(e.size > 40 ? 1.8 : 1, "px rgba(255,255,255,0.08);"), eu.mq.tablet, eu.mq.phablet),
      nd = C.ZP.div.withConfig({
        componentId: "sc-72dd6620-16"
      })(["width:100%;height:100%;display:grid;place-items:center;position:relative;line-height:1;width:46px;height:46px;background:", ";& > span{font-weight:600;}", "{width:28px;height:28px;}", "{width:20px;height:20px;}"], e => e.theme.colors.ui.medium, eu.mq.tablet, eu.mq.phablet);
  }
}]);