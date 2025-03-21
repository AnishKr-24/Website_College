import React, { useState } from "react";

const CmsAllopathy = () => {
  const [showMedicines, setShowMedicines] = useState(false);

  const medicinesList = [
    "Glucose Powder D&C",
    "Oral Rehydration Salt",
    "Lime Water",
    "Camphor Water",
    "Chlorine Water",
    "Hydrogen Per Oxide",
    "Acriflavin Powder (Lotion)",
    "Gention Violet Paint",
    "Carbolic Acid",
    "Povidine Lodine (Solution, Ointment)",
    "Ring Worm Ointment (White Fields Liniment)",
    "Neomycin- Bactricine Ointment",
    "Benzyl Benzoate Lotion",
    "Gama Benzene Hexa Chloride (Lindane)",
    "Potassium Per Magnate (KMnO4)",
    "Calamine Lotion",
    "Zinc Sulphate Powder",
    "Sulphur Powder",
    "Boric Powder",
    "Castor Oil",
    "Glycerin",
    "Magnesium Sulphate",
    "Belladonna",
    "Aspirin",
    "Paracetamol",
    "Ibuprofen",
    "Diclofenac",
    "Chlorpheniramine Maleate",
    "Cetirizine Hydrochloride",
    "Gripe Water",
    "Vitamin A",
    "Vitamin B Complex",
    "Vitamin C",
    "Vitamin D",
    "Vitamin E",
    "Isabgol Powder",
    "Senna Leaves",
    "Sodium Bi-Carbonate",
    "Yeast Tablets",
    "Piperazine Powder",
    "Mebendazole",
    "Ferrus Sulphate (Iron Preparations)",
    "Procain Hydrochloride",
    "Furazolidone",
    "Metronidazole",
    "Kaolin Powder",
    "Liver Pills & Syrup",
    "Folic Acid",
    "Magnesium Trisilicate",
    "Calcium Pills",
    "Calcium Lactate",
    "Ashoka Cordial",
    "Oral Contraceptive Pills & Syrup",
    "Enzyme Tablets",
    "Haemostatic Tablets",
    "Diethyl Carbamazine Citrate (Benocide)",
    "Ephedrine",
    "Aminophylline Tablets",
    "Codeine Sulphate",
    "Dexamethasone",
    "Betamethasone",
    "Chloroquine",
    "Primaquine",
    "Domperidone",
    "Diazepam",
    "Dicyclomine Hydrochloride",
    "Atropine",
    "Co-Trimoxazole",
    "Sulphadimidine",
    "Penicillin",
    "Amoxicillin",
    "Ampicillin",
    "Gentamycin",
    "Tetracycline",
    "Chloramphenicol",
    "Dextrose 5% Sodium Chloride 9% Injection",
    "Tobramycin",
    "Griseofulvin Tablets",
    "Streptomycin",
    "DDS (Sulphone)",
    "Rifampicin Capsules",
    "Clofazimine Tablets",
    "Isoniazid Tablets",
    "Rifampicin Capsules",
    "Thiocetazone Isoniazid Tablets",
    "Pyrazinamide Tablets",
    "Tuberculosis Tablet",
    "Paracetamol + Ibuprofen or Diclofenac",
    "Iodex Ointment",
    "Corex or Vicks 44 Cough Syrup",
    "Multivitamin Tablets or Capsules",
    "Etophylline Tablets",
    "Betnovate N, C Skin Ointment",
    "DPT Vaccine",
    "Carminative Mixture",
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        CMS ALLOPATHY
      </h1>

      {/* WHO Logo */}
      <div className="flex justify-center mb-4">
        <img
          src="WHO.jpg"
          alt="WHO Logo"
          className="w-32"
        />
      </div>

      {/* Course Table */}
      <div className="border rounded-lg overflow-hidden mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-300 text-gray-800 font-semibold">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name of the Course</th>
              <th className="p-2 border">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-2 border text-center">1</td>
              <td className="p-2 border">CMS ALLOPATHY</td>
              <td className="p-2 border text-center">TWO YEARS</td>
            </tr>
            <tr className="border bg-orange-100">
              <td className="p-2 border text-center">2</td>
              <td className="p-2 border">CMS ED</td>
              <td className="p-2 border text-center">TWO YEARS</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-justify">
        CMS Diploma holders can provide primary healthcare services using
        allopathic medicines recommended by the World Health Organization (WHO).
        This list is based on the book "Essential Drugs for Primary Health Care"
        published by WHO, Geneva, Switzerland, and a book written by Spanish Dr.
        David Warner, published by the Voluntary Health Association of India,
        New Delhi.
      </p>

      {/* Show/Hide Medicines List */}
      <div className="mt-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowMedicines(!showMedicines)}
        >
          {showMedicines ? "Hide" : "Show"} WHO-Recommended Medicines
        </button>

        {showMedicines && (
          <div className="bg-gray-200 p-4 mt-4 rounded-lg">
            <h3 className="text-lg font-bold text-blue-700">
              🩺 List of Medicines
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-800 mt-2">
              {medicinesList.map((medicine, index) => (
                <li key={index} className="border-b border-gray-400 py-1">
                  {medicine}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Legal Status */}
      <div className="bg-gray-100 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-bold text-red-700">📜 Legal Status</h3>
        <p className="text-gray-700 mt-2">
          The CMS Diploma is valid across India for practice using harmless
          general allopathic medicines for primary health care, as per the
          Hon’ble Supreme Court of India.
        </p>
      </div>
    </div>
  );
};

export default CmsAllopathy;
