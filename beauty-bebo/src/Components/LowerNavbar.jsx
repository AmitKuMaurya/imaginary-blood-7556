import { HamburgerIcon } from "@chakra-ui/icons"
import styles from "./LowerNavbar.module.css"

export default function LowerNavbar() {
    return (
        <>
            <div className={styles.main_section}>

                <div className={styles.left_section} >

                    <div className={styles.each_section} >
                        <HamburgerIcon />
                        <h2 style={{ fontWeight: "bold", paddingLeft: "1rem" }} >ALL CATEGORIES</h2>
                    </div>

                    <div className={styles.each_section} >
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="logo" />
                        <p style={{ marginLeft: "0.9rem" }} >Makeup</p>

                    </div>

                    <div className={styles.each_section} >
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="logo" />
                        <h3 style={{ marginLeft: "0.9rem" }} >Hair</h3>
                    </div>

                    <div className={styles.each_section}>
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="logo" />
                        <h3 style={{ marginLeft: "0.9rem" }}>Skin</h3>

                    </div>

                    <div className={styles.each_section}>
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="logo" />
                        <h3 style={{ marginLeft: "0.9rem" }}>Personal Care</h3>

                    </div>

                    <div className={styles.each_section}>
                        <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="logo" />
                        <h3 style={{ marginLeft: "0.9rem" }}>Mom & Baby Care</h3>

                    </div>

                    <div className={styles.each_section}>
                        <img src="https://www.beautybebo.com/pub/media/fragrance.png" alt="logo" />
                        <h3 style={{ marginLeft: "0.9rem" }}>Fragrance</h3>

                    </div>

                    <div className={styles.each_section}>
                        <img src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="logo" />
                        <h3 style={{ marginLeft: "0.9rem" }}>Ayurveda</h3>

                    </div>

                </div>

                <div>
                    <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg" alt="Banner" />
                </div>

            </div>
        </>
    )
}