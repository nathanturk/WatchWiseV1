import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, BarChart3, Users, Zap, CheckCircle, XCircle, Star, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function LandingPage() {
  return (
    <div className="min-h-screen gradient-bg overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in-scale">
            <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">WatchWise</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Features
            </Link>
            <Link
              href="#use-cases"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Use Cases
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Testimonials
            </Link>
          </nav>

          <div className="flex items-center space-x-4 animate-slide-in-right">
            <Link href="/auth/signin">
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="orange-gradient text-white hover:scale-105 transition-all duration-300 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 animate-pulse-glow">
                  ✨ New: AI-Powered Insights
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Built for YouTube{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Teams
                  </span>
                  <br />— Not Solo Creators
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Deep video analytics for content teams, marketing agencies, and brands managing multiple YouTube
                  channels. Get actionable insights that drive real business results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="orange-gradient text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-2xl"
                  >
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Start Free Analysis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-scale" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover-lift">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 opacity-50"></div>
                <Image
                  src="/images/dashboard-preview.png"
                  alt="WatchWise Dashboard Preview"
                  width={700}
                  height={500}
                  className="w-full h-auto relative z-10"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-gradient hover-lift stagger-item">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center">
                  <XCircle className="w-8 h-8 text-red-500 mr-3" />
                  The Problem with Current Analytics
                </h2>
                <div className="space-y-4">
                  {[
                    "YouTube Studio lacks team collaboration features",
                    "No timeline-based audience retention insights",
                    "Missing AI-powered content recommendations",
                    "Difficult to export and share reports",
                  ].map((problem, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20"
                    >
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{problem}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift stagger-item">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-white flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  Our Solution
                </h2>
                <div className="space-y-4">
                  {[
                    "Team-first analytics built for collaboration",
                    "Interactive timeline heatmaps with transcript mapping",
                    "AI-generated insights and content recommendations",
                    "Professional reports ready for stakeholders",
                  ].map((solution, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center space-y-16">
          <div className="space-y-4 animate-fade-in-up">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">⚡ Powerful Features</Badge>
            <h2 className="text-5xl font-bold text-white">Powerful Analytics, Beautiful Interface</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything your team needs to optimize YouTube performance with cutting-edge AI insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Interactive Timeline Heatmaps",
                description:
                  "Visualize audience retention with precision. Identify exact moments where viewers drop off or engage more.",
                gradient: "orange-gradient",
                delay: "0.1s",
              },
              {
                icon: Users,
                title: "Transcript Mapping",
                description:
                  "Match spoken content with audience behavior. Understand which topics resonate and which cause viewers to leave.",
                gradient: "purple-gradient",
                delay: "0.2s",
              },
              {
                icon: Zap,
                title: "AI-Powered Insights",
                description:
                  "Get actionable recommendations based on your content performance. Learn what works and what to try next.",
                gradient: "blue-gradient",
                delay: "0.3s",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="card-gradient hover-lift stagger-item"
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div
                    className={`w-20 h-20 mx-auto ${feature.gradient} rounded-3xl flex items-center justify-center shadow-2xl`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center space-y-16">
          <div className="space-y-4 animate-fade-in-up">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">💬 Customer Love</Badge>
            <h2 className="text-5xl font-bold text-white">Trusted by Marketing Teams</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how teams are transforming their YouTube strategy with WatchWise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Creative Director, BrandFlow",
                avatar: "SC",
                quote:
                  "Finally, analytics that make sense for our team workflow. The timeline insights have completely changed how we approach content strategy.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                name: "Marcus Rodriguez",
                role: "VP Marketing, TechCorp",
                avatar: "MR",
                quote:
                  "The AI recommendations have helped us increase our average view duration by 40%. This tool pays for itself.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                name: "Emily Watson",
                role: "Head of Content, CreativeStudio",
                avatar: "EW",
                quote:
                  "Professional reports that our clients actually understand. The export features save us hours every week.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="card-gradient hover-lift stagger-item">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-left leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <Card className="card-gradient hover-lift text-center">
            <CardContent className="p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-white">Ready to Transform Your YouTube Analytics?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join marketing teams who've already upgraded their content strategy with AI-powered insights
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    className="orange-gradient text-white hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-2xl"
                  >
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Sign in with Google - It's Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-4 backdrop-blur-xl bg-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">WatchWise</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional YouTube analytics for marketing teams and agencies. Transform your content strategy with
                AI-powered insights.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Integrations"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Privacy", "Terms"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-white text-lg">{section.title}</h4>
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      className="block text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 WatchWise. All rights reserved. Made with ❤️ for YouTube creators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
