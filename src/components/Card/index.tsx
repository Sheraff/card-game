import { CSSProperties } from "react"
import styles from "./index.module.css"

export default function Card({
	style,
}: {
	style?: CSSProperties
}) {
	return (
		<div className={styles.main} style={style}>
			<h2>Card</h2>
		</div>
	)
}