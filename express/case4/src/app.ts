import express, { Request, Response } from "express";
import { validate } from "./middleware/validate";
import { errorHandler } from "./middleware/errorHandler";
import { RedeemSchema, TransferSchema } from "./schemas/loyaltySchemas";
import { ApiError, InsufficientPointsError } from "./errors/ApiError";

const app = express();
app.use(express.json());


const members: Record<string, number> = {
  "1": 500,
  "2": 300,
};


app.post(
  "/redeem",
  validate(RedeemSchema),
  (req: Request, res: Response) => {
    const { customerId, points } = req.body;

    if (!members[customerId]) {
      throw new ApiError(404, "Customer not found");
    }

    if (members[customerId] < points) {
      throw new InsufficientPointsError();
    }

    members[customerId] -= points;

    res.json({
      status: "success",
      data: {
        customerId,
        remainingPoints: members[customerId],
      },
    });
  }
);


app.post(
  "/transfer",
  validate(TransferSchema),
  (req: Request, res: Response) => {
    const { fromCustomerId, toCustomerId, points } = req.body;

    if (!members[fromCustomerId]) {
      throw new ApiError(404, "Sender not found");
    }

    if (!members[toCustomerId]) {
      throw new ApiError(404, "Receiver not found");
    }

    if (members[fromCustomerId] < points) {
      throw new InsufficientPointsError();
    }

    members[fromCustomerId] -= points;
    members[toCustomerId] += points;

    res.json({
      status: "success",
      data: {
        fromCustomerId,
        toCustomerId,
        transferredPoints: points,
      },
    });
  }
);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the FreshMart Loyalty Points API");
});
app.use(errorHandler);

app.listen(3000, () => {
  console.log("FreshMart API running on port 3000");
});

//for redeem
// {
//   "customerId": "1",
//   "points": 100
// }


// for transfer
// {
//   "fromCustomerId": "1",
//   "toCustomerId": "2",
//   "points": 20
// }