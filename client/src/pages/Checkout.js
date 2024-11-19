const checkout = ({ inCart }) => {
    return <div className="flex-col items-center flex">
        <h2 className="font-semibold underline">Checkout</h2>
        <h3>this is what you have in cart</h3>
        <table className="border-seperate border bg-cyan-800 text-white rounded-md text-center font-extralight  border-white w-1/2 text-xs  ">
            <thead>
                <tr>
                    <th className="border border-white p-4">Name</th>
                    <th className="border border-white p-4">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {inCart.map(product => {
                    return <>
                        <tr>
                            <td className="border border-white bg-cyan-700 p-2">{product.name}</td>
                            <td className="border border-white bg-cyan-700 p-2">{product.quantity}</td>
                        </tr>
                    </>
                })}
            </tbody>
        </table>
        <div >
            <h4 className="inline mr-1">Do you wish to proceed?</h4>
            <button className="bg-orange-400  text-white text-xs px-2 py-1 rounded-md">Yes</button>
        </div>
    </div>
}

export default checkout;