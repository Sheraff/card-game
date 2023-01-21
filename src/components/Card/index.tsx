import { type CSSProperties } from "react"
import SwordIcon from "@/assets/swords.svg"
import CostIcon from "@/assets/water_drop.svg"
import DurationIcon from "@/assets/shutter_speed.svg"
import styles from "./index.module.css"

export default function Card({
	style,
}: {
	style?: CSSProperties
}) {
	return (
		<div className={styles.main} style={style}>
			<div className={styles.stats}>
				<div> 3 <DurationIcon/></div>
				<div> 1 <CostIcon/></div>
				<div> 1 <SwordIcon/></div>
			</div>
		</div>
	)
}