'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Footer from '../components/footer';

export default function DemoPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div>
      <main>
        <div className="page-wrappers empty-page" style={{ height: 'auto', paddingBottom: '100px' }}>

          <div
            className="page-wrapperss page-wrapper-ex page-wrapper-login page-wrapper-loginacc form-wrapper"
            style={{
              height: '100%',
              overflow: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: 'transparent transparent'
            }}
          >
            <div className="brdc">
              <div className="back-btn">
                <Link href="/home">
                  <img src="/images/back-btn.png" alt="Back" />
                </Link>
              </div>
              <h3>Invites</h3>
            </div>

            <section className="section-1s banner-imgn">
              <div className='informate'>
                <div className="full">
                  <div className="info">
                    <h3>Invite friends and make money together</h3>
                    <p>Each accepted order of your subordinates will get you corresponding rewards</p>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src="/images/inv-img.jpg" style={{ width: "100%" }} alt="Invite" />
              </div>
            </section>

            <div className="pricerefBx pricerefBx-01">
              <h4><b>Rules</b></h4>
              <table width="100%">
                <thead>
                  <tr>
                    <th>Subordinate</th>
                    <th>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 Level</td><td>0.1%</td></tr>
                  <tr><td>2 Level</td><td>0.03%</td></tr>
                  <tr><td>3 Level</td><td>0.02%</td></tr>
                  <tr><td>4 Level</td><td>0.01%</td></tr>
                  <tr><td>5 Level</td><td>0.01%</td></tr>
                </tbody>
              </table>
            </div>

            {/* Removed href to prevent navigation */}
            <div className="login-bx" style={{ margin: 0 }}>
              <button className="login-btn" onClick={() => setIsOpen(true)}>
                Invite Friends
              </button>
            </div>

          </div>

          {/* Overlay */}
          <div
            className={`overlay ${isOpen ? "show" : ""}`}
            onClick={() => setIsOpen(false)}
          />

          {/* Popup */}
          <div className={`popup QR-popup ${isOpen ? "show" : ""}`}>
            <div className="handle" />
            <div className="img">
              <img src="/images/QR-img.jpg" alt="QR Code" />
            </div>
            <p>Please use mobile browser scan QR code to registration</p>

            <div className="invite-field">
              <div className="field-bx">
                <div className="left">Invite code</div>
                <div className="right">
                  <span className="code-num">dV6OjDX9kpQ8</span>
                </div>
              </div>

              <div className="field-bx">
                <div className="left">Invite link</div>
                <div className="right">
                  <span className="code-num">https://pub.ang....DX9kpQ8</span>
                </div>
              </div>
            </div>

            <div className="close-btn" onClick={() => setIsOpen(false)}>
              <img src="/images/close-icon.png" alt="Close" />
            </div>
          </div>

        </div>

        <Footer />
      </main>
    </div>
  );
}
