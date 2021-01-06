const dev_url = "http://123.207.32.32:9001";
const pro_url = "http://123.207.32.32:9001";

export const BASE_URL = process.env.NODE_ENV === "development" ? dev_url:pro_url;
export const TIMEOUT = 5000;