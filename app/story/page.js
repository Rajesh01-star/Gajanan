'use client'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sections = [
  {
    title: "The Beginning",
    description: `
      I was once an engineer, comfortably settled in a well-paying job with a promising future. My days were filled with coding, designing, and troubleshooting, tasks that I had mastered over the years. However, a series of incidents in my life made me realize that I needed to make a change, not just for myself but for society.
      
      It all started with a tragic accident involving a close friend. Despite his proficiency in driving, he became a victim of reckless driving, a common issue that plagued our roads. The incident shook me to the core. I began to notice the frequency of such accidents, each preventable with proper driving education and awareness.
      
      I also saw the struggles of new drivers, especially those from underprivileged backgrounds who couldn’t afford quality driving education. Many were eager to learn but lacked access to the resources they needed to become confident and safe drivers.
      
      These realizations ignited a spark within me. I knew I had to do something that would make a tangible difference. I wanted to create a driving school that didn’t just teach people how to drive, but also instilled in them the principles of road safety and responsible driving. A place where anyone, regardless of their background, could learn to drive confidently and safely.
      
      Leaving behind my stable engineering career was not an easy decision. It was a leap of faith, driven by a passion to make the roads safer and to empower individuals with the skill of driving. Thus, the idea of our driving school was born. A school where every lesson is designed not just to pass a test, but to save lives and change society for the better.
      
      Today, as I look back, I see a journey filled with challenges, hard work, and immense satisfaction. Our driving school has grown beyond my expectations, touching the lives of countless individuals and making our roads a safer place. This is just the beginning, and the journey continues with each new learner who walks through our doors.
    `,
    imageSrc: "https://picsum.photos/200/300",
  },
  // Add more sections as needed
  {
    title: "Emphasizing Safety",
    description: `
      Our mission extends beyond teaching the mechanics of driving. We wanted to cause that shift that can help new drivers to drive with safety, understanding that a driver is not only responsible for his life but also the lives of the passengers.
      
      Every lesson at our school is crafted with safety at its core. We teach our students to be vigilant, aware, and considerate drivers. By promoting safe driving habits, we aim to reduce accidents and make the roads safer for everyone.
      
      Our comprehensive curriculum includes defensive driving techniques, understanding road signs, and developing a cautious driving mindset. We believe that by instilling these values in our students, we are contributing to a culture of safety on the roads.
      
      We are proud to see our graduates driving responsibly, with confidence and awareness. The feedback from our community highlights the positive impact of our approach, reinforcing our commitment to safety and excellence in driving education.
    `,
    imageSrc: "https://picsum.photos/200/300",
  },
  {
    title: "Our Commitment to Service",
    description: `
      At our driving school, we're not money-minded; we prioritize service and satisfaction above all. We believe that a satisfied customer is the best business strategy of all.
      
      Our focus is on providing exceptional training and support to our students. We invest in experienced instructors, comprehensive training programs, and high-quality vehicles to ensure our students receive the best possible education.
      
      We aim to build long-lasting relationships with our students, ensuring they feel valued and supported throughout their learning journey and beyond. This commitment to service and satisfaction drives everything we do.
    `,
    imageSrc: "https://picsum.photos/200/300",
  },
  {
    title: "Thriving on Trust",
    description: `
      Trust is the cornerstone of our driving school. From the moment a student walks through our doors, they are greeted with transparency, integrity, and respect. We understand that learning to drive is a significant milestone, and it requires trust in both the instructor and the institution.
      
      We prioritize trust-building at every step of the learning journey. Our instructors are not just skilled professionals; they are mentors who inspire confidence and instill trust in their students. With patience, empathy, and expertise, they guide learners through the complexities of driving, earning their trust and respect along the way.
      
      Beyond individual interactions, trust is ingrained in our institutional values. We uphold the highest standards of professionalism, ethics, and accountability in all our operations. From maintaining the safety of our vehicles to ensuring fair and transparent pricing, we strive to earn and retain the trust of our students and their families.
      
      Our commitment to trust extends beyond the classroom. We foster open communication, actively seek feedback, and continuously improve our services based on the needs and expectations of our community. By building trust with each interaction, we create lasting relationships that form the foundation of our driving school's success.
    `,
    imageSrc: "https://picsum.photos/200/300",
  },
  {
    title: "Driving Initiatives for Positive Change",
    description: `
      At our driving school, we believe in driving positive change in society through various initiatives and campaigns. One of our key endeavors is our collaboration with the Regional Transport Office (RTO) to organize and facilitate multiple driving campaigns throughout the year.
      
      These campaigns serve as platforms to raise awareness about road safety, responsible driving practices, and regulatory compliance. By partnering with local authorities and community organizations, we aim to reach a wider audience and instill a culture of safe and mindful driving.
      
      Our driving campaigns encompass a range of activities, including educational workshops, interactive sessions, road safety demonstrations, and practical training sessions. We leverage our expertise and resources to create engaging and impactful experiences that empower individuals to become safer and more responsible drivers.
      
      Through our collective efforts with the RTO and other stakeholders, we strive to create a safer and more sustainable environment on the roads. By promoting awareness, education, and positive behavioral change, we contribute to building a safer future for all road users.
    `,
    imageSrc: "https://picsum.photos/200/300",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

const Story = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Story</h1>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="space-y-4">
              {section.description.split("\n").map((desc, i) => (
                <p key={i} className="text-lg">
                  {desc}
                </p>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src={section.imageSrc}
              alt={section.title}
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      ))}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Journey in Pictures</h2>
        <Slider {...settings} className="w-full">
          {sections.map((section, index) => (
            <div key={index} className="h-[800px]">
              <img
                src={section.imageSrc}
                alt={section.title}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Story;
