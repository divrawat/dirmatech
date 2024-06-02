import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
        },
        slug: {
            type: String,
            unique: true,
            required: true,
            index: true
        },
        body: {
            type: {},
        },
        excerpt: {
            type: String,
        },
        mtitle: {
            type: String
        },
        mdesc: {
            type: String
        },
        date: {
            type: Date,
        },
        photo: {
            type: String
        },
        status: {
            type: String,
        },
        categories: [{ type: ObjectId, ref: 'Category', required: true, index: true }],
        postedBy: {
            type: ObjectId, ref: 'User'
        }
    },
);

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);