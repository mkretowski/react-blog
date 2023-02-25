const initialState = {
  posts: [
    {
      id: '1',
      category: 'Sport',
      title: 'Article title I',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02/02/2022'),
      author: 'John Doe',
    },
    {
      id: '2',
      category: 'News',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02/02/2022'),
      author: 'John Doe',
    },
    {
      id: '3',
      category: 'Movies',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02/02/2022'),
      author: 'John Doe',
    },
  ],
  categories: ['Sport', 'News', 'Movies'],
};

export default initialState;
