export default function UserInput({ userInput, onChange, onSubmit }) {

    return (
        <form id="user-input">
            <div className="input-group">
                <p>
                    <label>Tên sản phẩm</label>

                    <input type="text"
                        required
                        name="productName"
                        value={userInput.productName}
                        onChange={onChange}
                    />

                </p>
                <p>
                    <label>Giá</label>
                    <input type="number"
                        required
                        name="productPrice"
                        value={userInput.productPrice} onChange={onChange}
                    />
                </p>
                <p>
                    <label>Số lượng</label>
                    <input type="number"
                        required
                        name="productQuantity"
                        value={userInput.productQuantity}
                        onChange={onChange} />
                </p>
                <div className="container-vertifyall">
                    <button className="btn" onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </form>
    )
}