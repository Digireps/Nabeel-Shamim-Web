const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, from, to, subject, isEbook, company, role } = await req.json();

    if (!isEbook && (!name || !email || !message)) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    let emailTo = to || ["Muhammad@digireps.co"];
    let emailSubject = subject || `New Contact: ${name}`;
    let emailHtml = "";

    if (isEbook) {
      emailTo = [email];
      emailSubject = subject || "Your Free Copy of Nabeel Shamim’s Five Lens™";
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937;">
          <h2 style="color: #030712; font-size: 24px; font-weight: 800; margin-bottom: 16px;">Hello ${name},</h2>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for requesting a free copy of <strong>Nabeel Shamim's Five Lens™: Dissecting and Solving Critical Business Challenges through MPACT™</strong>.
          </p>
          <div style="margin: 32px 0; text-align: center;">
            <a href="https://cmsijfquhidzaaqxujzd.supabase.co/storage/v1/object/public/publications/five-lens-ebook.pdf" 
               style="background-color: #030712; color: #ffffff; padding: 14px 28px; border-radius: 9999px; text-decoration: none; font-size: 14px; font-weight: bold; display: inline-block;">
              Download E-Book (PDF)
            </a>
          </div>
          <p style="font-size: 14px; color: #6b7280; line-height: 1.6;">
            If the button above does not work, copy and paste this URL into your browser:<br>
            <a href="https://cmsijfquhidzaaqxujzd.supabase.co/storage/v1/object/public/publications/five-lens-ebook.pdf" style="color: #2563eb;">
              https://cmsijfquhidzaaqxujzd.supabase.co/storage/v1/object/public/publications/five-lens-ebook.pdf
            </a>
          </p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
          <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            &copy; 2026 Nabeel Shamim. All rights reserved.
          </p>
        </div>
      `;
    } else {
      emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: from || "Nabeel Shamim <contact@nabeelshamim.com>",
        to: emailTo,
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
