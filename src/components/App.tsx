import styles from './App.module.css'
import Card from './Card'
import Health from './Health'

export default function App() {

	return (
		<div className={styles.main}>
			<div className={styles.enemyCards} />
			<div className={styles.enemyHealth}>
				<Health health={.78} />
			</div>

			<div className={styles.tokens}>
				a
				b
				c
			</div>

			<div className={styles.ownCards}>
				<Card />
			</div>
			<div className={styles.ownHealth}>
				<Health health={.42} />
			</div>
			<div className={styles.hand} />
		</div>
	)
}
