// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// Find all the topics and tasks which are taught in the month of October
const topicsAndTasksInOctober = await Task.find({
  createdAt: { $gte: new Date('2020-10-01'), $lte: new Date('2020-10-31') }
}).populate('topicId');

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
const companyDrivesInOctober = await CompanyDrive.find({
  date: { $gte: new Date('2020-10-15'), $lte: new Date('2020-10-31') }
});

// Find all the company drives and students who appeared for the placement
const drivesAndStudents = await CompanyDrive.find().populate('students');

// Find the number of problems solved by the user in codekata
const userId = "user_id_here"; // specify the user id
const problemsSolved = await Codekata.findOne({ userId }).select('problemsSolved');

// Find all the mentors with more than 15 mentees
const mentorsWithMoreThan15Mentees = await Mentor.find({ menteeCount: { $gt: 15 } });

// Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
const usersAbsentAndTaskNotSubmitted = await Attendance.find({
  date: { $gte: new Date('2020-10-15'), $lte: new Date('2020-10-31') },
  present: false
}).populate('userId');

// Close MongoDB connection
await mongoose.connection.close();
