import { type CSSProperties } from "react"
import styles from "./index.module.css"

export default function Health({
	health,
}: {
	health: number
}) {
	return (
		<div
			className={styles.main}
			style={{ '--health': health } as CSSProperties}
		/>
	)
}