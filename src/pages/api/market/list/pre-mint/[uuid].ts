import { NextApiHandler } from "next";
import { Service } from "services";

const handler: NextApiHandler = async (req, resp) => {
  const service = new Service(resp);
  return service.findOne(req.query.uuid?.toString());
};
export default handler;
