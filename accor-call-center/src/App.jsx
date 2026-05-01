import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    (function (w, d, x, id) {
      const s = d.createElement("script");
      s.src = "https://g3demo.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js";
      s.async = true;
      s.id = id;
      d.getElementsByTagName("head")[0].appendChild(s);
      w[x] = w[x] || function () { (w[x].ac = w[x].ac || []).push(arguments); };
    })(window, document, "amazon_connect", "536e31cb-6097-41ba-860b-eec9782ad9b1");

    window.amazon_connect("styles", {
      iconType: "CHAT_VOICE",
      openChat: { color: "#ffffff", backgroundColor: "#123456" },
      closeChat: { color: "#ffffff", backgroundColor: "#123456" },
    });
    window.amazon_connect("snippetId", "QVFJREFIZ1NqZWV5MTExbXUwZXRHZUlvQ2NPT3RQZ1k4bTl0VDhTaTZYcy9YcFVCVHdHN29NRUI2MlRaby9PKzAwclAvMDNVQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNdExySFJoZXZKSDBwcERRMUFnRVFnQ3U5VnZJOTJwaE1wSnNyMEMxcmFRc1UvSWdvSW9RREw2blRVY0VWT3RuUDRENnNkRG9sQUt0aDVpU0c6OmoyQ0R5ZUpUMXY0VlFiT09UeG5nbFFNZ1djOSsyZElDV1NacUhiMGlNdFRmZEZHSWFCMXRubVdOMk5HRmJWTWh2TlZaaTEvUjhMZlpRS0ZRdENoZ3djb3NtalJmL2h4OGl3Y1lFMlU4bjhmOHl5STdmSGhDMEgxbUZkb1g0cjhqVGVnKzhkLzhoVDQxcHRyRGxocEppRXhsRVhCb1NSdz0=");
    window.amazon_connect("supportedMessagingContentTypes", [
      "text/plain",
      "text/markdown",
      "application/vnd.amazonaws.connect.message.interactive",
      "application/vnd.amazonaws.connect.message.interactive.response",
    ]);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f4", minHeight: "100vh" }}>

      {/* Navbar */}
      <div style={{ background: "#232F3E", color: "white", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "16px" }}>Agent Portal</h1>
        <span style={{ fontSize: "13px", color: "#aaa" }}>Logged in as: Agent Name</span>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 44px)" }}>

        {/* Sidebar */}
        <div style={{ width: "240px", background: "white", borderRight: "1px solid #ddd", padding: "16px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h3 style={{ fontSize: "11px", textTransform: "uppercase", color: "#888", marginBottom: "8px" }}>Agent Status</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1D9E75" }} />
              Available
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "11px", textTransform: "uppercase", color: "#888", marginBottom: "8px" }}>Quick Links</h3>
            <ul style={{ paddingLeft: "16px", fontSize: "13px", color: "#444", lineHeight: "1.8" }}>
              <li>Knowledge Base</li>
              <li>Escalation Guide</li>
              <li>Call Scripts</li>
              <li>Team Directory</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "11px", textTransform: "uppercase", color: "#888", marginBottom: "8px" }}>Shift Info</h3>
            <p style={{ fontSize: "13px", color: "#444", lineHeight: "1.6" }}>Queue: Billing Support</p>
            <p style={{ fontSize: "13px", color: "#444" }}>Shift: 9am – 5pm</p>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: "24px", overflowY: "auto" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "16px", color: "#232F3E" }}>Dashboard</h2>

          {/* Metric cards */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
            {[
              { label: "Calls today", value: "12" },
              { label: "Avg handle time", value: "4:32" },
              { label: "In queue", value: "7" },
              { label: "CSAT", value: "94%" },
            ].map((card) => (
              <div key={card.label} style={{ background: "white", border: "1px solid #ddd", borderRadius: "6px", padding: "16px 20px", minWidth: "160px" }}>
                <div style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", marginBottom: "4px" }}>{card.label}</div>
                <div style={{ fontSize: "24px", fontWeight: "600", color: "#232F3E" }}>{card.value}</div>
              </div>
            ))}
          </div>

          {/* Placeholder */}
          <div style={{ background: "white", border: "1px dashed #ccc", borderRadius: "6px", padding: "40px", textAlign: "center", color: "#aaa", fontSize: "14px" }}>
            Recent contacts / activity feed goes here
          </div>
        </div>

      </div>
    </div>
  );
}