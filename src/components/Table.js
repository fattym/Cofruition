import React, { useEffect, useState } from "react";
import { useOverrides, Stack } from "@quarkly/components";
import Card from "./Card";
const defaultProps = {
	"margin-top": "40px"
};
const overrides = {};

const Table = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [employees, setEmployees] = useState([]);
	useEffect(() => {
		fetch("https://api.airtable.com/v0/apppr0ocRy07i4EoP/Employee%20directory ", {
			headers: {
				'Authorization': 'Bearer key2qqqzQT043txFW'
			}
		}).then(response => response.json()).then(data => setEmployees(data.records.map(({
			fields
		}) => fields)));
	}, []);
	return <Stack {...rest}>
		{employees.map(employee => <Card employee={employee} />)}
	</Stack>;
};

Object.assign(Table, { ...Stack,
	defaultProps,
	overrides
});
export default Table;