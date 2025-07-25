import React from 'react';
import { Zap, Users, Lock, Smartphone, Globe, Star } from 'lucide-react';
const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Messaging",
      description: "Instant message delivery with typing indicators and online status."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Chats",
      description: "Create developer communities and collaborate on projects together."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "End-to-End Security",
      description: "JWT authentication and secure password hashing keep you safe."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description: "Perfect experience across all devices with modern UI design."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Community",
      description: "Connect with developers worldwide and expand your network."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "No Data Mining",
      description: "We don't collect, store, or sell your personal information. Ever."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Modern Developers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to connect, collaborate, and create meaningful relationships in the developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-purple-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
