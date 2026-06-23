import Image from "next/image";

const SOCIALS = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@dailytalha_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.6 5.82a4.28 4.28 0 0 1-1.04-2.82h-3.1v12.4a2.6 2.6 0 1 1-1.85-2.49V9.7a5.7 5.7 0 1 0 4.95 5.65V9.01a7.34 7.34 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-2.26-1.48z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dailytalha/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/talha-malik-/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.96 1.83-1.97 3.77-1.97 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.1c0-1.22-.02-2.78-1.78-2.78-1.78 0-2.05 1.32-2.05 2.69V21h-4z" />
      </svg>
    ),
  },
];

const ROLES = [
  {
    img: "/ccc.webp",
    cls: "cc",
    role: "COO",
    company: "Creator Collective",
    href: "https://www.trycreatorcollective.com/",
    desc: "scaling UGC creators $15K+/mo creative scripting & content strategies for 50+ startups, 100M+ client views generated",
    badge: null,
  },
  {
    img: "/peptide.png",
    cls: "pep",
    role: "Growth",
    company: "Peptide AI",
    href: "https://peptideai.co/",
    desc: "3,000 active users, 150+ active paying customers, KOL growth campaign, backed by Launch Accelerator",
    badge: null,
  },
  {
    img: "/rutgers.png",
    cls: "rut",
    role: "Chemistry Teaching Intern",
    company: "Rutgers University",
    href: "https://chem.rutgers.edu/academics/undergraduate-program/undergraduate-course-descriptions/course-descriptions/1829-01-160-493-internship-in-chemistry",
    desc: "tutored chemistry students weekly, improving comprehension and assessment outcomes.",
    badge: null,
  },
];

export default function Home() {
  return (
    <main className="stage">
      <div className="card">
        <div className="avatar">
          <Image
            src="/talha.jpeg"
            alt="Talha Malik"
            width={92}
            height={92}
            priority
          />
        </div>

        <h1 className="name">
          Talha Malik
          <span className="socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="soc"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </span>
        </h1>

        <p className="tagline">building &amp; scaling creator-led companies.</p>

        <div className="roles">
          {ROLES.map((r) => (
            <a
              key={r.company}
              className="role"
              href={r.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className={`logo ${r.cls}`}>
                <Image
                  src={r.img}
                  alt={`${r.company} logo`}
                  width={46}
                  height={46}
                />
              </span>
              <span className="role-body">
                <span className="role-title">
                  {r.role} @ <span className="co">{r.company}</span>
                </span>
                <span className="role-desc">{r.desc}</span>
              </span>
              {r.badge && (
                <span className="badge">
                  <span className="dot" />
                  {r.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        <p className="foot">
          Let’s build — <a href="mailto:tmalik.media@gmail.com">tmalik.media@gmail.com</a>
        </p>
      </div>
    </main>
  );
}
