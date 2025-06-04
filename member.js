function skillsMember() {
  return {
    name: "skillsMember",
    description: "A member with skills",
    properties: {
      skills: {
        type: "array",
        items: {
          type: "string"
        },
        description: "List of skills the member possesses"
      }
    },
    methods: {
      addSkill(skill) {
        if (!this.skills.includes(skill)) {
          this.skills.push(skill);
        }
      },
      removeSkill(skill) {
        this.skills = this.skills.filter(s => s !== skill);
      }
    }
  };
}