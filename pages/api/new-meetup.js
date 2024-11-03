import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://uriel:uriel19988@meets.fzc3b.mongodb.net/?retryWrites=true&w=majority&appName=meets"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    res.status(201).json({
      message: "Meetup inserted!",
    });
  }
}
