import "reflect-metadata";
import { Container } from "typedi";
import { AppointmentService } from "./appointments/AppointmentService";

(async () => {
  const service = Container.get(AppointmentService);

  const result = await service.bookAppointment(
    "arjun@gmail.com",
    "Monday 10 AM",
    500
  );

  console.log(result);
})();


//npx ts-node src/app.ts  for run the app.ts