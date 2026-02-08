interface SkillTagProps {
  skill: string;
}

export function SkillTag({ skill }: SkillTagProps) {
  return (
    <div className="border border-black/20 px-6 py-3 bg-white/50 backdrop-blur-sm hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-default">
      <span className="text-sm font-medium">{skill}</span>
    </div>
  );
}