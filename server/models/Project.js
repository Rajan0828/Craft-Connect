import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        'Tech and Development',
        'Design and Creative',
        'Writing and Translation',
        'Marketing',
        'Business and Admin',
        'Education',
        'Other Services',
      ],
      required: true,
    },
    description: { type: String, required: true },
    salary: {
      type: String,
      enum: [
        'Under $100',
        '$100 - $250',
        '$250 - $500',
        '$500 - $750',
        '$750 - $1,000',
        '$1,000 - $1,500',
        '$1,500 - $2,000',
        '$2,000 - $3,000',
        '$3,000 - $5,000',
        'Over $5,000',
      ],
      required: true,
    },
    location: { type: String, required: true },
    company: {
      name: String,
      description: String,
      contactEmail: String,
      contactPhone: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);
