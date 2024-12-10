import Image from "next/image";
export default function EducationalPlatforms() {
  const platforms = [
    {
      name: "Udemy",
      description: "A leading education site improving lives through learning",
      imageSrc: "udemy-3.svg",
    },
    {
      name: "Google Classroom",
      description:
        "A free education platform that enables teachers to interact with students and share educational materials easily.",
      imageSrc: "/google-meet-svgrepo-com.svg",
    },
    {
      name: "Coursera",
      description:
        "the global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies.",
      imageSrc: "/coursera-svgrepo-com.svg",
    },
    {
      name: "SkillShare",
      description:
        "a learning community for creators. Anyone can take an online class, watch video lessons, create projects, and even teach a class themselves.",
      imageSrc: "/skillshare-seeklogo.svg",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          "Education is not preparation for life; education is life itself." -
          John Dewey
        </h1>
      </header>

      <main>
        <div className="bg-purple-500 text-white py-2 px-4 mb-4">
          <h2 className="text-xl font-semibold">Teaching platforms</h2>
        </div>
        <p className="mb-6 text-center">
          Here, you'll find a variety of tools designed to simplify and enhance
          the teaching experience, making educators' jobs easier and more
          effective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <PlatformCard
              name={platform.name}
              description={platform.description}
              imageSrc={platform.imageSrc}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function PlatformCard({
  name,
  description,
  imageSrc,
}: {
  name: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="group flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} logo`}
        width={100}
        height={100}
        className="mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
      />
      <h3 className="font-semibold ">{name}</h3>
      <div className="w-0 transition-all ease-in-out delay-150 group-hover:w-[100px] duration-300 h-[2px] bg-black mb-2"></div>
      <p className="text-sm">{description}</p>
    </div>
  );
}