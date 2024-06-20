import { Skill } from "@/types/interfaces";
import { FC } from "react";

interface SkillsContainerProps {
  data: Skill[];
  label: string;
}
const SkillsContainer: FC<SkillsContainerProps> = ({ data, label }) => {
  return (
    <article className="min-h-[25rem] border border-primary rounded-lg">
      <h2 className="capitalize text-primary text-2xl font-semibold py-4 px-6 border-b border-primary">
        {label}
      </h2>
      <div className="px-6 py-4 space-y-6">
        {data.map((skill, index) => (
          <p key={index}>{skill.label}</p>
        ))}
      </div>
    </article>
  );
};

export default SkillsContainer;
