import {Get,Post,Param,Body,Delete,JsonController,} from "routing-controllers";

// Order status type
type Status = "Not Started" | "Processing" | "Ready";

// Order interface
interface Order {
  id: string;
  name: string;
  status: Status;
  price: number;
}

// In-memory order storage
let orders: Order[] = [];

@JsonController("/baking")
export class BakingController {

  // GET /baking
  @Get("/")
  getAll() {
    return {
      status: "success",
      data: orders, // array of orders
    };
  }

  // GET /baking/:id
  @Get("/:id")
  getById(@Param("id") id: string) {
    const idx = orders.findIndex(order => order.id === id);

    if (idx === -1) {
      return {
        status: "error",
        error: "Order not found",
      };
    }

    // Mark order as Ready
    orders[idx].status = "Ready";

    return {
      status: "success",
      data: orders[idx],
    };
  }

  // POST /baking/start
  @Post("/start")
  addOrder(@Body() order: Order) {
    const { name, price } = order;

    const obj: Order = {
      id: String(orders.length + 1),
      name: name,
      status: "Processing",
      price: price,
    };

    orders.push(obj);

    return {
      status: "success",
      data: obj,
    };
  }

  // DELETE /baking/:id
  @Delete("/:id")
  deleteById(@Param("id") id: string) {
    const idx = orders.findIndex(order => order.id === id);

    if (idx === -1) {
      return {
        status: "error",
        error: "ID not found",
      };
    }

    const obj = orders[idx];
    orders = orders.filter(order => order.id !== id);

    return {
      status: "success",
      data: obj,
    };
  }
}
