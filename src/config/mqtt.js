import mqtt from "mqtt";
import SensorReading from "../models/SensorReading.js";


const client = mqtt.connect(process.env.MQTT_BROKER_URL);


client.on("connect", () => {
console.log("MQTT connected");
client.subscribe("iot/sensor/+/temperature");
});


client.on("message", async (topic, message) => {
try {
const deviceId = topic.split("/")[2];
const temperature = parseFloat(message.toString());


if (!isNaN(temperature)) {
await SensorReading.create({ deviceId, temperature });
}
} catch (err) {
console.error("MQTT insert failed", err);
}
});