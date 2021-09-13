const personArr = {
  name: 'Jahangir Alam',
  age: 30,
  hobbies: ['sports', 'Cooking'],
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

for (const hobby of personArr.hobbies) {
  console.log(hobby.toUpperCase());
}
