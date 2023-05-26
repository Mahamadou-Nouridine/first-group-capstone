import { commentsCounter } from '../comments.js';

describe('Comments counter test', () => {
  test('On comments array absence the number should be 0', () => {
    // Arrange
    const comments = null;

    // Act
    const commentsNumber = commentsCounter(comments);

    // Assert
    expect(commentsNumber).toBe(0);
  });

  test('Should be equal to 3', () => {
    // Arange
    const comments = [
      { comment: 'Hello', creation_date: '2023-05-24', username: 'Jane' },
      { comment: 'Hello', creation_date: '2023-05-24', username: 'Jane' },
      { comment: 'Hello', creation_date: '2023-05-24', username: 'Jane' },
    ];

    // Act
    const commentsNumber = commentsCounter(comments);

    // Assert
    expect(commentsNumber).toBe(3);
  });

  test('if no argument is provided to the function, it should return 0', () => {
    // Act
    const commentsNumber = commentsCounter();

    // Assert
    expect(commentsNumber).toBe(0);
  });
});
