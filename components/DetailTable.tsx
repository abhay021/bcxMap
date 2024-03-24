"use client";

import React, { useEffect, useState } from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

interface Entry {
	quarter: string;
	[key: string]: number | string;
}

const convertData = (data: Entry[]): Record<string, Record<string, number> | string>[] => {
	data = data.map((item: any) => {
		return {
			quarter: item.quarter,
			ai: ((item.ai || item.aiForecast) * 1000).toLocaleString(),
			final: ((item.final || item.finalForecast) * 1000).toLocaleString(),
			consumption: ((item.consumption || item.consumptionForecast) * 1000).toLocaleString(),
		};
	});
	let convertedData: Record<string, Record<string, number> | string>[] = [];
	let quarters = Object.keys(data[0]).filter(key => key !== "quarter");

	quarters.forEach(quarter => {
		convertedData.push({});
	});

	data.forEach((entry: any) => {
		quarters.forEach(quarter => {
			convertedData[quarters.indexOf(quarter)][entry.quarter] = entry[quarter];
		});
	});

	return convertedData;
};

const DetailTable = ({ selectedData }: any) => {
	const [tableData, setTableData] = useState(convertData(selectedData.data));
	useEffect(() => {
		let data = convertData(selectedData.data);
		data = data.map((item, index) => {
			return {
				data: `Data ${index}`,
				...item,
			};
		});
		setTableData([...data]);
	}, [selectedData]);
	let columns = selectedData.data.map((item: any) => {
		return {
			accessorKey: item?.quarter,
		};
	});
	columns = [{ accessorKey: "data" }, ...columns];

	const table = useReactTable({ data: tableData, columns, getCoreRowModel: getCoreRowModel() });

	return (
		<Table>
			<TableBody>
				{table.getRowModel().rows?.length ? (
					table.getRowModel().rows.map(row => (
						<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
							{row.getVisibleCells().map(cell => (
								<TableCell className="text-2xs lg:text-xs w-8 text-center p-0 py-2" key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))
				) : (
					<TableRow>
						<TableCell colSpan={columns.length} className="h-24 text-center">
							No results.
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default DetailTable;
