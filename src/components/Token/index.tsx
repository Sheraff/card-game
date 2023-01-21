import classNames from "classnames"
import styles from "./index.module.css"

type SimpleToken = {
	type: "simple"
	value: number
	attribute: "dur" | "atk" | "def"
}

function SimpleTokenComponent(props: SimpleToken) {
	return (
		<div className={classNames(styles.main, styles[props.attribute])}>
			{props.value} {props.attribute}
		</div>
	)
}

type ReadToken = {
	type: "read"
	from: "dur" | "atk" | "def"
	add?: number
	multiply?: number
}

function ReadTokenComponent(props: ReadToken) {
	return (
		<div className={classNames(styles.main, styles.read)}>
			{props.from}
			{props.multiply && (
				` ×${props.multiply}`
			)}
			{props.add && (
				` +${props.add}`
			)}
		</div>
	)
}

type WriteToken = {
	type: "write"
	to: "dur" | "atk" | "def"
	add?: number
	multiply?: number
}

function WriteTokenComponent(props: WriteToken) {
	return (
		<div className={classNames(styles.main, styles.write)}>
			{props.to}
			{props.multiply && (
				` ×${props.multiply}`
			)}
			{props.add && (
				` +${props.add}`
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