"use client";

export default function PerksSection() {
  const perks = [
    {
      icon: "http://www.nordixone.com/img/icons/perk-icon1.png",
      title: "Communication Allowance",
      content:
        "Stay connected with a monthly communication allowance. This covers your phone and internet expenses, ensuring you remain reachable and productive at all times.",
    },
    {
      icon: "http://www.nordixone.com/img/icons/perk-icon2.png",
      title: "Leave Travel Allowance",
      content:
        "Recharge and unwind with our Leave Travel Allowance. This benefit helps cover travel expenses for your vacations, allowing you to explore new places and return to work refreshed.",
    },
    {
      icon: "http://www.nordixone.com/img/icons/perk-icon3.png",
      title: "Meal Allowance",
      content:
        "Enjoy delicious meals with our weekly meal allowance. This benefit ensures you have access to nutritious food to keep you energized throughout the day. We believe great food fuels great performance.",
    },
    {
      icon: "http://www.nordixone.com/img/icons/perk-icon4.png",
      title: "Referral Bonus",
      content:
        "Help us grow by referring talented professionals. Earn a generous referral bonus when your recommended candidates join our team and successfully complete their probation period.",
    },
    {
      icon: "http://www.nordixone.com/img/icons/perk-icon6.png",
      title: "Lunch & Snacks",
      content:
        "Delight in complimentary lunch and snacks provided at the office. This perk keeps you well-fed and boosts productivity by removing mealtime worries during work hours.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 overflow-x-hidden" style={{ backgroundColor: "#0A1624" }}>
      <div className="text-center mb-12">
        <h6 className="text-3xl md:text-4xl font-semibold text-white mt-2">PERKS</h6>
        <h3 className="text-3xl md:text-4xl font-semibold text-white mt-2">
          <span className="text-[#13B0E4]">NORDIXONE</span> FAMILY MEMBER
        </h3>
      </div>

      <div className="grid gap-8 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {perks.map((perk, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md text-center p-8 flex flex-col items-center hover:scale-105 transition-transform w-full max-w-[320px]" style={{ backgroundColor: "#0a1420" }}
          >
                <div className="icon-box" style={{ background: "linear-gradient(180deg, #142b46 49.48%, #0f2135 100%)" }}>
                    <img
                        src={perk.icon}
                        alt={perk.title}
                    />
                </div>
              <h3 className="text-lg font-semibold text-white mb-3">
              {perk.title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {perk.content}
            </p>
          </div>
        ))}
      </div>
{/* <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 justify-center">
  {perks.map((perk, index) => (
    <div
      key={index}
      className="rounded-2xl shadow-md text-center p-8 flex flex-col items-center hover:scale-105 transition-transform w-full max-w-[320px]"
      style={{ backgroundColor: "#0a1420" }}
    >
      <div
        className="icon-box mb-4"
        style={{
          background: "linear-gradient(180deg, #142b46 49.48%, #0f2135 100%)",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <img src={perk.icon} alt={perk.title} className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{perk.title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{perk.content}</p>
    </div>
  ))}
</div> */}


    </section>
  );
}
