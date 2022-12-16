// ================================table-2 Data====================================

// document.getElementById("quotatuion_Worksheet").innerHTML =
//   localStorage.getItem("quotatuionWorksheet");

// // =======================

document.getElementById("Producer_Name").innerHTML =
  localStorage.getItem("CustomerName");
// // ===================================

document.getElementById("Quote_Date").innerHTML =
  localStorage.getItem("QuoteDate");

// document.getElementById("Policy_Plan").innerHTML =
//   localStorage.getItem("PolicyPlan");

// ================================table-3 Data====================================

document.getElementById("mode_lNumber").innerHTML =
  localStorage.getItem("modelNumber");

document.getElementById("rto_Locatio").innerHTML =
  localStorage.getItem("rtoLocatio");

document.getElementById("mfg_Year").innerHTML = localStorage.getItem("mfgYear");

document.getElementById("registration_Date").innerHTML =
  localStorage.getItem("registrationDate");

document.getElementById("cubic_Capacity").innerHTML =
  localStorage.getItem("cubicCapacity");

// document.getElementById("seating_Capacity").innerHTML =
//   localStorage.getItem("seatingCapacity");

document.getElementById("fuel_Type").innerHTML =
  localStorage.getItem("fuelType");

// ======================================new=======================================

// document.getElementById("dynamic_Data").innerHTML =
//   localStorage.getItem("planTwo");

// document.getElementById("plan_Two").innerHTML =
//   localStorage.getItem("planName");

// =====================================================================================
document.getElementById("Policy_Year").innerHTML =
  localStorage.getItem("PolicyYear");

document.getElementById("Idv_Vehicle").innerHTML =
  localStorage.getItem("IdvVehicle");

// document.getElementById("Idv_Trailer").innerHTML =
//   localStorage.getItem("IdvTrailer");

document.getElementById("LPG_Kit").innerHTML = localStorage.getItem("LPGKit");

document.getElementById("Electrical_Accessories").innerHTML =
  localStorage.getItem("ElectricalAccessories");

document.getElementById("NonElectrical_Accessories").innerHTML =
  localStorage.getItem("NonElectricalAccessories");

document.getElementById("Total_Idv").innerHTML =
  localStorage.getItem("TotalIdv");

// ================================table-4 Data====================================

// document.getElementById("qt_Number").innerHTML =
//   localStorage.getItem("qtNumber");

// document.getElementById("Quotation_No").innerHTML =
//   localStorage.getItem("qtNumber");

// document.getElementById("plan").innerHTML = localStorage.getItem("plan");

// =====================================================================================

// document.getElementById("OD_premium").innerHTML =
//   localStorage.getItem("ODpremium");

document.getElementById("Dis_counts").innerHTML =
  localStorage.getItem("Discounts");

document.getElementById("N_cb").innerHTML = localStorage.getItem("Ncb");

document.getElementById("No_claimbonus").innerHTML =
  localStorage.getItem("Noclaimbonus");

document.getElementById("Damage_Premium").innerHTML =
  localStorage.getItem("DamagePremium");

document.getElementById("AddOn_Cover").innerHTML =
  localStorage.getItem("AddOnCover");

// ===============================add-On==========================

document.getElementById("Depreciation_ReImbursement").innerHTML =
  localStorage.getItem("D_epreciationReImbursement");

document.getElementById("Fiber_andRubber").innerHTML =
  localStorage.getItem("F_iberandRubber");

document.getElementById("Emergency_transport").innerHTML = localStorage.getItem(
  "E_mergencytransport"
);

document.getElementById("Key_Replacement").innerHTML =
  localStorage.getItem("K_eyReplacement");

document.getElementById("Loss_ofpersonal").innerHTML =
  localStorage.getItem("L_ossofpersonal");

document.getElementById("Engine_Secure").innerHTML =
  localStorage.getItem("E_ngineSecure");

document.getElementById("Consumable_Expenses").innerHTML = localStorage.getItem(
  "C_onsumableExpenses"
);

document.getElementById("Tyre_Secure").innerHTML =
  localStorage.getItem("T_yreSecure");

document.getElementById("Return_ToInvoice").innerHTML =
  localStorage.getItem("R_eturnToInvoice");

// =====================================================================

document.getElementById("Basic_TPpremium").innerHTML =
  localStorage.getItem("BasicTPpremium");

// =================================
document.getElementById("PAtoOwner_Driver").innerHTML =
  localStorage.getItem("PAtoOwnerDriver");

document.getElementById("LLtoPaid_Driver").innerHTML =
  localStorage.getItem("LLtoPaidDriver");

// document.getElementById("LL_toEmployee").innerHTML =
//   localStorage.getItem("LLtoEmployee");

document.getElementById("Passenger_Coverage").innerHTML =
  localStorage.getItem("PassengerCoverage");

document.getElementById("cng_Lpg").innerHTML = localStorage.getItem("cngLpg");

// ====================

document.getElementById("net_Premium").innerHTML =
  localStorage.getItem("netPremium");

document.getElementById("CGST_IGST").innerHTML =
  localStorage.getItem("CGSTIGST");

// // ==========================================
document.getElementById("total_Premium").innerHTML =
  localStorage.getItem("totalPremium");

// document.getElementById("total_Premium_Two").innerHTML =
//   localStorage.getItem("totalPremium");

// ================================================== Print-Pdf====================================

const my_pdf = (allValue) => {
  const wholepage = document.body.innerHTML;
  const pdfValue = document.getElementById("element-to-print").innerHTML;
  document.body.innerHTML = pdfValue;
  window.print();
};

// ============================================ download-pdf =========================================
function addScript(url) {
  var script = document.createElement("script");
  script.type = "application/javascript";
  script.src = url;
  document.head.appendChild(script);
}
addScript(
  "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
);
const download = () => {
  var element = document.getElementById("element-to-print");
  var opt = {
    margin: 0.1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
  };
  html2pdf().from(element).set(opt).save();
  html2pdf(element, opt);
};

// ================================header-animation====================
const scrollOffset = 100;

const scrollElement = document.querySelector(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add("scrolled");
};

const hideScrollElement = () => {
  scrollElement.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement();
  } else {
    hideScrollElement();
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
