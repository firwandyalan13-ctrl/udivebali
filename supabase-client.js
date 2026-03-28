// Supabase 客户端配置
const SUPABASE_URL = 'https://cowjfgpgxxmzltgwovde.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvd2pmZ3BneHhtemx0Z3dvdmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2OTY0MDksImV4cCI6MjA5MDI3MjQwOX0.echOFhEZt8BLoALlYbuN2eS79loMlrL6eEjZ-u35dac';

// 创建单例客户端
let supabaseClient = null;

function getSupabaseClient() {
  if (!supabaseClient) {
    // 从 CDN 加载 @supabase/supabase-js
    if (typeof supabase !== 'undefined') {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
  }
  return supabaseClient;
}

// 提交预订表单到 Supabase
async function submitBooking(formData) {
  const client = getSupabaseClient();
  
  try {
    const { data, error } = await client
      .from('bookings')
      .insert([{
        name: formData.name,
        contact: formData.contact,
        date: formData.date,
        intent: formData.intent,
        notes: formData.notes,
        created_at: new Date().toISOString()
      }])
      .select();
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('提交预订失败:', error);
    return { success: false, error: error.message };
  }
}

// 导出到全局
window.supabaseClient = getSupabaseClient;
window.submitBooking = submitBooking;
