import { Bpi } from "./bpi.interface";
import { Time } from "./time.interface";

export interface ApiResponse {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}
