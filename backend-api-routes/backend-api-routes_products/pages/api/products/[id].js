import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  //console.log(request);
  response.status(200).json(getProductById(id));
}
