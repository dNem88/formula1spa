import React, {Fragment} from 'react'
import styles from './layout.module.css'
import News from '../news/News'

function Layout(props) {
    return (
        <Fragment>
            <section className={styles['trending']}>

            </section>
            <section className={styles['news']}>
                < News  content = {
                    'Dani Nemski is supercool'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/HaasVF22Launch/MAZ%20Top.jpg.transform/6col/image.jpg'
                }
                />
                < News content = {
                    'Dani Nemski is supercool'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/HaasVF22Launch/MAZ%20Top.jpg.transform/6col/image.jpg'
                }
                />
                < News content = {
                    'Dani Nemski is supercool'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/HaasVF22Launch/MAZ%20Top.jpg.transform/6col/image.jpg'
                }
                />
                < News content = {
                    'Dani Nemski is supercool'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/HaasVF22Launch/MAZ%20Top.jpg.transform/6col/image.jpg'
                }
                />
            </section>
            <fieldset className={styles['editor-pick']}>
                <legend className={styles['editor-legend']}>EDITOR'S PICK</legend>
            </fieldset>
            <h2 className={styles['h-news']}>More news</h2>
            <section className={styles['more-news']}>
                < News hoverChange={true} content = {
                    'Bottas and Hamilton greatest strength after their 5 years in Mercedes'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterJanuary/GettyImages-1234043233.jpg.transform/6col/image.jpg'
                }
                />
                < News hoverChange = {
                    true
                }
                content = {
                    'Bottas and Hamilton greatest strength after their 5 years in Mercedes'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterJanuary/GettyImages-1234043233.jpg.transform/6col/image.jpg'
                }
                />
                < News hoverChange = {
                    true
                }
                content = {
                    'Bottas and Hamilton greatest strength after their 5 years in Mercedes'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterJanuary/GettyImages-1234043233.jpg.transform/6col/image.jpg'
                }
                />
                < News hoverChange={true} content = {
                    'Bottas and Hamilton greatest strength after their 5 years in Mercedes'
                }
                imageUrl = {
                    'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/WinterJanuary/GettyImages-1234043233.jpg.transform/6col/image.jpg'
                }
                />
               
            </section>
            <section className={styles['schedule']}>

            </section>
            <section className={styles['standings']}>

            </section>
        </Fragment>
    )
}

export default Layout