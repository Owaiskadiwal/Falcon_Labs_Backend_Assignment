import mongoose from "mongoose";


const sensorReadingSchema = new mongoose.Schema({
deviceId: {
type: String,
required: true,
index: true
},
temperature: {
type: Number,
required: true
},
timestamp: {
type: Number,
default: () => Date.now()
},
createdAt: {
type: Date,
default: Date.now
}
});


export default mongoose.model("SensorReading", sensorReadingSchema);