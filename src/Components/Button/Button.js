// styles declared with html tags will be shared in all components
import styles from './Button.module.css'

const Button = props => {

    // However, when we pass objects into functions as arguments we 
    // can do this at the point when we pass the object in, so that 
    // these variables are available to use immediately within the function.
    let { onClickFunction, val } = props;

    return(
        <section className={styles.Section}>
            <button onClick={onClickFunction} >{val}</button>
        </section>
    )
}

export default Button;