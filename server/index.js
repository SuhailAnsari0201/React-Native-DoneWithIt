const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");

const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

// Define routes
app.use("/api/expoPushTokens", require("./routes/expoPushTokens"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/messages", require("./routes/messages"));
app.use("/api/message", require("./routes/message"));
app.use("/api/listings", require("./routes/listings"));
app.use("/api/listing", require("./routes/listing"));
app.use("/api/users", require("./routes/users"));
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/my", require("./routes/my"));

const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Server started on port ${port}`));

// location is not updating(adding) using postman
// Joi is not able to save location in new version(worked in old version)
// messages and listing  is not showing in user account detail( frontend)
