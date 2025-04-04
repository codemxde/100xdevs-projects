import mongoose from "mongoose";
import "dotenv/config";

import app from "./index.js";
import logger from "./log/logger.js";

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    app.listen(process.env.PORT, () => {
      console.log(
        logger.success(
          "Conection with database established...\nApplication is live on port " +
            logger.viewPort(process.env.PORT) +
            "\n"
        )
      );
    });
  } catch (error) {
    console.log(
      logger.fail("Failed to establish connection with database... Exiting Application")
    );
    process.exit(1);
  }
})();
