import Backendless from "backendless";
import { env } from "@/config/env";

Backendless.initApp(env.backendlessAppId, env.backendlessApiKey);

export default Backendless;
