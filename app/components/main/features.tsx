import { Card, CardBody } from '@heroui/card';

export default function Features() {
  const features = [
    {
      title: "Creative Problem Solver",
      description: "Turning complex challenges into elegant solutions with innovative thinking and technical expertise.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Detail-Oriented Developer",
      description: "Crafting clean, maintainable code with meticulous attention to best practices and performance.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaborative Team Player",
      description: "Building strong relationships and delivering results through effective communication and teamwork.",
      image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "Innovative Thinker",
      description: "Bringing fresh perspectives and creative solutions to challenging technical problems.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      gradient: "from-red-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-700">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            What I Bring to the Table
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Passionate about creating impactful solutions through code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardBody className="p-0">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
