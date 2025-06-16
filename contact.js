<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Azizbek | Portfolio</title>

  <!-- CSS -->
  <link rel="stylesheet" href="css/style.css" />

  <!-- JavaScript -->
  <script src="js/main.js" defer></script>
  <script src="js/contact.js" defer></script>

  <!-- Favicon (agar mavjud bo‘lsa) -->
  <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
</head>

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const status = document.getElementById("status");
  
    const telegramToken = "BOT_TOKEN_BU_YERGA"; // o‘zingni bot tokeningni yoz
    const chatID = "CHAT_ID_BU_YERGA"; // o‘zingni chat ID ni yoz
  
    const text = `🆕 Yangi xabar\n👤 Ismi: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`;
  
    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatID,
        text: text
      })
    })
    .then(res => {
      if (res.ok) {
        status.innerText = "✅ Xabaringiz yuborildi!";
        document.getElementById("contact-form").reset();
      } else {
        status.innerText = "❌ Xabar yuborishda xatolik.";
      }
    })
    .catch(() => {
      status.innerText = "❌ Tarmoq xatoligi.";
    });
  });
  