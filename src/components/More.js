import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
import Card from "./Card";
import Table from "./Table";
const defaultProps = {
	"background-color": "#f9aa65",
	"padding": "64px 0",
	"sm-padding": "40px 0",
	"font": "--base",
	"color": "--dark"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h1",
			"font": "--headline1",
			"md-font": "--headline2",
			"max-width": "520px",
			"margin": "0 auto 5px auto",
			"text-align": "center",
			"children": "Our Team"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"color": "--grey",
			"max-width": "520px",
			"margin": "0 auto",
			"text-align": "center",
			"font": "--lead",
			"children": "The smartest people work every day to provide the best service and to make our clients happy"
		}
	},
	"card": {
		"kind": "Card",
		"props": {}
	},
	"table": {
		"kind": "Table",
		"props": {}
	}
};

const More = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Card {...override("card")} />
		<Table {...override("table")} />
		{children}
	</Section>;
};

Object.assign(More, { ...Section,
	defaultProps,
	overrides
});
export default More;