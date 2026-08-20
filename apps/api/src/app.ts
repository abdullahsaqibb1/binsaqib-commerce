import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";

const configuredOrigins = [process.env.STOREFRONT_URL, process.env.ADMIN_URL].filter(
  (origin): origin is string => Boolean(origin)
);

export const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin(origin, callback) {
      if (!origin || configuredOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin is not allowed"));
    }
  })
);
app.use(express.json({ limit: "100kb" }));

app.get("/health", (_request, response) => {
  response.status(200).json({
    service: "binsaqib-api",
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

app.use((_request, response) => {
  response.status(404).json({ error: { code: "NOT_FOUND", message: "Route not found" } });
});

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error("Unhandled API error", { name: error.name, message: error.message });
  response.status(500).json({ error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred" } });
};

app.use(errorHandler);
