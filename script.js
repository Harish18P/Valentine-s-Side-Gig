/* Populate Time Dropdowns */

function go(page) {
    window.location.href = page;
}


(function populateTime() {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");

  if (!hour || !minute) return;

  for (let h = 8; h <= 23; h++) {
    hour.innerHTML += `<option value="${h}">${h}:00</option>`;
  }

  ["00", "15", "30", "45"].forEach(m => {
    minute.innerHTML += `<option value="${m}">${m}</option>`;
  });
})();

/* Build Message */
function buildMessage() {
  const number = document.getElementById("number").value.trim();
  const hour = document.getElementById("hour").value;
  const minute = document.getElementById("minute").value;
  const message = document.getElementById("message").value.trim();

  if (!number || !message) {
    alert("Fill all fields before sending love 😤💘");
    return null;
  }

  const finalMessage =
`Time: ${hour}:${minute}
I have a message for you 💖:

${message}`;

  return {
    number,
    text: encodeURIComponent(finalMessage)
  };
}

/* WhatsApp Deep Link */
function sendWhatsApp() {
  const data = buildMessage();
  if (!data) return;

  const url = `https://wa.me/${data.number}?text=${data.text}`;
  window.open(url, "_blank");
}

/* SMS Deep Link */
function sendSMS() {
  const data = buildMessage();
  if (!data) return;

  const url = `sms:${data.number}?body=${data.text}`;
  window.location.href = url;
}