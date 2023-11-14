import { DUMMY_JSON } from "constant/dummyResAPI";
import { NextApiResponse } from "next";

class Service {
  response: NextApiResponse;
  data = DUMMY_JSON;
  constructor(response: NextApiResponse) {
    this.response = response;
  }

  findOne(uuid?: string) {
    if (!uuid) return;
    const getData = this.data.find(item => item.uuid === uuid);
    if (getData) return this.response.status(200).json(getData);
    else {
      return this.response.status(400).json({
        error: 400,
        message: "undefined",
      });
    }
  }
  findAll() {
    return DUMMY_JSON;
  }
}

export { Service };
