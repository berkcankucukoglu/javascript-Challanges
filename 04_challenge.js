const library = [
  {
    title: 'title1',
    author: 'author1',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'title2',
    author: 'author2',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: 'title3',
    author: 'author3',
    status: {
      own: false,
      reading: false,
      read: true,
    },
  },
];

/*
for (let i = 0; i < library.length; i++) {
  library[i].status = true;
}
*/

for (const item of library) {
  item.status = true;
}

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
