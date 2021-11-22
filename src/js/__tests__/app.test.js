import GameSavingLoader from '../loader';

test('Проверка загрузки сохранения', async () => {
  await expect(GameSavingLoader.load()).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
