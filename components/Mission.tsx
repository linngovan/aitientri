import React from 'react';
import { Database, Cpu, Fingerprint, TrendingUp } from 'lucide-react';

const Mission: React.FC = () => {
  const missions = [
    {
      icon: <Database className="text-emerald-400" size={32} />,
      title: "Số hóa Tri thức Cổ xưa",
      description: "Sử dụng AI để nhập liệu, hệ thống hóa các quy luật ẩn sâu trong Kinh Dịch, Tử Vi thành nguồn dữ liệu khoa học có cấu trúc, đảm bảo sự trường tồn của trí tuệ nhân loại trong kỷ nguyên số."
    },
    {
      icon: <Cpu className="text-violet-400" size={32} />,
      title: "Công nghệ Dự báo Tiên tiến",
      description: "Phát triển thuật toán Machine Learning độc quyền kết hợp mô hình cổ học với dữ liệu hiện đại, tạo ra các sản phẩm dự đoán chuyên sâu, đa chiều và chính xác."
    },
    {
      icon: <Fingerprint className="text-amber-400" size={32} />,
      title: "Trải nghiệm Cá nhân hóa",
      description: "Cung cấp lời khuyên được 'may đo' riêng biệt cho từng cá nhân (Individualized Insights) dựa trên sinh trắc học và dữ liệu quá khứ, giúp thấu hiểu trọn vẹn lộ trình phát triển."
    },
    {
      icon: <TrendingUp className="text-rose-400" size={32} />,
      title: "Thúc đẩy Quyết định Tích cực",
      description: "Chuyển hóa dự báo thành hành động. Cung cấp giải pháp thực tế giúp người dùng cải thiện sự nghiệp, tài chính và các mối quan hệ, chủ động kiến tạo cuộc sống tốt đẹp hơn."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Sứ mệnh <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Kiến tạo</span>
          </h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            Số hóa trí tuệ cổ xưa và cung cấp công cụ tiên tri chuẩn xác, giúp mỗi cá nhân thấu hiểu tiềm năng và chủ động điều hướng vận mệnh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="group flex gap-6 p-8 rounded-3xl bg-surface/30 backdrop-blur-md border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-surfaceLight/50 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {mission.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {mission.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed text-justify">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;