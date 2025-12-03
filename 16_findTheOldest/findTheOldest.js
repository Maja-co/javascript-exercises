function findTheOldest(people) {
  // Vi bruger sort til at stille den ældste forrest
  const sortedPeople = people.sort((a, b) => {
    
    // Hjælpe-logik: Hvis de ikke er døde, brug nuværende årstal
    const currentYear = new Date().getFullYear();
    const lastGuyDeath = a.yearOfDeath || currentYear;
    const nextGuyDeath = b.yearOfDeath || currentYear;

    // Udregn alder
    const lastGuyAge = lastGuyDeath - a.yearOfBirth;
    const nextGuyAge = nextGuyDeath - b.yearOfBirth;

    // Sorter: Ældste først (største tal minus mindste tal)
    return nextGuyAge - lastGuyAge;
  });

  // Returner den første person (vinderen)
  return sortedPeople[0];
};

module.exports = findTheOldest;

// Do not edit below this line
module.exports = findTheOldest;
