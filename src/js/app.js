import GameSavingLoader from './loader';

(
  async () => {
    try {
      const loaded = await GameSavingLoader.load();
      console.log(loaded);
    } catch (err) {
      throw new Error(err);
    }
  }
)();
