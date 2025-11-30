import React from 'react';
import { SectionId } from '../types';
import { Crown, Infinity, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
  const visionPoints = [
    {
      icon: <Crown className="text-yellow-400" size={32} />,
      title: "Tiên phong & Dẫn đầu",
      description: "Thiết lập chuẩn mực mới bằng cách tổng hợp dữ liệu từ Kinh Dịch, Tử Vi, Tarot qua lăng kính AI. Chúng tôi tạo ra những dự đoán không chỉ chính xác mà còn mang tính cá nhân hóa sâu sắc, vượt trội hơn bất kỳ phương pháp đơn lẻ nào."
    },
    {
      icon: <Infinity className="text-cyan-400" size={32} />,
      title: "Giao thoa Khoa học & Tâm linh",
      description: "Sử dụng sức mạnh tính toán để giải mã và hệ thống hóa kho tàng tri thức cổ xưa. Chúng tôi đưa huyền học đến gần hơn với tư duy hiện đại: minh bạch, logic, dễ tiếp cận và đáng tin cậy."
    },
    {
      icon: <HeartHandshake className="text-pink-400" size={32} />,
      title: "Trao quyền Kiến tạo",
      description: "Mục đích tối thượng không chỉ là dự đoán, mà là trao quyền. Chúng tôi cung cấp công cụ để bạn thấu hiểu bản thân, nắm bắt thời cơ và chủ động kiến tạo một cuộc sống hạnh phúc, thịnh vượng."
    }
  ];

  return (
    <section id={SectionId.ABOUT} className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Tầm nhìn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI Tiên Tri</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed">
            Khai mở tương lai từ sự giao thoa giữa <span className="text-white font-medium">Công nghệ đột phá</span> và <span className="text-white font-medium">Tri thức Cổ xưa</span>. Chúng tôi dùng AI để bảo tồn và cách mạng hóa hệ thống dự đoán vận mệnh.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-surfaceLight/50 flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-secondary text-sm leading-relaxed text-justify">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;