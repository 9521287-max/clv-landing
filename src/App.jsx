import React, { useState, useEffect } from 'react';
import { translations as tr } from './i18n';

const Section = ({ id, children }) => (
  <section id={id} className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm md:text-base hover:text-olive transition-colors">
    {children}
  </a>
);

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang');
      return saved === 'it' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch {}
  }, [lang]);

  const t = tr?.[lang] ?? tr?.en ?? null;

  if (!t || !t.nav || !t.hero) return null;

 return (<div>
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-ivory/80 border-b border-black/5">
   <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <div className="font-serif text-xl tracking-wide">CLV Residents</div>
    <nav className="hidden md:flex gap-6">
      <NavLink href="#home">{t.nav.home}</NavLink>
      <NavLink href="#residences">{t.nav.residences}</NavLink>
      <NavLink href="#architecture">{t.nav.architecture}</NavLink>
      <NavLink href="#amenities">{t.nav.amenities}</NavLink>
      <NavLink href="#location">{t.nav.location}</NavLink>
      <NavLink href="#plans">{t.nav.plans}</NavLink>
      <NavLink href="#progress">{t.nav.progress}</NavLink>
      <NavLink href="#faq">{t.nav.faq}</NavLink>
      <NavLink href="#contacts">{t.nav.contacts}</NavLink>
    </nav>
    <div className="flex items-center gap-2">
      <button onClick={()=>setLang('en')} className={`text-sm px-2 py-1 rounded ${lang==='en'?'bg-slate text-white':'hover:bg-black/5'}`}>EN</button>
      <button onClick={()=>setLang('it')} className={`text-sm px-2 py-1 rounded ${lang==='it'?'bg-slate text-white':'hover:bg-black/5'}`}>IT</button>
    </div>
   </div>
  </header>

<section id="home" className="min-h-[88vh] grid place-items-end pt-24 relative">
  <img src="/images/0010000.jpg" alt="Hero warm" className="absolute inset-0 w-full h-full object-cover"/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
  <div className="relative z-10 max-w-5xl mx-auto px-6 pb-32 text-white text-center">
    <h1 className="font-serif text-4xl md:text-6xl leading-tight drop-shadow-lg">
      {t.hero.title}
    </h1>
  </div>
</section>

<section className="bg-ivory py-12">
  <div className="max-w-4xl mx-auto px-6 text-center text-slate-800 text-lg leading-relaxed">
    {t.hero.subtitle}
  </div>
</section>


  <Section id="highlights">
  <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">{t.highlights.title}</h2>
  <div className="grid md:grid-cols-3 gap-6">
    {t.highlights.items.map((item, i) => (
      <div key={i} className="bg-white rounded-2xl shadow-soft p-6 border border-black/5 text-center hover:shadow-lg transition-shadow duration-300">
        <div className="text-lg font-medium text-slate-800">{item.title}</div>
        <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
</Section>

<Section id="residences">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <img src="/images/0010003.jpg" className="w-full rounded-2xl shadow-soft" alt="Residences"/>
    <div>
      <h2 className="font-serif text-3xl md:text-4xl mb-6">{t.residences.title}</h2>
      <p className="text-lg leading-relaxed text-slate-700">{t.residences.text}</p>
    </div>
  </div>
</Section>

<Section id="architecture">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="font-serif text-3xl md:text-4xl mb-6">{t.architecture.title}</h2>
      <p className="text-lg leading-relaxed text-slate-700">{t.architecture.text}</p>
    </div>
    <div className="relative rounded-2xl overflow-hidden shadow-soft border border-black/5">
      <div className="aspect-[16/10]">
        <img src="/images/0010006.jpg" alt="Architecture" className="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
</Section>

<Section id="amenities">
  <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">{t.amenities.title}</h2>
  <div className="grid md:grid-cols-3 gap-8">
    
    <div className="bg-white rounded-2xl border border-black/5 shadow-soft overflow-hidden hover:shadow-lg transition-shadow">
      <img src="/images/0010004.jpg" alt="Covered Parking" className="w-full h-56 object-cover"/>
      <div className="p-6">
        <h3 className="font-serif text-xl mb-3">{t.amenities.garageTitle}</h3>
        <p className="text-slate-700 leading-relaxed">{t.amenities.garage}</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl border border-black/5 shadow-soft overflow-hidden hover:shadow-lg transition-shadow">
      <img src="/images/0010003.jpg" alt="Landscaped Garden" className="w-full h-56 object-cover"/>
      <div className="p-6">
        <h3 className="font-serif text-xl mb-3">{t.amenities.gardenTitle}</h3>
        <p className="text-slate-700 leading-relaxed">{t.amenities.garden}</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl border border-black/5 shadow-soft overflow-hidden hover:shadow-lg transition-shadow">
      <img src="/images/0010005.jpg" alt="Pool Area" className="w-full h-56 object-cover"/>
      <div className="p-6">
        <h3 className="font-serif text-xl mb-3">{t.amenities.poolTitle}</h3>
        <p className="text-slate-700 leading-relaxed">{t.amenities.pool}</p>
      </div>
    </div>

  </div>
</Section>

  <Section id="location">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <img src="/images/0010002.jpg" className="w-full rounded-2xl shadow-soft" alt="Location"/>
      <div><h2 className="font-serif text-3xl mb-4">{t.location.title}</h2><p className="leading-8">{t.location.text}</p></div>
    </div>
  </Section>

  <Section id="plans">
    <h2 className="font-serif text-3xl mb-6">{t.plans.title}</h2>
    <p className="leading-8">{t.plans.intro}</p>
    <ul className="mt-4 text-slate-600 text-sm grid md:grid-cols-3 gap-2">
      {t.plans.levels.map((lv,i)=>(<li key={i} className="bg-white/60 rounded-xl px-3 py-2 border border-black/5">{lv}</li>))}
    </ul>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {t.plans.units.map((u)=>(
        <div key={u.code} className="bg-white rounded-2xl border border-black/5 p-4 shadow-soft">
          <div className="aspect-[4/3] bg-ivory grid place-items-center rounded-xl overflow-hidden">
            <img src={`/images/plans/units/${u.code}-plan.png`} alt={`${u.code} plan`} className="object-contain w-full h-full"/>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="font-medium">{u.code} — {u.label}</div>
            <a href={`/images/plans/units/${u.code}-plan.png`} download className="text-sm text-olive hover:underline">{t.plans.cta}</a>
          </div>
        </div>
      ))}
    </div>
  </Section>

  <Section id="progress">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div><h2 className="font-serif text-3xl mb-4">{t.progress.title}</h2><p className="leading-8">{t.progress.text}</p></div>
      <img src="/images/0010001.jpg" className="w-full rounded-2xl shadow-soft" alt="Progress"/>
    </div>
  </Section>

  <Section id="faq">
    <h2 className="font-serif text-3xl mb-6">{t.faq.title}</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[ [t.faq.q1,t.faq.a1],[t.faq.q2,t.faq.a2],[t.faq.q3,t.faq.a3],[t.faq.q4,t.faq.a4] ].map(([q,a],i)=>(
        <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-soft"><div className="font-medium mb-2">{q}</div><p className="text-slate-700">{a}</p></div>
      ))}
    </div>
  </Section>

  <Section id="contacts">
    <div className="grid md:grid-cols-2 gap-8">
      <div><h2 className="font-serif text-3xl mb-4">{t.contacts.title}</h2><p className="leading-8">{t.contacts.text}</p>
      <div className="mt-8 text-sm text-slate-600">Project — Como Lake View Residents (CLV Residents). Location — Argegno, Como, Italy.</div></div>
      <form onSubmit={(e)=>{e.preventDefault(); alert(lang==='en'?'Form submitted (placeholder)':'Modulo inviato (segnaposto)')}} className="bg-white rounded-2xl p-6 border border-black/5 shadow-soft">
        <div className="text-lg mb-2">{t.contacts.formTitle}</div>
        <p className="text-sm text-slate-600 mb-6">{t.contacts.formNote}</p>
        <label className="block text-sm mb-1">{t.contacts.name}</label><input className="w-full border rounded-xl px-3 py-2 mb-4" placeholder="—" required/>
        <label className="block text-sm mb-1">{t.contacts.email}</label><input type="email" className="w-full border rounded-xl px-3 py-2 mb-4" placeholder="—" required/>
        <label className="block text-sm mb-1">{t.contacts.message}</label><textarea className="w-full border rounded-xl px-3 py-2 mb-4 min-h-[120px]" placeholder="—"/>
        <button className="px-4 py-2 rounded-xl bg-slate text-white hover:opacity-90">{t.contacts.send}</button>
      </form>
    </div>
  </Section>

  <footer className="py-10 border-t border-black/5 text-sm"><div className="max-w-6xl mx-auto px-6 flex items-center justify-between"><div>{t.footer.rights}</div><div className="text-slate-500">EN / IT • clvresidents.com</div></div></footer>
 </div>)}
