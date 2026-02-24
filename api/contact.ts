export default async function handler(request: any, response: any) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, message } = request.body || {};

    if (!name || !email || !message) {
      return response.status(400).json({
        error: "Missing required fields",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return response.status(400).json({
        error: "Invalid email address",
      });
    }

    const payload = {
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      subject: subject ? String(subject).slice(0, 200) : "",
      message: String(message).slice(0, 5000),
    };

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } else {
      console.log("Contact form submission:", payload);
    }

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
}

