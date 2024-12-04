// 1. وظيفة لتشخيص الأعراض
function diagnoseSymptoms() {
  const symptoms = document.getElementById('symptomsInput').value.trim();

  if (symptoms === '') {
      document.getElementById('diagnosisResult').innerHTML = '<p>يرجى إدخال الأعراض.</p>';
      return;
  }

  // مثال لنتيجة ثابتة (يجب استبدالها بنظام ذكاء اصطناعي لاحقًا)
  const diagnosis = `
      <p>الأعراض المدخلة: ${symptoms}</p>
      <p>التشخيص المحتمل: نزلة برد (Common Cold)</p>
      <p><strong>الأسباب:</strong> عدوى فيروسية.</p>
      <p><strong>العلاج الموصى به:</strong> الراحة، شرب السوائل، وخافض للحرارة إذا لزم الأمر.</p>
  `;
  document.getElementById('diagnosisResult').innerHTML = diagnosis;
}

// 2. وظيفة للإجابة على الأسئلة الطبية
function askMedicalQuestion() {
  const question = document.getElementById('medicalQuestion').value.trim();

  if (question === '') {
      document.getElementById('qaResult').innerHTML = '<p>يرجى إدخال سؤال طبي.</p>';
      return;
  }

  // مثال لنتيجة ثابتة (يجب استبدالها بمحرك أسئلة وأجوبة طبي)
  const answer = `
      <p>سؤالك: ${question}</p>
      <p><strong>الإجابة:</strong> من فضلك استشر طبيبك للحصول على إجابة دقيقة. لمزيد من المعلومات، يمكنك زيارة <a href="#">هذا الرابط</a>.</p>
  `;
  document.getElementById('qaResult').innerHTML = answer;
}

// 3. وظيفة للبحث في قاعدة بيانات الأدوية
function searchMedication() {
  const medication = document.getElementById('medicationSearch').value.trim();

  if (medication === '') {
      document.getElementById('medicationResult').innerHTML = '<p>يرجى إدخال اسم الدواء أو الحالة.</p>';
      return;
  }

  // مثال لنتيجة ثابتة (يجب استبدالها بقاعدة بيانات للأدوية)
  const medicationInfo = `
      <p>نتيجة البحث: ${medication}</p>
      <p><strong>الدواء:</strong> باراسيتامول (Paracetamol)</p>
      <p><strong>الجرعة:</strong> 500 مجم كل 8 ساعات.</p>
      <p><strong>الآثار الجانبية:</strong> غثيان، دوار، حساسية.</p>
  `;
  document.getElementById('medicationResult').innerHTML = medicationInfo;
}

// 4. وظيفة لإعداد التذكيرات الصحية
document.getElementById('reminderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const reminderType = document.getElementById('reminderType').value;
  const reminderDate = document.getElementById('reminderDate').value;

  if (reminderDate === '') {
      alert('يرجى تحديد تاريخ التذكير.');
      return;
  }

  alert(`تم إعداد تذكير: ${reminderType} في ${reminderDate}`);
});
