import axios from "axios";
import { douban } from "@/config/hosts";

// 查看 https://douban-api-docs.zce.me/movie.html 获取参数说明
export const getTop250Movies = params =>
  axios.get(`${douban}/v2/movie/top250`, { params });
