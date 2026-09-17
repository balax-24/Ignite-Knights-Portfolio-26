import React from 'react';
import { Link } from 'react-router-dom';
import { GenerationBadge } from '../components/common/GenerationBadge';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="about-editorial-page">
      {/* Editorial Hero */}
      <section className="editorial-page-header">
        <div className="container">
          <div className="editorial-header-category">
            <GenerationBadge variant="current" />
          </div>
          <h1 className="editorial-page-title">
            THIS IS<br />
            IGNITE KNIGHTS.
          </h1>
          <p className="editorial-page-lead">
            An independent collegiate aerospace engineering laboratory dedicated to mastering autonomous aerial robotics from first principles.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section-block">
        <div className="container">
          <div className="about-editorial-grid">
            <div className="about-editorial-col">
              <span className="editorial-num">01</span>
              <h3>WHO WE ARE</h3>
              <p>
                Ignite Knights 4.0 is a specialized engineering organization uniting students across aerospace, robotics, mechanical engineering, computer science, and electrical systems.
              </p>
              <p>
                We do not assemble off-the-shelf hobby drones. We design, simulate, route, machine, solder, and program our own aircraft to compete in high-stakes autonomous challenges.
              </p>
            </div>

            <div className="about-editorial-col">
              <span className="editorial-num">02</span>
              <h3>WHY WE BUILD</h3>
              <p>
                Autonomous flight in real-world conditions is one of the hardest engineering frontiers. GPS signals fail in cluttered indoor environments. Aerodynamic wind gusts induce non-linear turbulence. High-speed computer vision models demand heavy compute on strict milliwatt power budgets.
              </p>
              <p>
                We build because solving these friction points directly builds the engineering discipline needed to lead the future of aerospace robotics.
              </p>
            </div>
          </div>

          <div className="editorial-divider"></div>

          {/* HOW WE WORK (Engineering Philosophy) */}
          <div className="about-editorial-grid">
            <div className="about-editorial-col">
              <span className="editorial-num">03</span>
              <h3>HOW WE WORK</h3>
              <p>
                Our laboratory adheres to a strict systems engineering protocol:
              </p>
              <ul className="pillars-editorial-list" style={{ marginTop: '1.5rem', listStyle: 'none' }}>
                <li className="pillar-row">
                  <span className="pillar-num">A</span>
                  <div>
                    <h4 className="pillar-name">FIRST PRINCIPLES SIZING</h4>
                    <p className="pillar-desc">Every motor, propeller pitch, battery chemistry, and structural thickness is calculated from aerodynamic formulas before procurement.</p>
                  </div>
                </li>
                <li className="pillar-row">
                  <span className="pillar-num">B</span>
                  <div>
                    <h4 className="pillar-name">PRE-FLIGHT SIMULATION</h4>
                    <p className="pillar-desc">No aircraft flies untethered until structural FEA, motor thermal dissipation, and attitude control loops pass synthetic testing.</p>
                  </div>
                </li>
                <li className="pillar-row">
                  <span className="pillar-num">C</span>
                  <div>
                    <h4 className="pillar-name">FAIL-SAFE AUTONOMY</h4>
                    <p className="pillar-desc">Triple-redundant emergency return-to-land routines and physical kill switches are embedded on separate RF links.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="about-editorial-col">
              <span className="editorial-num">04</span>
              <h3>SYSTEMS THINKING</h3>
              <p>
                An aerial robot is not an isolated piece of software or a standalone carbon frame. It is a tightly coupled dynamical system where motor vibrations affect the IMU sensor noise, which impacts the flight estimator, which causes erratic motor throttle spikes, which causes battery voltage sags.
              </p>
              <p>
                Our 4.0 methodology treats every wire, code commit, carbon ply, and fastener as part of a single cohesive aerospace machine.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <Link to="/aircraft" className="btn-aerospace btn-aerospace-primary">
                  <span>INSPECT 4.0 AIRCRAFT</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
