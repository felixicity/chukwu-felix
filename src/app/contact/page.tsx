import { Mail, Send, MapPin } from "lucide-react";
import React from "react";

const page = () => {
      return (
            <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
                  <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* LEFT COLUMN: The Narrative & Info */}
                        <div className="space-y-12">
                              <header className="space-y-4">
                                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                                          Let&apos;s build <span className="text-[var(--accent)]">together.</span>
                                    </h1>
                                    <p className="text-xl text-[var(--neutral)] leading-relaxed max-w-md">
                                          Whether you have a specific project in mind or just want to talk shop about
                                          Node.js architecture, my inbox is open.
                                    </p>
                              </header>

                              <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                          <div className="w-10 h-10 rounded-full  border border-[var(--neutral)] flex items-center justify-center text-[var(--accent)]">
                                                <Mail size={20} />
                                          </div>
                                          <div>
                                                <h4 className="font-medium">Email</h4>
                                                <p className="text-[var(--neutral)] text-sm">chukwufelix16@email.com</p>
                                          </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                          <div className="w-10 h-10 rounded-full  border border-[var(--neutral)] flex items-center justify-center text-[var(--accent)]">
                                                <MapPin size={20} />
                                          </div>
                                          <div>
                                                <h4 className="font-medium">Location</h4>
                                                <p className="text-[var(--neutral)] text-sm">
                                                      Lagos, Nigeria (WAT / UTC+1)
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* RIGHT COLUMN: The Modern Form */}
                        <section className="p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                              {/* Subtle background glow */}
                              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent)]/10 blur-[100px]" />

                              <form className="space-y-6 relative z-10">
                                    <div className="space-y-2">
                                          <label className="text-xs font-mono uppercase tracking-widest text-[var(--neutral)]">
                                                Name
                                          </label>
                                          <input
                                                type="text"
                                                className="w-full  border border-[var(--neutral)] rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-all"
                                          />
                                    </div>
                                    <div className="space-y-2">
                                          <label className="text-xs font-mono uppercase tracking-widest text-[var(--neutral)]">
                                                Email
                                          </label>
                                          <input
                                                type="email"
                                                className="w-full  border border-[var(--neutral)] rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-all"
                                          />
                                    </div>

                                    <div className="space-y-2">
                                          <label className="text-xs font-mono uppercase tracking-widest text-[var(--neutral)]">
                                                Subject
                                          </label>
                                          <select className="w-full border border-[var(--neutral)] rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-all appearance-none">
                                                <option>General Inquiry</option>
                                                <option>Project Proposal</option>
                                                <option>Mentorship</option>
                                          </select>
                                    </div>

                                    <div className="space-y-2">
                                          <label className="text-xs font-mono uppercase tracking-widest text-[var(--neutral)]">
                                                Message
                                          </label>
                                          <textarea
                                                rows={5}
                                                className="w-full border border-[var(--neutral)] rounded-xl px-4 py-3 outline-none focus:border-[var(--accent)] transition-all resize-none"
                                          />
                                    </div>

                                    <button className="w-full py-4 bg-[var(--on-accent)] text-[var(--reversed-text)] font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                          Send Message <Send size={18} />
                                    </button>
                              </form>
                        </section>
                  </div>
            </main>
      );
};
export default page;
