const checkout = ({ inCart }) => {
    return <div className="flex-col items-center flex">
        <h2 className="font-semibold underline">Checkout</h2>
        <h3>this is what you have in cart</h3>
        <table className="border-seperate border bg-cyan-800 text-white rounded-md text-center font-extralight  border-white w-1/2 text-xs  ">
            <thead>
                <tr>
                    <th className="border border-white p-4">Name</th>
                    <th className="border border-white p-4">Quantity</th>
                    <th className="border border-white p-4">Unitary Price</th>
                    <th className="border border-white p-4">Price</th>
                </tr>
            </thead>
            <tbody>

                {inCart.map(product => {
                    return <>
                        <tr>
                            <td className="border border-white bg-cyan-700 p-2">{product.title}</td>
                            <td className="border border-white bg-cyan-700 p-2">{product.quantity}</td>
                            <td className="border border-white bg-cyan-700 p-2">{product.price}$</td>
                            <td className="border border-white bg-cyan-700 p-2">{product.price * product.quantity}$</td>
                        </tr>

                    </>
                })}
                <tr >
                    <td className="text-right text-base font-normal p-2 " colSpan={4}>
                        Total {inCart.reduce((total, product) => { return total += product.price * product.quantity }, 0)}$
                    </td>
                </tr>

            </tbody>
        </table>
        <div >
            <h4 className="inline mr-1">Do you wish to proceed?</h4>
            <button className="bg-red-600 active:scale-95  text-white text-sm px-2 py-1 rounded-md">Yes</button>
        </div>
    </div>
}

export default checkout;