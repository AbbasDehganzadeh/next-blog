import { Card, CardBody } from '@heroui/card';

export default function About() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in full-stack web development, mobile app development, and cloud solutions. Our team creates custom software solutions tailored to your specific business needs using cutting-edge technologies."
    },
    {
      question: "How long has your company been in business?",
      answer: "Founded in 2020, we've spent the last four years building innovative digital solutions for clients across various industries. Our team brings over 25 years of combined experience in software development."
    },
    {
      question: "What makes your company different from competitors?",
      answer: "We combine technical expertise with a deep understanding of business needs. Our agile approach, transparent communication, and commitment to delivering high-quality solutions set us apart."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular client check-ins and iterations. Our process includes thorough planning, development sprints, continuous testing, and post-launch support."
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms like AWS and Azure. We stay current with industry trends to deliver optimal solutions."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We offer flexible pricing models including fixed-price projects and time-and-materials arrangements. Each quote is customized based on project scope, complexity, and timeline requirements."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while larger enterprise solutions may span 3-6 months or more."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. Our team provides regular updates, bug fixes, and technical support to ensure your solution runs smoothly."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We implement rigorous quality assurance processes including automated testing, code reviews, and performance optimization. Every project undergoes thorough testing before deployment."
    },
    {
      question: "What industries do you serve?",
      answer: "We work across various sectors including e-commerce, healthcare, finance, and education. Our diverse experience allows us to understand unique industry challenges and requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Description Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-8 text-center">
            About Us
          </h1>
          <Card className="bg-white dark:bg-gray-800 shadow-xl">
            <CardBody className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Founded in 2020, we are a passionate team of developers and designers dedicated to creating exceptional digital experiences. Our mission is to transform innovative ideas into powerful, scalable solutions that drive business growth and user engagement. What sets us apart is our commitment to combining technical excellence with creative problem-solving, ensuring each project we undertake exceeds expectations.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With a track record of successful projects across various industries and recognition for our innovative approaches, we've established ourselves as a trusted partner for businesses seeking digital transformation. Our team's expertise spans the latest web technologies, cloud solutions, and development methodologies, allowing us to deliver cutting-edge solutions that stand the test of time.
              </p>
            </CardBody>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardBody>
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      <span className="transition group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-500 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
