"use client";
import { useRef, useEffect, useState } from "react";

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

export default function Careers() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

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

  return (
    <div  style={{ backgroundColor: "rgb(20, 43, 70)", minHeight: "100vh",
    padding: "40px 70px", margin: "-15px 0px 0px", }} className="p-6 space-y-4">
       {/* Main Heading */}
  <h1 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
    Career
  </h1>

  {/* Sub Heading */}
  <h2 style={{ color: "#ffffff", fontSize: "35px", fontWeight: "bold", marginBottom: "30px" }}>
    Open Positions
  </h2>
      {roles.map((role) => (
        <div
          key={role.id}
          data-id={role.id}
          ref={(el) => (refs.current[role.id] = el)}
          className={`transition-all duration-700 transform ${
            visibleSections.includes(role.id)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="role-tab"
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
              cursor: "pointer",             // ← pointer on hover
              transition: "background-color 0.3s, transform 0.3s", // smooth hover effect

            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "#13253e"; // slightly lighter on hover
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";    // subtle scale
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "#0e1d2e"; // original color
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
             <span className="role-name">{role.label}</span>

            <div className="job-experience">
              <div className="job-item">
                <img src="http://www.nordixone.com/img/icons/zoom-in.png" alt="Openings" />
                <span className="job-subitem">{role.openings} role open</span>
              </div>

              <div className="job-item">
                <img src="http://www.nordixone.com/img/icons/calendar-blue.png" alt="Experience" />
                <span className="job-subitem">{role.experience} years</span>
              </div>

              <img className="arrow-icon" src="http://www.nordixone.com/img/icons/arrow-white.png" alt="arrow" />
            </div>


          </div>
        </div>
      ))}
      {/* Popup Component */}
      {/* {selectedRole && <RolePopup role={selectedRole} onClose={() => setSelectedRole(null)} />} */}

    </div>
  );
}
