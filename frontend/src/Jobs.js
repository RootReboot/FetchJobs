import React from 'react'
import {Typography} from '@material-ui/core'

import Job from './Job'


function Jobs({jobs}) {
    return (
        <div className="Jobs">
                <Typography variant="h1">
                    Entry Level Software Jobs
                </Typography>
                {
                jobs.map(
                  job => <Job job={job} />  
                )
            }
            </div>
    )
}

export default Jobs


