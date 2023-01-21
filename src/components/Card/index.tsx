import { CSSProperties } from "react"
import styles from "./index.module.css"

export default function Card({
	style,
}: {
	style?: CSSProperties
}) {
	return (
		<div className={styles.main} style={style}>
			<div className={styles.stats}>
				<div> 3 dur</div>
				<div> 1 cost</div>
				<div> 1 atk</div>
			</div>
		</div>
	)
}