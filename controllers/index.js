const { response, request } = require('express')
const { Series, Issue } = require('../models')

const getAllSingleIssues = async (request, response) => {
    try {
        const singleIssue = await Issue.find()
        return response.status(200).json({singleIssue})
    } catch (e) {
        return response.status(500).send(e.message)
    }
}

const getAllSeries = async (request, response) => {
    try{
        const comicSeries = await Series.find({})
        return response.status(200).json({comicSeries})
    } catch (e) {
        return response.status(500).send(e.message)
    }
}

const getSeriesByTitle = async(request, response) => {
    try{
        const {title} = request.params
        const series = await Series.find({title})
        if(title) {
            return response.status(200).json(series)
        }
    } catch (e) {
        return response.status(500).send(e.message)
    }
}

const getIssuesBySeries = async (request, response) => {
    try{
        const {series} = request.params
        const issue = await Issue.find({series})
        if(series) {
            return response.status(200).json(issue)
        }
    } catch (e) {
        return response.status(500).send(e.message)
    }
}

const addNewSeries = async (request, response) => {
    console.log("Doing a thing")
    // console.log(request)
    console.log(request.body)
    try{
        const series = await new Series(request.body)
        await series.save()
        return response.status(201).json({series})
    } catch (e){
        return response.status(500).send(e.message)
    }
}

const addNewIssue = async (request, response) => {
    console.log("New issue added")
    console.log(request.body)
    try{
        const issue = await new Issue(request.body)
        await issue.save()
        return response.status(201).json({issue})
    } catch (e){
        return response.status(500).send(e.message)
    }
}

const updateSingleIssue = async (request, response) => {
    console.log("Issue updated")
    console.log(request.body)
    try {
        const { id } = request.params
        await Issue.findByIdAndUpdate(id, request.body, {new: true}, (err, issue) => {
            if(err) {
                response.status(500).send(err)
            }
            if (!issue) {
                response.status(500).send('Issue not in collection.')
                console.log('issue not in collection')
            }
            return response.status(200).json({issue})
        })
    } catch (e) {
        return response.status(500).send(e.message)
    }
}

const updateSeries = async (request, response) => {
    console.log("Series updated")
    console.log(request.body)
    try{
        const { id } = request.params
        await Series.findByIdAndUpdate(id, request.body, {new:true}, (err, series) =>{
            if(err) {
                response.status(500).send(err)
            }
            if (!series) {
                response.status(500).send('Series not in collection')
                console.log('Series not in collection')
            }
        })
    } catch (e){
        return response.status(500).send(e.message)
    }
}

const deleteIssue = async (request, response) => {
    try{
        const { id } = request.params
        const deleted = await Issue.findByIdAndDelete(id)
        if (deleted) {
            return response.status(200).send('Issue removed')
        }
    } catch (e) {
        return response.status(500).send(error.message)
    }
}

const deleteSeries = async (request, response) => {
    console.log("Series deleted")
    try{
        const { id } = request.params
        const deleted = await Series.findByIdAndDelete(id)
        if (deleted) {
            return response.status(200).send('Series removed')
        }
    } catch (e) {
        return response.status(500).send(e.message)
    }
}

module.exports = {
    getAllSingleIssues,
    getAllSeries,
    getSeriesByTitle,
    getIssuesBySeries,
    addNewSeries,
    addNewIssue,
    updateSingleIssue,
    updateSeries,
    deleteIssue,
    deleteSeries
}