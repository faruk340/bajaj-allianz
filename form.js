// ================================table-2 Data====================================

const passData = (value) => {
  // const quotatuionWorksheet = document.getElementById(
  //   "quotatuionWorksheet"
  // ).value;
  // localStorage.setItem("quotatuionWorksheet", quotatuionWorksheet);

  const CustomerName = document.getElementById("CustomerName").value;
  if (CustomerName === "") {
    const CustomerName = "-";
    localStorage.setItem("CustomerName", CustomerName);
  } else {
    localStorage.setItem("CustomerName", CustomerName);
  }

  const QuoteDate = document.getElementById("QuoteDate").value;
  if (QuoteDate === "") {
    const QuoteDate = "-";
    localStorage.setItem("QuoteDate", QuoteDate);
  } else {
    localStorage.setItem("QuoteDate", QuoteDate);
  }

  // ================================table-3 Data====================================

  const modelNumber = document.getElementById("modelNumber").value;
  if (modelNumber === "") {
    const modelNumber = "-";
    localStorage.setItem("modelNumber", modelNumber);
  } else {
    localStorage.setItem("modelNumber", modelNumber);
  }

  const rtoLocatio = document.getElementById("rtoLocatio").value;
  if (rtoLocatio === "") {
    const rtoLocatio = "-";
    localStorage.setItem("rtoLocatio", rtoLocatio);
  } else {
    localStorage.setItem("rtoLocatio", rtoLocatio);
  }

  const mfgYear = document.getElementById("mfgYear").value;
  if (mfgYear === "") {
    const mfgYear = "-";
    localStorage.setItem("mfgYear", mfgYear);
  } else {
    localStorage.setItem("mfgYear", mfgYear);
  }

  const registrationDate = document.getElementById("registrationDate").value;
  if (registrationDate === "") {
    const registrationDate = "-";
    localStorage.setItem("registrationDate", registrationDate);
  } else {
    localStorage.setItem("registrationDate", registrationDate);
  }

  const cubicCapacity = document.getElementById("cubicCapacity").value;
  if (cubicCapacity === "") {
    const cubicCapacity = "-";
    localStorage.setItem("cubicCapacity", cubicCapacity);
  } else {
    localStorage.setItem("cubicCapacity", cubicCapacity);
  }

  // const seatingCapacity = document.getElementById("seatingCapacity").value;
  // if (seatingCapacity === "") {
  //   const seatingCapacity = "-";
  //   localStorage.setItem("seatingCapacity", seatingCapacity);
  // } else {
  //   localStorage.setItem("seatingCapacity", seatingCapacity);
  // }

  const fuelType = document.getElementById("fuelType").value;
  if (fuelType === "") {
    const fuelType = "-";
    localStorage.setItem("fuelType", fuelType);
  } else {
    localStorage.setItem("fuelType", fuelType);
  }

  // // ===========================================================================================

  const PolicyYear = document.getElementById("PolicyYear").value;
  if (PolicyYear === "") {
    const PolicyYear = "-";
    localStorage.setItem("PolicyYear", PolicyYear);
  } else {
    localStorage.setItem("PolicyYear", PolicyYear);
  }

  const IdvVehicle = document.getElementById("IdvVehicle").value;
  if (IdvVehicle === "") {
    const IdvVehicle = "-";
    localStorage.setItem("IdvVehicle", IdvVehicle);
  } else {
    localStorage.setItem("IdvVehicle", IdvVehicle);
  }

  // const IdvTrailer = document.getElementById("IdvTrailer").value;
  // if (IdvTrailer === "") {
  //   const IdvTrailer = "-";
  //   localStorage.setItem("IdvTrailer", IdvTrailer);
  // } else {
  //   localStorage.setItem("IdvTrailer", IdvTrailer);
  // }

  const LPGKit = document.getElementById("LPGKit").value;
  if (LPGKit === "") {
    const LPGKit = "-";
    localStorage.setItem("LPGKit", LPGKit);
  } else {
    localStorage.setItem("LPGKit", LPGKit);
  }

  const ElectricalAccessories = document.getElementById(
    "ElectricalAccessories"
  ).value;
  if (ElectricalAccessories === "") {
    const ElectricalAccessories = "-";
    localStorage.setItem("ElectricalAccessories", ElectricalAccessories);
  } else {
    localStorage.setItem("ElectricalAccessories", ElectricalAccessories);
  }

  const NonElectricalAccessories = document.getElementById(
    "NonElectricalAccessories"
  ).value;
  if (NonElectricalAccessories === "") {
    const NonElectricalAccessories = "-";
    localStorage.setItem("NonElectricalAccessories", NonElectricalAccessories);
  } else {
    localStorage.setItem("NonElectricalAccessories", NonElectricalAccessories);
  }

  const TotalIdv = document.getElementById("TotalIdv").value;
  if (TotalIdv === "") {
    const TotalIdv = "-";
    localStorage.setItem("TotalIdv", TotalIdv);
  } else {
    localStorage.setItem("TotalIdv", TotalIdv);
  }

  // ================================table-4 Data====================================
  // const qtNumber = document.getElementById("qtNumber").value;
  // if (qtNumber === "") {
  //   const qtNumber = "None";
  //   localStorage.setItem("qtNumber", qtNumber);
  // } else {
  //   localStorage.setItem("qtNumber", qtNumber);
  // }

  // const plan = document.getElementById("plan").value;
  // localStorage.setItem("plan", plan);

  //   ========================================================================================

  // const ODpremium = document.getElementById("ODpremium").value;
  // if (ODpremium === "") {
  //   const ODpremium = "000";
  //   localStorage.setItem("ODpremium", ODpremium);
  // } else {
  //   localStorage.setItem("ODpremium", ODpremium);
  // }

  const Discounts = document.getElementById("Discounts").value;
  if (Discounts === "") {
    const Discounts = "000";
    localStorage.setItem("Discounts", Discounts);
  } else {
    localStorage.setItem("Discounts", Discounts);
  }

  const Noclaimbonus = document.getElementById("Noclaimbonus").value;
  if (Noclaimbonus === "") {
    const Noclaimbonus = "000";
    localStorage.setItem("Noclaimbonus", Noclaimbonus);
  } else {
    localStorage.setItem("Noclaimbonus", Noclaimbonus);
  }

  const Ncb = document.getElementById("Ncb").value;
  if (Ncb === "") {
    const Ncb = "000";
    localStorage.setItem("Ncb", Ncb);
  } else {
    localStorage.setItem("Ncb", Ncb);
  }

  const DamagePremium = document.getElementById("DamagePremium").value;
  if (DamagePremium === "") {
    const DamagePremium = "000";
    localStorage.setItem("DamagePremium", DamagePremium);
  } else {
    localStorage.setItem("DamagePremium", DamagePremium);
  }

  const AddOnCover = document.getElementById("AddOnCover").value;
  if (AddOnCover === "") {
    const AddOnCover = "000";
    localStorage.setItem("AddOnCover", AddOnCover);
  } else {
    localStorage.setItem("AddOnCover", AddOnCover);
  }
  // ===============================add-On==========================

  const DepreciationReImbursement = document.getElementById(
    "DepreciationReImbursement"
  ).checked;
  if (DepreciationReImbursement === true) {
    const De_preciationReImbursement = "Zero Depreciation, ";
    localStorage.setItem(
      "D_epreciationReImbursement",
      De_preciationReImbursement
    );
  } else {
    const De_preciationReImbursement = "";
    localStorage.setItem(
      "D_epreciationReImbursement",
      De_preciationReImbursement
    );
  }

  const FiberandRubber = document.getElementById("FiberandRubber").checked;
  if (FiberandRubber === true) {
    const Fi_berandRubber = "24*7 Spot Assistance, ";
    localStorage.setItem("F_iberandRubber", Fi_berandRubber);
  } else {
    const Fi_berandRubber = "";
    localStorage.setItem("F_iberandRubber", Fi_berandRubber);
  }

  const Emergencytransport =
    document.getElementById("Emergencytransport").checked;
  if (Emergencytransport === true) {
    const Em_ergencytransport = "Engine Protector, ";
    localStorage.setItem("E_mergencytransport", Em_ergencytransport);
  } else {
    const Em_ergencytransport = "";
    localStorage.setItem("E_mergencytransport", Em_ergencytransport);
  }

  const KeyReplacement = document.getElementById("KeyReplacement").checked;
  if (KeyReplacement === true) {
    const Ke_yReplacement = "Consumable Expenses, ";
    localStorage.setItem("K_eyReplacement", Ke_yReplacement);
  } else {
    const Ke_yReplacement = "";
    localStorage.setItem("K_eyReplacement", Ke_yReplacement);
  }

  const Lossofpersonal = document.getElementById("Lossofpersonal").checked;
  if (Lossofpersonal === true) {
    const Lo_ssofpersonal = "Keys and Locks Replacement Cover, ";
    localStorage.setItem("L_ossofpersonal", Lo_ssofpersonal);
  } else {
    const Lo_ssofpersonal = "";
    localStorage.setItem("L_ossofpersonal", Lo_ssofpersonal);
  }

  const EngineSecure = document.getElementById("EngineSecure").checked;
  if (EngineSecure === true) {
    const En_gineSecure = "Personal Baggage Cover, ";
    localStorage.setItem("E_ngineSecure", En_gineSecure);
  } else {
    const En_gineSecure = "";
    localStorage.setItem("E_ngineSecure", En_gineSecure);
  }

  const ConsumableExpenses =
    document.getElementById("ConsumableExpenses").checked;
  if (ConsumableExpenses === true) {
    const Co_nsumableExpenses = "Return to Invoice, ";
    localStorage.setItem("C_onsumableExpenses", Co_nsumableExpenses);
  } else {
    const Co_nsumableExpenses = "";
    localStorage.setItem("C_onsumableExpenses", Co_nsumableExpenses);
  }

  const TyreSecure = document.getElementById("TyreSecure").checked;
  if (TyreSecure === true) {
    const Ty_reSecure = "Tyre Safeguard, ";
    localStorage.setItem("T_yreSecure", Ty_reSecure);
  } else {
    const Ty_reSecure = "";
    localStorage.setItem("T_yreSecure", Ty_reSecure);
  }

  const ReturnToInvoice = document.getElementById("ReturnToInvoice").checked;
  if (ReturnToInvoice === true) {
    const Re_turnToInvoice = "Conveyance Benefit, ";
    localStorage.setItem("R_eturnToInvoice", Re_turnToInvoice);
  } else {
    const Re_turnToInvoice = "";
    localStorage.setItem("R_eturnToInvoice", Re_turnToInvoice);
  }
  // ===============================================================================

  const BasicTPpremium = document.getElementById("BasicTPpremium").value;
  if (BasicTPpremium === "") {
    const BasicTPpremium = "000";
    localStorage.setItem("BasicTPpremium", BasicTPpremium);
  } else {
    localStorage.setItem("BasicTPpremium", BasicTPpremium);
  }

  const PAtoOwnerDriver = document.getElementById("PAtoOwnerDriver").value;
  if (PAtoOwnerDriver === "") {
    const PAtoOwnerDriver = "000";
    localStorage.setItem("PAtoOwnerDriver", PAtoOwnerDriver);
  } else {
    localStorage.setItem("PAtoOwnerDriver", PAtoOwnerDriver);
  }

  const LLtoPaidDriver = document.getElementById("LLtoPaidDriver").value;
  if (LLtoPaidDriver === "") {
    const LLtoPaidDriver = "000";
    localStorage.setItem("LLtoPaidDriver", LLtoPaidDriver);
  } else {
    localStorage.setItem("LLtoPaidDriver", LLtoPaidDriver);
  }

  const LLtoEmployee = document.getElementById("LLtoEmployee").value;
  if (LLtoEmployee === "") {
    const LLtoEmployee = "000";
    localStorage.setItem("LLtoEmployee", LLtoEmployee);
  } else {
    localStorage.setItem("LLtoEmployee", LLtoEmployee);
  }

  const PassengerCoverage = document.getElementById("PassengerCoverage").value;
  if (PassengerCoverage === "") {
    const PassengerCoverage = "000";
    localStorage.setItem("PassengerCoverage", PassengerCoverage);
  } else {
    localStorage.setItem("PassengerCoverage", PassengerCoverage);
  }

  const cngLpg = document.getElementById("cngLpg").value;
  if (cngLpg === "") {
    const cngLpg = "000";
    localStorage.setItem("cngLpg", cngLpg);
  } else {
    localStorage.setItem("cngLpg", cngLpg);
  }

  const netPremium = document.getElementById("netPremium").value;
  if (netPremium === "") {
    const netPremium = "000";
    localStorage.setItem("netPremium", netPremium);
  } else {
    localStorage.setItem("netPremium", netPremium);
  }

  const CGSTIGST = document.getElementById("CGSTIGST").value;
  if (CGSTIGST === "") {
    const CGSTIGST = "000";
    localStorage.setItem("CGSTIGST", CGSTIGST);
  } else {
    localStorage.setItem("CGSTIGST", CGSTIGST);
  }

  const totalPremium = document.getElementById("totalPremium").value;
  if (totalPremium === "") {
    const totalPremium = "000";
    localStorage.setItem("totalPremium", totalPremium);
  } else {
    localStorage.setItem("totalPremium", totalPremium);
  }

  // const SgatUgst = document.getElementById("SgatUgst").value;
  // if (SgatUgst === "") {
  //   const SgatUgst = "000";
  //   localStorage.setItem("SgatUgst", SgatUgst);
  // } else {
  //   localStorage.setItem("SgatUgst", SgatUgst);
  // }

  // ==============================

  return false;
};
