import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key is present to avoid immediate errors, 
// though the app requires it for the chat feature.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (message: string, history: { role: string; text: string }[]): Promise<string> => {
  if (!ai) {
    return "Xin lỗi, tôi chưa được cấu hình API Key. Vui lòng kiểm tra lại hệ thống.";
  }

  try {
    const model = "gemini-2.5-flash";
    const contents = [
      {
        role: "user",
        parts: [{ text: `
          Bạn là trợ lý ảo AI của công ty công nghệ "AI Tiên tri". 
          Nhiệm vụ của bạn là tư vấn cho khách hàng về các dịch vụ của công ty một cách chuyên nghiệp, ngắn gọn và thân thiện.
          
          Thông tin công ty:
          - Tên: AI Tiên tri
          - Sứ mệnh: Mang trí tuệ nhân tạo vào mọi ngóc ngách của cuộc sống doanh nghiệp.
          - Dịch vụ chính: Phân tích dữ liệu lớn (Big Data), Chatbot chăm sóc khách hàng tự động, Tự động hóa quy trình (RPA), và Tư vấn chuyển đổi số.
          
          Hãy trả lời câu hỏi sau của khách hàng bằng tiếng Việt: ${message}` 
        }]
      }
    ];

    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
    });

    return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với máy chủ AI. Vui lòng thử lại sau.";
  }
};