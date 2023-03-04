const Card = (props) => {
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 mb-8">
            <img src={props.thumbnail} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{props.category}</span>
                <h2 className="text-xl font-semibold tracking-wide">{props.title}</h2>
            </div>
            <p className="dark:text-gray-100">
                {props.description}
            </p>
        </div>
    )
}

export default Card