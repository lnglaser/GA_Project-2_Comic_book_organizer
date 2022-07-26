const {Schema} = require('mongoose')

const singleIssue = new Schema({
    series: {type: Schema.Types.ObjectId, ref:'Series'},
    issueNumber: {type: String, required: true},
    writer: {type: String, required: true},
    artist: {type: String, required: true},
    release_date: {type: String, required: true}
})

module.exports = singleIssue