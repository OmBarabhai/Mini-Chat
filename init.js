const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/watsapp");
}
let allChats = [
  {
    from: "Amit",
    to: "Riya",
    msg: "Are you coming to the study group today?",
    created_at: new Date("2025-07-26T10:15:00"),
  },
  {
    from: "Sana",
    to: "Karan",
    msg: "Don't forget to submit the assignment!",
    created_at: new Date("2025-07-27T09:05:00"),
  },
  {
    from: "Dev",
    to: "Meera",
    msg: "Can you explain question 4 from the math paper?",
    created_at: new Date("2025-07-25T14:30:00"),
  },
  {
    from: "Tina",
    to: "Rohit",
    msg: "I'll send you the notes in a bit.",
    created_at: new Date("2025-07-27T08:45:00"),
  },
  {
    from: "Varun",
    to: "Sneha",
    msg: "Let's revise together in the evening.",
    created_at: new Date("2025-07-26T18:20:00"),
  },
];

Chat.insertMany(allChats);

// chat1.save().then((res) => {
//   console.log(res);
// });
