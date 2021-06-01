import styles from './Input.module.css'

const Input = (props) => {
    return (
        <section className={styles.Section}>
            <input type="search" onChange={props.onInputFunction} />
        </section>
    )
}
export default Input;
