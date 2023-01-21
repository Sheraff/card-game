import styles from './App.module.css'
import Card from './Card'
import Health from './Health'
import Token from './Token'

export default function App() {

	return (
		<div className={styles.main}>
			<div className={styles.enemyCards} />
			<div className={styles.enemyHealth}>
				<Health health={.78} />
			</div>

			<div className={styles.tokens}>
				<Token type="simple" attribute='atk' value={3} />
				<Token type="simple" attribute='def' value={2} />
				<Token type="read" from='dur' />
				<Token type="write" to='atk' add={2} />
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
