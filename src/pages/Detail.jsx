import { useParams } from "react-router-dom";

function Detail(props) {
    let {id} = useParams();
    let item = props.itemData.find(function(propsItem){ //배열에서 하나씩 꺼내는 파람
        return propsItem.id == id;
    })
    return (
        <ul className="item-container">
            <li className='shop-item'>
                <img src={item.imageUrl} alt='No Image'></img>
                <h4>{item.title}</h4>
                <div>{item.content}</div>
                <div>{item.price}$</div>
                <button className="btn btn-danger">주문하기</button>
            </li>
        </ul>
    );
}

export default Detail;