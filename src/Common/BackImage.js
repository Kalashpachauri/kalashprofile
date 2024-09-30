import MyImage from '../Assets/Images/Bitmoji.png';

export default function BackImage() {
    return (
        <>
            <div className="d-flex justify-content-center mt-3">
                <img
                    className="bg-white rounded-circle m-0 p-0"
                    src={MyImage} width="80" height="80" alt=""
                />
            </div>
        </>
    )
}