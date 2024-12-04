function navigateTo(sectionId) {
    document.querySelectorAll("section").forEach(section => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
  }
  
  function goBack() {
    document.querySelectorAll("section").forEach(section => {
      section.classList.add("hidden");
    });
  }
  
  function diagnose() {
    const symptom = document.getElementById("symptomInput").value;
    const result = symptom
      ? `Diagnosis for "${symptom}" suggests possible conditions such as Flu, Migraine, or Stress.`
      : "Please enter a symptom.";
    document.getElementById("diagnosisResult").innerText = result;
  }
  