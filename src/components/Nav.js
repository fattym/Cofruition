import React from "react";
import { useOverrides, Override, Menu } from "@quarkly/components";
import { Text, Box, Section } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "10px 0px",
			"md-margin": "0px 0 20px 0",
			"text-align": "left",
			"font": "Montserrat",
			"color": "#f9aa65",
			"font-size": "35px",
			"font-weight": "500",
			"line-height": "40px",
			"children": "Cofruiton"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "--dark",
			"font-size": "12px",
			"font-weight": "600",
			"line-height": "21.6px",
			"padding": "20px",
			"text-align": "left",
			"text-transform": "uppercase",
			"text-decoration": "none"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	}
};

const Nav = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Menu {...override("menu")}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
			</Menu>
		</Box>
		{children}
	</Section>;
};

Object.assign(Nav, { ...Section,
	defaultProps,
	overrides
});
export default Nav;