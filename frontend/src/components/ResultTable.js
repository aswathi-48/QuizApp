import React from 'react'

const ResultTable = () => {
  return (
    <div>
        <table>
            <th className='table-head'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Result</td>

                </tr>
            </th>
            <tbody>
                <tr className='table-body'>
                    <td>Daily Tuition</td>
                    <td>03</td>
                    <td>30</td>
                    <td>Passed</td>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable