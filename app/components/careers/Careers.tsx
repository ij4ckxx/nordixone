"use client";
import { useRef, useEffect, useState } from "react";
import CareersBanner from "./CareersBanner";
import benefitIcon7 from "@/public/skyblue-images/benifit-icon7.png";
import benefitIcon8 from "@/public/skyblue-images/benifit-icon8.png";
import benefitIcon9 from "@/public/skyblue-images/benifit-icon9.png";
import benefitIcon10 from "@/public/skyblue-images/benifit-icon10.png";
import NordixoneFamily from "./NordixoneFamily";
import CareSection from "./CareSection";
import ApplyNowSection from "./ApplyNowSection";
import CareersSecondBanner from "./CareersSecondBanner";
import EmbraceWellbeingSection from "./EmbraceWellbeingSection";
import PerksSection from "./PerksSection";
import ApplyNowFinal from "./ApplyNowFinal";
import CareerSubmit from "./CareerSubmit";
import RadixDialogBox from "../radix-ui/RadixDialogBox";

const roles = [
  { id: "developer", label: "Developer", content: "Developer role content goes here.", openings: "1", experience: "5 to 10" },
  { id: "designer", label: "Designer", content: "Designer role content goes here.", openings: "3", experience: "5 to 7" },
  { id: "manager", label: "Manager", content: "Manager role content goes here.", openings: "2", experience: "2 to 4"  },
  { id: "coder", label: "Developer", content: "Developer role content goes here.", openings: "5", experience: "5 to 8"  },
  { id: "fom", label: "Designer", content: "Designer role content goes here.", openings: "2", experience: "5+"  },
  { id: "feff", label: "Manager", content: "Manager role content goes here.", openings: "4", experience: "3 to 6"  },
  { id: "sasd", label: "Developer", content: "Developer role content goes here.", openings: "7", experience: "5 to 9"  },
  { id: "rer", label: "Designer", content: "Designer role content goes here.", openings: "5", experience: "9+"  },
  { id: "resi", label: "Manager", content: "Manager role content goes here.", openings: "1", experience: "15+"  },
];
const processCards = [
  {
    image: benefitIcon7,
    title: "Mentoring & Coaching",
    description:
      "Receive personalized guidance and support to achieve your career goals and enhance your skills through one-on-one coaching sessions.",
  },
  {
    image: benefitIcon8,
    title: "Career Planning",
    description:
      "Benefit from comprehensive career planning services, helping you identify strengths, set goals, and navigate your career path with confidence.",
  },
  {
    image: benefitIcon9,
    title: "Holistic Development",
    description:
      "Engage in programs and workshops that foster leadership, communication, and emotional intelligence, ensuring personal and professional growth.",
  },
  {
    image: benefitIcon10,
    title: "Innovation Pause",
    description:
      "Participate in our Innovation program, encouraging creative thinking to foster continuous improvement and innovation.",
  },
];

