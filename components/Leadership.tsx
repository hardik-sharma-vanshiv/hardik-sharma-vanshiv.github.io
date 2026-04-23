import React from 'react';

export default function Leadership() {
  const leaders = [
    {
      name: "Gaurav Kheterpal",
      role: "Founder & CEO",
      linkedin: "https://linkedin.com/in/gauravkheterpal",
      image: "https://www.vanshiv.com/Leaders/Gaurav.svg"
    },
    {
      name: "Saurabh Kumar",
      role: "Co-Founder & CTO",
      linkedin: "https://in.linkedin.com/in/saurabh-kumar-vanshiv",
      image: "https://www.vanshiv.com/Leaders/Saurabh.svg"
    },
    {
      name: "Ankur Sharma",
      role: "Co-Founder & CFO",
      linkedin: "https://in.linkedin.com/in/ca-ankur-sharma",
      image: "https://www.vanshiv.com/Leaders/Ankursharma.svg"
    },
    {
      name: "Praveen Singh",
      role: "SVP – Salesforce Practice",
      linkedin: "https://in.linkedin.com/in/s-praveen-singh",
      image: "https://www.vanshiv.com/Leaders/Praveen.svg"
    },
    {
      name: "Mohit Tyagi",
      role: "SVP – Technology",
      linkedin: "https://www.linkedin.com/in/mohitty",
      image: "https://www.vanshiv.com/Leaders/Mohit.svg"
    },
    {
      name: "Taruna Sharma",
      role: "VP – MarTech",
      linkedin: "https://in.linkedin.com/in/taruna-kunwar",
      image: "https://www.vanshiv.com/Leaders/Taruna.svg"
    },
    {
      name: "Jitendra Singh",
      role: "VP – Salesforce Practice",
      linkedin: "https://www.linkedin.com/in/jitendra-sarangdevot-3ab39465",
      image: "https://www.vanshiv.com/Leaders/Jitendra.svg"
    },
    {
      name: "Vikas Khandelwal",
      role: "VP – QA Practice",
      linkedin: "https://www.linkedin.com/in/vikas-khandelwal-b7314b35/",
      image: "https://www.vanshiv.com/Leaders/Vikas.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-3">The team</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Lens</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Visionary leaders with deep experience across AI, cloud, Salesforce, and enterprise technology transformation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-300 transition-shadow group flex flex-col h-full">
              <div className="h-64 relative overflow-hidden bg-[#DBE4ED] shrink-0">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-gray-900 font-bold text-lg leading-tight flex flex-row items-center gap-2">
                    {leader.name}
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors w-max">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                  </h3>
                  <p className="text-gray-500 text-xs font-semibold mt-1.5">{leader.role}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
