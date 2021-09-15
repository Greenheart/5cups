export default function Cup({ type, value = 30 }) {
    return (
        <div className="flex flex-col items-center">
            <div className="h-24 w-14 2xs:h-24 2xs:w-16 sm:h-32 sm:w-20 bg-white shadow-md rounded-md mb-4 flex flex-col justify-end">
                {value ? (
                    <div
                        className="bg-blue-400 rounded-t-none rounded-b-md shadow-sm"
                        style={{ height: value + '%' }}
                    />
                ) : null}
            </div>
            {type}
        </div>
    )
}
