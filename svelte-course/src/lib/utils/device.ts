const rates: Record<string, Record<string, number>> = {
  xaf: {  // franc cfa (afrique centrale)
    xaf: 1,
    xof: 0.85,
    ngn: 0.65,
    zar: 0.025,
    kes: 0.035,
    ugx: 30.00,
    tzs: 25.00,
  },
  xof: {  // franc cfa (afrique de l'ouest)
    xaf: 1.18,
    xof: 1,
    ngn: 0.76,
    zar: 0.029,
    kes: 0.041,
    ugx: 35.29,
    tzs: 29.41,
  },
  ngn: {  // naira nigérian
    xaf: 1.54,
    xof: 1.32,
    ngn: 1,
    zar: 0.038,
    kes: 0.054,
    ugx: 46.15,
    tzs: 38.46,
  },
  zar: {  // rand sud-africain
    xaf: 40.00,
    xof: 34.48,
    ngn: 26.32,
    zar: 1,
    kes: 1.40,
    ugx: 1176.47,
    tzs: 980.39,
  },
  kes: {  // shilling kényan
    xaf: 28.57,
    xof: 24.69,
    ngn: 18.52,
    zar: 0.71,
    kes: 1,
    ugx: 840.00,
    tzs: 700.00,
  },
  ugx: {  // shilling ougandais
    xaf: 0.033,
    xof: 0.028,
    ngn: 0.022,
    zar: 0.00085,
    kes: 0.0012,
    ugx: 1,
    tzs: 0.83,
  },
  tzs: {  // shilling tanzanien
    xaf: 0.04,
    xof: 0.034,
    ngn: 0.026,
    zar: 0.00102,
    kes: 0.0014,
    ugx: 1.20,
    tzs: 1,
  },
};

export default rates;









// const rates: Record<string, Record<string, number>> = {
//     XAF: {  // Franc CFA (Afrique Centrale)
//       XAF: 1,
//       XOF: 0.85,
//       NGN: 0.65,
//       ZAR: 0.025,
//       KES: 0.035,
//       UGX: 30.00,
//       TZS: 25.00,
//     },
//     XOF: {  // Franc CFA (Afrique de l'Ouest)
//       XAF: 1.18,
//       XOF: 1,
//       NGN: 0.76,
//       ZAR: 0.029,
//       KES: 0.041,
//       UGX: 35.29,
//       TZS: 29.41,
//     },
//     NGN: {  // Naira nigérian
//       XAF: 1.54,
//       XOF: 1.32,
//       NGN: 1,
//       ZAR: 0.038,
//       KES: 0.054,
//       UGX: 46.15,
//       TZS: 38.46,
//     },
//     ZAR: {  // Rand sud-africain
//       XAF: 40.00,
//       XOF: 34.48,
//       NGN: 26.32,
//       ZAR: 1,
//       KES: 1.40,
//       UGX: 1176.47,
//       TZS: 980.39,
//     },
//     KES: {  // Shilling kényan
//       XAF: 28.57,
//       XOF: 24.69,
//       NGN: 18.52,
//       ZAR: 0.71,
//       KES: 1,
//       UGX: 840.00,
//       TZS: 700.00,
//     },
//     UGX: {  // Shilling ougandais
//       XAF: 0.033,
//       XOF: 0.028,
//       NGN: 0.022,
//       ZAR: 0.00085,
//       KES: 0.0012,
//       UGX: 1,
//       TZS: 0.83,
//     },
//     TZS: {  // Shilling tanzanien
//       XAF: 0.04,
//       XOF: 0.034,
//       NGN: 0.026,
//       ZAR: 0.00102,
//       KES: 0.0014,
//       UGX: 1.20,
//       TZS: 1,
//     },
//   };
  
//   export default rates;