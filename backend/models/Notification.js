// models/Notification.js
const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Please add the notification message'],
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Can also be Parent or Admin depending on the notification
  },
  notificationType: {
    type: String,
    enum: ['Enrollment Status', 'Fee Due', 'General'],
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
