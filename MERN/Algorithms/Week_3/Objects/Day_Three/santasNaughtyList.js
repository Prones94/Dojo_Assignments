/*
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
    {
      firstName: "FN1",
      lastName: "LN1",
      habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
      ],
    },
    {
      firstName: "FN2",
      lastName: "LN2",
      habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
      firstName: "FN3",
      lastName: "LN3",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
      firstName: "FN4",
      lastName: "LN4",
      habits: ["shows up early", "helps peers", "washes dishes"],
    },
  ];

  const badHabit1 = "doesn't wash dishes";
  const expected1 = ["FN1 LN1", "FN3 LN3"];

  const badHabit2 = "shows up late";
  const expected2 = ["FN2 LN2", "FN3 LN3"];

  const badHabit3 = "vapes too much";
  const expected3 = [];

  /**
   * Finds a list of people who have the matching @badHabit
   * @typedef   {Object} Person
   * @property  {string} firstName
   * @property  {string} lastName
   * @property  {Array<string>} habits
   * @param     {Array<Person>} persons
   * @param     {string} badHabit
   * @return    {Array<Person>}
   *            The objects that have a matching @badHabit
   * Time:      O()
   * Space:     O()
   */
  function santasNaughtyList(persons, badHabit) {}

  /**
   * Time:      O()
   * Space:     O()
   */
  function santasNaughtyListFunctional(persons, badHabit) {
      /*
          Create an array to track results
          iterate through the person lists
          Loop through the key/value pairs in the badHabit
          Check them against he person we're lookat at
          if key doesn't exist or if the values for that key do not match
          toggle match to false and break out of inner loop
          return result
      */
      let results = []
      for (let person of persons){
          for(let i=0; i < person.habits.length;i++){
              if(person.habits[i] === badHabit){
                  results.push(`${person.firstName} ${person.lastName}`)
                  break
              }
          }
      }
      return result
  }

console.log(santasNaughtyListFunctional());
  module.exports = {
    santasNaughtyList,
  };
