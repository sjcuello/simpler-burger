import { useState } from "react"
import Modal from "../Modal"

const ProductModal = () => {

    const [active, setActive] = useState(true)
    const toggle = () => {
        setActive(!active)
    }

    return (
        <Modal active={active} toggle={toggle}>
            <h1>holaaaaaa</h1>
        </Modal>
    )
}
export default ProductModal