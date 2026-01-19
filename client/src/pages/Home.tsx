import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Facebook, Instagram, Gamepad2, ExternalLink, Star } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Dynamic
 * - Soft blue gradients with subtle geometric shapes
 * - Smooth animations and transitions
 * - Interactive card hover effects
 * - Professional yet welcoming aesthetic
 */

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "البريد الإلكتروني",
      icon: Mail,
      url: "mailto:mhmdbghny1@gmail.com",
      color: "hover:text-blue-600",
    },
    {
      name: "فيسبوك",
      icon: Facebook,
      url: "https://www.facebook.com/share/1CFS8d7AWJ/",
      color: "hover:text-blue-600",
    },
    {
      name: "إنستغرام",
      icon: Instagram,
      url: "https://www.instagram.com/x5h7_?igsh=NjljZXpkMTBuMGVw",
      color: "hover:text-pink-600",
    },
    {
      name: "ستيم",
      icon: Gamepad2,
      url: "https://s.team/p/jtvh-nwvh/qbjgkqtn",
      color: "hover:text-blue-600",
    },
  ];

  const testimonials = [
    {
      name: "د. أحمد الشريف",
      role: "أستاذ البرمجة",
      content: "محمد طالب متميز يتمتع بفهم عميق لمبادئ البرمجة. يظهر التزاماً قوياً في دراسته وقدرة على حل المشاكل المعقدة بكفاءة.",
      rating: 5,
    },
    {
      name: "فاطمة محمود",
      role: "زميلة في الدراسة",
      content: "محمد زميل رائع يتعاون بفعالية في المشاريع الجماعية. يتمتع بروح إيجابية وقدرة على التواصل بشكل واضح مع الفريق.",
      rating: 5,
    },
    {
      name: "أ. سارة علي",
      role: "مدرسة قواعد البيانات",
      content: "محمد يظهر فضول علمي كبير وحماساً للتعلم. تطبيقاته العملية لمفاهيم قواعد البيانات كانت مثيرة للإعجاب وتستحق الثناء.",
      rating: 5,
    },
    {
      name: "علي محمد",
      role: "زميل في المشروع",
      content: "العمل مع محمد كان تجربة ممتازة. يتمتع بمهارات تقنية قوية وقدرة على القيادة والتنسيق بين أعضاء الفريق.",
      rating: 5,
    },
    {
      name: "د. محمود حسن",
      role: "مشرف المشاريع",
      content: "محمد يتمتع بالمثابرة والإصرار على تحقيق الأهداف. مشاريعه تتسم بالجودة العالية والاهتمام بالتفاصيل.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-display font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            محمد ناصر
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              عني
            </a>
            <a href="#skills" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              المهارات
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              التوصيات
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              التواصل
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/images/hero-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div
            className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Profile Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div
                  className="absolute inset-0 rounded-full opacity-50"
                  style={{
                    backgroundImage: "url('/images/profile-decoration.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="font-display font-bold text-4xl mb-2">محمد</div>
                    <div className="text-sm text-blue-100">طالب تقنية حاسوب</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1">
              <div className="space-y-6">
                <div>
                  <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-2">
                    محمد ناصر علي بغني
                  </h1>
                  <p className="text-xl text-blue-600 font-medium">طالب في كلية تقنية الحاسوب - طرابلس</p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                  مرحباً! أنا طالب متحمس في كلية تقنية الحاسوب بطرابلس، مهتم بتطوير المهارات التقنية والعملية في مجال
                  تكنولوجيا المعلومات. أسعى للتعلم المستمر والنمو المهني.
                </p>

                <div className="flex gap-4">
                  <a href="#contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
                      تواصل معي
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-8 py-3 transition-all duration-300"
                  >
                    تحميل السيرة الذاتية
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-12 text-center">عني</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-blue-600 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">التعليم</h3>
              <p className="text-gray-700 leading-relaxed">
                طالب في كلية تقنية الحاسوب بجامعة طرابلس، متخصص في دراسة أساسيات البرمجة وتقنيات الحاسوب الحديثة.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-blue-600 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">الاهتمامات</h3>
              <p className="text-gray-700 leading-relaxed">
                مهتم بتطوير تطبيقات الويب والألعاب، والتعمق في مجالات الذكاء الاصطناعي وأمن المعلومات.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-blue-600 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">الهوايات</h3>
              <p className="text-gray-700 leading-relaxed">
                أستمتع باللعب والاستكشاف في عالم الألعاب، وقضاء الوقت في تطوير مشاريع برمجية شخصية.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-blue-600 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">الأهداف</h3>
              <p className="text-gray-700 leading-relaxed">
                السعي لتطوير مهارات عملية قوية والمساهمة في مشاريع تقنية مؤثرة في المستقبل.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-12 text-center">المهارات</h2>

          <div className="max-w-4xl mx-auto">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "url('/images/skills-background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="relative grid md:grid-cols-2 gap-8">
              {/* Programming Skills */}
              <Card className="p-8 bg-white border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">لغات البرمجة</h3>
                <div className="space-y-4">
                  {["Python", "JavaScript", "HTML & CSS", "SQL"].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Technical Skills */}
              <Card className="p-8 bg-white border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">المهارات التقنية</h3>
                <div className="space-y-4">
                  {["تطوير الويب", "قواعد البيانات", "أنظمة التشغيل", "الشبكات"].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Soft Skills */}
              <Card className="p-8 bg-white border-blue-100/50 hover:shadow-lg transition-all duration-300 md:col-span-2">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">المهارات الشخصية</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["التواصل", "العمل الجماعي", "حل المشاكل", "الإبداع"].map((skill) => (
                    <div
                      key={skill}
                      className="p-4 bg-gradient-to-br from-blue-50 to-white border border-blue-100/50 rounded-lg text-center hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-gray-700 font-medium text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-12 text-center">شهادات التقدير</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-blue-100/50 pt-4">
                      <p className="font-display font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Testimonials Summary */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-display font-bold text-blue-600 mb-2">5.0</div>
                <p className="text-gray-700 text-sm">متوسط التقييم</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-display font-bold text-blue-600 mb-2">5</div>
                <p className="text-gray-700 text-sm">عدد التوصيات</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-display font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-700 text-sm">التقييمات الإيجابية</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-12 text-center">تواصل معي</h2>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center gap-3 h-full">
                      <Icon className={`w-8 h-8 text-blue-600 transition-all duration-300 group-hover:scale-110 ${link.color}`} />
                      <span className="text-sm font-medium text-gray-700 text-center">{link.name}</span>
                    </Card>
                  </a>
                );
              })}
            </div>

            {/* Email Form */}
            <Card className="mt-12 p-8 bg-white border-blue-100/50">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-6">أرسل لي رسالة</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                  <textarea
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                    rows={4}
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg py-3 transition-all duration-300 hover:shadow-lg">
                  إرسال الرسالة
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2026 محمد ناصر علي بغني. جميع الحقوق محفوظة.</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  title={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
