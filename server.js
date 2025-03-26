import express from "express";
import { promises as fs } from "fs";
import path from "path";
import cors from "cors";
import process from "process";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// check data dir exists
const dataDir = path.join(process.cwd(), "data");
try {
  await fs.mkdir(dataDir, { recursive: true });
} catch (error) {
  console.error("Error creating data directory: ", error);
}

// GET
app.get("/api/predictions/:filename", async (req, res) => {
  try {
    const filePath = path.join(dataDir, req.params.filename);
    const data = await fs.readFile(filePath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    if (error.code === "ENOENT") {
      res.status(404).json({
        error: "No prediction found for this track and talent combination",
      });
    } else {
      console.error("Error reading file: ", error);
      res.status(500).json({ error: "Failed to read predictions" });
    }
  }
});

app.put("/api/predictions/:filename", async (req, res) => {
  try {
    console.log("Received PUT request for file:", req.params.filename);
    console.log("Request body:", req.body);

    const [track, talent] = req.params.filename.replace(".json", "").split("_");
    console.log("Parsed track:", track, "talent:", talent);

    if (track !== req.body.track || talent !== req.body.talent) {
      console.log(
        "Validation failed - mismatch between filename and body data"
      );
      return res
        .status(400)
        .json({ error: "Filename must match track and talent in the data" });
    }

    const filePath = path.join(dataDir, req.params.filename);
    console.log("Writing to path:", filePath);

    await fs.writeFile(filePath, JSON.stringify(req.body, null, 2));
    console.log("File written successfully");

    res.json({ message: "Predictions saved successfully" });
  } catch (error) {
    console.error("Error writing file: ", error);
    res.status(500).json({ error: "Failed to save predictions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
