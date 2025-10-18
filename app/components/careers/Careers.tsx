"use client";
import { useRef, useEffect, useState } from "react";

const roles = [
  { id: "developer", label: "Developer", content: "Developer role content goes here.", openings: "1", experience: "" },
  { id: "designer", label: "Designer", content: "Designer role content goes here.", openings: "1", experience: "" },
  { id: "manager", label: "Manager", content: "Manager role content goes here.", openings: "1", experience: ""  },
  { id: "coder", label: "Developer", content: "Developer role content goes here.", openings: "1", experience: ""  },
  { id: "fom", label: "Designer", content: "Designer role content goes here.", openings: "1", experience: ""  },
  { id: "feff", label: "Manager", content: "Manager role content goes here.", openings: "1", experience: ""  },
  { id: "sasd", label: "Developer", content: "Developer role content goes here.", openings: "1", experience: ""  },
  { id: "rer", label: "Designer", content: "Designer role content goes here.", openings: "1", experience: ""  },
  { id: "resi", label: "Manager", content: "Manager role content goes here.", openings: "1", experience: ""  },
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
    <div  style={{ backgroundColor: "rgb(20, 43, 70)" }} className="p-6 space-y-4">
       {/* Main Heading */}
  <h1 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
    Career
  </h1>

  {/* Sub Heading */}
  <h2 style={{ color: "#cccccc", fontSize: "35px", fontWeight: "normal", marginBottom: "30px" }}>
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
            }}
          >
             <span style={{ fontWeight: "bold" }}>{role.label}</span>

            <div style={{ display: "flex", gap: "15px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <img src="http://www.nordixone.com/img/icons/zoom-in.png" alt="Openings" width={16} height={16} />
                {role.openings} role open
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <img src="http://www.nordixone.com/img/icons/calendar-blue.png" alt="Experience" width={16} height={16} />
                {role.experience} years
              </span> 

            </div>
            <span><img src="http://www.nordixone.com/img/icons/arrow-white.png" alt="arrow" /></span> {/* Optional icon placeholder */}
          </div>
        </div>
      ))}
    </div>
  );
}
