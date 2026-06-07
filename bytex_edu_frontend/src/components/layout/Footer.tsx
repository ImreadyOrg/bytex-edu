import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <div className="footer-brand-name">
            bytex <span>edu</span>
          </div>
          <p>
            Career-ready devices and industry project access for engineering
            and management students across India. A product of Bytex Global
            Innovation Pvt. Ltd., in collaboration with Navah &amp; Co.
          </p>
          <p style={{ marginTop: "14px", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            1301, Boulevard Towers, Sadhu Vaswani Chowk,
            <br />
            Camp, Pune, Maharashtra 411001
            <br />
            info@bytex.global
          </p>
        </div>
        <div className="footer-col">
          <h4>For Students</h4>
          <a href="#">How it works</a>
          <a href="#">Career projects</a>
          <a href="#">What's included</a>
          <a href="#">Proficiency levels</a>
        </div>
        <div className="footer-col">
          <h4>For Colleges</h4>
          <a href="#">Campus Lab Setup</a>
          <a href="#">MoU Programme</a>
          <a href="#">TPO Dashboard</a>
          <a href="#">NAAC Documentation</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="https://bytex.global" target="_blank" rel="noopener noreferrer">
            Bytex Global ↗
          </a>
          <a href="https://bytex.global/privacyPolicy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2026 Bytex Global Innovation Pvt. Ltd. All rights reserved.</p>
        <div className="footer-pills">
          <span className="footer-pill">🔒 Secure</span>
          <span className="footer-pill">📦 Free Delivery</span>
          <span className="footer-pill">🎓 Student Verified</span>
        </div>
      </div>
    </>
  );
}
