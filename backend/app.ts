import * as dotenv from "dotenv";
import express, { NextFunction } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { profileRouter } from './controller/profile.routes';
import { userRouter } from './controller/user.routes';
import { taskRouter } from './controller/task.routes';
import { milestoneRouter } from './controller/milestone.routes';

const app = express();

const port = process.env.APP_PORT || 3000;

const swaggerOpts = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Back-end",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./controller/*.routes.ts"],
};
const swaggerSpec = swaggerJSDoc(swaggerOpts);

app.use(cors({
  origin: '*'
}));
dotenv.config();
app.use(bodyParser.json());
app.use('/profile', profileRouter)
app.use('/user', userRouter)
app.use('/task', taskRouter)
app.use('/milestone', milestoneRouter)

app.get("/status", (req, res) => {
  res.json({ message: "Back-end is running..." });
});

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error.name === "UnauthorizedError") {
    res.status(401).json({ status: 'unauthorized', message:error.message });
  } else {
    next();
  }
}); */

var { expressjwt: expressjwt } = require("express-jwt");
const jwtSecret = process.env.JWT_SECRET;



app.use( expressjwt({ secret: jwtSecret, algorithms: ['HS256'] }).unless({ path: ["/^/api-docs(/.*)?$/", "/user/login", "/user/add", "/status"] }));

app.listen(port || 3000, () => {
  console.log(`Back-end is running on port ${port}.`);
});
