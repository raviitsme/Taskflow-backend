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
          <a href="https://taskflow-beta-ten.vercel.app/dashboard"
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

const forgotPasswordEmailTemplate = (name, resetLink) => {
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
      box-shadow:0 0 40px rgba(239,68,68,0.15);
    ">

      <!-- Header -->
      <div style="
        background:linear-gradient(135deg,#ef4444,#f97316);
        padding:30px;
        text-align:center;
      ">
        <h1 style="
          margin:0;
          color:white;
          font-size:24px;
          letter-spacing:1px;
        ">
          Password Reset Request 🔐
        </h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
          We received a request to reset your password
        </p>
      </div>

      <!-- Body -->
      <div style="padding:30px;color:#e5e7eb;">

        <h2 style="margin-top:0;color:#ffffff;">
          Hey ${name || "there"} 👋
        </h2>

        <p style="line-height:1.6;color:rgba(255,255,255,0.75);">
          We received a request to reset your TaskFlow account password.
          If this was you, click the button below to create a new password.
        </p>

        <div style="
          margin:20px 0;
          padding:15px;
          background:rgba(239,68,68,0.1);
          border-left:4px solid #ef4444;
          border-radius:10px;
        ">
          <p style="margin:0;color:#fecaca;font-size:14px;">
            ⚠️ This link will expire in 10 minutes<br/>
            🔒 Do not share this link with anyone
          </p>
        </div>

        <!-- CTA Button -->
        <div style="text-align:center;margin:30px 0;">
          <a href="${resetLink}"
            style="
              display:inline-block;
              padding:12px 24px;
              background:#ef4444;
              color:white;
              text-decoration:none;
              border-radius:10px;
              font-weight:bold;
              font-size:14px;
            ">
            Reset Password →
          </a>
        </div>

        <p style="font-size:12px;color:rgba(255,255,255,0.4);text-align:center;">
          If you didn’t request this, you can safely ignore this email.
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

const otpEmailTemplate = (name, otp) => {
  return `
  <div style="font-family:Arial;background:#0b0f19;padding:20px;color:white">

    <div style="max-width:500px;margin:auto;background:#111827;padding:20px;border-radius:12px">

      <h2 style="color:#fff">Password Reset OTP 🔐</h2>

      <p>Hey ${name || "User"},</p>

      <p>Your OTP for password reset is:</p>

      <div style="
        font-size:28px;
        font-weight:bold;
        letter-spacing:5px;
        text-align:center;
        padding:15px;
        background:#1f2937;
        border-radius:8px;
        color:#6366f1;
      ">
        ${otp}
      </div>

      <p style="margin-top:15px;color:#9ca3af">
        This OTP will expire in 5 minutes.
      </p>

    </div>
  </div>
  `;
};

module.exports = { welcomeEmailTemplate, forgotPasswordEmailTemplate, otpEmailTemplate };
