import { useRef } from "react";

const Filter = ({ setFilter }) => {
    const inputRef = useRef(null)


    const handleChange = () => {
        setFilter(filter => { return { ...filter, title: inputRef.current.value } })
    }
    return <>
        <input className="self-end" style={{ borderBottom: "1px solid black" }} type="text" name="title" id="title"
            placeholder="Search by name" ref={inputRef} onChange={() => handleChange()} />

    </>
}

export default Filter;