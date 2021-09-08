import React from "react";
import { useOverrides, Override, SocialMedia } from "@quarkly/components";
import { Section } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-dark",
	"padding": "60px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"border-radius": "50%",
			"color": "--grey",
			"hover-color": "--light",
			"background": "transparent",
			"hover-background": "transparent",
			"margin": "0 8px"
		}
	}
};

const Footer1 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<SocialMedia {...override("socialMedia")}>
			<Override {...override("socialMediaOverride")} />
		</SocialMedia>
		{children}
	</Section>;
};

Object.assign(Footer1, { ...Section,
	defaultProps,
	overrides
});
export default Footer1;