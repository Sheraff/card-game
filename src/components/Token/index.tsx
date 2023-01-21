import classNames from "classnames"
import styles from "./index.module.css"
import SwordIcon from "@/assets/swords.svg"
import ShieldIcon from "@/assets/shield.svg"
import DurationIcon from "@/assets/shutter_speed.svg"
import CostIcon from "@/assets/water_drop.svg"

const ATTRIBUTE_ICONS = {
	dur: DurationIcon,
	atk: SwordIcon,
	def: ShieldIcon,
	mana: CostIcon,
}

type SimpleToken = {
	type: "simple"
	value: number
	attribute: "dur" | "atk" | "def"
}

function SimpleTokenComponent({
	value,
	attribute,
}: SimpleToken) {
	const Icon = ATTRIBUTE_ICONS[attribute]
	return (
		<div className={classNames(styles.main, styles[attribute])}>
			{value} <Icon />
		</div>
	)
}

type ReadToken = {
	type: "read"
	from: "dur" | "atk" | "def"
	add?: number
	multiply?: number
} | {
	type: "read"
	from: "static"
	value: number
}

function ReadTokenComponent(props: ReadToken) {
	if (props.from === "static") {
		return (
			<div className={classNames(styles.main, styles.read)}>
				{props.value}
			</div>
		)
	}
	const { from, multiply, add } = props
	const Icon = ATTRIBUTE_ICONS[from]
	return (
		<div className={classNames(styles.main, styles.read)}>
			<Icon/>
			{multiply && (
				` ×${multiply}`
			)}
			{add && (
				` +${add}`
			)}
		</div>
	)
}

type WriteToken = {
	type: "write"
	to: "dur" | "atk" | "def" | "mana"
	add?: number
	multiply?: number
}

function WriteTokenComponent({
	to,
	multiply,
	add,
}: WriteToken) {
	const Icon = ATTRIBUTE_ICONS[to]
	return (
		<div className={classNames(styles.main, styles.write)}>
			<Icon/>
			{multiply && (
				` ×${multiply}`
			)}
			{add && (
				` +${add}`
			)}
		</div>
	)
}

type EventToken = {
	type: "event"
	trigger: "attack" | "discard" | "draw" | "turnEnd" | "turnStart"
	repeat?: number
}

function EventTokenComponent(props: EventToken) {
	return (
		<div className={classNames(styles.main, styles.event)}>
			{props.trigger}
			{props.repeat && (
				` ×${props.repeat}`
			)}
		</div>
	)
}

type Token = SimpleToken | ReadToken | WriteToken | EventToken

export default function Token(props: Token) {
	switch (props.type) {
		case "simple":
			return <SimpleTokenComponent {...props} />
		case "read":
			return <ReadTokenComponent {...props} />
		case "write":
			return <WriteTokenComponent {...props} />
		case "event":
			return <EventTokenComponent {...props} />
	}
}