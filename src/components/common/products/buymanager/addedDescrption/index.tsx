
const AddedDescription: React.FC = () => {


    return (
        <div className="flex justify-between items-center">
            <div>
                <span className="p-1 m-1 rounded-sm  text-center text-violet-500 drop-shadow hover:text-violet-600 active:text-violet-700 focus:ring">
                    به سبد خرید اضافه شد
                </span>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <button className="p-1 m-1 rounded-sm  text-center border border-violet-500 text-violet-500 drop-shadow hover:text-violet-600 active:text-violet-700 focus:ring">مشاهده سبد خرید</button>
                </div>
            </div>
        </div>
    )
}

export default AddedDescription;