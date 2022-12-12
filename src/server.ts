import "dotenv/config";
import app from "./app";
import AppDataSource from "./data-source";

const PORT = process.env.SERVER_PORT;

(async () => {
  await AppDataSource.initialize()
    .then((res) => {
      console.log("Database conected");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
})();
