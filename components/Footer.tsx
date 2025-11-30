import React from 'react';
import { SectionId } from '../types';
import { Mail, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="relative border-t border-white/5 bg-background pt-20 pb-10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Section with Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left animate-slide-up">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Sẵn sàng <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kết nối?</span>
                </h2>
                <p className="text-secondary text-lg leading-relaxed">
                    Hãy để AI Tiên Tri đồng hành cùng bạn trên hành trình khám phá và làm chủ vận mệnh.
                </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
                <a href="mailto:contact@aitientri.vn" className="group flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20">
                    <Mail className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-white font-medium text-lg">contact@aitientri.vn</span>
                    <ArrowUpRight className="text-secondary group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <div className="flex gap-4">
                    {[Facebook, Linkedin, Youtube].map((Icon, i) => (
                        <button key={i} className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-md">
                            <Icon size={20} />
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} AI Tiên tri. Bản quyền đã được bảo hộ.</p>
          <div className="flex gap-8">
            <button className="hover:text-white transition-colors">Điều khoản sử dụng</button>
            <button className="hover:text-white transition-colors">Chính sách bảo mật</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;