const welcomeEmailTemplate = (name) => {
  return `
  <div style="
    margin:0;
    padding:0;
    background:#0b0f19;
    font-family:Arial, sans-serif;
  ">
    <div style="
      max-width:600px;
      margin:40px auto;
      background:#111827;
      border-radius:16px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,0.08);
      box-shadow:0 0 40px rgba(99,102,241,0.15);
    ">

      <!-- Header -->
      <div style="
        background:linear-gradient(135deg,#6366f1,#8b5cf6);
        padding:30px;
        text-align:center;
      ">
        <h1 style="
          margin:0;
          color:white;
          font-size:24px;
          letter-spacing:1px;
        ">
          Welcome to TaskFlow 🚀
        </h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
          Your productivity workspace is ready
        </p>
      </div>

      <!-- Body -->
      <div style="padding:30px;color:#e5e7eb;">

        <h2 style="margin-top:0;color:#ffffff;">
          Hey ${name || "there"} 👋
        </h2>

        <p style="line-height:1.6;color:rgba(255,255,255,0.75);">
          Welcome aboard! You’ve just joined a powerful task management system
          designed to help you organize, track, and complete your work faster.
        </p>

        <div style="
          margin:20px 0;
          padding:15px;
          background:rgba(99,102,241,0.1);
          border-left:4px solid #6366f1;
          border-radius:10px;
        ">
          <p style="margin:0;color:#c7d2fe;font-size:14px;">
            ✨ Create tasks<br/>
            📊 Track progress in real-time<br/>
            ⚡ Boost your productivity
          </p>
        </div>

        <!-- CTA Button -->
        <div style="text-align:center;margin:30px 0;">
          <a href="http://localhost:3000/dashboard"
            style="
              display:inline-block;
              padding:12px 24px;
              background:#6366f1;
              color:white;
              text-decoration:none;
              border-radius:10px;
              font-weight:bold;
              font-size:14px;
            ">
            Go to Dashboard →
          </a>
        </div>

        <p style="font-size:12px;color:rgba(255,255,255,0.4);text-align:center;">
          If you didn’t sign up, you can ignore this email.
        </p>

      </div>

      <!-- Footer -->
      <div style="
        padding:15px;
        text-align:center;
        font-size:12px;
        color:rgba(255,255,255,0.3);
        border-top:1px solid rgba(255,255,255,0.05);
      ">
        © ${new Date().getFullYear()} TaskFlow • Built with ❤️
      </div>

    </div>
  </div>
  `;
};

module.exports = welcomeEmailTemplate;