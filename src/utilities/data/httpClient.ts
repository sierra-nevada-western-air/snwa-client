import axios, { AxiosInstance } from "axios";
import AirportResponse from "../../features/airports/models/AirportResponse";
import GetAirports from "../../features/airports/models/Airports";

export default class HttpClient {
  private static instance: AxiosInstance = axios.create({});

  public static async Get<T>(uri: string): Promise<T> {
    const result = await this.instance.get<T>(uri);

    return result.data;
  }

  public static async GetAirports(): Promise<Array<AirportResponse>> {
    return new Promise((resolve) => {
      resolve(GetAirports());
    });
  }
}
