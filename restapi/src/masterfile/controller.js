

const pool = require('../../db');
const queries = require('./queries');


// create getStates function

const getStates = async (req, res) => {
 pool.query(queries.getStates, (error, results) => {
   if (error) {
     throw error
   }
   res.status(200).json(results.rows)
 }
    )
}

// create a seed counties route

const getCounties = async (req, res) => {
  pool.query(queries.getCounties, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }
      )
  }



    const createCountyDataTable = async (req, res) => {
      pool.query(queries.createCountyDataTable, (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      }
          )
      }


const seedAdamsCounty = async (req, res) => {
  pool.query(queries.seedAdamsCounty, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  }
      )
  }




module.exports = { getStates,
                    getCounties,
                    seedAdamsCounty,
                    createCountyDataTable
                     
 };

