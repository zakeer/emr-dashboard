import React from 'react'
import { useTable } from 'react-table'
import styled from 'styled-components';
import { tableColumns } from "../constants"
import { EmrClientContext } from '../EmrClientProvider';

function EmrClientTable() {
	const { emrData = [] } = React.useContext(EmrClientContext);
	const tableInstance = useTable({ columns: tableColumns, data: emrData });
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance

	return <UiTabel {...getTableProps()} className="table table-striped table-bordered">
		<thead>
			{// Loop over the header rows
				headerGroups.map(headerGroup => (
					// Apply the header row props
					<tr {...headerGroup.getHeaderGroupProps()}>
						{// Loop over the headers in each row
							headerGroup.headers.map(column => (
								// Apply the header cell props
								<th {...column.getHeaderProps()}>
									{// Render the header
										column.render('Header')}
								</th>
							))}
					</tr>
				))}
		</thead>
		{/* Apply the table body props */}
		<tbody {...getTableBodyProps()}>
			{// Loop over the table rows
				rows.map(row => {
					// Prepare the row for display
					prepareRow(row)
					return (
						// Apply the row props
						<tr {...row.getRowProps()}>
							{// Loop over the rows cells
								row.cells.map(cell => {
									// Apply the cell props
									return (
										<td {...cell.getCellProps()}>
											{// Render the cell contents
												cell.render('Cell')}
										</td>
									)
								})}
						</tr>
					)
				})}
		</tbody>
	</UiTabel>
}

const UiTabel = styled.table`
	font-size: smaller;

	th {
		white-space: nowrap;
		text-transform: capitalize;
	}

	td {
		white-space: nowrap;
	}
`

export default EmrClientTable
