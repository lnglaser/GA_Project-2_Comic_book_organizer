const mongoose = require('mongoose')
const SeriesSchema = require('./ComicSeries')
const IssueSchema = require('./SingleIssue')

const Issue = mongoose.model('Issue', IssueSchema)
const Series = mongoose.model('Series', SeriesSchema)

module.exports = {
    Issue,
    Series
}