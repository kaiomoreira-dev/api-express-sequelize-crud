import { app } from "./app";
import { connectDB } from "./database";
import { env } from "./env";

connectDB();

app.listen(env.PORT, env.HOST, () => {
  console.log(`Servidor iniciado host: ${env.HOST} port:${env.PORT} . . . 🚀`);
});