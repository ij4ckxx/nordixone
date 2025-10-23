"use client";

export default function EmbraceWellbeingSection() {
  return (
    <section
      className="ourvalue-sec folder-bg-white overlay-section embrace-sec"
      style={{
        transform: "translate3d(0px, 0px, 0px)",
        inset: "0px auto auto 0px",
        margin: "0px",
      }}
    >
      <div className="text-center common-heading">
        <h6
          className="see-heading-font reveal-text mb-1"
          style={{
            opacity: 1,
            transform: "translate(0px, 0px)",
            visibility: "inherit",
          }}
        >
          EMBRACE A
        </h6>
        <h3
          className="see-heading-font reveal-text"
          style={{
            opacity: 1,
            transform: "translate(0px, 0px)",
            visibility: "inherit",
          }}
        >
          <span style={{ color: "#13B0E4" }}>WELL-BEING</span> ROUTINE
        </h3>
      </div>

      {/* Row 1 */}
      <div className="row card-section">
        {/* Card 1 */}
        <div
          className="col-md-7 card-col aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="card card-with-icon">
            <div className="card-body p-0" style={{"padding": "0px"}}>
              <img
                src="http://www.nordixone.com/img/peoples/grp2.jpg"
                alt="card Image"
                className="card-img img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="col-md-5 card-col aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="card card-with-icon card-grey">
            <div className="card-body">
              <div className="icon-box">
                <img
                  src="http://www.nordixone.com/img/icons/benifit-icon1.png"
                  alt="client icon"
                  className="card-icon"
                />
              </div>
              <h3
                className="card-heading"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                Medical Insurance
              </h3>
              <p className="card-content">
                Nordixone offers comprehensive medical insurance to ensure you
                and your family have access to the best healthcare services when
                needed. Your health and well-being are our priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        {/* Card 3 */}
        <div
          className="col-md-4 card-col aos-init"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="card card-with-icon card-light-blue">
            <div className="card-body">
              <div className="icon-box">
                <img
                  src="http://www.nordixone.com/img/icons/benifit-icon2.png"
                  alt="client icon"
                  className="card-icon"
                />
              </div>
              <h3
                className="card-heading"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                Accidental Insurance
              </h3>
              <p className="card-content">
                We provide accidental insurance coverage to protect you in case
                of unforeseen accidents. Your safety and security matter to us,
                both inside and outside of work.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="col-md-4 card-col aos-init"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="card card-with-icon card-grey">
            <div className="card-body">
              <div className="icon-box">
                <img
                  src="http://www.nordixone.com/img/icons/benifit-icon3.png"
                  alt="client icon"
                  className="card-icon"
                />
              </div>
              <h3
                className="card-heading"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                Health & Wellness
              </h3>
              <p className="card-content">
                Our health and wellness programs promote a balanced lifestyle,
                with resources and support for physical and mental well-being.
                Stay healthy and thrive with Nordixone.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="col-md-4 card-col aos-init"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          <div className="card card-with-icon card-naviblue">
            <div className="card-body">
              <div className="icon-box">
                <img
                  src="http://www.nordixone.com/img/icons/benifit-icon4.png"
                  alt="client icon"
                  className="card-icon"
                />
              </div>
              <h3
                className="card-heading"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                Support Program
              </h3>
              <p className="card-content">
                NordixOne's support program offers assistance during challenging
                times, ensuring you have the resources and help you need to
                overcome obstacles and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="d-md-flex custom-grid">
        {/* Card 6 */}
        <div
          className="card-col first-col aos-init"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="card card-with-icon card-grey">
            <div className="card-body">
              <div className="icon-box">
                <img
                  src="http://www.nordixone.com/img/icons/benifit-icon5.png"
                  alt="client icon"
                  className="card-icon"
                />
              </div>
              <h3
                className="card-heading"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                Maternity & Paternity leave
              </h3>
              <p className="card-content">
                We offer generous maternity and paternity leave policies,
                supporting new parents during this important phase of life.
                Family is a priority at NordixOne.
              </p>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div
          className="card-col last-col aos-init"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="card card-with-icon card-grey">
            <div className="card-body">
              <div className="icon-box">
                <img
                  src="http://www.nordixone.com/img/icons/benifit-icon6.png"
                  alt="client icon"
                  className="card-icon"
                />
              </div>
              <h3
                className="card-heading"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                }}
              >
                Sabbatical Leave
              </h3>
              <p className="card-content">
                Our sabbatical leave policy allows you to take extended time off
                to pursue personal interests, recharge, and return to work with
                renewed energy and focus.
              </p>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div
          className="card-col mid-col aos-init"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          <div className="card card-with-icon card-grey">
            <div className="card-body p-0" style={{"padding": "0px"}}>
              <img
                src="http://www.nordixone.com/img/peoples/grp1%20(1).png"
                alt="card Image"
                className="card-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
