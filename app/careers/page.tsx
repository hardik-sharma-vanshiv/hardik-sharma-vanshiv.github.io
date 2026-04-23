"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Job {
  jobId: string;
  title: string;
  description: string;
  type: string;
  requirements: string[];
  keyResponsibilities: string[];
  niceToHave: string[];
  workMode: string;
  location: string;
  openPositions: number;
  lastDate: string | null;
  isActive: boolean;
  experienceRequired: {
    min: number;
    max: number;
  };
  workingHours: string;
}

interface JobsResponse {
  message: string;
  count: number;
  data: Job[];
}

export default function Careers() {
  const [showGoTop, setShowGoTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [jobs, activeTab]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/jobs');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data: JobsResponse = await response.json();
      const activeJobs = data.data.filter((job) => job.isActive);
      setJobs(activeJobs);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = jobs;
    if (activeTab !== 'all') {
      filtered = filtered.filter((job) => {
        const typeMatch = job.type && job.type.toLowerCase().includes(activeTab.toLowerCase());
        if (activeTab === 'ai' && job.type && job.type.toLowerCase().includes('data')) return true;
        return typeMatch;
      });
    }
    setFilteredJobs(filtered);
  };

  const filterJobs = (dept: string) => {
    setActiveTab(dept);
  };

  const getDeptBadge = (type: string) => {
    if (!type) return 'bg-gray-50 text-gray-600';
    const t = type.toLowerCase();
    if (t.includes('engineering')) return 'bg-blue-50 text-blue-600';
    if (t.includes('ai') || t.includes('data')) return 'bg-purple-50 text-purple-600';
    if (t.includes('consulting')) return 'bg-orange-50 text-orange-600';
    if (t.includes('sales')) return 'bg-green-50 text-green-600';
    return 'bg-gray-50 text-gray-600';
  };

  const getDeptName = (type: string) => {
    if (!type) return 'Other';
    const t = type.toLowerCase();
    if (t.includes('engineering')) return 'Engineering';
    if (t.includes('ai') || t.includes('data')) return 'AI & Data';
    if (t.includes('consulting')) return 'Consulting';
    if (t.includes('sales')) return 'Sales';
    return type;
  };

  return (
    <div className="bg-[#fdfeff] text-[#26282b] font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        .section-dark {
          background-color: #4f3144;
          background-image:
            radial-gradient(circle at 15% 55%, rgba(255,134,59,0.12) 0%, transparent 45%),
            radial-gradient(circle at 85% 15%, rgba(255,92,169,0.10) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E");
        }
        .section-dark-deeper {
          background-color: #3b2535;
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E");
        }

        .hero-bg {
          background-color: #4f3144;
          background-image:
            radial-gradient(circle at 10% 60%, rgba(255,134,59,0.18) 0%, transparent 50%),
            radial-gradient(circle at 90% 10%, rgba(255,49,43,0.12) 0%, transparent 40%),
            radial-gradient(circle at 60% 90%, rgba(255,92,169,0.10) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E");
        }

        .gradient-text {
          background: linear-gradient(90deg, rgb(255,49,43) 0%, rgb(255,134,59) 30%, rgb(255,219,74) 60%, rgb(255,92,169) 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .value-card {
          background: rgba(255,255,255,1);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          padding: 32px 28px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .job-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          padding: 28px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
          border-color: #ff5542;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }
      `}} />
      <Navbar />
      {/* HERO */}
      <section className="hero-bg pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center mt-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6 fade-up" style={{ animationDelay: '0.2s' }}>
            Join Our<br className="hidden sm:block" />
            Growing Team
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-10 fade-up" style={{ animationDelay: '0.35s' }}>
            We're looking for talented individuals who are passionate about innovation and making a difference. Explore our open positions and find your next career opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 fade-up" style={{ animationDelay: '0.48s' }}>
            <a href="#positions" className="inline-flex items-center gap-2 bg-[#ff5542] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#cc4435] transition-colors">
              View open positions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-[#FAFAFA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-black text-sm font-semibold uppercase tracking-wider mb-3">Our Culture</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">What we stand for</h2>
            <p className="text-black/40 text-lg mt-4 max-w-xl mx-auto">Our values guide how we work, collaborate, and grow together.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Innovation */}
            <div className="value-card">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg,rgba(255,85,66,0.25),rgba(255,134,59,0.15))', border: '1px solid rgba(255,85,66,0.3)' }}>
                <svg className="w-6 h-6" fill="none" stroke="#ff5542" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-black font-bold text-xl mb-3">Innovation</h3>
              <p className="text-black/60 text-sm leading-relaxed">We embrace new ideas and creative problem-solving approaches to stay ahead of the curve.</p>
            </div>

            {/* Collaboration */}
            <div className="value-card">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg,rgba(21,137,238,0.25),rgba(0,112,210,0.15))', border: '1px solid rgba(21,137,238,0.3)' }}>
                <svg className="w-6 h-6" fill="none" stroke="#1589EE" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-black font-bold text-xl mb-3">Collaboration</h3>
              <p className="text-black/60 text-sm leading-relaxed">We believe in the power of working together toward common goals and shared success.</p>
            </div>

            {/* Growth */}
            <div className="value-card">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg,rgba(255,219,74,0.25),rgba(255,134,59,0.15))', border: '1px solid rgba(255,219,74,0.3)' }}>
                <svg className="w-6 h-6" fill="none" stroke="#FFDB4A" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-black font-bold text-xl mb-3">Growth</h3>
              <p className="text-black/60 text-sm leading-relaxed">Continuous learning and development are fundamental to our culture and your career here.</p>
            </div>

            {/* Balance */}
            <div className="value-card">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg,rgba(181,23,158,0.25),rgba(255,92,169,0.15))', border: '1px solid rgba(181,23,158,0.3)' }}>
                <svg className="w-6 h-6" fill="none" stroke="#B5179E" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-black font-bold text-xl mb-3">Balance</h3>
              <p className="text-black/60 text-sm leading-relaxed">We prioritize well-being and sustainable work practices so you can do your best work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="positions" className="bg-[#fdfeff] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#ff5542] text-sm font-semibold uppercase tracking-wider mb-3">Open Positions</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#26282b] leading-tight">Find your next role</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">Join a team building the future of applied AI and enterprise transformation.</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button onClick={() => filterJobs('all')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'all' ? 'bg-[#ff5542] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>All</button>
            <button onClick={() => filterJobs('engineering')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'engineering' ? 'bg-[#ff5542] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Engineering</button>
            <button onClick={() => filterJobs('ai')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'ai' ? 'bg-[#ff5542] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>AI & Data</button>
            <button onClick={() => filterJobs('consulting')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'consulting' ? 'bg-[#ff5542] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Consulting</button>
            <button onClick={() => filterJobs('sales')} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${activeTab === 'sales' ? 'bg-[#ff5542] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>Sales</button>
          </div>

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">Error loading jobs: {error}</p>
              <button onClick={fetchJobs} className="text-[#ff5542] hover:underline">
                Try again
              </button>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="job-card animate-pulse">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded mb-5"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.map((job, idx) => (
                    <div key={idx} className="job-card">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDeptBadge(job.type)}`}>{getDeptName(job.type)}</span>
                        <span className="text-xs text-gray-400">{job.workMode || 'Full-time'}</span>
                      </div>
                      <h3 className="text-[#26282b] font-bold text-lg mb-2">{job.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{job.keyResponsibilities}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {job.location}
                        </div>
                        <Link href="/#contact" className="text-[#ff5542] text-sm font-semibold hover:text-[#cc4435] transition-colors flex items-center gap-1">
                          Apply <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-gray-400 text-lg">No positions found in this category right now.</p>
                  <button onClick={() => filterJobs('all')} className="mt-4 text-[#ff5542] font-semibold hover:text-[#cc4435] transition-colors">View all positions</button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section-dark-deeper py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Don't see the right role?</h2>
          <p className="text-white/60 text-lg mb-8">We're always looking for exceptional people. Send us your resume and we'll reach out when the right opportunity opens up.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#ff5542] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#cc4435] transition-colors text-lg">
            Send your resume
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* Go to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 999, width: '46px', height: '46px',
          borderRadius: '50%', background: '#ff5542', color: '#fff', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(255,85,66,0.45)',
          opacity: showGoTop ? 1 : 0, transition: 'opacity 0.3s, transform 0.3s',
          transform: showGoTop ? 'translateY(0)' : 'translateY(12px)',
          pointerEvents: showGoTop ? 'auto' : 'none'
        }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
      </button>
      <Footer />
    </div>
  );
}
