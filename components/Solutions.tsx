import React from 'react';
import { Compass, Sparkles, Hash, Layers, ExternalLink, ArrowRight, Hand } from 'lucide-react';
import { SectionId, Service } from '../types';

const Solutions: React.FC = () => {
  const services: Service[] = [
    {
      id: 'huyen-vi',
      title: 'Huyền Vi - Kinh Dịch AI',
      description: 'Sản phẩm chủ lực kết hợp AI và 64 quẻ Kinh Dịch. Hệ thống gieo quẻ dự báo vận mệnh chi tiết, phân tích thời cơ, hỗ trợ ra quyết định chiến lược trong kinh doanh và cuộc sống.',
      icon: <Compass />
    },
    {
      id: 'tu-vi',
      title: 'Tử Vi Đẩu Số AI',
      description: 'Ứng dụng AI lập và luận giải lá số Tử Vi Đẩu Số tức thì. Phân tích vị trí các sao để đưa ra lời giải đoán cá nhân hóa về vận mệnh, tài lộc và chu kỳ thịnh suy.',
      icon: <Sparkles />
    },
    {
      id: 'than-so',
      title: 'Thần Số Học AI',
      description: 'Khám phá bản đồ cuộc đời qua các con số. AI tính toán các chỉ số Đường đời, Linh hồn, Sứ mệnh để vẽ nên bức chân dung toàn diện về tính cách và tiềm năng.',
      icon: <Hash />
    },
    {
      id: 'tarot',
      title: 'Tarot Reader AI',
      description: 'AI được huấn luyện chuyên sâu giúp rút bài và giải mã thông điệp Tarot dựa trên ngữ cảnh câu hỏi, khơi thông trực giác và giải tỏa tâm lý một cách riêng tư.',
      icon: <Layers />
    },
    {
      id: 'chi-tay',
      title: 'AI Xem Chỉ Tay',
      description: 'Phân tích đường chỉ tay bằng công nghệ nhận diện hình ảnh AI. Giải mã vận mệnh, tình duyên và sự nghiệp qua các đường Tâm đạo, Trí đạo và Sinh đạo.',
      icon: <Hand />
    }
  ];

  return (
    <section id={SectionId.SOLUTIONS} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Hệ sinh thái <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sản phẩm</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Sự kết hợp hoàn hảo giữa tri thức huyền học cổ xưa và sức mạnh tính toán của trí tuệ nhân tạo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const isHuyenVi = service.id === 'huyen-vi';

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col p-8 rounded-3xl transition-all duration-500 overflow-hidden
                  ${isHuyenVi
                    ? 'bg-gradient-to-br from-white/10 to-primary/10 border border-primary/50 shadow-2xl shadow-primary/10 hover:shadow-primary/20'
                    : 'bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/20 hover:bg-white/10'
                  }
                  hover:-translate-y-2
                `}
              >
                {/* Background Glow for Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300
                    ${isHuyenVi
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30 group-hover:scale-110'
                      : 'bg-surfaceLight/50 text-secondary border-white/10 group-hover:text-white group-hover:bg-white/10'
                    }
                  `}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
                  </div>

                  {/* Beta Tag */}
                  {!isHuyenVi && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-secondary uppercase tracking-wider">
                      Beta
                    </span>
                  )}
                  {/* Featured Tag for Huyen Vi */}
                  {isHuyenVi && (
                    <span className="px-3 py-1 bg-accent/20 border border-accent/20 rounded-full text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                </div>

                <h3 className={`text-2xl font-bold mb-4 transition-colors ${isHuyenVi ? 'text-white' : 'text-gray-100 group-hover:text-white'}`}>
                  {service.title}
                </h3>

                <p className="text-secondary leading-relaxed text-base text-justify flex-grow">
                  {service.description}
                </p>

                {/* Footer Action Area */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  {isHuyenVi ? (
                    <a
                      href="https://huyenvi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group/link"
                    >
                      Trải nghiệm ngay
                      <ExternalLink size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-gray-500 italic">
                      <span>Đang thử nghiệm</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;