export default function Careers() {
  const [showMore, setShowMore] = useState(false);
  const openPositionsRef = useRef<HTMLDivElement | null>(null);

  const scrollToOpenPositions = () => {
    openPositionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (showMore) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [showMore]);
 const [visibleSections, setVisibleSections] = useState<string[]>([]);
const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id")!;
            if (!visibleSections.includes(id)) {
              setVisibleSections((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    roles.forEach((role) => {
      if (refs.current[role.id]) observer.observe(refs.current[role.id]!);
    });

    return () => observer.disconnect();
  }, [visibleSections]);
  // 🧠 Pass the toggle function to CareSection so its "View More" button triggers this
  return (
    <>
      {/* === FIRST 4 COMPONENTS === */}
      {!showMore && (
        <>
        {/* <CareerSubmit /> */}
          <CareersBanner onViewRoles={scrollToOpenPositions} />
          <NordixoneFamily processCards={processCards} />
          {/* Pass the function here */}
          <CareSection onViewMore={() => setShowMore(true)} />

          {/* Open Positions Section */}
          {/* <div
            ref={openPositionsRef}
            className="p-6 space-y-4"
            style={{
              backgroundColor: "rgb(20, 43, 70)",
              minHeight: "100vh",
              padding: "40px 70px",
              margin: "-15px 0px 0px",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Career
            </h1>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "35px",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              Open Positions
            </h2>

            {roles.map((role) => (
              <div
                key={role.id}
                className="bg-[#0e1d2e] text-white p-4 rounded-md mb-4 hover:bg-[#13253e] transition"
              >
            <span className="role-name">{role.label}</span>

            <div className="job-experience">
              <div className="job-item">
                <img className="role-icon" src="http://www.nordixone.com/img/icons/zoom-in.png" alt="Openings" />
                <span className="job-subitem">{role.openings} role open</span>
                </div>

              <div className="job-item">
                <img className="role-icon" src="http://www.nordixone.com/img/icons/calendar-blue.png" alt="Experience" />
                <span className="job-subitem">{role.experience} years</span>
              </div>

              <img className="arrow-icon" src="http://www.nordixone.com/img/icons/arrow-white.png" alt="arrow" />
            </div>


          </div>
        
            ))}
          </div> */}
          <div ref={openPositionsRef} style={{
      backgroundColor: "rgb(20, 43, 70)", minHeight: "100vh",
      padding: "40px 70px", margin: "-15px 0px 0px",
    }} className="p-2 flex flex-col space-y-4 w-full">
      {/* Main Heading */}
      <h1 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
        Career
      </h1>

      {/* Sub Heading */}
      <h2 style={{ color: "#ffffff", fontSize: "35px", fontWeight: "bold", marginBottom: "30px" }}>
        Open Positions
      </h2>
      {roles.map((role) => (
          <RadixDialogBox
    key={role.id}
    trigger={
      <div
          key={role.id}
          data-id={role.id}
          ref={(el) => (refs.current[role.id] = el)}
          className={`transition-all duration-700 transform ${visibleSections.includes(role.id)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"} w-full`}
        >
          <div
            className="role-tab w-full"
            style={{
              backgroundColor: "#0e1d2e",
              borderColor: "#0e1d2e",
              padding: "10px 24px",
              borderRadius: "8px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "15px",
              cursor: "pointer", // ← pointer on hover
              transition: "background-color 0.3s, transform 0.3s", // smooth hover effect
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "#13253e"; // slightly lighter on hover
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)"; // subtle scale
            } }
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "#0e1d2e"; // original color
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            } }
          >
            <span className="role-name">{role.label}</span>

            <div className="job-experience">
              <div className="job-item">
                <img className="role-icon" src="http://www.nordixone.com/img/icons/zoom-in.png" alt="Openings" />
                <span className="job-subitem">{role.openings} role open</span>
              </div>

              <div className="job-item">
                <img className="role-icon" src="http://www.nordixone.com/img/icons/calendar-blue.png" alt="Experience" />
                <span className="job-subitem">{role.experience} years</span>
              </div>

              <img className="arrow-icon" src="http://www.nordixone.com/img/icons/arrow-white.png" alt="arrow" />
            </div>


          </div>
        </div>
    }
  >
    {/* Modal Content */}
    <CareerSubmit roleTitle={role.label} />
  </RadixDialogBox>
  ))}

          </div>
          
          <ApplyNowSection />
        </>
      )}

      {/* === LAST COMPONENTS === */}
      {showMore && (
        <>
          <CareersSecondBanner onViewRoles={() => {}} />
          <EmbraceWellbeingSection />
          <PerksSection />
          <ApplyNowFinal />

          {/* View Less Button */}
          <div className="text-center my-10">
            <button
              onClick={() => setShowMore(false)}
              className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
            >
              View Less
            </button>
          </div>
        </>
      )}
    </>
  );
}
