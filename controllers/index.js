const { response } = require('express')
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

const getSeriesIssues = async (request, response) => {
    try{
        const {} = await request.params
        
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

// const deleteSeries = async (request, response) => {
//     console.log("Series deleted")
//     try{
//         const series = await 
//     } catch (e) {
//         return response.status(500).send(e.message)
//     }
// }
module.exports = {
    getAllSingleIssues,
    getAllSeries,
    addNewSeries,
    // deleteSeries
}