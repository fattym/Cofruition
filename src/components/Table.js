import React from "react";
import { useOverrides, Stack } from "@quarkly/components";
const defaultProps = {
	"margin-top": "40px"
};
const overrides = {};

const Table = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{children}
	</Stack>;
};

Object.assign(Table, { ...Stack,
	defaultProps,
	overrides
});
export default Table;