import la from '../assets/2408000.png';
import './NewHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function NewHome() {
    return (
        <>
            <div className="grid-container">
                <div className="text-home">
                    <h1>Đoàn hội</h1>
                    <h1 id='cse'>CSE </h1>
                    <p>Đoàn hội CSE cam kết mang đến những sự kiện đa dạng và phong phú, từ những buổi hội thảo chuyên đề về công nghệ mới, đến các hoạt động văn nghệ, thể thao và xã hội.</p>
                    <input placeholder='Tìm kiếm sự kiện' ></input>
                    <FontAwesomeIcon icon={faArrowRight} style={{color: "#ff8d0a",}} />
                </div>
                <div className="image-home">
                    <img  src={la} alt="home" />
                </div>
            </div>
        </>
    )
}