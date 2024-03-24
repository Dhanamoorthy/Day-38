// Database schema

// users collection
const UserSchema = {
    name: String,
    // other user details
  };
  const User = mongoose.model('User', UserSchema);
  
  // codekata collection
  const CodekataSchema = {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    problemsSolved: Number,
    // other codekata details
  };
  const Codekata = mongoose.model('Codekata', CodekataSchema);
  
  // attendance collection
  const AttendanceSchema = {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    present: Boolean,
    // other attendance details
  };
  const Attendance = mongoose.model('Attendance', AttendanceSchema);
  
  // topics collection
  const TopicSchema = {
    name: String,
    // other topic details
  };
  const Topic = mongoose.model('Topic', TopicSchema);
  
  // tasks collection
  const TaskSchema = {
    name: String,
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
    // other task details
  };
  const Task = mongoose.model('Task', TaskSchema);
  
  // company_drives collection
  const CompanyDriveSchema = {
    date: Date,
    // other company drive details
  };
  const CompanyDrive = mongoose.model('CompanyDrive', CompanyDriveSchema);
  
  // mentors collection
  const MentorSchema = {
    name: String,
    menteeCount: Number,
    // other mentor details
  };
  const Mentor = mongoose.model('Mentor', MentorSchema);
  
  