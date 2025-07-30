const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const Chat = require("./models/chat");
const Contact = require("./models/contact");

const app = express();

// --- Mongoose Connection ---
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/watsapp");
  console.log("✅ MongoDB connection successful");
}
main().catch((err) => console.error("❌ MongoDB connection error:", err));

// --- App Configuration ---
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// --- Mock Authentication (for dev only) ---
app.use((req, res, next) => {
  req.user = { _id: "64f1234567ab89c123456789" }; // Replace with real user ID in production
  next();
});

// --- Routes ---

// Root Route
app.get("/", (req, res) => {
  res.send("Root is working");
});

// All Chats
app.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).send("Server error");
  }
});

// New Chat Form (Single, Corrected)
app.get("/chats/new", (req, res) => {
  const { to } = req.query;
  res.render("new.ejs", { to });
});

// Create Chat
app.post("/chats", async (req, res) => {
  try {
    const { from, to, msg } = req.body;
    const newChat = new Chat({ from, to, msg });
    await newChat.save();
    console.log("✅ Chat saved:", newChat);
    res.redirect("/chats");
  } catch (err) {
    console.error("❌ Error saving chat:", err);
    res.status(400).send("Invalid chat data");
  }
});

// Edit Chat Form
app.get("/chats/:id/edit", async (req, res) => {
  const id = req.params.id.trim();
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("Invalid chat ID");
  }

  try {
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  } catch (err) {
    console.error("❌ Error loading chat:", err);
    res.status(404).send("Chat not found");
  }
});

// Update Chat (PATCH)
app.patch("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { msg } = req.body;

  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      id.trim(),
      { msg },
      { runValidators: true, new: true }
    );
    console.log("✅ Chat updated:", updatedChat);
    res.redirect("/chats");
  } catch (err) {
    console.error("❌ Error updating chat:", err);
    res.status(400).send("Update failed");
  }
});

// Delete Chat
app.delete("/chats/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedChat = await Chat.findByIdAndDelete(id);
    console.log("🗑️ Chat deleted:", deletedChat);
    res.redirect("/chats");
  } catch (err) {
    console.error("❌ Error deleting chat:", err);
    res.status(500).send("Failed to delete chat");
  }
});

// All Contacts
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user._id });
    res.render("contacts", { contacts });
  } catch (err) {
    console.error("❌ Error fetching contacts:", err);
    res.status(500).send("Failed to load contacts");
  }
});

// Create Contact
app.post("/contacts", async (req, res) => {
  try {
    const { name, phone } = req.body;
    const newContact = new Contact({
      user: req.user._id,
      name,
      phone
    });
    await newContact.save();
    console.log("✅ Contact saved:", newContact);
    res.redirect("/contacts");
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(400).send("Invalid contact data");
  }
});

// --- Start Server ---
app.listen(8080, () => {
  console.log("🚀 Server is listening on port 8080");
});
