import { z } from "zod";

export const RedeemSchema = z.object({
  customerId: z.string().min(1),
  points: z.number().int().positive(),
  
});


export const TransferSchema = z.object({
  fromCustomerId: z.string().min(1),
  toCustomerId: z.string().min(1),
  points: z.number().int().positive(),
});
