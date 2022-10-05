import ArrivalProducts from "./ArrivalProducts"
import styles from "./NewArrivalProducts.module.css"
export default function NewArrivalProduct() {
    return (
        <>
            <div className={styles.main_arrival}>
                <div>
                    <h3>NEW ARRIVALS!</h3>
                </div>
                <div className={styles.owl_dots} >
                    <div className={styles.owl_dot}>
                        <span></span>
                    </div>
                    <div className={styles.owl_dot}>
                        <span></span>
                    </div>
                    <div className={styles.owl_dot}>
                        <span></span>
                    </div>
                    <div className={styles.owl_dot}>
                        <span></span>
                    </div>
                    <div className={styles.owl_dot}>
                        <span></span>
                    </div>
                </div>
            </div>
            <ArrivalProducts/>
        </>
    )
}