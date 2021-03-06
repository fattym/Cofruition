import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Text, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "25%",
	"lg-width": "50%",
	"sm-width": "100%"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background-size": "cover",
			"background-position": "center",
			"background-image": "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80) 50% 0/cover no-repeat"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"margin": "0",
			"children": "Title"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "5px 0 20px 0",
			"children": "Name"
		}
	},
	"address": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "10px 0 5px 0",
			"children": "Home address"
		}
	},
	"Status": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "10px 0 5px 0",
			"children": "Status"
		}
	},
	"DOB": {
		"kind": "Text",
		"props": {
			"as": "p",
			'font-family': 'Montserrat',
			"margin": "10px 0 5px 0",
			"children": "Birth date"
		}
	},
	"Email address": {
		"kind": "Link",
		"props": {
			"margin": "10px 0 5px 0",
			'font-family': 'Montserrat',
			"color": "--primary",
			"text-decoration": "none",
			"children": "Email"
		}
	},
	"Phone": {
		"kind": "Link",
		"props": {
			"margin": "10px 0 5px 0",
			'font-family': 'Montserrat',
			"color": "--primary",
			"text-decoration": "none",
			"children": "Phone"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			'font-family': 'Montserrat',
			"margin": "20px 0 5px 0",
			"children": "Home address"
		}
	}
};

const Card = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const {
		employee = {}
	} = rest;
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" />
		<Box {...override("box")} background-image={`url(${employee.Photo && employee.Photo[0] && employee.Photo[0].url})`} />
		<Text {...override("text")} children={employee.Title} />
		<Text {...override("text1")} children={employee.Name} />
		<Text {...override("address")} children={employee['Home address']} />
		<Text {...override("Status")} children={employee['Status']} />
		<Link {...override("Email address")} children={employee['Email address']} href={`mailto:${employee['Email address']}`} />
		<Link {...override("Phone")} children={employee['Phone']} href={`tel:${employee['Phone']}`} />
		{children}
	</StackItem>;
};

Object.assign(Card, { ...StackItem,
	defaultProps,
	overrides
});
export default Card;