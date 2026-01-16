import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { BakingController } from "./controller/BakingController";

const app = createExpressServer({
  controllers: [BakingController],
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
