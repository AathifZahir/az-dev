interface ProjectImgProps {
  imgset: string[];
}

const ProjectImg = ({ imgset }: ProjectImgProps) => {
  if (!imgset || imgset.length < 2) {
    return null;
  }

  const [firstImage, secondImage] = imgset;

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#2a66d8] to-[#3878d3] flex items-center justify-center p-5 overflow-hidden aspect-[4/3] relative z-0">
      <div className="relative flex items-center justify-center w-full h-full">
        <img
          src={firstImage}
          alt="Project preview 1"
          className="h-auto max-h-[80%] w-auto max-w-[45%] object-contain rounded-2xl shadow-2xl border-2 border-white/30 backdrop-blur-sm rotate-[-5deg] -translate-y-2 relative z-0"
        />
        <img
          src={secondImage}
          alt="Project preview 2"
          className="h-auto max-h-[80%] w-auto max-w-[45%] object-contain rounded-2xl shadow-2xl border-2 border-white/30 backdrop-blur-sm rotate-[5deg] translate-y-2 relative z-10 -ml-6"
        />
      </div>
    </div>
  );
};

export default ProjectImg;
