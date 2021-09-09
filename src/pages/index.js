import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, StackItem, Stack, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Nav />
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background=",url(https://uploads.quarkly.io/6138dd0852477d001f630fd3/images/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg?v=2021-09-08T19:31:47.979Z) 0% 0%/100%"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					ON{" "}
					<br />
					BOARDING
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px">
						StePS
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						My name is Mary Cornell, born and raised in France.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						I've been working as a professional photographer and videographer for more than 12 years.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						CDS Documentary Essay Prize and Best Photographer of The Year 2019 by Sony World Photography Awards.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Stack>
			<StackItem width="50%" lg-width="100%" position="relative">
				<Override
					slot="StackItemContent"
					margin-right="-20%"
					padding-bottom="120%"
					background=",url(https://uploads.quarkly.io/6138dd0852477d001f630fd3/images/1516981376732-removebg-preview.png?v=2021-09-08T18:12:30.073Z) 50% 15%/cover"
					lg-margin-right="0"
					lg-padding-bottom="80%"
				/>
			</StackItem>
			<StackItem width="50%" lg-width="100%">
				<Override
					slot="StackItemContent"
					padding="98px 64px"
					margin-left="-20%"
					margin-top="36px"
					color="--light"
					mix-blend-mode="lighten"
					lg-margin-left="0"
					lg-margin-top="0"
					flex-direction="column"
					background=",#111010"
					align-content="center"
				/>
				<Text
					as="h4"
					margin="0"
					font="--base"
					letter-spacing="1px"
					text-transform="uppercase"
					align-self="center"
				>
					About me
				</Text>
				<Text
					as="h1"
					margin="0 0 16px 0"
					font="--headline1"
					lg-font="--headline2"
					align-self="center"
				>
					Hi, I’m Sam
				</Text>
				<Text
					as="p"
					margin="16px 0"
					font="--base"
					max-width="400px"
					display="block"
					padding="0px 0px 0px 0px"
					text-align="justify"
					align-self="flex-end"
				>
					In the summer of 2016 I packed up my life in London and took a one way flight to East Africa.
					<br />
					<br />
					My goal was to understand the business scene in the region and seek out opportunities to apply my business start up skills in a dynamic, developing environment. I found that interviewing entrepreneurs for a podcast was a good a way to meet people.
					<br />
					<br />
					The initial tour went well  and after evaluating the merits of each, I decided that Kenya was the Best.
					<br />
					<br />
					Each month I write a newsletter about what I’ve been reading/ up to.{" "}
					<br />
					<br />
					I now live in Copenhagen where I run a business helping companies improve sales/ marketing and internal communications by makinng podcast with them.
				</Text>
			</StackItem>
		</Stack>
		<Image width="64px" height="64px" />
		<Components.Footer1 />
		<Components.Card />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6138dd0852477d001f630fd1"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});