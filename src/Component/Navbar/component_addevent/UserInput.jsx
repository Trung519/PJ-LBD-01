import Input from './Input.jsx';
export default function UserInput({ userInput, onChange, onSubmit }) {

    return (
        <form id="user-input">
            <div className="input-group">
                <p>
            <Input type="text"
                        required
                        name="productName"
                        value={userInput.productName}
                        onChange={onChange}
                        label="Tên sản phẩm"
                    />

                </p>
                <p>
                    
                    <Input type="number"
                        required
                        name="productPrice"
                        value={userInput.productPrice} onChange={onChange}
                        label="Giá sản phẩm"
                    />
                </p>
                <p>
                    <Input type="number"
                        required
                        name="productQuantity"
                        value={userInput.productQuantity}
                        onChange={onChange} 
                        label="Số lượng sản phẩm"/>
                </p>
                
            </div>
            <div>
                    <button className="btn" onClick={onSubmit}>Submit</button>
                </div>
        </form>
    )
}