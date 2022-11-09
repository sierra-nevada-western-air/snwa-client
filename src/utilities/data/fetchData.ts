import HttpClient from "./httpClient";

export default function fetchData<T>(uri: string, setter: (response: T) => void): void {
  const getData = async (): Promise<void> => {
    const result = await HttpClient.Get<T>(uri);

    setter(result);
  };

  getData();
}
