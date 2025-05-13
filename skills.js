function calculateSkillLevel(skill) {
  const skillLevels = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
  };

  return skillLevels[skill] || 0;
}
function getSkillDescription(skill) {
  const skillDescriptions = {
    beginner: "Just starting out, learning the basics.",
    intermediate: "Has a good understanding and can apply skills.",
    advanced: "Highly skilled and can work independently.",
    expert: "Recognized authority in the field.",
  };

  return skillDescriptions[skill] || "No description available.";
}
function getSkillCategory(skill) {
  const skillCategories = {
    programming: ["JavaScript", "Python", "Java"],
    design: ["Photoshop", "Illustrator", "Figma"],
    marketing: ["SEO", "Content Marketing", "Social Media"],
  };

  for (const category in skillCategories) {
    if (skillCategories[category].includes(skill)) {
      return category;
    }
  }

  return "Unknown category";
}
function getSkillLevel(skill) {
  const skillLevels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    expert: "Expert",
  };

  return skillLevels[skill] || "Unknown level";
}