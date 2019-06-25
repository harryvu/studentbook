import { exportAllDeclaration } from "@babel/types";

// What you have
var officers = [
    { id: 20, name: 'Captain Piett', age: 18 },
    { id: 24, name: 'General Veers', age: 56 },
    { id: 56, name: 'Admiral Ozzel', age: 29 },
    { id: 88, name: 'Commander Jerjerrod', age: 17 }
  ];
  // What you need
  // [20, 24, 56, 88]

  it('Ids should be 20, 24, 56, 88', () => {
      let retStr = '';
      officers.map(officer => {
        retStr = retStr.concat(`${officer.id}, `);
        return retStr;
      });
      expect(retStr.trim().slice(0, -1)).toBe('20, 24, 56, 88');
  });

  it('oldest member should be General Veers', () => {
    const oldestMember = officers.reduce( (oldest, officer) => {
      return (oldest.age || 0) > officer.age ? oldest : officer;
    });
    expect(oldestMember.age).toBe(56);
  });