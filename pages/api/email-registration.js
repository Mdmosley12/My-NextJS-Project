import path from "path";
import fs from "fs";

const buildPath = () => {
  return path.join("", "data", "data.json");
};

const extractData = (filePath) => {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
};

export default function handler(req, res) {
  const { method } = req;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const filePath = buildPath();
  const { allEvents, events_categories } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      msg: "Events data not found",
    });
  }

  if (method === "POST") {
    const parsedString = JSON.parse(req.body);

    if (!parsedString.email | !emailRegex.test(parsedString.email)) {
      res.status(422).json({ msg: "Invalid email address" });
      return;
    }
    const newAllEvents = allEvents.map((event) => {
      if (event.title === parsedString.eventId) {
        if (event.emails_registered.includes(parsedString.email)) {
          res
            .status(409)
            .json({ msg: "This email has already been registered." });
          return event;
        } else {
          res.status(200).json({
            msg: `${parsedString.email} successfully registered to ${parsedString.eventId}`,
          });
          return {
            ...event,
            emails_registered: [...event.emails_registered, parsedString.email],
          };
        }
      }
      return event;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
  }
}
